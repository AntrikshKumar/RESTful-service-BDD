package com.bdd.restful.customer;
import java.io.UnsupportedEncodingException;
import java.util.HashMap;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("xml")  
public class CustomerInfo {
	public static HashMap<String,Customer> customerMap = new HashMap<String,Customer>();
	
    @POST  
    @Path("add/{name}/{address}/{phone}")
    @Produces(MediaType.TEXT_XML)  
    @Consumes(MediaType.TEXT_XML)    
	public String createCustomer(@PathParam("name")String name, @PathParam("address")String address, @PathParam("phone")long phone) throws UnsupportedEncodingException{
		address = java.net.URLDecoder.decode(address,"UTF-8");
		name = java.net.URLDecoder.decode(name,"UTF-8");
    	customerMap.put(name, new Customer(name, address, phone));
		String respStr = "<Customer>"+"<name>"+name+"</name>\n"+"<address>"+address+"</address>\n"+"<phone>"+phone+"</phone></Customer>";
		
		return respStr;
	}
	
    @PUT  
    @Path("update/{name}/{address}/{phone}")
    @Produces(MediaType.TEXT_XML)  
    @Consumes(MediaType.TEXT_XML)    
	public String updateCustomer(@PathParam("name")String name, @PathParam("address")String address, @PathParam("phone")long phone) throws UnsupportedEncodingException{
    	String respStr;
		address = java.net.URLDecoder.decode(address,"UTF-8");
		name = java.net.URLDecoder.decode(name,"UTF-8");

   		Customer customer = customerMap.get(name);

		if(customer!=null){
			customerMap.put(name, new Customer(name, address, phone));
			respStr = "<SuccessMessage>Customer "+name+" updated with below details></SuccessMessage>\n<name>"+customer.name+"</name>\n<address>"+customer.address+"</address>\n<phone>"+customer.phone+"</phone>\n";
		} else {
			respStr = "<ErrorMessage>Customer Not Exist with name: "+name+"</ErrorMessage>";
		}
		
		return respStr;
	}
    
    @GET  
    @Path("read/{custName}")  
    @Produces(MediaType.TEXT_XML) 	
	public String getCustomer(@PathParam("custName")String name) throws UnsupportedEncodingException{

		name = java.net.URLDecoder.decode(name,"UTF-8");
    	String respStr;

     		Customer customer = customerMap.get(name);
		
			if(customer!=null){
				respStr = "<Customer><name>"+customer.name+"</name><address>"+customer.address+"</address><phone>"+customer.phone+"</phone></Customer>";
			} else {
				respStr = "<ErrorMessage>Customer Not Exist with name: "+name+"</ErrorMessage>";
			}
		
		return respStr;		
	}	
    
    @GET  
    @Path("read/")  
    @Produces(MediaType.TEXT_XML) 	
	public String getAllCustomer(){
    	String respStr = "<Customers>";
    	
    	if(customerMap.size()!=0){
    		for (String key : customerMap.keySet()){
    			Customer customer = customerMap.get(key);
    			respStr += "<Customer><name>"+customer.name+"</name>"+
    					"<address>"+customer.address+"</address>"+
    					"<phone>"+customer.phone+"</phone></Customer>";

    		}		
    	} else {
			respStr = "No data in Database";
			return respStr;
		}
		return respStr+"</Customers>";	
	}
    
    @DELETE
    @Path("delete/{name}")
    @Produces(MediaType.TEXT_XML)  
    @Consumes(MediaType.TEXT_XML)    
	public String deleteCustomer(@PathParam("name")String name) throws UnsupportedEncodingException{
    	String respStr;

		name = java.net.URLDecoder.decode(name,"UTF-8");
   		Customer customer = customerMap.get(name);
		
		if(customer!=null){
			customerMap.remove(name);
			respStr = "<SuccessMessage>Customer "+name+" has been deleted></SuccessMessage>";
		} else {
			respStr = "<ErrorMessage>Customer Not Exist with name: "+name+"</ErrorMessage>";
		}
		
		return respStr;
	}    
    @DELETE
    @Path("deleteAll")
    @Produces(MediaType.TEXT_XML)  
    @Consumes(MediaType.TEXT_XML)    
	public String deleteAll() {
			customerMap.clear();
			return "<SuccessMessage>Database Cleaned</SuccessMessage>";
	}
}