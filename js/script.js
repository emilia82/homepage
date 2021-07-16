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

                header.classList.toggle("hidenHeader");
                if (header.classList.contains("hidenHeader")) {
                        hideHeaderButton.innerText = "Pokaż nagłówek";

                } else { hideHeaderButton.innerText = "Ukryj nagłówek"; }
        };


        const init = () => {
                const changeBackgroundButton = document.querySelector(".js-changeBackgroundButton");
                const hideHeaderButton = document.querySelector(".js-hideHeaderButton");

                changeBackgroundButton.addEventListener("click", newBackgroundChange);
                hideHeaderButton.addEventListener("click", hideHeader);
        };

        let myImage = document.querySelector("img");
        myImage.onclick = function () {
                let mySrc = myImage.getAttribute("src");
                if (mySrc === "image/EmiliaWarakomska.jpg") {
                        myImage.setAttribute("src", "image/Emilia_Warakomska.jpg");
                } else {
                        myImage.setAttribute("src", "image/Emilia_Warakomska.jpg");
                }
        }

        init();
        (welcome);




}

