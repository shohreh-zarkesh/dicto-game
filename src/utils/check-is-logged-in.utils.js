export function  checkIsLoggedIn()
{
    return !!window.localStorage.getItem("token")
}