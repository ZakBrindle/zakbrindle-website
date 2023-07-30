// Get the dropdown and iframe elements
const dropdown = document.getElementById('dropdown_selectConsultant');
const iframe = document.getElementById('pipeline_iframe');

// Add an event listener to the dropdown
dropdown.addEventListener('change', function() {
  // Get the selected option value
  const selectedOption = dropdown.value;
  
  // Build the iframe src URL with the selected option value
  const iframeSrc = "https://kensingtonconsulting.sharepoint.com/sites/KensingtonTeam/_layouts/15/Doc.aspx?sourcedoc={7263ac50-dccc-4dbc-b36c-8940a889f182}&action=embedview&wdAllowInteractivity=False&Item='" + selectedOption + "_JobBoard'!A1%3AP76&wdHideGridlines=True&wdDownloadButton=True&wdInConfigurator=True&wdInConfigurator=True&edesNext=false&resen=true&ed1JS=false";
  
  // Set the iframe src to the built URL
  iframe.src = iframeSrc;
});
