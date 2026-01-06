let list = [10, 20, 30, 40, 50];

function aggregateOps(list) {

    // COUNT
    let count = list.length;

    // SUM
    let sum = list.reduce((total, value) => total + value, 0);

    // MAX
    let max = Math.max(...list);

    // MIN
    let min = Math.min(...list);

    // AVG
    let avg = sum / count;

    console.log("List:", list);
    console.log("COUNT:", count);
    console.log("SUM:", sum);
    console.log("MAX:", max);
    console.log("MIN:", min);
    console.log("AVG:", avg);
}
