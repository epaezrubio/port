var layeredCanvas = function (context, canvas) {

    var MAX_ZINDEX = 1e100,
        layers = [],
        zIndexSerial = 0;

    canvas = canvas || {};

    var getNextHighestDepth = function () {
        return MAX_ZINDEX + zIndexSerial;
    }, getHighestLayer = function () {
        return getLayer(layers.length);
    }, getLowestLayer = function () {
        return getLayer(0) || null;
    }, getLayer = function (n) {
        return layers[n];
    }, sortLayers = function () {
        layers.sort(function (a, b) {
            return a.zIndex() - b.zIndex();
        });
    }, createLayer = function (zIndex) {

        zIndexSerial = zIndexSerial + 1;

        var newLayer = (function (zIndexArgument) {
            var queuedFunctions = [],
                zIndex = zIndexArgument || getNextHighestDepth();
                
            return {
                zIndex: function (zIndexArgument) {
                    if (!zIndexArgument)
                        return zIndex;
                    
                    zIndex = zIndexArgument;
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
        
        layers = [];

    };

    return {
        createLayer: createLayer,
        getHighestLayer: getHighestLayer,
        getLowestLayer: getLowestLayer,
        getLayer: getLayer,
        render: render
    };

};