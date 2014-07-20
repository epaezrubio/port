/**
 * Created by Eduardo on 20/07/2014.
 */

(function (angular) {
    'use strict';

    angular.module("devPaezRubio")
        .directive("simpleTooltip", function () {

            return {
                restrict: "A",
                link: function ($scope, $element) {

                    $element.tooltip({
                        show: null,
                        position: {
                            my: "middle middle",
                            at: "middle bottom+20"
                        },
                        open: function (event, ui) {
                            ui.tooltip
                                .css({opacity: 0})
                                .animate({ opacity: 0.9, top: ui.tooltip.position().top + 10 }, "fast");
                        }
                    });
                }
            }
        });


}(angular));
