const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');


function randomValueFromArray(array){
  let random = Math.floor(Math.random()*array.length);
  return array[random];
}

///Part 2
//let storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';

let storyText = "Era un día soleado de 94 grados Fahrenheit. :insertx: se preparó para :insertw:. Pero cuando llegó a :inserty:, se sorprendió y :insertz:. Manuel fue quien lo reconoció a pesar de que en ese momento pesaba aproximadamente 300 libras. Decidió ignorarlo y seguir con su camino; era un día muy caluroso y los perritos miraban a lo lejos.";

const arrayX = 'Jay-Z,Daddy Yankee,Don Omar,Cristobal Colón,Juan Gabriel, Freddie Mercury';
let insertX = arrayX.split(',');

let insertY = ['la Casa Blanca',
'la Casa de Peña Nieto',
'la Casa de la Patrona',
'Ecuador',
'Panamá',
'Argentina',
'Venezuela',
'Sonora',
'Los Ángeles'];

const arrayZ = 'se prendió en llamas,vio transformarse el amor en un recuerdo,se convirtió en un chimpancé, se arrastró por el piso,se desmayó,entendió que no podía seguir con su vida';
let insertZ = arrayZ.split(',');

let insertW = ['salir','romper','bailar', 'tomar', 'comer', 'correr'];

///Part 3
randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;
  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);  
  let wItem = randomValueFromArray(insertW);
  
  newStory = newStory.replace(':insertx:', xItem);  
  newStory = newStory.replace(':insertx:', xItem);
  newStory = newStory.replaceAll(/:inserty:/ig, yItem);
  newStory = newStory.replace(':insertz:', zItem);
  newStory = newStory.replace(':insertw:', wItem);

  if(customName.value !== '') {
    const name = customName.value;
    const index = name[0];
    const capital = index.toUpperCase();
    const nameStr = name.slice(1);
    const nameSpelling = `${capital}${nameStr}`;
    console.log(nameStr);
    newStory = newStory.replace('Manuel', nameSpelling);

  }

  if(document.getElementById("mx").checked) {
    const weight = Math.round(1800/14) + ' kilos';
    const temperature =  `${Math.round((94-32)*5/9)} grados centígrados`;

    newStory = newStory.replace('94 grados Fahrenheit', temperature);
    newStory = newStory.replace('300 libras', weight);
  }

  story.textContent = newStory ;
  story.style.visibility = 'visible';
  story.style.padding = '15px';
  randomize.style.marginTop = '15px';
}

//Perritos
const sectionperritos = document.querySelector('.imgRandom');

randomize.addEventListener("click", () => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(resp => resp.json()).then(data => {
        console.log(data);
        const imagenperro = document.createElement("img");
        imagenperro.src = data.message;
        sectionperritos.appendChild(imagenperro);
    });
})

//Mover Btn
randomize.addEventListener('click', moverBtn);
function moverBtn(){

}
