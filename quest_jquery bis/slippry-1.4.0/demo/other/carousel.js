$(document).ready(function() {
            //Au clic sur le bouton #search je lance la fonction
            $('#driver').on('click', function() {

                // J'initialise le variable box
                let recupimg = [];

                // Je définis ma requête ajax
                $.getJSON(

                    // Adresse à laquelle la requête est envoyée
                    'http://127.0.0.1:8080\carousel.json',

                    // La fonction à apeller si la requête aboutie
                    function(data) {
                        // je dis à l'utilisateur que la requete a abouti

                            let it = 0;
                            for (item of data) {
                                recupimg[it] = item.file;
                                console.log(it);
                                it++;
                            }
                            //alert(data);
                            //console.log(data);
                            //alert("Yesssss");
                      }

										)
                });
            });

            /*
            $(document).ready(function() {
                        $("#driver").click(function(event){

                           //$('#stage').load('carousel.json');

                        });
                     });

            */


            // parametrage du carousel
            $(function() {
                var demo1 = $("#affichpom").slippry({
                    transition: 'fade',
                    // useCSS: true,
                    speed: 3000,
                    pause: 3000,
                    // auto: true,
                    // preload: 'visible',
                    // autoHover: false
                });

                $('.stop').click(function() {
                    demo1.stopAuto();
                });

                $('.start').click(function() {
                    demo1.startAuto();
                });

                $('.prev').click(function() {
                    demo1.goToPrevSlide();
                    return false;
                });
                $('.next').click(function() {
                    demo1.goToNextSlide();
                    return false;
                });
                /*$('.reset').click(function () {
                	demo1.destroySlider();
                	return false;
                });
                $('.reload').click(function () {
                	demo1.reloadSlider();
                	return false;
                });
                $('.init').click(function () {
                	demo1 = $("#demo1").slippry();
                	return false;
                });*/
            });
