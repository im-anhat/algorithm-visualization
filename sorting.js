/**
 * GENERAL CODING FOR ALL SORTING ALGORITHMS
 */
fetch("./data.json")
    .then(response => response.json())
    .then(response => loadAnalysis(response))

const container = document.querySelector(".bars-container");

// function to generate bars 
function generatebars(bars = 20) { 
	
    //for loop to generate 20 bars 
    for (let i = 0; i < bars; i += 1) { 

        // To generate random values from 1 to 100 
        const value = Math.floor(Math.random() * 100) + 1; 
        
        // To create element "div" 
        const bar = document.createElement("div"); 
    
        // To add class "bar" to "div" 
        bar.classList.add("bar"); 
    
        // Provide height to the bar 
        bar.style.height = `${value * 3}px`; 
    
        // Translate the bar towards positive X axis 
        bar.style.transform = `translateX(${i * 30}px)`; 
        
        // To create element "label" 
        const barLabel = document.createElement("label"); 
    
        // To add class "bar_id" to "label" 
        barLabel.classList.add("bar_id"); 
    
        // Assign value to "label" 
        barLabel.innerHTML = value; 
        
        // Append "Label" to "div" 
        bar.appendChild(barLabel); 
    
        // Append "div" to "data-container div" 
        container.appendChild(bar);
    } 
}

generatebars();

// Function to generate new random array 
function generate() { 
	window.location.reload(); 
}

// Function to disable the button 
function disable() { 
    document.getElementById("Btn1").disabled = true; 
    document.getElementById("Btn1").style.backgroundColor = "#96aec2"; 

    document.getElementById("Btn2").disabled = true; 
    document.getElementById("Btn2").style.backgroundColor = "#96aec2"; 
} 

function loadAnalysis(sorting){
    let box1 = document.getElementById("analysis");
    let box2 = document.getElementById("illustration");
    let title = document.getElementById("title");
    if (title.textContent == "Insertion Sort Visualizer") {
        let division = document.createElement("div");
        division.innerHTML =
        `
        <p><strong>Best Case:</strong> ${sorting["Insertion"]["Best Case"]}</p>
        <p><strong>Worst Case:</strong> ${sorting["Insertion"]["Worst Case"]}</p>
        <p><strong>Average Case:</strong> ${sorting["Insertion"]["Average Case"]}</p>
        <p><strong>Space Complexity:</strong> ${sorting["Insertion"]["Space complexity"]}</p>
        `;
        let p = document.createElement("p");
        p.textContent = `${sorting["Insertion"]["idea"]}`;
        box1.appendChild(division);
        box1.appendChild(p);
        
        let illustration = document.createElement("img");
        illustration.setAttribute("src", `${sorting["Insertion"]["img"]}`);
        illustration.setAttribute("alt", "playing cards");
        illustration.classList.add("rounded", "d-block", "illustration");
        box2.appendChild(illustration);
    }
    else if (title.textContent == "Selection Sort Visualizer") {
        let division = document.createElement("div");
        division.innerHTML =
        `
        <p><strong>Best Case:</strong> ${sorting["Selection"]["Best Case"]}</p>
        <p><strong>Worst Case:</strong> ${sorting["Selection"]["Worst Case"]}</p>
        <p><strong>Average Case:</strong> ${sorting["Selection"]["Average Case"]}</p>
        <p><strong>Space Complexity:</strong> ${sorting["Selection"]["Space complexity"]}</p>
        `;
        let p = document.createElement("p");
        p.textContent = `${sorting["Selection"]["idea"]}`;
        box1.appendChild(division);
        box1.appendChild(p);
        
        let illustration = document.createElement("img");
        illustration.setAttribute("src", `${sorting["Selection"]["img"]}`);
        illustration.setAttribute("alt", "playing cards");
        illustration.classList.add("rounded", "d-block", "illustration");
        box2.appendChild(illustration);
    }
    else if (title.textContent == "Merge Sort Visualizer") {
        let division = document.createElement("div");
        division.innerHTML =
        `
        <p><strong>Best Case:</strong> ${sorting["Merge"]["Best Case"]}</p>
        <p><strong>Worst Case:</strong> ${sorting["Merge"]["Worst Case"]}</p>
        <p><strong>Average Case:</strong> ${sorting["Merge"]["Average Case"]}</p>
        <p><strong>Space Complexity:</strong> ${sorting["Merge"]["Space complexity"]}</p>
        `;
        let p = document.createElement("p");
        p.textContent = `${sorting["Merge"]["idea"]}`;
        box1.appendChild(division);
        box1.appendChild(p);
        
        let illustration = document.createElement("img");
        illustration.setAttribute("src", `${sorting["Merge"]["img"]}`);
        illustration.setAttribute("alt", "playing cards");
        illustration.classList.add("rounded", "d-block", "illustration");
        box2.appendChild(illustration);
    }
    else if (title.textContent == "Quick Sort Visualizer") {
        let division = document.createElement("div");
        division.innerHTML =
        `
        <p><strong>Best Case:</strong> ${sorting["Quick"]["Best Case"]}</p>
        <p><strong>Worst Case:</strong> ${sorting["Quick"]["Worst Case"]}</p>
        <p><strong>Average Case:</strong> ${sorting["Quick"]["Average Case"]}</p>
        <p><strong>Space Complexity:</strong> ${sorting["Quick"]["Space complexity"]}</p>
        `;
        let p = document.createElement("p");
        p.textContent = `${sorting["Quick"]["idea"]}`;
        box1.appendChild(division);
        box1.appendChild(p);
        
        let illustration = document.createElement("img");
        illustration.setAttribute("src", `${sorting["Quick"]["img"]}`);
        illustration.setAttribute("alt", "playing cards");
        illustration.classList.add("rounded", "d-block", "illustration");
        box2.appendChild(illustration);
    }
}


