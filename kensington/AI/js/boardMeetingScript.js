
// ToDo
// tensorFlow for in browser facial recognition - translate to a list / order for board meetings.
// for now, manually set



var consultant = ["James", "Zak", "Angelika", "Amelia", "Liam", "Rebecca", "Henry", "Omama", "Jordan", "Tom", "Tom M", "Phil", "Mark"];

function checkInitials(currentName)
{
	if(currentName === "Zak")
	{
		currentConsultantInitials = "ZB";
	}
	if(currentName === "Amelia")
	{
		currentConsultantInitials = "AD";
	}
	if(currentName === "Becca")
	{
		currentConsultantInitials = "BH";
	}
	else if(currentName === "Tom")
	{
		currentConsultantInitials = "TB";
	}
	else if(currentName === "Jordan")
	{
		currentConsultantInitials = "JK";
	}
	else if(currentName === "James")
	{
		currentConsultantInitials = "JF";
	}
	else if(currentName === "Angelika")
	{
		currentConsultantInitials = "AZ";
	}
	else if(currentName === "Henry")
	{
		currentConsultantInitials = "HH";
	}
	else if(currentName === "Phil")
	{
		currentConsultantInitials = "PH";
	}
	else if(currentName === "Mark")
	{
		currentConsultantInitials = "MA";
	}
	else if(currentName === "Liam")
	{
		currentConsultantInitials = "LA";
	}
	else if(currentName === "Omama")
	{
		currentConsultantInitials = "OL";
	}
	else if(currentName === "Tom M")
	{
		currentConsultantInitials = "TM";
	}
}


var maxConsultants = consultant.length;
var currentConsultant_Main = 0;
var numberOfActiveConsultants = 0;

var currentTeam = 0;
var numberOfTeams = 2;

var currentBoardType = "none";

var numberOfRemoved = 0;

var fullscreen = false;

var autoRefreshDelay = 300000;
var targetBoardCycleDelay = autoRefreshDelay/10;

setInterval(AutoRefresh, targetBoardCycleDelay);	

var currentConsultantInitials = "ZB";
var targetsURLsource = "https://kensingtonconsulting.sharepoint.com/sites/KensingtonTeam/_layouts/15/Doc.aspx?sourcedoc={7c220be0-2fdd-4bb8-8cbb-fae15e3d656a}&action=embedview&wdAllowInteractivity=False&Item='ADMIN'!B1%3AX26&wdHideGridlines=True&wdInConfigurator=True&wdInConfigurator=True&edesNext=true&resen=false&ed1JS=false";
var pipelineURLsource = "https://kensingtonconsulting.sharepoint.com/sites/KensingtonTeam/_layouts/15/Doc.aspx?sourcedoc={7263ac50-dccc-4dbc-b36c-8940a889f182}&action=embedview&wdAllowInteractivity=False&Item='" + currentConsultantInitials + "_JobBoard'!A1%3AQ18&wdHideGridlines=True&wdDownloadButton=True&wdInConfigurator=True&wdInConfigurator=True&edesNext=false&resen=true&ed1JS=false";
var bdURLsource = "https://kensingtonconsulting.sharepoint.com/sites/KensingtonTeam/_layouts/15/Doc.aspx?sourcedoc={2b0d7848-e3c3-468a-8790-87f832eaddbb}&action=embedview&wdAllowInteractivity=False&Item='ZB_CANVAS'!B3%3AF37&wdHideGridlines=True&wdInConfigurator=True&wdInConfigurator=True&edesNext=true&resen=false";

var linkedInJobAds_SheetURL = "https://kensingtonconsulting.sharepoint.com/sites/KensingtonTeam/_layouts/15/Doc.aspx?sourcedoc={7263ac50-dccc-4dbc-b36c-8940a889f182}&action=embedview&wdAllowInteractivity=False&Item='Job%20Adverts'!A1%3AQ45&wdHideGridlines=True&wdDownloadButton=True&wdInConfigurator=True&wdInConfigurator=True&edesNext=false&resen=true&ed1JS=false";

