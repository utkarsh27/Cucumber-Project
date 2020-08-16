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


public class LoginStepDefinitions {
	
	WebDriver driver;
	
	@Given("^user is already on login page$")
	public void user_is_already_on_login_page()  {
	    System.setProperty("webdriver.chrome.driver", "./Drivers/chromedriver.exe");
	    driver = new ChromeDriver();
	    driver.get("https://classic.crmpro.com/");
	    driver.manage().timeouts().implicitlyWait(2500, TimeUnit.MILLISECONDS);
	}


	@When("^title of login page is Free CRM$")
	public void title_of_login_page_is_Free_CRM() {
	   String titleOfLogo = driver.findElement(By.linkText("Selenium Jobs")).getText();
	   System.out.println("Login Page Logo: " +titleOfLogo);
	   Assert.assertEquals("Selenium Jobs", titleOfLogo);
	    
	}

	@Then("^user enters \"(.*)\" and \"(.*)\"$")
	public void user_enters_username_and_password(String username, String password) {
	    driver.findElement(By.name("username")).sendKeys(username);
	    driver.findElement(By.name("password")).sendKeys(password);
	}

	@Then("^user clicks on login button$")
	public void user_clicks_on_login_button()  {
	    WebElement loginBtn = driver.findElement(By.xpath("//input[@type='submit']"));
		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("arguments[0].click();",loginBtn);
	}

	@Then("^user is on home page$")
	public void user_is_on_home_page()  {
	    String title = driver.getTitle();
	    System.out.println("Home Page title: " +title);
	    Assert.assertEquals("CRMPRO", title);
	    
	}
	
	@Then("^close the browser$")
	public void close_browser() {
		driver.quit();

	}

}
