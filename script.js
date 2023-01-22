

const playerData = [
    {
      id: 1,
      name: "Bachira Meguru",
      rank: "7",
      img: 
        "assets\\bachira-removebg-preview.png",
      specialAbility:"Dribbling"

      
    },
    
    {
      id: 2,
      name: "Isagi Yoichi",
      rank: "10",
      img: 
        "assets\\isagi-removebg-preview.png",   //  \\ to prevent escaping of \
      specialAbility:"Spatial intel"
            
    },

    {
      id: 3,
      name: "Nagi Sheishiro",
      rank: "6",
      img: 
        "assets\\images-removebg-preview.png",
      specialAbility:"First Touch"
    }

]

const name = document.querySelector(".name");
const rank = document.querySelector(".Rank");
const Image = document.querySelector(".player-image > img");
const specialabi = document.querySelector(".special-ability");
const graph = document.querySelector(".Rating-graph");
const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');
const lockOn = document.querySelector('.random-btn');
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
   console.log("content is loaded");
   showPerson();  //loads initial item
});

// show person based on item
function showPerson() {
  const item = playerData[currentItem];
  console.log(Image.width);
  if(currentItem == 2){
    Image.width="320";
    Image.height="400";
  }
  Image.src = item.img;
  rank.textContent = item.rank;
  name.textContent = item.name;
  specialabi.textContent = item.specialAbility;
}
// show next person
nextButton.addEventListener("click", function () {
  currentItem++;
  if (currentItem > playerData.length - 1) {
    currentItem = 0;
  }
  console.log(currentItem);
  showPerson();
});
// show prev person
prevButton.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = playerData.length - 1;
  }
  console.log(currentItem)
  showPerson();
});
