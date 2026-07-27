let banner = document.querySelector('.banner');
banner.onmousemove = fuction(e){
 let x = e.pagex - banner.offsetLeft;
 let y = e.pagey - banner.offsetTop;
 banner.style.setProperty('--x', x + 'px');
 banner.style.setProperty('--y', y + 'px');
