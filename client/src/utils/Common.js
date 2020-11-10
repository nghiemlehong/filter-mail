export const getName = () => {
   return sessionStorage.getItem('name') || null
}

export const getToken = () => {
    return sessionStorage.getItem('token') || null
}

export const removeSession = () => {
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('name')
}

export const setUserSession = (token, name) => {
    sessionStorage.setItem('token', token)
    sessionStorage.setItem('name', name)
}