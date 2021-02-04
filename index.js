console.log("funguji");


/*-------------------Sekce 1------------------------*/

const section1_heading = `Lorem ipsum`;
const section1_text = `<strong><span>Lorem ipsum </span></strong>dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
labore et dolore magna aliqua. Ut enim ad minim veniam, <strong><span>quis nostrud </span></strong> exercitation ullamco laboris nisi ut 
aliquip ex ea commodo consequat.`;



const Section1 = () => {
    const element = document.createElement("section");
    element.className = "section1";
    element.innerHTML = `
    <img class="section1__image" src="images/big-rectangle.jpg" alt="velký magenta obdélník">
    <h1 class="section1__heading">${section1_heading}</h1>
    <div class="section1__text">${section1_text}</div>`;

    return element;
};


document.querySelector("#app").appendChild(Section1());



/*------------------Sekce 2---------------------------------*/

const section2_heading = "Co pro vás máme";
const section2_text = `Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
</span><strong>accusantium doloremque laudantium</span></strong>, totam rem aperiam, 
eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitaet.`;



const Section2 = () => {
    const element = document.createElement("section");
    element.className = "section2";
    element.innerHTML = `
    <h2 class="section2__heading">${section2_heading}</h1>
    <div class= "section2__text text">${section2_text}</div>
    
    
    <div class="container">
       <img class="section2__image" src="images/img_1.jpg" alt="malý lila obdélník"></img>
       <div class="section2__container">
       <h3 class="section2__sub-heading">Lorem Ipsum Dolor 1</h3>
       <h4 class="section2__sub-heading--lower">Lorem ipsum</h4>
       <p class="section2__content" >
       Quis autem vel eum iure reprehenderit.
       </p>
       </div>
       </div>
      

       <div class="container">
       <img class="section2__image right" src="images/img_2.jpg" alt="malý pomněkový obdélník"></img>
       <div class="section2__container">
       <h3 class="section2__sub-heading">Lorem Ipsum Dolor 2</h3>
       <h4 class="section2__sub-heading--lower">Lorem ipsum</h4>
       <p class="section2__content">
       vel illum qui dolorem eum fugiat.
       </p>
       </div>
       </div>


       <div class="container">
       <img class="section2__image" src="images/img_3.jpg" alt="malý fialový obdélník"></img>
       <div class="section2__container">
       <h3 class="section2__sub-heading">Lorem Ipsum Dolor 3</h3>
       <h4 class="section2__sub-heading--lower">Lorem ipsum</h4>
       <p class="section2__content">
       Temporibus autem quibusdam et aut officiis.
       </p>
       </div>
       </div>`
    
    return element;
};



document.querySelector("#app").appendChild(Section2());


/*-------------------------Sekce 3----------------------*/

const section3_heading = "Jak na to?";
const section3_text = `Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
accusantium:`;


const Section3 = () => {
    const element = document.createElement("section");
    element.className = "section3";
    element.innerHTML = `
    <h2 class="section3__heading">${section3_heading}</h1>
    <div class="section3__text">${section3_text}</div>
    <ul class="section3__list">

    <div class="section3__container">
    <img class="tick" src="images/checked.svg" alt="zaškrtávací značka"/>
    <li>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.</li>
    </div>

    <div class="section3__container">
    <img class="tick" src="images/checked.svg" alt="zaškrtávací značka"/>
    <li>Et harum quidem rerum.</li>
    </div>

    <div class="section3__container">
    <img class="tick" src="images/checked.svg" alt="zaškrtávací značka"/>
    <li> Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet.</li>
    </div>

    <div class="section3__container">
    <img class="tick" src="images/checked.svg" alt="zaškrtávací značka"/>
    <li>Quis autem vel eum iure reprehenderit.</li>
    </div>
  </ul>

  <button class="section3__btn">Chci využít dárek</button>
`

    return element;
};



document.querySelector("#app").appendChild(Section3());