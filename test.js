const getTestStatus = (array) => {
  let flag = 0;
  if (array.filter(n => n == "Completed").length == array.length)
  {
    return "Completed";
  }
  if (array.filter(n => n == "Evaluated").length == array.length)
  {
    return "Evaluated"; 
  }
  if (array.filter(n => n == null).length == array.length)
  {
    return "continue";
  }
  for (let i = 0; i < array.length; i++)
    {
      if(array[i]===null && array[i+1]==="evaluated"||array[i+1]==="completed")
      {
        return "not allowed";
      }
      else if(array[i]==="started")
      {
        return "started";
      }
      else if(array[i]==="completed"||array[i]=="evaluated")
      {
        return "completed"
      }

    } 
};
let array = ["evaluated",null,null,];
console.log(getTestStatus(array));
