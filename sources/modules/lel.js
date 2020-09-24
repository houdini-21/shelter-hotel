function foo(hi, callback) {
  console.log(hi);
  callback();
}
foo("hi", function () {
  console.log("finished");
});
