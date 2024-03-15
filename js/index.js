let img = document.getElementsByClassName("img-ingr");

const onClick1 = (e) => { 
   if (e.target.className == "img-ingr") {
    for (let i = 0; i < 4; i++) {
      e.target.parentElement.children[i].className = "img-ingr";
      
    }
    e.target.className = "img-ingr new-img";
    for (let i = 0; i < 4; i++) {
       if(e.target.parentElement.children[i].className == "img-ingr new-img"){
        for (let index = 0; index < 4; index++) {
          e.target.parentElement.parentElement.children[2].children[index].style.display = "none";
          
        }
        e.target.parentElement.parentElement.children[2].children[i].style.display = "block";
        console.log(e.target.parentElement.parentElement.children[2].children[i].style.display)
       }
    }
  }
};

for (let index = 0; index < img.length; index++) {
  img[index].addEventListener("click", onClick1);
}
 







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
    console.log(e.target.parentElement)

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