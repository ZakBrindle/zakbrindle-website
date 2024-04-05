// Get references to the buttons and divs
const jobsAdvertisedBtn = document.getElementById("reason_jobsAdvertised");
const rapidFNBtn = document.getElementById("reason_rapidFN");
const jobStatusBtn = document.getElementById("reason_jobStatus");
const hiringPlansBtn = document.getElementById("reason_hiringPlans");



const jobsAdvertisedDiv = document.getElementById("div_reason_jobsAdvertised");
const rapidFNDiv = document.getElementById("div_reason_rapidFN");
const jobStatusDiv = document.getElementById("div_reason_jobStatus");
const hiringPlansDiv = document.getElementById("div_reason_hiringPlans");
const customReasonDiv = document.getElementById("div_reason_custom");


// Function to hide all the div elements
function hideAllDivs() {
  jobsAdvertisedDiv.style.display = "none";
  rapidFNDiv.style.display = "none";
  jobStatusDiv.style.display = "none";
  hiringPlansDiv.style.display = "none";
  customReasonDiv.style.display = "none";
}

// Function to enable a div element and change the button class
function enableDiv(div, btn) {
    // Check if the clicked button is already active
    if (btn.classList.contains("btn-primary")) {
      // Hide the selected div and change the button class back to "btn btn-outline-primary btn-fw"
      div.style.display = "none";
      btn.classList.remove("btn-primary", "mr-2");
      btn.classList.add("btn-outline-primary", "btn-fw");
    } else {
      // Show the selected div
      div.style.display = "block";
      
      // Change the class of the clicked button to "btn btn-primary mr-2"
      btn.classList.remove("btn-outline-primary", "btn-fw");
      btn.classList.add("btn", "btn-primary", "mr-2");
    }
  }

  // Function to enable a div element for the custom button
function enableDivCustom(div, boolValue) {
 
  // Check if the clicked button is already active
  if (boolValue) {
    // Show the selected div
    div.style.display = "block";
  console.log("ADDING CUSTOM DIV");
  } else {    
    // Hide the selected div and change the button class back to "btn btn-outline-primary btn-fw"
    console.log("HIDING CUSTOM DIV");
    div.style.display = "none";
  }
}
  
  
  
// Add event listeners to the buttons
jobsAdvertisedBtn.addEventListener("click", function() {
  enableDiv(jobsAdvertisedDiv, jobsAdvertisedBtn);
});

rapidFNBtn.addEventListener("click", function() {
  enableDiv(rapidFNDiv, rapidFNBtn);
});

jobStatusBtn.addEventListener("click", function() {
  enableDiv(jobStatusDiv, jobStatusBtn);
});

hiringPlansBtn.addEventListener("click", function() {
  enableDiv(hiringPlansDiv, hiringPlansBtn);
});

// Hide all the div elements initially
hideAllDivs();



// adding a custom button / reason for calling

// Define a function to create the custom reason button
function CreateButton_CustomReason() {
  // Get the input value
  const customReason = document.getElementById('reason_customReason_input').value;

  // Create a new button with the custom reason
  const customReasonButton = document.createElement('button');
  customReasonButton.id = 'custom_reason_btn';
  customReasonButton.className = 'btn btn-primary mr-2';
  customReasonButton.innerHTML = customReason;

  // Add event listener to the custom reason button
  customReasonButton.addEventListener('click', function() {
    // Remove the custom reason button
    customReasonButton.parentNode.removeChild(customReasonButton);
    enableDivCustom(customReasonDiv, false);
    // Show the input field and + button again
    customReasonInput.style.display = 'inline-block';
    addButton.style.display = 'inline-block';
  });

  // Insert the custom reason button after the hiringPlans button
  const hiringPlansButton = document.getElementById('reason_hiringPlans');
  hiringPlansButton.parentNode.insertBefore(customReasonButton, hiringPlansButton.nextSibling);

  // Add margin to the custom reason button
  customReasonButton.style.marginLeft = '10px';

  // Hide the input field and + button
  customReasonInput.style.display = 'none';
  addButton.style.display = 'none';

  document.getElementById("reason_customTitle").innerHTML = customReason;
}

// Get the input field, + button, and custom reason button (if already present)
const customReasonInput = document.getElementById('reason_customReason_input');
const addButton = document.getElementById('reason_addReason');
const customReasonButton = document.getElementById('custom_reason_btn');

// Hide the input field and + button initially (if custom reason button is present)
if (customReasonButton) {
  customReasonInput.style.display = 'none';
  addButton.style.display = 'none';
}

// Add event listener to the add button
addButton.addEventListener('click', function() {
  // Create the custom reason button
  CreateButton_CustomReason();
  enableDivCustom(customReasonDiv, true);
});

// Add event listener to the custom reason input field
customReasonInput.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    // Create the custom reason button
    CreateButton_CustomReason();
    enableDivCustom(customReasonDiv, true);
  }
});

