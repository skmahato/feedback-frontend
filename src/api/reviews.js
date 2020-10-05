import ajax from './ajax';

/* eslint-disable import/prefer-default-export */
export function requestReviews(dealershipId) {
  return ajax(`/api/dealerships${dealershipId}/reviews`);
}

export function createReviews(data, dealershipId) {
  return ajax(`/api/dealerships/${id}/reviews`, { method: 'POST', data });
}

export function updateReviews(data, dealershipId, id) {
    return ajax(`/api/dealerships/${dealershipId}/reviews/${id}`, { method: 'PATCH', data });
}

export function deleteReviews(dealershipId, id) {
    return ajax(`/api/dealerships/${dealershipId}/reviews/${id}`, { method: 'DELETE' });
}
