let figures = document.getElementsByTagName('figure');
let slideInterval = 4000;
let pointer = 0;

function moveForward() {
  for(let i = 0; i < figures.length; i++) {
    if(figures[i].className === 'visible') {
      figures[i].className = 'hidden';
      pointer = i;
    }
  }
  if (++pointer === figures.length) {
    pointer = 0;
  }
  figures[pointer].className = 'visible';
  setTimeout(moveForward, slideInterval);
}

function startPlayback() {
 setTimeout(moveForward, slideInterval);
}

startPlayback();
