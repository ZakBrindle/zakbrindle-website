document.getElementById("selectCall").addEventListener('click', function() {
    document.getElementById('audioFileInput').click();
  });
  
  document.getElementById('audioFileInput').addEventListener('change', function() {
    if (this.files && this.files.length > 0) {
      document.getElementById('selectedFile').textContent = this.files[0].name;
      document.getElementById('transcribe_button').hidden = false;
      document.getElementById('transcriptOutput').innerHTML = "";
      document.getElementById('AIOutput').innerHTML = "";
       document.getElementById("askai-button").hidden = true;
      document.getElementById("aireport-button").hidden = true;
     
    overFlow = false; // reset
    
      document.getElementById("seeMoreTip").hidden = true;
  
  
    }
  });

  document.getElementById('dropdownSelect-ai').addEventListener('change', function() {
    // Get the selected option
    var selectedOption = this.options[this.selectedIndex];
  
    // Remove the 'selected' attribute from all options
    Array.from(this.options).forEach(option => option.removeAttribute('selected'));
  
    // Set the 'selected' attribute on the selected option
    selectedOption.setAttribute('selected', '');
  
    // Set the value of the dropdown to the value of the selected option
    this.value = selectedOption.value;
  });

  

  function countWords(textVal) {
    // Remove leading and trailing whitespaces
    textVal = textVal.trim();
  
    // Split the value into an array of words using spaces as separators
    var words = textVal.split(' ');
  
    // Filter out any empty words (e.g., consecutive spaces)
    words = words.filter(function(word) {
      return word.length > 0;
    });
  
    // Return the count of words
    return words.length;
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
      
    
    
  }
  