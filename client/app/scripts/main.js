(function () {

    'use strict'

    var canvas = document.getElementsByTagName('canvas')[0];
    var context = canvas.getContext('2d');

    TMXToCanvas(context, "scripts/map/firstmap.json", "scripts/map/img.png", function(grid) {
        
        for (var i = 0; i < 16; i++) {
            grid.drawTileByIdInId(i, i)
        }
        
    });

}());
