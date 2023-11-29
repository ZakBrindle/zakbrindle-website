// Function to toggle images on hover
function toggleImages(showId, hideId) {
  document.getElementById(showId).style.display = 'block';
  document.getElementById(hideId).style.display = 'none';
}

// Function to toggle the interactive tab and related elements
function toggleInteractiveTab() {
  console.log('toggleInteractiveTab called'); // Debugging line to confirm the function is called
  const tab = document.getElementById('interactiveTab');
  const bookMeetingButton = document.getElementById('bookMeetingButton');
  const eventsPageButton = document.getElementById('eventsPageButton');
  const icon = document.querySelector('.event-icon');

  if (!tab || !bookMeetingButton || !eventsPageButton || !icon) {
    console.error('One or more elements are not found.'); // Debugging line to check if any elements are not found
    return; // Exit the function if elements are not found
  }

  if (tab.classList.contains('expanded-tab')) {
    tab.classList.remove('expanded-tab');
    bookMeetingButton.style.display = 'none';
    eventsPageButton.style.display = 'none';
    icon.style.bottom = '50px';
  } else {
    tab.classList.add('expanded-tab');
    bookMeetingButton.style.display = 'block';
    eventsPageButton.style.display = 'block';
    icon.style.bottom = '130px'; // Adjust if necessary to match the expanded tab height
  }
}

// Optional function to handle booking a meeting
function bookMeeting() {
  alert('Booking a meeting...');
}

// Function to show and hide dropdown menu with delay
function showDropdown() {
  dropdownMenu.style.display = 'block';
  clearTimeout(dropdownMenu.timer);
}

function hideDropdown() {
  dropdownMenu.timer = setTimeout(() => {
    dropdownMenu.style.display = 'none';
  }, 300);
}

// Function to restart client logos animation
function repeatAnimation(logoContainer) {
  logoContainer.style.animation = 'none';
  setTimeout(() => {
    logoContainer.style.animation = '';
  }, 10);
}

// Event listeners for when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Event listeners for icon hover toggle
  document.querySelector('.upload-icon').addEventListener('mouseover', () => toggleImages('upload2', 'upload1'));
  document.querySelector('.upload-icon').addEventListener('mouseout', () => toggleImages('upload1', 'upload2'));
  document.querySelector('.search-icon').addEventListener('mouseover', () => toggleImages('search2', 'search1'));
  document.querySelector('.search-icon').addEventListener('mouseout', () => toggleImages('search1', 'search2'));

  // Event listener for interactive tab
  const interactiveTab = document.getElementById('interactiveTab');
  if (interactiveTab) {
    interactiveTab.addEventListener('click', toggleInteractiveTab);
  } else {
    console.error('Interactive tab not found.');
  }
  
  // Attach the bookMeeting function to the button with id "bookMeetingButton"
  const bookMeetingButton = document.getElementById('bookMeetingButton');
  if (bookMeetingButton) {
    bookMeetingButton.addEventListener('click', bookMeeting);
  } else {
    console.error('Book meeting button not found.');
  }

  // Dropdown menu interaction
  const aboutUsButton = document.querySelector('nav ul li a[href="#"]');
  const dropdownMenu = document.querySelector('.dropdown-menu');
  if (aboutUsButton && dropdownMenu) {
    aboutUsButton.addEventListener('mouseenter', showDropdown);
    aboutUsButton.addEventListener('mouseleave', hideDropdown);
    dropdownMenu.addEventListener('mouseenter', showDropdown);
    dropdownMenu.addEventListener('mouseleave', hideDropdown);
  } else {
    console.error('Dropdown elements not found.'); // Debugging line to check if dropdown elements are found
  }

  // Client logos animation
  const logoContainer = document.querySelector('.client-logo-container');
  if (logoContainer) {
    repeatAnimation(logoContainer);
    document.querySelectorAll('.logo-item').forEach(item => {
      item.addEventListener('animationend', () => repeatAnimation(logoContainer));
    });
  } else {
    console.error('Logo container not found.'); // Debugging line to check if logo container is found
  }

  // Drag functionality for job tiles
  const jobTilesWrapper = document.querySelector('.job-tiles-wrapper');
  if (jobTilesWrapper) {
    let isDown = false;
    let startX;
    let scrollLeft;

    jobTilesWrapper.addEventListener('mousedown', (e) => {
      isDown = true;
      jobTilesWrapper.style.animationPlayState = 'paused';
      startX = e.pageX;
      scrollLeft = jobTilesWrapper.scrollLeft;
      e.preventDefault();
    });

    window.addEventListener('mouseup', () => {
      if (isDown) {
        isDown = false;
        jobTilesWrapper.style.animationPlayState = 'running';
      }
    });

    jobTilesWrapper.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      const x = e.pageX;
      const walk = (x - startX) * 2;
      jobTilesWrapper.scrollLeft = scrollLeft - walk;
    });

    jobTilesWrapper.addEventListener('mouseleave', () => {
      if (isDown) {
        jobTilesWrapper.style.animationPlayState = 'running';
        isDown = false;
      }
    });
  } else {
    console.error('Job tiles wrapper not found.'); // Debugging line to check if job tiles wrapper is found
  }
});




// TESTIMONIALS
let currentTestimonial_value = 1;
const numberOfTesties = 6;

function showTestimonial(testimonialNumber) {
  // Hide all testimonials
  document.querySelectorAll('.testimonial').forEach(t => t.style.display = 'none');
  
  // Show the specified testimonial
  document.getElementById(`testimonial-${testimonialNumber}`).style.display = 'block';
}




function nextQuote() {
  currentTestimonial_value = currentTestimonial_value + 1;
  if(currentTestimonial_value > numberOfTesties)
  {
     currentTestimonial_value=1;
  }
  showTestimonial(currentTestimonial_value);
}

function previousQuote() {
  currentTestimonial_value = currentTestimonial_value - 1;
  if(currentTestimonial_value < 1)
  {
     currentTestimonial_value = numberOfTesties;
  }
  showTestimonial(currentTestimonial_value);
}

// Initialize the first quote
document.addEventListener('DOMContentLoaded', () => {
  showTestimonial(currentTestimonial_value);
});





  // Wait for the DOM to fully load
  document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header'); // Adjust this if your header has a different selector

    window.addEventListener('scroll', () => {
      if (window.scrollY < 800) {
        // User is at the top of the page
        header.style.backgroundColor = 'rgba(3, 3, 3, 0.438)';
      } else {
        // User has scrolled down
        header.style.backgroundColor = 'rgba(3, 3, 3, 0.658)';
      }
    });
  });
