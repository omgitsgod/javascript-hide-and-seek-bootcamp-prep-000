function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}


function increaseRankBy(n) {
  const ranky = document.querySelectorAll('#ranked-list')
  
  for (var i = 0; i < ranky.length; i++ ) {
    ranky[i].innerHTML = parseInt(rank[i].innerHTML + n)
  }
}

function deepestChild() {
  
}