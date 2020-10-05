import { createSelector } from 'reselect';

const reviewEntities = state => state.entities.reviews;
const reviewIds = state => state.reviews.ids;

export const reviewSelector = createSelector([reviewEntities, reviewIds], (entities, ids) => ids.map(id => entities[id]));

export default reviewSelector;
