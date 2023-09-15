const XPATH_LOGIN_ID__USERNAME_INPUT = "//input[@name='username']";
const XPATH_LOGIN_ID__USERNAME_LABEL = "//label[@for='username']";
const XPATH_LOGIN_ID__ACTION_BUTTON = "//button[name='action']";
const XPATH_LOGIN_ID__FORM =
  "//form[@method='POST' and @data-form-primary='true']";

var usernameInputElem = getElementByXpath(XPATH_LOGIN_ID__USERNAME_INPUT);
var usernameLabelElem = getElementByXpath(XPATH_LOGIN_ID__USERNAME_LABEL);
var continueButtonElem = getElementByXpath(XPATH_LOGIN_ID__ACTION_BUTTON);
var formElem = getElementByXpath(XPATH_LOGIN_ID__FORM);

continueButtonElem.onclick = submitButtonClicked;
//Change the text of Continue to send sms
//Change the textbox lable from username to enter your phone# with countyr code
//Change the placeholder text

//validate phone# validity
//create a function to call xhr request to send sms

function submitButtonClicked() {
  var phoneNumber = XPATH_LOGIN_ID__USERNAME_INPUT.value;
  validatePhonenumber(phoneNumber);

  formElem.submit("Continue");
  //Get ext- state
  //if state is set, send a XHR post request to the backend
  //get the backend state and store in local storage
  //submit page
}

function validatePhonenumber(phoneNumber) {
  var phoneno = "/^+1d{10}$/$//^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-s./0-9]*$/g";
  if (phoneNumber.value.match(phoneno)) {
    return true;
  } else {
    alert(
      "Phone# [",
      phoneNumber,
      "] is invalid, enter a valid phone# and retry"
    );
    return false;
  }
}
