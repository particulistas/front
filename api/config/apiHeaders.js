export function getToken() {
    if (process.client) {
      return localStorage.getItem('authToken');
    }
    return null;
  }

export function getName() {
    if (process.client) {
      return localStorage.getItem('authName');
    }
    return null;
  }
export function getEmail() {
    if (process.client) {
      return localStorage.getItem('authEmail');
    }
    return null;
  }
export function getId() {
    if (process.client) {
      return localStorage.getItem('authId');
    }
    return null;
  }