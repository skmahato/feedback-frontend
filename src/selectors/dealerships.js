import { createSelector } from 'reselect';

const dealershipEntities = state => state.entities.dealerships;
const dealershipIds = state => state.dealerships.ids;

export const dealershipsSelector = createSelector([dealershipEntities, dealershipIds], (entities, ids) => ids.map(id => entities[id]));

export default dealershipsSelector;
