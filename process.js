process.stdout.write('what is your name now: ');
process.stdin.on('data',function (answer) {
 console.log(answer.toString());
 process.exit();
});