async function getTodo(){

  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const data = await response.json();
  
    console.log(data)
  } catch (err) {
    console.log(err);
  }

}

async function printTodo(){
  
}

getTodo()