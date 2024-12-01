// Wait for the elements to load
setTimeout(() => {
  const conditionsInput = document.getElementById("conditions");
  const actionsInput = document.getElementById("actions");
  const convertButton = document.getElementById("convertButton");
  const outputDiv = document.getElementById("output");
  const outputTextArea = document.getElementById("output-text");

  outputDiv.addEventListener('contextmenu', (event) => {
    event.preventDefault(); // Prevent default right-click menu

    outputDiv.style.display = "none";
    outputTextArea.style.display = "block";

    // Populate the textarea with the content of the output div
    outputTextArea.value = outputDiv.textContent;
  });



  outputDiv.addEventListener('click', () => {
    navigator.clipboard.writeText(outputDiv.textContent)
      .then(() => {
        createBanner("Copied to clipboard! 😎", "safe");
      })
      .catch(err => {
        outputDiv.innerHTML = "Failed to copy: " + err;
      });
  });


  convertButton.addEventListener("click", () => {
    outputDiv.style.display = "block";
    outputTextArea.style.display = "none";

    const conditionsJSON = conditionsInput.value;
    const actionsJSON = actionsInput.value;

    try {
      const conditions = JSON.parse(conditionsJSON);
      const actions = JSON.parse(actionsJSON);

      const englishTranslation = translateToEnglish(conditions, actions);
      outputDiv.innerHTML = englishTranslation;
      const plainTextTranslation = englishTranslation.replace(/<br>/g, " ");


      // Populate the textarea with the plain text
      outputTextArea.value = plainTextTranslation;
      if (containsUndefined(plainTextTranslation)) {
        createBanner("Rule translated most of the fields to english! 😊", "warning");
      }
      else {
        createBanner("Rule translated to english! 😎", "safe");
      }
    } catch (error) {
      if (actionsInput.textContent === "" || conditionsInput.textContent === "") {
        createBanner("Oh no! 😲 You're missing something", "danger");
      }
      else {
        createBanner("Oh no! 😲", "danger");
      }
      outputDiv.innerHTML = "Invalid JSON input. Please check your input and try again.";
    }
  });


  function containsUndefined(text) {
    return text.includes("undefined");
  }

  // Example usage with your outputTextArea:
  let result = containsUndefined(outputTextArea.value);
  if (result) {
    // Do something if "undefined" is found
    console.log("The text contains 'undefined'.");
  } else {
    // Do something else if "undefined" is not found
    console.log("The text does not contain 'undefined'.");
  }



  const conditionsTextArea = document.getElementById("conditions");
  const actionsTextArea = document.getElementById("actions");
  const grabRulesButton = document.getElementById("grabRulesButton");


  grabRulesButton.addEventListener('click', () => {
    outputDiv.innerHTML = "Grabbing the rules";

    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(
        tabs[0].id,
        { action: "grabRules" },
        (response) => {
          if (response) { // Check if a response was received
            conditionsTextArea.value = response.conditions;
            actionsTextArea.value = response.actions;
            outputDiv.innerHTML = "Rules grabbed!"; // Optional success message
          } else {
            outputDiv.innerHTML = "Error: Could not grab rules."; // Error message
          }
        }
      );
    });
  });





  function translateToEnglish(conditions, actions) {
    let result = "If ";

    conditions.forEach((condition, index) => {
      if (index > 0) {
        result += condition.condition === 'or' ? ' or ' : ' and ';
      }

      switch (condition.condition) {
        case "is_equal_to":
          result += `<span class="field-name">${condition.field}</span> is equal to <span class="field-name">${condition.value}</span>`;
          break;
        case "is_not_equal_to":
          result += `<span class="field-name">${condition.field}</span> is not equal to <span class="field-name">${condition.value}</span>`;
          break;
        case "is_greater_than":
          result += `<span class="field-name">${condition.field}</span> is greater than <span class="field-name">${condition.value}</span>`;
          break;
        case "is_greater_than_or_equal_to":
          result += `<span class="field-name">${condition.field}</span> is greater than or equal to <span class="field-name">${condition.value}</span>`;
          break;
        case "is_less_than":
          result += `<span class="field-name">${condition.field}</span> is less than <span class="field-name">${condition.value}</span>`;
          break;
        case "is_less_than_or_equal_to":
          result += `<span class="field-name">${condition.field}</span> is less than or equal to <span class="field-name">${condition.value}</span>`;
          break;
        case "is_in_array":
          if (condition.value_field) {
            const arrayValues = condition.array.join('</span> or <span class="field-name">'); 
            result += `<span class="field-name">${condition.value_field}</span> is <span class="field-name">${arrayValues}</span> `;           
          } else {
            
            result += `<span class="field-name">${condition.field}</span> is <span class="field-name">${arrayValues}</span> `;
          }
          break;
        case "is_not_in_array":
          if (condition.value_field) {
            const arrayValues = condition.array.join('</span> or <span class="field-name">'); 
            result += `<span class="field-name">${condition.value_field}</span> is not <span class="field-name">${arrayValues}</span> `;
          } else {
            result += `<span class="field-name">${condition.field}</span> is not <span class="field-name">${arrayValues}</span> `;
          }
          break;
        case "is_not_zero":
          result += `<span class="field-name">${condition.field}</span> is not zero`;
          break;
        case "is_zero":
          result += `<span class="field-name">${condition.field}</span> is zero`;
          break;
        case "contains_the_text":
          result += `<span class="field-name">${condition.field}</span> contains the text <span class="field-name">"${condition.string || condition.value}"</span>`;
          break;
        case "excludes_the_text":
          // Use condition.string if it exists, otherwise fall back to condition.value
          let excludedText = condition.string ? condition.string : condition.value;
          result += `<span class="field-name">${condition.field}</span> excludes the text "<span class="field-name">${excludedText}</span>"`;
          break;
        case "is_data_type":
          result += `<span class="field-name">${condition.field}</span> is of data type <span class="field-name">${condition.value}</span>`;
          break;
        case "vincere/process_splits":
          result += "split the revenue according to the splits defined on the placement.";
          break;
        case "is_not_data_type":
          result += `<span class="field-name">${condition.field}</span> is not of data type <span class="field-name">${condition.value}</span>`;
          break;
        // Add more condition translations as needed
        default:
          result += `<span class="field-name">${condition.field}</span> ${condition.condition} <span class="field-name">${condition.value}</span>`;
      }
    });

    result += ", then <br><br>";

    actions.forEach((action) => {
      switch (action.function) {
        case "set_n":
          let target = "actioning user";
          if (action.user_id_field) {
            target = action.user_id_field;
          }
          let action_val = action.value || action.field || action.count;
          // Include datetime_field in the output if it exists
          if (action.datetime_field) {
            result += `add <span class="field-name">${action_val}</span> to <span class="field-name">${target}'s</span> score for this metric on <span class="field-name">${action.datetime_field}</span>.`;
          } else {
            result += `add <span class="field-name">${action_val}</span> to <span class="field-name">${target}'s</span> score for this metric.`;
          }
          break;
        case "owner.id":
          result += `apply the fee to the owner.`;
          break;
        case "set_split_value":
          result += `split <span class="field-name">${action.value || action.field || action.count}</span> according to the split defined in <span class="field-name">${action.splits_array_field}</span>.`;
          break;
        case "set_rolling_value":
          result += `add <span class="field-name">${action.value || action.field || action.count}</span> to the user's rolling score for this metric.`;
          break;
        case "vincere/process_splits":
          let value = action.value || action.field || action.count || "the placement fee";
          result += `split <span class="field-name">${value}</span> according to the splits defined on the placement, recording the data against the users in the splits on <span class="field-name">${action.datetime_field}</span>.`;
          break;
        case "set_split_rolling_margin":
          result += `calculate the margin between the bill rate <span class="field-name">(${action.bill_rate_field})</span> and pay rate <span class="field-name">(${action.pay_rate_field})</span>, then split this margin according to the splits defined in <span class="field-name">${action.splits_array_field}</span>. This will be calculated daily between <span class="field-name">${action.datetime_field}</span> and <span class="field-name">${action.end_datetime_field}</span> and recorded against the users in the splits.`;
          break;
        case "salesforce/oho/process_splits":
          result += `,<br> split <span class="field-name">${action.field}</span> as follows: `;
          action.splits.forEach((split, index) => {
            result += `<br>award <span class="field-name">${split.multiplier_field}</span> to <span class="field-name">${split.user_id_field}</span>`;
            if (index < action.splits.length - 1) {
              result += ", ";
            }
          });
          result += ".";
          break;
        // Add more action translations as needed
        default:
          if (action.value || action.field || action.count) {
            result += `<span class="field-name">${action.function}</span> with value <span class="field-name">${action.value || action.field || action.count}</span>`;

          }
          else {
            result += `<span class="field-name">${action.function},<br></span>`;
          }
      }
    });



    return result; // Return the color-coded result
  }

}, 100); // Adjust the delay if needed


