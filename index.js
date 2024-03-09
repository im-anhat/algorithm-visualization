fetch("./data.json")
    .then(response => response.json())
    .then(sorting => loadJumbotron(sorting))

function loadJumbotron (sorting){
    let ul1 = document.getElementById("importance");
    let ul2 = document.getElementById("applications");
    let importance = sorting["About"][0]["Importance"];
    let applications = sorting["About"][1]["Applications"];
    for (let reason in importance){
        let newList = document.createElement("li");
        newList.classList.add("customer-list");
        newList.innerHTML =
        `
        <strong>${reason}</strong>: ${importance[reason]}
        `
        ul1.appendChild(newList);
    }

    for (let app in applications){
        let newList = document.createElement("li");
        newList.classList.add("customer-list");
        newList.innerHTML =
        `
        <strong>${app}</strong>: ${applications[app]}
        `
        ul2.appendChild(newList);
    }
    
    let box1 = document.getElementById("box1");
    let box2 = document.getElementById("box2");
    let importanceImg = document.createElement("img");
    importanceImg.setAttribute("src", `${sorting["About"][0]["img"]}`);
    importanceImg.setAttribute("alt", "importance");
    importanceImg.classList.add("rounded", "d-block", "custom-img");
    box1.appendChild(importanceImg);

    let applicationImg = document.createElement("img");
    applicationImg.setAttribute("src", `${sorting["About"][1]["img"]}`);
    applicationImg.setAttribute("alt", "applications");
    applicationImg.classList.add("rounded", "d-block", "custom-img");
    box2.appendChild(applicationImg);

    loadIllustration(sorting);
}

function loadIllustration (sorting) {
    let box1 = document.getElementById("unsorted");
    let box2 = document.getElementById("sorted");
    let p1 = document.getElementById("drawbacks");
    let p2 = document.getElementById("benefits");

    let unsortedArray = document.createElement("img");
    unsortedArray.setAttribute("src", `${sorting["About"][2]["unsorted"]}`);
    unsortedArray.setAttribute("alt", "unsorted-array");
    unsortedArray.style.height = "200px";
    unsortedArray.style.margin = "0 auto";
    unsortedArray.classList.add("rounded", "d-block");
    box1.insertBefore(unsortedArray, p1);
    p1.textContent = `${sorting["About"][2]["drawbacks"]}`;

    let sortedArray = document.createElement("img");
    sortedArray.setAttribute("src", `${sorting["About"][2]["sorted"]}`);
    sortedArray.setAttribute("alt", "sorted-array");
    sortedArray.style.height = "200px";
    sortedArray.style.margin = "0 auto";
    sortedArray.classList.add("rounded", "d-block");
    box2.insertBefore(sortedArray, p2);
    p2.textContent = `${sorting["About"][2]["benefit"]}`;
}