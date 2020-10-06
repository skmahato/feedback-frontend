import { createSelector } from 'reselect';
import { isEmpty } from 'lodash';

const currentUserEntitiy = state => state.entities.users;
const currentUserId = state => state.currentUser.id;
const dealershipEntities = state => state.entities.dealerships;
const reviewEntities = state => state.entities.reviews;
const userEntities = state => state.entities.users;

export const currentUserSelector = createSelector([currentUserEntitiy, currentUserId], (entity, id) => entity[id]);
export const currenDealerShip = createSelector([currentUserSelector, dealershipEntities, reviewEntities], (currentUser, entities, reviews) => {
    const entity = entities[currentUser.dealership.id];

    if (!entity) {
        return entity;
    }

    const reviewIds = entity.reviews.map(f => f.id);
    const dealerReviews = reviewIds.map(f => reviews[f]);
    const dealerWithReviews = { ...entity, reviews: dealerReviews };
    return dealerWithReviews;
})

export const currentDealershipWithReviewsAndUsers = createSelector([currenDealerShip, userEntities], (dealership, users) => {
    if (isEmpty(dealership)) {
        return dealership;
    }
    return { ...dealership, reviews: dealership.reviews.map(f => ({ ...f, user: users[f.user.id] })) };
})

export default currentUserSelector;
