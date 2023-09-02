const COOKIE_NAME__LOGGED_IN_ACCT = "loggedInAccount";
const COOKIE_NAME__TEMP_LOGGED_IN_ACCT = "temploggedInAccount";
const COOKIE_NAME__PASSWORD = "pwd";

const CONST_LOGIN_ID__PARENT_DIV_ID = "parentDivElementID"
const CONST_LOGIN_ID__PARENT_DIV_NAME = "parentDivElementName"
const CONST_LOGIN_ID__BIOMETRIC_DIV_ID = "biometricDivElementID"
const CONST_LOGIN_ID__BIOMETRIC_DIV_NAME = "biometricDivElementName"
const CONST_LOGIN_ID__BIOMETRIC_LINE_DIV_ID = "biometricLineDivElementID"
const CONST_LOGIN_ID__BIOMETRIC_LINE_DIV_NAME = "biometricLineDivElementName"
const CONST_LOGIN_ID__PASSWORD_LINE_DIV_ID = "passwordLineDivElementID"
const CONST_LOGIN_ID__PASSWORD_LINE_DIV_NAME = "passwordLineDivElementName"
const CONST_LOGIN_ID__RETURN_TO_PWD_DIV_ID = "returnToPwdDivElementID"
const CONST_LOGIN_ID__RETURN_TO_PWD_DIV_NAME = "returnToPwdDivElementName"
const CONST_LOGIN_ID__REMEMBER_ME_DIV_ID = "rememberMeDivElementID"
const CONST_LOGIN_ID__REMEMBER_ME_DIV_NAME = "rememberMeDivElementName"

//Custom built elements
const XPATH_LOGIN_ID__BIOMETRICS_DIV = "//*[@id='biometricDivElementID']";
const XPATH_LOGIN_ID__BIOMETRICS_LINE_DIV = "//*[@id='biometricLineDivElementID']";
const XPATH_LOGIN_ID__PASSWORD_LINE_DIV = "//*[@id='passwordLineDivElementID']";
const XPATH_LOGIN_ID__RETURN_LINK_DIV = "//*[@id='returnToPwdDivElementID']"
const XPATH_LOGIN_ID__REMEMBER_ME_DIV = "//*[@id='rememberMeDivElementID']"
const XPATH_LOGIN_ID__PARENT_DIV = "//*[@id='parentDivElementID']"

//Auth0 elements
const XPATH_LOGIN_ID__P_LOGIN_TO_TENANT = "//header/div/p" // Config custom text as space and remove the reliance on this xpath.
const XPATH_LOGIN_ID__MAIN = "/html/body/main";
const XPATH_LOGIN_ID__USERNAME = "//input[@id='username']";
const XPATH_LOGIN_ID__PASSWORD = "//input[@id='password']";
const XPATH_LOGIN_ID__REMEMBERME = "//input[@id='cvs_rememberme_id']";
const XPATH_LOGIN_ID__FORM = "//form[contains(@class,'_form-login-id')]";
const XPATH_LOGIN_ID__CONTINUE_BUTTON = "//button[@data-action-button-primary='true' and contains(text(), 'Continue')]"

//button[@data-action-button-primary='true' ]
//button[contains(text(), 'Continue')]

//Always there will be No risk, but the element defined are Low Risk : Can't

// 1. Public Tenant < 
// 2. Priavte Tenant Lower Env []
// 3. Private tenent Prod Env 

const XPATH_LOGIN_ID__WEBAUTHN_AVAILABLE = "//*[@id='webauthn-available']"
const XPATH_LOGIN_ID__WEBAUTHN_PLATFORM_AVAILABLE = "//*[@id='webauthn-platform-available']"
const XPATH_LOGIN_ID__JS_AVAILABLE = "//*[@id='js-available']"
const XPATH_LOGIN_ID__DIV_USERNAME = "//div[@data-dynamic-label-for='username']"
const XPATH_LOGIN_ID__COUNTRYCODE_BUTTON = "//button[@value='pick-country-code']"; 

const XPATH_LOGIN_PWD__MAIN = "/html/body/main";
const XPATH_LOGIN_PWD__PASSWORD = "//input[@id='password']";
const XPATH_LOGIN_PWD__FORM = "//form[contains(@class,'_form-login-password')]";
const XPATH_LOGIN_PWD__ERROR = "//*[@id='error-element-password']";

