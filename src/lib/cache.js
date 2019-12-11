export const ssSet = (key, val) => sessionStorage.setItem(key, JSON.stringify(val))

export const ssGet = key => JSON.parse(sessionStorage.getItem(key))

export const lsSet = (key, val) => localStorage.setItem(key, JSON.stringify(val))

export const lsGet = key => JSON.parse(localStorage.getItem(key))
