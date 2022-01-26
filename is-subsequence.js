// add whatever parameters you deem necessary
function isSubsequence(subSeq, seq) {
	let i = 0;
  let j = 0;
  
  while(i < subSeq.length && j < seq.length){
    if(subSeq[i] === seq[j]){
    	i++;
      j++
    }else{
    	j++
    }
  }
  
  if(i < subSeq.length) return false;
  return true;
}
