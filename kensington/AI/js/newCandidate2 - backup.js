
document.getElementById("getFullMessage_btn").onclick = function () { getFullMessage(); }

document.getElementById("copyToClip_btn").onclick = function () { copyToClip(); }

document.getElementById("desiredCurrencyChangeGBP_btn").onclick = function () { desiredCurrencyChangeGBP(); }
document.getElementById("desiredCurrencyChangeEUR_btn").onclick = function () { desiredCurrencyChangeEUR(); }
document.getElementById("desiredCurrencyChangeUSD_btn").onclick = function () { desiredCurrencyChangeUSD(); }
document.getElementById("desiredCurrencyChangeOther_btn").onclick = function () { desiredCurrencyChangeOther(); }

document.getElementById("currentCurrencyChangeUSD_btn").onclick = function () { currentCurrencyChangeUSD(); }
document.getElementById("currentCurrencyChangeEUR_btn").onclick = function () { currentCurrencyChangeEUR(); }
document.getElementById("currentCurrencyChangeGBP_btn").onclick = function () { currentCurrencyChangeGBP(); }
document.getElementById("currentCurrencyChangeOther_btn").onclick = function () { currentCurrencyChangeOther(); }



// ---------- PRE CALL CHECKS ----------------------------//

// Get elements inside pre call checks
const checkedVinnieTickbox = document.querySelector('#checkedVinnie_tickbox');	// if this tickbox is ticked, enable the following elements
const linkedinInput = document.querySelector('#candidate_linkedin');
const emailPreInput = document.querySelector('#email_address_pre');
const reportingLineInput = document.querySelector('#reporting_line_pre');
const targetPositionInput = document.querySelector('#target_position');

// add a listener to the checkbox. If ticked, enable elements. If unticked, disable elements.
// this will force the consultant to tick "Ive checked Vincere for this candidate"
checkedVinnieTickbox.addEventListener('click', function () {
	if (checkedVinnieTickbox.checked) {
		linkedinInput.disabled = false;
		emailPreInput.disabled = false;
		reportingLineInput.disabled = false;
		targetPositionInput.disabled = false;
	} else {
		linkedinInput.disabled = true;
		emailPreInput.disabled = true;
		reportingLineInput.disabled = true;
		targetPositionInput.disabled = true;
	}
});

// if the consultant enters an email in the Pre Call section. Update the email box further down in the form
const emailInput = document.querySelector('#email_address');
const emailLabel = document.querySelector('#candidateEmailLabel');

emailPreInput.addEventListener('input', function () {
	emailInput.value = emailPreInput.value;	// on change, set the value of email inside call to the email set in pre call

	if (emailInput.value !== "") {						// if email is not empty, update the prompt
		emailLabel.textContent = "Candidate's email  -  'Is this the best email to reach you on?'";
	} else {
		emailLabel.textContent = "Candidate's email";
	}
});

// on change of reporting line in pre, update label in main call
const reportingLinePre = document.querySelector('#reporting_line_pre');
const reportingLineLabel = document.querySelector('#reportingLine_label');

reportingLinePre.addEventListener('input', function () {
	const reportingLine = reportingLinePre.value;
	reportingLineLabel.innerHTML = `<em>So is it <b>${reportingLine}</b> that you report to now? Don't worry, our conversation is confidential.<em>`;

	if (emailInput.value !== "") {						// if email is not empty, update the prompt
		emailLabel.textContent = "Candidate's email - 'Is this the best email for me to send over a job description?'";
	} else {
		emailLabel.textContent = "Candidate's email - 'What's the best email for me to send over a job description?'";
	}
});
// ---------- END PRE CALL CHECKS ------------------------//

// -------------- OPEN TO RELO CHECKS --------------------//
const relocation_tickbox = document.querySelector('#relocation_tickbox');
const openToRelo = document.querySelector('#openToRelo');

