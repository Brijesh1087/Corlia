var api = "25631434-859bf3166bb26e033af830823";

const get_images = (images) => {
    document.querySelector(".root").innerHTML = null;
    console.log(images.hits)

    for(let x in images.hits){
        let card = document.createElement("img");
    card.setAttribute('class','img-fluid mx-auto text-center rounded p-2 m-2 shadow-sm bg-white lazyimg');
    card.src=`${images.hits[x].webformatURL}`;
    card.dataset = {
        'src':images.hits[x].webformatURL
    }
    document.querySelector(".root").appendChild(card);

    }
}

const fetch_images = async (values='girl') =>{
    let url = `https://pixabay.com/api/?key=${api}&q=${encodeURIComponent(values)}&per_page=5&pretty=true`;
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