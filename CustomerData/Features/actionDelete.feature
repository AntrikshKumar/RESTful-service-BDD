Feature: Delete customer's data

	Background: 
	    Given URL is "http://localhost:8080/CustomerData/rest/xml/"
	    
	Scenario: Delete Existing Customer's data
	    Given database has a customer's data with name "Udit", address "Random Street" and phone "229911122"
	    When the client sends DELETE request with name "Udit"
	    Then the client should obtain the following XML message
	    """
		<SuccessMessage>Customer "Udit" has been deleted</SuccessMessage>
	    """
	    
	 Scenario: Try to delete data of non existing customer
		Given there is no customer's data with name "RandomCustomer"
		When the client sends DELETE request with name "RandomCustomer"
		Then the client should obtain the following XML message
		"""
		<ErrorMessage>Customer Not Exist with name: RandomCustomer</ErrorMessage>
		"""
	
	Scenario: Delete all the Existing Customer's data 
	    Given database has a customer's data with name "David", address "2 random st." and phone "226611000"
	    And database has another customer's data with name "Peter", address "Queen St." and phone "220001166"
	    And database has another customer's data with name "Gary", address "Hobsan St." and phone "661062217"
	    When the client sends the DELETE request
	    Then the client should obtain the following XML message
	    """
		<SuccessMessage>Database Cleaned</SuccessMessage>
	    """