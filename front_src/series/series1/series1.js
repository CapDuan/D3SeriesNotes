/**
 * Created by wenchao on 2018/1/25.
 */
window.onload = function () {
    //var dataset = [30, 10, 20, 50, 40];
    //piePrinter(dataset);
    var width = 1500;
    var height = 600;
    var svg = d3.select("body")
        .append("svg")
        .attr("width", width)
        .attr("height", height);
    var dataset = {
        nodes: [
            {"id": "Myriel", "group": 1},
            {"id": "Napoleon", "group": 1},
            {"id": "Mlle.Baptistine", "group": 1},
            {"id": "Mme.Magloire", "group": 1},
            {"id": "CountessdeLo", "group": 1},
            {"id": "Geborand", "group": 1},
            {"id": "Champtercier", "group": 1},
            {"id": "Cravatte", "group": 1},
            {"id": "Count", "group": 1},
            {"id": "OldMan", "group": 1},
            {"id": "Labarre", "group": 2},
            {"id": "Valjean", "group": 2},
            {"id": "Marguerite", "group": 3},
            {"id": "Mme.deR", "group": 2},
            {"id": "Isabeau", "group": 2},
            {"id": "Gervais", "group": 2},
            {"id": "Tholomyes", "group": 3},
            {"id": "Listolier", "group": 3},
            {"id": "Fameuil", "group": 3},
            {"id": "Blacheville", "group": 3},
            {"id": "Favourite", "group": 3},
            {"id": "Dahlia", "group": 3},
            {"id": "Zephine", "group": 3},
            {"id": "Fantine", "group": 3},
        ],
        links: [],
    };
    for (var i = 0; i < dataset.nodes.length; i++) {
        log.debug(dataset.nodes[i]);
        if (i + 1 != dataset.nodes.length) {
            dataset.links.push({
                "source": dataset.nodes[i].id, "target": dataset.nodes[i + 1].id, "value": 1
            });
        }
    }
    var color = d3.scaleOrdinal(d3.schemeCategory20);
    var simulation = d3.forceSimulation()

    var links = svg.selectAll("line")
        .data(dataset.links)
        .enter()
        .append("line")
        .style("stroke", "#ccc")
        .style("stroke-width", 1)
        .attr("x1", function (d) {
            return Math.random() * 300 + d.value * 100;
        })
        .attr("x2", function (d) {
            return Math.random() * 300 + d.value * 100;
        })
        .attr("y1", function (d) {
            return Math.random() * 300 + d.value * 100;
        })
        .attr("y2", function (d) {
            return Math.random() * 300 + d.value * 100;
        })

    var pieData = d3.pie();
    var data = pieData(data);
    var arc = d3.arc()
        .innerRadius(0)
        .outerRadius(150);

    var arcs = svg.selectAll("g")
        .data([1, 2, 3, 4, 5])
        .enter()
        .append("g")
        .attr("transform", "translate(" + (width / 4) + "," + (height / 3) + ")");
    log.debug(arcs);
    arcs.append("path")
        .attr("fill", function (d, i) {
            return (colors(i));
        })
        .attr("d", function (d) {
            return arc(d);
        });
}
/** 2018/2/2 - 11:14
 *---------------------------------
 * from: v_wenchaoduan
 * desc:piePrinter
 *
 */
var piePrinter = function (data) {
    if (Object.prototype.toString.call(data) == '[object Array]') {
        var width = 1500;
        var height = 600;
        var pieData = d3.pie();
        var data = pieData(data);
        log.debug(data);

        var svg = d3.select("body")
            .append("svg")
            .attr("width", width)
            .attr("height", height);

        var arc = d3.arc()
            .innerRadius(0)
            .outerRadius(150);

        var colors = d3.schemeCategory10;
        log.debug(colors[2]);

        var arcs = svg.selectAll("g")
            .data(data)
            .enter()
            .append("g")
            .attr("transform", "translate(" + (width / 4) + "," + (height / 3) + ")");
        log.debug(arcs);
        arcs.append("path")
            .attr("fill", function (d, i) {
                return (colors[i]);
            })
            .attr("d", function (d) {
                return arc(d);
            });
    } else {
        log.error("piePrinter need array input")
    }

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