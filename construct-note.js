// add whatever parameters you deem necessary
function constructNote(target, ltrs){
    target = target.toLowerCase();
    ltrs = ltrs.toLowerCase();
    //CONVERT LTRS TO LOWERCASE
    const targObj = {};
    const ltrsObj = {};

    for(let ltr of target){
        if(!targObj[ltr]) targObj[ltr] = 1;
        else targObj[ltr]++;
    }

    for(let ltr of ltrs){
        if(!isNaN(targObj[ltr])) targObj[ltr]--;
    }

    for(let ltr in targObj){
        if(targObj[ltr] > 0){
            return false;
        }
    }

    return true;
}
