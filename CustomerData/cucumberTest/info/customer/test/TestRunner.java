package info.customer.test;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@CucumberOptions(
		features = "Features",
		glue = {"stepDefinitions"},
			plugin = { 
		"html:target/site/cucumber-pretty",
        "junit:target/site/cucumber.xml"}

		)
@RunWith(Cucumber.class)
public class TestRunner {
	

}
