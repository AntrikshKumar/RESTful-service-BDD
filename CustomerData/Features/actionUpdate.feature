Feature: Update/put existing customer data

	Background: 
	    Given URL is "http://localhost:8080/CustomerData/rest/xml/"
	    
	Scenario: Update Existing Customer's data
	    Given database has a customer's data with name "Udit", address "Random Street" and phone "229911122"
	    When the client sends PUT request with name "Udit", address "Glass Road, Mt.Roskill" and phone "229911122"
	    Then the client should obtain the following XML message
	    """
	    <SuccessMessage>Customer's Data Updated</SuccessMessage>
		<Customer>
			<name>Udit</name>
			<address>Glass Road, Mt.Roskill</address>
			<phone>229911122</phone>
		</Customer>
	    """
	    
	 Scenario: Try to update data of non existing customer
		Given there is no customer's data with name "RandomCustomer"
		When the client sends PUT request with name "RandomCustomer", address "Some Random Street,New Zealand" and phone "13243546"
		Then the client should obtain the following XML message
		"""
		<ErrorMessage>Customer Not Exist with name: RandomCustomer</ErrorMessage>
		"""