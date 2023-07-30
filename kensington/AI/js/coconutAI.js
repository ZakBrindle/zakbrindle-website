var thinking = false;

document.getElementById("TranscriptInsights_btn").addEventListener('click', function() {  
  hideAllApps();
  document.getElementById("transcribeInsights_app").hidden = false;
  var element = document.getElementById("TranscriptInsights_btn_target");
  element.style.color = "#723ae4";

});

document.getElementById("LiveCallAI_btn").addEventListener('click', function() {  
  hideAllApps();
  document.getElementById("liveCallAI_app").hidden = false;
  var element = document.getElementById("liveCallAI_btn_target");
  element.style.color = "#723ae4";
});

function hideAllApps()
{
var colorOff = "#733ae400";

  document.getElementById("transcribeInsights_app").hidden = true;
  document.getElementById("liveCallAI_app").hidden = true;

  var element = document.getElementById("TranscriptInsights_btn_target");
element.style.color = colorOff;
var element2 = document.getElementById("liveCallAI_btn_target");
element2.style.color = colorOff;

}



function closeTab()
{
  history.back();
}



var requestCounter = 0;
var maxCount = 500;

var overFlow = false;

// Constants
const API_KEY = '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';
const API_ENDPOINT = 'https://api.openai.com/v1/audio/transcriptions';



