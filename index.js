function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}


function increaseRankBy(n) {
  const ranky = document.querySelectorAll('ul.ranked-list li')
  
  for (var i = 0; i < ranky.length; i++ ) {
    ranky[i].innerHTML = parseInt(ranky[i].innerHTML) + n;
  }
}

function deepestChild() {
  var lis=document.getElementById("grand-node").querySelectorAll("div");
  var test;
  for(let i=0;i<lis.length-1;i++) {
    test=lis[i].querySelector("div");
  }
return test;
}