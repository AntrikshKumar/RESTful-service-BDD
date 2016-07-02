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
		InputStream is;
		try {

			is = uc.getInputStream();
			BufferedReader rd = new BufferedReader(new InputStreamReader(is, Charset.forName("UTF-8")));
			StringBuilder sb = new StringBuilder();
			int cp=0;
			while ((cp = rd.read()) != -1) {

				sb.append((char) cp);
			}

			return sb.toString();
		} catch (IOException e) {
			System.out.println("Inside catch : "+ e.getMessage());
		}

		return null;
	    }
	
	public void compareXML(String expected,String actual){

		actual = actual.replace("\r\n", "").replace("\n", "");
		expected = expected.replace("\r\n", "").replace("\n", "");
		
		System.out.println("Actual:\t\t"+actual);
		System.out.println("expected:\t\t"+expected);

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
			t.printStackTrace();
		}
		return null;
	}
	
	}
