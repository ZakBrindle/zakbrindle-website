document.getElementById('prompt').addEventListener('keydown', function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("quickReadbtn").hidden = true;
        document.getElementById("prompt").readOnly = true;
        openai_test();
    }
});

document.getElementById('quickReadbtn').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById("quickReadbtn").hidden = true;
    document.getElementById("prompt").readOnly = true;
    openai_test();
});


       let open_ai_response;

      
async function openai_test() {
   
  var url = "https://api.openai.com/v1/engines/text-davinci-002/completions";

  var xhr = new XMLHttpRequest();
  xhr.open("POST", url);

  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.setRequestHeader("Authorization", "Bearer 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");

  xhr.onreadystatechange = function () {
     if (xhr.readyState === 4) {
        console.log(xhr.status);
        console.log(xhr.responseText);
        open_ai_response = xhr.responseText;
        console.log(open_ai_response);
     }};


     var numberOfSentances = "two";
     
     var checkbox = document.getElementById("checkbox_2");
if(checkbox.checked) {
  console.log("checkbox_2 is checked.");
  numberOfSentances = "two";
} else {
  console.log("checkbox_2 is not checked.");
  numberOfSentances = "four";
}


     var promptValue = "summarize this article into " + numberOfSentances + " sentances: " + document.getElementById("prompt").value;
    var data = {
    "prompt": promptValue,
    "temperature": 0.7,
    "max_tokens": 256,
    "top_p": 1,
    "frequency_penalty": 0.75,
    "presence_penalty": 0
    };
    data = JSON.stringify(data);
	
	
    console.log("REQUEST: " + promptValue);
    xhr.send(data);

  xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    const response = JSON.parse(xhr.responseText);
    const result = response.choices[0].text;
    //document.getElementById("result-element").innerHTML = result;
    document.getElementById("result-element").style.fontSize = "24px"
    document.getElementById("quickReadbtn").hidden = false;

    document.getElementById("prompt").readOnly = false;
    console.log("RESULT: " + result);
	
	document.getElementById("prompt").value = result;
	
  }



}

}
