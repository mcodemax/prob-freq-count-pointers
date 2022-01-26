// add whatever parameters you deem necessary
function separatePositive(arr) {
	if(arr.length <= 1) return arr;
  let i = 0;
  let j = arr.length - 1; 
  
  while(i < j){
  	if(arr[i] < 0 && arr[j] > 0){
    	[arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
      j--;
    }
    
    if(arr[i] > 0){
    	i++
    }
    
    if(arr[j] < 0){
    	j--
    }
  }
	
  
  return arr;
}
