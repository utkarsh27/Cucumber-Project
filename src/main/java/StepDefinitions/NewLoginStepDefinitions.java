package StepDefinitions;



import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class NewLoginStepDefinitions {

	static WebDriver driver;

	@Given("^user is on new home page$")
	public void user_is_on_new_home_page() {

		System.setProperty("webdriver.chrome.driver", "./Drivers/chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("https://freecrm.co.in/");

		String titleHomePage = driver.getTitle();
		System.out.println("The title of new home page is: " + titleHomePage);
		Assert.assertEquals("Free CRM #1 cloud software for any business large or small", titleHomePage);
		System.out.println("user is on new home page");

		WebElement loginBtn = driver.findElement(By.xpath("//span[contains(text(),'Log In')]"));
		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("arguments[0].click()", loginBtn);
	}

	@Given("^user is on login page$")
	public void user_is_on_login_page() {

		String loginPageTitle = driver.getTitle();
		System.out.println("The title of login page is " + loginPageTitle);
		Assert.assertEquals("Cogmento CRM", loginPageTitle);
		System.out.println("User is on login page");

	}

	@Then("^user enters in new cogneto with \"(.*)\" and \"(.*)\"$")
	public void user_enters_username_and_password_in_cogneto(String userName, String passWord) {

		driver.findElement(By.name("email")).sendKeys(userName);

		driver.findElement(By.name("password")).sendKeys(passWord);

	}

	@Then("^user clicks on logIn button$")
	public void user_clicks_on_logIn_button() {

		driver.findElement(By.xpath("//div[text()=\"Login\"]")).click();
		driver.manage().timeouts().implicitlyWait(2000, TimeUnit.MILLISECONDS);
	}



	// below code snippets are scenario of contacts section /////////////////////////////////////////////

	@Given("^user is on user profile page$")
	public void user_is_on_user_profile_page() {
		/*
		 * String homeOption =
		 * driver.findElement(By.xpath("//span[contains(text(),'Home')]")).getText().
		 * toString(); System.out.println(homeOption);
		 */
		//Assert.assertEquals("Home", homeOption);
		System.out.println("user is on user profile page");

	}

	@When("^user clicks on contacts section$")
	public void user_clicks_on_contacts_section() {
		driver.findElement(By.xpath("//span[contains(text(),'Contacts')]")).click();
		// driver.findElement(By.xpath("//button[@class='ui linkedin
		// button']//parent::a")).click();
	}

	@Then("^user is on contacts page$")
	public void user_is_on_contacts_page() {
		String contactsTitle = driver.findElement(By.xpath("//div[@class='ui header item mb5 light-black']")).getText().toString();
		System.out.println("The title of contacts page is : " + contactsTitle);
		Assert.assertEquals("Contacts", contactsTitle);
		System.out.println("User is on contacts section!!");

	}

	@Then("^user clicks on new button$")
	public void user_clicks_on_new_button() {
		WebElement newBtn = driver.findElement(By.xpath("//button[@class='ui linkedin button']//parent::a"));
		boolean clickable = newBtn.isEnabled();
		Assert.assertTrue("User clicks on new button", clickable);
		newBtn.click();

	}

	@Then("^user enters in \"(.*)\" and \"(.*)\" and \"(.*)\"$")
	public void user_enters_firstname_and_lastname_and_position(String FirstName, String LastName, String Position) {
		driver.findElement(By.name("first_name")).sendKeys(FirstName);
		driver.findElement(By.name("last_name")).sendKeys(LastName);
		driver.findElement(By.name("position")).sendKeys(Position);

	}

	@Then("^user clicks on save button$")
	public void user_clicks_on_save_button() {
		WebElement saveBtn = driver.findElement(By.className("ui linkedin button"));
		boolean saveClickable = saveBtn.isEnabled();
		Assert.assertTrue("User clicks on save button", saveClickable);
		saveBtn.click();
	}

	@Then("^user verifies the newly added contact on contacts page$")
	public void user_verifies_the_newly_added_contact_on_contacts_page() {
		String newContactTitle = driver.findElement(By.xpath("//div[@class='ui header item mb5 light-black']/child::i"))
				.getText().toString();
		Assert.assertEquals("John Test", newContactTitle);
		System.out.println("User created new contacted succesfully");

	}

}
