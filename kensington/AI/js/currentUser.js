document.getElementById("login_btn").onclick = function() { loginNow(); }
document.getElementById("login_btn_item").onclick = function() { loginNow(); }
document.getElementById("LogoutButton_item").onclick = function () { logoutNow(); }


targetAwardsURL = "https://kensingtonconsulting.sharepoint.com/sites/KensingtonTeam/_layouts/15/Doc.aspx?sourcedoc={7c220be0-2fdd-4bb8-8cbb-fae15e3d656a}&action=embedview&wdAllowInteractivity=False&Item='STATS'!A17%3AD25&wdHideGridlines=True&wdDownloadButton=True&wdInConfigurator=True&wdInConfigurator=True&edesNext=true&resen=false&ed1JS=false";


var currentConsultantInitials = "ZB";


const jokeContainer = document.getElementById("systemsReport");
const joke_url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let getJoke = () => {
	jokeContainer.classList.remove("fade");	
	
	//jokeContainer.innerHTML = "Happy New Year!";
	
	//fetch(joke_url)
	//	.then(data => data.json())
	//	.then(item => {
	//		jokeContainer.innerHTML = `${item.joke}`;
	//		//jokeContainer.classList.add("fade");
	//	});
}




// NOTIFICATIONS ----------
// Employee Of The Month
	const EOTM = "";
//
// Weekly Focus
	const WeeklyFocus = "Sell a retainer";
//
setTimeout(function () { setNotifications(); }, 500);
setTimeout(function () { checkDate(); }, 500);
// --------------------------



function checkDate() {

	// Create date from input value
	var inputDate = new Date("11/04/2022");

	// Get today's date
	var todaysDate = new Date();

	// call setHours to take the time out of the comparison
	if (inputDate.setHours(0, 0, 0, 0) == todaysDate.setHours(0, 0, 0, 0)) {
		// Date equals today's date
		//festiveMessage();
	}	
	
	//festiveMessage();
}



function festiveMessage() {

	//const element = document.getElementById("systemsReport");
	

	//document.getElementById("WelcomeMessage").innerHTML = "Happy Halloween 🎃"
	
	document.getElementById("festivePeopleImage").hidden = false;
	document.getElementById("defaultDashboardImage").hidden = true;
	document.getElementById("weatherWidget").hidden = true;


}


function setNotifications() {
	document.getElementById("EOTM_notif").innerHTML = EOTM;
	document.getElementById("WeeklyFocus_notif").innerHTML = WeeklyFocus;

}

function checkTime()
{
	//GET STORED TIME FOR BD
	const startHourInput = localStorage.getItem('bdHour_StartHour');
	const startMinInput = localStorage.getItem('bdHour_StartMins');
	console.log("START TIME: " + startHourInput + ":" + startMinInput);
	
	
	
	//const endHourInput = localStorage.getItem('bdHour_EndHour');
	//const endMinInput = localStorage.getItem('bdHour_EndMins');
	
	const BDhourOpen = 14 * 60 + 59;  
	const BDhourClosed = 15 * 60 + 59;  
	
	//console.log("Loading BD Hour: " + startHourInput + " " + startMinInput + " : " + endHourInput + " " + endMinInput);

	
	//const BDhourOpen = 15 * 60 + 0 // 
	//const BDhourClosed = 16 * 60 + 0 // 
	console.log("CHECKING THE TIME. BD Hour: " + BDhourOpen + " till " + BDhourClosed );
	
	var now = new Date();
	var currentTime = now.getHours() * 60 + now.getMinutes(); // Minutes since Midnight

	if(currentTime > BDhourOpen && currentTime < BDhourClosed)
	{
		console.log("BD HOUR HAS BEGUN");
		// Within time
		if(document.getElementById("systemsReport") != null)
		{
			document.getElementById("WelcomeMessage").innerHTML = "☎ BD FOCUS TIME ⭐";
			document.getElementById("WelcomeMessage").style.color = "blue";
			document.getElementById("systemsReport").innerHTML = "LETS HAVE A NOISY OFFICE FROM 15:00 - 16:00. GOOD LUCK!";
		}
	}
}


