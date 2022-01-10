const team = [
    {
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      image: 'img/wayne-barnett-founder-ceo.jpg',
    },
    {
      name: 'Angela Caroll',
      role: 'Chief Editor',
      image: 'img/angela-caroll-chief-editor.jpg',
    },
    {
      name: 'Walter Gordon',
      role: 'Office Manager',
      image: 'img/walter-gordon-office-manager.jpg',
    },
    {
      name: 'Angela Lopez',
      role: 'Social Media Manager',
      image: 'img/angela-lopez-social-media-manager.jpg',
    },
    {
      name: 'Scott Estrada',
      role: 'Developer',
      image: 'img/scott-estrada-developer.jpg',
    },
    {
      name: 'Barbara Ramos',
      role: 'Graphic Designer',
      image: 'img/barbara-ramos-graphic-designer.jpg',
    },
  ];
  
  let outputHtml = document.querySelector(".team-container")
  /*bonus*/let button = document.getElementById("addMemberButton")


  

  for (let i = 0; i < team.length; i++) {
      
        const persone = team[i];
        let profilo = `
            <div class="team-card">
            <div class="card-image">
            <img
            src="${persone.image }"
            alt="${persone.name}"
            />
            </div>
            <div class="card-text">
            <h3>${persone.name}</h3>
            <p>${persone.role}</p>
        </div>
    </div>`


        outputHtml.innerHTML += profilo
        
  }

/*bonus*/
  button.addEventListener("click", function(){
    let nome = document.getElementById("name")
    let ruolo = document.getElementById("role")
    let immagine = document.getElementById("image")

    team.push({
        name: `${nome}`,
        role: `${ruolo}`,
        image: `${immagine}`,
    });
    let newProfilo = `
            <div class="team-card">
            <div class="card-image">
            <img
            src="${immagine}"
            alt="${nome}"
            />
            </div>
            <div class="card-text">
            <h3>${nome}</h3>
            <p>${ruolo}</p>
        </div>
    </div>`

    outputHtml.innerHTML += newProfilo
  })
