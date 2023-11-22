// Part 1: Growing Pains

const radius = 5;
const PI = 3.1415;
const totalArea = PI * radius * radius;

function plantControl(weeks) {
    let plantCount = 20;
    for (let week=1; week <= weeks; week++){
        plantCount *= 2;
    }
    console.log(`Week ${weeks} | Current number of plants: ${plantCount}.`);
    if (plantCount * 0.8 > totalArea) {
        console.log(`Action needed: Prune.`);
    } else if (plantCount * 0.8 >= 0.5) {
        console.log(`Action needed: Monitor.`);
    } else {
        console.log(`Action needed: There is room to plant more plants.`);
    }
}

plantControl(1);
plantControl(2);
plantControl(3);

