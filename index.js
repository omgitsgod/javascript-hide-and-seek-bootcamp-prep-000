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
  var yarrrr=document.getElementById("grand-node").querySelectorAll("div");
  var perhaps;
  for(let i=0;i<yarrrr.length-1;i++) {
    perhaps=yarrrr.querySelector("div");
  }
return perhaps;
}