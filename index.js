var api = "25631434-859bf3166bb26e033af830823";
var form = document.getElementById("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let search = document.getElementById("search");
    let values = "";
    if (search == null) {
        values = "letest";
    } else {
        values = search.value;
    }
    var URL = `https://pixabay.com/api/?key=${api}&q=${encodeURIComponent(
    values
  )}&per_page=40&pretty=true`;
    fetch(URL)
        .then((data) => {
            return data.json();
        })
        .then((res) => {
            let hits = res.hits;
            document.getElementById("root").innerHTML = null;
            for (let x in hits) {
                let img = hits[x];
                let box = document.createElement("div");
                box.classList.add("card");
                box.innerHTML = `<img class="img lazyimg" data-src="${img.webformatURL}" alt="" src="./lazyimg.gif"><div class="side"><i class="fa fa-heart"></i><i class="fa fa-plus"></i></div><div class="down"><div class="profile"><img src="${img.userImageURL}" alt=""><b>${img.user}</b></div><i class="fa fa-download"></i></div>`;
                document.getElementById("root").appendChild(box);
            }
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
                return (
                    rect.top >= 0 &&
                    rect.left >= 0 &&
                    rect.bottom <=
                    (window.innerHeight || document.documentElement.clientHeight) &&
                    rect.right <=
                    (window.innerWidth || document.documentElement.clientWidth)
                );
            }
        });
});

formSubmit = (e) => {
    let search = document.getElementById("search");
    let values = "";
    if (search == null) {
        values = "letest";
    } else {
        values = search.value;
    }
    var URL = `https://pixabay.com/api/?key=${api}&q=${encodeURIComponent(
    values
  )}&per_page=40&pretty=true`;
    fetch(URL)
        .then((data) => {
            return data.json();
        })
        .then((res) => {
            let hits = res.hits;
            document.getElementById("root").innerHTML = null;
            for (let x in hits) {
                let img = hits[x];
                let box = document.createElement("div");
                box.classList.add("card");
                box.innerHTML = `<img class="img lazyimg" data-src="${img.webformatURL}" alt="" src="./lazyimg.gif"><div class="side"><i class="fa fa-heart"></i><i class="fa fa-plus"></i></div><div class="down"><div class="profile"><img src="${img.userImageURL}" alt=""><b>${img.user}</b></div><i class="fa fa-download"></i></div>`;
                document.getElementById("root").appendChild(box);
            }
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
                return (
                    rect.top >= 0 &&
                    rect.left >= 0 &&
                    rect.bottom <=
                    (window.innerHeight || document.documentElement.clientHeight) &&
                    rect.right <=
                    (window.innerWidth || document.documentElement.clientWidth)
                );
            }
        });
};

formSubmit(this);
// fhoem
var api = "25631434-859bf3166bb26e033af830823";
var form = document.getElementById("form_home");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let search = document.getElementById("search_home");
    var URL = `https://pixabay.com/api/?key=${api}&q=${encodeURIComponent(
    search.value
  )}&per_page=100`;
    fetch(URL)
        .then((data) => {
            return data.json();
        })
        .then((res) => {
            let hits = res.hits;
            document.getElementById("root").innerHTML = null;
            for (let x in hits) {
                let img = hits[x];
                let box = document.createElement("div");
                box.classList.add("card");
                box.innerHTML = `<img class="img lazyimg" data-src="${img.webformatURL}" alt="" src="./lazyimg.gif"><div class="side"><i class="fa fa-heart"></i><i class="fa fa-plus"></i></div><div class="down"><div class="profile"><img src="${img.userImageURL}" alt=""><b>${img.user}</b></div><i class="fa fa-download"></i></div>`;
                document.getElementById("root").appendChild(box);
            }
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
                return (
                    rect.top >= 0 &&
                    rect.left >= 0 &&
                    rect.bottom <=
                    (window.innerHeight || document.documentElement.clientHeight) &&
                    rect.right <=
                    (window.innerWidth || document.documentElement.clientWidth)
                );
            }
        });
});

// menu

document.getElementById("bars").addEventListener("click", () => {
    document.getElementById("menu").classList.toggle("container-show");
});
document.getElementById("cUs").addEventListener("click", () => {
    document.getElementById("contact").classList.toggle("contact-show");
});
