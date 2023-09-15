const XPATH_LOGIN_ID__USERNAME_INPUT = "//input[@name='username']";
const XPATH_LOGIN_ID__USERNAME_LABEL = "//label[@for='username']";
const XPATH_LOGIN_ID__ACTION_BUTTON = "//button[@name='action']";
const XPATH_LOGIN_ID__FORM_1 =
  "//form[@method='POST' and @data-form-primary='true']";

var usernameInputElem = getElementByXpath(XPATH_LOGIN_ID__USERNAME_INPUT);
var usernameLabelElem = getElementByXpath(XPATH_LOGIN_ID__USERNAME_LABEL);
var continueButtonElem = getElementByXpath(XPATH_LOGIN_ID__ACTION_BUTTON);
var formElem = getElementByXpath(XPATH_LOGIN_ID__FORM_1);

continueButtonElem.onclick = submitButtonClicked;
//Change the text of Continue to send sms
//Change the textbox lable from username to enter your phone# with countyr code
//Change the placeholder text

//validate phone# validity
//create a function to call xhr request to send sms

function submitButtonClicked() {
  var phoneNumber = usernameInputElem.value;
  validatePhonenumber(phoneNumber);

  formElem.submit("Continue");
  //Get ext- state
  //if state is set, send a XHR post request to the backend
  //get the backend state and store in local storage
  //submit page
  sendSMS(phoneNumber, getState());
}

function validatePhonenumber(phoneNumber) {
  var phoneno = "/^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$/im";
  if (phoneNumber.match(phoneno)) {
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

function getState() {
  const myArray = new Uint32Array(8);
  let state = "";
  crypto.getRandomValues(myArray);

  for (const num of myArray) {
    state += num + "-";
  }
  return state;
}

function sendSMS(phoneNumber, state) {
  const data = `{"phone" : "${phoneNumber}", "state" : "${state}"}`;
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "http://localhost:3000/send-sms-otp");
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.send(JSON.stringify(data));
}