// add a listener to the checkbox. If ticked, enable elements. If unticked, disable elements.
relocation_tickbox.addEventListener('click', function () {
	if (relocation_tickbox.checked) {
		openToRelo.disabled = false;
	} else {
		openToRelo.disabled = true;
	}
});
// ---------- END OPEN TO RELO CHECKS ------------------------//


// -------------- ACTIVELY LOOKING CHECKS --------------------//
const activelyLooking_tickbox = document.querySelector('#activelyLooking_tickbox');
const activelyLooking_label = document.querySelector('#activelyLookingLabel');

// add a listener to the checkbox. If ticked, enable elements. If unticked, disable elements.
activelyLooking_tickbox.addEventListener('click', function () {
	if (activelyLooking_tickbox.checked) {
		activelyLooking_label.innerHTML = `You mentioned you're actively looking for a new role, how is the search going?`;
	} else {
		activelyLooking_label.innerHTML = `So you're not interviewing anywhere else?`;
	}
});
// ---------- END ACTIVELY LOOKING CHECKS ------------------------//

// -------------- NON COMPETES CHECKS --------------------//
const nonCompetes_tickbox = document.querySelector('#non_competes');
const nonCompetes_detail = document.querySelector('#non_competes_detail');

// add a listener to the checkbox. If ticked, enable elements. If unticked, disable elements.
nonCompetes_tickbox.addEventListener('click', function () {
	if (nonCompetes_tickbox.checked) {
		nonCompetes_detail.hidden = false;
	} else {
		nonCompetes_detail.hidden = true;
	}
});
// ---------- END NON COMPETES CHECKS ------------------------//


// -------------- APPLIED FOR THIS ROLE BEFORE CHECKS --------------------//
const appliedBefore_tickbox = document.querySelector('#applied_previously_checkbox');
const appliedBefore_detail = document.querySelector('#applied_previously_detail');

// add a listener to the checkbox. If ticked, enable elements. If unticked, disable elements.
appliedBefore_tickbox.addEventListener('click', function () {
	if (appliedBefore_tickbox.checked) {
		appliedBefore_detail.hidden = false;
	} else {
		appliedBefore_detail.hidden = true;
	}
});
// ---------- END APPLIED BEFORE CHECKS ------------------------//


window.onbeforeunload = function () {
	return "";
};

