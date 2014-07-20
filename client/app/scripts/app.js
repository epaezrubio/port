/**
 * Created by Eduardo on 20/07/2014.
 */

(function(angular) {
    'use strict';

    angular.module("devPaezRubio", ['ui.router', 'ngAnimate'])
        .config(function($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise("/index");
            //
            // Now set up the states
            $stateProvider
                .state('index', {
                    url: "/index",
                    templateUrl: "partials/index.tpl.html"
                })
                .state('competences', {
                    url: "/competences",
                    templateUrl: "partials/competences.tpl.html"
                })
                .state('skills', {
                    url: "/skills",
                    templateUrl: "partials/skills.tpl.html"
                })
                .state('works', {
                    url: "/works",
                    templateUrl: "partials/works.tpl.html"
                })
                .state('contact', {
                    url: "/contact",
                    templateUrl: "partials/contact.tpl.html"
                })
                .state('about', {
                    url: "/about",
                    templateUrl: "partials/about.tpl.html"
                })
        })

}(angular));