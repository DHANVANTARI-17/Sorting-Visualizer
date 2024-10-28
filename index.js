// Update text box with sorting information
function updateSortingInfo(info) {
    const sortingInfo = document.getElementById('sortingInfo');
    sortingInfo.textContent = info;
}

// Function to swap two elements and visualize the swap
async function swap(el1, el2) {
    const style1 = window.getComputedStyle(el1);
    const style2 = window.getComputedStyle(el2);

    const height1 = style1.getPropertyValue("height");
    const height2 = style2.getPropertyValue("height");

    el1.style.height = height2;
    el2.style.height = height1;

    // Highlight bars being swapped
    el1.style.backgroundColor = 'green';
    el2.style.backgroundColor = 'green';

    // Update sorting information
    updateSortingInfo(`Swapping ${height1} and ${height2}`);

    // Add a delay here to visualize the sorting process
    await new Promise(resolve => setTimeout(resolve, 300));

    // Reset color after swapping
    el1.style.backgroundColor = 'lightblue';
    el2.style.backgroundColor = 'lightblue';
}

// Bubble Sort algorithm for sorting bars visually
async function bubbleSort() {
    const bars = document.querySelectorAll('.bar');
    const n = bars.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            const bar1 = bars[j];
            const bar2 = bars[j + 1];

            bar1.style.backgroundColor = 'red';
            bar2.style.backgroundColor = 'red';

            // Update sorting information
            updateSortingInfo(`Bubble Sort: Comparing elements at index ${j} and ${j + 1}`);

            await new Promise(resolve => setTimeout(resolve, 1000));

            const height1 = parseInt(bar1.style.height);
            const height2 = parseInt(bar2.style.height);

            if (height1 > height2) {
                await swap(bar1, bar2);
            }

            bar1.style.backgroundColor = 'lightblue';
            bar2.style.backgroundColor = 'lightblue';
        }

        bars[n - i - 1].style.backgroundColor = 'green';
    }

    // Update sorting information
    updateSortingInfo("Bubble Sort: Sorting completed");
}

// Selection Sort algorithm for sorting bars visually
async function selectionSort() {
    const bars = document.querySelectorAll('.bar');
    const n = bars.length;

    for (let i = 0; i <= n - 1; i++) {
        let min = i;
        for (let j = i + 1; j < n; j++) {
            const bar1 = bars[j];
            const bar2 = bars[min];
            bar1.style.backgroundColor = 'yellow';
            bar2.style.backgroundColor = 'yellow';

            // Update sorting information
            updateSortingInfo(`Selection Sort: Finding minimum element`);

            await new Promise(resolve => setTimeout(resolve, 400));

            const height1 = parseInt(bar1.style.height);
            const height2 = parseInt(bar2.style.height);
            if (height1 < height2) {
                min = j;
            }
            bar1.style.backgroundColor = 'lightblue';
            bar2.style.backgroundColor = 'lightblue';
        }
        if (min !== i) {
            const bar1 = bars[min];
            const bar2 = bars[i];
            await swap(bar1, bar2);
        }
        bars[i].style.backgroundColor = 'green';
    }

    // Update sorting information
    updateSortingInfo("Selection Sort: Sorting completed");
}

// Merge Sort algorithm for sorting bars visually
async function mergeSort(arr, left, right) {
    if (left < right) {
        const mid = Math.floor((left + right) / 2);
        await mergeSort(arr, left, mid);
        await mergeSort(arr, mid + 1, right);
        await merge(arr, left, mid, right);
    }
}

