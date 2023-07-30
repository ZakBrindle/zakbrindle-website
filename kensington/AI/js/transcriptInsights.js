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
  
  
  