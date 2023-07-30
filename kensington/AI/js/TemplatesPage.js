

	
document.getElementById("copy_btn_1").onclick = function() { copyToClip1(); }


document.getElementById("copy_btn_notInterested").onclick = function() { copyToClipNotInterested(); }

document.getElementById("copy_btn_1.1").onclick = function() { copyToClip1_1(); }
document.getElementById("copy_btn_2").onclick = function() { copyToClip2(); }

document.getElementById("copy_btn_3").onclick = function() { copyToClip3(); }

document.getElementById("copy_btn_4").onclick = function() { copyToClip4(); }

document.getElementById("copy_btn_5").onclick = function() { copyToClip5(); }

document.getElementById("copy_btn_6").onclick = function() { copyToClip6(); }

document.getElementById("copy_btn_7").onclick = function() { copyToClip7(); }


document.getElementById("copy_btn_rapid").onclick = function() { copyToClipRapid(); }

document.getElementById("copy_btn_8").onclick = function() { copyToClip8(); }

document.getElementById("copy_btn_9").onclick = function() { copyToClip9(); }

document.getElementById("copy_btn_10").onclick = function() { copyToClip10(); }


document.getElementById("copy_btn_11").onclick = function() { copyToClip11(); }


document.getElementById("copy_btn_12").onclick = function() { copyToClip12(); }


document.getElementById("copy_btn_13").onclick = function() { copyToClip13(); }


document.getElementById("copy_btn_promts_1").onclick = function() { copyToClip_prompt1(); }


var jobDetailInput = document.getElementById('jobDetail');

console.log("ADDING LISTENER");
jobDetailInput.addEventListener('keypress', function(e) {

setTimeout(function(){ updateJobDetailLive(); }, 200);

})

GetJobDetail_temp1();



function GetJobDetail_temp1()
{
	const jobDetail = localStorage.getItem('template1.1_jobDetail');
	
	const msgStart = "It would be great to get connected as I was intrigued by your background in ";
	const msgEnd = " and wondered if you were open to hearing about new opportunities?"
	
	if(jobDetail != null)
	{
		console.log("setting job detail: " + msgStart + jobDetail + msgEnd);
		const myName = localStorage.getItem('name');
		var fullMessage;
		if(myName != null && myName != "logout")
		{
			var fullMessage = msgStart + jobDetail + msgEnd + "\n- " + myName;
		}
		else
		{
			var fullMessage = msgStart + jobDetail + msgEnd;
		}
		//fullMessage = msgStart + jobDetail + msgEnd;
		console.log(fullMessage);
		document.getElementById("template1.1").value = fullMessage;
		document.getElementById("jobDetail").value = jobDetail;
		
	}
	else
	{
		//set default value
		localStorage.setItem('template1.1_jobDetail', "manufacturing engineering in complex assembly operations");
	}
}

function SaveJobDetail()
{
	const currentJobDetail = document.getElementById("jobDetail").value;
	localStorage.setItem('template1.1_jobDetail', currentJobDetail);	
}

function updateJobDetailLive()
{
	// on keypress, update main message		
	const msgStart = "It would be great to get connected as I was intrigued by your background in ";
	const msgEnd = " and wondered if you were open to hearing about new opportunities?"
	
	const newMessage = (msgStart + document.getElementById("jobDetail").value + msgEnd);
	console.log("new message: " + newMessage);
	document.getElementById("template1.1").value = newMessage;
	
}
				
				
function copyToClip1() {
  /* Get the text field */
  console.log("COPY TO CLIP");
  let buttonIDnumber = 1;
  var copyText = document.getElementById("template"+buttonIDnumber.toString());

  document.getElementById("copy_btn_"+buttonIDnumber.toString()).textContent = "Copied";	

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

   /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value);
  setTimeout(function(){ changeBtnTxtBack("copy_btn_"+buttonIDnumber.toString()); }, 1500);
}

