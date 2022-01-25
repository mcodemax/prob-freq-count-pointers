// add whatever parameters you deem necessary
function twoArrayObject(keys, vals) {
	const obj = {};
  let i = 0;
  
  for(let key of keys){
  	if(vals[i]){
    	obj[key] = vals[i];
    }else{
    	obj[key] = null;
    }
    
    i++;
  }
  return obj;
}
