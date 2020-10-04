export function setToken(key, data) {
    if (!window.localStorage) {
      return;
    }
  
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      return undefined;
    }
  }
  
  export function getToken(key) {
    if (!window.localStorage) {
      return;
    }
  
    try {
      const data = JSON.parse(localStorage.getItem(key));
  
      if (data) {
        return data;
      }
  
      return null;
    } catch (error) {
      return undefined;
    }
  }
  
  export function removeToken(key) {
    if (!window.localStorage) {
      return;
    }
  
    try {
      localStorage.removeItem(key);
    } catch (error) {
      return undefined;
    }
  }
  