function getFullMessage() {

	scroll(0, document.body.scrollHeight);	// (0 ,0) for scroll to top.
	document.getElementById("nextSteps_instructions").hidden = false;

	let fullMessage;	// create a variable to store the full message

	const can_Name = document.getElementById("candidate_name");								// get the candidates name
	fullMessage = "\n----- Reg Call -----\n| Candidate Name	" + can_Name.value;				// add candidate name to fullMessage

	const can_LinkedIn = document.getElementById("candidate_linkedin");						// get the candidates linkedIn
	if (can_LinkedIn.value != "")															// check to see if we have a link, if not blank
	{
		fullMessage = fullMessage + "\n| LinkedIn		" + can_LinkedIn.value;					// add candidate linkedin to fullMessage
	}
	// SKIP PRE EMAIL AND PRE REPORTING LINE 	
	const targ_pos = document.getElementById("target_position");							// get target role		
	if (targ_pos.value != "") {																// if not blank
		fullMessage = fullMessage + "\n| Target Position	" + targ_pos.value;				// add target role to fullMessage
	}

	const opinion_txt = document.getElementById("opinion_note");							// get your opinion of the candidate from the end of the form
	if (opinion_txt.value != "") {															// if not blank
		fullMessage = fullMessage + "\n\n| Opinion	" + opinion_txt.value + "\n";			// add opinion to fullMessage
	}

	const current_situation = document.getElementById("current_situation");					// get current situation element
	if (current_situation.value != "") {														// if not blank
		fullMessage = fullMessage + "\n| Current Situation\n	" + current_situation.value;	// add current situation to fullMessage
	}


	const reason_for_looking = document.getElementById("reason_for_looking");				// get reason for looking	
	if (reason_for_looking.value != "") {														// if not blank
		fullMessage = fullMessage + "\n\n| Reason For Looking\n	" + reason_for_looking.value;	// add reason for looking to fullMessage
	}

	const activelyLooking_tick = document.getElementById("activelyLooking_tickbox");		// get actively looking
	if (activelyLooking_tick.checked)														// if actively looking is checked
	{
		fullMessage = fullMessage + "\n\n| Actively Looking\n	Yes";						// add YES
	}
	else																					// if actively looking is not checked
	{
		fullMessage = fullMessage + "\n\n| Actively Looking\n	No";						// add NO
	}

	const ideal_role = document.getElementById("ideal_role");				// get ideal role - IDEAL ROLE REPLACED WITH IDEAL COMPANY / LOOKING AT ANY COMPANIES? 
	if (ideal_role.value != "") {														// if not blank
		fullMessage = fullMessage + "\n\n| Any companies you are looking at or would consider? We can help to open doors?: \n	" + ideal_role.value;	// add reason for looking to fullMessage
	}


	element_value = document.getElementById("daily_duties");								// get daily duties element
	if (element_value.value != "") {														// if not blank
		fullMessage = fullMessage + "\n\n\n----- Current Company -----\n\n| Daily Duties / Skills\n	" + element_value.value;	// add daily duties to fullMessage
	}

	var reportingLine = document.getElementById("reportingLine_main");							// get reporting line
	var reportingLinePre = document.getElementById("reporting_line_pre");						// get reporting line pre call

	if (reportingLinePre.value != "") 																// if not blank
	{		
		fullMessage = fullMessage + "\n\n| Reporting Line\n	You thought it was: " +
			reportingLinePre.value + "\n Notes on reporting line: " + reportingLine.value;	// add reporting line	
	}
	else
	{
		if(reportingLine.value != "")
		{
			fullMessage = fullMessage + "\n\n| Reporting Line\n" + reportingLine.value;
		}
	}

	element_value = document.getElementById("daily_duties_prevRole");						// get duties at prev role
	if (element_value.value != "") 															// if not blank
	{
		fullMessage = fullMessage + "\n\n| Duties at Previous Roles\n	" + element_value.value;	// add to fullMessage	
	}

	element_value = document.getElementById("biggest_challenge");							// get biggest challenge
	if (element_value.value != "") 															// if not blank
	{
		fullMessage = fullMessage + "\n\n| Biggest Challenge\n	" + element_value.value;	// add big chal to fullMessage	
	}

	element_value = document.getElementById("biggest_achievement");							// get biggest ach		
	if (element_value.value != "") {														// if not blank
		fullMessage = fullMessage + "\n\n| Biggest Achievement\n	" + element_value.value;// add biggest achievement
	}


	element_value = document.getElementById("cand_reference");								// grab the candidates reference box
	if (element_value.value != "") {														// if not blank
		fullMessage = fullMessage + "\n\n| References\n	" + element_value.value;			// add reference to fullMessage
	}


	// LOCATION ---------------

	const current_location = document.getElementById("current_location");					// get current location element
	if (current_location.value != "") {														// if not blank
		fullMessage = fullMessage + "\n\n\n----- Location, Relocation & Commute -----\n\n| Current Location\n	" + current_location.value;	// add current location to fullMessage
	}

	const commutable_tick = document.getElementById("commutable_tickbox");					// get is that commutable distance tickbox
	if (commutable_tick.checked)																// if commutable is checked
	{
		fullMessage = fullMessage + "\n\n| Current location within commutable distance\n	Yes";	// add YES
	}
	else																					// if commutable is not checked
	{
		fullMessage = fullMessage + "\n\n| Current location within commutable distance\n	No";	// add NO
	}

	var element_value = document.getElementById("commute_remote");							// get commute / remote notes
	if (element_value.value != "") {														// if not blank
		fullMessage = fullMessage + "\n\n| Commute or Remote\n	" + element_value.value;	// add to full message
	}

	const relocation_tick = document.getElementById("relocation_tickbox");					// get will they relocate tickbox
	if (relocation_tick.checked)																// if they will relo
	{
		fullMessage = fullMessage + "\n\n| Will they relocate\n	Yes";						// add YES

		// if YES, get the detail
		var commutedetail = document.getElementById("openToRelo");							// get relocation notes
		if (commutedetail.value != "") {													// if not blank
			fullMessage = fullMessage + "\n| Relocation Notes\n	" + commutedetail.value;	// add to full message
		}
	}
	else																					// if they wont relo
	{
		fullMessage = fullMessage + "\n\n| Will they relocate\n	No";						// add NO
	}

	// END OF LOCATION SECTION --------------

	// COMPENSATION -----------------
	element_value = document.getElementById("current_salary");								// grab current salary box 
	if (element_value.value != "") {														// if not blank
		var currencyType = document.getElementById("currentSal_currency");					// get current currency
		fullMessage = fullMessage + "\n\n\n----- Salary / Compensation -----\n\n| Current Salary\n	" + currencyType.innerHTML + element_value.value;	// add currency and current salary to fullMessage
	}

	element_value = document.getElementById("desired_salary");								// grab desired salary box
	currencyType = document.getElementById("desiredSal_currency");							// grab current currency
	if (element_value.value != "") {														// if not blank
		fullMessage = fullMessage + "\n\n| Desired Salary\n	" + desiredSal_currency.innerHTML + element_value.value; // add currency and desired salary to fullMessage
		
		





		console.log("Set LocalStorage: newCandidate_desiredSalary to " + element_value.value);
	}


	element_value = document.getElementById("benefits_input");								// get other benefits input	
	if (element_value.value != "") {														// if not blank
		fullMessage = fullMessage + "\n\n| Other Benefits\n	" + element_value.value;		// add other benefits to fullMessage
	}
	// END OF COMPENSATION --------------

	element_value = document.getElementById("visa_status");									// grab visa status element
	if (element_value.value != "") {														// if not blank
		fullMessage = fullMessage + "\n\n| VISA Status\n	" + element_value.value;		// add visa status to full message
	}
	element_value = document.getElementById("notice_period");								// grab notice period element
	if (element_value.value != "") {														// if not blank
		fullMessage = fullMessage + "\n\n| Notice Period\n	" + element_value.value;		// add notice period detail to full message
	}


	element_value = document.getElementById("non_competes");								// grab non-competes tickbox
	if (element_value.checked) {															// if checked
		var detailElement = document.getElementById("non_competes_detail");					// get detail
		fullMessage = fullMessage + "\n\n\n----- Extra Detail & Checks -----\n\n| Any non-competes?\n	Yes - " + detailElement.value;	// add detail and YES to fullMessage
	}
	else {																					// else
		fullMessage = fullMessage + "\n\n| Any non-competes?\n	No";						// add NO to fullMessage
	}


	element_value = document.getElementById("applied_previously_checkbox");					// grab previously applied checkbox
	if (element_value.checked) {															// is checked = true		
		var detailElement = document.getElementById("applied_previously_detail");			// grab detail element
		fullMessage = fullMessage + "\n\n| Applied for this role before?\n	Yes - " + detailElement.value;	// add YES and detail to fullMessage
	}
	else {																					// else
		fullMessage = fullMessage + "\n\n| Applied for this role before?\n	No";			// add NO for applied before in fullMessage
	}


	element_value = document.getElementById("have_cv_already");								// grab Do I have your CV checkbox
	if (element_value.checked) {															// if ticked
		fullMessage = fullMessage + "\n\n| Do I have your CV? Can share with HM?\n	Yes";						// add YES to fullMessage
	}
	else {
		fullMessage = fullMessage + "\n\n| Do I have your CV? Can share with HM?\n	No";						// add NO to fullMessage
	}

	element_value = document.getElementById("interviews_on");								// grab actively interviewing element
	if (element_value.value != "") {														// if not blank
		fullMessage = fullMessage + "\n\n| Any interviews lined up?\n	" + element_value.value;	// add actively interviewing note to full message
	}

	element_value = document.getElementById("supportingNarrative");							// grab supporting narrative
	if (element_value.value != "") {														// if not blank
		fullMessage = fullMessage + "\n\n| Supporting Narrative\n	" + element_value.value;// add to fullMessage
	}

	element_value = document.getElementById("email_address");								// grab email element
	if (element_value.value != "") {														// if not blank
		fullMessage = fullMessage + "\n\n| Email Address\n	" + element_value.value;		// add to fullMessage
	}	

	element_value = document.getElementById("candidate_phoneNumber");						// grab phone number
	if (element_value.value != "") {														// if not blank
		fullMessage = fullMessage + "\n\n| Phone Number\n	" + element_value.value;		// add to fullMessage
	}	

	element_value = document.getElementById("extra_notes");									// grab extra notes
	if (element_value.value != "") {														// if not blank
		fullMessage = fullMessage + "\n\n| Extra Notes\n	" + element_value.value;		// add to full message
	}

	element_value = document.getElementById("have_summarised");								// grab has summarised?
	if (element_value.checked) {															// if checked
		fullMessage = fullMessage + "\n\n| Did the consultant summarise the call:	Yes";	// add to full message YES
	}
	else
	{
		fullMessage = fullMessage + "\n\n| Did the consultant summarise the call:	No";	// add to full message NO
	}

	element_value = document.getElementById("have_mentionedGDPR");							// grab mentioned GDPR?
	if (element_value.checked) {															// if checked
		fullMessage = fullMessage + "\n\n| Did the consultant mention GDPR:	Yes";			// add to full message YES
	}
	else
	{
		fullMessage = fullMessage + "\n\n| Did the consultant mention GDPR:	No";			// add to full message NO
	}


	element_value = document.getElementById("whats_going_on_current_company");				// grab the whats going on at your current company element
	if (element_value.value != "") {														// if not blank
		fullMessage = fullMessage + "\n\n| Whats going on at your current company?\n	" + element_value.value; // add to fullMessage
	}

	console.log(fullMessage);



	const element2 = document.getElementById("notesInput");		// GRAB THE ELEMENT notesInput
	element2.value = fullMessage;								// SET THE ELEMENT TO THE FULL MESSAGE

	saveCandidateCallData();


	// Now that you have set the full message. Try save some data to the backend so we can inject it into velocity -------
// Get the value of the desired salary input element

// Get the values of the input elements
var desiredSalaryInput = document.getElementById("desired_salary");
if(document.getElementById("desired_salary").value === "")
{
	desiredSalaryInput = document.getElementById("current_salary");
}
var desiredSalaryValue = desiredSalaryInput.value;
 // Remove all non-numeric characters from the input value
 desiredSalaryValue = desiredSalaryValue.replace(/[^\d.-]/g, '');

 // Add "000" if the value is 2 or 3 characters long
 if (desiredSalaryValue.length === 2 || desiredSalaryValue.length === 3) {
   desiredSalaryValue = desiredSalaryValue + "000";
 }


const emailAddressInput = document.getElementById("email_address");
const emailAddressValue = emailAddressInput.value;
const phoneNumberInput = document.getElementById("candidate_phoneNumber");
const phoneNumberValue = phoneNumberInput.value;

// Save the values to local storage
chrome.storage.local.set({
  desiredSalary: desiredSalaryValue,
  emailAddress: emailAddressValue,
  phoneNumber: phoneNumberValue
}, function() {
  console.log('Values saved to local storage');
});


}



