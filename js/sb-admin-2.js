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
    "SSD": SSD
};

var component_ui_name = {
    "PROCESSOR": "Processor",
    "MEMORY": "Memory",
    "DISK": "Disks",
    "SSD": "SSD",
    "NETWORK": "Network"
};

var selected_component_id = "SSD";
var nodes, edges, network, all_nodes, all_edges;

function initDashboard() {
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
                size:30
            }
        },
        edges: {
            color: '#34495E',
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
            SSD: {
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

    // Initialize Timeline.
    initTimeline(selected_component["timeline"]);
}

function populateNodeData(selectedNode) {
    $("#paper-title").fadeOut(500, function() {
        $("#paper-title").text(selectedNode["paper-title"]);
    });
    $("#paper-title").fadeIn();

    $("#paper-highlights").fadeOut(500, function() {
        $("#paper-highlights").text(selectedNode["paper-highlights"]);
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
        $("#paper-highlights").text(selectedEdge["edge-highlights"]);
    });
    $("#paper-highlights").fadeIn();
    $("#paper-observations").fadeOut(500, function() {
        $("#paper-observations").html(selectedEdge["edge-observations"]);
    });
    $("#paper-observations").fadeIn();
}

function initTimeline(timeline) {
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


$(document).ready(function() {
   initDashboard();
});