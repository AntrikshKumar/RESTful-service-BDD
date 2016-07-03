$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("actionCreate.feature");
formatter.feature({
  "line": 1,
  "name": "Add/create customer\u0027s data into RESTful service",
  "description": "",
  "id": "add/create-customer\u0027s-data-into-restful-service",
  "keyword": "Feature"
});
formatter.background({
  "line": 2,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
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
  "duration": 113084231,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Add/create a new customer\u0027s data",
  "description": "",
  "id": "add/create-customer\u0027s-data-into-restful-service;add/create-a-new-customer\u0027s-data",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "the client has to add a new customer with name \"Udit\", address \"Random Street\" and phone \"229911122\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "the client sends the POST request",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "the client should obtain the following XML message",
  "keyword": "Then ",
  "doc_string": {
    "content_type": "",
    "line": 9,
    "value": "\u003cCustomer\u003e\r\n\u003cname\u003eUdit\u003c/name\u003e\r\n\u003caddress\u003eRandom Street\u003c/address\u003e\r\n\u003cphone\u003e229911122\u003c/phone\u003e\r\n\u003c/Customer\u003e"
  }
});
formatter.match({
  "arguments": [
    {
      "val": "Udit",
      "offset": 48
    },
    {
      "val": "Random Street",
      "offset": 64
    },
    {
      "val": "229911122",
      "offset": 90
    }
  ],
  "location": "StepDefs.add_a_new_customer_with_name_address_and_phone(String,String,String)"
});
formatter.result({
  "duration": 573325,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.the_client_sends_the_POST_request()"
});
formatter.result({
  "duration": 1030567620,
  "error_message": "java.lang.AssertionError: Failure at: the_client_sends_the_POST_request\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat stepDefinitions.StepDefs.the_client_sends_the_POST_request(StepDefs.java:74)\r\n\tat ✽.When the client sends the POST request(actionCreate.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefs.the_client_should_obtain_the_following_XML(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1006039082,
  "error_message": "java.net.ConnectException: Connection refused: connect\r\n\tat java.net.DualStackPlainSocketImpl.connect0(Native Method)\r\n\tat java.net.DualStackPlainSocketImpl.socketConnect(DualStackPlainSocketImpl.java:79)\r\n\tat java.net.AbstractPlainSocketImpl.doConnect(AbstractPlainSocketImpl.java:350)\r\n\tat java.net.AbstractPlainSocketImpl.connectToAddress(AbstractPlainSocketImpl.java:206)\r\n\tat java.net.AbstractPlainSocketImpl.connect(AbstractPlainSocketImpl.java:188)\r\n\tat java.net.PlainSocketImpl.connect(PlainSocketImpl.java:172)\r\n\tat java.net.SocksSocketImpl.connect(SocksSocketImpl.java:392)\r\n\tat java.net.Socket.connect(Socket.java:589)\r\n\tat java.net.Socket.connect(Socket.java:538)\r\n\tat sun.net.NetworkClient.doConnect(NetworkClient.java:180)\r\n\tat sun.net.www.http.HttpClient.openServer(HttpClient.java:432)\r\n\tat sun.net.www.http.HttpClient.openServer(HttpClient.java:527)\r\n\tat sun.net.www.http.HttpClient.\u003cinit\u003e(HttpClient.java:211)\r\n\tat sun.net.www.http.HttpClient.New(HttpClient.java:308)\r\n\tat sun.net.www.http.HttpClient.New(HttpClient.java:326)\r\n\tat sun.net.www.protocol.http.HttpURLConnection.getNewHttpClient(HttpURLConnection.java:1169)\r\n\tat sun.net.www.protocol.http.HttpURLConnection.plainConnect0(HttpURLConnection.java:1105)\r\n\tat sun.net.www.protocol.http.HttpURLConnection.plainConnect(HttpURLConnection.java:999)\r\n\tat sun.net.www.protocol.http.HttpURLConnection.connect(HttpURLConnection.java:933)\r\n\tat stepDefinitions.StepDefs.cleanDatabase(StepDefs.java:30)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:223)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:211)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:205)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:252)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:141)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:112)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.apache.maven.surefire.util.ReflectionUtils.invokeMethodWithArray(ReflectionUtils.java:189)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory$ProviderProxy.invoke(ProviderFactory.java:165)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory.invokeProvider(ProviderFactory.java:85)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:115)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:75)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "line": 18,
  "name": "Add/create multiple customer\u0027s data",
  "description": "",
  "id": "add/create-customer\u0027s-data-into-restful-service;add/create-multiple-customer\u0027s-data",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "the client has to add a new customer with name \"\u003cuserName\u003e\", address \"\u003cuserAddress\u003e\" and phone \"\u003cuserPhone\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "the client sends the POST request",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "the client should obtain the following XML message",
  "keyword": "Then ",
  "doc_string": {
    "content_type": "",
    "line": 22,
    "value": "\u003cCustomer\u003e\r\n\u003cname\u003e\u003cuserName\u003e\u003c/name\u003e\r\n\u003caddress\u003e\u003cuserAddress\u003e\u003c/address\u003e\r\n\u003cphone\u003e\u003cuserPhone\u003e\u003c/phone\u003e\r\n\u003c/Customer\u003e"
  }
});
formatter.examples({
  "line": 30,
  "name": "",
  "description": "",
  "id": "add/create-customer\u0027s-data-into-restful-service;add/create-multiple-customer\u0027s-data;",
  "rows": [
    {
      "cells": [
        "userName",
        "userAddress",
        "userPhone"
      ],
      "line": 31,
      "id": "add/create-customer\u0027s-data-into-restful-service;add/create-multiple-customer\u0027s-data;;1"
    },
    {
      "cells": [
        "David",
        "2 random st.",
        "226611000"
      ],
      "line": 32,
      "id": "add/create-customer\u0027s-data-into-restful-service;add/create-multiple-customer\u0027s-data;;2"
    },
    {
      "cells": [
        "Peter",
        "Queen St.",
        "220001166"
      ],
      "line": 33,
      "id": "add/create-customer\u0027s-data-into-restful-service;add/create-multiple-customer\u0027s-data;;3"
    },
    {
      "cells": [
        "Gary",
        "Hobsan St.",
        "661062217"
      ],
      "line": 34,
      "id": "add/create-customer\u0027s-data-into-restful-service;add/create-multiple-customer\u0027s-data;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 2,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
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
  "duration": 322422,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Add/create multiple customer\u0027s data",
  "description": "",
  "id": "add/create-customer\u0027s-data-into-restful-service;add/create-multiple-customer\u0027s-data;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "the client has to add a new customer with name \"David\", address \"2 random st.\" and phone \"226611000\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "the client sends the POST request",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "the client should obtain the following XML message",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then ",
  "doc_string": {
    "content_type": "",
    "line": 22,
    "value": "\u003cCustomer\u003e\r\n\u003cname\u003eDavid\u003c/name\u003e\r\n\u003caddress\u003e2 random st.\u003c/address\u003e\r\n\u003cphone\u003e226611000\u003c/phone\u003e\r\n\u003c/Customer\u003e"
  }
});
formatter.match({
  "arguments": [
    {
      "val": "David",
      "offset": 48
    },
    {
      "val": "2 random st.",
      "offset": 65
    },
    {
      "val": "226611000",
      "offset": 90
    }
  ],
  "location": "StepDefs.add_a_new_customer_with_name_address_and_phone(String,String,String)"
});
formatter.result({
  "duration": 509711,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.the_client_sends_the_POST_request()"
});
formatter.result({
  "duration": 1004661678,
  "error_message": "java.lang.AssertionError: Failure at: the_client_sends_the_POST_request\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat stepDefinitions.StepDefs.the_client_sends_the_POST_request(StepDefs.java:74)\r\n\tat ✽.When the client sends the POST request(actionCreate.feature:20)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefs.the_client_should_obtain_the_following_XML(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1003665570,
  "error_message": "java.net.ConnectException: Connection refused: connect\r\n\tat java.net.DualStackPlainSocketImpl.connect0(Native Method)\r\n\tat java.net.DualStackPlainSocketImpl.socketConnect(DualStackPlainSocketImpl.java:79)\r\n\tat java.net.AbstractPlainSocketImpl.doConnect(AbstractPlainSocketImpl.java:350)\r\n\tat java.net.AbstractPlainSocketImpl.connectToAddress(AbstractPlainSocketImpl.java:206)\r\n\tat java.net.AbstractPlainSocketImpl.connect(AbstractPlainSocketImpl.java:188)\r\n\tat java.net.PlainSocketImpl.connect(PlainSocketImpl.java:172)\r\n\tat java.net.SocksSocketImpl.connect(SocksSocketImpl.java:392)\r\n\tat java.net.Socket.connect(Socket.java:589)\r\n\tat java.net.Socket.connect(Socket.java:538)\r\n\tat sun.net.NetworkClient.doConnect(NetworkClient.java:180)\r\n\tat sun.net.www.http.HttpClient.openServer(HttpClient.java:432)\r\n\tat sun.net.www.http.HttpClient.openServer(HttpClient.java:527)\r\n\tat sun.net.www.http.HttpClient.\u003cinit\u003e(HttpClient.java:211)\r\n\tat sun.net.www.http.HttpClient.New(HttpClient.java:308)\r\n\tat sun.net.www.http.HttpClient.New(HttpClient.java:326)\r\n\tat sun.net.www.protocol.http.HttpURLConnection.getNewHttpClient(HttpURLConnection.java:1169)\r\n\tat sun.net.www.protocol.http.HttpURLConnection.plainConnect0(HttpURLConnection.java:1105)\r\n\tat sun.net.www.protocol.http.HttpURLConnection.plainConnect(HttpURLConnection.java:999)\r\n\tat sun.net.www.protocol.http.HttpURLConnection.connect(HttpURLConnection.java:933)\r\n\tat stepDefinitions.StepDefs.cleanDatabase(StepDefs.java:30)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:223)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:211)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:205)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:252)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:141)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:112)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.apache.maven.surefire.util.ReflectionUtils.invokeMethodWithArray(ReflectionUtils.java:189)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory$ProviderProxy.invoke(ProviderFactory.java:165)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory.invokeProvider(ProviderFactory.java:85)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:115)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:75)\r\n",
  "status": "failed"
});
formatter.background({
  "line": 2,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
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
  "duration": 607702,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Add/create multiple customer\u0027s data",
  "description": "",
  "id": "add/create-customer\u0027s-data-into-restful-service;add/create-multiple-customer\u0027s-data;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "the client has to add a new customer with name \"Peter\", address \"Queen St.\" and phone \"220001166\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "the client sends the POST request",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "the client should obtain the following XML message",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then ",
  "doc_string": {
    "content_type": "",
    "line": 22,
    "value": "\u003cCustomer\u003e\r\n\u003cname\u003ePeter\u003c/name\u003e\r\n\u003caddress\u003eQueen St.\u003c/address\u003e\r\n\u003cphone\u003e220001166\u003c/phone\u003e\r\n\u003c/Customer\u003e"
  }
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
  "location": "StepDefs.add_a_new_customer_with_name_address_and_phone(String,String,String)"
});
formatter.result({
  "duration": 391568,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.the_client_sends_the_POST_request()"
});
formatter.result({
  "duration": 1004529312,
  "error_message": "java.lang.AssertionError: Failure at: the_client_sends_the_POST_request\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat stepDefinitions.StepDefs.the_client_sends_the_POST_request(StepDefs.java:74)\r\n\tat ✽.When the client sends the POST request(actionCreate.feature:20)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefs.the_client_should_obtain_the_following_XML(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1004244032,
  "error_message": "java.net.ConnectException: Connection refused: connect\r\n\tat java.net.DualStackPlainSocketImpl.connect0(Native Method)\r\n\tat java.net.DualStackPlainSocketImpl.socketConnect(DualStackPlainSocketImpl.java:79)\r\n\tat java.net.AbstractPlainSocketImpl.doConnect(AbstractPlainSocketImpl.java:350)\r\n\tat java.net.AbstractPlainSocketImpl.connectToAddress(AbstractPlainSocketImpl.java:206)\r\n\tat java.net.AbstractPlainSocketImpl.connect(AbstractPlainSocketImpl.java:188)\r\n\tat java.net.PlainSocketImpl.connect(PlainSocketImpl.java:172)\r\n\tat java.net.SocksSocketImpl.connect(SocksSocketImpl.java:392)\r\n\tat java.net.Socket.connect(Socket.java:589)\r\n\tat java.net.Socket.connect(Socket.java:538)\r\n\tat sun.net.NetworkClient.doConnect(NetworkClient.java:180)\r\n\tat sun.net.www.http.HttpClient.openServer(HttpClient.java:432)\r\n\tat sun.net.www.http.HttpClient.openServer(HttpClient.java:527)\r\n\tat sun.net.www.http.HttpClient.\u003cinit\u003e(HttpClient.java:211)\r\n\tat sun.net.www.http.HttpClient.New(HttpClient.java:308)\r\n\tat sun.net.www.http.HttpClient.New(HttpClient.java:326)\r\n\tat sun.net.www.protocol.http.HttpURLConnection.getNewHttpClient(HttpURLConnection.java:1169)\r\n\tat sun.net.www.protocol.http.HttpURLConnection.plainConnect0(HttpURLConnection.java:1105)\r\n\tat sun.net.www.protocol.http.HttpURLConnection.plainConnect(HttpURLConnection.java:999)\r\n\tat sun.net.www.protocol.http.HttpURLConnection.connect(HttpURLConnection.java:933)\r\n\tat stepDefinitions.StepDefs.cleanDatabase(StepDefs.java:30)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:223)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:211)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:205)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:252)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:141)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:112)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.apache.maven.surefire.util.ReflectionUtils.invokeMethodWithArray(ReflectionUtils.java:189)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory$ProviderProxy.invoke(ProviderFactory.java:165)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory.invokeProvider(ProviderFactory.java:85)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:115)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:75)\r\n",
  "status": "failed"
});
formatter.background({
  "line": 2,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
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
  "duration": 487189,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Add/create multiple customer\u0027s data",
  "description": "",
  "id": "add/create-customer\u0027s-data-into-restful-service;add/create-multiple-customer\u0027s-data;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "the client has to add a new customer with name \"Gary\", address \"Hobsan St.\" and phone \"661062217\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "the client sends the POST request",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "the client should obtain the following XML message",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then ",
  "doc_string": {
    "content_type": "",
    "line": 22,
    "value": "\u003cCustomer\u003e\r\n\u003cname\u003eGary\u003c/name\u003e\r\n\u003caddress\u003eHobsan St.\u003c/address\u003e\r\n\u003cphone\u003e661062217\u003c/phone\u003e\r\n\u003c/Customer\u003e"
  }
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
  "location": "StepDefs.add_a_new_customer_with_name_address_and_phone(String,String,String)"
});
formatter.result({
  "duration": 653141,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.the_client_sends_the_POST_request()"
});
formatter.result({
  "duration": 1004758484,
  "error_message": "java.lang.AssertionError: Failure at: the_client_sends_the_POST_request\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat stepDefinitions.StepDefs.the_client_sends_the_POST_request(StepDefs.java:74)\r\n\tat ✽.When the client sends the POST request(actionCreate.feature:20)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefs.the_client_should_obtain_the_following_XML(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1003400442,
  "error_message": "java.net.ConnectException: Connection refused: connect\r\n\tat java.net.DualStackPlainSocketImpl.connect0(Native Method)\r\n\tat java.net.DualStackPlainSocketImpl.socketConnect(DualStackPlainSocketImpl.java:79)\r\n\tat java.net.AbstractPlainSocketImpl.doConnect(AbstractPlainSocketImpl.java:350)\r\n\tat java.net.AbstractPlainSocketImpl.connectToAddress(AbstractPlainSocketImpl.java:206)\r\n\tat java.net.AbstractPlainSocketImpl.connect(AbstractPlainSocketImpl.java:188)\r\n\tat java.net.PlainSocketImpl.connect(PlainSocketImpl.java:172)\r\n\tat java.net.SocksSocketImpl.connect(SocksSocketImpl.java:392)\r\n\tat java.net.Socket.connect(Socket.java:589)\r\n\tat java.net.Socket.connect(Socket.java:538)\r\n\tat sun.net.NetworkClient.doConnect(NetworkClient.java:180)\r\n\tat sun.net.www.http.HttpClient.openServer(HttpClient.java:432)\r\n\tat sun.net.www.http.HttpClient.openServer(HttpClient.java:527)\r\n\tat sun.net.www.http.HttpClient.\u003cinit\u003e(HttpClient.java:211)\r\n\tat sun.net.www.http.HttpClient.New(HttpClient.java:308)\r\n\tat sun.net.www.http.HttpClient.New(HttpClient.java:326)\r\n\tat sun.net.www.protocol.http.HttpURLConnection.getNewHttpClient(HttpURLConnection.java:1169)\r\n\tat sun.net.www.protocol.http.HttpURLConnection.plainConnect0(HttpURLConnection.java:1105)\r\n\tat sun.net.www.protocol.http.HttpURLConnection.plainConnect(HttpURLConnection.java:999)\r\n\tat sun.net.www.protocol.http.HttpURLConnection.connect(HttpURLConnection.java:933)\r\n\tat stepDefinitions.StepDefs.cleanDatabase(StepDefs.java:30)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:223)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:211)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:205)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:252)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:141)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:112)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.apache.maven.surefire.util.ReflectionUtils.invokeMethodWithArray(ReflectionUtils.java:189)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory$ProviderProxy.invoke(ProviderFactory.java:165)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory.invokeProvider(ProviderFactory.java:85)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:115)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:75)\r\n",
  "status": "failed"
});
formatter.uri("actionDelete.feature");
formatter.feature({
  "line": 1,
  "name": "Delete customer\u0027s data",
  "description": "",
  "id": "delete-customer\u0027s-data",
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
  "duration": 489164,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Delete Existing Customer\u0027s data",
  "description": "",
  "id": "delete-customer\u0027s-data;delete-existing-customer\u0027s-data",
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
  "name": "the client sends DELETE request with name \"Udit\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the client should obtain the following XML message",
  "keyword": "Then ",
  "doc_string": {
    "content_type": "",
    "line": 10,
    "value": "\u003cSuccessMessage\u003eCustomer \"Udit\" has been deleted\u003c/SuccessMessage\u003e"
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
  "duration": 1003572715,
  "error_message": "java.lang.AssertionError: Failure at: database_has_a_customer_s_data_with_name_address_and_phone\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat stepDefinitions.StepDefs.database_has_a_customer_s_data_with_name_address_and_phone(StepDefs.java:64)\r\n\tat ✽.Given database has a customer\u0027s data with name \"Udit\", address \"Random Street\" and phone \"229911122\"(actionDelete.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Udit",
      "offset": 43
    }
  ],
  "location": "StepDefs.the_client_sends_DELETE_request_with_name(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefs.the_client_should_obtain_the_following_XML(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1004729245,
  "error_message": "java.net.ConnectException: Connection refused: connect\r\n\tat java.net.DualStackPlainSocketImpl.connect0(Native Method)\r\n\tat java.net.DualStackPlainSocketImpl.socketConnect(DualStackPlainSocketImpl.java:79)\r\n\tat java.net.AbstractPlainSocketImpl.doConnect(AbstractPlainSocketImpl.java:350)\r\n\tat java.net.AbstractPlainSocketImpl.connectToAddress(AbstractPlainSocketImpl.java:206)\r\n\tat java.net.AbstractPlainSocketImpl.connect(AbstractPlainSocketImpl.java:188)\r\n\tat java.net.PlainSocketImpl.connect(PlainSocketImpl.java:172)\r\n\tat java.net.SocksSocketImpl.connect(SocksSocketImpl.java:392)\r\n\tat java.net.Socket.connect(Socket.java:589)\r\n\tat java.net.Socket.connect(Socket.java:538)\r\n\tat sun.net.NetworkClient.doConnect(NetworkClient.java:180)\r\n\tat sun.net.www.http.HttpClient.openServer(HttpClient.java:432)\r\n\tat sun.net.www.http.HttpClient.openServer(HttpClient.java:527)\r\n\tat sun.net.www.http.HttpClient.\u003cinit\u003e(HttpClient.java:211)\r\n\tat sun.net.www.http.HttpClient.New(HttpClient.java:308)\r\n\tat sun.net.www.http.HttpClient.New(HttpClient.java:326)\r\n\tat sun.net.www.protocol.http.HttpURLConnection.getNewHttpClient(HttpURLConnection.java:1169)\r\n\tat sun.net.www.protocol.http.HttpURLConnection.plainConnect0(HttpURLConnection.java:1105)\r\n\tat sun.net.www.protocol.http.HttpURLConnection.plainConnect(HttpURLConnection.java:999)\r\n\tat sun.net.www.protocol.http.HttpURLConnection.connect(HttpURLConnection.java:933)\r\n\tat stepDefinitions.StepDefs.cleanDatabase(StepDefs.java:30)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:223)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:211)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:205)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:252)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:141)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:112)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.apache.maven.surefire.util.ReflectionUtils.invokeMethodWithArray(ReflectionUtils.java:189)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory$ProviderProxy.invoke(ProviderFactory.java:165)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory.invokeProvider(ProviderFactory.java:85)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:115)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:75)\r\n",
  "status": "failed"
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
  "duration": 560287,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Try to delete data of non existing customer",
  "description": "",
  "id": "delete-customer\u0027s-data;try-to-delete-data-of-non-existing-customer",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "there is no customer\u0027s data with name \"RandomCustomer\"",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "the client sends DELETE request with name \"RandomCustomer\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "the client should obtain the following XML message",
  "keyword": "Then ",
  "doc_string": {
    "content_type": "",
    "line": 18,
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
  "duration": 1006874375,
  "error_message": "java.lang.AssertionError: Failure at: there_is_no_customer_s_data_with_name\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat stepDefinitions.StepDefs.there_is_no_customer_s_data_with_name(StepDefs.java:52)\r\n\tat ✽.Given there is no customer\u0027s data with name \"RandomCustomer\"(actionDelete.feature:15)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "RandomCustomer",
      "offset": 43
    }
  ],
  "location": "StepDefs.the_client_sends_DELETE_request_with_name(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefs.the_client_should_obtain_the_following_XML(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1003117927,
  "error_message": "java.net.ConnectException: Connection refused: connect\r\n\tat java.net.DualStackPlainSocketImpl.connect0(Native Method)\r\n\tat java.net.DualStackPlainSocketImpl.socketConnect(DualStackPlainSocketImpl.java:79)\r\n\tat java.net.AbstractPlainSocketImpl.doConnect(AbstractPlainSocketImpl.java:350)\r\n\tat java.net.AbstractPlainSocketImpl.connectToAddress(AbstractPlainSocketImpl.java:206)\r\n\tat java.net.AbstractPlainSocketImpl.connect(AbstractPlainSocketImpl.java:188)\r\n\tat java.net.PlainSocketImpl.connect(PlainSocketImpl.java:172)\r\n\tat java.net.SocksSocketImpl.connect(SocksSocketImpl.java:392)\r\n\tat java.net.Socket.connect(Socket.java:589)\r\n\tat java.net.Socket.connect(Socket.java:538)\r\n\tat sun.net.NetworkClient.doConnect(NetworkClient.java:180)\r\n\tat sun.net.www.http.HttpClient.openServer(HttpClient.java:432)\r\n\tat sun.net.www.http.HttpClient.openServer(HttpClient.java:527)\r\n\tat sun.net.www.http.HttpClient.\u003cinit\u003e(HttpClient.java:211)\r\n\tat sun.net.www.http.HttpClient.New(HttpClient.java:308)\r\n\tat sun.net.www.http.HttpClient.New(HttpClient.java:326)\r\n\tat sun.net.www.protocol.http.HttpURLConnection.getNewHttpClient(HttpURLConnection.java:1169)\r\n\tat sun.net.www.protocol.http.HttpURLConnection.plainConnect0(HttpURLConnection.java:1105)\r\n\tat sun.net.www.protocol.http.HttpURLConnection.plainConnect(HttpURLConnection.java:999)\r\n\tat sun.net.www.protocol.http.HttpURLConnection.connect(HttpURLConnection.java:933)\r\n\tat stepDefinitions.StepDefs.cleanDatabase(StepDefs.java:30)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:223)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:211)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:205)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:252)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:141)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:112)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.apache.maven.surefire.util.ReflectionUtils.invokeMethodWithArray(ReflectionUtils.java:189)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory$ProviderProxy.invoke(ProviderFactory.java:165)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory.invokeProvider(ProviderFactory.java:85)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:115)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:75)\r\n",
  "status": "failed"
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
  "duration": 573326,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Delete all the Existing Customer\u0027s data",
  "description": "",
  "id": "delete-customer\u0027s-data;delete-all-the-existing-customer\u0027s-data",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 23,
  "name": "database has a customer\u0027s data with name \"David\", address \"2 random st.\" and phone \"226611000\"",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "database has another customer\u0027s data with name \"Peter\", address \"Queen St.\" and phone \"220001166\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "database has another customer\u0027s data with name \"Gary\", address \"Hobsan St.\" and phone \"661062217\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "the client sends the DELETE request",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "the client should obtain the following XML message",
  "keyword": "Then ",
  "doc_string": {
    "content_type": "",
    "line": 28,
    "value": "\u003cSuccessMessage\u003eDatabase Cleaned\u003c/SuccessMessage\u003e"
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
  "duration": 1006523110,
  "error_message": "java.lang.AssertionError: Failure at: database_has_a_customer_s_data_with_name_address_and_phone\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat stepDefinitions.StepDefs.database_has_a_customer_s_data_with_name_address_and_phone(StepDefs.java:64)\r\n\tat ✽.Given database has a customer\u0027s data with name \"David\", address \"2 random st.\" and phone \"226611000\"(actionDelete.feature:23)\r\n",
  "status": "failed"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "StepDefs.cleanDatabase()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefs.the_client_should_obtain_the_following_XML(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1004621376,
  "error_message": "java.net.ConnectException: Connection refused: connect\r\n\tat java.net.DualStackPlainSocketImpl.connect0(Native Method)\r\n\tat java.net.DualStackPlainSocketImpl.socketConnect(DualStackPlainSocketImpl.java:79)\r\n\tat java.net.AbstractPlainSocketImpl.doConnect(AbstractPlainSocketImpl.java:350)\r\n\tat java.net.AbstractPlainSocketImpl.connectToAddress(AbstractPlainSocketImpl.java:206)\r\n\tat java.net.AbstractPlainSocketImpl.connect(AbstractPlainSocketImpl.java:188)\r\n\tat java.net.PlainSocketImpl.connect(PlainSocketImpl.java:172)\r\n\tat java.net.SocksSocketImpl.connect(SocksSocketImpl.java:392)\r\n\tat java.net.Socket.connect(Socket.java:589)\r\n\tat java.net.Socket.connect(Socket.java:538)\r\n\tat sun.net.NetworkClient.doConnect(NetworkClient.java:180)\r\n\tat sun.net.www.http.HttpClient.openServer(HttpClient.java:432)\r\n\tat sun.net.www.http.HttpClient.openServer(HttpClient.java:527)\r\n\tat sun.net.www.http.HttpClient.\u003cinit\u003e(HttpClient.java:211)\r\n\tat sun.net.www.http.HttpClient.New(HttpClient.java:308)\r\n\tat sun.net.www.http.HttpClient.New(HttpClient.java:326)\r\n\tat sun.net.www.protocol.http.HttpURLConnection.getNewHttpClient(HttpURLConnection.java:1169)\r\n\tat sun.net.www.protocol.http.HttpURLConnection.plainConnect0(HttpURLConnection.java:1105)\r\n\tat sun.net.www.protocol.http.HttpURLConnection.plainConnect(HttpURLConnection.java:999)\r\n\tat sun.net.www.protocol.http.HttpURLConnection.connect(HttpURLConnection.java:933)\r\n\tat stepDefinitions.StepDefs.cleanDatabase(StepDefs.java:30)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:223)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:211)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:205)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:252)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:141)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:112)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.apache.maven.surefire.util.ReflectionUtils.invokeMethodWithArray(ReflectionUtils.java:189)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory$ProviderProxy.invoke(ProviderFactory.java:165)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory.invokeProvider(ProviderFactory.java:85)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:115)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:75)\r\n",
  "status": "failed"
});
formatter.uri("actionRead.feature");
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
  "duration": 739278,
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
  "duration": 1004635601,
  "error_message": "java.lang.AssertionError: Failure at: database_has_a_customer_s_data_with_name_address_and_phone\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat stepDefinitions.StepDefs.database_has_a_customer_s_data_with_name_address_and_phone(StepDefs.java:64)\r\n\tat ✽.Given database has a customer\u0027s data with name \"Udit\", address \"Random Street\" and phone \"229911122\"(actionRead.feature:7)\r\n",
  "status": "failed"
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
  "status": "skipped"
});
formatter.match({
  "location": "StepDefs.the_client_should_obtain_the_following_XML(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1003831127,
  "error_message": "java.net.ConnectException: Connection refused: connect\r\n\tat java.net.DualStackPlainSocketImpl.connect0(Native Method)\r\n\tat java.net.DualStackPlainSocketImpl.socketConnect(DualStackPlainSocketImpl.java:79)\r\n\tat java.net.AbstractPlainSocketImpl.doConnect(AbstractPlainSocketImpl.java:350)\r\n\tat java.net.AbstractPlainSocketImpl.connectToAddress(AbstractPlainSocketImpl.java:206)\r\n\tat java.net.AbstractPlainSocketImpl.connect(AbstractPlainSocketImpl.java:188)\r\n\tat java.net.PlainSocketImpl.connect(PlainSocketImpl.java:172)\r\n\tat java.net.SocksSocketImpl.connect(SocksSocketImpl.java:392)\r\n\tat java.net.Socket.connect(Socket.java:589)\r\n\tat java.net.Socket.connect(Socket.java:538)\r\n\tat sun.net.NetworkClient.doConnect(NetworkClient.java:180)\r\n\tat sun.net.www.http.HttpClient.openServer(HttpClient.java:432)\r\n\tat sun.net.www.http.HttpClient.openServer(HttpClient.java:527)\r\n\tat sun.net.www.http.HttpClient.\u003cinit\u003e(HttpClient.java:211)\r\n\tat sun.net.www.http.HttpClient.New(HttpClient.java:308)\r\n\tat sun.net.www.http.HttpClient.New(HttpClient.java:326)\r\n\tat sun.net.www.protocol.http.HttpURLConnection.getNewHttpClient(HttpURLConnection.java:1169)\r\n\tat sun.net.www.protocol.http.HttpURLConnection.plainConnect0(HttpURLConnection.java:1105)\r\n\tat sun.net.www.protocol.http.HttpURLConnection.plainConnect(HttpURLConnection.java:999)\r\n\tat sun.net.www.protocol.http.HttpURLConnection.connect(HttpURLConnection.java:933)\r\n\tat stepDefinitions.StepDefs.cleanDatabase(StepDefs.java:30)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:223)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:211)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:205)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:252)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:141)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:112)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.apache.maven.surefire.util.ReflectionUtils.invokeMethodWithArray(ReflectionUtils.java:189)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory$ProviderProxy.invoke(ProviderFactory.java:165)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory.invokeProvider(ProviderFactory.java:85)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:115)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:75)\r\n",
  "status": "failed"
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
  "duration": 428315,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Fetching all the data",
  "description": "",
  "id": "read/get-customer\u0027s-data-from-restful-service;fetching-all-the-data",
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
  "duration": 1005004647,
  "error_message": "java.lang.AssertionError: Failure at: database_has_a_customer_s_data_with_name_address_and_phone\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat stepDefinitions.StepDefs.database_has_a_customer_s_data_with_name_address_and_phone(StepDefs.java:64)\r\n\tat ✽.Given database has a customer\u0027s data with name \"David\", address \"2 random st.\" and phone \"226611000\"(actionRead.feature:20)\r\n",
  "status": "failed"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "StepDefs.the_client_sends_the_GET_request()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefs.the_client_should_obtain_the_following_XML(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1003124644,
  "error_message": "java.net.ConnectException: Connection refused: connect\r\n\tat java.net.DualStackPlainSocketImpl.connect0(Native Method)\r\n\tat java.net.DualStackPlainSocketImpl.socketConnect(DualStackPlainSocketImpl.java:79)\r\n\tat java.net.AbstractPlainSocketImpl.doConnect(AbstractPlainSocketImpl.java:350)\r\n\tat java.net.AbstractPlainSocketImpl.connectToAddress(AbstractPlainSocketImpl.java:206)\r\n\tat java.net.AbstractPlainSocketImpl.connect(AbstractPlainSocketImpl.java:188)\r\n\tat java.net.PlainSocketImpl.connect(PlainSocketImpl.java:172)\r\n\tat java.net.SocksSocketImpl.connect(SocksSocketImpl.java:392)\r\n\tat java.net.Socket.connect(Socket.java:589)\r\n\tat java.net.Socket.connect(Socket.java:538)\r\n\tat sun.net.NetworkClient.doConnect(NetworkClient.java:180)\r\n\tat sun.net.www.http.HttpClient.openServer(HttpClient.java:432)\r\n\tat sun.net.www.http.HttpClient.openServer(HttpClient.java:527)\r\n\tat sun.net.www.http.HttpClient.\u003cinit\u003e(HttpClient.java:211)\r\n\tat sun.net.www.http.HttpClient.New(HttpClient.java:308)\r\n\tat sun.net.www.http.HttpClient.New(HttpClient.java:326)\r\n\tat sun.net.www.protocol.http.HttpURLConnection.getNewHttpClient(HttpURLConnection.java:1169)\r\n\tat sun.net.www.protocol.http.HttpURLConnection.plainConnect0(HttpURLConnection.java:1105)\r\n\tat sun.net.www.protocol.http.HttpURLConnection.plainConnect(HttpURLConnection.java:999)\r\n\tat sun.net.www.protocol.http.HttpURLConnection.connect(HttpURLConnection.java:933)\r\n\tat stepDefinitions.StepDefs.cleanDatabase(StepDefs.java:30)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:223)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:211)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:205)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:252)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:141)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:112)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.apache.maven.surefire.util.ReflectionUtils.invokeMethodWithArray(ReflectionUtils.java:189)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory$ProviderProxy.invoke(ProviderFactory.java:165)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory.invokeProvider(ProviderFactory.java:85)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:115)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:75)\r\n",
  "status": "failed"
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
  "duration": 1173519,
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
  "duration": 1003756449,
  "error_message": "java.lang.AssertionError: Failure at: there_is_no_customer_s_data_with_name\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat stepDefinitions.StepDefs.there_is_no_customer_s_data_with_name(StepDefs.java:52)\r\n\tat ✽.Given there is no customer\u0027s data with name \"RandomCustomer\"(actionRead.feature:46)\r\n",
  "status": "failed"
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
  "status": "skipped"
});
formatter.match({
  "location": "StepDefs.the_client_should_obtain_the_following_XML(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1004451077,
  "error_message": "java.net.ConnectException: Connection refused: connect\r\n\tat java.net.DualStackPlainSocketImpl.connect0(Native Method)\r\n\tat java.net.DualStackPlainSocketImpl.socketConnect(DualStackPlainSocketImpl.java:79)\r\n\tat java.net.AbstractPlainSocketImpl.doConnect(AbstractPlainSocketImpl.java:350)\r\n\tat java.net.AbstractPlainSocketImpl.connectToAddress(AbstractPlainSocketImpl.java:206)\r\n\tat java.net.AbstractPlainSocketImpl.connect(AbstractPlainSocketImpl.java:188)\r\n\tat java.net.PlainSocketImpl.connect(PlainSocketImpl.java:172)\r\n\tat java.net.SocksSocketImpl.connect(SocksSocketImpl.java:392)\r\n\tat java.net.Socket.connect(Socket.java:589)\r\n\tat java.net.Socket.connect(Socket.java:538)\r\n\tat sun.net.NetworkClient.doConnect(NetworkClient.java:180)\r\n\tat sun.net.www.http.HttpClient.openServer(HttpClient.java:432)\r\n\tat sun.net.www.http.HttpClient.openServer(HttpClient.java:527)\r\n\tat sun.net.www.http.HttpClient.\u003cinit\u003e(HttpClient.java:211)\r\n\tat sun.net.www.http.HttpClient.New(HttpClient.java:308)\r\n\tat sun.net.www.http.HttpClient.New(HttpClient.java:326)\r\n\tat sun.net.www.protocol.http.HttpURLConnection.getNewHttpClient(HttpURLConnection.java:1169)\r\n\tat sun.net.www.protocol.http.HttpURLConnection.plainConnect0(HttpURLConnection.java:1105)\r\n\tat sun.net.www.protocol.http.HttpURLConnection.plainConnect(HttpURLConnection.java:999)\r\n\tat sun.net.www.protocol.http.HttpURLConnection.connect(HttpURLConnection.java:933)\r\n\tat stepDefinitions.StepDefs.cleanDatabase(StepDefs.java:30)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:223)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:211)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:205)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:252)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:141)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:112)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.apache.maven.surefire.util.ReflectionUtils.invokeMethodWithArray(ReflectionUtils.java:189)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory$ProviderProxy.invoke(ProviderFactory.java:165)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory.invokeProvider(ProviderFactory.java:85)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:115)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:75)\r\n",
  "status": "failed"
});
formatter.uri("actionUpdate.feature");
formatter.feature({
  "line": 1,
  "name": "Update/put existing customer data",
  "description": "",
  "id": "update/put-existing-customer-data",
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
  "duration": 319261,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Update Existing Customer\u0027s data",
  "description": "",
  "id": "update/put-existing-customer-data;update-existing-customer\u0027s-data",
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
  "name": "the client sends PUT request with name \"Udit\", address \"Glass Road, Mt.Roskill\" and phone \"229911122\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the client should obtain the following XML message",
  "keyword": "Then ",
  "doc_string": {
    "content_type": "",
    "line": 10,
    "value": "\u003cSuccessMessage\u003eCustomer\u0027s Data Updated\u003c/SuccessMessage\u003e\r\n\u003cCustomer\u003e\r\n\u003cname\u003eUdit\u003c/name\u003e\r\n\u003caddress\u003eGlass Road, Mt.Roskill\u003c/address\u003e\r\n\u003cphone\u003e229911122\u003c/phone\u003e\r\n\u003c/Customer\u003e"
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
  "duration": 1004493356,
  "error_message": "java.lang.AssertionError: Failure at: database_has_a_customer_s_data_with_name_address_and_phone\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat stepDefinitions.StepDefs.database_has_a_customer_s_data_with_name_address_and_phone(StepDefs.java:64)\r\n\tat ✽.Given database has a customer\u0027s data with name \"Udit\", address \"Random Street\" and phone \"229911122\"(actionUpdate.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Udit",
      "offset": 40
    },
    {
      "val": "Glass Road, Mt.Roskill",
      "offset": 56
    },
    {
      "val": "229911122",
      "offset": 91
    }
  ],
  "location": "StepDefs.the_client_sends_PUT_request_with_name_address_and_phone(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefs.the_client_should_obtain_the_following_XML(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1004883344,
  "error_message": "java.net.ConnectException: Connection refused: connect\r\n\tat java.net.DualStackPlainSocketImpl.connect0(Native Method)\r\n\tat java.net.DualStackPlainSocketImpl.socketConnect(DualStackPlainSocketImpl.java:79)\r\n\tat java.net.AbstractPlainSocketImpl.doConnect(AbstractPlainSocketImpl.java:350)\r\n\tat java.net.AbstractPlainSocketImpl.connectToAddress(AbstractPlainSocketImpl.java:206)\r\n\tat java.net.AbstractPlainSocketImpl.connect(AbstractPlainSocketImpl.java:188)\r\n\tat java.net.PlainSocketImpl.connect(PlainSocketImpl.java:172)\r\n\tat java.net.SocksSocketImpl.connect(SocksSocketImpl.java:392)\r\n\tat java.net.Socket.connect(Socket.java:589)\r\n\tat java.net.Socket.connect(Socket.java:538)\r\n\tat sun.net.NetworkClient.doConnect(NetworkClient.java:180)\r\n\tat sun.net.www.http.HttpClient.openServer(HttpClient.java:432)\r\n\tat sun.net.www.http.HttpClient.openServer(HttpClient.java:527)\r\n\tat sun.net.www.http.HttpClient.\u003cinit\u003e(HttpClient.java:211)\r\n\tat sun.net.www.http.HttpClient.New(HttpClient.java:308)\r\n\tat sun.net.www.http.HttpClient.New(HttpClient.java:326)\r\n\tat sun.net.www.protocol.http.HttpURLConnection.getNewHttpClient(HttpURLConnection.java:1169)\r\n\tat sun.net.www.protocol.http.HttpURLConnection.plainConnect0(HttpURLConnection.java:1105)\r\n\tat sun.net.www.protocol.http.HttpURLConnection.plainConnect(HttpURLConnection.java:999)\r\n\tat sun.net.www.protocol.http.HttpURLConnection.connect(HttpURLConnection.java:933)\r\n\tat stepDefinitions.StepDefs.cleanDatabase(StepDefs.java:30)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:223)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:211)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:205)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:252)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:141)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:112)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.apache.maven.surefire.util.ReflectionUtils.invokeMethodWithArray(ReflectionUtils.java:189)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory$ProviderProxy.invoke(ProviderFactory.java:165)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory.invokeProvider(ProviderFactory.java:85)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:115)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:75)\r\n",
  "status": "failed"
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
  "duration": 409744,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Try to update data of non existing customer",
  "description": "",
  "id": "update/put-existing-customer-data;try-to-update-data-of-non-existing-customer",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 20,
  "name": "there is no customer\u0027s data with name \"RandomCustomer\"",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "the client sends PUT request with name \"RandomCustomer\", address \"Some Random Street,New Zealand\" and phone \"13243546\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "the client should obtain the following XML message",
  "keyword": "Then ",
  "doc_string": {
    "content_type": "",
    "line": 23,
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
  "duration": 1003748151,
  "error_message": "java.lang.AssertionError: Failure at: there_is_no_customer_s_data_with_name\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat stepDefinitions.StepDefs.there_is_no_customer_s_data_with_name(StepDefs.java:52)\r\n\tat ✽.Given there is no customer\u0027s data with name \"RandomCustomer\"(actionUpdate.feature:20)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "RandomCustomer",
      "offset": 40
    },
    {
      "val": "Some Random Street,New Zealand",
      "offset": 66
    },
    {
      "val": "13243546",
      "offset": 109
    }
  ],
  "location": "StepDefs.the_client_sends_PUT_request_with_name_address_and_phone(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefs.the_client_should_obtain_the_following_XML(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1002942097,
  "error_message": "java.net.ConnectException: Connection refused: connect\r\n\tat java.net.DualStackPlainSocketImpl.connect0(Native Method)\r\n\tat java.net.DualStackPlainSocketImpl.socketConnect(DualStackPlainSocketImpl.java:79)\r\n\tat java.net.AbstractPlainSocketImpl.doConnect(AbstractPlainSocketImpl.java:350)\r\n\tat java.net.AbstractPlainSocketImpl.connectToAddress(AbstractPlainSocketImpl.java:206)\r\n\tat java.net.AbstractPlainSocketImpl.connect(AbstractPlainSocketImpl.java:188)\r\n\tat java.net.PlainSocketImpl.connect(PlainSocketImpl.java:172)\r\n\tat java.net.SocksSocketImpl.connect(SocksSocketImpl.java:392)\r\n\tat java.net.Socket.connect(Socket.java:589)\r\n\tat java.net.Socket.connect(Socket.java:538)\r\n\tat sun.net.NetworkClient.doConnect(NetworkClient.java:180)\r\n\tat sun.net.www.http.HttpClient.openServer(HttpClient.java:432)\r\n\tat sun.net.www.http.HttpClient.openServer(HttpClient.java:527)\r\n\tat sun.net.www.http.HttpClient.\u003cinit\u003e(HttpClient.java:211)\r\n\tat sun.net.www.http.HttpClient.New(HttpClient.java:308)\r\n\tat sun.net.www.http.HttpClient.New(HttpClient.java:326)\r\n\tat sun.net.www.protocol.http.HttpURLConnection.getNewHttpClient(HttpURLConnection.java:1169)\r\n\tat sun.net.www.protocol.http.HttpURLConnection.plainConnect0(HttpURLConnection.java:1105)\r\n\tat sun.net.www.protocol.http.HttpURLConnection.plainConnect(HttpURLConnection.java:999)\r\n\tat sun.net.www.protocol.http.HttpURLConnection.connect(HttpURLConnection.java:933)\r\n\tat stepDefinitions.StepDefs.cleanDatabase(StepDefs.java:30)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:223)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:211)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:205)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:252)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:141)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:112)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.apache.maven.surefire.util.ReflectionUtils.invokeMethodWithArray(ReflectionUtils.java:189)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory$ProviderProxy.invoke(ProviderFactory.java:165)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory.invokeProvider(ProviderFactory.java:85)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:115)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:75)\r\n",
  "status": "failed"
});
});