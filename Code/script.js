window.onload = function () {

  /* Get element by classname */
  var maVariable = $( ".maClass" );
  console.log(maVariable);
  // Voilà, tu vois que là maVariable contient bien mon p avec la class "maClass"

  setTimeout(
            function(){
              var paragraphe = document.getElementById("subtitleone");
              paragraphe.innerHTML = "L’agence T.I.M.E a été créée pour empêcher l'apparition de failles temporelles et protéger l’humanité.";

              setTimeout(
                        function(){
                          paragraphe.innerHTML = "En tant que nouvelle recrue, vous serez assigné pour votre 1ère mission";
                        },
                    6000);

                    setTimeout(
                              function(){
                                paragraphe.innerHTML = "En tant que nouvelle recrue, vous serez assigné pour votre 1ère mission :";
                              },
                          7000);

                          setTimeout(
                                    function(){
                                      paragraphe.innerHTML = "Empêcher la formation d'une faille dans un asile du Paris des années 20.";
                                    },
                                10040);

                                setTimeout(
                                          function(){
                                            paragraphe.innerHTML = "Dès que vous serez prêt dirigez vous vers la salle des téléporteurs…";
                                          },
                                      14040);

                                      setTimeout(
                                                function(){
                                                  paragraphe.innerHTML = "Il est l'heure";
                                                },
                                            21040);
                                          },
        1900);
}

setTimeout(
  function(){
    var paragraphe = document.getElementById("subtitletwo");
    paragraphe.innerHTML = "L'aventure que vous allez vivre dépasse tout ce que vous avez pu concevoir auparavant";
  },
31000);


/*
  JavaScript used for smooth Scroll
  Les commentaires ne servent à rien dans le code,
  tu peux les retirer si tu ne les utilises pas
*/

$(document).ready(function(){
  $("a").on('click', function(event) {

    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});