// --------------------------- FUNCTION TO COPY TEST TO CLIPBOARD --------------------------- //

function copyToClip() {
	/* Get the text field */
	var copyText = document.getElementById("notesInput");

	/* Select the text field */
	copyText.select();
	copyText.setSelectionRange(0, 99999); /* For mobile devices */

	/* Copy the text inside the text field */
	navigator.clipboard.writeText(copyText.value);

	document.getElementById("copyToClip_btn").textContent = "Copied to clipboard";
	setTimeout(function () { changeBtnTxtBack(); }, 1500);
}
// --------------------------- END OF FUNCTION TO COPY TEST TO CLIPBOARD -------------------- //


function changeBtnTxtBack() {
	document.getElementById("copyToClip_btn").textContent = "Copy to clipboard";
}


function currentCurrencyChangeGBP() {
	const el = document.getElementById("currentSal_currency")
	el.innerHTML = "£";
}

function currentCurrencyChangeEUR() {
	const el = document.getElementById("currentSal_currency")
	el.innerHTML = "€";
}
function currentCurrencyChangeUSD() {
	const el = document.getElementById("currentSal_currency")
	el.innerHTML = "$";
}
function currentCurrencyChangeOther() {
	const el = document.getElementById("currentSal_currency")
	el.innerHTML = "";
}


