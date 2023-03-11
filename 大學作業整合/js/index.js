
var f1 = document.getElementById("f1");
var c1 = document.getElementById("c1");

var fileReader = new FileReader();
f1.addEventListener("change", readimg);
fileReader.addEventListener("load", loadimg);
function readimg() {
	fileReader.readAsDataURL(f1.files[0]);
}
function loadimg() {
	i1.src = fileReader.result; c1.style.display = "none";
	i1.style.display = "inline-block";
}
/*第一個 */
function gogo() {
	c1.width = i1.width;
	c1.height = i1.height;
	var c2d = c1.getContext("2d");
	c2d.drawImage(i1, 0, 0);
	var imgData = c2d.getImageData(0, 0, c1.width, c1.height);

	for (var i = 0; i < imgData.data.length; i += 4) {
		imgData.data[i] = 255 - imgData.data[i];  //紅
		imgData.data[i + 1] = 255 - imgData.data[i + 1]; //綠
		imgData.data[i + 2] = 255 - imgData.data[i + 2]; //藍	  
	}
	c2d.putImageData(imgData, 0, 0);
	c1.style.display = "inline-block";
	i1.style.display = "none";
	f1.value = null;
}
/*第二個 */
function gray() {
	c1.width = i1.width;
	c1.height = i1.height;
	var c2d = c1.getContext("2d");
	c2d.drawImage(i1, 0, 0);
	var imgData = c2d.getImageData(0, 0, c1.width, c1.height);

	for (var i = 0; i < imgData.data.length; i += 4) {
		var 灰 = 0.299 * imgData.data[i] + 0.587 * imgData.data[i + 1] + 0.114 * imgData.data[i + 2]

		imgData.data[i] = 0.299 * (imgData.data[i]) + 0.587 * (imgData.data[i + 1]) + 0.114 * (imgData.data[i + 2]);  //紅
		imgData.data[i + 1] = 0.299 * (imgData.data[i]) + 0.587 * (imgData.data[i + 1]) + 0.114 * (imgData.data[i + 2]); //綠
		imgData.data[i + 2] = 0.299 * (imgData.data[i]) + 0.587 * (imgData.data[i + 1]) + 0.114 * (imgData.data[i + 2]); //藍	  
	}
	c2d.putImageData(imgData, 0, 0);
	c1.style.display = "inline-block";
	i1.style.display = "none";

}
/*第三個 */
function sepia() {
	c1.width = i1.width;
	c1.height = i1.height;
	var c2d = c1.getContext("2d");
	c2d.drawImage(i1, 0, 0);
	var imgData = c2d.getImageData(0, 0, c1.width, c1.height);

	for (var i = 0; i < imgData.data.length; i += 4) {
		var 復古紅 = 0.393 * (imgData.data[i]) + 0.769 * (imgData.data[i + 1]) + 0.189 * (imgData.data[i + 2])
		var 復古綠 = 0.349 * (imgData.data[i]) + 0.686 * (imgData.data[i + 1]) + 0.168 * (imgData.data[i + 2])
		var 復古藍 = 0.272 * (imgData.data[i]) + 0.534 * (imgData.data[i + 1]) + 0.131 * (imgData.data[i + 2])


		imgData.data[i] = 0.393 * (imgData.data[i]) + 0.769 * (imgData.data[i + 1]) + 0.189 * (imgData.data[i + 2]);  //紅
		imgData.data[i + 1] = 0.349 * (imgData.data[i]) + 0.686 * (imgData.data[i + 1]) + 0.168 * (imgData.data[i + 2]); //綠
		imgData.data[i + 2] = 0.272 * (imgData.data[i]) + 0.534 * (imgData.data[i + 1]) + 0.131 * (imgData.data[i + 2]); //藍	  
	}
	c2d.putImageData(imgData, 0, 0);
	c1.style.display = "inline-block";
	i1.style.display = "none";
}
/*第四個 */
var f1 = document.getElementById("f1");
var c1 = document.getElementById("c1");
var r1 = document.getElementById("r1");
var rtxt = document.getElementById("rtxt");
var g1 = document.getElementById("g1");
var gtxt = document.getElementById("gtxt");
var b1 = document.getElementById("b1");
var btxt = document.getElementById("btxt");