var floatingIframeURL1 = "https://kensingtonconsulting.sharepoint.com/sites/KensingtonTeam/_layouts/15/Doc.aspx?sourcedoc={7263ac50-dccc-4dbc-b36c-8940a889f182}&action=embedview&wdAllowInteractivity=False&Item='";
var floatingIframeURL2 = "_JobBoard'!S3%3AU6&wdHideGridlines=True&wdDownloadButton=True&wdInConfigurator=True&wdInConfigurator=True&ed1JS=false";


document.getElementById("targets_btn").onclick = function () { loadBoard("targets"); }
document.getElementById("pipeline_btn").onclick = function () { loadBoard("pipeline"); }


document.getElementById("targetBoard_bigButton").onclick = function () { loadBoard("targets"); }
document.getElementById("pipeline_bigButton").onclick = function () { loadBoard("pipeline"); }


document.getElementById("fullscreen_btn_nav").onclick = function () { toggleFullScreen(); }

document.getElementById("btn_startMeeting").onclick = function () { startMeeting(); }


document.getElementById("exit_btn_nav").onclick = function () { closeBrowser(); }
document.getElementById("refresh_btn_nav").onclick = function () { refreshBoard(); }

document.getElementById("nextPage_btn").onclick = function () { cycleRow(); }

document.getElementById("nextTargetBoard_btn_nav").onclick = function () { cycleRow(); }

const targetBoardURL = [
"https://kensingtonconsulting.sharepoint.com/sites/KensingtonTeam/_layouts/15/Doc.aspx?sourcedoc={7c220be0-2fdd-4bb8-8cbb-fae15e3d656a}&action=embedview&wdAllowInteractivity=False&Item='ADMIN'!B1%3AAA27&wdHideGridlines=True&wdDownloadButton=True&wdInConfigurator=True&wdInConfigurator=True&edesNext=false&resen=true&ed1JS=false",
"https://kensingtonconsulting.sharepoint.com/sites/KensingtonTeam/_layouts/15/Doc.aspx?sourcedoc={7c220be0-2fdd-4bb8-8cbb-fae15e3d656a}&action=embedview&wdAllowInteractivity=False&Item='ADMIN'!B28%3AY93&wdHideGridlines=True&wdDownloadButton=True&wdInConfigurator=True&wdInConfigurator=True&edesNext=true&resen=false&ed1JS=false",


] 


// LISTENERS ----------------------------------------------
// AUTO CHANGE INDIVIDUAL BOARD ON DROPDOWN CHANGE
var activities = document.getElementById("dropdown_selectRowCount");
activities.addEventListener("change", function() {    
        checkRowCount();    
});
// END -----------


function initialiseRowCount()
{	
	document.getElementById("targetBoard_iframe").src = targetBoardURL[currentTeam];
}

function cycleRow()
{			
	if(currentTeam < numberOfTeams-1)
	{
		console.log("CURRENT BOARD: " + currentTeam + ". LOAD BOARD: " + currentTeam+1);

		currentTeam += 1;
		document.getElementById("targetBoard_iframe").src = targetBoardURL[currentTeam];	
		
	}
	else
	{
		console.log("CURRENT BOARD: " + currentTeam + ". LOAD BOARD: 0");

		currentTeam = 0; 
		document.getElementById("targetBoard_iframe").src = targetBoardURL[currentTeam];		
		
	}	
}


// LISTEN FOR DROPDOWN CHANGE
var activities = document.getElementById("dropdown_selectConsultant");
activities.addEventListener("change", function() {    
        loadIndividualTargetBoard();    
});
// END ----------- FUNCTION TO FOLLOW
function loadIndividualTargetBoard() {
	document.getElementById("individualTargetBoard").hidden = false;
	document.getElementById("targetBoard_iframe").hidden = true;

	var e = document.getElementById("dropdown_selectConsultant");
	var value = e.value;
	var name = e.options[e.selectedIndex].text;	

	checkInitials(name);
	console.log("Set Individual Board to " + name + "(" + currentConsultantInitials + ")");
	if (name === "Target Board") {
		document.getElementById("individualTargetBoard").hidden = true;
		document.getElementById("targetBoard_iframe").hidden = false;
		document.getElementById("autoRefresh_checkbox").checked = true;
		document.getElementById("pp_pic").src = "./images/faces/face28.jpg";
		document.getElementById("consultant-name-label").innerHTML = "";
		console.log("./images/faces/KA/" + name + ".jpg");

	}
	else {
		document.getElementById("autoRefresh_checkbox").checked = false;
		console.log("./images/faces/KA/" + name + ".jpg");
		document.getElementById("pp_pic").src = "./images/faces/KA/" + name + ".jpg";
		document.getElementById("consultant-name-label").innerHTML = name;
		document.getElementById("individualTargetBoard").src = "https://kensingtonconsulting.sharepoint.com/sites/KensingtonTeam/_layouts/15/Doc.aspx?sourcedoc={7c220be0-2fdd-4bb8-8cbb-fae15e3d656a}&action=embedview&wdAllowInteractivity=False&Item='" + currentConsultantInitials + "_Targets'!AT4%3ABR16&wdHideGridlines=True&wdInConfigurator=True&wdInConfigurator=True&edesNext=false&resen=true&ed1JS=false";
    }
}

