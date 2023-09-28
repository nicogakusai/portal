let illustArray = [
    "1st_1.png",
    "1st_2.png",
    "2nd_1.png",
    "2nd_2.png",
    "3rd.png",
    "4th.png",
    "5th.png",
	"10th.jpg"
];

let illustNo = Math.floor(Math.random()*illustArray.length);

document.write("<img class=\"top_img\" src=\"parts/index/" + illustArray[illustNo] + "\">")




  
  
  