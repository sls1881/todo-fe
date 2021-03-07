const USER = 'USER'

//Function to set user in local storage
export function setUserToLocalStorage(user) {
    localStorage.setItem(USER, JSON.stringify(user))
}

//Function to get a user object from local storage
export function getUserFromLocalStorage() {
    const user = localStorage.getItem(USER)

    if (user) return JSON.parse(user);

    return {}
}