var fileReader = new FileReader();
f1.addEventListener("change", readimg);
fileReader.addEventListener("load", loadimg);
function readimg() {
	fileReader.readAsDataURL(f1.files[0]);
}
function loadimg() {
	i1.src = fileReader.result; c1.style.display = "none";
	i1.style.display = "inline-block";
}



function rangepro() {
	rtxt.value = r1.value;

	gtxt.value = g1.value;

	btxt.value = b1.value;
	ColourBalance(r1.value, g1.value, b1.value);
}
function textpro() {
	r1.value = rtxt.value
	g1.value = gtxt.value
	b1.value = btxt.value
	ColourBalance(rtxt.value, gtxt.value, btxt.value);
}
function ColourBalance(r, g, b) {
	c1.width = i1.width;
	c1.height = i1.height;
	var c2d = c1.getContext("2d");
	c2d.drawImage(i1, 0, 0);
	var imgData = c2d.getImageData(0, 0, c1.width, c1.height);
	var rr;
	var gg;
	var bb;
	for (var i = 0; i < imgData.data.length; i += 4) {

		if (imgData.data[i] < 128) rr = imgData.data[i] * (r / 300);
		else rr = (255 - imgData.data[i]) * (r / 300);
		if (imgData.data[i + 1] < 128) gg = imgData.data[i] * (g / 300);
		else gg = (imgData.data[i + 1]) * (g / 300);
		if (imgData.data[i + 2] < 128) bb = imgData.data[i] * (b / 300);
		else bb = (255 - imgData.data[i + 2][i]) * (b / 300);

		imgData.data[i] = imgData.data[i] + rr - (gg / 2) - (bb / 2);  //紅
		imgData.data[i + 1] = imgData.data[i + 1] + gg - (rr / 2) - (bb / 2); //綠
		imgData.data[i + 2] = imgData.data[i + 2] + bb - (rr / 2) - (gg / 2); //藍	  

	}
	c2d.putImageData(imgData, 0, 0);
	c1.style.display = "inline-block";
	i1.style.display = "none";
}

/*第五個 */


var f1 = document.getElementById("f1");
var c1 = document.getElementById("c1");

var fileReader = new FileReader();
f1.addEventListener("change", readimg);
fileReader.addEventListener("load", loadimg);
function readimg() {
	fileReader.readAsDataURL(f1.files[0]);
}
function loadimg() {
	i1.src = fileReader.result; c1.style.display = "none";
	i1.style.display = "inline-block";
}

function binary() {
	c1.width = i1.width;
	c1.height = i1.height;
	var c2d = c1.getContext("2d");
	c2d.drawImage(i1, 0, 0);
	var imgData = c2d.getImageData(0, 0, c1.width, c1.height);

	for (var i = 0; i < imgData.data.length; i += 4) {
		var 灰 = 0.299 * imgData.data[i] + 0.587 * imgData.data[i + 1] + 0.114 * imgData.data[i + 2]
		if (灰 >= 128) {
			imgData.data[i] = 255
			imgData.data[i + 1] = 255
			imgData.data[i + 2] = 255
		}
		else {
			imgData.data[i] = 0
			imgData.data[i + 1] = 0
			imgData.data[i + 2] = 0
		}

		imgData.data[i] = 0.299 * (imgData.data[i]) + 0.587 * (imgData.data[i + 1]) + 0.114 * (imgData.data[i + 2]);  //紅
		imgData.data[i + 1] = 0.299 * (imgData.data[i]) + 0.587 * (imgData.data[i + 1]) + 0.114 * (imgData.data[i + 2]); //綠
		imgData.data[i + 2] = 0.299 * (imgData.data[i]) + 0.587 * (imgData.data[i + 1]) + 0.114 * (imgData.data[i + 2]); //藍	  
	}
	c2d.putImageData(imgData, 0, 0);
	c1.style.display = "inline-block";
	i1.style.display = "none";

}

