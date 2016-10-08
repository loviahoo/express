var express = require('express');

var fortuneCookies = [
    "Conquer your fears or they will conquer you.",
    "River need springs.",
    "Do not fear what you don't know",
    "You will havea pleasant surprise",
    "whenever posiible,keep it simple."
];

exports.getFortune = function(){
  var idx = Math.floor(Math.random()*fortuneCookies.length);
  return fortunes[idx]
}

//这里要注意全局变量输出的方法，如果你想让一个东西在模块外可见，必须把它加到exports上，在这个例子中，在模块外可以访问到函数getFortune，但数组fortuneCookies是完全隐藏起来的。这是一件好事，因为封装可以减少容易出错和较脆弱的代码