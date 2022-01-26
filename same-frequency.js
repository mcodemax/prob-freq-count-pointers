// add whatever parameters you deem necessary
function sameFrequency(posint1, posint2) {
	const obj = {};
  int1 = posint1.toString();
  int2 = posint2.toString();
  console.log(int1, int2)
  
  for(let x of int1){
  	if(!obj[x]){
    	obj[x] = 1;
    }else{
    	obj[x]++;
    }
  }
  
  for(let x of int2){
  	if(!obj[x]){
			return false; //returns false cause some digits exist that aren't in the other integer    
    }else{
    	obj[x]--;
    }
    
    if(obj[x] < 0) return false;
  }
  
  return true;
}
