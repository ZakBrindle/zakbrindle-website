
//document.getElementById("adminBtn").onclick = function() { goToAdminPage(); }

document.getElementById("setBDHour_btn").onclick = function() { setBDHour(); }

function goToAdminPage()
{
	//Load Admin page
}

function checkForAdmin()
{
	
}

function increaseBillings(consultant, fee)
{
const consFee_ID = consultant + "_yearlyBilling";
const consLastPlacement_ID = consultant + "_dateOfLastPlacement";


//get local data consLastPlacement_ID if not null then set to todays date now()

//get local data consFee_ID if not null then + the fee

//set local data consFee_ID now with new fee

//refresh the page

}

function setBillings(consultant, fee)
{
const consFee_ID = consultant + "_yearlyBilling";
//set local data consFee_ID 

//refresh the page

}

function getBillings(consultant)
{
const consFee_ID = consultant + "_yearlyBilling";
var myFees = GetLocalData(consFee);
return myFees;
}

function setBDHour()
{
//set bd start and finish times (15 30 00, 16 30 00);
// "bdHourStart" "bdHourFinish"
const startHourInput = document.getElementById("bdHour_start_hour");
window.localStorage.setItem('bdHour_StartHour', startHourInput.value.toString());

const startMinInput = document.getElementById("bdHour_start_mins");
window.localStorage.setItem('bdHour_StartMins', startMinInput.value.toString());

const endHourInput = document.getElementById("bdHour_end_hour");
window.localStorage.setItem('bdHour_EndHour', startHourInput.value.toString());

const endMinInput = document.getElementById("bdHour_end_mins");
window.localStorage.setItem('bdHour_EndMins', startMinInput.value.toString());

console.log("Setting BD Hour: " + localStorage.getItem('bdHour_StartHour') + " " + localStorage.getItem('bdHour_StartMins') + " : " + localStorage.getItem('bdHour_EndHour') + " " + localStorage.getItem('bdHour_EndMins'));
}
function setLightMode()
{

}

function setDarkMode()
{

}

function toggleLightDark()
{

}
