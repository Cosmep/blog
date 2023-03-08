function login() {
  const username = document.getElementById("username");
  const password = document.getElementById("password");
  

  if(username.value === 'admin' && password.value === 'admin') {
      window.location.href = '../pages/post.html';
  } else {
      const errorMessage = document.getElementById('errorMessage');
      errorMessage.classList.remove('hide');
  }
}


// REGISTRO

function checkIn(){
    window.location.href = '../pages/checkin.html';    
      const dataUser = {
        title: dataUser[0].value, 
        lastName: dataUser [1].value, 
        user: dataUser[2].value,
        date: dataUser[3].value,
        description: dataUser[4].value, 
        colorUser: dataUser[5].value, 
        password: dataUser[6].value 
      }
  }


// editor de articulos

const form = document.getElementById("myPost");

document.addEventListener("submit", function(event) {
  event.preventDefault();

  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const category = document.getElementById("category").value;
  const message = document.getElementById("message").value;

  localStorage.setItem("title", title);
  localStorage.setItem("description", description);
  localStorage.setItem("category", category);
  localStorage.setItem("message", message);

  window.location.href = "inicio.html";
});

const title = localStorage.getItem("title");
const description = localStorage.getItem("description");
const category = localStorage.getItem("category");
const message = localStorage.getItem("message");

if (title && description && category && message) {
  document.getElementById("title").textContent = title;
  document.getElementById("description").textContent = description;
  document.getElementById("category").textContent = category;
  document.getElementById("message").textContent = message;
}



// imagen base64

