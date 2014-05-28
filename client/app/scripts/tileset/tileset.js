var Tileset;

(function () {

    'use strict'

    Tileset = function (options) {

        var o = options || {};

        if (!o.width || o.tilewidth)
            throw "not enough options given"

        o.height = o.height || o.width;
        o.tileheight = o.tileheight || o.tilewidth;
        o.tiles = o.tiles || [];

        var getWidth = function () {
            return o.width;
        }, getHeight = function () {
            return o.width;
        }, getPosition = function (id) {
            return {
                x: id % getWidth(),
                y: parseInt(id / getHeight())
            }
        }, getId = function (position) {
            return position.y * getWidth() + position.x;
        }
        
        return {
            getWidth: getWidth,
            getHeight: getHeight,
            getPosition: getPosition,
            getId: getId
        }

    };
}());
