var passwordElement = getElementByXpath(XPATH_LOGIN_PWD__PASSWORD);

populateUserFromCookie(COOKIE_NAME__PASSWORD, XPATH_LOGIN_PWD__PASSWORD);
deleteCookie(COOKIE_NAME__PASSWORD);

var passwordErrorElement = getElementByXpath(XPATH_LOGIN_PWD__ERROR);

if (passwordErrorElement == null && passwordElement.value != "") {
  hideAndSubmitLoginPasswordScreen();
}