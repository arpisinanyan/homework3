let d = 4

  const threefunc = function(a, b, c) {
    d = d + a + b + c;
    return d;
  }
  

  const noarg = function( ) {
  	return ("Hi"); 
  }
  
  const noret = function(e, f) {
  	d = e + f; 
  }
  
  const string = function(x, y, z) {
    let l = x;
    if ( l.length > y.length) {
    } else {
      l = y;
    }
    if ( l.length > z.length ){
    } else {
      l = z;
    }
   
    return l;
  }
  
  const number = function (g, h) {
    if ( g === h) {
    	return 0;  
    } else if ( g > h ) {
     	return 1; 
    } else {
     	return -1; 
    }
  }
  
  const mult = function (i, j) {
    return i*j;
  }
  
  const divid = function (k, l) {
    return k/l;
  }
  
  const tri = function (base, height) {
    let area = mult(base, height);
    area = divid(area, 2);
    return area;
  }
  
  const numLength = function (m) {
    const n = m + " ";
    return n.length-1;
  }
  
   const numStr = function (num, str1, str2) {
    const str12 = str1 + str2;
     if(str12.length > num){
     	return 1;
     } else {
 		return -1;    
     }
  }
   
   const runStuff = function (num1, num2, str) {
     if (str === 'rectangle') {
     	return num1*num2;
     } else if (str === 'triangle') {
     	return tri(num1, num2);
     } else {
       	return -1;
     }
  }
   