async function merge(arr, left, mid, right) {
    const n1 = mid - left + 1;
    const n2 = right - mid;

    const L = arr.slice(left, mid + 1);
    const R = arr.slice(mid + 1, right + 1);

    let i = 0,
        j = 0,
        k = left;

    const bars = document.querySelectorAll('.bar');

    while (i < n1 && j < n2) {
        bars[k].style.backgroundColor = 'red'; // Highlighting bars being compared
        await new Promise(resolve => setTimeout(resolve, 500));
        if (L[i] <= R[j]) {
            arr[k++] = L[i++];
        } else {
            arr[k++] = R[j++];
        }
    }

    while (i < n1) {
        arr[k] = L[i];
        bars[k].style.height = L[i] + 'px';
        bars[k].style.backgroundColor = 'green'; // Highlighting bars being merged
        await new Promise(resolve => setTimeout(resolve, 100));
        i++;
        k++;
    }

    while (j < n2) {
        arr[k] = R[j];
        bars[k].style.height = R[j] + 'px';
        bars[k].style.backgroundColor = 'green'; // Highlighting bars being merged
        await new Promise(resolve => setTimeout(resolve, 100));
        j++;
        k++;
    }// Update text box with sorting information
function updateSortingInfo(info) {
    const sortingInfo = document.getElementById('sortingInfo');
    sortingInfo.textContent = info;
}

// Update time complexity after sorting
function updateTimeComplexity(complexity) {
    const timeComplexity = document.getElementById('timeComplexity');
    timeComplexity.textContent = `Time Complexity: ${complexity}`;
}

// Function to swap two elements and visualize the swap
async function swap(el1, el2) {
    const style1 = window.getComputedStyle(el1);
    const style2 = window.getComputedStyle(el2);

    const height1 = style1.getPropertyValue("height");
    const height2 = style2.getPropertyValue("height");

    el1.style.height = height2;
    el2.style.height = height1;

    // Highlight bars being swapped
    el1.style.backgroundColor = 'green';
    el2.style.backgroundColor = 'green';

    // Update sorting information
    updateSortingInfo(`Swapping ${height1} and ${height2}`);

    // Add a delay here to visualize the sorting process
    await new Promise(resolve => setTimeout(resolve, 300));

    // Reset color after swapping
    el1.style.backgroundColor = 'lightblue';
    el2.style.backgroundColor = 'lightblue';
}

// Bubble Sort algorithm for sorting bars visually
async function bubbleSort() {
    const bars = document.querySelectorAll('.bar');
    const n = bars.length;
    let startTime = performance.now();

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            const bar1 = bars[j];
            const bar2 = bars[j + 1];

            bar1.style.backgroundColor = 'red';
            bar2.style.backgroundColor = 'red';

            // Update sorting information
            updateSortingInfo(`Bubble Sort: Comparing ${parseInt(bar1.style.height)} and ${parseInt(bar2.style.height)}`);

            await new Promise(resolve => setTimeout(resolve, 100));

            const height1 = parseInt(bar1.style.height);
            const height2 = parseInt(bar2.style.height);

            if (height1 > height2) {
                await swap(bar1, bar2);
            }

            bar1.style.backgroundColor = 'lightblue';
            bar2.style.backgroundColor = 'lightblue';
        }

        bars[n - i - 1].style.backgroundColor = 'green';
    }

    let endTime = performance.now();
    let timeTaken = (endTime - startTime).toFixed(2);
    updateTimeComplexity(`O(n^2) - Time Taken: ${timeTaken} milliseconds`);

    // Update sorting information
    updateSortingInfo("Bubble Sort: Sorting completed");
}

// Selection Sort algorithm for sorting bars visually
async function selectionSort() {
    const bars = document.querySelectorAll('.bar');
    const n = bars.length;
    let startTime = performance.now();

    for (let i = 0; i <= n - 1; i++) {
        let min = i;
        for (let j = i + 1; j < n; j++) {
            const bar1 = bars[j];
            const bar2 = bars[min];
            bar1.style.backgroundColor = 'yellow';
            bar2.style.backgroundColor = 'yellow';

            // Update sorting information
            updateSortingInfo(`Selection Sort: Finding minimum element`);

            await new Promise(resolve => setTimeout(resolve, 400));

            const height1 = parseInt(bar1.style.height);
            const height2 = parseInt(bar2.style.height);
            if (height1 < height2) {
                min = j;
            }
            bar1.style.backgroundColor = 'lightblue';
            bar2.style.backgroundColor = 'lightblue';
        }
        if (min !== i) {
            const bar1 = bars[min];
            const bar2 = bars[i];
            await swap(bar1, bar2);
        }
        bars[i].style.backgroundColor = 'green';
    }

    let endTime = performance.now();
    let timeTaken = (endTime - startTime).toFixed(2);
    updateTimeComplexity(`O(n^2) - Time Taken: ${timeTaken} milliseconds`);

    // Update sorting information
    updateSortingInfo("Selection Sort: Sorting completed");
}

// Merge Sort algorithm for sorting bars visually
async function mergeSort(arr, left, right) {
    if (left < right) {
        const mid = Math.floor((left + right) / 2);
        await mergeSort(arr, left, mid);
        await mergeSort(arr, mid + 1, right);
        await merge(arr, left, mid, right);
    }
}

