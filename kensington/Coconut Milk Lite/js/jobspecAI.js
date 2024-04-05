document.getElementById("startAI_resumAI").addEventListener('click', function() {  
  document.getElementById("startAI_resumAI").innerHTML = "Thinking...";
  handleUserInput();
});


document.getElementById("btn_anonymise").addEventListener('click', function() {  
  document.getElementById("btn_anonymise").innerHTML = "Thinking...";
  anonymiseEmail();
});

document.getElementById("btn_moreCompanies").addEventListener('click', function() {  
  document.getElementById("btn_moreCompanies").innerHTML = "Thinking...";
  getMoreCompanies();
});

document.getElementById("btn_ultraBool").addEventListener('click', function() {  
  document.getElementById("btn_ultraBool").innerHTML = "Thinking...";
  getUltraBool();
});



function closeTab()
{
  window.close();
}
var overFlow = false;

  // Function to make a request to ChatGPT API
  async function makeRequest(prompt) {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
      },
      body: JSON.stringify({
        'model': 'gpt-3.5-turbo',
        'messages': [
          { 'role': 'user', 'content': prompt }
        ],
        'temperature': 0.7
      })
    };
  
    try {
      const response = await fetch(API_URL, requestOptions);
      const data = await response.json();
  
      if (response.ok) {
        // Extract and return the assistant's reply
        return data.choices[0].message.content;
      } else {
        // Handle API error
        throw new Error(data.error.message);
      }
    } catch (error) {
      // Handle network error
      console.error('Error:', error.message);
      return null;
    }
  }


  
  var originalButtonText_ai = "";
  // Function to handle the user input and make a request
  function handleUserInput() {
   
   


 // Create a new notification box
 var notificationBox = document.createElement("div");
 notificationBox.style.position = "fixed";
 notificationBox.style.background = "#ccc";
 notificationBox.style.padding = "10px";
 notificationBox.style.borderRadius = "5px";
 notificationBox.style.zIndex = "10000";
 notificationBox.style.right = "0px";  // Adjust as needed
 notificationBox.style.bottom = "0px";  // Adjust as needed
 notificationBox.innerText = "AI Thinking...";

 document.body.appendChild(notificationBox);

 // Remove the notification box after 2.5 seconds
 setTimeout(() => {
   document.body.removeChild(notificationBox);
 }, 2500);
  

 var promptStart = "";

 
   
 var extraNotes = document.getElementById("extraDetail_jobspecAI");

 var summary_result = document.getElementById("jobspecSummary");
 var suggestedRoles_result = document.getElementById("suggestedRoles");
 var suggestedCompanies_result = document.getElementById("suggestedCompanies");
 var result_boolean1 = document.getElementById("boolean1");
 var result_boolean2 = document.getElementById("boolean2");

 var locationPrompt = "";
 if(document.getElementById("location_jobspec").value !== "")
 {
  locationPrompt = " in " + document.getElementById("location_jobspec").value;
 } 

if(document.getElementById("jobSpec_detail").value === "")
{  

  // WE HAVE NO JOB SPEC, look into companies and change prompts -----------/////////////////////////
  var createJobSpecPrompt = "Look into the company " + document.getElementById("companyName_jobspecAI").value + " and its technologies and write me a job spec for the role " + document.getElementById("jobtitle_jobspecAI").value + locationPrompt;
  sendRequest(createJobSpecPrompt, document.getElementById("jobSpec_detail"));
  document.getElementById("companyName_jobspecAI").value = "";
  document.getElementById("jobtitle_jobspecAI").value = "";
  
  document.getElementById("companyName_jobspecAI").disabled = true;
  document.getElementById("jobtitle_jobspecAI").disabled = true;

  
}
else
{
  // --------- WE HAVE A JOB SPEC, USE THE JOB SPEC
  var prompt = "Write a short summary to the recruiter explaining what their client is looking for in this hire" + locationPrompt + ": " + document.getElementById("jobSpec_detail").value;  
  if(extraNotes.value != "")
  {
    prompt += "---\n Extra notes: " + document.getElementById("extraDetail_jobspecAI").value;
  }

  // CAP AT MAX TOKENS
  const maxContextLength = 3000;
  let tokens = prompt.split(" ");

// Check if the number of tokens exceeds the maximum allowed
if (tokens.length > maxContextLength) {
// Truncate the tokens array to the maximum allowed length
tokens = tokens.slice(0, maxContextLength);

// Join the truncated tokens back into a string
prompt = tokens.join(" ");
}



var prompt2 = "List 15 companies (just the company name) within the advanced manufacturing industry"+ locationPrompt + " where I can find candidates for this job: " + document.getElementById("jobSpec_detail").value;  
if(extraNotes.value != "")
{
prompt2 += "---\n  Extra notes: " + document.getElementById("extraDetail_jobspecAI").value;
}

tokens = prompt2.split(" ");

// Check if the number of tokens exceeds the maximum allowed
if (tokens.length > maxContextLength) {
// Truncate the tokens array to the maximum allowed length
tokens = tokens.slice(0, maxContextLength);

// Join the truncated tokens back into a string
prompt2 = tokens.join(" ");
}


var prompt3 = "Write a list of job titles that have similar responsibilities and would be a good fit for this job: " + document.getElementById("jobSpec_detail").value;  
if(extraNotes.value != "")
{
prompt3 += "---\n  and Extra notes:" + document.getElementById("extraDetail_jobspecAI").value;
}


tokens = prompt3.split(" ");

// Check if the number of tokens exceeds the maximum allowed
if (tokens.length > maxContextLength) {
// Truncate the tokens array to the maximum allowed length
tokens = tokens.slice(0, maxContextLength);

// Join the truncated tokens back into a string
prompt3 = tokens.join(" ");
}

var prompt4 = "Dont including the company name and write me a boolean search based on the skills on this job spec: " + document.getElementById("jobSpec_detail").value;  

tokens = prompt4.split(" ");
// Check if the number of tokens exceeds the maximum allowed
if (tokens.length > maxContextLength) {
// Truncate the tokens array to the maximum allowed length
tokens = tokens.slice(0, maxContextLength);
// Join the truncated tokens back into a string
prompt4 = tokens.join(" ");
}

var prompt6 = "Dont including the company name and write me a short boolean search based on the skill on job spec: " + document.getElementById("jobSpec_detail").value;  

tokens = prompt6.split(" ");
// Check if the number of tokens exceeds the maximum allowed
if (tokens.length > maxContextLength) {
// Truncate the tokens array to the maximum allowed length
tokens = tokens.slice(0, maxContextLength);
// Join the truncated tokens back into a string
prompt6 = tokens.join(" ");
}


var prompt5 = "Without mentioning the name of the company, write a short email to a candidate selling this job: " + document.getElementById("jobSpec_detail").value;  
if(extraNotes.value != "")
{
prompt5 += "---\n  and Extra notes: " + document.getElementById("extraDetail_jobspecAI").value;
}


tokens = prompt5.split(" ");

// Check if the number of tokens exceeds the maximum allowed
if (tokens.length > maxContextLength) {
// Truncate the tokens array to the maximum allowed length
tokens = tokens.slice(0, maxContextLength);

// Join the truncated tokens back into a string
prompt5 = tokens.join(" ");
}

  sendRequest(prompt, document.getElementById("jobspecSummary"));
  
  sendRequest(prompt3, document.getElementById("suggestedRoles"));
  
  sendRequest(prompt4, document.getElementById("boolean1"));
  
  sendRequest(prompt2, document.getElementById("suggestedCompanies"));
  sendRequest(prompt6, document.getElementById("boolean2"));
  sendRequest(prompt5, document.getElementById("email_jobspecAI"));
  

  //document.getElementById("btn_anonymise").hidden = false;
  document.getElementById("btn_moreCompanies").hidden = false;
  
  document.getElementById("btn_ultraBool").hidden = false;
}




    
 
  }

  function getUltraBool()
  {
var companiesPromptPart = "";
    if(document.getElementById("moreCompanies_result").innerHTML === "")
    {
      companiesPromptPart = document.getElementById("suggestedCompanies").innerHTML;
      console.log("No extra companies");
    }
    else
    {
      console.log("Extra companies");

      companiesPromptPart = document.getElementById("moreCompanies_result").innerHTML;
    }
  

    var ultraBoolPrompt = "Create a boolean search based on these job titles: " + document.getElementById("suggestedRoles").innerHTML + " - and these companies: " +   companiesPromptPart + " - and these skills: " + document.getElementById("boolean1").innerHTML;
  
    sendRequest(ultraBoolPrompt, document.getElementById("ultraBool_result"));
  }

