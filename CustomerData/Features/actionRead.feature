Feature: Read/Get customer's data from RESTful service
	
	Background: 
	    Given URL is "http://localhost:8080/CustomerData/rest/xml/"
	    
	Scenario: Read an existing customer's data 
	    Given database has a customer's data with name "Udit", address "Random Street" and phone "229911122"
	    When the client sends the GET request with name "Udit"
	    Then the client should obtain the following XML message
	    """
		<Customer>
			<name>Udit</name>
			<address>Random Street</address>
			<phone>229911122</phone>
		</Customer>
	    """
	    

	Scenario: Fetching all the data 
	    Given database has a customer's data with name "David", address "2 random st." and phone "226611000"
	    And database has another customer's data with name "Peter", address "Queen St." and phone "220001166"
	    And database has another customer's data with name "Gary", address "Hobsan St." and phone "661062217"
	    When the client sends the GET request
	    Then the client should obtain the following XML message
	    """
		<Customers>
			<Customer>
				<name>Gary</name>
				<address>Hobsan St.</address>
				<phone>661062217</phone>
			</Customer>
			<Customer>
				<name>David</name>
				<address>2 random st.</address>
				<phone>226611000</phone>
			</Customer>
			<Customer>
				<name>Peter</name>
				<address>Queen St.</address>
				<phone>220001166</phone>
			</Customer>
		</Customers>
	    """
	    
	Scenario: Try to get data of non existing customer
		Given there is no customer's data with name "RandomCustomer"
		When the client sends the GET request with name "RandomCustomer"
		Then the client should obtain the following XML message
		"""
		<ErrorMessage>Customer Not Exist with name: RandomCustomer</ErrorMessage>
		"""
	    