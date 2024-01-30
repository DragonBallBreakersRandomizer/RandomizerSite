/*import { 
    Goku_Transformations,
    Vegeta_Transformations, 
    ADGohan_Transformations,
    TeenGohan_Transformations,
    Goten_Transformations,
    Gogeta_Transformations,
    Bardock_Transformations,
    SBroly_Transformations,
    KidTrunks_Transformations,
    ADTrunks_Transformations,
    Beerus,Whis,Piccolo,
    Freiza,Cell,Buu,Pan,An16,An17,An18,
    Ginyu,Videl,Krillin,Tien,Yamcha
} from './transformations.js';*/
/*function get_random_moves() {
    const characters = [
      { name: 'Goku', transformations: Goku_Transformations },
      { name: 'Vegeta', transformations: Vegeta_Transformations },
      { name: 'Adult Gohan',transformations: ADGohan_Transformations},
      { name: 'Teen Gohan',transformations: TeenGohan_Transformations},
      { name: 'Goten',transformations: Goten_Transformations},
      { name: 'Gogeta',transformations: Gogeta_Transformations},
      { name: 'Bardock',transformations: Bardock_Transformations},
      { name: 'SBroly',transformations: SBroly_Transformations},
      { name: 'Kid Trunks',transformations: KidTrunks_Transformations},
      { name: 'Adult Trunks',transformations: ADTrunks_Transformations},
      { name: 'Beerus',transformations: Beerus},
      { name: 'Whis',transformations: Whis},
      { name: 'Freiza',transformations: Freiza},
      { name: 'Cell',transformations: Cell},
      { name: 'Buu',transformations: Buu},
      { name: 'Pan',transformations: Pan},
      { name: 'Andriod 16',transformations: An16},
      { name: 'Andriod 17',transformations: An17},
      { name: 'Andriod 18',transformations: An18},
      { name: 'Piccolo',transformations: Piccolo},
      { name: 'Ginyu',transformations: Ginyu},
      { name: 'Videl',transformations: Videl},
      { name: 'Krillin',transformations: Krillin},
      { name: 'Tien',transformations: Tien},
      { name: 'Yamcha',transformations: Yamcha}
    ];
  
    // Randomly select a character and their transformation
    const characterIndex = Math.floor(Math.random() * characters.length);
    const character = characters[characterIndex];
    const forms = Object.keys(character.transformations);
    const form = forms[Math.floor(Math.random() * forms.length)];
    const moves = character.transformations[form];
    const move = moves[Math.floor(Math.random() * moves.length)];
    
    return { name: character.name, form, move };
}*/
//array of items
const imagePaths = [
    "Resize/Adult Gohan_Normal_500x500.png",
    "Resize/Adult Gohan_Super Sayian_500x500.png",
    "Resize/Adult Gohan_Great Saiyaman 1_500x500.png",
    "Resize/Adult Gohan_Beast_500x500.png",
];
function Roll(){
    console.log('Rolling')
    const boxes = document.querySelectorAll('.boxes')
    rollInterval = setInterval(() => {
        boxes.forEach(box => {
          const randomImageIndex = Math.floor(Math.random() * imagePaths.length);
          box.style.backgroundImage = `url("${imagePaths[randomImageIndex]}")`;
        });
    }, 100);
}
function stopRolling() {
}
document.getElementById("spin").addEventListener('click', Roll);
document.getElementById('stop').addEventListener('click', stopRolling());