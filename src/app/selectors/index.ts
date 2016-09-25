import { IRootState } from '../reducers';

export function getTicketList(state:IRootState) {
  const userDetails = state.amcData.UserDetails;
  const ticketList = Object.keys(userDetails).map((accountId) => {
    return Object.assign({}, userDetails[accountId], {accountId});
  })

  return ticketList;
}
