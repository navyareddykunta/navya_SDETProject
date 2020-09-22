


function getCapitals() {
	
  const x = document.getElementById("country").value;
	
     const regex = new RegExp("^[a-zA-Z ]+$"); 
	 const numberRegex = new RegExp("^[0-9]*$");
	 const element = document.getElementById("error");
	 console.log(codeSearch,"search by code outside")
   if(regex.test(x)){
	   console.log(x,"search by capital")
	   if(x.length>=3){

		 getapi(api_url_capital+x);  
	   }else{
		   codeSearch= true;
		  getapi(api_url_code+x,true);  
	   }	
   }
  if(numberRegex.test(x)){ 
  console.log(x,"search by code")
	getapi(api_url_calling_code+x); 
  }else{
	element.innerHTML = "Please enter valid input";
	 console.log("result not found");
	 data =[];
		show(data);
  }
}

 var codeSearch = false;
// api search by capital 
const api_url_capital = 
	"https://restcountries.eu/rest/v2/capital/" 
// api search by calling codes 
const api_url_calling_code = 
	"https://restcountries.eu/rest/v2/callingcode/"
	
const api_url_code = 
	"https://restcountries.eu/rest/v2/alpha/"


// Defining async function 
async function getapi(url ,da) { 
	console.log(da,"get");
	// Storing response 
	const response = await fetch(url); 
	
	// Storing data in form of JSON 
	var data = await response.json(); 
	console.log(data.status,"hell");
	if(data.status == 404){
		console.log("Not Found");
		data =[];
		show(data);
		 const element = document.getElementById("error");
		element.innerHTML = "Search not found";
	 console.log("result not found");
	}else{	
	show(data,da);
	 const element = document.getElementById("error");
		element.innerHTML = "";
	}	
} 
 
// Function to define innerHTML for HTML table 
function show(data,da) { 
console.log(da,"showw");
	let tab = 
		`<tr> 
		<th>Country</th> 
		<th>Capital</th> 
		<th>Calling codes</th> 
		<th>Code</th>
		</tr>`; 
	
	// Loop to access all rows 
	if(!da){
	for (let r of data) { 
		tab += `<tr> 
	<td>${r.name} </td> 
	<td>${r.capital}</td> 
	<td>${r.callingCodes[0]}</td> 	
	<td>${r.alpha3Code}</td>	
</tr>`; 
	} }else{
		tab += `<tr> 
	<td>${data.name} </td> 
	<td>${data.capital}</td> 
	<td>${data.callingCodes[0]}</td> 	
	<td>${data.alpha3Code}</td>	
</tr>`; 
	}
	
} 
