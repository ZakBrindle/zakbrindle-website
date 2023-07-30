document.getElementById("getFullMessage_btn").onclick = function() { getFullMessage(); }

document.getElementById("copyToClip_btn").onclick = function() { copyToClip(); }

document.getElementById("desiredCurrencyChangeGBP_btn").onclick = function() { desiredCurrencyChangeGBP(); }
document.getElementById("desiredCurrencyChangeEUR_btn").onclick = function() { desiredCurrencyChangeEUR(); }
document.getElementById("desiredCurrencyChangeUSD_btn").onclick = function() { desiredCurrencyChangeUSD(); }
document.getElementById("desiredCurrencyChangeOther_btn").onclick = function() { desiredCurrencyChangeOther(); }

document.getElementById("currentCurrencyChangeUSD_btn").onclick = function() { currentCurrencyChangeUSD(); }
document.getElementById("currentCurrencyChangeEUR_btn").onclick = function() { currentCurrencyChangeEUR(); }
document.getElementById("currentCurrencyChangeGBP_btn").onclick = function() { currentCurrencyChangeGBP(); }
document.getElementById("currentCurrencyChangeOther_btn").onclick = function() { currentCurrencyChangeOther(); }


 window.onbeforeunload = function ()
 {
     return "";
 };

function getFullMessage()
				{
					scroll(0,0);
				let fullMessage;
				const can_Name = document.getElementById("candidate_name");
				fullMessage = "----- Reg Call -----\n| Candidate Name	" + can_Name.value;
				
				const targ_pos = document.getElementById("target_position");
				if(targ_pos.value != "")
					{
				fullMessage = fullMessage + "\n| Target Position	" + targ_pos.value;
					}
			
			const opinion_txt = document.getElementById("opinion_note");
			if(opinion_txt.value != "")
					{
				fullMessage = fullMessage + "\n| Opinion	" + opinion_txt.value + "\n";
					}
					
				const current_situation = document.getElementById("current_situation");
				if(current_situation.value != "")
					{
				fullMessage = fullMessage + "\n\n| Current Situation\n	" + current_situation.value;
					}
					
					
				const reason_for_looking = document.getElementById("reason_for_looking");
				if(reason_for_looking.value != "")
					{
				fullMessage = fullMessage + "\n\n| Reason For Looking\n	" + reason_for_looking.value;
					}
				
				const current_location = document.getElementById("current_location");
				if(current_location.value != "")
					{
				fullMessage = fullMessage + "\n\n| Current Location\n	" + current_location.value;
					}
					
					var element_value = document.getElementById("commute_remote");
					if(element_value.value != "")
					{
				fullMessage = fullMessage + "\n\n| Commute or Remote\n	" + element_value.value;
					}
					
					
				element_value = document.getElementById("daily_duties");
				if(element_value.value != "")
					{
				fullMessage = fullMessage + "\n\n----- Current Company -----\n| Daily Duties / Skills\n	" + element_value.value;
					}
				element_value = document.getElementById("biggest_challenge");
				if(element_value.value != "")
					{
				fullMessage = fullMessage + "\n\n| Biggest Challenge or Achievement\n	" + element_value.value;
					}
				element_value = document.getElementById("cand_reference");
				if(element_value.value != "")
					{
				fullMessage = fullMessage + "\n\n| References\n	" + element_value.value;
					}
				element_value = document.getElementById("current_salary");
				
				if(element_value.value != "")
					{	
				var currencyType = document.getElementById("currentSal_currency");
				
				fullMessage = fullMessage + "\n\n----- Salary -----\n| Current Salary\n	" + currencyType.innerHTML + element_value.value;
					
					}
					
				element_value = document.getElementById("desired_salary");
				currencyType = document.getElementById("desiredSal_currency");
				if(element_value.value != "")
					{	
				fullMessage = fullMessage + "\n\n| Desired Salary\n	" + desiredSal_currency.innerHTML + element_value.value;
					}
				
				element_value = document.getElementById("visa_status");
				if(element_value.value != "")
					{	
				fullMessage = fullMessage + "\n\n| VISA Status\n	" + element_value.value;
					}
				element_value = document.getElementById("notice_period");
				if(element_value.value != "")
					{	
				fullMessage = fullMessage + "\n\n| Notice Period\n	" + element_value.value;
					}
				element_value = document.getElementById("interviews_on");
				if(element_value.value != "")
					{	
				fullMessage = fullMessage + "\n\n| Any interviews lined up?\n	" + element_value.value;
					}
					
				element_value = document.getElementById("interested_checkbox");
				if(element_value)
			{
				//this tick box has been removed. Delete this check.
			}
			else {
				
			}
			
		

				
				
				element_value = document.getElementById("applied_previously_checkbox");
				if(element_value.checked)
				{
					console.log("Already applied for this role: YES");
					fullMessage = fullMessage + "\n\n| Applied for this role before?\n	Yes";
				}
				else
				{		
					console.log("Already applied for this role: NO");			
					fullMessage = fullMessage + "\n\n| Applied for this role before?\n	No";
				
				}
				
				
				
					element_value = document.getElementById("non_competes");
				if(element_value.checked)
			{
				console.log("Non-competes: YES");
				fullMessage = fullMessage + "\n\n| Any non-competes?\n	Yes";
			}
			else {
				console.log("Non-competes: NO");
				fullMessage = fullMessage + "\n\n| Any non-competes?\n	No";
			}
				
				element_value = document.getElementById("have_cv_already");
				if(element_value.checked)
				{
					console.log("Do I have your CV: YES");
					fullMessage = fullMessage + "\n\n| Do I have your CV?\n	Yes";
				}
				else
				{
					console.log("Do I have your CV: NO");
					fullMessage = fullMessage + "\n\n| Do I have your CV?\n	No";
				}

				
				
				element_value = document.getElementById("email_address");
				if(element_value.value != "")
					{	
						fullMessage = fullMessage + "\n\n| Email Address\n	" + element_value.value;
					}

					element_value = document.getElementById("whats_going_on_current_company");
					if(element_value.value != "")
					{						
						fullMessage = fullMessage + "\n\n| Whats going on at your current company?\n	" + element_value.value;
					}
				
					element_value = document.getElementById("extra_notes");
					if(element_value.value != "")
					{						
						fullMessage = fullMessage + "\n\n| Extra Notes\n	" + element_value.value;
					}
				console.log(fullMessage);
				
				
			
				const element2 = document.getElementById("notesInput");	
				element2.value = fullMessage;
				
				}
				
				
	function copyToClip() {
  /* Get the text field */
  var copyText = document.getElementById("notesInput");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

   /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value);

  document.getElementById("copyToClip_btn").textContent = "Copied to clipboard";
  setTimeout(function(){ changeBtnTxtBack(); }, 1500);
}



function changeBtnTxtBack()
{	
	document.getElementById("copyToClip_btn").textContent = "Copy to clipboard";
}


function currentCurrencyChangeGBP()
{
		const el = document.getElementById("currentSal_currency")
		el.innerHTML = "£";
}

function currentCurrencyChangeEUR()
{
		const el = document.getElementById("currentSal_currency")
		el.innerHTML = "€";
}
function currentCurrencyChangeUSD()
{
		const el = document.getElementById("currentSal_currency")
		el.innerHTML = "$";
}
function currentCurrencyChangeOther()
{
		const el = document.getElementById("currentSal_currency")
		el.innerHTML = "";
}
		

function desiredCurrencyChangeGBP()
{
		const el = document.getElementById("desiredSal_currency")
		el.innerHTML = "£";
}

function desiredCurrencyChangeEUR()
{
		const el = document.getElementById("desiredSal_currency")
		el.innerHTML = "€";
}
function desiredCurrencyChangeUSD()
{
		const el = document.getElementById("desiredSal_currency")
		el.innerHTML = "$";
}
function desiredCurrencyChangeOther()
{
		const el = document.getElementById("desiredSal_currency")
		el.innerHTML = "";
}		