function dither() {
	c1.width = i1.width;
	c1.height = i1.height;
	var c2d = c1.getContext("2d");
	c2d.drawImage(i1, 0, 0);
	var imgData = c2d.getImageData(0, 0, c1.width, c1.height);
	var dmatrix = [[0, 128, 32, 160], [192, 64, 224, 96], [48, 176, 16, 144], [240, 112, 208, 80]];

	for (var x = 0; x < c1.width; x++) {
		for (var y = 0; y < c1.height; y++) {
			i = y * 4 * c1.width + 4 * x
			var 灰 = 0.299 * imgData.data[i] + 0.587 * imgData.data[i + 1] + 0.114 * imgData.data[i + 2]
			if (灰 >= dmatrix[y % 4][x % 4]) {
				imgData.data[i] = 255
				imgData.data[i + 1] = 255
				imgData.data[i + 2] = 255

			}
			else {
				imgData.data[i] = 0
				imgData.data[i + 1] = 0
				imgData.data[i + 2] = 0

			}
		}
	}

	c2d.putImageData(imgData, 0, 0);
	c1.style.display = "inline-block";
	i1.style.display = "none";

}

/*第六個*/

function process(choice) {
	c1.width = i1.width;
	c1.height = i1.height;
	var c2d = c1.getContext("2d");
	c2d.drawImage(i1, 0, 0);
	var imgData = c2d.getImageData(0, 0, c1.width, c1.height);
	var dmatrix = [[0, 128, 32, 160], [192, 64, 224, 96], [48, 176, 16, 144], [240, 112, 208, 80]];
	var r = [];
	var g = [];
	var b = [];
	for (var y = 0; y < i1.height; y++) {
		r[y] = [];
		g[y] = [];
		b[y] = [];
		for (var x = 0; x < i1.width; x++) {
			i = y * 4 * i1.width + 4 * x;
			r[y][x] = imgData.data[i];
			g[y][x] = imgData.data[i + 1];
			b[y][x] = imgData.data[i + 2];
		}
	}

	for (var y = 0; y < i1.height; y++) {
		for (var x = 0; x < i1.width; x++) {
			i = y * 4 * i1.width + 4 * x;
			imgData.data[i] = sharpening(r, y, x, choice);
			imgData.data[i + 1] = sharpening(g, y, x, choice);
			imgData.data[i + 2] = sharpening(b, y, x, choice);
		}
	}

	c2d.putImageData(imgData, 0, 0);
	c1.style.display = "inline-block";
}


function sharpening(rgbimg, y, x, choice) {
	var left = x - 1; if (left < 0) { left = 0 };
	var right = x + 1; if (right > i1.width - 1) { right = i1.width - 1 };
	var up = y - 1; if (up < 0) { up = 0 };
	var down = y + 1; if (down > i1.height - 1) { down = i1.height - 1 };
	if (choice = 1) {
		var sharpening = (rgbimg[up][left] * -1 + rgbimg[up][x] * -1 + rgbimg[up][right] * -1 + rgbimg[y][left] * -1 + rgbimg[y][x] * 16 + rgbimg[y][right] * -1 + rgbimg[down][left] * -1 + rgbimg[down][x] * -1 + rgbimg[down][right] * -1) / 8;
	}
	else {
		var sharpening = (rgbimg[up][left] * 0 + rgbimg[up][x] * -1 + rgbimg[up][right] * 0 + rgbimg[y][left] * -1 + rgbimg[y][x] * 5 + rgbimg[y][right] * -1 + rgbimg[down][left] * 0 + rgbimg[down][x] * -1 + rgbimg[down][right] * 0);
	}
	return sharpening;

}


/*邊緣偵測*/
function nofriend() {
	c1.width = i1.width;
	c1.height = i1.height;
	var c2d = c1.getContext("2d");
	c2d.drawImage(i1, 0, 0);
	var imgData = c2d.getImageData(0, 0, c1.width, c1.height);


	var gray = [];
	for (var y = 0; y < i1.height; y++) {

		gray[y] = [];
		for (var x = 0; x < i1.width; x++) {
			i = y * 4 * i1.width + 4 * x;
			gray[y][x] = 0.299 * imgData.data[i] + 0.587 * imgData.data[i + 1] + 0.114 * imgData.data[i + 2];


		}
	}

	for (var y = 0; y < i1.height; y++) {
		for (var x = 0; x < i1.width; x++) {
			i = y * 4 * i1.width + 4 * x;
			imgData.data[i] = imgData.data[i + 1] = imgData.data[i + 2] = Math.abs(edgex(gray, y, x)) + Math.abs(edgey(gray, y, x));



		}
	}

	c2d.putImageData(imgData, 0, 0);

}


