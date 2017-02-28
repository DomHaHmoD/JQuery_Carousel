$(document).ready(function() {
            // INIT TAB IMAGES
            let table = ['img/apple-256267_640.jpg', 'img/apple-661726_640.jpg', 'img/green-214134_640.jpg', 'img/BELLE DE BOSKOOP.png'];

            // MONTRE LA DERNIERE IMAGE
                        displayImg(table[3]);

                        // FONCTION CARROUSEL
                        function carousel(i) {
                            // TOUTES LES 3 SECONDES
                            setTimeout(function() {
                                // SI PLUS D IMAGE => RETOUR A 0
                                if (i === (table.length - 1)) i = 0;
                                // AFFICHE L IMAGE EN COURS
                                displayImg(i);
                                // RELANCE LE CAROUSEL
                                carousel(i + 1); // relance la fonction
                            }, 3000);
                            }
                            // DEMARRE CAROUSEL AVEC IMAGE 1
                            carousel(0);


                            // AFFICHAGE DES IMAGES
                            function displayImg(id) {
                                // VIDE LE CARROUSEL
                                $("#carousel").html("");
                                // MET L IMAGE QUI VA BIEN AVEC LES FLECHES
                                $("#carousel").append(
                                    $("<img/>").attr("class", "img").attr("src", table[id]).fadeIn(500),
                                    $("<span/>").attr("id", "nav1").text("<"),
                                    $("<span/>").attr("id", "nav2").text(">")
                                );
                                // CLIC PREMIERE FLECHE
                                $("#nav1").bind("click", function() {
                                    let j = id - 1;
                                    if (id === 0) j = 3;
                                    displayImg(j);
                                });
                                //CLIC DEUXIEME FLECHE
                                $("#nav2").bind("click", function() {
                                    let j = id + 1;
                                    if (id === 3) j = 0;
                                    displayImg(j);
                                });
                            }
                        });
