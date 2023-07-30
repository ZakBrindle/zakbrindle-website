 

function isSiteOnline(url,callback) {
    // try to load favicon
    var timer = setTimeout(function(){
        // timeout after 5 seconds
        callback(false);
    },30000)

    var img = document.createElement("img");
    img.onload = function() {
        clearTimeout(timer);
        callback(true);
    }

    img.onerror = function() {
        clearTimeout(timer);
        callback(false);
    }

    img.src = url+"/favicon.ico";
}



//setTimeout(function(){ runSiteChecks(); }, 2000);
	
				  
	function runSiteChecks()
	{
	console.log("RUNNING SITE CHECKS");
	isSiteOnline("http://www.linkedin.com",function(found){
    if(!found) {
        // site is offline (or favicon not found, or server is too slow)
		const element = document.getElementById("systemsReport");
		element.innerHTML = "LinkedIn is offline (or server is too slow)!";
    }
	else
	{
		console.log("LinkedIn is working correctly");
	}		
	})
	//isSiteOnline("http://www.linkedin.com/talent/",function(found){
    //if(!found) {
     //   // site is offline (or favicon not found, or server is too slow)
	//	const element = document.getElementById("systemsReport");
	//	element.innerHTML = "LinkedIn Recruiter is offline (or server is too slow)!";
    //}
	//else
	//{
	//	console.log("Recruiter is working correctly");
	//}
	//})
	isSiteOnline("https://kensingtonconsulting.vincere.io/candidateDashboard.do?tabId=1",function(found){
    if(!found) {
        // site is offline (or favicon not found, or server is too slow)
		const element = document.getElementById("systemsReport");
		element.innerHTML = "Vincere is offline (or server is too slow)!";
    }
	else
	{
		console.log("Vincere is working correctly");
	}
	})
	
}		