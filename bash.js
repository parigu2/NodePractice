process.stdout.write('promp >');

process.stdin.on('data', (data) =>{

  const cmd = data.toString().trim();

  if(cmd === 'pwd'){
    console.log(process.env.PWD);
  }
  process.stdout.write('You typed: ' + cmd);
  process.stdout.write('\nprompt >');

});