// Add event listener to the custom reason button (if already present)
if (customReasonButton) {
  customReasonButton.addEventListener('click', function() {
    // Remove the custom reason button
    customReasonButton.parentNode.removeChild(customReasonButton);
    enableDivCustom(customReasonDiv, false);
    // Show the input field and + button again
    customReasonInput.style.display = 'inline-block';
    addButton.style.display = 'inline-block';
  });
}




// ----- CODE TO SAVE CONTACT NOTES FOR LATER (AND DELETE)

// Get references to the input elements
const contactName = document.getElementById('contact_name');
const contactPhoneNumber = document.getElementById('contact_phoneNumber');
const previousNotes = document.getElementById('vincere_previousNotes');
const extraNotes = document.getElementById('extra_notes');


// Get references to the select and button elements
const savedContactsSelect = document.getElementById('saved-searches');
const saveContactButton = document.getElementById('save-search');
const deleteContactButton = document.getElementById('delete-search');

// Load saved contacts from local storage into the select element
for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);
  if (key.startsWith('saved-contact-')) {
    const value = localStorage.getItem(key);
    const option = document.createElement('option');
    option.text = key.substring('saved-contact-'.length);
    option.value = value;
    savedContactsSelect.add(option);
  }
}

// Load data from selected saved contact into the input elements
savedContactsSelect.addEventListener('change', (event) => {
  const savedContactName = event.target.value;
  if (savedContactName) {
    const savedContactData = JSON.parse(savedContactName);
    contactName.value = savedContactData.contactName;
    contactPhoneNumber.value = savedContactData.contactPhoneNumber;
    previousNotes.value = savedContactData.previousNotes;
    extraNotes.value = savedContactData.extraNotes;
    deleteContactButton.hidden = false;
  } else {
    // "Select a saved contact..." option selected, reset all input values to blank
    contactName.value = '';
    contactPhoneNumber.value = '';
    previousNotes.value = '';
    extraNotes.value = '';
    deleteContactButton.hidden = true;
  }
});

// Save data to local storage when the button is clicked
saveContactButton.addEventListener('click', () => {
	const savedContactName = contactName.value; // Get the value of the contactName input element
	if (savedContactName) { // Only save the contact if the contactName is not empty
	  const savedContactData = { // Create an object containing the values of all input elements
		contactName: contactName.value,
		contactPhoneNumber: contactPhoneNumber.value,
		previousNotes: previousNotes.value,
    extraNotes: extraNotes.value,
	  };
	  localStorage.setItem( // Save the contact data to local storage using the contactName as the key
		`saved-contact-${savedContactName}`,
		JSON.stringify(savedContactData)
	  );
	  const option = document.createElement('option'); // Create a new option element
	  option.text = savedContactName; // Set the text of the option to the contactName
	  option.value = JSON.stringify(savedContactData); // Set the value of the option to the saved contact data
	  savedContactsSelect.add(option); // Add the option to the savedContactsSelect dropdown
	  savedContactsSelect.value = option.value; // Automatically select the newly saved contact
	  saveContactButton.textContent = 'Notes saved for later 👍'; // Change the text of the saveContactButton to 'SAVED'
	  setTimeout(() => { // After a delay of 1.5 seconds...
		saveContactButton.textContent = 'Save notes for later'; // Change the text of the saveContactButton back to 'SAVE'
	  }, 2000);
	}
  });
  
// Delete currently loaded saved contact when the button is clicked
deleteContactButton.addEventListener('click', () => {
  const savedContactName = contactName.value; // Get the value of the contactName input element
  if (savedContactName) { // Only delete the contact if the contactName is not empty
    localStorage.removeItem(`saved-contact-${savedContactName}`); // Remove the saved contact from local storage using the contactName as the key
    const selectedOption = savedContactsSelect.querySelector('option:checked'); // Get the currently selected option in the savedContactsSelect dropdown
    selectedOption.remove(); // Remove the currently selected option from the savedContactsSelect dropdown
    contactName.value = ''; // Reset the values of all input elements to blank
    contactPhoneNumber.value = '';
    previousNotes.value = '';
    extraNotes.value = '';
    deleteContactButton.hidden = true; // Hide the deleteContactButton
  }
});


// ----- END OF CODE TO SAVE AND DELETE NOTES FOR LATER


// ENABLE / DISABLE VINCERE NOTES--------------------
// Get a reference to the checkbox element
const checkbox = document.getElementById("checkedVinnie_tickbox");

// Get a reference to the element that should be enabled/disabled
const notesElement = document.getElementById("vincere_previousNotes");

// Add an onclick listener to the checkbox
checkbox.addEventListener("click", function() {
  // Check if the checkbox is checked
  if (checkbox.checked) {
    // Enable the notes element
    notesElement.removeAttribute("disabled");
  } else {
    // Disable the notes element
    notesElement.setAttribute("disabled", true);
  }
});
// END OF ENABLE / DISABLE VINERE NOTES--------------------



