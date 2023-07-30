// Global variables
let recognition;
let transcript = "";
let lastTranscriptTimestamp = 0;
const shortGapThreshold = 1000; // Adjust this value as needed (in milliseconds)



// Get necessary DOM elements
const startBtn = document.getElementById("startListening");
const stopBtn = document.getElementById("stopListening");
const transcriptContainer = document.getElementById("transcriptOutput_liveCall");

// Event listener for start button click
startBtn.addEventListener("click", function() {
  transcript = ""; // Clear the transcript when starting a new conversation
  lastTranscriptTimestamp = new Date().getTime();

  // Request microphone access
  navigator.mediaDevices.getUserMedia({ audio: true })
    .then(function(stream) {
      // Initialize SpeechRecognition
      recognition = new webkitSpeechRecognition(); // for Chrome, use "SpeechRecognition" for modern browsers
      recognition.continuous = true;
      recognition.interimResults = true;

     // Event listener for speech recognition results
recognition.onresult = function(event) {
  let interimTranscript = "";
  for (let i = event.resultIndex; i < event.results.length; i++) {
    const result = event.results[i];
    const transcriptChunk = result[0].transcript;

    // Calculate the duration since the last transcript
    const currentTime = new Date().getTime();
    const timeElapsed = currentTime - lastTranscriptTimestamp;
    lastTranscriptTimestamp = currentTime;

    if (result.isFinal) {
      // Check the duration to determine gap size
      if (timeElapsed >= shortGapThreshold) {
        // Add a new line for a bigger gap
        transcript += "\n" + transcriptChunk + " ";
      } else {
        // Add a comma for a short gap with a single space after
        transcript += (transcript.trim() === "" ? "" : ",") + " " + transcriptChunk.trim();
      }
    } else {
      // Append interim transcript
      interimTranscript += transcriptChunk;
    }
  }

  // Update the transcript container with the accumulated transcript
  transcriptContainer.textContent = transcript + interimTranscript;

  // Remove the first 60 words if the transcript exceeds 120 words
  const words = transcript.split(" ");
  if (words.length > 120) {
    const removedWords = words.slice(0, 60).join(" ");
    transcript = words.slice(60).join(" ");
    transcriptContainer.textContent = transcript + interimTranscript;
  }
};


      // Event listener for error handling
      recognition.onerror = function(event) {
        console.error("Speech recognition error occurred:", event.error);
        toggleStartButton(false);
        stopAI();
      };

      // Start recognition
      recognition.start();
      toggleStartButton(true);
      stopAI();

    })
    .catch(function(error) {
      console.error("Error accessing microphone:", error);
      toggleStartButton(false);
      stopAI();
    });
});

// Event listener for stop button click
stopBtn.addEventListener("click", function() {
  recognition.stop();
  toggleStartButton(false);
  stopAI();
});



function toggleStartButton(turnOn) {
  document.getElementById("startListening").hidden = turnOn;
  document.getElementById("stopListening").hidden = !turnOn;
}





// END OF REMOVE TEXT FROM START OF TRANSCRIPT



// Get necessary DOM elements
const startCompanionBtn = document.getElementById("startCompanionAI");
const stopCompanionBtn = document.getElementById("stopCompanionAI");

// Event listener for stop button click
startCompanionBtn.addEventListener("click", function() { 
  startAI();
});


// Event listener for stop button click
stopCompanionBtn.addEventListener("click", function() {
  stopAI();
});


function stopAI()
{
  document.getElementById("startCompanionAI").hidden = false;
  document.getElementById("stopCompanionAI").hidden = true;
  companionON = false;
  document.getElementById("ai_status").innerHTML = "Sleeping";
  console.log("StopAI companionON = " + companionON);
}

var companionON = false;
function startAI()
{
  document.getElementById("startCompanionAI").hidden = true;
  
  document.getElementById("ai_status").innerHTML = "Listening...";
  document.getElementById("stopCompanionAI").hidden = false;
  companionON = true;
  console.log("StartAI companionON = " + companionON);

  AIUpdate(); // start the AI, this will run till you turn companionON to off.
}

