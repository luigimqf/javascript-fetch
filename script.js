const printButton = document.querySelector(".button");
const tBody = document.querySelector('tbody');

async function getUsers(){

  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const data = await response.json();
    
    return data
  } catch (err) {
    console.log(err.message);
  }
}

async function printUsers(){
  const data = await getUsers();

  if (!data) return;

  data.forEach(data =>{
    const row = document.createElement('tr');
    const fields = ['email', 'id', 'name', 'phone', 'username', 'website'];

    fields.forEach(field => {
      const content = document.createElement('td');

      content.textContent = data[field];

      row.appendChild(content);
    })
    tBody.appendChild(row);
  })


  }

printButton.addEventListener("click", printUsers);