function createBanner(bannerText, bannerType) {

  var bg_color = "#FFF9F1"; //default
  var text_color = "#6E4105";
  if (bannerType === "danger") {
    bg_color = "#a53232";
    text_color = "white";
  }
  else if (bannerType === "safe") {
    bg_color = "#FFF9F1";
  }
  else if (bannerType === "warning") {
    bg_color = "#ff944d";
  }

  // Create the banner element
  const banner = document.createElement('div');
  banner.style.cssText = `
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   background-color: ` + bg_color + `; 
   color: ` + text_color + `;
   font-size: 18px;
   text-align: center;
   padding: 5px 0;
   z-index: 100; /* Ensure it's on top */
 `;
  banner.textContent = bannerText;

  // Add the banner to the page
  document.body.appendChild(banner);

  // Remove the banner after 3.2 seconds
  setTimeout(() => {
    document.body.removeChild(banner);
  }, 3200);
}


// TABS
const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Remove active class from all tabs and tab contents
    tabs.forEach(t => t.classList.remove('active'));
    tabContents.forEach(tc => tc.classList.remove('active'));

    // Add active class to the clicked tab and corresponding content
    tab.classList.add('active');
    const tabId = tab.dataset.tab;
    document.getElementById(tabId).classList.add('active');
  });
});