function copyToClipNotInterested() {
  /* Get the text field */
  console.log("COPY TO CLIP");
  var copyText = document.getElementById("templateNotInterested");

  document.getElementById("copy_btn_notInterested").textContent = "Copied";	

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

   /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value);
  setTimeout(function(){ changeBtnTxtBack("copy_btn_notInterested"); }, 1500);
}

function copyToClip1_1() {
  /* Get the text field */
  console.log("COPY TO CLIP");
  let buttonIDnumber = 1.1;
  var copyText = document.getElementById("template"+buttonIDnumber.toString());

  document.getElementById("copy_btn_"+buttonIDnumber.toString()).textContent = "Copied";	

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

   /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value);
  setTimeout(function(){ changeBtnTxtBack("copy_btn_"+buttonIDnumber.toString()); }, 1500);
  SaveJobDetail();
}

function copyToClip2() {
  /* Get the text field */
  console.log("COPY TO CLIP");
  let buttonIDnumber = 2;
  var copyText = document.getElementById("template"+buttonIDnumber.toString());

  document.getElementById("copy_btn_"+buttonIDnumber.toString()).textContent = "Copied";	

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

   /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value);
  setTimeout(function(){ changeBtnTxtBack("copy_btn_"+buttonIDnumber.toString()); }, 1500);
}

function copyToClip3() {
  /* Get the text field */
  console.log("COPY TO CLIP");
  let buttonIDnumber = 3;
  var copyText = document.getElementById("template"+buttonIDnumber.toString());

  document.getElementById("copy_btn_"+buttonIDnumber.toString()).textContent = "Copied";	

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

   /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value);
  setTimeout(function(){ changeBtnTxtBack("copy_btn_"+buttonIDnumber.toString()); }, 1500);
}

function copyToClip4() {
  /* Get the text field */
  console.log("COPY TO CLIP");
  let buttonIDnumber = 4;
  var copyText = document.getElementById("template"+buttonIDnumber.toString());

  document.getElementById("copy_btn_"+buttonIDnumber.toString()).textContent = "Copied";	

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

   /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value);
  setTimeout(function(){ changeBtnTxtBack("copy_btn_"+buttonIDnumber.toString()); }, 1500);
}

function copyToClip5() {
  /* Get the text field */
  console.log("COPY TO CLIP");
  let buttonIDnumber = 5;
  var copyText = document.getElementById("template"+buttonIDnumber.toString());

  document.getElementById("copy_btn_"+buttonIDnumber.toString()).textContent = "Copied";	

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

   /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value);
  setTimeout(function(){ changeBtnTxtBack("copy_btn_"+buttonIDnumber.toString()); }, 1500);
}

function copyToClip6() {
  /* Get the text field */
  console.log("COPY TO CLIP");
  let buttonIDnumber = 6;
  var copyText = document.getElementById("template"+buttonIDnumber.toString());

  document.getElementById("copy_btn_"+buttonIDnumber.toString()).textContent = "Copied";	

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

   /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value);
  setTimeout(function(){ changeBtnTxtBack("copy_btn_"+buttonIDnumber.toString()); }, 1500);
}

function copyToClip7() {
  /* Get the text field */
  console.log("COPY TO CLIP");
  let buttonIDnumber = 7;
  var copyText = document.getElementById("template"+buttonIDnumber.toString());

  document.getElementById("copy_btn_"+buttonIDnumber.toString()).textContent = "Copied";	

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

   /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value);
  setTimeout(function(){ changeBtnTxtBack("copy_btn_"+buttonIDnumber.toString()); }, 1500);
}

function copyToClipRapid() {
  /* Get the text field */
  console.log("COPY TO CLIP");
  
  var copyText = document.getElementById("template_rapid");
  document.getElementById("copy_btn_rapid").textContent = "Copied";	

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

   /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value);
  setTimeout(function(){ changeBtnTxtBack("copy_btn_rapid"); }, 1500);
}

