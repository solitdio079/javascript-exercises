const findTheOldest = function(people) {
    return people.reduce((acc,curr) => {
        // check for acc
        if(!acc) return curr
        //check if year of death exists
        if(acc.yearOfDeath === undefined) {
            acc.yearOfDeath = (new Date()).getFullYear()
        }
        if(curr.yearOfDeath === undefined) {
            curr.yearOfDeath = (new Date()).getFullYear()
        }
        // GET the ages
        const accAge = acc.yearOfDeath - acc.yearOfBirth
        const currAge = curr.yearOfDeath - curr.yearOfBirth

        if(accAge > currAge){
            return acc
        }else{
            return curr
        }
    })

};

// Do not edit below this line
module.exports = findTheOldest;