function edgex(rgbimg, y, x) {
	var left = x - 1; if (left < 0) { left = 0 };
	var right = x + 1; if (right > i1.width - 1) { right = i1.width - 1 };
	var up = y - 1; if (up < 0) { up = 0 };
	var down = y + 1; if (down > i1.height - 1) { down = i1.height - 1 };


	var Gx = (-rgbimg[up][left] + rgbimg[up][x] * 0 + rgbimg[up][right] * 1 - 2 * rgbimg[y][left] + rgbimg[y][x] * 0 + rgbimg[y][right] * 2 - rgbimg[down][left] + rgbimg[down][x] * 0 + rgbimg[down][right]);

	return Gx;

}

function edgey(rgbimg, y, x) {
	var left = x - 1; if (left < 0) { left = 0 };
	var right = x + 1; if (right > i1.width - 1) { right = i1.width - 1 };
	var up = y - 1; if (up < 0) { up = 0 };
	var down = y + 1; if (down > i1.height - 1) { down = i1.height - 1 };

	var Gy = (-rgbimg[up][left] - 2 * rgbimg[up][x] - rgbimg[up][right] + rgbimg[y][left] * 0 + rgbimg[y][x] * 0 + rgbimg[y][right] * 0 + rgbimg[down][left] + 2 * rgbimg[down][x] + rgbimg[down][right]);



	return Gy;

}

/*素描*/

function draw() {
	c1.width = i1.width;
	c1.height = i1.height;
	var c2d = c1.getContext("2d");
	c2d.drawImage(i1, 0, 0);
	var imgData = c2d.getImageData(0, 0, c1.width, c1.height);



	var gray = [];
	var invgray = [];
	for (var y = 0; y < i1.height; y++) {

		gray[y] = [];
		invgray[y] = [];
		for (var x = 0; x < i1.width; x++) {
			i = y * 4 * i1.width + 4 * x;
			gray[y][x] = 0.299 * imgData.data[i] + 0.587 * imgData.data[i + 1] + 0.114 * imgData.data[i + 2];
			invgray[y][x] = 255 - (0.299 * imgData.data[i] + 0.587 * imgData.data[i + 1] + 0.114 * imgData.data[i + 2]);
		}
	}

	for (var y = 0; y < i1.height; y++) {
		for (var x = 0; x < i1.width; x++) {
			i = y * 4 * i1.width + 4 * x;

			minpx = getmin(invgray, y, x);

			sketchpx = gray[y][x] + ((gray[y][x] * minpx) / ((255 - minpx) + 1));

			imgData.data[i] = imgData.data[i + 1] = imgData.data[i + 2] = sketchpx;





		}
	}

	c2d.putImageData(imgData, 0, 0);

}

function colordraw() {
	c1.width = i1.width;
	c1.height = i1.height;
	var c2d = c1.getContext("2d");
	c2d.drawImage(i1, 0, 0);
	var imgData = c2d.getImageData(0, 0, c1.width, c1.height);

	var r = [];
	var g = [];
	var b = [];
	var invr = [];
	var invg = [];
	var invb = [];
	for (var y = 0; y < i1.height; y++) {


		r[y] = [];
		g[y] = [];
		b[y] = [];

		invr[y] = [];
		invg[y] = [];
		invb[y] = [];
		for (var x = 0; x < i1.width; x++) {
			i = y * 4 * i1.width + 4 * x;
			r[y][x] = imgData.data[i];
			g[y][x] = imgData.data[i + 1];
			b[y][x] = imgData.data[i + 2];
			invr[y][x] = 255 - r[y][x];
			invg[y][x] = 255 - g[y][x];
			invb[y][x] = 255 - b[y][x];
		}
	}

	for (var y = 0; y < i1.height; y++) {
		for (var x = 0; x < i1.width; x++) {
			i = y * 4 * i1.width + 4 * x;

			minpx = getmin(invr, y, x);
			minpxg = getmin(invg, y, x);
			minpxb = getmin(invb, y, x);

			sketchpx = r[y][x] + ((r[y][x] * minpx) / ((255 - minpx) + 1));
			sketchpxg = g[y][x] + ((g[y][x] * minpxg) / ((255 - minpxg) + 1));
			sketchpxb = b[y][x] + ((b[y][x] * minpxb) / ((255 - minpxb) + 1));

			imgData.data[i] = sketchpx;
			imgData.data[i + 1] = sketchpxg;
			imgData.data[i + 2] = sketchpxb;
		}
	}

	c2d.putImageData(imgData, 0, 0);

}

