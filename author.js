fetch("./data.json")
    .then(response => response.json())
    .then(response => loadBio(response))

function loadBio(response) {
    let division = document.getElementById("nhat");
    console.log(response);
    console.log(response["Authors"][0]);

    division.innerHTML =
    `
    <h2 class="d-flex justify-content-center align-items-center" style="margin-bottom: 10px">${response["Authors"][0]["name"]}</h2>
    <img src=${response["Authors"][0]["img"]} alt="nhat's image" class="rounded d-block custom-img" style="margin: 0 auto">
    <p style="margin-top: 10px;"><strong>Email:</strong> ${response["Authors"][0]["email"]}</p>
    <p><strong>Majors:</strong> ${response["Authors"][0]["major"]}</p>
    <p><strong>Classification:</strong> ${response["Authors"][0]["classification"]}</p>
    <p><strong>Hobbies:</strong> ${response["Authors"][0]["hobbies"]}</p>
    `

    let div = document.getElementById("khoi");

    div.innerHTML =
    `
    <h2 class="d-flex justify-content-center align-items-center" style="margin-bottom: 10px">${response["Authors"][1]["name"]}</h2>
    <img src=${response["Authors"][1]["img"]} alt="khoi's image" class="rounded d-block custom-img" style="margin: 0 auto">
    <p style="margin-top: 10px;"><strong>Email:</strong> ${response["Authors"][1]["email"]}</p>
    <p><strong>Major:</strong> ${response["Authors"][1]["major"]}</p>
    <p><strong>Classification:</strong> ${response["Authors"][1]["classification"]}</p>
    <p><strong>Hobbies:</strong> ${response["Authors"][1]["hobbies"]}</p>
    `
    
}