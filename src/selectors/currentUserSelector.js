import { createSelector } from 'reselect';

const currentUserEntitiy = state => state.entities.users;
const currentUserId = state => state.currentUser.id;

export const currentUserSelector = createSelector([currentUserEntitiy, currentUserId], (entity, id) => entity[id]);

export default currentUserSelector;
