import { createSelector } from 'reselect';

const reviewEntities = state => state.entities.reviews;
const reviewIds = state => state.reviews.ids;
const userEntities = state => state.entities.users;

export const reviewSelector = createSelector([reviewEntities, reviewIds, userEntities], (entities, ids, users) => ids.map(id => {
    const entity = entities[id];
    const user = users[entity.id];
    const reviewWithUser = { ...entity, user };

    return reviewWithUser;
}));

export default reviewSelector;