function getMoreCompanies()
{

  var morePrompt = "Based on this job spec list 100 companies in engineering manufacturing where I can find good candidates: " + document.getElementById("jobSpec_detail").value;

  document.getElementById("btn_moreCompanies").hidden = true;
  sendRequest(morePrompt, document.getElementById("moreCompanies_result"));
}


function anonymiseEmail()
{
  var anPrompt = "Anonymise this job message so they dont know who the company is and instead refer to them as 'my client': " + document.getElementById("email_jobspecAI").value;

  sendRequest(anPrompt, document.getElementById("email_jobspecAI"));

}


  
  

function sendRequest(prompt, outputElement)
{
console.log(prompt);
  makeRequest(prompt)
  .then(response => {
    // Handle the model's response
    console.log('Model response:', response);
    // Do something with the response
    if(outputElement.value === "")
    {
      // dont fix response on this one
      outputElement.value = response;
    }
    else
    {
      let responseFixed = response.replace(/\n/g, '<br/>');
      outputElement.innerHTML = responseFixed;
    }

    document.getElementById("startAI_resumAI").innerHTML = "Start AI";
    document.getElementById("btn_anonymise").innerHTML = "Anonymise";
    
    document.getElementById("btn_ultraBool").innerHTML = "The Ultra Boolean 5000";

  })
  .catch(error => {
    console.error('Error:', error);
    
  document.getElementById("startAI_resumAI").innerHTML = "Start AI";
  document.getElementById("btn_anonymise").innerHTML = "Anonymise";
  
  document.getElementById("btn_moreCompanies").innerHTML = "List more companies";
  document.getElementById("btn_ultraBool").innerHTML = "The Ultra Boolean 5000";

    // Handle error
    
  });

}

