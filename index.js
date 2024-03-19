document.addEventListener('DOMContentLoaded', function() {
    const discordIcon = document.getElementById('discordIcon');
    const popup = document.getElementById('popup');
    let timeoutId;

    discordIcon.addEventListener('click', function() {
        popup.style.opacity = '0'; 
        popup.style.display = 'block';

        setTimeout(function() {
            popup.style.transition = 'opacity 1s ease'; 
            popup.style.opacity = '1'; 
        }, 100);

        timeoutId = setTimeout(function() {
            popup.style.transition = 'opacity 1s ease'; 
            popup.style.opacity = '0'; 
            
            setTimeout(function() {
                popup.style.display = 'none';
            }, 1000); 
        }, 10000); 
    });

    popup.addEventListener('click', function(event) {
        clearTimeout(timeoutId);
        event.stopPropagation(); 
    });
});
