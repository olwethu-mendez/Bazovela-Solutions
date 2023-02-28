function toggleMobileNav(){
    let element = document.getElementById("mobile-navigation");

    if(element.classList.contains("mobile-navigation-open")){
        element.classList.remove("mobile-navigation-open");
    }else{
        element.classList.add("mobile-navigation-open");
    }
}

function activeNavLinks(){
    let links = document.querySelectorAll(".navigtion-link");

    Array.from(links).forEach(function(link){
        if(link.classList.contains("active-link")){
            link.classList.remove("active-link");
        }else{
            link.classList.add("active-link");
        }
    })
}