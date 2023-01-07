var api = "25631434-859bf3166bb26e033af830823";
var global_query;
const tag_show = () => {
    let tag_btn = document.querySelectorAll(".tags button");
    tag_btn.forEach((ele,ind) => {
        ele.addEventListener("click",()=>{
            fetch_images(ele.innerText);
            global_query = ele.innerText;
        })
    })
}
const download_image = () => {
    let images = document.querySelectorAll(".lazyimg");
    images.forEach((ele,ind) => {
        ele.addEventListener("click",()=>{
            let url = ele.src;
            fetch(url).then(res=>res.blob()).then((data)=>{
               let d_url = URL.createObjectURL(data);
               let a = document.createElement("a");
               a.href=d_url;
               a.download='image.jpeg'
               a.click()
            })
            setTimeout(()=>{
                console.clear();
            },100)
        })
    })
}

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
            rect.top >= -700 &&
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
    document.querySelector(".tags").innerHTML = null;

    let tag_count = 0;

    for(let x in images.hits){

        let card = document.createElement("img");
         card.setAttribute('class','img-fluid mx-auto text-center rounded p-2 m-2 shadow-sm bg-white lazyimg');
         card.setAttribute('data-src',images.hits[x].webformatURL);
         card.setAttribute("title",'Click Download.')
        card.src='lazyimg.gif';
        document.querySelector(".root").appendChild(card);

        tag_count += 1;
        if(tag_count <= 5){
            let tag = document.createElement("button");
            tag.setAttribute("class",'btn btn-light');
            tag.innerHTML = images.hits[x].tags;
            document.querySelector(".tags").appendChild(tag);
        }
    }
    load_images()
    download_image()
    tag_show()
}

const fetch_images = async (query='nature leaf', page=1) =>{
    global_query = query;
    let url = `https://pixabay.com/api/?key=${api}&q=${encodeURIComponent(query)}&per_page=40&page=${page}&pretty=true`;
    let fetch_res = await fetch(url);
    let response_json = await fetch_res.json();
    return get_images(response_json);
}
fetch_images()

document.querySelector(".form").addEventListener("submit",(e)=>{
  e.preventDefault();
  let query = document.querySelector(".query").value;
  fetch_images(query);
})

let page = 1;
document.querySelector(".previous").addEventListener("click",()=>{
    if(page>= 2 && page <= 6){
        page -= 1;
        document.querySelector(".top").click();
        fetch_images(global_query, page);
    }
})

document.querySelector(".next").addEventListener("click",()=>{
    if(page<= 5 && page >= 1){
        page += 1;
        fetch_images(global_query, page);
        document.querySelector(".top").click();
    }
})

document.querySelectorAll(".page_i").forEach((ele,ind) => {
    ele.addEventListener("click",()=>{
        page = ele.innerText;
        fetch_images(global_query, page);
        document.querySelector(".top").click();
    })
})
