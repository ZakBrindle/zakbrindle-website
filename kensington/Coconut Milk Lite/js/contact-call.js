let numberOfParks = 0;


document.getElementById("getFullMessage_btn").onclick = function () { getFullMessage(); }

document.getElementById("copyToClip_btn").onclick = function () { copyToClip(); }



// ---------- PRE CALL CHECKS ----------------------------//
var finalMessage_val = "";

// Get elements inside pre call checks





function getFullMessage() {

	document.getElementById("copyToClip_btn").hidden = false;

	scroll(0, document.body.scrollHeight);	// (0 ,0) for scroll to top.
	

	let fullMessage;	// create a variable to store the full message

	const contactNameInput = document.querySelector('#contact_name');	
	if(contactNameInput != "")
	{
		fullMessage = "<b>" + contactNameInput.value;				
	}

	const currentCompanyInput = document.querySelector('#current_company');
	if (currentCompanyInput.value != "")															
	{
		fullMessage = fullMessage + "				" + currentCompanyInput.value;					
	}
		
	
	const lastContactedInput = document.querySelector('#last_contacted');
	if (lastContactedInput.value != "") {															
		fullMessage = fullMessage + "\n\nLast Contacted -	" + lastContactedInput.value;			
	}

	const keepInTouchInput = document.querySelector('#keepInTouch');
	if (keepInTouchInput.value != "") {														// if not blank
		fullMessage = fullMessage + "\nNext Contact -	" + keepInTouchInput.value;	// add reason for looking to fullMessage
	}

	
const reasonForCallingInput = document.querySelector('#reason_for_call');							// get your opinion of the candidate from the end of the form
	if (reasonForCallingInput.value != "") {															// if not blank
		fullMessage = fullMessage + "\n\n<b>Reason for call</b>\n" + reasonForCallingInput.value + "\n\n";			// add opinion to fullMessage
	}

	
const callNotesInput = document.querySelector('#notes_input');
	if (callNotesInput.value != "") {														// if not blank
		fullMessage = fullMessage + "\n- - - - -\n\n	" + callNotesInput.value;	// add current situation to fullMessage
	}


	


	console.log("Number of parked comments: " + numberOfParks);
	if(numberOfParks > 0)
	{
		// user parked comments for later, if used grab for full message

		for(let i = 0; i < numberOfParks; i++) {
			let element_label = document.getElementById("parked-label-" + i);
			let element_text = document.getElementById("parked-textbox-" + i);
			if(element_label)
			{
				if(element_text)
				{
					if(element_text.value != "")
					{

						console.log(element_label.innerText + ": " + element_text.value);
						fullMessage = fullMessage + "\n\n" + element_label.innerText + "\n	" + element_text.value;
					}
				}
			}
		}
	}

	console.log(fullMessage);

	const element2 = document.getElementById("notesInput");		// GRAB THE ELEMENT notesInput
	element2.innerHTML = fullMessage;								// SET THE ELEMENT TO THE FULL MESSAGE

	document.getElementById("getFullMessage_btn").className = "btn btn-success mr-2";
	document.getElementById("notesNotSaved_note").hidden = true;

	// Now that you have set the full message. Try save some data to the backend so we can inject it into velocity -------
// Get the value of the desired salary input element




}



// --------------------------- FUNCTION TO COPY TO CLIPBOARD --------------------------- //

function copyToClip() {
	document.getElementById("copyToClip_btn").className = "btn btn-success mr-2";
	/* Get the text field */
	var copyText = document.getElementById("notesInput");	

	/* Copy the text inside the text field */
	navigator.clipboard.writeText(copyText.innerText);

	document.getElementById("copyToClip_btn").textContent = "Copied to clipboard";
	setTimeout(function () { changeBtnTxtBack(); }, 1500); 

}
// --------------------------- END OF FUNCTION TO COPY TO CLIPBOARD -------------------- //

// EXPAND / HIDE TEXT IN COPY TO CLICK (NOTESINPUT)
document.addEventListener("DOMContentLoaded", function() {
	var notesInput = document.getElementById("notesInput");
  
	notesInput.addEventListener("click", function() {
	  this.classList.toggle("expanded");
	});
  });


function changeBtnTxtBack() {
	document.getElementById("copyToClip_btn").textContent = "Copy to clipboard";
}







// PARK BUTTON
let isCloneButtonClicked = false;

