/**
 * Created by Eduardo on 20/07/2014.
 */

(function(angular) {
    'use strict';

    angular.module("devPaezRubio")
        .controller("i18nCtrl", ["$scope", "i18nService", function ($scope, i18n) {

            $scope.setLang = function(lang) {
                i18n.setLang(lang);
            }

            $scope.getLang = function() {
                return i18n.getLang();
            }

        }])

}(angular));