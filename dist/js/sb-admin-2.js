/*!
 * Start Bootstrap - A Survey of Modern Hardware Failures v3.3.7+1 (http://pages.cs.wisc.edu/~ssaurabh/cs739)
 * Copyright 2013-2016 Saket Saurabh
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap/blob/gh-pages/LICENSE)
 */
$(function() {
    $('#side-menu').metisMenu();
});

//Loads the correct sidebar on window load,
//collapses the sidebar on window resize.
// Sets the min-height of #page-wrapper to window size
$(function() {
    $(window).bind("load resize", function() {
        var topOffset = 50;
        var width = (this.window.innerWidth > 0) ? this.window.innerWidth : this.screen.width;
        if (width < 768) {
            $('div.navbar-collapse').addClass('collapse');
            topOffset = 100; // 2-row-menu
        } else {
            $('div.navbar-collapse').removeClass('collapse');
        }

        var height = ((this.window.innerHeight > 0) ? this.window.innerHeight : this.screen.height) - 1;
        height = height - topOffset;
        if (height < 1) height = 1;
        if (height > topOffset) {
            $("#page-wrapper").css("min-height", (height) + "px");
        }
    });

    var url = window.location;
    // var element = $('ul.nav a').filter(function() {
    //     return this.href == url;
    // }).addClass('active').parent().parent().addClass('in').parent();
    var element = $('ul.nav a').filter(function() {
        return this.href == url;
    }).addClass('active').parent();

    while (true) {
        if (element.is('li')) {
            element = element.parent().addClass('in').parent();
        } else {
            break;
        }
    }
});


$(function() {
    var nodes = null;
    var edges = null;
    var network = null;

    var LENGTH_MAIN = 350,
        LENGTH_SERVER = 150,
        LENGTH_SUB = 50,
        WIDTH_SCALE = 2,
        GREEN = 'green',
        RED = '#C5000B',
        ORANGE = 'orange',
        GRAY = 'gray',
        BLACK = '#2B1B17';

    // Create a data table with nodes.
    nodes = [];

    // Create a data table with links.
    edges = [];

    nodes.push({id: 1, label: "Meza'15", group: 'report' });
    nodes.push({id: 2, label: "Grupp'09", group: 'survey' });
    nodes.push({id: 3, label: "Schroeder'16", group: 'analysis' });
    nodes.push({id: 4, label: "Narayanan'16", group: 'study' });
    nodes.push({id: 5, label: "Zheng'16", group: 'idea' });
    nodes.push({id: 6, label: "Wang'16", group: 'idea'});

    edges.push({from: 1, to: 2, arrows: 'to' });
    edges.push({from: 1, to: 6, arrows: 'to' });
    edges.push({from: 1, to: 3, arrows: 'to' });
    edges.push({from: 2, to: 4, arrows: 'to' });
    edges.push({from: 2, to: 3, arrows: 'to' });
    edges.push({from: 2, to: 5, arrows: 'to' });

    var all_nodes = new vis.DataSet(nodes);
    var all_edges = new vis.DataSet(edges);


    // create a network
    var container = document.getElementById('vis-network');
    var data = {
        nodes: nodes,
        edges: edges
    };
    var options = {
        nodes: {
            font:{
                size:20
            }
        },
        edges: {
            color: GRAY,
            width: 2,
            selectionWidth: function (width) {return width*2;}
        },
        groups: {
            report: {
                shape: 'box',
                color: '#f0ad4e' // orange
            },
            survey: {
                shape: 'box',
                color: '#f0ad4e' // orange
            },
            analysis: {
                shape: 'box',
                color: '#f0ad4e' // orange
            },
            study: {
                shape: 'box',
                color: '#f0ad4e' // orange
            },
            idea: {
                shape: 'box',
                color: '#f0ad4e' // orange
            }
        },
        layout: {
            hierarchical: {
                enabled:true,
                levelSeparation: 150,
                nodeSpacing: 300,
                treeSpacing: 200,
                blockShifting: false,
                edgeMinimization: false,
                parentCentralization: true,
                direction: 'UD',        // UD, DU, LR, RL
                sortMethod: 'hubsize'   // hubsize, directed
            }
        }
    };
    network = new vis.Network(container, data, options);

    network.on("selectNode", function (params) {
        if (all_nodes.get(params.nodes[0])) {
            $("#paper-title").fadeOut();
            $("#paper-title").fadeIn();
        }
    });

    network.on("selectEdge", function (params) {
        if (params.nodes.length == 0 && all_edges.get(params.edges[0])) {
            $("#paper-highlights").fadeOut();
            $("#paper-highlights").fadeIn();
        }
    });

});

$("#download-paper-btn").click(function () {
    $("#paper-title").fadeOut();
    $("#paper-title").fadeIn();
});