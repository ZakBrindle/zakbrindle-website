document.addEventListener('DOMContentLoaded', function() {
    var downloadButton = document.getElementById('downloadCV');
    if (downloadButton) {
      downloadButton.addEventListener('click', function() {
        window.open('../Zak_Brindle_CV.pdf', '_blank');
      });
    }
  });
  