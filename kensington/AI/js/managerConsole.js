
document.getElementById("refreshBoardBtn").onclick = function () { LoadBoard(); }
document.getElementById("refreshBackButton").onclick = function () { refreshPage(); }


function refreshPage()
{
	
	location.reload();
		
	
}

function LoadBoard()
{
	element_value = document.getElementById("dropdown_consultant");
	if(element_value.value != null)
	{		
		var elname = element_value.value + "_board";
		document.getElementById(elname).hidden = false;
		document.getElementById("refreshBackButton").hidden = false;
		document.getElementById("dropdown_consultant").hidden = true;
		document.getElementById("refreshBoardBtn").hidden = true;
		document.getElementById("pageTitle").innerHTML = element_value.value + " | Manager Console";


	}	

	
}


	

//	setInterval(AutoRefresh, 300000);	