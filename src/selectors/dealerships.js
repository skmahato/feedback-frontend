import { createSelector } from 'reselect';

const dealershipEntities = state => state.entities.dealerships;
const dealershipIds = state => state.dealerships.ids;

const reviewsEntities = state => state.entities.reviews;
const dealershipEntityReviewIds = (state, id) => state.entities.dealerships[id].reviews.map(f => parseInt(f.id, 10));

const userEntities = state => state.entities.users;

export const dealershipsSelector = createSelector([dealershipEntities, dealershipIds], (entities, ids) => ids.map(id => entities[id]));

export const dealershipReviewSelector = createSelector([reviewsEntities, dealershipEntityReviewIds, userEntities], (entites, ids, users) => ids.map(id => {
    const entity = entites[id];
    const user = users[entity.user.id];
    const reviewWithUser = { ...entity, user };
    return reviewWithUser;
}))

export default dealershipsSelector;