function edgex(rgbimg, y, x) {
	var left = x - 1; if (left < 0) { left = 0 };
	var right = x + 1; if (right > i1.width - 1) { right = i1.width - 1 };
	var up = y - 1; if (up < 0) { up = 0 };
	var down = y + 1; if (down > i1.height - 1) { down = i1.height - 1 };


	var Gx = (-rgbimg[up][left] + rgbimg[up][x] * 0 + rgbimg[up][right] * 1 - 2 * rgbimg[y][left] + rgbimg[y][x] * 0 + rgbimg[y][right] * 2 - rgbimg[down][left] + rgbimg[down][x] * 0 + rgbimg[down][right]);

	return Gx;

}

function edgey(rgbimg, y, x) {
	var left = x - 1; if (left < 0) { left = 0 };
	var right = x + 1; if (right > i1.width - 1) { right = i1.width - 1 };
	var up = y - 1; if (up < 0) { up = 0 };
	var down = y + 1; if (down > i1.height - 1) { down = i1.height - 1 };

	var Gy = (-rgbimg[up][left] - 2 * rgbimg[up][x] - rgbimg[up][right] + rgbimg[y][left] * 0 + rgbimg[y][x] * 0 + rgbimg[y][right] * 0 + rgbimg[down][left] + 2 * rgbimg[down][x] + rgbimg[down][right]);

	return Gy;

}

function getmin(rgbimg, y, x) {
	var left = x - 1; if (left < 0) { left = 0 };
	var right = x + 1; if (right > i1.width - 1) { right = i1.width - 1 };
	var up = y - 1; if (up < 0) { up = 0 };
	var down = y + 1; if (down > i1.height - 1) { down = i1.height - 1 };
	var minvalue = Math.min(rgbimg[up][left], rgbimg[up][x], rgbimg[up][right], rgbimg[y][left], rgbimg[y][x], rgbimg[y][right], rgbimg[down][left], rgbimg[down][x], rgbimg[down][right]);
	return minvalue;
}

/*smothing*/

function smothing() {
	c1.width = i1.width;
	c1.height = i1.height;
	var c2d = c1.getContext("2d");
	c2d.drawImage(i1, 0, 0);
	var imgData = c2d.getImageData(0, 0, c1.width, c1.height);
	var dmatrix = [[0, 128, 32, 160], [192, 64, 224, 96], [48, 176, 16, 144], [240, 112, 208, 80]];
	var r = [];
	var g = [];
	var b = [];
	for (var y = 0; y < i1.height; y++) {
		r[y] = [];
		g[y] = [];
		b[y] = [];
		for (var x = 0; x < i1.width; x++) {
			i = y * 4 * i1.width + 4 * x;
			r[y][x] = imgData.data[i];
			g[y][x] = imgData.data[i + 1];
			b[y][x] = imgData.data[i + 2];//紅
		}
	}

	for (var y = 0; y < i1.height; y++) {
		for (var x = 0; x < i1.width; x++) {
			i = y * 4 * i1.width + 4 * x;
			imgData.data[i] = smoothing1(r, y, x);
			imgData.data[i + 1] = smoothing1(g, y, x);
			imgData.data[i + 2] = smoothing1(b, y, x);
		}
	}




	function smoothing1(rgbimg, y, x) {
		var left = x - 1; if (left < 0) { left = 0 };
		var right = x + 1; if (right > i1.width - 1) { right = i1.width - 1 };
		var up = y - 1; if (up < 0) { up = 0 };
		var down = y + 1; if (down > i1.height - 1) { down = i1.height - 1 };
		var smoothpx = (rgbimg[up][left] + rgbimg[up][x] + rgbimg[up][right] + rgbimg[y][left] + rgbimg[y][x] + rgbimg[y][right] + rgbimg[down][left] + rgbimg[down][x] + rgbimg[down][right]) / 9;

		return smoothpx;

	}






	c2d.putImageData(imgData, 0, 0);
	c1.style.display = "inline-block";




}

