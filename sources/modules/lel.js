function foo(lel,callback) {
   console.log("hello")
   callback();
}
foo('hi',function(){console.log("finished")});