function desiredCurrencyChangeGBP() {
	const el = document.getElementById("desiredSal_currency")
	el.innerHTML = "£";
}

function desiredCurrencyChangeEUR() {
	const el = document.getElementById("desiredSal_currency")
	el.innerHTML = "€";
}
function desiredCurrencyChangeUSD() {
	const el = document.getElementById("desiredSal_currency")
	el.innerHTML = "$";
}
function desiredCurrencyChangeOther() {
	const el = document.getElementById("desiredSal_currency")
	el.innerHTML = "";
}		




// ------ CODE FOR SAVING AND LOADING A CALL / SEARCH ---- //


// Get references to the input elements
const candidateName = document.getElementById('candidate_name');
const candidatePhoneNumber = document.getElementById('candidate_phoneNumber');
const candidateLinkedin = document.getElementById('candidate_linkedin');
const emailAddressPre = document.getElementById('email_address_pre');
const reportingLinePre2 = document.getElementById('reporting_line_pre');
const targetPosition = document.getElementById('target_position');

const finalComment = document.getElementById('notesInput');

// Get references to the select and button elements
const savedSearchesSelect = document.getElementById('saved-searches');
const saveSearchButton = document.getElementById('save-search');
const deleteSearchButton = document.getElementById('delete-search');

// Load saved searches from local storage into the select element
for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);
  if (key.startsWith('saved-search-')) {
    const value = localStorage.getItem(key);
    const option = document.createElement('option');
    option.text = key.substring('saved-search-'.length);
    option.value = value;
    savedSearchesSelect.add(option);
  }
}