async function merge(arr, left, mid, right) {
    const n1 = mid - left + 1;
    const n2 = right - mid;

    const L = arr.slice(left, mid + 1);
    const R = arr.slice(mid + 1, right + 1);

    let i = 0,
        j = 0,
        k = left;

    const bars = document.querySelectorAll('.bar');

    while (i < n1 && j < n2) {
        bars[k].style.backgroundColor = 'red'; // Highlighting bars being compared
        await new Promise(resolve => setTimeout(resolve, 500));
        if (L[i] <= R[j]) {
            arr[k++] = L[i++];
        } else {
            arr[k++] = R[j++];
        }
    }

    while (i < n1) {
        arr[k] = L[i];
        bars[k].style.height = L[i] + 'px';
        bars[k].style.backgroundColor = 'green'; // Highlighting bars being merged
        await new Promise(resolve => setTimeout(resolve, 100));
        i++;
        k++;
    }

    while (j < n2) {
        arr[k] = R[j];
        bars[k].style.height = R[j] + 'px';
        bars[k].style.backgroundColor = 'green'; // Highlighting bars being merged
        await new Promise(resolve => setTimeout(resolve, 100));
        j++;
        k++;
    }

    // Resetting color after merge
    for (let x = left; x <= right; x++) {
        bars[x].style.backgroundColor = 'lightblue';
        bars[x].style.height = arr[x] + 'px';
        await new Promise(resolve => setTimeout(resolve, 100));
    }

    // Update sorting information
    updateSortingInfo("Merge Sort: Merging completed");
}

// Insertion Sort algorithm for sorting bars visually
async function insertionSort() {
    const bars = document.querySelectorAll('.bar');
    const n = bars.length;
    let startTime = performance.now();

    for (let i = 1; i < n; i++) {
        let bar1 = bars[i];
        let j = i - 1;
        bar1.style.backgroundColor = 'white';
        let height1 = parseInt(bar1.style.height);
        while (j >= 0 && parseInt(bars[j].style.height) > height1) {
            bars[j].style.backgroundColor = 'yellow';
            bars[j + 1].style.backgroundColor = 'red';
            bars[j + 1].style.height = bars[j].style.height;
            j = j - 1;
            await new Promise(resolve => setTimeout(resolve, 100));
        }
        bars[j + 1].style.height = height1 + 'px';
    }

    let endTime = performance.now();
    let timeTaken = (endTime - startTime).toFixed(2);
    updateTimeComplexity(`O(n^2) - Time Taken: ${timeTaken} milliseconds`);

    // Update sorting information
    updateSortingInfo("Insertion Sort: Sorting completed");
}

// Quick Sort algorithm for sorting bars visually
async function quickSortBars(bars, low, high) {
    if (low < high) {
        let pi = await partition(bars, low, high);
        await quickSortBars(bars, low, pi - 1);
        await quickSortBars(bars, pi + 1, high);
    }
    updateSortingInfo("Quick Sort: Sorting completed");
}

async function partition(bars, low, high) {
    let pivotHeight = parseInt(bars[high].style.height);
    let i = low - 1;
    for (let j = low; j < high; j++) {
        let barHeight = parseInt(bars[j].style.height);
        bars[j].style.backgroundColor = 'red'; // Highlight the bar being compared
        await new Promise(resolve => setTimeout(resolve, 500)); // Add delay for visualization
        if (barHeight < pivotHeight) {
            i++;
            await swap(bars[i], bars[j]);
        }
        bars[j].style.backgroundColor = 'lightblue'; // Reset color after comparison
    }
    await swap(bars[i + 1], bars[high]); // Swap pivot into correct position
    return i + 1;
}

// Generate random heights for bars
function generateRandomHeights() {
    const barsContainer = document.getElementById('barsContainer');
    barsContainer.innerHTML = ''; // Clear existing bars
    const num = prompt("Enter the number of bars you want: ");
    for (let i = 0; i < num; i++) {
        const height = Math.floor(Math.random() * (200 - 50 + 1)) + 50; // Random height between 50 and 200
        const bar = document.createElement('div');
        bar.classList.add('bar');
        bar.style.height = height + 'px';
        barsContainer.appendChild(bar);
    }
}

// Event listener for generating new array
const newArrayBtn = document.getElementById('newArrayBtn');
newArrayBtn.addEventListener('click', generateRandomHeights);

// Event listeners for sorting buttons
const bubbleSortBtn = document.getElementById('bubbleSortBtn');
bubbleSortBtn.addEventListener('click', bubbleSort);

const selectionSortBtn = document.getElementById('selectionSortBtn');
selectionSortBtn.addEventListener('click', selectionSort);

