/**
 * Created by wenchao on 2018/1/25.
 */
window.onload = function () {

    var dataset = [];
    for (var i = 0; i < 20; i++) {
        dataset.push(i);
    }
    var svg_width = 1860;
    var svg_height = 640;
    //svg
    var svg = d3.select("body")
        .append("svg")
        .attr("width", svg_width)
        .attr("height", svg_height);
    // circle
    var circles = svg.selectAll("circle")
        .data(dataset)
        .enter()
        .append("circle");

    circles.attr("cx", function (d, i) {
        return i * 50 + 25;
    }).attr("cy", function (d, i) {
        return (svg_height / 2);
    }).attr("r", function (d) {
        return (d * 1.2) + 15
    }).style("fill", function (d, i) {
        log.debug(d, i);
        return d3.rgb(213, 255 - (i * 15), i * 15, 0.9);
    });

    var text = svg.selectAll("text")
        .data(dataset)
        .enter()
        .append("text")
        .text(function (d, i) {
            return d;
        }).attr("x", function (d, i) {
            return i * 50 + 25;
        }).attr("y", function (d, i) {
            return (svg_height / 2 ) + 5;
        });
    text.attr("fill", "white").attr("text-anchor", "middle");
}


/** 2018/1/25 - 11:38
 *---------------------------------
 * from: v_wenchaoduan
 * desc: logger init
 *
 */
var log = function (logname) {
    var logger = log4javascript.getLogger(logname);
    var debugAppender = new log4javascript.BrowserConsoleAppender();
    var appenderTrace = new log4javascript.BrowserConsoleAppender();
    var layout = new log4javascript.PatternLayout("[%p--%r]  %c message: %m %f ");
    appenderTrace.setLayout(layout);
    logger.addAppender(debugAppender);
    return logger;
}("default")