/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
    /*
    - since I'm using leethub i figure i should do notes to my future self
        and onlookers here. doing a lot of practice probs of greedy algos
        also on just solving things quickly and with actually reading all the
        instructions well. My first approach ignored the requirement to 
        only have TWO people in the boat at once maximum. but fixed it
    - learned something new here. worked on standard tests but not a test case
        [44,10,29,12,49,41,23,5,17,26], 50
    - debugged at various points to find out why and i see my array is sorted to    
        [ 10, 12, 17, 23, 26, 29, 41, 44, 49,  5]
    - must add a comparator to use this function! see more below
        https://dmitripavlutin.com/javascript-array-sort-numbers/
    */
      people.sort((a, b) => {
        if(a < b){
            return -1;
        } 
        if(a > b){
            return 1;
        }
        return 0;
    });
    let boats = 0;
    let heaviest = people.length-1;
    let lightest = 0;

    while(lightest <= heaviest){
        if(people[lightest]+people[heaviest] <= limit){
            lightest++;
            heaviest--;
            boats++;
        }
        else if(people[lightest] + people[heaviest] > limit){
            heaviest--;
            boats++;
        }
    }

    return boats;
};