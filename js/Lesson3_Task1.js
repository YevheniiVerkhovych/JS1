var result = "";
 for(i = 0; i < nums.length; i ++){
  if(nums[i]%2 && nums[i] < 0){
   result += nums[i] + " ";
  }
 }
console.log("Нечётные отрицательные значения:", result);

var qty = 0;
result = "";
 for(i = 0; i < nums.length; i ++){
  if(nums[i] > 0){
   qty ++;
  }
 }
console.log("Количество положительных значений:", qty); 
 
 for(i = 1; i < nums.length; i += 2){
  result += nums[i] + " ";
 }
console.log("Значения на нечётных позициях:", result);



