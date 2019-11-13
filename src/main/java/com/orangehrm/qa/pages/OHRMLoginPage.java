package com.orangehrm.qa.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.orangehrm.qa.base.TestBase;

public class OHRMLoginPage extends TestBase{
   //PageFactory or Object Repository
	@FindBy(name="txtUsername")
	WebElement username;
	
	@FindBy(name = "txtPassword")
	WebElement password;
	
	@FindBy(xpath="//*[@type = 'submit']")
	WebElement loginbutton;
	
	public OHRMLoginPage() {
		PageFactory.initElements(driver, this);
	}
	
	 public OHRMHomePage validateLogin(String user, String pwd) {
		 username.sendKeys(user);
		 password.sendKeys(pwd);
		 loginbutton.click();
		 return new OHRMHomePage();
	 }
}