function setCurrentYearlyBillings()
{
		
}


function checkProgressBarColour(consultant, percentage)
{
	if(percentage > 0 && percentage <= 35)
	{		
		var elementName = "bar_" + consultant;		
		document.getElementById(elementName).className = "progress-bar bg-danger";
	}
	else if(percentage > 35 && percentage <= 60)
	{		
		var elementName = "bar_" + consultant;		
		document.getElementById(elementName).className = "progress-bar bg-warning";
	}
	else if(percentage > 60)
	{		
		var elementName = "bar_" + consultant;		
		document.getElementById(elementName).className = "progress-bar bg-success";
	}	
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


var BDTrackerURL = "./pages/samples/error-500.html";
document.getElementById("BDTrackerBtn").addEventListener("click", function(){
	// code to be executed on click
	SetBDTrackerLinks();
	window.open(BDTrackerURL);

	});

function SetBDTrackerLinks()
{
	

}



function SetMyTarget()
{
	
	
}

function calculateProgressBar()
{
	

	
}

function logoutNow()
{
	window.localStorage.setItem('name', "logout");
	location.reload();

}

function loginNow()
{
	const name = localStorage.getItem('name');

	if(name){
		console.log('Name already exists, overwriting name');
		let name_Txt = document.getElementById("signIn_name_textbox").value;
	window.localStorage.setItem('name', capitalizeFirstLetter(name_Txt));
	console.log('Adding Name: ' + name_Txt.toString());
	}else{
		
	
	let name_Txt = document.getElementById("signIn_name_textbox").value
	window.localStorage.setItem('name', capitalizeFirstLetter(name_Txt));
	console.log('Adding Name: ' + name_Txt.toString());
	}
	location.reload();


}

setTimeout(function(){ checkForName(); }, 100);


//sign in on enter press
var wage = document.getElementById("signIn_name_textbox_item");
wage.addEventListener("keydown", function (e) {
    if (e.code === "Enter") {  //checks whether the pressed key is "Enter"
        loginNow();
    }
});

function capitalizeFirstLetter(str) {
	// split the string into an array of words
	const words = str.split(' ');
  
	// capitalize the first letter of each word
	const capitalizedWords = words.map(word =>
	  word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
	);
  
	// join the capitalized words back into a single string
	const capitalizedStr = capitalizedWords.join(' ');
  
	return capitalizedStr;
  }
  

function setProfilePic()
{
	// PROFILE PIC-----------------------------
		var profilePicLocation = "images/faces/KA/" + localStorage.getItem('name') + ".jpg";
		console.log("PP: " + profilePicLocation);
	
		document.getElementById("pp_pic").src = profilePicLocation; 
		// END PROFILE PIC ------------------------
}

function randomNumber(min, max) 
{
	
}

function setSource(elementID, newSource) {
	document.getElementById(elementID).src = newSource;


//https://kensingtonconsulting.sharepoint.com/sites/KensingtonTeam/_layouts/15/Doc.aspx?sourcedoc={7263ac50-dccc-4dbc-b36c-8940a889f182}&action=embedview&wdAllowInteractivity=False&Item='ZB_JobBoard'!B1%3AP20&wdHideGridlines=True&wdInConfigurator=True&wdInConfigurator=True&edesNext=true&resen=false
//https://kensingtonconsulting.sharepoint.com/sites/KensingtonTeam/_layouts/15/Doc.aspx?sourcedoc={d1bcc023-ab41-4786-9525-43f9dc59cdf2}&action=embedview&wdAllowInteractivity=False&Item='ZB_Targets'!AG4%3AAL12&wdHideGridlines=True&wdDownloadButton=True&wdInConfigurator=True&wdInConfigurator=True&edesNext=true&resen=false



}


function checkForName()
{
	
	const name = localStorage.getItem('name');

if(name){
	console.log('Name exists: ' + name.toString());
	

	
	if(name === "logout")
	{		
		// MANUALLY REMOTE BUTTONS FOR PEOPLE THAT ARE NOT LOGGED IN
		document.getElementById("adminBtn_item").remove();	
		document.getElementById("LogoutButton_item").remove();		
	}
	else if (name === "Zak" || name === "James" || name === "Angelika"|| name === "Phil" || name === "Omama" || name === "Becca" || name === "Amelia" || name === "Elle" || name === "Tom" || name === "Jordan" || name === "Mark" || name === "Liam" || name === "Henry" || name === "Lisa"|| name === "Tom M")          
	{
		// MANUALLY REMOVE ITEMS FOR PEOPLE THAT ARE LOGGED IN AS...
		if (name != "Zak") {
			//remove admin button for all that are logged in except for Zak
			document.getElementById("adminBtn_item").remove();
			
		}
		else {
			// its Zak
			// show things only Zak needs to see
			document.getElementById("ZakMasterFile").hidden = false;
			document.getElementById("openPinPlatforms").hidden = false;	
			document.getElementById("forecast_board").hidden = false;	
			document.getElementById("coconutAI_menuBtn").hidden = false;		

		}

		
		//check for manager // personal board for Phil
		if (name === "Phil") {			
			document.getElementById("forecast_board").hidden = false;

		}


		
	if(document.getElementById("WelcomeMessage") != null)
	{
		//hide sign in objects
		document.getElementById("signIn_name_textbox_item").remove();
		//document.getElementById("signIn_name_textbox_item").hidden = true;
		document.getElementById("login_btn_item").hidden = true;
		document.getElementById("login_btn_item").remove();
		//document.getElementById("signIn_name_textbox").hidden = true;
		//document.getElementById("login_btn").hidden = true;
		document.getElementById("LogoutButton").hidden = false;
		document.getElementById("LogoutButton_item").hidden = false;
		
		
		
		//Change message to include name
		if(localStorage.getItem('name') === "Jordan")
		{			
			//CUSTOM NAME FOR JORDAN
			const numB = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
			if(numB.toString() === "1")
			{				
		
				document.getElementById("WelcomeMessage").innerHTML = "Welcome back, My G ⭐";		
			}
			else
			{
				document.getElementById("WelcomeMessage").innerHTML = "Welcome back, JBone 🦴";	
			}

		}
		else if(localStorage.getItem('name') === "Tom M"){
			// REMOVE THE M FROM TOM M
			document.getElementById("WelcomeMessage").innerHTML = "Welcome back, Tom";				
					
		}
		else if(localStorage.getItem('name') === "Henry"){
			//CUSTOM NAME FOR HENRY
			const numB = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
			if(numB.toString() === "1")
			{	
				document.getElementById("WelcomeMessage").innerHTML = "Welcome back, The Honeybadger 🍯";				
			}
			else
			{
				document.getElementById("WelcomeMessage").innerHTML = "🐟 Welcome back, Henry 🎣";	
			}
		}			
		else if(localStorage.getItem('name') === "Angelika")
		{
			//SET WELCOME BACK MESSAGE TO CUSTOM SAVED NAME🐔
			document.getElementById("WelcomeMessage").innerHTML = "Welcome back, " + localStorage.getItem('name') + " 🐟";
			
		}		
		else 
		{
			//SET WELCOME BACK MESSAGE TO SAVED NAME
			document.getElementById("WelcomeMessage").innerHTML = "Welcome back, " + localStorage.getItem('name');
		}
		// NOW WE HAVE SET THE WELCOME BACK MESSAGE TO INCLUDE THE LOGIN NAME, SET THE PROFILE PICTURE
		setProfilePic(); 
		
		
		
		// MARKETING AND OTHER DEPARTMENTS (NOT SALES)
		// SET JOB BOARD AND TARGET SOR SALES CONSULTANTS ON MAIN PAGE
		if(localStorage.getItem('name') != "Lisa" && localStorage.getItem('name') != "Omama")	// all people who are non sales, ignore
		{
			document.getElementById("jobBoardClass").hidden = false;
			var currentBoard = localStorage.getItem('name') + "_board";
			checkInitials(name);			// Get initials so you can get the right URL 
			var pipelineURL = "https://kensingtonconsulting.sharepoint.com/sites/KensingtonTeam/_layouts/15/Doc.aspx?sourcedoc={7263ac50-dccc-4dbc-b36c-8940a889f182}&action=embedview&wdAllowInteractivity=False&Item='" + currentConsultantInitials + "_JobBoard'!B1%3AP20&wdHideGridlines=True&wdInConfigurator=True&wdInConfigurator=True&edesNext=true&resen=false";
			
			var targetURL = "https://kensingtonconsulting.sharepoint.com/sites/KensingtonTeam/_layouts/15/Doc.aspx?sourcedoc={7c220be0-2fdd-4bb8-8cbb-fae15e3d656a}&action=embedview&wdAllowInteractivity=False&Item='" + currentConsultantInitials + "_Targets'!AQ4%3AAW14&wdHideGridlines=True&wdDownloadButton=True&wdInConfigurator=True&wdInConfigurator=True&edesNext=false&resen=true&ed1JS=false";
			setTimeout(function () { setSource("iframe_myPipeline", pipelineURL); }, 500);	//set pipeline
			setTimeout(function () { setSource("iframe_myTargets", targetURL); }, 600);	// set target
					
					

			document.getElementById("jobBoardTitle").innerHTML = localStorage.getItem('name') + "'s job board";
		}
		else
		{
			//HR and Marketting dont have Job boards. Hide if shown.
			document.getElementById("jobBoardClass").hidden = true;
		}

		if(localStorage.getItem('name') === "Lisa" || localStorage.getItem('name') === "Phil"|| localStorage.getItem('name') === "Omama" || localStorage.getItem('name') === "Elle")
		{
			// SET THE TARGET AWARDS TO THOSE WHO DO NOT HAVE SET WEEKLY TARGETS
			var targURL = targetAwardsURL;
			setTimeout(function () { setSource("iframe_myTargets", targURL); }, 600);	// set target
		}
		
	}
		
	}
	else
	{
		//Account does not exist. 
		console.log("Invalid Name");
		document.getElementById("adminBtn_item").remove();
		window.localStorage.setItem('name', "logout");
		location.reload();
	}
	
	
	
}else{
    console.log('Name is not found');
}

//checkTime();

}


function checkInitials(currentName) {
	if (currentName === "Zak") {
		currentConsultantInitials = "ZB";
	}
	else if (currentName === "Amelia") {
		currentConsultantInitials = "AD";
	}
	else if (currentName === "Becca") {
		currentConsultantInitials = "BH";
	}
	else if (currentName === "Tom") {
		currentConsultantInitials = "TB";
	}
	else if (currentName === "Jordan") {
		currentConsultantInitials = "JK";
	}
	else if (currentName === "James") {
		currentConsultantInitials = "JF";
	}
	else if (currentName === "Angelika") {
		currentConsultantInitials = "AZ";
	}
	else if (currentName === "Henry") {
		currentConsultantInitials = "HH";
	}
	else if (currentName === "Phil") {
		currentConsultantInitials = "PH";
	}
	else if (currentName === "Mark") {
		currentConsultantInitials = "MA";
	}
	else if (currentName === "Liam") {
		currentConsultantInitials = "LA";
	}
	else if (currentName === "Omama") {
		currentConsultantInitials = "OL";
	}
	else if (currentName === "Tom M") {
		currentConsultantInitials = "TM";
	}
}			

// open main platforms 
function openPinLinks() {
	var urls = [
	  "https://kensingtonconsulting.sharepoint.com/:x:/s/KensingtonTeam/EeALInzdL7hLjLv64V49ZWoBTsE3qVsamEke6dWd8KTaBA?e=nLbszA",
	  "https://www.linkedin.com/talent/inbox/0/main",
	  "https://kensingtonconsulting.vincere.io/candidateDashboard.do?tabId=1",
	  "https://chat.openai.com/chat",
	  "https://app.zoominfo.com/"
	];
	for (var i = 0; i < urls.length; i++) {
	  var newTab = window.open(urls[i], "_blank");
	  newTab.addEventListener("load", function() {
		newTab.postMessage({
		  type: "pinTab"
		}, "*");
	  });
	}
  }

  // button to open main platforms 
  var openPinPlatformsLink = document.getElementById("openPinPlatforms");
openPinPlatformsLink.addEventListener("click", openPinLinks);