function loadBoard(boardType)
{
	document.getElementById("exit_btn_nav").hidden = false;
	if(boardType === currentBoardType)
	{
		//board already selected
		refreshBoard();
	}
	else
	{
			document.getElementById("SelectABoard").hidden = true;
		if(boardType === "targets")
		{
			
			setTimeout(initialiseRowCount, 1000);		// initialise the board
			
			document.getElementById("autoRefresh_checkbox").checked = true;
			document.getElementById("TargetBoard").hidden = false;
			document.getElementById("PipelineBoard").hidden = true;
			document.getElementById("BDCanvasBoard").hidden = true;
			
			document.getElementById("previous_btn_nav").hidden = true;
			document.getElementById("next_btn_nav").hidden = true;
			document.getElementById("autoRefresh_btn_nav").hidden = false;
					document.getElementById("nextTargetBoard_btn_nav").hidden = false;
			
			currentBoardType = boardType;


		}
		else if (boardType === "pipeline")
		{
			showOrderSelect();
			
			document.getElementById("autoRefresh_checkbox").checked = false;
			document.getElementById("TargetBoard").hidden = true;
			document.getElementById("PipelineBoard").hidden = false;
			document.getElementById("BDCanvasBoard").hidden = true;
			
			document.getElementById("previous_btn_nav").hidden = false;
			document.getElementById("next_btn_nav").hidden = false;
			document.getElementById("autoRefresh_btn_nav").hidden = true;
			
					document.getElementById("nextTargetBoard_btn_nav").hidden = true;
			
			currentBoardType = boardType;
		}
		
	}
	
}

function toggleFullScreen()
{
	var elem = document.documentElement;
	if(fullscreen)
	{
		fullscreen = false;
		if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) { /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE11 */
    document.msExitFullscreen();
  }
	}
	else
	{
		fullscreen = true;
		if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
		
	}
}

function refreshBoard()
{
	if(currentBoardType === "targets")
	{
		console.log("refreshing iframe");		
		document.getElementById('targetBoard_iframe').src = document.getElementById('targetBoard_iframe').src; 
	}
	else
	{
		location.reload();
	}
}

function setSource(elementID, newSource)
{
	document.getElementById(elementID).src = newSource;
}

document.getElementById("next_btn_nav").onclick = function () { nextBoard(); }
document.getElementById("previous_btn_nav").onclick = function () { prevBoard(); }







function SaveOrder()
{
	var consultantList = document.getElementById("sortlist");
	var listlength = consultantList.getElementsByTagName("li").length;
	console.log("SAVE ORDER ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~" + listlength);
	var endoflist = false;

	for(var i = 0; i < listlength-1; i++)
		{		
			var name = 	consultantList.children[i].innerText;
			if(name === "REMOVE ANYONE BELOW HERE")
			{
				endoflist=true;
				break;
			}
			if(!endoflist)
			{
				var modifiedName = name.replace("×", "").trim();


			console.log(modifiedName);
			consultant[i] = modifiedName;		
			numberOfActiveConsultants++;
			}
		}
		console.log("SAVE ORDER ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~" + numberOfActiveConsultants);
	

}




