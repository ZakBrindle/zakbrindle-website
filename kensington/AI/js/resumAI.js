document.getElementById("startAI_resumAI").addEventListener('click', function() {  
  document.getElementById("startAI_resumAI").innerHTML = "Thinking...";
  handleUserInput();
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
   
      var promptStart = "";
   
      var call_detail = document.getElementById("callNotes_resumAI");

      var result_feedback = document.getElementById("cvFeedback_output");
      var result_marketIntel_jobTitle = document.getElementById("suggestedRoles");
      var result_marketIntel_companies = document.getElementById("suggestedCompanies");
      var result_boolean1 = document.getElementById("boolean1_resumAI");
      var result_boolean2 = document.getElementById("boolean2_resumAI");






      var prompt = "I want to give feedback on my candidates resume. List the strenghts, and list the areas for improvement: " + document.getElementById("cv_content_resumAI").value;  
      if(call_detail.innerHTML != "")
      {
        prompt += "... Is there anything they could have included from the call notes: " + document.getElementById("callNotes_resumAI").value;
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



var prompt2 = "List some job titles that would my candidate is a good fit for based on their CV: " + document.getElementById("cv_content_resumAI").value;  
if(call_detail.innerHTML != "")
{
  prompt2 += "... and notes from a call with them: " + document.getElementById("callNotes_resumAI").value;
}

tokens = prompt2.split(" ");

// Check if the number of tokens exceeds the maximum allowed
if (tokens.length > maxContextLength) {
// Truncate the tokens array to the maximum allowed length
tokens = tokens.slice(0, maxContextLength);

// Join the truncated tokens back into a string
prompt2 = tokens.join(" ");
}


var prompt3 = "List companies that my candidate be a good fit for based on their resume: " + document.getElementById("cv_content_resumAI").value;  
if(call_detail.innerHTML != "")
{
  prompt3 += "... and notes from a call with them: " + document.getElementById("callNotes_resumAI").value;
}


tokens = prompt3.split(" ");

// Check if the number of tokens exceeds the maximum allowed
if (tokens.length > maxContextLength) {
// Truncate the tokens array to the maximum allowed length
tokens = tokens.slice(0, maxContextLength);

// Join the truncated tokens back into a string
prompt3 = tokens.join(" ");
}

var prompt4 = "Write me a boolean search based on the skills this candidate has on their resume: " + document.getElementById("cv_content_resumAI").value;  

tokens = prompt4.split(" ");
// Check if the number of tokens exceeds the maximum allowed
if (tokens.length > maxContextLength) {
// Truncate the tokens array to the maximum allowed length
tokens = tokens.slice(0, maxContextLength);
// Join the truncated tokens back into a string
prompt4 = tokens.join(" ");
}

var prompt6 = "Write me a boolean search based on the skills on this resume, and not the job titles: " + document.getElementById("cv_content_resumAI").value;  

tokens = prompt6.split(" ");
// Check if the number of tokens exceeds the maximum allowed
if (tokens.length > maxContextLength) {
// Truncate the tokens array to the maximum allowed length
tokens = tokens.slice(0, maxContextLength);
// Join the truncated tokens back into a string
prompt6 = tokens.join(" ");
}


var prompt5 = "Write a short email to a hiring manager selling my candidate as a good fit for the role based on their resume: " + document.getElementById("cv_content_resumAI").value;  
if(call_detail.innerHTML != "")
{
  prompt5 += "... and notes from a call with the candidate: " + document.getElementById("callNotes_resumAI").value;
}


tokens = prompt5.split(" ");

// Check if the number of tokens exceeds the maximum allowed
if (tokens.length > maxContextLength) {
// Truncate the tokens array to the maximum allowed length
tokens = tokens.slice(0, maxContextLength);

// Join the truncated tokens back into a string
prompt5 = tokens.join(" ");
}



  
      sendRequest(prompt, document.getElementById("cvFeedback_output"));
      
      sendRequest(prompt2, document.getElementById("suggestedRoles"));
      sendRequest(prompt3, document.getElementById("suggestedCompanies"));
      
      sendRequest(prompt4, document.getElementById("boolean1_resumAI"));
      
      sendRequest(prompt6, document.getElementById("boolean2_resumAI"));
      sendRequest(prompt5, document.getElementById("email_resumAI_output"));

    
 
  }









  
  

function sendRequest(prompt, outputElement)
{

  makeRequest(prompt)
  .then(response => {
    // Handle the model's response
    console.log('Model response:', response);
    // Do something with the response
    let responseFixed = response.replace(/\n/g, '<br/>');
    outputElement.innerHTML = responseFixed;

    document.getElementById("startAI_resumAI").innerHTML = "Start AI";
  })
  .catch(error => {
    console.error('Error:', error);
    
  document.getElementById("startAI_resumAI").innerHTML = "Start AI";
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
        console.log('Text copied to clipboard');
      })
      .catch(err => {
        console.error('Could not copy text: ', err);
      });
  });
}























