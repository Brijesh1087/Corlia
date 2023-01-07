var api = "25631434-859bf3166bb26e033af830823";

const load_images = () => {
  window.onscroll = function(ev) {
            lazyload();
        };

    function lazyload() {
        let img = document.querySelectorAll(".lazyimg");
        for (let i = 0; i < img.length; i++) {
            if (viewPort(img[i])) {
                img[i].setAttribute("src", img[i].getAttribute("data-src"));
            }
        }
    }

    function viewPort(el) {
        let rect = el.getBoundingClientRect();
        let show_top = document.querySelector("form").getBoundingClientRect().top;
        let popup = document.querySelector(".top");
        if(show_top >= -100){
            popup.style.display = 'none'
        }else {
            popup.style.display = 'block'
        }
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <=
            (window.innerWidth || document.documentElement.clientWidth)
        );
    }
}
const get_images = (images) => {
    document.querySelector(".root").innerHTML = null;
    for(let x in images.hits){
        let card = document.createElement("img");
         card.setAttribute('class','img-fluid mx-auto text-center rounded p-2 m-2 shadow-sm bg-white lazyimg');
         card.setAttribute('data-src',images.hits[x].webformatURL)
        card.src='lazyimg.gif';
        card.innerHTML = 'h1'
        document.querySelector(".root").appendChild(card);
    }
    load_images()
}

const fetch_images = async (values='girl') =>{
    let url = `https://pixabay.com/api/?key=${api}&q=${encodeURIComponent(values)}&per_page=20&pretty=true`;
    let fetch_res = await fetch(url);
    let response_json = await fetch_res.json();
    return get_images(response_json);
}
fetch_images();

document.querySelector(".form").addEventListener("submit",(e)=>{
  e.preventDefault();
  let query = document.querySelector(".query").value;
  fetch_images(query);
})
