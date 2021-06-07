document.addEventListener("click", function () {
  alert("clicked");
  const backN = document.querySelector("#back-envelope");
  const fullN = document.querySelector("#full-envelope");
  const frontN = document.querySelector("#front-envelope");
  const outN = document.querySelector("#outerflap");
  const card = document.querySelector("#card");

  backN.style.animation = "backRotate 4s ease";
  fullN.style.animation = "fullRotate 4s ease forwards";

  setTimeout(function () {

    backN.style.visibility = "hidden";
    fullN.style.visibility = "visible";

  }, 1200);

//   console.log(fullN)
//   console.log(frontN);

    setTimeout(function(){

        fullN.style.visibility="hidden";
        frontN.style.display = "initial";
        outN.style.display = "initial";
        outN.style.display = "initial";
        card.style.display = "initial";
        outN.style.transform="rotateX(180deg)";
        card.style.animation = "getoutCard 2s ease forwards";

    },4000)
    
   
    setTimeout(function(){card.style.zIndex="+1";},5000)


    setTimeout(function () {

      card.style.animation ="getfrontCard 2s ease forwards";
      outN.style.animation = "outRotate 2s ease forwards";
      frontN.style.animation = "frontRotate 2s ease forwards";
      
    }, 5500);
});
