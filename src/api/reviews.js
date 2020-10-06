import ajax from './ajax';

/* eslint-disable import/prefer-default-export */
export function requestReviews(dealershipId) {
  return ajax(`/api/dealerships${dealershipId}/reviews`);
}

export function createReview(data, dealershipId) {
  return ajax(`/api/dealerships/${dealershipId}/reviews`, { method: 'POST', data });
}

export function updateReview(data, dealershipId, id) {
    return ajax(`/api/dealerships/${dealershipId}/reviews/${id}`, { method: 'PATCH', data });
}

export function deleteReview(dealershipId, id) {
    return ajax(`/api/dealerships/${dealershipId}/reviews/${id}`, { method: 'DELETE' });
}

export function createReviewFromIframe(data) {
  return ajax(`/`, { method: 'POST', data });
}