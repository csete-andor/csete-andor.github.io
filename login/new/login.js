function getCookieValue(cookieName) {
    let cookieValue = "";
    if (document.cookie && document.cookie !== '') {
      let cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        if (cookie.substring(0, cookieName.length + 1) === (cookieName + '=')) {
          cookieValue = decodeURIComponent(cookie.substring(cookieName.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  };
function login(username, email){   
    let usernameS =  getCookieValue("username");
    let emailS = getCookieValue("email");
    if (username===usernameS && email===emailS){
        location.replace("?username="+username+"&email="+email)
    }
    else{
        console.log("error (username:"+username+", email:"+email+"stored username and email: "+usernameS+", "+emailS)
    }
}