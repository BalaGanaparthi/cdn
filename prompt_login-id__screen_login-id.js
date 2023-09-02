var jsAvailableElement = getElementByXpath(XPATH_LOGIN_ID__JS_AVAILABLE);
const jsAvailable = jsAvailableElement.getAttribute("value");
const appName = "{{application.name}}";

var pwdlessCountryCodeButton = getElementByXpath(XPATH_LOGIN_ID__COUNTRYCODE_BUTTON);

if(pwdlessCountryCodeButton != null){
    pwdlessCountryCodeButton.parentElement.parentElement.appendChild(pwdlessCountryCodeButton)
}

// if (jsAvailable) {
//     populateUserFromCookie(COOKIE_NAME__LOGGED_IN_ACCT, XPATH_LOGIN_ID__USERNAME)

//     var anchorElement = getElementByXpath(XPATH_LOGIN_ID__CONTINUE_BUTTON);
//     addPasswordInput(anchorElement);
//     addRememberMeCheckbox(anchorElement);
//     overrideButtonClicked(anchorElement);

//     //https://webauthn.me/browser-support
//     var webAuthNAvailableElement = getElementByXpath(XPATH_LOGIN_ID__WEBAUTHN_AVAILABLE);
//     var webAuthNPlatformAvailableElement = getElementByXpath(XPATH_LOGIN_ID__WEBAUTHN_PLATFORM_AVAILABLE);
//     const webAuthNAvailable = webAuthNAvailableElement.getAttribute("value"); // Hardware Authenticators / Roaming Biometrics.. like yubikeys
//     const webAuthNPlatformAvailable = webAuthNPlatformAvailableElement.getAttribute("value"); // Platform Biometrics.. like macOS Touch ID
//     if (webAuthNAvailable || webAuthNPlatformAvailable) { //Display only when webauthN (hardware || platform) is supported  
//         addLoginWithBiometricsLink();
//     }
// }
