let input = prompt("What would you like to do?")
const todos = ["Read 10 pages","2 hours od code"];
while(input !== "quit" && input !=="q") {
  if(input === "list")
  {
    console.log("************");
    for(let i = 0;i < todos.length;i++){
      console.log(`${i}: ${todos[i]}`)
    }
    console.log("************");
  }else if (input === "new"){
    const newTodo = prompt("What is the new To do?");
    todos.push(newTodo);
    console.log(`${newTodo} added to the list!`)
  }else if(input === "delete"){
    const num = prompt("Enter index to delete!");
    const index =parseInt(num);
    if(!Number.isNaN(index))
    {
      const deleted = todos.splice(index,1);
      console.log(`Deleted ${deleted}`);
    }else{
      console.log("Invalid index");
    }
    
  }
  input = prompt("What would you like to do?")
}
console.log("Ok, you quit the app!")