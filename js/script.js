const welcome = () => {
        console.log("Cześć! Witaj na mojej stronie! Poznaj moją twórczość!");
}
{               
        const newBackgroundChange = () => {
                const body = document.querySelector(".body");
                body.classList.toggle("newBackgroundChange");
            };
        
        const hideHeader = () => {
                const header = document.querySelector(".js-header");
                const hideHeaderButton = document.querySelector(".js-hideHeaderButton");
        
                header.classList.toggle(hideHeader);
                if (header.classList.contains(hideHeader)) {
                        hideHeaderButton.innerText = "Ukryj nagłówek";
        
                } else { hideHeaderButton.innerText = "Pokaż nagłówek"; }
        };
            
            
           const init = () => {
                   const changeBackgroundButton = document.querySelector(".js-changeBackgroundButton");
                   const hideHeaderButton = document.querySelector(".js-hideHeaderButton");
        
                changeBackgroundButton.addEventListener("click", newBackgroundChange);
                hideHeaderButton.addEventListener("click", hideHeaderButton);
           };
 
init();
(welcome);
}

