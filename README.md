# A Survey of Modern Hardware Failures

This is the demo for the final CS 739 project that summarizes the state-of-the-art work on how 
various components of a distributed system fail. 

## Running the demo

First, install [node.js](https://nodejs.org/en/download/). Then, to compile and view the demo, run the following commands
in the source directory after cloning the repository:
* `npm install`
* `bower install`
* `gulp`

Now, open the folder path in a browser. (Chrome suggested)


## Using the Source Files

After cloning the repo take a look at the `gulpfile.js` and check out the tasks available:
* `gulp` The default task will compile the LESS and JS into the `dist` directory and minify the output, and it will copy all vendor libraries from `bower_components` into the `vendor` directory
* `gulp dev` The dev task will serve up a local version of the template and will watch the LESS, JS, and HTML files for changes and reload the browser windo automatically

To update dependencies, run `bower update` and then run `gulp copy` to copy the updated dependencies into the `vendor` directory


## Modifying the dashboard content
* Edit the corresponding component `.json` file in `data/input/` folder.
* Run the command: `node process.js data/input/<component>.json`
* Reload the webpage and the new changes should be available. 

## Copyright and License

Copyright 2016. Code released under the MIT license.
