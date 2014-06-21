$(document).on({
    ready: function () {

        var $skills = $("[class='skillpercent']");
        $skills.tooltip({
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

        $("[data-scroll-to]").click(function(event) {

            event.preventDefault();
            var scrollTarget = $(event.target).attr("data-scroll-to"),
                targetElement = $("#" + scrollTarget);

            $("html, body").animate({ scrollTop: targetElement.position().top }, {duration: 500, queue: false});

        })

        $("#works-kabel-deutschland").on({
            click: function() {
                window.location = "http://www.kabeldeutschland.de/";
            }
        });
        $("#works-right-lively-hood").on({
            click: function() {
                window.location = "http://www.rightlivelihood.org/";
            }
        });
        $("#works-fktg").on({
            click: function() {
                window.location = "http://fktg.org/";
            }
        });
        $("#works-citoliva").on({
            click: function() {
                window.location = "http://www.citoliva.es/";
            }
        });
        $("#works-begona").on({
            click: function() {
                window.location = "http://www.begonavelasco.com/";
            }
        });
        $("#works-tierras-vivas").on({
            click: function() {
                window.location = "http://www.tierrasvivas.es/";
            }
        });
        $("#works-avanza").on({
            click: function() {
                window.location = "http://avanzapublicidad.es/";
            }
        });
        $("#works-2pir").on({
            click: function() {
                window.location = "http://www.2pirdifferent.net/";
            }
        });


    }
})