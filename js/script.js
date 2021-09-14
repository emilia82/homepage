const welcome = () => {
        console.log("Cześć! Witaj na mojej stronie! Poznaj moją twórczość!");
}
{
        const toggleBackground = () => {
                const body = document.querySelector(".body");
                body.classList.toggle("toggleBackground");
        };

        const hideHeader = () => {
                const header = document.querySelector(".js-header");
                const hideHeaderButton = document.querySelector(".js-hideHeaderButton");

                header.classList.toggle("hiddenHeader");
                if (header.classList.contains("hiddenHeader")) {
                        hideHeaderButton.innerText = "Pokaż nagłówek";

                } else { hideHeaderButton.innerText = "Ukryj nagłówek"; }
        };

        const init = () => {
                const changeBackgroundButton = document.querySelector(".js-changeBackgroundButton");
                const hideHeaderButton = document.querySelector(".js-hideHeaderButton");

                changeBackgroundButton.addEventListener("click", toggleBackground);
                hideHeaderButton.addEventListener("click", hideHeader);


        };
        init();
        welcome();



        const toggleImage = () => {
                const myImage = document.querySelector("img");
                const mySrc = myImage.getAttribute("src", "image/EmiliaWarakomska.jpg");

                toggleImage.classList.toggle("toggleImage");


                const myImage = myImage.getAttribute("src");
                if (mySrc === "image/EmiliaWarakomska.jpg") {
                        myImage.setAttribute("src", "image/Emilia_Warakomska.jpg");
                } else {
                        myImage.setAttribute("src", "image/Emilia_Warakomska.jpg");
                }
        }

};


        // myImage.onclick = function () {
        //         let mySrc = myImage.getAttribute("src");
        //         if (mySrc === "image/EmiliaWarakomska.jpg") {
        //                 myImage.setAttribute("src", "image/Emilia_Warakomska.jpg");
        //         } else {
        //                 myImage.setAttribute("src", "image/Emilia_Warakomska.jpg");
        //         }