// QUICK REPLIES

const quickReplyButtons = document.querySelectorAll('.quick-reply-buttons button');

quickReplyButtons.forEach(button => {
  button.addEventListener('click', () => {
    const replyText = button.dataset.reply;
    navigator.clipboard.writeText(replyText)
      .then(() => {
        const originalText = button.textContent;
        button.textContent = "Copied to clipboard!";
        setTimeout(() => {
          button.textContent = originalText;
        }, 1000); // Change back after 1 second
      })
      .catch(err => {
        outputDiv.innerHTML = "Failed to copy: " + err;
      });
  });
});

// CONDITIONS 

const conditionButtons = document.querySelectorAll('.condition-buttons button');

conditionButtons.forEach(button => {
  button.addEventListener('click', () => {
    const conditionText = button.dataset.condition;
    navigator.clipboard.writeText(conditionText)
      .then(() => {
        const originalText = button.textContent;
        button.textContent = "Copied to clipboard!";
        setTimeout(() => {
          button.textContent = originalText;
        }, 1000); // Change back after 1 second
      })
      .catch(err => {
        outputDiv.innerHTML = "Failed to copy: " + err;
      });
  });
});



document.addEventListener('DOMContentLoaded', () => {

  // RESET BOXES // LOGO CLICK // CLICK IMAGE
  const logoImage = document.getElementById('oneUpLogo'); // Select the logo image

  logoImage.addEventListener('click', () => {
    console.log("CLEARNING CONDITION AND ACTION");
    document.getElementById("conditions").value = ""; // Clear conditions textarea
    document.getElementById("actions").value = ""; // Clear actions textarea
  });






  // GET METRIC NAME
  const metricNameHeader = document.getElementById('metricName');

  // Function to get the metric name from the page
  function getMetricName() {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(
        tabs[0].id,
        { action: "getMetricName" }, // Send a message to request the metric name
        (response) => {
          if (response) {
            metricNameHeader.textContent = response.metricName;
          } else {
            console.error("Failed to get metric name.");
          }
        }
      );
    });
  }

  // Call the function to get and set the metric name
  setTimeout(getMetricName, 500); // Wait for 500 milliseconds

});


chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "openPopup") {
    // Create a new window with the popup HTML
    chrome.windows.create({
      url: "popup.html",
      type: "popup", // Specify the window type as 'popup'
      width: 800,    // Set the desired width
      height: 2000   // Set the desired height
    });
  }
});
