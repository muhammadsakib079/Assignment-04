function calculateVAT( price ) {
    if (typeof price != "number"){
        return "Invalid";
    }
    let VAT = price * 0.075;
    return VAT;
}



function  validContact( contact ) {
    if (typeof contact !== "string"){
        return "Invalid";
    }
    else if ( contact.length === 11 && !contact.includes(" ") && contact.slice(0, 2) == "01" ){
        return true;
    }
    else{
        return false;
    }
}



function  willSuccess( marks ) {
    let Pass = [];
    let Fail = [];
    if (!Array.isArray(marks)){
        return "Invalid";
    }
    for (let mark of marks) {
        if (mark >= 50){
            Pass.push(mark);
        }
        else {
            Fail.push(mark);
        }
    }
    if (Pass.length > Fail.length){
        return true;
    }
    else{
        return false;
    }
}



function  validProposal(person1, person2) {
    if (typeof person1 !== "object" || typeof person2 !== "object"){
        return "Invalid";
    }
    else if (person1.gender !== person2.gender && Math.abs(person1.age - person2.age) <= 7){
        return true;
    }
    else{
        return false;
    }
}



function  calculateSleepTime( times ) {
    
}

const sleepTime = [1000, 499, 519, 300];