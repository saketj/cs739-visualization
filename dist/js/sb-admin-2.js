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

var components = {
    "PROCESSOR": PROCESSOR,
    "MEMORY": MEMORY,
    "DISK": DISK,
    "SSD": SSD,
    "NETWORK": NETWORK
};

var component_ui_name = {
    "PROCESSOR": "Processor",
    "MEMORY": "Memory",
    "DISK": "Disks",
    "SSD": "SSD",
    "NETWORK": "Network"
};

var component_color = {
    "PROCESSOR": "#337ab7",
    "MEMORY": "#5cb85c",
    "DISK": "#f0ad4e",
    "SSD": "#d9534f",
    "NETWORK": "mediumpurple"
};

var selected_component_id = "SSD";
var nodes, edges, network, all_nodes, all_edges;

function initDashboard(selected_id) {
    selected_component_id = selected_id;
    nodes = null;
    edges = null;
    network = null;

    // Create a data table with nodes.
    nodes = [];

    // Create a data table with links.
    edges = [];

    var selected_component = components[selected_component_id];

    // Create the nodes.
    for (var i = 0; i < selected_component.nodes.length; ++i) {
        var node = selected_component.nodes[i];
        nodes.push({
            id: node.id,
            label: node.label,
            group: selected_component.topic,
            "paper-title": node["paper-title"],
            "paper-highlights": node["paper-highlights"],
            "paper-observations": node["paper-observations"],
            "download-link": node["download-link"]
        });
    }

    // Create the edges.
    for (var i = 0; i < selected_component.edges.length; ++i) {
        var edge = selected_component.edges[i];
        edges.push({
            from: edge.from,
            to: edge.to,
            arrows: 'to',
            "edge-highlights": edge["edge-highlights"],
            "edge-observations": edge["edge-observations"]
        });
    }

    all_nodes = new vis.DataSet(nodes);
    all_edges = new vis.DataSet(edges);


    // create a network
    var container = document.getElementById('vis-network');
    var data = {
        nodes: nodes,
        edges: edges
    };
    var options = {
        nodes: {
            font:{
                size:30,
                color: "white"
            }
        },
        edges: {
            color: '#34495E',
            width: 2,
            selectionWidth: function (width) {return width*2;}
        },
        groups: {
            PROCESSOR: {
                shape: 'box',
                color: component_color[selected_component_id]
            },
            MEMORY: {
                shape: 'box',
                color: component_color[selected_component_id]
            },
            DISK: {
                shape: 'box',
                color: component_color[selected_component_id]
            },
            SSD: {
                shape: 'box',
                color: component_color[selected_component_id]
            },
            NETWORK: {
                shape: 'box',
                color: component_color[selected_component_id]
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
        var selectedNode = all_nodes.get(params.nodes[0]);
        if (selectedNode) {
            populateNodeData(selectedNode);
        }
    });

    network.on("selectEdge", function (params) {
        var selectedEdge = all_edges.get(params.edges[0]);
        if (params.nodes.length == 0 && selectedEdge) {
            populateEdgeData(selectedEdge);
        }
    });


    // Initialize UI elements.
    $('.component-ui-name').each(function() {
       $(this).text(component_ui_name[selected_component_id]);
    });
    $("#ssd-papers-count").text(selected_component.nodes.length);
    populateNodeData(selected_component.nodes[0]);
}

function populateNodeData(selectedNode) {
    $("#paper-title").fadeOut(500, function() {
        $("#paper-title").text(selectedNode["paper-title"]);
    });
    $("#paper-title").fadeIn();

    $("#paper-highlights").fadeOut(500, function() {
        $("#paper-highlights").html(selectedNode["paper-highlights"]);
    });
    $("#paper-highlights").fadeIn();

    $("a#download-paper-btn").attr('href', selectedNode["download-link"]);

    $("#paper-observations").fadeOut(500, function() {
        $("#paper-observations").html(selectedNode["paper-observations"]);
    });
    $("#paper-observations").fadeIn();
}

function populateEdgeData(selectedEdge) {
    $("#paper-title").fadeOut(500, function() {
        var fromNode = all_nodes.get(selectedEdge['from']);
        var toNode = all_nodes.get(selectedEdge['to']);
        $("#paper-title").text(fromNode['label'] + " is cited by " + toNode['label']);
    });
    $("#paper-title").fadeIn();

    $("#paper-highlights").fadeOut(500, function() {
        $("#paper-highlights").html(selectedEdge["edge-highlights"]);
    });
    $("#paper-highlights").fadeIn();
    $("#paper-observations").fadeOut(500, function() {
        $("#paper-observations").html(selectedEdge["edge-observations"]);
    });
    $("#paper-observations").fadeIn();
}

function initTimeline(selected_component_id) {
    var timeline = components[selected_component_id]['timeline'];
    var htmlContent = "";
    for (var i = 0; i < timeline.length; ++i) {
        var item = timeline[i];
        if (i % 2 == 0) {
            htmlContent = htmlContent + "<li>" + getTimelineItemHtml(item) + "</li>";
        } else {
            htmlContent = htmlContent + '<li class="timeline-inverted">' + getTimelineItemHtml(item) + "</li>";
        }
    }
    $("#research-timeline").html(htmlContent);
}

function getTimelineItemHtml(item) {
    var impact = "";
    if (item['impact']) {
        switch(item['impact'].toLowerCase()) {
            case "high": impact = "danger"; break;
            case "medium": impact = "success"; break;
            case "low": impact = "info"; break;
            default: break;
        }
    }
    var icon = "";
    if (item['icon']) {
        icon = item['icon'];
    }
    var title = item['title'];
    var pubDate = item['publication'];
    var description = item['description'];
    return vsprintf(' \
                     <div class="timeline-badge %s"><i class="fa %s"></i>\
                    </div>\
                    <div class="timeline-panel">\
                        <div class="timeline-heading">\
                            <h4 class="timeline-title">%s</h4>\
                            <p><small class="text-muted"><i class="fa fa-clock-o">&nbsp;&nbsp;</i>%s</small></p>\
                        </div>\
                        <div class="timeline-body">\
                            %s\
                        </div>\
                    </div>', [ impact, icon, title, pubDate, description ]);
}

$("#download-paper-btn").click(function () {
    $("#paper-title").fadeOut();
    $("#paper-title").fadeIn();
});

function initDramatic(selected_component_id) {
    // Initial Dramatic Fade-out effect
    $("#vis-network").fadeOut(500, function() {
        initDashboard(selected_component_id);
        $("#vis-network").fadeIn();
    });
    $("#research-timeline").fadeOut(500, function() {
        initTimeline(selected_component_id);
        $("#research-timeline").fadeIn();
    });
}


$(document).ready(function() {
    initDramatic("SSD");
});