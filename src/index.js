// const getApiUrls = async () => {
//     const response = await fetch('https://rickandmortyapi.com/api');
//     return response.json();
// };

// const app = async () => {
//     try {
//         const data = await getApiUrls();
//         console.log(data);
//     } catch(e) {
//         console.log(e);
//     }    
// };

// app();

 
function getElemCoords(elem) { 
    var box = elem.getBoundingClientRect();
    return {
        x: box.left + pageXOffset, 
        y: box.top + pageYOffset
    };
}
  
var vertLine = document.getElementById('vertLine'), 
    horLine = document.getElementById('horLine'),
    showCase = document.getElementById('showCase'), 
    xx = getElemCoords(showCase).x, 
    yy = getElemCoords(showCase).y;

vertLine.style.height = showCase.offsetHeight + 'px';
horLine.style.width = showCase.offsetWidth + 'px';
  
showCase.onmouseenter = function(e) {
    vertLine.style.display = 'block';
    horLine.style.display = 'block';
}
  
document.addEventListener('mousemove', mov, true);

function mov(e) {
    console.log(yy+'_'+xx);

    vertLine.style.top = yy + 'px';
    vertLine.style.left = e.pageX + 'px';

    horLine.style.left = xx + 'px';
    horLine.style.top = e.pageY + 'px';
}