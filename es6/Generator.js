//1.
function* range(start, end){
   for(let i ;i<end-start;i++){
    yield start+i;
   }
   return end;
}
//2.斐波拉契数列
function* fib(){
    let [prev,curr]=[0,1];
    while(true){
        [prev,curr]=[curr,prev+curr];
        yield prev;
    }
    return "end";   
}
//3.解构求斐波拉契数列
let [a,b,c]=fib();

