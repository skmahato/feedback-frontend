import ajax from './ajax';

/* eslint-disable import/prefer-default-export */
export function requestDealerships() {
  return ajax('/api/dealerships');
}

export function createDealership(data) {
  return ajax('/api/dealerships', { method: 'POST', data });
}

export function updateDealership(data, id) {
    return ajax(`/api/dealerships/${id}`, { method: 'PATCH', data });
}

export function deleteDealership(id) {
    return ajax(`/api/dealerships/${id}`, { method: 'DELETE' });
}

export function generateApi(id) {
  return ajax(`/api/dealerships/${id}/generate_api`);
}