// GENERATE FULL MESSAGE BUTTON ---------------------
const getFullMessageBtn = document.getElementById("getFullMessage_btn");

getFullMessageBtn.addEventListener("click", generateFullMessage);

function generateFullMessage() {
  // Add your code here to generate the full message
  console.log("Generating full message...");

  getFullMessageBtn.textContent = 'Generated full message 👍'; 
  setTimeout(() => { // After a delay of 1.5 seconds...
    getFullMessageBtn.textContent = 'Generate full message'; 
  }, 2000);

// initialise all as false
var linkedInJob_div = false;
var tradeshows_div = false;
var jobWeAreWorking_div = false;
var hiringPlans_div = false;
var customReason_div = false;

// lets do some checks to make sure what DIVs are active.
function checkIfActiveDiv(divElement)
{
  if (divElement.style.display === "block") {
    return true;
    console.log("Checking if div is active: " + divElement + " | true");
  } 
  else
  {
    return false;
    console.log("Checking if div is active: " + divElement + " | false");

  }
}

linkedInJob_div = checkIfActiveDiv(jobsAdvertisedDiv);
tradeshows_div = checkIfActiveDiv(rapidFNDiv);
jobWeAreWorking_div = checkIfActiveDiv(jobStatusDiv);
hiringPlans_div = checkIfActiveDiv(hiringPlansDiv);
customReason_div = checkIfActiveDiv(customReasonDiv);



function getValue(elementID)
{
  return document.getElementById(elementID).value;
}

function isBlank(elementID)
{
  if(getValue(elementID) === "")
  {
    return true; //it is blank
  }
  else
  {
    return false; // it is not blank
  }
}
// now that we know what div's to pull information from, start creating a FullMessage.
var fullMessage = ""; // initialise as blank

fullMessage += "------- Contact Call -------\n";
// lets check if the next element is blank
if(!isBlank("contact_name"))
{
  //if isBlank returns false, then the element is NOT blank. Add it to full message
  fullMessage += "Contact name: " + getValue("contact_name") + "\n";
}
// lets check if the next element is blank
if(!isBlank("contact_phoneNumber"))
{
   //if isBlank returns false, then the element is NOT blank. Add it to full message
  fullMessage += "Phone number: " + getValue("contact_phoneNumber") + "\n";
}
// lets check if the next element is blank
if(!isBlank("vincere_previousNotes"))
{
   //if isBlank returns false, then the element is NOT blank. Add it to full message
  fullMessage += "Previous notes from Vincere: " + getValue("vincere_previousNotes") + "\n";
}
// lets check if the next element is blank
if(!isBlank("extra_notes"))
{
   //if isBlank returns false, then the element is NOT blank. Add it to full message
  fullMessage += "Notes prior to call: " + getValue("extra_notes") + "\n\n\n------- Notes -------\n";
}

if(linkedInJob_div)
{
  // linkedin job div active, get all elements from this div
  fullMessage += "\n|-- Ive seen a job advertised --|\n";
  if(!isBlank("contact_jobAd_jobTitle"))
  {
    fullMessage += "Job Title: " + getValue("contact_jobAd_jobTitle") + "\n";
  }
  if(!isBlank("contact_jobAd_location"))
  {
    fullMessage += "Job Location: " + getValue("contact_jobAd_location") + "\n";
  }

  // lets check to see if the checkbox for remote working is supported
  const activelyLookingCheckbox = document.getElementById("contact_jobAd_remoteSupportedCheckbox");

if (activelyLookingCheckbox.checked) {
  fullMessage += "Support for remote: YES\n\n";
} else {
  fullMessage += "Support for remote: NO\n\n";
}

if(!isBlank("contact_jobAd_discover"))
  {
    fullMessage += "Discover: " + getValue("contact_jobAd_discover") + "\n";
  }

  if(!isBlank("contact_jobAd_call2action"))
  {
    fullMessage += "Call to action: " + getValue("contact_jobAd_call2action") + "\n";
  }
}// END OF linkedin job advert check

if(tradeshows_div)
{
  console.log("Tradeshow Div Active");
  // tradeshows div is active, get all elements 
  fullMessage += "\n|-- Tradeshows --|\n";
  if(!isBlank("contact_RapidNotes"))
  {
    fullMessage += "RAPID: " + getValue("contact_RapidNotes") + "\n\n";
  }
  if(!isBlank("contact_FormNextNotes"))
  {
    fullMessage += "FormNext: " + getValue("contact_FormNextNotes") + "\n\n";
  }
  if(!isBlank("contact_TCTNotes"))
  {
    fullMessage += "TCT / Other: " + getValue("contact_TCTNotes") + "\n\n";
  }
}

console.log(fullMessage);


}// end of generateFullMessage function -- ///
// END OF GENERATE FULL MESSAGE BUTTON --------------




