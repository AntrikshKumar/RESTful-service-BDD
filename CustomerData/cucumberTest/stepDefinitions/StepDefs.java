package stepDefinitions;

import java.io.IOException;
import java.net.URLConnection;
import java.net.URLEncoder;

import org.xml.sax.SAXException;

import cucumber.api.java.After;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class StepDefs extends Utility{
	
	private String url;
	private URLConnection uc;
	private String msg = "";
	@Given("^URL is \"([^\"]*)\"$")
	public void URL_is(String arg1) {
	    this.url = arg1;
	}
	@After
	public void cleanDatabase() throws IOException{
		this.uc = connSetup(this.url+"deleteAll","DELETE");
		this.uc.connect();
		String msg = readData(this.uc);
		System.out.println(msg);
		System.out.println("DatabaseCleaned");
	}
	
	@Given("^the client has to add a new customer with name \"([^\"]*)\", address \"([^\"]*)\" and phone \"([^\"]*)\"$")
	public void add_a_new_customer_with_name_address_and_phone(String arg1, String arg2, String arg3) {
		try {
			String pURL = "";
			pURL= this.url+"add/"+URLEncoder.encode(arg1, "UTF-8")+"/"+ URLEncoder.encode(arg2, "UTF-8")+"/"+arg3;
			System.out.println("URL ____ "+pURL);
			this.uc = connSetup(pURL,"POST");
		} catch(Throwable t){
			System.out.println("Exception occured : " + t.getMessage());
			org.junit.Assert.fail("URL Malformed");
		}
		
	}

	@Given("^there is no customer's data with name \"([^\"]*)\"$")
	public void there_is_no_customer_s_data_with_name(String arg1) {
		try {
			String pURL = "";
			pURL= this.url+"delete/"+URLEncoder.encode(arg1, "UTF-8");
			System.out.println("URL ____ "+pURL);
			this.uc = connSetup(pURL,"DELETE");
			this.uc.connect();
			msg = readData(this.uc);
			System.out.println("details added: "+msg);
		} catch(Throwable t){
			System.out.println("Exception occured : " + t.getMessage());
			org.junit.Assert.fail("URL Malformed");
		}
	}
	
	@Given("^database has a customer's data with name \"([^\"]*)\", address \"([^\"]*)\" and phone \"([^\"]*)\"$")
	@And("^database has another customer's data with name \"([^\"]*)\", address \"([^\"]*)\" and phone \"([^\"]*)\"$")
	public void database_has_a_customer_s_data_with_name_address_and_phone(String arg1, String arg2, String arg3) {
		try {
			String pURL = "";
			pURL= this.url+"add/"+URLEncoder.encode(arg1, "UTF-8")+"/"+ URLEncoder.encode(arg2, "UTF-8")+"/"+arg3;
			System.out.println("URL ____ "+pURL);
			this.uc = connSetup(pURL,"POST");
			this.uc.connect();
			msg = readData(this.uc);
			System.out.println("details added: "+msg);
		} catch(Throwable t){
			System.out.println("Exception occured : " + t.getMessage());
			org.junit.Assert.fail("URL Malformed");
		}		
	}

	@When("^the client sends the POST request$")
	public void the_client_sends_the_POST_request() {
		
		try {
			this.uc.connect();
		} catch (IOException e) {
			org.junit.Assert.fail("Exception occured: Unable to connect");
		}
	}
	
	@When("^the client sends the GET request with name \"([^\"]*)\"$")
	public void the_client_sends_the_GET_request_with_name(String arg1) {
		try {
			String pURL = "";
			pURL= this.url+"read/"+URLEncoder.encode(arg1, "UTF-8");
			System.out.println("URL ____ "+pURL);
			this.uc = connSetup(pURL,"GET");
			this.uc.connect();
			msg = readData(this.uc);
			System.out.println("Received: "+msg);
		} catch(Throwable t){
			System.out.println("Exception occured : " + t.getMessage());
			org.junit.Assert.fail("URL Malformed");
		}		
	}
	
	
	@When("^the client sends the GET request$")	
	public void the_client_sends_the_GET_request() {
		try {
			String pURL = "";
			pURL= this.url+"read";
			System.out.println("URL ____ "+pURL);
			this.uc = connSetup(pURL,"GET");
			this.uc.connect();
			msg = readData(this.uc);
			System.out.println("Received: "+msg);
		} catch(Throwable t){
			System.out.println("Exception occured : " + t.getMessage());
			org.junit.Assert.fail("URL Malformed");
		}		
	}
	@Then("^the client should obtain the following XML message$")
	public void the_client_should_obtain_the_following_XML(String arg1) throws SAXException, IOException {
		
		if(msg == null){
		msg = readData(this.uc);
		}
		compareXML(arg1,msg);
	    
	}






	
}
