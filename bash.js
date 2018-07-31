process.stdout.write('promp >');
const calling = require('./pwd');
const list = require('/ls');

process.stdin.on('data', (data) =>{

  const cmd = data.toString().trim();
  if(cmd === 'pwd'){

    console.log(calling());

  } else if(cmd === 'ls') {
    console.log(list())
  }
//   process.stdout.write('You typed: ' + cmd);
//   process.stdout.write('\npromptpw >');

});









