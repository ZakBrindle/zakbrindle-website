document.addEventListener('DOMContentLoaded', function() {
    var paletteButton = document.getElementById('colorPaletteButton');
    var paletteMenu = document.getElementById('colorPaletteMenu');
    var colorSquares = document.querySelectorAll('.color-square');

    paletteButton.addEventListener('click', function(event) {
        event.preventDefault();
        paletteMenu.style.display = paletteMenu.style.display === 'none' ? 'flex' : 'none';
    });


// Copy color code to clipboard
colorSquares.forEach(function(square) {
    square.addEventListener('click', function() {
        var colorCode = this.getAttribute('data-color');
        var paletteDescription = document.getElementById('palette-description-lbl');
        
        // Change text to "Copied to clipboard"
        paletteDescription.textContent = 'Copied to clipboard';

        // Use navigator.clipboard.writeText to copy the color code
        navigator.clipboard.writeText(colorCode).then(function() {
            console.log('Color code copied to clipboard!');
            // After 1.5 seconds, change the text back to "Click to copy"
            setTimeout(function() {
                paletteDescription.textContent = 'Click to copy';
            }, 1500);
        }).catch(function(error) {
            console.error('Could not copy color code', error);
            // If there is an error, revert the text back as well
            paletteDescription.textContent = 'Click to copy';
        });
    });
});

});