function startMeeting() {

	//reset
	currentConsultant_Main = 0;
 numberOfActiveConsultants = 0;

	//first hide the order select card	
	SaveOrder();

	document.getElementById("selectConsultantOrder").hidden = true;

	document.getElementById("pipelineBoards").hidden = false;
	
	document.getElementById("pp_pic").src = "images/faces/KA/" + consultant[currentConsultant_Main].toString() + ".jpg";
	document.getElementById("consultant-name-label").innerHTML = consultant[currentConsultant_Main].toString();
	

	if (consultant[currentConsultant_Main] === "REMOVE") {
		currentConsultant_Main += 1;
		startMeeting();
		return;
    }

	
	checkInitials(consultant[currentConsultant_Main]);
	setPipelineURLs();
	
	document.getElementById('iframe_targets').src = targetsURLsource;
	document.getElementById('iframe_pipeline').src = pipelineURLsource;

}

function showOrderSelect()
{
	document.getElementById("selectConsultantOrder").hidden = false;
}

function startMeetingBD() {
	//first hide the order select card	
	/*document.getElementById("selectConsultantOrder").hidden = true;

	document.getElementById("pipelineBoardsBD").hidden = false;
	document.getElementById("pp_pic").src = "images/faces/KA/" + consultant[currentConsultant_Main].toString() + ".jpg";
	

	if (consultant[currentConsultant_Main] === "REMOVE") {
		currentConsultant_Main += 1;
		startMeetingBD();
		return;
    }

	
	checkInitials(consultant[currentConsultant_Main]);
	setBDURLs();
	
	document.getElementById('iframe_BDCanvas').src = bdURLsource;*/
	
}



function setPipelineURLs()
{
	targetsURLsource = "https://kensingtonconsulting.sharepoint.com/sites/KensingtonTeam/_layouts/15/Doc.aspx?sourcedoc={d1bcc023-ab41-4786-9525-43f9dc59cdf2}&action=embedview&wdAllowInteractivity=False&Item='" + currentConsultantInitials + "_Targets'!AG4%3AAH7&wdHideGridlines=True&wdInConfigurator=True&wdInConfigurator=True&edesNext=true&resen=false";
	pipelineURLsource = "https://kensingtonconsulting.sharepoint.com/sites/KensingtonTeam/_layouts/15/Doc.aspx?sourcedoc={7263ac50-dccc-4dbc-b36c-8940a889f182}&action=embedview&wdAllowInteractivity=False&Item='" + currentConsultantInitials + "_JobBoard'!A1%3AQ18&wdHideGridlines=True&wdDownloadButton=True&wdInConfigurator=True&wdInConfigurator=True&edesNext=false&resen=true&ed1JS=false";
	floatingURLsource = floatingIframeURL1 + currentConsultantInitials + floatingIframeURL2;
	document.getElementById('iframe_targets').src = targetsURLsource;
	document.getElementById('iframe_pipeline').src = pipelineURLsource;
	document.getElementById('floating_iframe').src = floatingURLsource;

}

function setBDURLs()
{
	bdURLsource = "https://kensingtonconsulting.sharepoint.com/sites/KensingtonTeam/_layouts/15/Doc.aspx?sourcedoc={2b0d7848-e3c3-468a-8790-87f832eaddbb}&action=embedview&wdAllowInteractivity=False&Item='" + currentConsultantInitials + "_CANVAS'!A4%3AG56&wdHideGridlines=True&wdInConfigurator=True&wdInConfigurator=True&edesNext=true&resen=false";
	document.getElementById('iframe_BDCanvas').src = bdURLsource;
}

function nextBoard() {
	//Hide Previous
	
	if(currentBoardType === "pipeline")
	{
		// PIPELINE / JOB BOARD
		currentConsultant_Main += 1;
		if(!CheckIfEndOfList())
		{
			if (consultant[currentConsultant_Main] === "REMOVE") {
				nextBoard();
			}
			else if (consultant[currentConsultant_Main] === "Omama")
			{
				document.getElementById("pp_pic").src = "images/faces/KA/" + consultant[currentConsultant_Main].toString() + ".jpg";
				document.getElementById("consultant-name-label").innerHTML = consultant[currentConsultant_Main].toString();
				// force load job advert board
				targetsURLsource = "";
				pipelineURLsource = linkedInJobAds_SheetURL;
				document.getElementById('iframe_targets').src = targetsURLsource;
				document.getElementById('iframe_pipeline').src = pipelineURLsource;
			}
			else
			{
				
				document.getElementById("pp_pic").src = "images/faces/KA/" + consultant[currentConsultant_Main].toString() + ".jpg";
				document.getElementById("consultant-name-label").innerHTML = consultant[currentConsultant_Main].toString();
				checkInitials(consultant[currentConsultant_Main].toString());
				console.log("Current Consultant: " + name + " Consultant Initials: " + currentConsultantInitials + " ConsultantID: " + currentConsultant_Main);
				setPipelineURLs();		
			}
			
			if (currentConsultant_Main >= maxConsultants - 1) {
				document.getElementById("next_btn_nav").hidden = true;
			}
		}
	}
	
}

