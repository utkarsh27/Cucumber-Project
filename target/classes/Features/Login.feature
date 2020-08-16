Feature: Free Crm login feature

#By using without examples keyword
#Scenario: Free Crm Login Test Scenario

#Given user is already on login page
#When title of login page is Free CRM
#Then user enters "naveenk" and "test123"
#Then user clicks on login button
#Then user is on home page



#By using Examples keyword
Scenario Outline: Free Crm Login Test Scenario

Given user is already on login page
When title of login page is Free CRM
Then user enters "<username>" and "<password>"
Then user clicks on login button
Then user is on home page
Then close the browser

Examples:
	|username| password|
	|naveenk |test123 |
	|tony    |test456 |
	