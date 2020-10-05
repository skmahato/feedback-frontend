import { createSelector } from 'reselect';

const dealershipEntities = state => state.entities.dealerships;
const dealershipIds = state => state.dealerships.ids;

const reviewsEntities = state => state.entities.reviews;
const dealershipEntityReviewIds = (state, id) => state.entities.dealerships[id].reviews.map(f => parseInt(f.id, 10))

export const dealershipsSelector = createSelector([dealershipEntities, dealershipIds], (entities, ids) => ids.map(id => entities[id]));

export const dealershipReviewSelector = createSelector([reviewsEntities, dealershipEntityReviewIds], (entites, ids) => ids.map(id => entites[id]))

export default dealershipsSelector;
