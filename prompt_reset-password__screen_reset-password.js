const XPATH_RESET_PASSWORD__TXT_PASSWORD_CHANGED_SUCCESSFULLY_EN =
  "//*[contains(text(), 'Your password has been changed successfully')]";
const XPATH_RESET_PASSWORD__TXT_PASSWORD_CHANGED_SUCCESSFULLY_ES =
  "//*[contains(text(), 'Su contraseña se ha cambiado con éxito')]";

var pwdSuccessTextElem = getElementByXpath(
  XPATH_RESET_PASSWORD__TXT_PASSWORD_CHANGED_SUCCESSFULLY_EN
);

var rtAppDiv = document.createElement("div");
const rtAppAnchor = document.createElement("a");
aReturn.setAttribute("href", "https://iamkrish.oktapreview.com");

const rtAppAnchorTxt = document.createTextNode("Return to login page");
rtAppDiv.appendChild(rtAppAnchor);
rtAppAnchor.appendChild(rtAppAnchorTxt);

pwdSuccessTextElem.parentElement.appendChild(rtAppDiv);

function getElementByXpath(path) {
  return document.evaluate(
    path,
    document,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null
  ).singleNodeValue;
}

{
  /* <div class="ce7494284 c24f2ad5c c5bf19ed3 c66fbaaf0">
  <a href="https://candle-fossil-bathtub.glitch.me/?iss=https%3A%2F%2Fokta-balaganaparthi-0.us.auth0.com%2F">
    <font style="vertical-align: inherit;">
      <font style="vertical-align: inherit;">Return to Specialty</font>
    </font>
  </a>
</div>; */
}
