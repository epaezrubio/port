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

    }
});