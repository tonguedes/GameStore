$('.input100').each(function(){
    $(this).on('blur', function(){
        if($(this).val().trim() != "") {
            $(this).addClass('has-val');
        }
        else {
            $(this).removeClass('has-val');
        }
    })    
})



//integrando o html com o front cadastro com  afunção login
function inserir() {
    // dados a serem enviados pela solicitação POST
    const name = document.getElementById("name").value
    const lastName = document.getElementById("lastName").value
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value

    let _data = {
      name: name,
      lastName: lastName,
      email: email,
      password: password
    };
     console.log(_data)
    fetch("http://localhost:3000/auth/register", {
      method: "POST",
      body: JSON.stringify(_data),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.id !== '') {
            chamar()
           
        }else{
            console.log("Não foi");
        }
      });

       
  }

  //funçao logar

  function logar(){
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    let _data = {
    
        email: email,
        password: password
      };
      console.log(_data)
    fetch("http://localhost:3000/auth/login", {
      method: "POST",
      body: JSON.stringify(_data),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((json) => {
       console.log(json)
       const nome = "tokenLogin"
       const valor = json.token 
       
       if( document.cookie = nome + "=" + (valor || "")){
               //window.location.href = "index.html";
       }
         
       
      
      });

      // token do login
      token = getCookie("TokenLogin");

        fetch("http://localhost:3000/auth/login:", {
          method: "POST",
          body: JSON.stringify(_data),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            Authorization: `Bearer ${token}`,
          },
        }).then(function (response) {
          response.json().then(function (json) {
            console.log(json);
          });
        });
      }

      function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) {
          let token = parts.pop().split(";").shift();
          return token;
        }
      }

      function get_cookie(name) {
        return document.cookie.split(";").some((c) => {
          return c.trim().startsWith(name + "=");
        });
      }

      function delete_cookie(name, path, domain) {
        if (get_cookie(name)) {
          document.cookie =
            name +
            "=" +
            (path ? ";path=" + path : "") +
            (domain ? ";domain=" + domain : "") +
            ";expires=Thu, 01 Jan 1970 00:00:01 GMT";
        }
      }
  