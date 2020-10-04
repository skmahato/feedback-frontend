import ajax from './ajax';

/* eslint-disable import/prefer-default-export */
export function requestLogin(data) {
  return ajax('/api/login/', { method: 'POST', data });
}
