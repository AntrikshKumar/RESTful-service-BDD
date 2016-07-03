# README #

This RESTful web service is built using Behavioural Driven Development 

### About the repository ###

This repository contains the application code and BDD scenarios written in Gherkin.
Following tools and software are used while developing this project:

1. Java
2. Apache Tomcat 7
3. Maven
4. Eclipse

### Prerequisite ###
1. Maven installed
2. Java installed
3. Tomcat 7.0 installed
4. Tomcat Server extension in Eclipse

### How do I get set up? ###

1. Download the repository
2. Extract it
3. Import the "CustomerData" project in eclipse
4. Run the tomcat 7 server in Eclipse
5. Add this web service into the tomcat
6. Run the project using Maven Test

 ![Report.PNG](https://bitbucket.org/repo/gLoxAn/images/2068606269-Report.PNG)
To see the results open index.html file places at CustomerData/target/site/cucumber-pretty/index.html

### HTTP request Examples ###
POST - to add new data ( CREATE )
	
	http://localhost:8080/CustomerData/rest/xml/add/Udit/Random Street/0229911122/

GET - to read data ( READ )
	
	To read particular customer's data:  http://localhost:8080/CustomerData/rest/xml/read/Udit
	To read all data stored: http://localhost:8080/CustomerData/rest/xml/read/

PUT - to update existing data ( UPDATE )
	
	http://localhost:8080/CustomerData/rest/xml/update/Udit/Auckland,New Zealand/0229911122/

DELETE -  to remove customer's data
	
	To remove particular customer's data: http://localhost:8080/CustomerData/rest/xml/delete/Udit
	To remove all customer's data: http://localhost:8080/CustomerData/rest/xml/deleteAll

### Who do I talk to? ###

For more information Contact: Udit Choudhary at uditchoudhary@gmail.com
