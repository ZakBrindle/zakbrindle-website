document.getElementById("hashTagBtn1").addEventListener("click", CopyHash1);


function CopyHash1(){
 var text = "#Additivemanufacturing #3dprinting #3dprint #additivemfg #3dprint #3dprinted #metal3dprinting #3dprintingnews #3ddesign #3dsoftware #3dtech #3dprintinglife #3ddruck #cad #3dmodelling #filament #prototype #lasercut #3ddesign #3dmodel #3dprintinglife #technology #innovation";

navigator.clipboard.writeText(text).then(function() {
  console.log('Async: Copying to clipboard was successful!');
}, function(err) {
  console.error('Async: Could not copy text: ', err);
});
}

document.getElementById("hashTagBtn2").addEventListener("click", CopyHash2);
function CopyHash2(){
 var text = "#3dprintingnews #3dprinting #3dprint #additivemanufacturing #industrynews #additivemfg #3dnews";

navigator.clipboard.writeText(text).then(function() {
  console.log('Async: Copying to clipboard was successful!');
}, function(err) {
  console.error('Async: Could not copy text: ', err);
});


  var elem = document.getElementById("hashTagBtn1");
   elem.value = "Copied!";

}

document.getElementById("hashTagBtn3").addEventListener("click", CopyHash3);
function CopyHash3(){
 var text = "#employerrecognition #employeeengangement #employeeofthemonth #hardworkpaysoff #winner #incentive #employeeappreciation";

navigator.clipboard.writeText(text).then(function() {
  console.log('Async: Copying to clipboard was successful!');
}, function(err) {
  console.error('Async: Could not copy text: ', err);
});
}

document.getElementById("hashTagBtn4").addEventListener("click", CopyHash4);
function CopyHash4(){
 var text = "#testimonialtuesday #testimonial #happycandidate #happyclient #hiring #getintouch #job #additivemanufacturing #additivemfg #3dprinting #positivefeedback #3dprint #quality #commitment #communication #knowledge";

navigator.clipboard.writeText(text).then(function() {
  console.log('Async: Copying to clipboard was successful!');
}, function(err) {
  console.error('Async: Could not copy text: ', err);
});
}