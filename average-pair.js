// add whatever parameters you deem necessary
function averagePair(arr, avg) {
	let i = 0;
  let j = arr.length - 1;
  
  while(j > i){
  	const currAvg = arr[i] + arr[j] / 2;
  	if(currAvg > avg){
    	j--;
    }else if(currAvg < avg){
    	i++;
    }else{
    	return true;
    }
  }
  
  return false;
}
