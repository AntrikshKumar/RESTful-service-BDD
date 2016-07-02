$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("actionRead.feature");
formatter.feature({
  "line": 1,
  "name": "Read/Get customer\u0027s data from RESTful service",
  "description": "",
  "id": "read/get-customer\u0027s-data-from-restful-service",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "URL is \"http://localhost:8080/CustomerData/rest/xml/\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:8080/CustomerData/rest/xml/",
      "offset": 8
    }
  ],
  "location": "StepDefs.URL_is(String)"
});
formatter.result({
  "duration": 120563147,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Read an existing customer\u0027s data",
  "description": "",
  "id": "read/get-customer\u0027s-data-from-restful-service;read-an-existing-customer\u0027s-data",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "database has a customer\u0027s data with name \"Udit\", address \"Random Street\" and phone \"229911122\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the client sends the GET request with name \"Udit\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the client should obtain the following XML message",
  "keyword": "Then ",
  "doc_string": {
    "content_type": "",
    "line": 10,
    "value": "\u003cCustomer\u003e\r\n\u003cname\u003eUdit\u003c/name\u003e\r\n\u003caddress\u003eRandom Street\u003c/address\u003e\r\n\u003cphone\u003e229911122\u003c/phone\u003e\r\n\u003c/Customer\u003e"
  }
});
formatter.match({
  "arguments": [
    {
      "val": "Udit",
      "offset": 42
    },
    {
      "val": "Random Street",
      "offset": 58
    },
    {
      "val": "229911122",
      "offset": 84
    }
  ],
  "location": "StepDefs.database_has_a_customer_s_data_with_name_address_and_phone(String,String,String)"
});
formatter.result({
  "duration": 116907456,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Udit",
      "offset": 44
    }
  ],
  "location": "StepDefs.the_client_sends_the_GET_request_with_name(String)"
});
formatter.result({
  "duration": 7313754,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.the_client_should_obtain_the_following_XML(String)"
});
formatter.result({
  "duration": 2262482,
  "status": "passed"
});
formatter.after({
  "duration": 4952885,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "URL is \"http://localhost:8080/CustomerData/rest/xml/\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:8080/CustomerData/rest/xml/",
      "offset": 8
    }
  ],
  "location": "StepDefs.URL_is(String)"
});
formatter.result({
  "duration": 539740,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Read an existing customer\u0027s data",
  "description": "",
  "id": "read/get-customer\u0027s-data-from-restful-service;read-an-existing-customer\u0027s-data",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 20,
  "name": "database has a customer\u0027s data with name \"David\", address \"2 random st.\" and phone \"226611000\"",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "database has another customer\u0027s data with name \"Peter\", address \"Queen St.\" and phone \"220001166\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "database has another customer\u0027s data with name \"Gary\", address \"Hobsan St.\" and phone \"661062217\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "the client sends the GET request",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "the client should obtain the following XML message",
  "keyword": "Then ",
  "doc_string": {
    "content_type": "",
    "line": 25,
    "value": "\u003cCustomers\u003e\r\n\u003cCustomer\u003e\r\n\u003cname\u003eGary\u003c/name\u003e\r\n\u003caddress\u003eHobsan St.\u003c/address\u003e\r\n\u003cphone\u003e661062217\u003c/phone\u003e\r\n\u003c/Customer\u003e\r\n\u003cCustomer\u003e\r\n\u003cname\u003eDavid\u003c/name\u003e\r\n\u003caddress\u003e2 random st.\u003c/address\u003e\r\n\u003cphone\u003e226611000\u003c/phone\u003e\r\n\u003c/Customer\u003e\r\n\u003cCustomer\u003e\r\n\u003cname\u003ePeter\u003c/name\u003e\r\n\u003caddress\u003eQueen St.\u003c/address\u003e\r\n\u003cphone\u003e220001166\u003c/phone\u003e\r\n\u003c/Customer\u003e\r\n\u003c/Customers\u003e"
  }
});
formatter.match({
  "arguments": [
    {
      "val": "David",
      "offset": 42
    },
    {
      "val": "2 random st.",
      "offset": 59
    },
    {
      "val": "226611000",
      "offset": 84
    }
  ],
  "location": "StepDefs.database_has_a_customer_s_data_with_name_address_and_phone(String,String,String)"
});
formatter.result({
  "duration": 7292812,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Peter",
      "offset": 48
    },
    {
      "val": "Queen St.",
      "offset": 65
    },
    {
      "val": "220001166",
      "offset": 87
    }
  ],
  "location": "StepDefs.database_has_a_customer_s_data_with_name_address_and_phone(String,String,String)"
});
formatter.result({
  "duration": 7224061,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gary",
      "offset": 48
    },
    {
      "val": "Hobsan St.",
      "offset": 64
    },
    {
      "val": "661062217",
      "offset": 87
    }
  ],
  "location": "StepDefs.database_has_a_customer_s_data_with_name_address_and_phone(String,String,String)"
});
formatter.result({
  "duration": 8811275,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.the_client_sends_the_GET_request()"
});
formatter.result({
  "duration": 6299074,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.the_client_should_obtain_the_following_XML(String)"
});
formatter.result({
  "duration": 276192,
  "status": "passed"
});
formatter.after({
  "duration": 5562957,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "URL is \"http://localhost:8080/CustomerData/rest/xml/\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:8080/CustomerData/rest/xml/",
      "offset": 8
    }
  ],
  "location": "StepDefs.URL_is(String)"
});
formatter.result({
  "duration": 150543,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "Try to get data of non existing customer",
  "description": "",
  "id": "read/get-customer\u0027s-data-from-restful-service;try-to-get-data-of-non-existing-customer",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 46,
  "name": "there is no customer\u0027s data with name \"RandomCustomer\"",
  "keyword": "Given "
});
formatter.step({
  "line": 47,
  "name": "the client sends the GET request with name \"RandomCustomer\"",
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "the client should obtain the following XML message",
  "keyword": "Then ",
  "doc_string": {
    "content_type": "",
    "line": 49,
    "value": "\u003cErrorMessage\u003eCustomer Not Exist with name: RandomCustomer\u003c/ErrorMessage\u003e"
  }
});
formatter.match({
  "arguments": [
    {
      "val": "RandomCustomer",
      "offset": 39
    }
  ],
  "location": "StepDefs.there_is_no_customer_s_data_with_name(String)"
});
formatter.result({
  "duration": 5683075,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "RandomCustomer",
      "offset": 44
    }
  ],
  "location": "StepDefs.the_client_sends_the_GET_request_with_name(String)"
});
formatter.result({
  "duration": 6393114,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.the_client_should_obtain_the_following_XML(String)"
});
formatter.result({
  "duration": 117748,
  "status": "passed"
});
formatter.after({
  "duration": 4408009,
  "status": "passed"
});
});