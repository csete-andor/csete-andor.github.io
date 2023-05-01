function register(username, email){

    document.cookie = "Username="+username+"; expires=Thu, 01 Jan 2024 00:00:00 UTC; path=login.html";
    document.cookie = "email="+email+"; expires=Thu, 01 Jan 2024 00:00:00 UTC; path=login.html";
}