const mergeSortBtn = document.getElementById('mergeSortBtn');
mergeSortBtn.addEventListener('click', async function() {
    const bars = document.querySelectorAll('.bar');
    const heights = Array.from(bars).map(bar => parseInt(bar.style.height));
    updateSortingInfo("Merge Sort: Sorting started");
    await mergeSort(heights, 0, heights.length - 1);
});

const insertionSortBtn = document.getElementById('insertionSortBtn');
insertionSortBtn.addEventListener('click', insertionSort);

const quickSortBtn = document.getElementById('quickSortBtn');
quickSortBtn.addEventListener('click', async function() {
    const bars = document.querySelectorAll('.bar');
    let startTime = performance.now();
    await quickSortBars(bars, 0, bars.length - 1);
    let endTime = performance.now();
    let timeTaken = (endTime - startTime).toFixed(2);
    updateTimeComplexity(`O(n log n) - Time Taken: ${timeTaken} milliseconds`);
});


    // Resetting color after merge
    for (let x = left; x <= right; x++) {
        bars[x].style.backgroundColor = 'lightblue';
        bars[x].style.height = arr[x] + 'px';
        await new Promise(resolve => setTimeout(resolve, 100));
    }
}

// Insertion Sort algorithm for sorting bars visually
async function insertionSort() {
    const bars = document.querySelectorAll('.bar');
    const n = bars.length;
    for (let i = 1; i < n; i++) {
        let bar1 = bars[i];
        let j = i - 1;
        bar1.style.backgroundColor = 'white';
        let height1 = parseInt(bar1.style.height);
        while (j >= 0 && parseInt(bars[j].style.height) > height1) {
            bars[j].style.backgroundColor = 'yellow';
            bars[j + 1].style.backgroundColor = 'red';
            bars[j + 1].style.height = bars[j].style.height;
            j = j - 1;
            await new Promise(resolve => setTimeout(resolve, 100));
        }
        bars[j + 1].style.height = height1 + 'px';
    }

    // Update sorting information
    updateSortingInfo("Insertion Sort: Sorting completed");
}

// Quick Sort algorithm for sorting bars visually
async function quickSortBars(bars, low, high) {
    if (low < high) {
        let pi = await partition(bars, low, high);
        await quickSortBars(bars, low, pi - 1);
        await quickSortBars(bars, pi + 1, high);
    }
}

async function partition(bars, low, high) {
    let pivotHeight = parseInt(bars[high].style.height);
    let i = low - 1;
    for (let j = low; j < high; j++) {
        let barHeight = parseInt(bars[j].style.height);
        bars[j].style.backgroundColor = 'red'; // Highlight the bar being compared
        await new Promise(resolve => setTimeout(resolve, 500)); // Add delay for visualization
        if (barHeight < pivotHeight) {
            i++;
            await swap(bars[i], bars[j]);
        }
        bars[j].style.backgroundColor = 'lightblue'; // Reset color after comparison
    }
    await swap(bars[i + 1], bars[high]); // Swap pivot into correct position
    return i + 1;
}

// Function to generate random heights for bars
function generateRandomHeights() {
    const barsContainer = document.getElementById('barsContainer');
    barsContainer.innerHTML = ''; // Clear existing bars
    const num = prompt("Enter the number of bars you want: ");
    for (let i = 0; i < num; i++) {
        const height = Math.floor(Math.random() * (200 - 50 + 1)) + 50; // Random height between 50 and 200
        const bar = document.createElement('div');
        bar.classList.add('bar');
        bar.style.height = height + 'px';
        barsContainer.appendChild(bar);
    }
}

// Event listener for generating new array
const newArrayBtn = document.getElementById('newArrayBtn');
newArrayBtn.addEventListener('click', generateRandomHeights);

// Event listeners for sorting buttons
const bubbleSortBtn = document.getElementById('bubbleSortBtn');
bubbleSortBtn.addEventListener('click', bubbleSort);

const selectionSortBtn = document.getElementById('selectionSortBtn');
selectionSortBtn.addEventListener('click', selectionSort);

const mergeSortBtn = document.getElementById('mergeSortBtn');
mergeSortBtn.addEventListener('click', async function() {
    const bars = document.querySelectorAll('.bar');
    const heights = Array.from(bars).map(bar => parseInt(bar.style.height));
    await mergeSort(heights, 0, heights.length - 1);
});

const insertionSortBtn = document.getElementById('insertionSortBtn');
insertionSortBtn.addEventListener('click', insertionSort);

const quickSortBtn = document.getElementById('quickSortBtn');
quickSortBtn.addEventListener('click', async function() {
    const bars = document.querySelectorAll('.bar');
    await quickSortBars(bars, 0, bars.length - 1);
});