function copyToClip8() {
  /* Get the text field */
  console.log("COPY TO CLIP");
  let buttonIDnumber = 8;
  var copyText = document.getElementById("template"+buttonIDnumber.toString());

  document.getElementById("copy_btn_"+buttonIDnumber.toString()).textContent = "Copied";	

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

   /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value);
  setTimeout(function(){ changeBtnTxtBack("copy_btn_"+buttonIDnumber.toString()); }, 1500);
}

function copyToClip9() {
  /* Get the text field */
  console.log("COPY TO CLIP");
  let buttonIDnumber = 9;
  var copyText = document.getElementById("template"+buttonIDnumber.toString());

  document.getElementById("copy_btn_"+buttonIDnumber.toString()).textContent = "Copied";	

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

   /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value);
  setTimeout(function(){ changeBtnTxtBack("copy_btn_"+buttonIDnumber.toString()); }, 1500);
}

function copyToClip10() {
  /* Get the text field */
  console.log("COPY TO CLIP");
  let buttonIDnumber = 10;
  var copyText = document.getElementById("template"+buttonIDnumber.toString());

  document.getElementById("copy_btn_"+buttonIDnumber.toString()).textContent = "Copied";	

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

   /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value);
  setTimeout(function(){ changeBtnTxtBack("copy_btn_"+buttonIDnumber.toString()); }, 1500);
}

function copyToClip11() {
  /* Get the text field */
  console.log("COPY TO CLIP");
  let buttonIDnumber = 11;
  var copyText = document.getElementById("template"+buttonIDnumber.toString());

  document.getElementById("copy_btn_"+buttonIDnumber.toString()).textContent = "Copied";	

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

   /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value);
  setTimeout(function(){ changeBtnTxtBack("copy_btn_"+buttonIDnumber.toString()); }, 1500);
}

function copyToClip12() {
  /* Get the text field */
  console.log("COPY TO CLIP");
  let buttonIDnumber = 12;
  var copyText = document.getElementById("template"+buttonIDnumber.toString());

  document.getElementById("copy_btn_"+buttonIDnumber.toString()).textContent = "Copied";	

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

   /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value);
  setTimeout(function(){ changeBtnTxtBack("copy_btn_"+buttonIDnumber.toString()); }, 1500);
}

function copyToClip13() {
  /* Get the text field */
  console.log("COPY TO CLIP");
  let buttonIDnumber = 13;
  var copyText = document.getElementById("template"+buttonIDnumber.toString());

  document.getElementById("copy_btn_"+buttonIDnumber.toString()).textContent = "Copied";	

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

   /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value);
  setTimeout(function(){ changeBtnTxtBack("copy_btn_"+buttonIDnumber.toString()); }, 1500);
}

function copyToClip_prompt1() {

// first add candidate job and company name

const jobTitleInput = document.querySelector('#candidateJob_prompt1');
const companyNameInput = document.querySelector('#candidateCompany_prompt1');
const message = document.querySelector('#template_prompt1');

const originalPrompt = message.innerHTML;

  const jobTitleValue = jobTitleInput.value || "{jobTitle}";
  const companyNameValue = companyNameInput.value || "{companyName}";
  const updatedMessage = message.innerHTML
    .replace(/{jobTitle}/g, jobTitleValue)
    .replace(/{companyName}/g, companyNameValue);
  message.innerHTML = updatedMessage;





  /* Get the text field */
  console.log("COPY TO CLIP");
  var copyText = document.getElementById("template_prompt1");

  document.getElementById("copy_btn_promts_1").textContent = "Copied";	

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

   /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value);
  setTimeout(function(){ changeBtnTxtBack("copy_btn_promts_1"); }, 1500);

  document.querySelector('#template_prompt1').innerHTML = originalPrompt; 

}


function changeBtnTxtBack(btnID)
{	
	document.getElementById(btnID).textContent = "Copy";
}




