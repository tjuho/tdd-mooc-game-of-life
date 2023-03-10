const args = process.argv;
console.log(args);
if (args.length !== 4){
  console.log("usage: start [rlefile] [count]");
}
const file = args[2];
const count = parseInt(args[3]);