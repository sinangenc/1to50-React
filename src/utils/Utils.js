/**
 * Shuffles the given array randomly <br/>
 * using the Fisher–Yates algorithm
 * @param array
 */
export const shuffleArray = (array) => {
    for(let i = 0; i < array.length; i++){
        // Get a random index
        let randomIndex = Math.floor( Math.random() * (i + 1) );

        // Swap elements
        [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
    }
}

/**
 * Creates an array of numbers in the given range
 */
export const createNumbersArray = () => {
    // Create temporary arrays
    const firstPart = [];   // For 1-25
    const secondPart = [];  // For 26-50

    // Fill the partial arrays
    for(let i = 1; i <= 25; i++){
        firstPart.push({
            value: i,
            isFound:false
        });

        secondPart.push({
            value: 25 + i,
            isFound:false
        });
    }

    // Shuffle arrays
    shuffleArray(firstPart);
    shuffleArray(secondPart);

    // Merge partial arrays and return it
    return firstPart.concat(secondPart);
}