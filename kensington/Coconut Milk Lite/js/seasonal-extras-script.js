document.addEventListener('DOMContentLoaded', function() {
  const ghostImage = document.getElementById('halloweenGhostImage');



  // Generate a random number between 0 and 1
  const randomNumber = Math.random();

  // Set the image source based on the random number
  if (randomNumber < 0.5) {
    ghostImage.src = 'images/ghost1.png';
  } else {
    ghostImage.src = 'images/ghost2.png';
  }

  
  // Unhide the image if needed
  ghostImage.hidden = false;

  ghostImage.addEventListener('click', function() {
    // Generate a random number between 0 and 2
    const randomNumber = Math.floor(Math.random() * 3);

    let url;
    switch (randomNumber) {
      case 0:
        url = 'https://www.zakbrindle.com/images/KA_grave.png';
        break;
      case 1:
        url = 'https://www.zakbrindle.com/images/KA_grave3.png';
        break;
      case 2:
        url = 'https://www.zakbrindle.com/images/KA_grave3.png';
        break;
    }

    // Navigate to the chosen URL
    window.location.href = url;
  });
});
