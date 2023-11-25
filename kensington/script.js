// Function to toggle images
function toggleImages(showId, hideId) {
    document.getElementById(showId).style.display = 'block';
    document.getElementById(hideId).style.display = 'none';
  }
  
  // Event listener for the upload icon
  document.querySelector('.upload-icon').addEventListener('mouseover', function() {
    toggleImages('upload2', 'upload1');
  });
  document.querySelector('.upload-icon').addEventListener('mouseout', function() {
    toggleImages('upload1', 'upload2');
  });
  
  // Event listener for the search icon
  document.querySelector('.search-icon').addEventListener('mouseover', function() {
    toggleImages('search2', 'search1');
  });
  document.querySelector('.search-icon').addEventListener('mouseout', function() {
    toggleImages('search1', 'search2');
  });
  