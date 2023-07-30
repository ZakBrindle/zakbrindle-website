document.getElementById("close_btn").onclick = function() { closeBrowser(); }
document.getElementById("refresh_btn").onclick = function() { refreshPage(); }

function refreshPage()
{
	
	location.reload();
		
	
}

function AutoRefresh()
{
	element_value = document.getElementById("autoRefresh_checkbox");
	if(element_value.checked)
	{
		location.reload();
	}	
	
}

function closeBrowser()
{
	window.close();
}
	

	setInterval(AutoRefresh, 300000);	