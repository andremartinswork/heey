const getCookie = (cname) => {
  if (process.browser) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
}

const setCookie = (cname, cvalue, exdays) => {
  if (process.browser) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
}

const checkCookie = (cname) => {
  if (process.browser) {
    var cookie = getCookie(cname);
    if (cookie != "") {
      return cookie
    } else {
      return false
    }
  }
}

export {
  getCookie,
  setCookie,
  checkCookie
}
