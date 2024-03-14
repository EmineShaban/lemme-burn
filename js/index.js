let img = document.getElementsByClassName("img-ingr");

const onClick1 = (e) => {
  console.log(e.target)
  if
};

for (let index = 0; index < img.length; index++) {
  img[index].addEventListener("click", onClick1);
}
// let firstImg = document.getElementById('Quadralipid-Technology')
// let secondImg = document.getElementById('Seed-Oil')
// let thirdImg = document.getElementById('Lactic-Acid')
// let fourthImg = document.getElementById('Beeswax')

// let firstText = document.getElementById('ingredients-text11')
// let secondText = document.getElementById('ingredients-text22')
// let thirdText = document.getElementById('ingredients-text33')
// let fourthText = document.getElementById('ingredients-text44')

// let firstH3 = document.getElementById('h3-1')
// let secondH3 = document.getElementById('h3-2')
// let thirdH3 = document.getElementById('h3-3')
// let fourthH3 = document.getElementById('h3-4')

// let firstP = document.getElementById('p-1')
// let secondP = document.getElementById('p-2')
// let thirdP = document.getElementById('p-3')
// let fourthP = document.getElementById('p-4')
 
// function onClick1() {

//   firstText.style.display = 'block'
//   secondText.style.display = 'none'
//   thirdText.style.display = 'none'
//   fourthText.style.display = 'none'

//   firstH3.className += ' new-h3'
//   firstP.className += ' new-p'

//   secondImg.className = firstImg.className.replace(" new-img", "no-img-shadow");
//   thirdImg.className = thirdImg.className.replace(" new-img", "no-img-shadow");
//   fourthImg.className = fourthImg.className.replace(" new-img", "no-img-shadow");
//   firstImg.className += ' new-img'
// }



// function onClick2() {
//   firstText.style.display = 'none'
//   secondText.style.display = 'block'
//   thirdText.style.display = 'none'
//   fourthText.style.display = 'none'

//   secondH3.className += ' new-h3'
//   secondP.className += ' new-p'

//   firstImg.className = firstImg.className.replace(" new-img", "no-img-shadow");
//   thirdImg.className = thirdImg.className.replace(" new-img", "no-img-shadow");
//   fourthImg.className = fourthImg.className.replace(" new-img", "no-img-shadow");
//   secondImg.className += ' new-img'
// }

// function onClick3() {
//   firstText.style.display = 'none'
//   secondText.style.display = 'none'
//   thirdText.style.display = 'block'
//   fourthText.style.display = 'none'

//   thirdH3.className += ' new-h3'
//   thirdP.className += ' new-p'

//   firstImg.className = firstImg.className.replace(" new-img", "no-img-shadow");
//   secondImg.className = thirdImg.className.replace(" new-img", "no-img-shadow");
//   fourthImg.className = fourthImg.className.replace(" new-img", "no-img-shadow");
//   thirdImg.className += ' new-img'
// }


// function onClick4() {
//   firstText.style.display = 'none'
//   secondText.style.display = 'none'
//   thirdText.style.display = 'none'
//   fourthText.style.display = 'block'

//   fourthH3.className += ' new-h3'
//   fourthP.className += ' new-p'

//   firstImg.className = firstImg.className.replace(" new-img", "no-img-shadow");
//   secondImg.className = fourthImg.className.replace(" new-img", "no-img-shadow");
//   thirdImg.className = thirdImg.className.replace(" new-img", "no-img-shadow");
//   fourthImg.className += ' new-img'
// }







let faq = document.getElementsByClassName("faq-content");

const onClick = (e) => {
  if (
    e.target.className == "q" &&
    e.target.parentElement.children[1].style.display == "none"
  ) {
    e.target.parentElement.children[1].style.display = "block";
  } else if (
    e.target.parentElement.children[1].style.display == "block" &&
    e.target.parentElement.children[1].className == "a"
  ) {
    e.target.parentElement.children[1].style.display = "none";
  }
};

for (let index = 0; index < faq.length; index++) {
  faq[index].addEventListener("click", onClick);
}

let pack = document.getElementsByClassName("pack-li");
const onClick10 = (e) => {
  if (e.target.className == "pack-li pack-color") {
    e.target.className = "pack-li";


  } else if (e.target.className == "pack-img" || e.target.className == "pack-p") {
    for (let i = 0; i < 3; i++) {
      console.log(e.target.parentElement.parentElement.children[i])

      e.target.parentElement.parentElement.children[i].className = "pack-li";
    }
    e.target.parentElement.className = " pack-color";
    console.log( e.target.parentElement)

    console.log('bb')


  } else if (e.target.className == "pack-li") {
    for (let i = 0; i < 3; i++) {
      e.target.parentElement.children[i].className = "pack-li";
    } 
    e.target.className += " pack-color";
    console.log('aa')


  }
}
for (let index = 0; index < pack.length; index++) {
  pack[index].addEventListener("click", onClick10);
}