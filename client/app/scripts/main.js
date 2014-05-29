(function () {

    'use strict'

    var canvas = document.getElementsByTagName('canvas')[0];
    var context = canvas.getContext('2d');

    var layerSet = layeredCanvas(context, canvas);
    
    var l = layerSet.createLayer(4);
    var l2 = layerSet.createLayer(3);
    var l1 = layerSet.createLayer(1);
    
    
    l.queueDraw(function (context) {
        context.beginPath();
        context.fillStyle = "#AAFFEE";
        context.fillRect(15, 50, 50, 50);
    })
    
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