/**
 * Sorting functions
 */

// Asynchronous function to perform "Insertion Sort" 
async function InsertionSort(delay = 600) { 
    let bars = document.querySelectorAll(".bar"); 

    bars[0].style.backgroundColor = "#96aec2"; 
    for (var i = 1; i < bars.length; i += 1) { 
        var j = i - 1; 
        var key = parseInt(bars[i].childNodes[0].innerHTML); 
        var height = bars[i].style.height; 
    
        bars[i].style.backgroundColor = "black"; 
        
        await new Promise((resolve) => 
        setTimeout(() => { 
        resolve(); 
        }, 600) 
    ); 
    
        while (j >= 0 && parseInt(bars[j].childNodes[0].innerHTML) > key) { 
            
        bars[j].style.backgroundColor = "black"; 
            
        bars[j + 1].style.height = bars[j].style.height; 
        bars[j + 1].childNodes[0].innerText = 
        bars[j].childNodes[0].innerText; 
    
        j = j - 1; 

        await new Promise((resolve) => 
            setTimeout(() => { 
            resolve(); 
            }, 600) 
        ); 
            
        for(var k=i;k>=0;k--){ 
            bars[k].style.backgroundColor = "#96aec2"; 
        } 
        } 
    
        bars[j + 1].style.height = height; 
        bars[j + 1].childNodes[0].innerHTML = key; 
        
        await new Promise((resolve) => 
        setTimeout(() => { 
            resolve(); 
        }, 600) 
        ); 
 
        bars[i].style.backgroundColor = "#96aec2"; 
    } 
    
        
    // To enable the button 
    document.getElementById("Btn1").disabled = false; 
    document.getElementById("Btn1").style.backgroundColor = "#05477a"; 
    
    document.getElementById("Btn2").disabled = false; 
    document.getElementById("Btn2").style.backgroundColor = "#05477a"; 
}

// Asynchronous function to perform "Selection Sort"
async function SelectionSort(delay = 300) {
	let bars = document.querySelectorAll(".bar");
	var min_idx = 0;
	for (var i = 0; i < bars.length; i += 1) {
		min_idx = i;

		bars[i].style.backgroundColor = "darkblue";
		for (var j = i + 1; j < bars.length; j += 1) {
			bars[j].style.backgroundColor = "black";

			await new Promise((resolve) =>
				setTimeout(() => {
					resolve();
				}, delay)
			);

			var val1 = parseInt(bars[j].childNodes[0].innerHTML);
			var val2 = parseInt(bars[min_idx].childNodes[0].innerHTML);

			if (val1 < val2) {
				if (min_idx !== i) {
					bars[min_idx].style.backgroundColor = "#09649f";
				}
				min_idx = j;
			} else {
				bars[j].style.backgroundColor = "#09649f";
			}
		}

		var temp1 = bars[min_idx].style.height;
		var temp2 = bars[min_idx].childNodes[0].innerText;
		bars[min_idx].style.height = bars[i].style.height;
		bars[i].style.height = temp1;
		bars[min_idx].childNodes[0].innerText = bars[i].childNodes[0].innerText;
		bars[i].childNodes[0].innerText = temp2;

		await new Promise((resolve) =>
			setTimeout(() => {
				resolve();
			}, 300)
		);


		bars[min_idx].style.backgroundColor = "#09649f";
		bars[i].style.backgroundColor = "#96aec2";
	}

	document.getElementById("Btn1").disabled = false;
	document.getElementById("Btn1").style.backgroundColor = "#05477a";

	document.getElementById("Btn2").disabled = false;
	document.getElementById("Btn2").style.backgroundColor = "#05477a";
}


