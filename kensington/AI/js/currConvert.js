var myHeaders = new Headers();
myHeaders.append("apikey", "UG3iZOhVeXVnMRVLrOH5Kp4KCB8djyLQ");

var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
};

function setHTMLdata(val) {
    console.log("setting pound element to: " + val);

    const element = document.getElementById("gbpTxt");
    element.value = val.toString();   

}

function clearValues() {
    const element = document.getElementById("gbpTxt");
    element.value = "";
    const element2 = document.getElementById("usdTxt");
    element2.value = "";
    const element3 = document.getElementById("euroTxt");
    element3.value = "";
}

//function calculateTotalSalary(monthlySal, targetCurrency) {
//    const element = document.getElementById("totalSalElement");
//    var totalSal = Number("monthlySal") * 12;
//    element.value = totalSal * 12;
//}

function convertFromGBP() {
    const currentValue = document.getElementById("gbpTxt");
   
    fetch("https://api.apilayer.com/fixer/convert?to=USD&from=GBP&amount=" + currentValue.value, requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result)
            const element = document.getElementById("usdTxt");
            element.value = result.result; 
        })
        .catch(error => console.log('error', error));


    fetch("https://api.apilayer.com/fixer/convert?to=EUR&from=GBP&amount=" + currentValue.value, requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result)
            const element = document.getElementById("euroTxt");
            element.value = result.result; 
        })
        .catch(error => console.log('error', error));

   
    
}

function convertFromUSD() {
    const currentValue = document.getElementById("usdTxt");
    
    console.log("converting: " + currentValue);
    fetch("https://api.apilayer.com/fixer/convert?to=GBP&from=USD&amount=" + currentValue.value, requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result)
            const element = document.getElementById("gbpTxt");
            element.value = result.result; 
        })
        .catch(error => console.log('error', error));


    fetch("https://api.apilayer.com/fixer/convert?to=EUR&from=USD&amount=" + currentValue.value, requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result)
            const element = document.getElementById("euroTxt");
            element.value = result.result;  
        })
        .catch(error => console.log('error', error));
}

function convertFromEURO() {
    const currentValue = document.getElementById("euroTxt");
   
    fetch("https://api.apilayer.com/fixer/convert?to=GBP&from=EUR&amount=" + currentValue.value, requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result)
            const element = document.getElementById("gbpTxt");
            element.value = result.result; 
        })
        .catch(error => console.log('error', error));


    fetch("https://api.apilayer.com/fixer/convert?to=USD&from=EUR&amount=" + currentValue.value, requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result)
            const element = document.getElementById("usdTxt");
            element.value = result.result; 
        })
        .catch(error => console.log('error', error));
}

let btn = document.getElementById("btn_convert");
btn.onclick = function () {
  performConversion();
};

function performConversion() {

    const element = document.getElementById("gbpTxt");
 
    const element2 = document.getElementById("usdTxt");
   
    const element3 = document.getElementById("euroTxt");
 

    if (element.value !== "")
    {
        convertFromGBP();
        console.log("perform conversion from GBP");
    }
    else if (element2.value !== "")
    {
        convertFromUSD();
        console.log("perform conversion from USD");

    }
    else if (element3.value !== "") {
        convertFromEURO();
        console.log("perform conversion from EUR");

    }else {
        console.log("no conversion, enter a value: " + element.value + ", " + element2.value + ", " + element3.value);
    }

   

}