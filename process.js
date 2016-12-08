/**
 * A Node.js script that parses the input data for the visualization.
 */

// Check that we have an input file.
if (process.argv.length < 3) {
    console.log("Error: Expecting an input file as an argument to process the data.");
    process.exit(1);
}


var fs = require('fs');
var filename = process.argv[2];
var input = JSON.parse(fs.readFileSync(filename, 'utf8'));
var output = {};

output['topic'] = input['topic'];
output['nodes'] = input['nodes'];
output['edges'] = input['edges'];
output['timeline'] = input['timeline'];

var output_string = "var " + output['topic'] + " = " + JSON.stringify(output, null, "\t") + ";";
fs.writeFile("js/" + output['topic'].toLowerCase() + ".js", output_string, function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("Processed the input for the topic " + output['topic'] + ".");
});

