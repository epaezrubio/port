/**
 * Created by Eduardo on 20/07/2014.
 */

(function (angular) {
    'use strict';

    angular.module("devPaezRubio")
        .filter("i18n", ["i18nService", function (i18nService) {
            return function(value) {
                var translation;
                try {
                    translation = i18nService.get(value)
                } catch (Exception) {
                    console.error(Exception);
                    translation = "";
                }
                return translation;
            };

        }]);


}(angular));