const XPATH_MFA_WEBAUTHN_PLATFORM_CHALLENGE__USE_PASSWORD_BUTTON = "//form/button[@value='pick-authenticator']"
const XPATH_MFA_WEBAUTHN_PLATFORM_CHALLENGE__MAIN = "/html/body/main";
const XPATH_MFA_WEBAUTHN_PLATFORM_CHALLENGE__CONTINUE_BUTTON = "//button[contains(text(), 'Continue')]"

function getElementByXpath(path) {
    return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

function insertAfterElement(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

function setCookie(cname, cvalue, exdays) {
    // https://developer.chrome.com/blog/cookie-max-age-expires/
    var expires = "expires=" + (new Date(Date.now() + (exdays * 86400 * 1000) )).toUTCString();
    document.cookie = cname + "=" + cvalue + "; SameSite=Strict; Secure; " + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function deleteCookie(cname) {
    // https://developer.chrome.com/blog/cookie-max-age-expires/
    var expiresInPast = "expires=" + (new Date(Date.now() - (10 * 86400 * 1000))).toUTCString();
    document.cookie = cname + "=" + "; SameSite=Strict; Secure; " + expiresInPast + ";path=/";
}

function populateUserFromCookie(name, xpath) {
    var element = getElementByXpath(xpath);
    if (element != null) {
        var storedUserName = getCookie(name);
        element.value = storedUserName;
    }
}

function addLoginWithBiometricsLink() {

    var biometricDivElement = document.createElement("div");
    biometricDivElement.setAttribute("id", CONST_LOGIN_ID__BIOMETRIC_DIV_ID);
    biometricDivElement.setAttribute("name", CONST_LOGIN_ID__BIOMETRIC_DIV_NAME);
    biometricDivElement.setAttribute("_ngcontent", '')
    biometricDivElement.setAttribute("class", 'biometric-container')

    const aBiometrics = document.createElement("a");
    aBiometrics.setAttribute("href", "javascript:void(0);");
    aBiometrics.setAttribute("onclick", "biometricsLinkOnClick()");
    aBiometrics.setAttribute("class", "cvs-biometric-login-link")
    const imageBiometrics = document.createElement("img");
    imageBiometrics.setAttribute("src", "https://www.cvsspecialty.com/fastproxy/ngx-specialty/assets/images/biometric-icon.svg")
    imageBiometrics.setAttribute("alt", "Fingerprint")
    const spanBiometrics = document.createElement("span");
    spanBiometrics.setAttribute("style", "padding-left: 0.5em; padding-right: 0.5em;");
    const spanBiometricsText = document.createTextNode("Sign in without a password");
    spanBiometrics.appendChild(spanBiometricsText);
    const imageSelect = document.createElement("img");
    imageSelect.setAttribute("src", "https://www.cvsspecialty.com/fastproxy/ngx-specialty/assets/images/select-icon.svg")
    imageSelect.setAttribute("alt", "select-icon")

    aBiometrics.appendChild(imageBiometrics)
    aBiometrics.appendChild(spanBiometrics);
    aBiometrics.appendChild(imageSelect);
    biometricDivElement.appendChild(aBiometrics);

    var lineBreakDiv = document.createElement("div");
    lineBreakDiv.setAttribute("class", 'ca139301f')
    lineBreakDiv.setAttribute("id", CONST_LOGIN_ID__BIOMETRIC_LINE_DIV_ID);
    lineBreakDiv.setAttribute("name", CONST_LOGIN_ID__BIOMETRIC_LINE_DIV_NAME);
    var lineBreakSpan = document.createElement("span");
    var orText = document.createTextNode("Or");
    lineBreakSpan.appendChild(orText);
    lineBreakDiv.appendChild(lineBreakSpan)

    var pElement = getElementByXpath(XPATH_LOGIN_ID__P_LOGIN_TO_TENANT);
    pElement.parentNode.insertBefore(biometricDivElement, pElement);
    pElement.parentNode.insertBefore(lineBreakDiv, pElement);
    pElement.style.display = 'none'

}

function addPasswordInput(anchorElement) {

    //
    var parentDivElement = document.createElement("div");
    parentDivElement.setAttribute("class", "input-wrapper _input-wrapper");
    parentDivElement.setAttribute("id", CONST_LOGIN_ID__PARENT_DIV_ID);
    parentDivElement.setAttribute("name", CONST_LOGIN_ID__PARENT_DIV_NAME);
    //
    var childDivElement = document.createElement("div");
    childDivElement.setAttribute("class", "password");
    childDivElement.setAttribute("data-action-text", "");
    childDivElement.setAttribute("data-alternate-action-text", "");
    //
    var passwordElement = document.createElement("input");
    passwordElement.setAttribute("id", "password")
    passwordElement.setAttribute("name", "password")
    passwordElement.setAttribute("class", "input")
    passwordElement.setAttribute("type", "password")
    passwordElement.setAttribute("required", "")
    passwordElement.setAttribute("autocomplete", "current-password")
    passwordElement.setAttribute("autocapitalize", "none")
    passwordElement.setAttribute("spellcheck", "false")
    passwordElement.setAttribute("autofocus", "")
    // //
    // var passwordLabelElement = document.createElement("label");
    // passwordLabelElement.setAttribute("class", "no-js")
    // passwordLabelElement.setAttribute("for", "password")
    // var passwordLabelTextElement = document.createTextNode(" Password ");
    // passwordLabelElement.appendChild(passwordLabelTextElement);
    // //
    // var passwordDivElement = document.createElement("div");
    // passwordDivElement.setAttribute("class", "js-required");
    // passwordDivElement.setAttribute("data-dynamic-label-for", "password");
    // passwordDivElement.setAttribute("aria-hidden", "true");
    // var passwordDivTextElement = document.createTextNode(" Password ");
    // passwordDivElement.appendChild(passwordDivTextElement);
    // //
    // var passwordToggleButtonElement = document.createElement("button");
    // passwordToggleButtonElement.setAttribute("type", "button");
    // passwordToggleButtonElement.setAttribute("class", "ulp-button-icon _button-icon");
    // // passwordToggleButtonElement.setAttribute("class","cf1ef5a0b ulp-button-icon c9f67a967 _button-icon");
    // passwordToggleButtonElement.setAttribute("data-action", "toggle");
    // //
    // var passwordToggleShowSpanElement = document.createElement("span");
    // passwordToggleShowSpanElement.setAttribute("aria-hidden", "true");
    // passwordToggleShowSpanElement.setAttribute("class", "password-icon-tooltip show-password-tooltip");
    // var passwordToggleShowSpanTextElement = document.createTextNode("Show password");
    // passwordToggleShowSpanElement.appendChild(passwordToggleShowSpanTextElement);
    // //
    // var passwordToggleHideSpanElement = document.createElement("span");
    // passwordToggleHideSpanElement.setAttribute("aria-hidden", "true");
    // passwordToggleHideSpanElement.setAttribute("class", "password-icon-tooltip hide-password-tooltip hide");
    // var passwordToggleHideSpanTextElement = document.createTextNode("Hide password");
    // passwordToggleHideSpanElement.appendChild(passwordToggleHideSpanTextElement);
    // //
    // var passwordToggleShowSRSpanElement = document.createElement("span");
    // passwordToggleShowSRSpanElement.setAttribute("data-label", "show-password");
    // passwordToggleShowSRSpanElement.setAttribute("class", "screen-reader-only password-toggle-label");
    // var passwordToggleShowSRSpanTextElement = document.createTextNode("Show password");
    // passwordToggleShowSRSpanElement.appendChild(passwordToggleShowSRSpanTextElement);
    // //
    // var passwordToggleHideSRSpanElement = document.createElement("span");
    // passwordToggleHideSRSpanElement.setAttribute("data-label", "hide-password");
    // passwordToggleHideSRSpanElement.setAttribute("class", "screen-reader-only password-toggle-label hide");
    // var passwordToggleHideSRSpanTextElement = document.createTextNode("Hide password");
    // passwordToggleHideSRSpanElement.appendChild(passwordToggleHideSRSpanTextElement);
    // //
    // var passwordSpanElement = document.createElement("span");
    // passwordSpanElement.setAttribute("aria-hidden", "true");
    // passwordSpanElement.setAttribute("class", "password js-required");
    // // passwordSpanElement.setAttribute("class","cf12e1c5c password js-required");
    // //
    // passwordToggleButtonElement.appendChild(passwordToggleShowSpanElement);
    // passwordToggleButtonElement.appendChild(passwordToggleHideSpanElement);
    // passwordToggleButtonElement.appendChild(passwordToggleShowSRSpanElement);
    // passwordToggleButtonElement.appendChild(passwordToggleHideSRSpanElement);
    // passwordToggleButtonElement.appendChild(passwordSpanElement);
    // //
    // //
    // childDivElement.appendChild(passwordLabelElement);
    childDivElement.appendChild(passwordElement);
    // childDivElement.appendChild(passwordDivElement);
    // childDivElement.appendChild(passwordToggleButtonElement);
    //
    var br = document.createElement("br");
    parentDivElement.appendChild(br)
    parentDivElement.appendChild(childDivElement);

    // anchorElement.parentNode.insertBefore(br, anchorElement);
    anchorElement.parentNode.insertBefore(parentDivElement, anchorElement);

}

function biometricsLinkOnClick() {

    //Remove password input and biometrics link and a <hr>
    var parentDivElement = getElementByXpath(XPATH_LOGIN_ID__PARENT_DIV);
    parentDivElement.parentNode.removeChild(parentDivElement);
    var biometricsDivElement = getElementByXpath(XPATH_LOGIN_ID__BIOMETRICS_DIV);
    biometricsDivElement.parentNode.removeChild(biometricsDivElement);
    var biometricsLineDivElement = getElementByXpath(XPATH_LOGIN_ID__BIOMETRICS_LINE_DIV);
    biometricsLineDivElement.parentNode.removeChild(biometricsLineDivElement);

    //Link to return to login-id screen with password input and biometrics line
    var returnToPwdDivElement = document.createElement("div");
    returnToPwdDivElement.setAttribute("class", "link-container");
    returnToPwdDivElement.setAttribute("id", CONST_LOGIN_ID__RETURN_TO_PWD_DIV_ID);
    returnToPwdDivElement.setAttribute("name", CONST_LOGIN_ID__RETURN_TO_PWD_DIV_NAME);

    const aReturn = document.createElement("a");
    aReturn.setAttribute("href", "javascript:void(0);");
    aReturn.setAttribute("onclick", "returnLinkOnClick()");
    aReturn.setAttribute("class", "black-link")
    const imageReturn = document.createElement("img");
    imageReturn.setAttribute("src", "https://www.cvsspecialty.com/digital-fastproxy/specialty/assets/images/reverse-select-icon.svg")
    imageReturn.setAttribute("alt", "select-icon")
    imageReturn.setAttribute("class", "link-icon")
    const returnText = document.createTextNode("Return to previous screen");
    aReturn.appendChild(imageReturn);
    aReturn.appendChild(returnText);
    returnToPwdDivElement.appendChild(aReturn);

    // var lineBreakDiv = document.createElement("div");
    // lineBreakDiv.setAttribute("class", 'ca139301f')
    // lineBreakDiv.setAttribute("id", CONST_LOGIN_ID__PASSWORD_LINE_DIV_ID);
    // lineBreakDiv.setAttribute("name", CONST_LOGIN_ID__PASSWORD_LINE_DIV_NAME);
    // var lineBreakSpan = document.createElement("span");
    // var orText = document.createTextNode("Or");
    // lineBreakSpan.appendChild(orText);
    // lineBreakDiv.appendChild(lineBreakSpan)

    var pElement = getElementByXpath(XPATH_LOGIN_ID__P_LOGIN_TO_TENANT);
    pElement.style.display = 'none'
    // pElement.parentNode.insertBefore(returnToPwdDivElement, pElement);
    // pElement.parentNode.insertBefore(lineBreakDiv, pElement);

    var continueButtonElement = getElementByXpath(XPATH_LOGIN_ID__CONTINUE_BUTTON);

    insertAfterElement(continueButtonElement, returnToPwdDivElement)

    var divUsernameElement = getElementByXpath(XPATH_LOGIN_ID__DIV_USERNAME);
    var usernameElement = getElementByXpath(XPATH_LOGIN_ID__USERNAME);
    if (usernameElement.value != null && usernameElement.value != "") {
        usernameElement.setAttribute("readonly", "")
        divUsernameElement.style.display = 'none'
    }else{
        if (usernameElement.getAttribute("readonly") != null) {
            usernameElement.removeAttribute("readonly")
        }
        if (divUsernameElement.getAttribute("style") != null) {
            divUsernameElement.removeAttribute("style")
        }
    }

    var remembermeDivElement = getElementByXpath(XPATH_LOGIN_ID__REMEMBER_ME_DIV);
    remembermeDivElement.style.display = 'none'
    // remembermeDivElement.parentNode.removeChild(remembermeDivElement)

}

function returnLinkOnClick() {

    var anchorElement = getElementByXpath(XPATH_LOGIN_ID__REMEMBER_ME_DIV);
    addPasswordInput(anchorElement);

    var continueButtonElement = getElementByXpath(XPATH_LOGIN_ID__CONTINUE_BUTTON);
    overrideButtonClicked(continueButtonElement);

    addLoginWithBiometricsLink();

    var returnLinkElement = getElementByXpath(XPATH_LOGIN_ID__RETURN_LINK_DIV);
    returnLinkElement.parentNode.removeChild(returnLinkElement);

    // var passwordLineElement = getElementByXpath(XPATH_LOGIN_ID__PASSWORD_LINE_DIV);
    // passwordLineElement.parentNode.removeChild(passwordLineElement);

    var usernameElement = getElementByXpath(XPATH_LOGIN_ID__USERNAME);
    if (usernameElement.value != null || usernameElement.value != "") {
        if (usernameElement.getAttribute("readonly") != null) {
            usernameElement.removeAttribute("readonly")
        }
    }

    var divRememberMeElement = getElementByXpath(XPATH_LOGIN_ID__REMEMBER_ME_DIV);
    if (divRememberMeElement.getAttribute("style") != null) {
        divRememberMeElement.removeAttribute("style")
    }

    var divUsernameElement = getElementByXpath(XPATH_LOGIN_ID__DIV_USERNAME);
    if (divUsernameElement.getAttribute("style") != null) {
        divUsernameElement.removeAttribute("style")
    }

    // var anchorElement = getElementByXpath(XPATH_LOGIN_ID__CONTINUE_BUTTON);
    // addRememberMeCheckbox(anchorElement)

}

function addRememberMeCheckbox(anchorElement) {
    var div = document.createElement("div");
    div.setAttribute("id", CONST_LOGIN_ID__REMEMBER_ME_DIV_ID);
    div.setAttribute("name", CONST_LOGIN_ID__REMEMBER_ME_DIV_NAME);
    var br = document.createElement("br");
    var label = document.createElement('label');
    var checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.id = "cvs_rememberme_id";
    checkbox.name = "cvs_rememberme_id";
    checkbox.value = 1;
    label.appendChild(checkbox);
    label.appendChild(document.createTextNode("Remember my email in this browser.\n\tNot recommended on a public device."));
    div.appendChild(br);
    div.appendChild(label);
    anchorElement.parentNode.insertBefore(div, anchorElement);
}

function addQueryParam(element, name, value) {
    if (element != null) {
        element.href = element.href + "&" + name + "=" + value;
    }
}

function getQueryParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

function overrideButtonClicked(anchorElement) {
    anchorElement.onclick = submitButtonClicked
}

function submitButtonClicked(source) {
    var rememberMeCheckbox = getElementByXpath(XPATH_LOGIN_ID__REMEMBERME);
    if (rememberMeCheckbox.checked) {
        var usernameElement = getElementByXpath(XPATH_LOGIN_ID__USERNAME);
        if (usernameElement != null) {
            var userName = usernameElement.value;
            setCookie(COOKIE_NAME__LOGGED_IN_ACCT, userName, 365)
        }
    }

    var passwordElement = getElementByXpath(XPATH_LOGIN_ID__PASSWORD);
    if (passwordElement.value != null && passwordElement.value != "") {
        setCookie(COOKIE_NAME__PASSWORD, passwordElement.value, 1)
        var loginIDFormElement = getElementByXpath(XPATH_LOGIN_ID__FORM);
        loginIDFormElement.submit("Continue");
    }

}

function hideAndSubmitLoginPasswordScreen() {
    // hide main sign-in widget element
    var mainElement = getElementByXpath(XPATH_LOGIN_PWD__MAIN);
    mainElement.style.display = 'none'

    //SubmitForm
    var loginPasswordFormElement = getElementByXpath(XPATH_LOGIN_PWD__FORM);
    loginPasswordFormElement.submit();

}

//Utility Function
function getElementProperties(element) {
    const nodeMap = element.attributes;
    let text = "";
    for (let i = 0; i < nodeMap.length; i++) {
        text += nodeMap[i].name + " = " + nodeMap[i].value + "\n";
    }
    return text;
}
