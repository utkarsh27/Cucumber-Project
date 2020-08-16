$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("E:/carriar/carriar/Test/CucumberProject/src/main/java/Features/NewCrmLogin.feature");
formatter.feature({
  "line": 1,
  "name": "New CRM Cogneto Login feature",
  "description": "",
  "id": "new-crm-cogneto-login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "New CRM Cogneto Login feature",
  "description": "",
  "id": "new-crm-cogneto-login-feature;new-crm-cogneto-login-feature",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "user is on new home page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "user enters in new cogneto with \"\u003cuserName\u003e\" and \"\u003cpassWord\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user clicks on logIn button",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "new-crm-cogneto-login-feature;new-crm-cogneto-login-feature;",
  "rows": [
    {
      "cells": [
        "userName",
        "passWord"
      ],
      "line": 17,
      "id": "new-crm-cogneto-login-feature;new-crm-cogneto-login-feature;;1"
    },
    {
      "cells": [
        "ushelke196@gmail.com",
        "Utkarsh27"
      ],
      "line": 18,
      "id": "new-crm-cogneto-login-feature;new-crm-cogneto-login-feature;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 18,
  "name": "New CRM Cogneto Login feature",
  "description": "",
  "id": "new-crm-cogneto-login-feature;new-crm-cogneto-login-feature;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "user is on new home page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "user enters in new cogneto with \"ushelke196@gmail.com\" and \"Utkarsh27\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user clicks on logIn button",
  "keyword": "Then "
});
formatter.match({
  "location": "NewLoginStepDefinitions.user_is_on_new_home_page()"
});
formatter.result({
  "duration": 33405655108,
  "status": "passed"
});
formatter.match({
  "location": "NewLoginStepDefinitions.user_is_on_login_page()"
});
formatter.result({
  "duration": 11385566,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ushelke196@gmail.com",
      "offset": 33
    },
    {
      "val": "Utkarsh27",
      "offset": 60
    }
  ],
  "location": "NewLoginStepDefinitions.user_enters_username_and_password_in_cogneto(String,String)"
});
formatter.result({
  "duration": 581533410,
  "status": "passed"
});
formatter.match({
  "location": "NewLoginStepDefinitions.user_clicks_on_logIn_button()"
});
formatter.result({
  "duration": 143050666,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 22,
  "name": "Adding new contact to the contacts section",
  "description": "",
  "id": "new-crm-cogneto-login-feature;adding-new-contact-to-the-contacts-section",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 24,
  "name": "user is on user profile page",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "user clicks on contacts section",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "user is on contacts page",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "user clicks on new button",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "user enters in \"\u003cFirstName\u003e\" and \"\u003cLastName\u003e\" and \"\u003cPosition\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "user clicks on save button",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "user verifies the newly added contact on contacts page",
  "keyword": "Then "
});
formatter.examples({
  "line": 32,
  "name": "",
  "description": "",
  "id": "new-crm-cogneto-login-feature;adding-new-contact-to-the-contacts-section;",
  "rows": [
    {
      "cells": [
        "FirstName",
        "LastName",
        "Position"
      ],
      "line": 33,
      "id": "new-crm-cogneto-login-feature;adding-new-contact-to-the-contacts-section;;1"
    },
    {
      "cells": [
        "Kunal",
        "Test",
        "QA Engineer"
      ],
      "line": 34,
      "id": "new-crm-cogneto-login-feature;adding-new-contact-to-the-contacts-section;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 34,
  "name": "Adding new contact to the contacts section",
  "description": "",
  "id": "new-crm-cogneto-login-feature;adding-new-contact-to-the-contacts-section;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 24,
  "name": "user is on user profile page",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "user clicks on contacts section",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "user is on contacts page",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "user clicks on new button",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "user enters in \"Kunal\" and \"Test\" and \"QA Engineer\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "user clicks on save button",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "user verifies the newly added contact on contacts page",
  "keyword": "Then "
});
formatter.match({
  "location": "NewLoginStepDefinitions.user_is_on_user_profile_page()"
});
formatter.result({
  "duration": 158293,
  "status": "passed"
});
formatter.match({
  "location": "NewLoginStepDefinitions.user_clicks_on_contacts_section()"
});
formatter.result({
  "duration": 2195466936,
  "status": "passed"
});
formatter.match({
  "location": "NewLoginStepDefinitions.user_is_on_contacts_page()"
});
formatter.result({
  "duration": 136232553,
  "status": "passed"
});
formatter.match({
  "location": "NewLoginStepDefinitions.user_clicks_on_new_button()"
});
formatter.result({
  "duration": 194907577,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kunal",
      "offset": 16
    },
    {
      "val": "Test",
      "offset": 28
    },
    {
      "val": "QA Engineer",
      "offset": 39
    }
  ],
  "location": "NewLoginStepDefinitions.user_enters_firstname_and_lastname_and_position(String,String,String)"
});
formatter.result({
  "duration": 2109076154,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"*[name\u003d\u0027first_name\u0027]\"}\n  (Session info: chrome\u003d84.0.4147.105)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DELL\u0027, ip: \u0027192.168.1.4\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_25\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 84.0.4147.105, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\Shiv\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:49372}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 4ad0db9673ee8883d9dde75448f9d693\n*** Element info: {Using\u003dname, value\u003dfirst_name}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:408)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:404)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:284)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat StepDefinitions.NewLoginStepDefinitions.user_enters_firstname_and_lastname_and_position(NewLoginStepDefinitions.java:107)\r\n\tat ✽.Then user enters in \"Kunal\" and \"Test\" and \"QA Engineer\"(E:/carriar/carriar/Test/CucumberProject/src/main/java/Features/NewCrmLogin.feature:28)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "NewLoginStepDefinitions.user_clicks_on_save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "NewLoginStepDefinitions.user_verifies_the_newly_added_contact_on_contacts_page()"
});
formatter.result({
  "status": "skipped"
});
});