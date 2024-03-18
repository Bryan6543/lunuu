
const zoomableImages = document.querySelectorAll(".zoomable-image");
let zoomedIn = false;

zoomableImages.forEach(image => {
    image.addEventListener("click", () => {
        if (!zoomedIn) {
            image.style.position = "fixed";
            image.style.top = "0";
            image.style.left = "0";
            image.style.width = "100vw";
            image.style.height = "100vh";
            image.style.padding = "20px"
            image.style.objectFit = "contain";
            image.style.zIndex - "10000"
            zoomedIn = true;
        } else {
            image.style.position = "";
            image.style.width = "25vw";
            image.style.height = "auto";
            image.style.objectFit = "cover";
            image.style.padding = "5px"
            zoomedIn = false;
        }
    });
});


function website(){

    const constructionPop = document.querySelectorAll(".construction");
    
    constructionPop.forEach(element => {
        element.style.display = "none";
    });
}



// structuredData.js
const structuredData = {
    "@context": "http://schema.org",
    "@type": "Organization",
    "url": "https://lunuu.com.au/",
    "logo": "https://srv1111-files.hstgr.io/e251449669f21493/api/preview/big/public_html/source/favIcon/android-chrome-512x512.png"
  };
  

  let slideIndex = 0;
showSlides();

function changeSlide(n) {
    showSlides(slideIndex += n);
}

function showSlides() {
    let slides = document.getElementsByClassName("slide");

    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex].style.display = "block";
    slideIndex++;
    setTimeout(showSlides, 1000); 
}

showSlides();








// function toggleDisplay(className) {
//     var elements = document.querySelectorAll(className);
//     for (var i = 0; i < elements.length; i++) {
//         if (elements[i].style.display === "flex") {
//             elements[i].style.display = "none"; 
//         } else {
//             elements[i].style.display = "flex"; 
//         }
//     }
// }

//     function sharesandbarsnacks_nav_click() {
//         showContent('sharesandbarsnacks');
//     }

//     function rotti_nav_click() {
//         showContent('rotti');
//     }

//     function rice_nav_click() {
//         showContent('rice');
//     }

//     function salads_nav_click() {
//         showContent('salads');
//     }

//     function desserts_nav_click() {
//         showContent('desserts');
//     }

//     function showContent(category) {
//         // Hide all content divs
//         hideAllContent();

//         // Display the clicked category content
//         document.querySelector(`.${category}_content`).style.display = 'flex';

//         // Update CSS to set display: flex for the clicked category
//         document.querySelector(`.${category}`).style.display = 'flex';
//     }

//     function hideAllContent() {
//         // Hide all content divs
//         var contentDivs = document.querySelectorAll('.first_menu_link_content');
//         contentDivs.forEach(function(div) {
//             div.style.display = 'none';
//         });

//         // Reset display property for all categories
//         var categories = ['sharesandbarsnacks', 'rotti', 'rice', 'salads', 'desserts'];
//         categories.forEach(function(category) {
//             document.querySelector(`.${category}`).style.display = 'none';
//         });
//     }




    



    const constructionPop = document.querySelectorAll(".construction");



    function sharesandbarsnacks_nav_click() {
        showContent('sharesandbarsnacks', 'Shares & Bar Snacks');
    }

    function rotti_nav_click() {
        showContent('rotti', 'Rotti');
    }

    function rice_nav_click() {
        showContent('rice', 'Rice');
    }

    function salads_nav_click() {
        showContent('salads', 'Salads');
    }

    function desserts_nav_click() {
        showContent('desserts', 'Desserts');
    }

    function showContent(category, headerText) {
        // Hide all content divs
        hideAllContent();

        // Display the clicked category content
        document.querySelector(`.${category}_content`).style.display = 'flex';

        // Update CSS to set display: flex for the clicked category
        document.querySelector(`.${category}`).style.display = 'flex';

        // Update the h1 tag text
        // document.querySelector('.menu_top_image_heading h1').textContent = headerText;
    }

    function hideAllContent() {
        // Hide all content divs
        var contentDivs = document.querySelectorAll('.first_menu_link_content');
        contentDivs.forEach(function(div) {
            div.style.display = 'none';
        });

        // Reset display property for all categories
        var categories = ['sharesandbarsnacks', 'rotti', 'rice', 'salads', 'desserts'];
        categories.forEach(function(category) {
            document.querySelector(`.${category}`).style.display = 'none';
        });
    }








    function menu1_nav_click() {
        showMenu('menu1', 'Menu 1');
    }

    function menu2_nav_click() {
        showMenu('menu2', 'Menu 2');
    }

    function menu3_nav_click() {
        showMenu('menu3', 'Menu 3');
    }

    function menu4_nav_click() {
        showMenu('menu4', 'Menu 4');
    }

    function showMenu(menu, headerText) {
        // Hide all menu content divs
        hideAllMenus();

        // Display the clicked menu content
        document.querySelector(`.${menu}_content`).style.display = 'flex';

        // Update CSS to set display: flex for the clicked menu
        document.querySelector(`.${menu}`).style.display = 'flex';

        // Update the h1 tag text
        // document.querySelector('.events_menu_background h1').textContent = headerText;
    }

    function hideAllMenus() {
        // Hide all menu content divs
        var menuDivs = document.querySelectorAll('.first_menu_link_content');
        menuDivs.forEach(function(div) {
            div.style.display = 'none';
        });

        // Reset display property for all menus
        var menus = ['menu1', 'menu2', 'menu3', 'menu4'];
        menus.forEach(function(menu) {
            document.querySelector(`.${menu}`).style.display = 'none';
        });
    }

    function menupage(){
        window.location.href ="menu.html";
    }


    function lunuuinsta() {
        // Replace 'https://www.instagram.com/your_instagram_username/' with the actual URL of your Instagram page
        window.open('https://www.instagram.com/lunuuadelaide/','_blank');
    }
















    function toggleDisplay(event) {
        var heading = event.currentTarget;
        var content = heading.nextElementSibling; // Assumes the content is the immediate sibling

        if (content.style.display === 'flex') {
            content.style.display = 'none';
        } else {
            content.style.display = 'flex';
        }
    }