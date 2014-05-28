var layeredCanvas = function (context, canvas) {

    var MAX_ZINDEX = 1e100,
        layers = [],
        zIndexSerial = 0;

    canvas = canvas || {};

    var getNextHighestDepth = function () {
        return MAX_ZINDEX + zIndexSerial;
    }, sortLayers = function () {
        layers.sort(function (a, b) {
            return a.zIndex - b.zIndex;
        });
    }, createLayer = function (zIndex) {

        zIndexSerial = zIndexSerial + 1;

        var newLayer = (function (zIndex) {
            var queuedFunctions = [],
                zIndex = zIndex || getNextHighestDepth();



            return {
                zIndex: function (zIndex) {
                    if (!zIndex)
                        return zIndex;
                    zIndex = zIndex;
                    sortLayers();
                },
                queueDraw: function (drawFunction) {
                    queuedFunctions.push(drawFunction);
                },
                render: function (context) {
                    for (var i = 0, ii = queuedFunctions.length; i < ii; i++) {
                        queuedFunctions[i](context);
                    }
                }
            };
        }(zIndex));
        
        layers.push(newLayer);
        sortLayers();

        return newLayer;

    }, render = function () {

        context.clearRect(0, 0, canvas.width || 640, canvas.height || 480);

        for (var i = 0, ii = layers.length; i < ii; i++) {
            layers[i].render(context);
        }

    };

    return {
        createLayer: createLayer,
        render: render
    };

};