function AIUpdate() {
  // create a constant loop for the AI to think
  console.log("Running AI: " + companionON);

  var intervalId;

  function runAILogic() {
    // AI logic goes here
    // This code will run every 10 seconds
    if(companionON)
    {
      companionAIrequest();
    }


  }

  function startCompanionAI() {
    intervalId = setInterval(runAILogic, 40000); // Run AI logic every 40 seconds
  }


    
  

  // Start the AI when companionON is true
  if (companionON) {
    startCompanionAI();
  } else {
    clearInterval(intervalId);
  }
}








// AI REQUEST




  // ASK AI
  
      
      const callCompanion_output = document.getElementById("callCompanion_AIOutput");
      const callTranscription = document.getElementById("transcriptOutput_liveCall");
      const stopAIbutton = document.getElementById("stopCompanionAI");
      const ai_status = document.getElementById("ai_status");


    // Define a counter to generate unique IDs for each response
let responseCounter = 0;





function createResponseElement(response) {
  const responseDiv = document.createElement("div");
  responseDiv.className = "output-field";
  responseDiv.innerHTML = response;

  // Add click listener to toggle max height
  responseDiv.addEventListener('click', function() {
    toggleMaxHeight(this);
  });

  // Add right-click listener to pin/unpin
  responseDiv.addEventListener('contextmenu', function(e) {
    e.preventDefault();  // Prevent the browser's context menu from appearing

    const pinnedContainer = document.getElementById("responseContainer-pinned");
    const transcriptContainer = document.getElementById("transcript-container");

    if (this.parentNode === pinnedContainer) {
      // If it's in the pinned container, move it to the transcript container
      transcriptContainer.appendChild(this);
      // Change background back to normal 
      this.style.backgroundColor = '#f9f9f9';
      // Change border back to normal
      this.style.border = '';
  } else {
      // Otherwise, move it to the pinned container
      pinnedContainer.prepend(this);
      // Change background to light pastel yellow
      this.style.backgroundColor = '#F7F6D5'; 
      // Change border to be slightly bolder
      this.style.border = '2px solid black'; 
  }
  

  

  });

  // Insert the new response element at the top of the container
  const transcriptContainer = document.getElementById("transcript-container");
  transcriptContainer.prepend(responseDiv);

  return responseDiv;
}



function createPrompt()
{
  var dropdownSelect = document.getElementById('dropdownSelect-callType');
  var selectedValue = dropdownSelect.value;
  
  console.log(selectedValue);  // This will log the current selected value
  
  

    if(selectedValue === "candidateCall") {
      return "Write me a bullet point list of questions with each question on a new line that the recruiter could ask their candidate during this call based on this transcription so far: ";
    } else if(selectedValue === "bd_call") {
      return "Write me a bullet point list of business development questions with each question on a new line that the recruiter could ask their contact during this call based on this transcription so far: ";
  
    }else if(selectedValue === "seniorCandidate") {
      return "Write me a bullet point list of questions with each question on a new line that the recruiter could ask their senior candidate during this call including trying to develop business at their current company based on this transcription so far: ";
  
    }


}


function companionAIrequest() {
document.getElementById("callCompanion_AIOutput").hidden = true;

  var originalButtonText_mainSearch = "Listening...";
  ai_status.innerHTML = "Thinking...";

var promptType = createPrompt();

  var prompt =
  promptType + callTranscription.innerHTML;

  console.log(prompt);

  makeRequest(prompt)
  .then(response => {
    console.log('Model response:', response);

    ai_status.innerHTML = originalButtonText_mainSearch;

    let responseFixed = response.replace(/\n/g, '<br/>');
    const responseElement = createResponseElement(responseFixed);

    const responseContainer = document.getElementById("responseContainer");
    responseContainer.prepend(responseElement);

  })
  .catch(error => {
    console.error('Error:', error);

    ai_status.innerHTML = originalButtonText_mainSearch;
    callCompanion_output.innerHTML = "Error: " + error;
  });
}

      
    
    
    
    


  // AI
  // Global variables
  
  
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

// END OF AI REQUEST  