// add whatever parameters you deem necessary
function countPairs(arr, targ) {
	arr.sort((firstEl, secondEl) => firstEl - secondEl);

	let [i,j] = [0, arr.length -1]
  let count = 0;
  
  while(i < j){
  	if(arr[i] + arr[j] === targ){
    	count++;
      i++;
    	j--;
    } 
    
    if(arr[i] + arr[j] > targ){
    	j--;
    }
    
    if(arr[i] + arr[j] < targ){
    	i++;
    }
  }
  
	return count;
}
