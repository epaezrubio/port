var TMXToCanvas;

(function () {

    'use strict'

    TMXToCanvas = function (context, TMX, tileset, callback) {

        var TMXObject, tilesetObject;

        var init = (function () {

            jx.load(TMX, function (data) {
                TMXObject = data;
                render(callback);
            }, 'json');

            var tilesetImg = new Image();
            tilesetImg.src = tileset;
            tilesetImg.addEventListener("load", function () {
                tilesetObject = tilesetImg;
                render(callback);
            });

        }());

        var render = function () {

            if (!(TMXObject && tilesetObject))
                return;

            tilesetObject.getWidth = function () {
                return tilesetObject.width / TMXObject.tilewidth;
            }

            tilesetObject.getHeight = function () {
                return tilesetObject.height / TMXObject.tilewidth;
            }

            var getPosition = function (id) {
                return {
                    x: id % tilesetObject.getWidth(),
                    y: parseInt(id / tilesetObject.getWidth())
                }
            }

            var getId = function (position) {
                return position.y * tilesetObject.getWidth() + position.x;
            }

            var drawTileByPositionInId = function (position, id) {

                var imagePosition = position,
                    tilePosition = getPosition(id);

                return drawTile(imagePosition, tilePosition);

            }

            var drawTileByIdInPosition = function (id, position) {

                var imagePosition = getPosition(id),
                    tilePosition = position;

                return drawTile(imagePosition, tilePosition);

            }

            var drawTileByIdInId = function (imageId, tileId) {

                var imagePosition = getPosition(imageId),
                    tilePosition = getPosition(tileId);

                return drawTile(imagePosition, tilePosition);

            }

            var drawTile = function (imagePosition, tilePosition) {

                var getPixels = function (num) {
                    return TMXObject.tilewidth * num;
                }

                context.drawImage(
                    tilesetObject,
                    getPixels(imagePosition.x),
                    getPixels(imagePosition.y),
                    TMXObject.tilewidth,
                    TMXObject.tilewidth,
                    getPixels(tilePosition.x),
                    getPixels(tilePosition.y),
                    TMXObject.tilewidth,
                    TMXObject.tilewidth
                    );
            }
            
            callback({
                drawTileByPositionInId: drawTileByPositionInId,
                drawTileByIdInPosition: drawTileByIdInPosition,
                drawTileByIdInId: drawTileByIdInId,
                drawTile: drawTileByIdInPosition
            });
            
            
        };
    };
}());
