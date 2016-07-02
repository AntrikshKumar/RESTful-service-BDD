package stepDefinitions;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.net.URLConnection;
import java.net.URLEncoder;

import cucumber.api.java.After;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class StepDefs extends Utility{
	
	private String url;
	private URLConnection uc;
	private String msg = null;
	private String pURL = null;
	@Given("^URL is \"([^\"]*)\"$")
	public void URL_is(String arg1) {
	    this.url = arg1;
	}
	@After
	@When("^the client sends the DELETE request$")
	public void cleanDatabase() throws IOException{
		System.out.println("------\nCLEANING UP \n------");
		this.uc = connSetup(this.url+"deleteAll","DELETE");
		this.uc.connect();
		this.msg = readData(this.uc);
	}
	
	@Given("^the client has to add a new customer with name \"([^\"]*)\", address \"([^\"]*)\" and phone \"([^\"]*)\"$")
	public void add_a_new_customer_with_name_address_and_phone(String arg1, String arg2, String arg3) {
		
		try {
			pURL= this.url+"add/"+URLEncoder.encode(arg1, "UTF-8")+"/"+ URLEncoder.encode(arg2, "UTF-8")+"/"+arg3;
		} catch (UnsupportedEncodingException e) {
			org.junit.Assert.fail("Failure at: add_a_new_customer_with_name_address_and_phone");
		}
		
	}

	@Given("^there is no customer's data with name \"([^\"]*)\"$")
	public void there_is_no_customer_s_data_with_name(String arg1) {
		try {
			pURL= this.url+"delete/"+URLEncoder.encode(arg1, "UTF-8");
			this.msg = sendReq(this.uc,"DELETE",pURL);
		} catch(Throwable t){
			System.out.println("Exception occured : " + t.getMessage());
			org.junit.Assert.fail("Failure at: there_is_no_customer_s_data_with_name");
		}
	}
	
	@Given("^database has a customer's data with name \"([^\"]*)\", address \"([^\"]*)\" and phone \"([^\"]*)\"$")
	@And("^database has another customer's data with name \"([^\"]*)\", address \"([^\"]*)\" and phone \"([^\"]*)\"$")
	public void database_has_a_customer_s_data_with_name_address_and_phone(String arg1, String arg2, String arg3) {
		try {
			pURL= this.url+"add/"+URLEncoder.encode(arg1, "UTF-8")+"/"+ URLEncoder.encode(arg2, "UTF-8")+"/"+arg3;
			this.msg = sendReq(this.uc,"POST",pURL);
		} catch(Throwable t){
			System.out.println("Exception occured : " + t.getMessage());
			org.junit.Assert.fail("Failure at: database_has_a_customer_s_data_with_name_address_and_phone");
		}		
	}

	@When("^the client sends the POST request$")
	public void the_client_sends_the_POST_request() {
		
		try {
			this.msg = sendReq(this.uc,"POST",pURL);
		} catch (Throwable e) {
			org.junit.Assert.fail("Failure at: the_client_sends_the_POST_request");
		}
	}
	
	@When("^the client sends the GET request with name \"([^\"]*)\"$")
	public void the_client_sends_the_GET_request_with_name(String arg1) {
		try {
			String pURL = "";
			pURL= this.url+"read/"+URLEncoder.encode(arg1, "UTF-8");
			this.msg = sendReq(this.uc,"GET",pURL);
		} catch(Throwable t){
			System.out.println("Exception occured : " + t.getMessage());
			org.junit.Assert.fail("Failure at: the_client_sends_the_GET_request_with_name");
		}		
	}

	@When("^the client sends DELETE request with name \"([^\"]*)\"$")
	public void the_client_sends_DELETE_request_with_name(String arg1) {
		try {
			pURL= this.url+"delete/"+URLEncoder.encode(arg1, "UTF-8");
			this.msg = sendReq(this.uc,"DELETE",pURL);
		} catch(Throwable t){
			System.out.println("Exception occured : " + t.getMessage());
			org.junit.Assert.fail("Failure at: the_client_sends_DELETE_request_with_name");
		}
	}
	
	@When("^the client sends the GET request$")	
	public void the_client_sends_the_GET_request() {
		try {
			pURL= this.url+"read";
			this.msg = sendReq(this.uc,"GET",pURL);

		} catch(Throwable t){
			System.out.println("Exception occured : " + t.getMessage());
			org.junit.Assert.fail("Failure at: the_client_sends_the_GET_request");
		}		
	}
	
	@When("^the client sends PUT request with name \"([^\"]*)\", address \"([^\"]*)\" and phone \"([^\"]*)\"$")
	public void the_client_sends_PUT_request_with_name_address_and_phone(String arg1, String arg2, String arg3) {
		try {
			pURL= this.url+"update/"+URLEncoder.encode(arg1, "UTF-8")+"/"+ URLEncoder.encode(arg2, "UTF-8")+"/"+arg3;
			this.msg = sendReq(this.uc,"PUT",pURL);

		} catch(Throwable t){
			System.out.println("Exception occured : " + t.getMessage());
			org.junit.Assert.fail("Failure at: the_client_sends_PUT_request_with_name_address_and_phone");
		}
	}
	

	@Then("^the client should obtain the following XML message$")
	public void the_client_should_obtain_the_following_XML(String arg1) {

		if(this.msg == null){
			this.msg = readData(this.uc);
		}
		compareXML(arg1,this.msg);
	    
	}






	
}