function addToPark(selectedText) {
  let label = document.createElement('label');
  label.innerHTML = `<b>${selectedText}</b>`;
  label.id = `parked-label-${numberOfParks}`;
  
  let textbox = document.createElement('input');
  textbox.type = 'text';
  textbox.className = 'form-control';
  textbox.placeholder = 'Your notes here';
  textbox.id = `parked-textbox-${numberOfParks}`;
  
  let newLine = document.createElement('br');
  
  let parkForLaterGroup = document.getElementById('park-for-later-group');
  parkForLaterGroup.appendChild(label);
  parkForLaterGroup.appendChild(textbox);
  parkForLaterGroup.appendChild(newLine);

  numberOfParks++;
}

function addToPark_ShowHow()
{
	  // Check if element "park_showHow" is visible
	  const existingPopup = document.getElementById("park_showHow");
	  if (existingPopup && existingPopup.style.display !== 'none') {
		  return;
	  }
  
	  // Create popup element
	  const popup = document.createElement("div");
	  popup.id = "park_showHow";
	  popup.style.position = "fixed";
	  popup.style.top = "50%";
	  popup.style.left = "50%";
	  popup.style.transform = "translate(-50%, -50%)";
	  popup.style.backgroundColor = "rgba(255, 255, 255, 0.822)";
	  popup.style.border = "2px solid black";
	  popup.style.borderRadius = "12px";
	  popup.style.padding = "20px";
	  popup.style.border = "none";
	  popup.style.width = "400px";
	  popup.style.textAlign = "center";
  
	  // Add image
	  const img = document.createElement("i");
	  img.className = "fa fa-automobile dynamic-park-icon"; // Updated class name
	  popup.appendChild(img);
  
	 
  
	  // Add title
	  const title = document.createElement("h3");
	  title.style.fontWeight = "bold";
	  title.innerHTML = "How to PARK a <br>comment for later<br><br>";
	  popup.appendChild(title);
  
	  // Add content
	  const content = document.createElement("p");
	  content.className = "card-description";
	  content.innerHTML = `1. Highlight a comment in your notes that you would like to PARK and bring up later in the call.
	  <br><br>
	  2. Click the PARK button that will appear next to your cursor.
	  <br><br>
	  3. Towards the end of your call, fill in the Notes textbox related to the PARKED note.`;
	  popup.appendChild(content);
  
	  // Add close button
	  const closeButton = document.createElement("button");
	  closeButton.className = "btn btn-outline-primary btn-fw";
	  closeButton.id = "close-parkshowhow-button";
	  closeButton.innerHTML = "CLOSE";
	  closeButton.onclick = function() {
		  popup.style.display = "none";
	  };
	  popup.appendChild(closeButton);
  
	  // Add popup to the body
	  document.body.appendChild(popup);
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('park-button').addEventListener('click', function() {
    
      addToPark_ShowHow();
    
  });

// Flag to determine if a new clone should be created or not
let shouldCreateNewClone = true;

document.addEventListener('mouseup', function mouseUpHandler(e) {
  if (!shouldCreateNewClone) return; // Return if a new clone should not be created
  
  let selectedText = window.getSelection().toString();
  if (selectedText.length > 0) {
    let parkBtnClone = document.createElement('button');
    parkBtnClone.id = 'dynamic-park-button';
    parkBtnClone.className = 'dynamic-park-button';
    parkBtnClone.innerHTML = '<i class="fa fa-automobile"></i>';
    parkBtnClone.style.position = 'absolute';
    parkBtnClone.style.left = e.pageX + 'px';
    parkBtnClone.style.top = (e.pageY - 30) + 'px';

    document.body.appendChild(parkBtnClone);

    // Set the flag to false to avoid creating a new clone when this one is clicked
    shouldCreateNewClone = false;

    // Remove the button if clicked and add the park
    parkBtnClone.addEventListener('click', function clickHandler() {
      addToPark(selectedText);
      document.body.removeChild(parkBtnClone);
      parkBtnClone.removeEventListener('click', clickHandler); // Remove the click event listener
      
      // Set the flag back to true so a new clone can be created in the future
      shouldCreateNewClone = true;
    });

    // Remove the button if not clicked within 4 seconds
    setTimeout(function() {
      if (document.body.contains(parkBtnClone)) {
        document.body.removeChild(parkBtnClone);
        // Set the flag back to true so a new clone can be created in the future
        shouldCreateNewClone = true;
      }
    }, 4000);
  }
});
});