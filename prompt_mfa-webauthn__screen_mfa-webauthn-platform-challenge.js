
var pwd = getCookie(COOKIE_NAME__PASSWORD);

if(pwd != null && pwd != ""){
  var mainElement = getElementByXpath(XPATH_MFA_WEBAUTHN_PLATFORM_CHALLENGE__MAIN);
  mainElement.style.display = 'none'

  var userPasswordButtonElement = getElementByXpath(XPATH_MFA_WEBAUTHN_PLATFORM_CHALLENGE__USE_PASSWORD_BUTTON);
  userPasswordButtonElement.click()
}
 