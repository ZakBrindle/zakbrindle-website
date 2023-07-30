

	
document.getElementById("btn_velocity").onclick = function() { openLinkNewTab("https://chrome.google.com/webstore/detail/velocity/dnaghbpdgenpplifkeilmbamgdaecibl"); }

document.getElementById("leads_btm").onclick = function() { openLinkNewTab("https://kensingtonconsulting.sharepoint.com/:x:/s/KensingtonTeam/EaWBUMzoQ0dIjRFFWIxoDn4B35eEV2_dB-IKetLywQ2h9w?e=9CpcaX"); }

document.getElementById("btn_explore_terms").onclick = function() { openLink("./terms.html"); }

document.getElementById("btn_download_transcribeAudioDoc").onclick = function() { openLinkNewTab("../../search/files/Using Whisper AI to translate audio to text.pdf"); }




document.getElementById("btn_download_hintroPractice").onclick = function() { openLinkNewTab("https://kensingtonconsulting.sharepoint.com/:b:/s/KensingtonTeam/EdJ7cMF9-AZAq-4H0Sk0g_0B7kGxoY_GgvUQbaB3V1x_HQ?e=Y7Jbuj"); }

				
				
function openLinkNewTab(link) {
  /* Get the text field */
  console.log("opening link in new tab");
  window.open(link, '_blank');
}

				
				
function openLink(link) {
  /* Get the text field */
  console.log("opening link in new tab");
  window.open(link, '_self');
}
