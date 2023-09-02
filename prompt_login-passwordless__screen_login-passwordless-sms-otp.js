
const XPATH_PWDLESS_SMS__COUNTRYCODE_BUTTON = "//button[@value='pick-country-code']"; 

function getElementByXpath(path) {
  return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

var pwdlessCountryCodeButton = getElementByXpath(XPATH_PWDLESS_SMS__COUNTRYCODE_BUTTON);

pwdlessCountryCodeButton.parentElement.parentElement.appendChild(pwdlessCountryCodeButton)

