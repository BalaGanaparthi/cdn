var jsAvailableElement = getElementByXpath(XPATH_LOGIN_ID__JS_AVAILABLE);
const jsAvailable = jsAvailableElement.getAttribute("value");
const appName = "{{application.name}}";

var pwdlessCountryCodeButton = getElementByXpath(XPATH_LOGIN_ID__COUNTRYCODE_BUTTON);

if(pwdlessCountryCodeButton != null){

    
    // const formElement = pwdlessCountryCodeButton.parentElement
    // //Remove button from form
    // formElement.removeChild(pwdlessCountryCodeButton)
    // //Move CountryCode Picker button above Form
    // formElement.parentElement.insertBefore(pwdlessCountryCodeButton, formElement)
    // //Remove Form
    // formElement.parentElement.removeChild(formElement)

    //Disable the button
    pwdlessCountryCodeButton.setAttribute("disabled", "")

    //Remove > from the country code button
    var pwdlessCountryButtonCodeSpan3 = getElementByXpath(XPATH_LOGIN_ID__COUNTRYCODE_BUTTON_SPAN3);
    pwdlessCountryButtonCodeSpan3.parentElement.removeChild(pwdlessCountryButtonCodeSpan3)
}
