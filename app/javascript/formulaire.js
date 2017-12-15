/**
 *  MASQUER LES ICONS CHECK AU CHARGEMENT DE LA PAGE
 * étape 1  : masquer les icon-check avec hide()
 * 
 * RECUPER VAL DE DATE-DEFAULT POUR L AFFICHER DANS CHAQUE CHAMPS
 * étape 1 : pour chaqmps de saisie
 * - réupérer (variable ) la val de l'attribut data-default
 * - affecter au champ la valeur de l'attribut data-default
 * 
 * VIDER UN CHAMP DE SAISIE AU FOCUS SI PAS REMPLI
 * étape 1: au focus si user n'a pas déjà saisi quelque chose 
 * - on vide le champ
 * - sinon on laisse ce que l'utilisateur a saisi
 * 
 * REMETTRE LA VALEUR PAR DEFAULT SI NON REMPLI
 * étape 1 :  si champ non rempli par user 
 * - on remet la valeur par défault
 * - affficher le span .validation
 * - remplacer .icon-check par .icon-close
 * 
 * QUAND LE FORMULAIRE EST ENVOYE
 * étape 1 : si un seul champs required n'est pas rempli
 * - on annule l'envoi du formulaire 
 * - on affiche .icon-close dans les champs 
 * 
 */

'use strict';

$(function() {
    (function() { /**SCOPE equivalent avec un namespace, les var sont reconus uniquement ds cette environnement */
        let dataDefault, listInputs;
        listInputs = $('.formulaire [data-default]');

        changeIcons = (elem, icon1, icon2) => {
            $(elem).siblings('.validation').show()
                .removeClass(icon1)
                .addClass(icon2);
        }

        //étape 1 
        $('.formulaire .validation').hide();
        listInputs.each(function() {
            dataDefault = $(this).attr('data-default');
            $(this).val(dataDefault);
        });

        listInputs.focus(function() {
            if ($(this).val() == $(this).attr('data-default')) {
                $(this).val('');
            }
        });
        listInputs.blur(function() {
            if ($(this).val() == '') {
                $(this).val($(this).attr('data-default'));
                if ($(this).prop('required')) {
                    changeIcons($(this), 'icon-done', 'icon-close');
                }

            } else {
                changeIcons($(this), 'icon-close', 'icon-done');
            }
        });

        $('.formulaire').submit(function() {
            let valid = true;
            $('[required]').each(function() {
                if ($(this).val() == $(this).attr('data-default')) {
                    changeIcons($(this), 'icon-done', 'icon-close');
                    valid = false;
                }
            });
            //envoyé avec la méthode Ajax
            if (valid) {
                $.ajax({
                    method: "POST",
                    url: "envoi-form.php",
                    data: $('.formulaire').serialize()
                }).done(function(retPhp) {
                    alert('réponse : ' + retPhp);
                });
            }
            return false;
        });

    })();


})