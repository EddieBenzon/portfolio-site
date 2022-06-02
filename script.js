document.body.onload = addElement;

const scrollElement = document.querySelector(".photo-container");
scrollElement.addEventListener("click", nextImage);

const imageArray = [
  "./Images/lotr 1.jpg",
  "./Images/lotr 2.jpg",
  "./Images/lotr 3.jpg",
  "./Images/lotr 4.jpg",
  "./Images/lotr 5.jpg",
  "./Images/lotr 6.jpg",
  "./Images/lotr 7.jpg",
];

let imageIndex = 0;

function addElement() {
  // create a new img element
  let newImg = document.createElement("img");
  newImg.src = imageArray[imageIndex];
  newImg.id = "image-top";
  const container = document.querySelector(".photo-container");
  container.appendChild(newImg);
}

let myTimer = setInterval(shuffleImages, 7000);

function shuffleImages() {
  imageIndex += 1;
  if (imageIndex == imageArray.length) {
    imageIndex = 0;
  }
  console.log(imageIndex);
  const container = document.querySelector(".photo-container");
  let imgUnder = document.createElement("img");
  imgUnder.src = imageArray[imageIndex];
  let upperImg = document.getElementById("image-top");
  container.appendChild(imgUnder);
  upperImg.style.opacity = "0";
  upperImg.remove();
  imgUnder.id = "image-top";
}

function nextImage() {
  clearInterval(myTimer);
  imageIndex += 1;
  if (imageIndex == imageArray.length) {
    imageIndex = 0;
  }
  console.log(imageIndex);
  const container = document.querySelector(".photo-container");
  let imgUnder = document.createElement("img");
  imgUnder.src = imageArray[imageIndex];
  let upperImg = document.getElementById("image-top");
  container.appendChild(imgUnder);
  upperImg.style.opacity = "0";
  upperImg.remove();
  imgUnder.id = "image-top";
  myTimer = setInterval(shuffleImages, 7000);
}