function CheckIfEndOfList()
{
	if(currentConsultant_Main >= numberOfActiveConsultants)
		{
			// there are no more active consultants, end.
			document.getElementById("autoRefresh_checkbox").checked = true;
			document.getElementById("TargetBoard").hidden = false;
			document.getElementById("PipelineBoard").hidden = true;
			document.getElementById("BDCanvasBoard").hidden = true;
			
			document.getElementById("previous_btn_nav").hidden = true;
			document.getElementById("next_btn_nav").hidden = true;
			document.getElementById("autoRefresh_btn_nav").hidden = false;
			
			currentBoardType = "targets";
			document.getElementById('iframe_targets').src = targetsURLsource;
			AutoRefresh();
			document.getElementById("pp_pic").src = "images/faces/face28.jpg";
			document.getElementById("consultant-name-label").innerHTML = "";

			return true;			
		}
		else
		{
			return false;
		}
}

function prevBoard() {
	//Hide Current
	
	if (currentConsultant_Main === 0) {
		window.location.reload();
	}
	else
	{
		
		if(currentBoardType === "pipeline")
		{
			// PIPELINE / JOB BOARD
			
			document.getElementById("next_btn_nav").hidden = false;
			currentConsultant_Main -= 1;
		
			if (consultant[currentConsultant_Main] === "Omama" || consultant[currentConsultant_Main] === "Rebecca")
			{
				// force load job advert board
				prevBoard();
			}
			else
			{
		
			document.getElementById("pp_pic").src = "images/faces/KA/" + consultant[currentConsultant_Main].toString() + ".jpg";
			document.getElementById("consultant-name-label").innerHTML = consultant[currentConsultant_Main].toString();
			checkInitials(consultant[currentConsultant_Main].toString());
			setPipelineURLs();
		
			
			}
	
	
		}
		else if(currentBoardType === "targets")
		{
			document.getElementById("nextTargetBoard_btn_nav").hidden = false;
		}
	
	
	}

}


function AutoRefresh()
{
	console.log("performing auto refresh check");
	if(currentBoardType === "targets")
	{	
		console.log("on target board, check if auto refresh is on");
	

		// check auto refresh is ticked
		element_value = document.getElementById("autoRefresh_checkbox");
		if(element_value != null)
		{
			if(element_value.checked)
			{

				if(currentTeam < numberOfTeams-1)
				{
					console.log("CURRENT BOARD: " + currentTeam + ". LOAD BOARD: " + currentTeam+1);
				
					currentTeam += 1;
					document.getElementById("targetBoard_iframe").src = targetBoardURL[currentTeam];	

				}
				else
				{
					console.log("CURRENT BOARD: " + currentTeam + ". LOAD BOARD: 0");
				
					currentTeam = 0; 
					document.getElementById("targetBoard_iframe").src = targetBoardURL[currentTeam];		

				}
			}
		}


	}
}

function closeBrowser()
{
	location.reload();
	
}




// this is to remove consultants from pipeline meeting
document.addEventListener("DOMContentLoaded", function() {
	const removeButtons = document.querySelectorAll("#sortlist .remove");
	const removeBelow = document.querySelector("#sortlist li:last-child");
  
	removeButtons.forEach(function(button) {
	  button.addEventListener("click", function() {
		const listItem = button.parentElement;
		const removeBelowIndex = Array.from(listItem.parentNode.children).indexOf(removeBelow);
  
		if (listItem.nextElementSibling === removeBelow) {
		  listItem.parentNode.insertBefore(listItem, removeBelow);
		} else if (listItem.nextElementSibling) {
		  listItem.parentNode.insertBefore(listItem, removeBelow.nextElementSibling);
		}
	  });
	});
  });
  