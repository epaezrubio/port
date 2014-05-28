(function () {

    'use strict'

    var canvas = document.getElementsByTagName('canvas')[0];
    var context = canvas.getContext('2d');

    var layerSet = layeredCanvas(context, canvas);
    
    var l1 = layerSet.createLayer();
    var l2 = layerSet.createLayer();
    
    
    l2.queueDraw(function (context) {
        context.beginPath();
        context.fillStyle = "#AA00EE";
        context.fillRect(0, 0, 50, 50);
    })
    
    l2.queueDraw(function (context) {
        context.beginPath();
        context.fillStyle = "#AA0000";
        context.fillRect(25, 25, 50, 50);
    })
    
    l1.queueDraw(function (context) {
        context.beginPath();
        context.fillStyle = "#CCCCCC";
        context.fillRect(50, 50, 50, 50);
    })
    

    layerSet.render();



}());
