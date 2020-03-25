const { program } = require('commander');

module.exports = program
  .version('0.0.1')
  .option('-f, --folder <type>', 'Folders with files', './in')
  .option('-o, --output <type>', 'Folder with sorted files', './out')
  .option('-d, --delete', 'Delete folder after sorting');