async function transcribeAudio() {
    if(requestCounter < maxCount)
    {
requestCounter++;
    
    const transcribeButton = document.getElementById('transcribe_button');
    const originalButtonText = transcribeButton.innerText;

    // Disable the button and change its text
    transcribeButton.disabled = true;
    transcribeButton.innerText = 'Transcribing...';
    

    const audioFileInput = document.getElementById('audioFileInput');
    const file = audioFileInput.files[0];
    if (!file) {
        alert('Please select an audio file.');

        // Re-enable the button and restore its original text
        transcribeButton.disabled = false;
        transcribeButton.innerText = originalButtonText;
        return;
    }

    const formData = new FormData();
    formData.append('model', 'whisper-1');
    formData.append('file', file);

    const requestOptions = {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${API_KEY}`,
        },
        body: formData
    };

    try {
        const response = await fetch(API_ENDPOINT, requestOptions);
        if (!response.ok) {
            throw new Error('API request failed');
        }
        const responseJson = await response.json();
        const { text } = responseJson;

        document.getElementById('transcriptOutput').innerHTML = text;
        
        var wordCount = countWords(text);
        if (wordCount > 200) {
          console.log("The value has more than 200 words.");
          overFlow = true;  // show the Click To Show More Text tip
        } else {
          console.log("The value does not have more than 200 words.");
          overFlow = false;
        }

        console.log('Transcript:', text);
        document.getElementById("ai-app").hidden = false;

         document.getElementById("askai-button").hidden = false;
    document.getElementById("aireport-button").hidden = false;

    if(overFlow)
    {
      document.getElementById("seeMoreTip").hidden = false;
    }

        
    } catch (error) {
        console.error('Transcription error:', error);
    }

    // Re-enable the button and restore its original text
    transcribeButton.disabled = false;
    transcribeButton.innerText = originalButtonText;

}
else
{
    location.reload();
}
}






  // AI
  // Global variables
  const API_URL = 'https://api.openai.com/v1/chat/completions';
  
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
   
    document.getElementById("AIOutput").innerHTML = "";
      console.log("Running CoconutMilk AI - Candidate");
      originalButtonText_ai = document.getElementById("askai-button").innerHTML;

      var promptStart = "";
      
      
      var dropdownSelect = document.getElementById('dropdownSelect-ai');
      var selectedValue = dropdownSelect.options[dropdownSelect.selectedIndex].value;
      
      console.log(selectedValue); // This will log the selected value to the console
      

        if(selectedValue === "summary") {
  
            promptStart = 'I am the recruiter working for Kensington Additive. Summerise my call. Here is a transcript: ';
          }
          else if(selectedValue === "writeup_candidate") {
  
        promptStart = 'I am the recruiter working at Kesnington Additive, I just spoke to a candidate who is a good fit for the role my client is looking for. Write a short email to the hiring manager, not too formal, selling my candidate. Here is a transcript of the call: ';
      } 
      else if(selectedValue === "summaryBD") {
  
        promptStart = 'I am the recruiter at Kensington Additive speaking with a client. From a business development perspective, pull the key information that the recruiter pulled from this call. Then after summarising the key points, write a to do list for the recruiter. Here is a transcript of the call: ';
      } 
      else if(selectedValue === "listCompanies_candidate") {
  
        promptStart = 'I am the recruiter speaking with a candidate. Using notes from the call, suggest and list job titles that candidate would be a good fit for. Then also list 10 company names they could be a good fit for. Here is a transcript of the call: ';
      }
      else if(selectedValue === "feedback") {
  
        promptStart = 'I am the recruiter working for Kensington Additive. Using the call transcript, suggest feedback on how I an improve my service. List areas where I have done well, and areas where I can improve. Here is a transcript of the call: ';
      }   


      var prompt = promptStart + ": " + document.getElementById("transcriptOutput").innerHTML;  

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

      
      console.log(prompt);
  
      sendRequest(prompt, document.getElementById("askai-button"), document.getElementById("AIOutput"));
      
      document.getElementById("askai-button").innerHTML = "Ask AI";
    
    
  }
  
  

function sendRequest(prompt, buttonClicked, outputElement)
{
if(!thinking)
{
  thinking = true;

  makeRequest(prompt)
  .then(response => {
    // Handle the model's response
    console.log('Model response:', response);
    // Do something with the response

    buttonClicked.innerHTML = originalButtonText_ai;
    buttonClicked.enabled = true;

    let responseFixed = response.replace(/\n/g, '<br/>');
    outputElement.innerHTML = responseFixed;
    thinking = false;

  })
  .catch(error => {
    console.error('Error:', error);
    // Handle error
    buttonClicked.innerHTML = originalButtonText_ai;
    buttonClicked.enabled = true;
    thinking = false;

  });

}
}




  // ASK AI
var response_holder = "";
var prompt_holder = "";

  document.addEventListener("DOMContentLoaded", function() {
    const searchButton = document.getElementById("searchButton");
    const searchResultsContent = document.getElementById("searchResultsContent");
    const searchInput = document.getElementById("searchFiles_input");
  
    function displaySearchInput_main() {
      let input = document.getElementById("searchFiles_input").value;
      searchResultsContent.innerHTML = "";
  
 // Create a new label element and assign the value of prompt_holder to it
 let promptLabel = document.createElement("label");
 promptLabel.textContent = prompt_holder;
 searchResultsContent.appendChild(promptLabel); // append the label to searchResultsContent


      // Create a new div element to show the searched term
      let searchedTerm = document.createElement("div");
      searchedTerm.classList.add("result-item");
      searchedTerm.innerHTML = response_holder;
      searchedTerm.style.cursor = "auto"; // reset the cursor to its default value
      searchResultsContent.appendChild(searchedTerm); // append the searched term directly to searchResultsContent
  
      

      openSearchResultsPopup();
    }
  
    function openSearchResultsPopup() {
      let searchResultsPopup = document.getElementById("searchResultsPopup");
      searchResultsPopup.style.display = "block";
    }
  
    function closeSearchResultsPopup() {
      let searchResultsPopup = document.getElementById("searchResultsPopup");
      searchResultsPopup.style.display = "none";
    }
  
    document.getElementById("searchButton").addEventListener("click", function() {
      var originalButtonText_mainSearch = document.getElementById("searchButton").innerHTML;
      document.getElementById("searchButton").innerHTML = "Thinking...";
      document.getElementById("searchButton").innerHTML.enabled = false;

      prompt = document.getElementById("searchFiles_input").value;




      console.log(prompt);

      if(prompt === "")
      {
        prompt = "Can you list 20 metal additive OEM's in the US?";
      }
      prompt_holder = prompt;
  
      makeRequest(prompt)
      .then(response => {
        // Handle the model's response
        console.log('Model response:', response);
        // Do something with the response
  
        document.getElementById("searchButton").innerHTML = originalButtonText_mainSearch;
        document.getElementById("searchButton").enabled = true;

        let responseFixed = response.replace(/\n/g, '<br/>');
        response_holder = responseFixed;
        
        displaySearchInput_main();
  
      })
      .catch(error => {
        console.error('Error:', error);
        // Handle error
        searchButton.innerHTML = originalButtonText_mainSearch;
        searchButton.enabled = true;

      });

    

    });
  
    searchInput.addEventListener("keydown", function(event) {
      if (event.key === "Enter") {
        event.preventDefault(); // Prevent page refresh
        //displaySearchInput_main();
      }
    });
  
    window.addEventListener("click", function(event) {
      let searchResultsPopup = document.getElementById("searchResultsPopup");
      if (event.target === searchResultsPopup) {
        closeSearchResultsPopup();
      }
    });
  });
  









  // OPEN AND CLOSE RESULT BOXES (HIDE / SHOW TEXT) SHOW MORE
var boxes = document.getElementsByClassName('output-field');
  var maxHeight = '290px';
  var expandedHeight = '10000px';
  var isExpanded = false;

 function toggleMaxHeight(box) {
  if (isExpanded) {
    box.style.maxHeight = maxHeight;
    if (box.id === "transcriptOutput") {
      if(overFlow)
      {
        document.getElementById("seeMoreTip").hidden = false;
      }
    }
    isExpanded = false;
  } else {
    box.style.maxHeight = expandedHeight;
    if (box.id === "transcriptOutput") {
      document.getElementById("seeMoreTip").hidden = true;
    }
    isExpanded = true;
  }
}

  for (var i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', function() {
      toggleMaxHeight(this);
    });
  }
  // END OF SHOW MORE









  // REPORTING
  function runReport()
  {
    var prompt
    if( document.getElementById('transcriptOutput').innerHTML != "")
    {
      document.getElementById("aireport-button").hidden = true;

      prompt = "I am a recruiter working for Kensington Additive. I want you to write a short summary about my call. 1 paragraph. Transcript: " +  document.getElementById('transcriptOutput').innerHTML;
      sendRequest(prompt, document.getElementById("aireport-button"), document.getElementById("reportOutput_summary"));

      prompt = "I am a recruiter working for Kensington Additive. I want you to list the good points and strengths from this call. From a recruitment perspective, what did I do well? Transcript: " +  document.getElementById('transcriptOutput').innerHTML;
      sendRequest(prompt, document.getElementById("aireport-button"), document.getElementById("reportOutput_strengths"));

      prompt = "I am a recruiter working for Kensington Additive. From a recruitment perspective, what are my areas of develement? How can I have done this call better if I was to do it again? Transcript: " +  document.getElementById('transcriptOutput').innerHTML;
      sendRequest(prompt, document.getElementById("aireport-button"), document.getElementById("reportOutput_aod"));

      prompt = "I am a recruiter working for Kensington Additive. From a recruitment perspective, Write a Call Structure Analysis about my call. Transcript: " +  document.getElementById('transcriptOutput').innerHTML;
      sendRequest(prompt, document.getElementById("aireport-button"), document.getElementById("reportOutput_structure"));

      prompt = "I am a recruiter working for Kensington Additive. From a recruitment perspective, Write a Tone and Language Evaluation from this call. Transcript: " +  document.getElementById('transcriptOutput').innerHTML;
      sendRequest(prompt, document.getElementById("aireport-button"), document.getElementById("reportOutput_tone"));

      prompt = "I am a recruiter working for Kensington Additive. From a recruitment perspective, Write an Evaluation on my Questioning Techniques from this call. Transcript: " +  document.getElementById('transcriptOutput').innerHTML;
      sendRequest(prompt, document.getElementById("aireport-button"), document.getElementById("reportOutput_questioning"));

      prompt = "I am a recruiter working for Kensington Additive. From a recruitment perspective, Write an Active Listening Assessment from this call. Transcript: " +  document.getElementById('transcriptOutput').innerHTML;
      sendRequest(prompt, document.getElementById("aireport-button"), document.getElementById("reportOutput_activeListen"));

      prompt = "I am a recruiter working for Kensington Additive. From a recruitment perspective, Write an short report on Handling Objections and Difficult Situations from from this call. Transcript: " +  document.getElementById('transcriptOutput').innerHTML;
      sendRequest(prompt, document.getElementById("aireport-button"), document.getElementById("reportOutput_objections"));

      prompt = "I am a recruiter working for Kensington Additive. From a recruitment perspective, Write an short report on Closing and Call-to-Action from from this call. Transcript: " +  document.getElementById('transcriptOutput').innerHTML;
      sendRequest(prompt, document.getElementById("aireport-button"), document.getElementById("reportOutput_closing"));

      prompt = "I am a recruiter working for Kensington Additive. From a recruitment perspective, Write an short report on Relationship Building from from this call. Transcript: " +  document.getElementById('transcriptOutput').innerHTML;
      sendRequest(prompt, document.getElementById("aireport-button"), document.getElementById("reportOutput_relationship"));

      prompt = "I am a recruiter working for Kensington Additive. From a recruitment perspective, Write an short report on Problem-Solving and Decision-Making from from this call. Transcript: " +  document.getElementById('transcriptOutput').innerHTML;
      sendRequest(prompt, document.getElementById("aireport-button"), document.getElementById("reportOutput_problemSolving"));

      prompt = "I am a recruiter working for Kensington Additive. From a recruitment perspective, Write an short report on Sales Pitch Effectiveness from from this call. Transcript: " +  document.getElementById('transcriptOutput').innerHTML;
      sendRequest(prompt, document.getElementById("aireport-button"), document.getElementById("reportOutput_salesPitch"));

      prompt = "I am a recruiter working for Kensington Additive. From a recruitment perspective, Write an short report on Time Management and Efficiency from from this call. Transcript: " +  document.getElementById('transcriptOutput').innerHTML;
      sendRequest(prompt, document.getElementById("aireport-button"), document.getElementById("reportOutput_timeManagement"));

      prompt = "I am a recruiter working for Kensington Additive. From a recruitment perspective, Write an short report on Problem Identification and Needs Assessment from from this call. Transcript: " +  document.getElementById('transcriptOutput').innerHTML;
      sendRequest(prompt, document.getElementById("aireport-button"), document.getElementById("reportOutput_problemIdentification"));

      prompt = "I am a recruiter working for Kensington Additive. From a recruitment perspective, Write an short report on Sales Pitch Effectiveness from from this call. Transcript: " +  document.getElementById('transcriptOutput').innerHTML;
      sendRequest(prompt, document.getElementById("aireport-button"), document.getElementById("reportOutput_upSell"));

      prompt = "I am a recruiter working for Kensington Additive. From a recruitment perspective, Write an short report on Cross-Selling and Upselling Opportunities from from this call. Transcript: " +  document.getElementById('transcriptOutput').innerHTML;
      sendRequest(prompt, document.getElementById("aireport-button"), document.getElementById("reportOutput_productKnowledge"));

      prompt = "I am a recruiter working for Kensington Additive. From a recruitment perspective, Write an short report on Follow-Up Action Plan from from this call. Transcript: " +  document.getElementById('transcriptOutput').innerHTML;
      sendRequest(prompt, document.getElementById("aireport-button"), document.getElementById("reportOutput_followUp"));

    }


  }


