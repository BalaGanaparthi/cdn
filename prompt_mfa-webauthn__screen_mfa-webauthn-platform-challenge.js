
var pwd = getCookie(COOKIE_NAME__PASSWORD);
console.log("Password from cookie [" + COOKIE_NAME__PASSWORD + "] is [" + pwd + "]" )

if(pwd != null && pwd != ""){
  var mainElement = getElementByXpath(XPATH_MFA_WEBAUTHN_PLATFORM_CHALLENGE__MAIN);
  mainElement.style.display = 'none'

  // deleteCookie(COOKIE_NAME__PASSWORD);

  var userPasswordButtonElement = getElementByXpath(XPATH_MFA_WEBAUTHN_PLATFORM_CHALLENGE__USE_PASSWORD_BUTTON);
  userPasswordButtonElement.click()
}else{
  var userPasswordButtonElement = getElementByXpath(XPATH_MFA_WEBAUTHN_PLATFORM_CHALLENGE__CONTINUE_BUTTON);
  userPasswordButtonElement.click()
}
 