var boxes = document.getElementsByClassName('output-field');

for (var i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener('contextmenu', function(e) {
    e.preventDefault();
    var textToCopy = this.innerText;

    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        // Create a new notification box
        var notificationBox = document.createElement("div");
        notificationBox.style.position = "fixed";
        notificationBox.style.background = "#ccc";
        notificationBox.style.padding = "10px";
        notificationBox.style.borderRadius = "5px";
        notificationBox.style.zIndex = "10000";
        notificationBox.style.right = "0px";  // Adjust as needed
        notificationBox.style.bottom = "0px";  // Adjust as needed
        notificationBox.innerText = "Copied to clipboard";

        document.body.appendChild(notificationBox);

        // Remove the notification box after 2.5 seconds
        setTimeout(() => {
          document.body.removeChild(notificationBox);
        }, 2500);
      })
      .catch(err => {
        console.error('Could not copy text: ', err);
      });
  });
}





// Get references to the elements
const jobSpecDetail = document.getElementById('jobSpec_detail');
const companyName = document.getElementById('companyName_jobspecAI');
const jobTitle = document.getElementById('jobtitle_jobspecAI');

// Add event listener to the jobSpecDetail element
jobSpecDetail.addEventListener('input', function() {
  if (jobSpecDetail.value === '') {
    companyName.disabled = false;
    jobTitle.disabled = false;
  } else {
    companyName.disabled = true;
    jobTitle.disabled = true;
  }
});



