function sortNumbers() {

    // Read input
    let input = document.getElementById("numbers").value;

    
    let arr = input.split(" ").map(Number);
    //split convert String to array and map convert each value from str to num

    // Bubble Sort
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {//current number> then next num
                let temp = arr[j];// swaps the num
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    // Display sorted numbers
    document.getElementById("sortedOutput").innerText = arr.join(" ");//join used to convert arr to str

    // Frequency calculation
    let frequency = {};

    for (let i = 0; i < arr.length; i++) {
        if (frequency[arr[i]]) {//num is exists then increse count
            frequency[arr[i]]++;
        } else {
            frequency[arr[i]] = 1;
        }
    }

    // Display frequency
    let output = "";
    for (let num in frequency) {
        output += num + " -> " + frequency[num] + "<br>";
    }

    document.getElementById("frequencyOutput").innerHTML = output;
}
