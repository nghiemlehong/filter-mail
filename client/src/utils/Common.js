export const getToken = () => {
    return sessionStorage.getItem('token') || null;
}

export const removeToken = () => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
}

export const setToken = token => {
    sessionStorage.setItem('token', token)
}