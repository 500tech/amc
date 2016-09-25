import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { environment } from '../environments/environment';

// components:
import { AppComponent } from './app.component';
import { MainPanelComponent } from './mainPanel/main-panel/main-panel.component';
import { DetailsPanelComponent } from './detailsPanel/details-panel/details-panel.component';
import { MainPanelHeaderComponent } from './mainPanel/main-panel-header/main-panel-header.component';
import { MainPanelActionBarComponent } from './mainPanel/main-panel-action-bar/main-panel-action-bar.component';
import { TicketListComponent } from './mainPanel/ticket-list/ticket-list.component';
import { TicketComponent } from './mainPanel/ticket/ticket.component';

// services:
import { ServerApi } from './services/server-api.service';

// redux:
import { NgRedux, NgReduxModule, DevToolsExtension } from 'ng2-redux';
import { IRootState, rootReducer } from './reducers';
import { UiActions } from './actions/ui.actions';
import { AmcDataActions } from './actions/amc-data.actions';

@NgModule({
  declarations: [
    AppComponent,
    MainPanelComponent,
    DetailsPanelComponent,
    MainPanelHeaderComponent,
    MainPanelActionBarComponent,
    TicketListComponent,
    TicketComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgReduxModule
  ],
  providers: [
    ServerApi,
    UiActions,
    AmcDataActions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(ngRedux: NgRedux<any>, private devTools: DevToolsExtension) {
    let enhancers = [];
    // ... add whatever other enhancers you want.

    // You probably only want to expose this tool in devMode.
    if (!environment.production && devTools.isEnabled()) {
      enhancers = [ ...enhancers, devTools.enhancer() ];
    }

    ngRedux.configureStore(
      rootReducer,
      {},
      [],
      enhancers);
  }  
}
