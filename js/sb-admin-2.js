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
    // create an array with nodes
    var nodes = new vis.DataSet([
        {id: 1, label: 1, color:'#97C2FC'},
        {id: 2, label: 2, color:'#FFFF00'},
        {id: 3, label: 3, color:'#FB7E81'},
        {id: 4, label: 4, color:'#7BE141'},
        {id: 5, label: 5, color:'#6E6EFD'},
        {id: 6, label: 6, color:'#C2FABC'},
        {id: 7, label: 7, color:'#FFA807'},
        {id: 8, label: 8, color:'#6E6EFD'}
    ]);

    // create an array with edges
    var edges = new vis.DataSet([
        {from: 1, to: 8, color:{color:'red'}},
        {from: 1, to: 3, color:'rgb(20,24,200)'},
        {from: 1, to: 2, color:{color:'rgba(30,30,30,0.2)', highlight:'blue'}},
        {from: 2, to: 4, color:{inherit:'to'}},
        {from: 2, to: 5, color:{inherit:'from'}},
        {from: 5, to: 6, color:{inherit:'both'}},
        {from: 6, to: 7, color:{color:'#ff0000', opacity:0.3}},
        {from: 6, to: 8, color:{opacity:0.3}},
    ]);

    // create a network
    var container = document.getElementById('vis-network');
    var data = {
        nodes: nodes,
        edges: edges
    };
    var options = {};
    var network = new vis.Network(container, data, options);
});