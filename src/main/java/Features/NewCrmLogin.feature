Feature: New CRM Cogneto Login feature



Scenario Outline: New CRM Cogneto Login feature

Given user is on new home page
Given user is on login page
Then user enters in new cogneto with "<userName>" and "<passWord>"
Then user clicks on logIn button





Examples: 
    |userName            | passWord  |
    |ushelke196@gmail.com| Utkarsh27 | 

    

Scenario Outline: Adding new contact to the contacts section

Given user is on user profile page 
When user clicks on contacts section
Then user is on contacts page
Then user clicks on new button
Then user enters in "<FirstName>" and "<LastName>" and "<Position>"
Then user clicks on save button
Then user verifies the newly added contact on contacts page  

Examples:
   | FirstName | LastName | Position   |
   | Kunal     | Test     | QA Engineer|        