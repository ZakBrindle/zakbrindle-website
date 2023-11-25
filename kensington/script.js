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
  




  function toggleInteractiveTab() {
    var tab = document.getElementById('interactiveTab');
    
    var tab = document.getElementById('interactiveTab');
    var bookMeetingButton = document.getElementById('bookMeetingButton');
    var eventsPageButton = document.getElementById('eventsPageButton'); // Get the new button
  

    var icon = document.querySelector('.event-icon'); // Get the icon
  
    if (tab.classList.contains('expanded-tab')) {
      // Collapse the tab
      tab.classList.remove('expanded-tab');
      bookMeetingButton.classList.remove('expanded-button');
      eventsPageButton.classList.remove('expanded-events-page-button'); // Hide the new button
      icon.style.bottom = '50px'; // Reset icon position
    } else {
      // Expand the tab
      tab.classList.add('expanded-tab');
      bookMeetingButton.classList.add('expanded-button');
      eventsPageButton.classList.add('expanded-events-page-button'); // Show the new button
      icon.style.bottom = '140px'; // Adjust for expanded tab
    }
  }
// Optional: Function to handle booking a meeting
function bookMeeting() {
  // Logic for booking a meeting goes here
  alert('Booking a meeting...');
}
