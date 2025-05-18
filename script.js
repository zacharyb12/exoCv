
body = document.querySelector('body');


if(!confirm("Veuillez accepter les cookies pour une meilleure expérience sur notre site."))
    {
        body = document.querySelector('body');

        body.style.opacity = 0.9;
        alert("Veuillez accepter les cookies pour une meilleure expérience sur notre site.");
    }
    else
    {
    body.style.opacity = 1;
    
}