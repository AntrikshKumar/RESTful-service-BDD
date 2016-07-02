Feature: Add/create customer's data into RESTful service
	Background: 
	    Given URL is "http://localhost:8080/CustomerData/rest/xml/"
	    
	Scenario: Add/create a new customer's data 
	    Given the client has to add a new customer with name "Udit", address "Random Street" and phone "229911122"
	    When the client sends the POST request
	    Then the client should obtain the following XML message
	    """
		<Customer>
			<name>Udit</name>
			<address>Random Street</address>
			<phone>229911122</phone>
		</Customer>
	    """
	    
	    
	Scenario Outline: Add/create multiple customer's data
	    Given the client has to add a new customer with name "<userName>", address "<userAddress>" and phone "<userPhone>"
	    When the client sends the POST request
	    Then the client should obtain the following XML message
	    """
		<Customer>
			<name><userName></name>
			<address><userAddress></address>
			<phone><userPhone></phone>
		</Customer>
	    """

	    Examples:
	    |	userName	|userAddress	|userPhone	|
	    |David			| 2 random st.	|226611000	|
	    |Peter			| Queen St.		|220001166	|
	    |Gary			| Hobsan St.	|661062217	|	    