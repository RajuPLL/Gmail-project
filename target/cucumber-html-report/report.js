$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Gmail Login feature",
  "description": "",
  "id": "gmail-login-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Login to Gmail with Correct credentials",
  "description": "",
  "id": "gmail-login-feature;login-to-gmail-with-correct-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "user is on Gmail login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user enters \"karmakar9177@gmail.com\" as emailId",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user clicks on next button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user is on password page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.user_is_on_gmail_login_page()"
});
formatter.result({
  "duration": 6612254224,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "karmakar9177@gmail.com",
      "offset": 13
    }
  ],
  "location": "StepDefination.user_enters_as_emailId_and_as_password(String)"
});
formatter.result({
  "duration": 18759012,
  "error_message": "java.lang.NullPointerException\r\n\tat com.gmail.GmailProject.GmailLoginPage.enteremail(GmailLoginPage.java:13)\r\n\tat stepDefinationOfGmailLogin.StepDefination.user_enters_as_emailId_and_as_password(StepDefination.java:22)\r\n\tat ✽.When user enters \"karmakar9177@gmail.com\" as emailId(Login.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefination.user_clicks_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefination.user_is_on_gmail_homepage()"
});
formatter.result({
  "status": "skipped"
});
});