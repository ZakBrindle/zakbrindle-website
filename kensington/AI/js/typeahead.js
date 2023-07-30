(function($) {
  'use strict';
  var substringMatcher = function(strs) {
    return function findMatches(q, cb) {
      var matches, substringRegex;

      // an array that will be populated with substring matches
      matches = [];

      // regex used to determine if a string contains the substring `q`
      var substrRegex = new RegExp(q, 'i');

      // iterate through the pool of strings and for any string that
      // contains the substring `q`, add it to the `matches` array
      for (var i = 0; i < strs.length; i++) {
        if (substrRegex.test(strs[i])) {
            matches.push(strs[i]);
           

        }
      }

        cb(matches);
    };
  };

 
 
	document.getElementById("btn_clientDataSearch").onclick = function () {
       handleValueChange();
    };	
	
	document.getElementById("clientInput").oninput = function () {
       handleValueChange();
    };	
				
    document.getElementById("buttonGoogle").onclick = function () {
	       window.location.href = "http://www.google.com";
    };

	document.getElementById("buttonOutlook").onclick = function () {
		window.location.href = "http://www.outlook.com";
 };
	
					
    document.getElementById("buttonLinkedIn").onclick = function () {
       window.location.href = "http://www.linkedin.com";
    };
	
	 document.getElementById("buttonRecruiter").onclick = function () {
       window.location.href = "https://www.linkedin.com/talent/home";
    };
	
	document.getElementById("buttonVincere").onclick = function () {
       window.location.href = "https://kensingtonconsulting.vincere.io/candidateDashboard.do?tabId=1";
    };
	
	document.getElementById("buttonGMaps").onclick = function () {
       window.location.href = "https://maps.google.com";
    };
	
		document.getElementById("buttonHinterview").onclick = function () {
       window.location.href = "https://hello.hinterview.com/";
    };	

document.getElementById("buttonOCR").onclick = function () {
       window.location.href = "https://www.onlineocr.net/";
    };	
	
	document.getElementById("buttonSignable").onclick = function () {
       window.location.href = "https://www.signable.co.uk/";
    };	
document.getElementById("buttonTimezone").onclick = function () {
       window.location.href = "https://dateful.com/time-zone-converter";
    };	
document.getElementById("buttonEditPDF").onclick = function () {
       window.location.href = "https://www.sejda.com/pdf-editor";
    };	
document.getElementById("buttonPDFWord").onclick = function () {
       window.location.href = "https://www.ilovepdf.com/pdf_to_word";
    };		

	document.getElementById("buttonChatGPT").onclick = function () {
		window.location.href = "https://chat.openai.com/auth/login";
	 };	
	 document.getElementById("buttonKensingtonAdditive").onclick = function () {
		window.location.href = "https://www.kensingtonadditive.co.uk";
	 };	
	
	 document.getElementById("buttonMetaData").onclick = function () {
		window.location.href = "https://pdfcandy.com/edit-pdf-meta.html";
	 };	

	 document.getElementById("buttonZoomInfo").onclick = function () {
		window.location.href = "https://app.zoominfo.com/";
	 };	
	
	
	
 function GetDataFromLinkedIn()
 {
	// var divElement = document.getElementById('iframe_clientData').contentWindow.document.getElementById('elementIdOnSourcePage');
	//document.getElementsByClassName('org-top-card-secondary-content__see-all t-normal t-black--light link-without-visited-state link-without-hover-state').appendChild(divElement);
	 
 }
 
 var result = document.getElementById('clientInput');
				result.onclick = handleValueChange();	
								
function handleValueChange() {
	console.log("check if value has changed");
		const result = document.getElementById('clientInput');
        console.log("handle value change:   " + result.value);
		compareClientName(result.value.toUpperCase());
		
		GetDataFromLinkedIn();
    }		
	
	function compareClientName(boxContent)
	{
			var nameTxt = document.getElementById('clientName_text');
			var locationTxt = document.getElementById('clientLocation_text');
			var eCountTxt = document.getElementById('employeeCount_text');
			var termsTxt = document.getElementById('terms_text');
			var activeTxt = document.getElementById('activeClient_text');
		
		if(boxContent === "VELO3D")
		{
			console.log("selected velo3d");			
			nameTxt.innerHTML = "Velo3D";
			locationTxt.innerHTML = "Campbell, California";
			eCountTxt.innerHTML = "200+";
			termsTxt.innerHTML = "Contingent, 20%";
			activeTxt.innerHTML = "YES";
		}
		else if(boxContent === "TECH SOFT 3D" || boxContent === "TECHSOFT3D")
		{
			console.log("selected ts3d");			
			nameTxt.innerHTML = "Tech Soft 3D";
			locationTxt.innerHTML = "Berkeley, California";
			eCountTxt.innerHTML = "150+";
			termsTxt.innerHTML = "Contingent, 25%";
			activeTxt.innerHTML = "YES";
		}
		else if(boxContent === "DMG MORI")
		{
			console.log("selected dmg");			
			nameTxt.innerHTML = "DMG MORI";
			locationTxt.innerHTML = "Sacramento, California";
			eCountTxt.innerHTML = "3200+";
			termsTxt.innerHTML = "Contingent, 20%";
			activeTxt.innerHTML = "YES";
		}
		else if(boxContent === "DIGIFABSTER")
		{						
			nameTxt.innerHTML = "Digifabster";
			locationTxt.innerHTML = "Irvine, California";
			eCountTxt.innerHTML = "25+";
			termsTxt.innerHTML = "Unknown";
			activeTxt.innerHTML = "Unknown";
		}
		else if(boxContent === "FREEFORM")
		{						
			nameTxt.innerHTML = "Freeform";
			locationTxt.innerHTML = "Hawthorne, California";
			eCountTxt.innerHTML = "25+";
			termsTxt.innerHTML = "15% Retainer";
			activeTxt.innerHTML = "Yes";
		}
		else if(boxContent === "STRATASYS")
		{						
			nameTxt.innerHTML = "Stratasys";
			locationTxt.innerHTML = "Minnesota, US";
			eCountTxt.innerHTML = "1800+";
			termsTxt.innerHTML = "Exclusive, 25%";
			activeTxt.innerHTML = "Yes";
		}
		else if(boxContent === "GE ADDITIVE")
		{						
			nameTxt.innerHTML = "GE Additive";
			locationTxt.innerHTML = "Cincinnati, Ohio";
			eCountTxt.innerHTML = "450+";
			termsTxt.innerHTML = "MSP";
			activeTxt.innerHTML = "Yes";
		}
		else if(boxContent === "ADDUP SOLUTIONS")
		{						
			nameTxt.innerHTML = "AddUp Solutions";
			locationTxt.innerHTML = "Cebazat, France";
			eCountTxt.innerHTML = "200+";
			termsTxt.innerHTML = "Retainer";
			activeTxt.innerHTML = "Yes";
		}
		else if(boxContent === "SLM SOLUTIONS")
		{						
			nameTxt.innerHTML = "SLM Solutions";
			locationTxt.innerHTML = "Wixom, Michigan";
			eCountTxt.innerHTML = "300+";
			termsTxt.innerHTML = "Unknown";
			activeTxt.innerHTML = "Unknown";
		}
		else if(boxContent === "OPT INDUSTRIES" || boxContent === "OPT")
		{						
			nameTxt.innerHTML = "OPT Industries";
			locationTxt.innerHTML = "Medford, Boston";
			eCountTxt.innerHTML = "35+";
			termsTxt.innerHTML = "MSP";
			activeTxt.innerHTML = "YES";
		}
		else if(boxContent === "6K INC")
		{						
			nameTxt.innerHTML = "6k";
			locationTxt.innerHTML = "Massachusetts, Boston";
			eCountTxt.innerHTML = "100+";
			termsTxt.innerHTML = "22.5%";
			activeTxt.innerHTML = "YES";
		}
		else if(boxContent === "BIGREP GMBH")
		{						
			nameTxt.innerHTML = "BigRep Gmbh";
			locationTxt.innerHTML = "Berlin, Germany";
			eCountTxt.innerHTML = "70+";
			termsTxt.innerHTML = "Exclusive, 20%";
			activeTxt.innerHTML = "YES";
		}
		else if(boxContent === "OERLIKON")
		{						
			nameTxt.innerHTML = "Oerlikon";
			locationTxt.innerHTML = "Munich, Germany";
			eCountTxt.innerHTML = "80+";
			termsTxt.innerHTML = "Exclusive, 25%";
			activeTxt.innerHTML = "YES";
		}
		else if(boxContent === "ESSENTIUM")
		{						
			nameTxt.innerHTML = "Essentium";
			locationTxt.innerHTML = "Pflugerville, Texas";
			eCountTxt.innerHTML = "120+";
			termsTxt.innerHTML = "Unknown";
			activeTxt.innerHTML = "Unknown";
		}
		else if(boxContent === "SIGMA ADDITIVE")
		{						
			nameTxt.innerHTML = "Sigma Additive";
			locationTxt.innerHTML = "Santa Fe, New Mexico";
			eCountTxt.innerHTML = "40+";
			termsTxt.innerHTML = "22.5%";
			activeTxt.innerHTML = "YES";
		}
		else if(boxContent === "NANOSCRIBE")
		{						
			nameTxt.innerHTML = "Nanoscribe";
			locationTxt.innerHTML = "Karlsruhe, Germany";
			eCountTxt.innerHTML = "60+";
			termsTxt.innerHTML = "Exclusive, 25%";
			activeTxt.innerHTML = "YES";
		}
		else if(boxContent === "GEFERTEC GMBH")
		{						
			nameTxt.innerHTML = "Gefertec GmbH";
			locationTxt.innerHTML = "Berlin, Germany";
			eCountTxt.innerHTML = "25+";
			termsTxt.innerHTML = "Contingent, 25%";
			activeTxt.innerHTML = "YES";
		}
		else if(boxContent === "3DPBM")
		{						
			nameTxt.innerHTML = "3dpbm";
			locationTxt.innerHTML = "London, UK";
			eCountTxt.innerHTML = "10+";
			termsTxt.innerHTML = "Unknown";
			activeTxt.innerHTML = "Unknown";
		}
		else if(boxContent === "LASER LINES")
		{						
			nameTxt.innerHTML = "Laser Lines";
			locationTxt.innerHTML = "Banbury, UK";
			eCountTxt.innerHTML = "20+";
			termsTxt.innerHTML = "Contingent";
			activeTxt.innerHTML = "YES";
		}
		else if(boxContent === "PLASTIC SHIMS AND GASKETS (PSG)")
		{						
			nameTxt.innerHTML = "Plastic Shims And Gaskets";
			locationTxt.innerHTML = "Hinckley, UK";
			eCountTxt.innerHTML = "Unknown";
			termsTxt.innerHTML = "Unknown";
			activeTxt.innerHTML = "Unknown";
		}
		else if(boxContent === "PYROGUARD")
		{						
			nameTxt.innerHTML = "Pyroguard";
			locationTxt.innerHTML = "St Helens, UK";
			eCountTxt.innerHTML = "85+";
			termsTxt.innerHTML = "Unknown";
			activeTxt.innerHTML = "Unknown";
		}
	}
		
	
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 

    var clients = ['3D Systems', '3DEO Inc', '3dpbm', '6K Inc',
        'AddUp Solutions', 'Autodesk', 'BigRep Gmbh', 'DMC',
        'DMG MORI', 'Digifabster', 'Divergent 3D', 'Essentium', 'Freeform', 'GE Additive',
        'Gefertec GmbH', 'Laser Lines', 'Manchester Metrology',
        'Nanoscribe', 'NematX', 'Oerlikon', 'OPT Industries', 'Plastic Shims And Gaskets (PSG)', 'Pyroguard', 'Reflow',
        'SLM Solutions', 'Sigma Additive', 'Sinterit', 'Stratasys',
        'Tech Soft 3D', 'Trumpf', 'Uniformity Labs', 'Velo3D'
  ];

  $('#the-basics .typeahead').typeahead({
    hint: true,
    highlight: true,
    minLength: 1
  }, {
    name: 'clients',
    source: substringMatcher(clients)
  });
  // constructs the suggestion engine
  var clients = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.whitespace,
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    // `clients` is an array of state names defined in "The Basics"
    local: clients
  });

  $('#bloodhound .typeahead').typeahead({
    hint: true,
    highlight: true,
    minLength: 1
  }, {
    name: 'clients',
    source: clients
  });
})(jQuery);