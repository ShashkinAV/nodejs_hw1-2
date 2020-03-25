const fs = require('fs');
const Watcher = require('./watcher');
const program = require('./utils/commander');
program.parse(process.argv);
const del = require('del');
const errorHandler = require('./helper/error');

const watcher = new Watcher(() => {
  console.log('Sorting completed');
  if (program.delete) {
    del(program.folder).then(() => {
      console.log('Delete folder');
    });
  }
});

const copyFolder = require('./utils/copy')(program.output, watcher);

if (!fs.existsSync(program.folder)) {
  errorHandler(`Folder: ${program.folder} not found`);
} else {
  if (!fs.existsSync(program.output)) {
    fs.mkdirSync(program.output);
  }
  copyFolder(program.folder);
  watcher.started();
}