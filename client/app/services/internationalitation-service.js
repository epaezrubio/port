/**
 * Created by Eduardo on 20/07/2014.
 */


(function (angular, _) {
    'use strict';

    angular.module("devPaezRubio")
        .service("i18nService", ["$state", "$rootScope", function ($state, $rootScope) {

            var currentLang = "en";


            var i18n = {
                "es": {

                    "menu_index": "Inicio",
                    "menu_competences": "Competencias",
                    "menu_contact": "Contacto",
                    "menu_skills": "Habilidades",
                    "menu_works": "Trabajos",
                    "menu_about": "Sobre mí",

                    "link_index": "es/index",
                    "link_competences": "es/competences",
                    "link_contact": "es/contact",
                    "link_skills": "es/skills",
                    "link_works": "es/works",
                    "link_about": "es/about"


                },
                "en": {

                    "menu_index": "Index",
                    "menu_competences": "Competences",
                    "menu_contact": "Contact",
                    "menu_skills": "Skills",
                    "menu_works": "Works",
                    "menu_about": "About",

                    "link_index": "en/index",
                    "link_competences": "en/competences",
                    "link_contact": "en/contact",
                    "link_skills": "en/skills",
                    "link_works": "en/works",
                    "link_about": "en/about"

                }
            };


            $rootScope.$on("$stateChangeSuccess", function() {
                currentLang = $state.current.name.substr(0,2);
            });

            return {
                get: function (text) {
                    if (_.isUndefined(i18n[currentLang][text])) {
                        throw new Error("i18n text identifier not found: [" + text + "]");
                    }
                    return i18n[currentLang][text];
                },
                setLang: function(lang){
                    if (_.isUndefined(i18n[lang])) {
                        throw new Error("No language support for [" + lang + "]");
                    }

                    currentLang = lang;

                    var currentState = $state.current.name;
                    var state = currentState.substr(3,currentState.length - 1);

                    $state.transitionTo(currentLang + "_" + state);

                },
                getLang: function(){
                    return currentLang;
                }
            }
        }]);


}(angular, _));
