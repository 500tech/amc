import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable()
export class ServerApi {
  constructor(private http:Http) { }

  private get(url) {
    return this.http.get(`${environment.baseUrl}/${url}`)
      .map((res) => res.json());
      // .catch(...)
  }

  getAmcData() {
    return this.get('Notifications');
  }

}