// Load data from selected saved search into the input elements
savedSearchesSelect.addEventListener('change', (event) => {
  const savedSearchName = event.target.value;
  if (savedSearchName) {
    const savedSearchData = JSON.parse(savedSearchName);
    candidateName.value = savedSearchData.candidateName;
    candidatePhoneNumber.value = savedSearchData.candidatePhoneNumber;
    candidateLinkedin.value = savedSearchData.candidateLinkedin;
    emailAddressPre.value = savedSearchData.emailAddressPre;
    reportingLinePre2.value = savedSearchData.reportingLinePre2;
    targetPosition.value = savedSearchData.targetPosition;
	finalComment.value = savedSearchData.finalComment;
    deleteSearchButton.hidden = false;
  } else {
    // "Select a saved search..." option selected, reset all input values to blank
    candidateName.value = '';
    candidatePhoneNumber.value = '';
    candidateLinkedin.value = '';
    emailAddressPre.value = '';
    reportingLinePre2.value = '';
    targetPosition.value = '';
	finalComment.value = '';
    deleteSearchButton.hidden = true;
  }
});

function saveCandidateCallData()
{
	const savedSearchName = candidateName.value; // Get the value of the candidateName input element
	if (savedSearchName) { // Only save the search if the candidateName is not empty
	  const savedSearchData = { // Create an object containing the values of all input elements
		candidateName: candidateName.value,
		candidatePhoneNumber: candidatePhoneNumber.value,
		candidateLinkedin: candidateLinkedin.value,
		emailAddressPre: emailAddressPre.value,
		reportingLinePre2: reportingLinePre2.value,
		targetPosition: targetPosition.value,
		finalComment: finalComment.value,
	  };

	  localStorage.setItem( // Save the search data to local storage using the candidateName as the key
		`saved-search-${savedSearchName}`,
		JSON.stringify(savedSearchData)
	  );
 // Save the search data to chrome.storage.local
 chrome.storage.local.set({ [savedSearchName]: savedSearchData }, function() {
    console.log('Data saved to chrome.storage.local');
  });

	  const option = document.createElement('option'); // Create a new option element
	  option.text = savedSearchName; // Set the text of the option to the candidateName
	  option.value = JSON.stringify(savedSearchData); // Set the value of the option to the saved search data
	  savedSearchesSelect.add(option); // Add the option to the savedSearchesSelect dropdown
	  savedSearchesSelect.value = option.value; // Automatically select the newly saved search
	  saveSearchButton.textContent = 'Notes saved for later 👍'; // Change the text of the saveSearchButton to 'SAVED'
	  setTimeout(() => { // After a delay of 1.5 seconds...
		saveSearchButton.textContent = 'Save notes for later'; // Change the text of the saveSearchButton back to 'SAVE'
	  }, 2000);
	}

}

