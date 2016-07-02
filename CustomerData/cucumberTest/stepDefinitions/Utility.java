package stepDefinitions;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLConnection;
import java.nio.charset.Charset;

public class Utility {

	public String readData(URLConnection uc){
		InputStream inptStrm;
		try {
		inptStrm = uc.getInputStream();
			BufferedReader bffrdRdr = new BufferedReader(new InputStreamReader(inptStrm, Charset.forName("UTF-8")));
			StringBuilder strnBldr = new StringBuilder();
			int i=0;
			while ((i = bffrdRdr.read()) != -1) {

				strnBldr.append((char) i);
			}

			return strnBldr.toString();
		} catch (IOException e) {
			System.out.println("Exception occured : " + e.getMessage());
			org.junit.Assert.fail("Failure at: readData");
		}

		return null;
	    }
	
	public void compareXML(String expected,String actual){

		actual = actual.replace("\r\n", "").replace("\n", "");
		expected = expected.replace("\r\n", "").replace("\n", "");
		
		System.out.println("Actual:\t\t"+actual);
		System.out.println("expected:\t"+expected);

		System.out.println("Result: "+actual.equals(expected));
		org.junit.Assert.assertEquals(actual,expected);
	}
	
	public URLConnection connSetup(String url,String type){
		try{
	    URL nURL = new URL(url);
	    URLConnection uc = nURL.openConnection();
		((HttpURLConnection) uc).setRequestMethod(type);
		uc.addRequestProperty("User-Agent", "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.0)");

		return uc;
		
		} catch(Throwable t){
			System.out.println("Exception occured : " + t.getMessage());
			org.junit.Assert.fail("Failure at: connSetup");
		}
		return null;
	}
	
	public String sendReq(URLConnection uc,String type,String url){
		try {
			String msg;
			System.out.println("URL ____ "+url);
			uc = connSetup(url,type);
			uc.connect();
			msg = readData(uc);
			return msg;
		} catch(Throwable t){
			System.out.println("Exception occured : " + t.getMessage());
			org.junit.Assert.fail("Failure at: sendReq");
		}
		return null;
	}
	
	}
