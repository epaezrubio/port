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
        })

    }
})