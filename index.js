// O(nlogn) - Time | O(1) - Space
function nonConstructibleChange(coins){
  coins.sort((a,b) => a-b);
  
  let change = 0;

  if(coins[0] !== 1){
    return 1;
  }

  for(let i = 0; i < coins.length; i++){
    if(change + 1 >= coins[i]){
      change += coins[i];
    } else {
      return change + 1
    }
  }
  return change + 1;
}
nonConstructibleChange([5,7,1,1,2,3,22])
// [ 1, 1, 2, 3, 5, 7, 22 ]
// [1,1,1,1,1]