const checkbox = document.getElementById('worldCupTeams_checkbox')

checkbox.addEventListener('change', (event) => {
 
  if (event.currentTarget.checked) {
    toggleWorldCupTeams();
  } else {
    toggleWorldCupTeams();
  }
})

const showCupTeams = localStorage.getItem('worldCupTeams');

function initialCheck()
{
  console.log("Doing Initial Check for WCT on: " + localStorage.getItem('worldCupTeams').toString());
if(showCupTeams === null)
{
  localStorage.setItem('worldCupTeams', 0); //default to off
}

if (showCupTeams === "0")
{
  //hide world cup team elements on load 
  checkbox.checked = false;
}
else if (showCupTeams === "1")
{
  //show world cup team elements on load
  checkbox.checked = true;
  showWorldCupElements();

}
}
setTimeout(function(){ initialCheck(); }, 500);

function toggleWorldCupTeams()
{
 
if(checkbox.checked)
{
  //show world cup team elements
  localStorage.setItem('worldCupTeams', 1); //TURN ON
  showWorldCupElements();
}
else 
{
   localStorage.setItem('worldCupTeams', 0); //TURN OFF
  hideWorldCupElements();
 
}

}

function showTeamsFor(consultant_initials)
{
  var uid = consultant_initials + "_leaderboardPP";
  var uid2 = consultant_initials + "_WCT";

  document.getElementById(uid).hidden = true;  
  document.getElementById(uid2).hidden = false;
}

function hideTeamsFor(consultant_initials)
{
  var uid = consultant_initials + "_leaderboardPP";
  var uid2 = consultant_initials + "_WCT";

  document.getElementById(uid).hidden = false;  
  document.getElementById(uid2).hidden = true;
}

function showWorldCupElements()
{
  showTeamsFor("ZB");
  showTeamsFor("JK");
    showTeamsFor("JF");
	  showTeamsFor("TB");
	   showTeamsFor("LA");
	    showTeamsFor("MA");
		 showTeamsFor("PH");

}

function hideWorldCupElements()
{
  hideTeamsFor("ZB");
  hideTeamsFor("JK");
    hideTeamsFor("TB");
  hideTeamsFor("JF");
  
  hideTeamsFor("LA");
  
  hideTeamsFor("MA");
  
  hideTeamsFor("PH");
  


}
