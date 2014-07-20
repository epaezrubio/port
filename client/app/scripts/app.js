/**
 * Created by Eduardo on 20/07/2014.
 */

(function (angular) {
    'use strict';

    angular.module("devPaezRubio", ['ui.router', 'ngAnimate'])
        .config(["$stateProvider", "$urlRouterProvider",
            function ($stateProvider, $urlRouterProvider) {

                $urlRouterProvider.otherwise("/en/index");

                $stateProvider

                    .state('es_index', {
                        url: "/es/index",
                        templateUrl: "partials/es_ES/index.tpl.html"
                    })
                    .state('es_competences', {
                        url: "/es/competences",
                        templateUrl: "partials/es_ES/competences.tpl.html"
                    })
                    .state('es_skills', {
                        url: "/es/skills",
                        templateUrl: "partials/es_ES/skills.tpl.html"
                    })
                    .state('es_works', {
                        url: "/es/works",
                        templateUrl: "partials/es_ES/works.tpl.html"
                    })
                    .state('es_contact', {
                        url: "/es/contact",
                        templateUrl: "partials/es_ES/contact.tpl.html"
                    })
                    .state('es_about', {
                        url: "/es/about",
                        templateUrl: "partials/es_ES/about.tpl.html"
                    })


                    .state('en_index', {
                        url: "/en/index",
                        templateUrl: "partials/en_US/index.tpl.html"
                    })
                    .state('en_competences', {
                        url: "/en/competences",
                        templateUrl: "partials/en_US/competences.tpl.html"
                    })
                    .state('en_skills', {
                        url: "/en/skills",
                        templateUrl: "partials/en_US/skills.tpl.html"
                    })
                    .state('en_works', {
                        url: "/en/works",
                        templateUrl: "partials/en_US/works.tpl.html"
                    })
                    .state('en_contact', {
                        url: "/en/contact",
                        templateUrl: "partials/en_US/contact.tpl.html"
                    })
                    .state('en_about', {
                        url: "/en/about",
                        templateUrl: "partials/en_US/about.tpl.html"
                    })
            }])

}(angular));