function writeCards(a,b){
  let c = [];
  for (let i=0; i<a.length;i++){
    c[i] = console.log(`Thank you, ${a[i]}, for the wonderful ${b} gift!`);
  }

  return c;
}


writeCards(["Ada", "Brendan", "Ali"], "birthday");
function countDown(n){
  while (n>=0){
    console.log(n);
    n--;
  }
}
countDown(19);
