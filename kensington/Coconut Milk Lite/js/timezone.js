document.addEventListener('DOMContentLoaded', function() {
    const tooltip = document.getElementById('tooltip');
    const timeZones = document.querySelectorAll('.time-zone');
  
    timeZones.forEach((zone) => {
      zone.addEventListener('mouseenter', function() {
        tooltip.textContent = this.getAttribute('data-tip');
        tooltip.style.display = 'block';
      });
  
      zone.addEventListener('mouseleave', function() {
        tooltip.style.display = 'none';
      });
    });
  });
  

  