const apiKey = "CSbf0U8xuEMyG7bLtAQ_6xX3yUpPdC0Y8v5kGNRsIns",
    input = document.getElementById("input"),
    searchBtn = document.getElementById("searchBtn"),
    showMore = document.getElementById("showMore"),
    imgConatiner = document.querySelector(".imgConatiner");
    search = document.querySelector(".search");

let query = "",
    page = 1;

async function searchImage() {

    query= input.value;

    const responce = await fetch(`https://api.unsplash.com/search/photos?page=${page}?&query=${query}?&client_id=${apiKey}`);
    const data = await responce.json();

    let results = data.results;

    page === 1 ? imgConatiner.innerHTML="": "";

    results.map((result)=>{
        let box = document.createElement("div");
        box.classList.add("imgBox");
        box.innerHTML=`

        <a href="${result.urls.full}" target="_blank" rel="noopener noreferrer">
            <img src="${result.urls.small}" alt="" srcset="">
            <h4>${result.alt_description}</h4>
        </a>

        `;

        imgConatiner.appendChild(box);
    })
page++;

if (page > 1) {
    showMore.style.display = "block";
}

};

search.onsubmit=(event)=>{
    event.preventDefault();
    searchImage();
    page = 1;
}

input.onkeydown=(event)=>{
    if (event.key === "Enter") {
        event.preventDefault();
        searchBtn.click();
    }
}

showMore.onclick = ()=>{
    searchImage();
}