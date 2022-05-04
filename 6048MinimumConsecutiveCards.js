/**
 * @param {number[]} cards
 * @return {number}
 */
var minimumCardPickup = function(cards) {

    //cards[i]: idx
    const map = new Map();

    let minConsec = Infinity;
    for(let i=0; i<cards.length; i++){
        if(map.has(cards[i])){
            const difference = i - map.get(cards[i]) + 1; //+1 cause 0-based

            if(difference < minConsec){
                minConsec = difference;
            }

        }
        map.set(cards[i], i);

    }

    if(minConsec === Infinity) return -1
    console.log(map)

    return minConsec

};

console.log(minimumCardPickup([77,10,11,51,69,83,33,94,0,42,86,41,65,40,72,8,53,31,43,22,9,94,45,80,40,0,84,34,76,28,7,79,80,93,20,82,36,74,82,89,74,77,27,54,44,93,98,44,39,74,36,9,22,57,70,98,19,68,33,68,49,86,20,50,43]))
// console.log(minimumCardPickup([3,4,2,3,4,7]))