// Save data to local storage when the button is clicked
saveSearchButton.addEventListener('click', () => {
	const savedSearchName = candidateName.value; // Get the value of the candidateName input element
	if (savedSearchName) { // Only save the search if the candidateName is not empty
	  const savedSearchData = { // Create an object containing the values of all input elements
		candidateName: candidateName.value,
		candidatePhoneNumber: candidatePhoneNumber.value,
		candidateLinkedin: candidateLinkedin.value,
		emailAddressPre: emailAddressPre.value,
		reportingLinePre2: reportingLinePre2.value,
		targetPosition: targetPosition.value,
		finalComment: finalComment.value,
	  };
	  localStorage.setItem( // Save the search data to local storage using the candidateName as the key
		`saved-search-${savedSearchName}`,
		JSON.stringify(savedSearchData)
	  );
	  const option = document.createElement('option'); // Create a new option element
	  option.text = savedSearchName; // Set the text of the option to the candidateName
	  option.value = JSON.stringify(savedSearchData); // Set the value of the option to the saved search data
	  savedSearchesSelect.add(option); // Add the option to the savedSearchesSelect dropdown
	  savedSearchesSelect.value = option.value; // Automatically select the newly saved search
	  saveSearchButton.textContent = 'Notes saved for later 👍'; // Change the text of the saveSearchButton to 'SAVED'
	  setTimeout(() => { // After a delay of 1.5 seconds...
		saveSearchButton.textContent = 'Save notes for later'; // Change the text of the saveSearchButton back to 'SAVE'
	  }, 2000);
	}
  });
  
  // Delete currently loaded saved search when the button is clicked
  deleteSearchButton.addEventListener('click', () => {
	const savedSearchName = candidateName.value; // Get the value of the candidateName input element
	if (savedSearchName) { // Only delete the search if the candidateName is not empty
	  localStorage.removeItem(`saved-search-${savedSearchName}`); // Remove the saved search from local storage using the candidateName as the key
	  const selectedOption = savedSearchesSelect.querySelector('option:checked'); // Get the currently selected option in the savedSearchesSelect dropdown
	  selectedOption.remove(); // Remove the currently selected option from the savedSearchesSelect dropdown
	  candidateName.value = ''; // Reset the values of all input elements to blank
	  candidatePhoneNumber.value = '';
	  candidateLinkedin.value = '';
	  emailAddressPre.value = '';
	  reportingLinePre2.value = '';
	  targetPosition.value = '';
	  finalComment.value = '';
	  deleteSearchButton.hidden = true; // Hide the deleteSearchButton
	}
  });
  