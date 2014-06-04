var drawHex;

(function () {
    'use strict'

    var getHexCoords = function (coords, radius) {
        return {
            x: radius + (coords.x * radius * 1.5),
            y: radius + (coords.y * radius * 1.75) + (coords.x % 2) * radius * Math.sqrt(3) / 2
        }
    }

    drawHex = function (ctx, coords, radius, offset, setStyle) {

        var offset = offset || {},
            center = getHexCoords(coords, radius),
            points = [
                {
                    x: center.x - radius,
                    y: center.y
                },
                {
                    x: center.x - radius + Math.cos(Math.PI / 3) * radius,
                    y: center.y - Math.sin(Math.PI / 3) * radius
                },
                {
                    x: center.x + radius - Math.cos(Math.PI / 3) * radius,
                    y: center.y - Math.sin(Math.PI / 3) * radius
                },
                {
                    x: center.x + radius,
                    y: center.y
                },
                {
                    x: center.x + radius - Math.cos(Math.PI / 3) * radius,
                    y: center.y + Math.sin(Math.PI / 3) * radius
                },
                {
                    x: center.x - radius + Math.cos(Math.PI / 3) * radius,
                    y: center.y + Math.sin(Math.PI / 3) * radius
                }
            ];


        if (setStyle) {
            setStyle(ctx);
        }

        ctx.beginPath();
        ctx.moveTo(points[0].x + (offset.x || -radius), points[0].y + (offset.y || -radius));
        for (var i = 0; i < points.length; i++) {
            ctx.lineTo(points[i].x + (offset.x || -radius), points[i].y + (offset.y || -radius));
        }
        ctx.lineTo(points[0].x + (offset.x || -radius), points[0].y + (offset.y || -radius));
        ctx.stroke();

    }
}())