
	var img = document.getElementById("logo");
	img.style.width = "10%";

document.getElementById("calculateCostBtn").addEventListener("click", function() {
  calculateCost();
});


var form = document.querySelector("form");

// Add event listener for submit event
form.addEventListener("submit", function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  calculateCost();
});

       function calculateCost() {
      const annualSalary = document.querySelector("#annual-salary").value;
      const lowCost = new Intl.NumberFormat().format((annualSalary * 0.3).toFixed(2));
      const highCost = new Intl.NumberFormat().format((annualSalary * 0.5).toFixed(2));
      const currency = document.querySelector("#currency").value;
      let symbol;
      switch (currency) {
        case "gbp":
          symbol = "GBP";
          break;
        case "eur":
          symbol = "EURO";
          break;
        case "usd":
          symbol = "USD";
          break;
      }
	  
	  var currentCurrency = document.querySelector("#currency").value;
	  var currValue = "£";
	  console.log(currentCurrency);
	  var currencyAfter = "";
	  if(currentCurrency === "gbp")
	  {
		  currValue = "£";
	  }
	  else if (currentCurrency === "eur")
	  {
		  currValue = "";
		  currencyAfter = " EURO";
	  }
	    else if (currentCurrency === "usd")
	  {
		  currValue = ".$";
	  }
	  currentCurrency = currValue.substring(1);
	 
      document.querySelector("#result").innerHTML = `The cost of a bad hire ranges from ` + currentCurrency + `${lowCost}` + currencyAfter + ` to ${currentCurrency}${highCost}` + currencyAfter + `.`;
    }