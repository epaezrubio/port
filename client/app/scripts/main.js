(function (drawHex) {
    'use strict'

    var canv = document.getElementById("canvas");
    var ctx = canv.getContext("2d");

    var adjustCanvas = function () {
        canv.width = window.innerWidth;
        canv.height = window.innerHeight - 5;
    }

    adjustCanvas();
    window.addEventListener("resize", function () {
    })

    var markPos = {
        x: 5,
        y: 5
    }

    var saturations = {};

    var frame = 0;

    function randomizeMark () {
        markPos.x = (markPos.x + 1 + 1900) % 19;
        markPos.y = ((markPos.y + parseInt(Math.random() * 1000) % 2) - markPos.x % 2 + 900) % 9;
    }

    var draw = function () {


        

        for (var key in saturations) {
            saturations[key].s -= 0.25;
            if (saturations[key].s <= 0)
                delete saturations.key;
        }

        for (var i = 0; i < 19; i++) {
            for (var j = 0; j < 9; j++) {
                if (markPos.x == i && markPos.y == j) {
                    saturations["x" + i + "y" + j] = {
                        h: frame,
                        s: 100
                    }
                }
                
                drawHex(ctx, {x: i, y: j}, 100, {x: -92, y: -98}, function (ctx) {
                    ctx.strokeStyle = "rgb(100, 100, 100)"
                    ctx.lineWidth = "10"
                });
                drawHex(ctx, {x: i, y: j}, 100, undefined, function (ctx) {
                    ctx.strokeStyle = "rgb(200, 200, 200)"
                    ctx.lineWidth = "10"
                    ctx.fillStyle = "red";
                });
            }
        }

        requestAnimationFrame(function () {
            frame++;
            if (!(frame % 1))
                randomizeMark();
            draw();
        })
    };

    requestAnimationFrame(function () {
        frame++;
        randomizeMark();
        draw();
    })

}(drawHex));