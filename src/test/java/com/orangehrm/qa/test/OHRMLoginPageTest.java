package com.orangehrm.qa.test;

import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

import com.orangehrm.qa.base.TestBase;
import com.orangehrm.qa.pages.OHRMHomePage;
import com.orangehrm.qa.pages.OHRMLoginPage;

public class OHRMLoginPageTest extends TestBase {

	OHRMLoginPage loginpage;
	OHRMHomePage homepage;
	
	public OHRMLoginPageTest() {
		super(); // to call parent class constructor
	}
	
	@BeforeMethod
	public void setup() {
		initialization(); // first initialize
		loginpage = new OHRMLoginPage(); // creating object of login page
	}
	
	@Test
	public void Login_Test() {
		homepage = loginpage.validateLogin(prop.getProperty("username"), "password");
		
	}
	
	@AfterMethod
	public void tearDown() {
		driver.quit();
	}
	
	
	
}