// Asynchronous function to perform Merge Sort
async function MergeSort(delay = 300) {
    const bars = document.querySelectorAll(".bar");
    await mergeSortHelper(bars, 0, bars.length - 1, delay);
    document.getElementById("Btn1").disabled = false; 
    document.getElementById("Btn1").style.backgroundColor = "#05477a"; 
    
    document.getElementById("Btn2").disabled = false; 
    document.getElementById("Btn2").style.backgroundColor = "#05477a"; 
}

async function mergeSortHelper(bars, start, end, delay) {
    if (start < end) {
        const mid = Math.floor((start + end) / 2);
        await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, delay)
        );
        await mergeSortHelper(bars, start, mid, delay);
        await mergeSortHelper(bars, mid + 1, end, delay);
        await merge(bars, start, mid, end, delay);
    }
}

async function merge(bars, start, mid, end, delay) {
    const leftSize = mid - start + 1;
    const rightSize = end - mid;

    const leftArray = new Array(leftSize);
    const rightArray = new Array(rightSize);

    for (let i = 0; i < leftSize; i++) {
        leftArray[i] = parseInt(bars[start + i].childNodes[0].innerHTML);
    }

    for (let j = 0; j < rightSize; j++) {
        rightArray[j] = parseInt(bars[mid + 1 + j].childNodes[0].innerHTML);
    }

    let i = 0, j = 0, k = start;

    while (i < leftSize && j < rightSize) {
        if (leftArray[i] <= rightArray[j]) {
            bars[k].style.height = `${leftArray[i]*3}px`;
            bars[k].childNodes[0].innerHTML = leftArray[i];
            bars[k].style.backgroundColor="#96aec2";
            i++;
        } else {
            bars[k].style.height = `${rightArray[j]*3}px`;
            bars[k].childNodes[0].innerHTML = rightArray[j];
            bars[k].style.backgroundColor="#96aec2";
            j++;
        }
        k++;
        await delayAnimation(delay);
    }

    while (i < leftSize) {
        bars[k].style.height = `${leftArray[i]*3}px`;
        bars[k].childNodes[0].innerHTML = leftArray[i];
        bars[k].style.backgroundColor="#96aec2";
        i++;
        k++;
        await delayAnimation(delay);
    }

    while (j < rightSize) {
        bars[k].style.height = `${rightArray[j]*3}px`;
        bars[k].childNodes[0].innerHTML = rightArray[j];
        bars[k].style.backgroundColor="#96aec2";
        j++;
        k++;
        await delayAnimation(delay);
    }
}

async function delayAnimation(delay) {
    await new Promise(resolve => setTimeout(resolve, delay));
}


// Asynchronous function to perform Quick Sort
async function QuickSort(delay = 600) {
    let bars = document.querySelectorAll(".bar");
    await quickSortHelper(bars, 0, bars.length - 1);

    for (let i = 0; i < bars.length; i++) {
        bars[i].style.backgroundColor = "#96aec2";
    }

    await new Promise(resolve => setTimeout(resolve, 20));

    document.getElementById("Btn1").disabled = false; 
    document.getElementById("Btn1").style.backgroundColor = "#05477a"; 
    
    document.getElementById("Btn2").disabled = false; 
    document.getElementById("Btn2").style.backgroundColor = "#05477a";
}

async function quickSortHelper(bars, low, high) {
    if (low < high) {
        let pivotIndex = await partition(bars, low, high);

        await quickSortHelper(bars, low, pivotIndex - 1);
        await quickSortHelper(bars, pivotIndex + 1, high);
    }
}

async function partition(bars, low, high) {
    let pivot = parseInt(bars[high].childNodes[0].innerHTML);
    let i = low - 1;

    bars[high].style.backgroundColor = "black";

    await new Promise(resolve => setTimeout(resolve, 300));

    for (let j = low; j < high; j++) {
        let value = parseInt(bars[j].childNodes[0].innerHTML);

        await new Promise(resolve => setTimeout(resolve, 200));

        bars[j].style.backgroundColor = "darkblue";

        if (value < pivot) {
            i++;
            await swapBars(bars, i, j);
        }
    }

    await new Promise(resolve => setTimeout(resolve, 300));
    for (let j = low; j <= high; j++) {
        bars[j].style.backgroundColor = "";
    }
    
    bars[i+1].style.backgroundColor = "#96aec2";
    await swapBars(bars, i + 1, high);
    return i + 1;
}

async function swapBars(bars, i, j) {
    let tempHeight = bars[i].style.height;
    let tempText = bars[i].childNodes[0].innerText;

    bars[i].style.height = bars[j].style.height;
    bars[j].style.height = tempHeight;

    bars[i].childNodes[0].innerText = bars[j].childNodes[0].innerText;
    bars[j].childNodes[0].innerText = tempText;

    await new Promise(resolve => setTimeout(resolve, 300));
}