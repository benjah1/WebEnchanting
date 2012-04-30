function() {
    var windowSize = function () {
            var winW = 630,
                winH = 460;
            if (document.body && document.body.offsetWidth) {
                winW = document.body.offsetWidth;
                winH = document.body.offsetHeight;
            }
            if (document.compatMode == 'CSS1Compat' && document.documentElement && document.documentElement.offsetWidth) {
                winW = document.documentElement.offsetWidth;
                winH = document.documentElement.offsetHeight;
            }
            if (window.innerWidth && window.innerHeight) {
                winW = window.innerWidth;
                winH = window.innerHeight;
            }
            return {
                width: winW,
                height: winH
            };
        };
    var pageSize = function () {
            var viewportWidth, viewportHeight;
            if (window.innerHeight && window.scrollMaxY) {
                viewportWidth = document.body.scrollWidth;
                viewportHeight = window.innerHeight + window.scrollMaxY;
            } else if (document.body.scrollHeight > document.body.offsetHeight) {
                viewportWidth = document.body.scrollWidth;
                viewportHeight = document.body.scrollHeight;
            } else {
                viewportWidth = document.body.offsetWidth;
                viewportHeight = document.body.offsetHeight;
            }
            return {
                width: viewportWidth,
                height: viewportHeight
            };
        };
    var s = (document.getElementsByTagName('head')[0]).appendChild(document.createElement('style'));
    s.setAttribute('id', 'Christmas2011');
    s.appendChild(document.createTextNode('div.sw{background-color: #FFFFFF; border: 2px solid rgba(0, 0, 0, 0.5); position: fixed;-moz-border-radius: 10px;border-radius: 10px;}'));
    var snowArr = [],
        max = 100,
        lag = 0,
        wx = 0,
        ox = 0,
        ss = windowSize();
    var snow = function () {
            var elm, dy, tx, d = 1,
                timer = 0;
            this.x = 0;
            this.y = 0;
            this.size = 0;
            this.update = function () {
                if (Math.abs(wx) > 10) {
                    this.x = tx += wx / 20;
                } else if (Math.abs(tx - this.x) > 1) {
                    this.x += d / 5;
                } else { /* d = -d;tx = this.x + d * (10 + Math.random() * 30);*/
                }
                this.y += dy;
            };
            this.draw = function () {
                elm.style.left = this.x + 'px';
                elm.style.top = this.y + 'px';
            };
            this.addToScreen = function (size, width) {
                var b = document.body;
                this.x = tx = Math.random() * width;
                this.size = 5 + Math.random() * size;
                dy = 2 + (0.5 - 2) * ((this.size - 5) / (size));
                elm = document.createElement('div');
                elm.className = 'sw';
                elm.style.width = this.size + 'px';
                elm.style.height = this.size + 'px';
                elm.style.zIndex = (9000 + Math.ceil(this.size * 10)) + '';
                b.appendChild(elm);
                return elm;
            };
            this.end = function (k) {
                if (k == 0) {
                    elm.style.top = '';
                    elm.style.bottom = '0px';
                } else if (k == 1) {
                    elm.style.left = '0px';
                } else if (k == 2) {
                    elm.style.left = '';
                    elm.style.right = '0px';
                }
                setTimeout(function () {
                    var o = 1,
                        t = setInterval(function () {
                            elm.style.opacity = o + '';
                            o -= 0.05;
                        }, 50);
                    setTimeout(function () {
                        clearInterval(t);
                        document.body.removeChild(elm);
                    }, 1000);
                }, 10000);
            };
            this.remove = function () {
                document.body.removeChild(elm);
            };
        };
    document.body.onmousemove = function (e) {
        var x = parseInt(e.clientX, 10),
            t = Math.abs(x - ox);
        if (t > 100 && t < 500) {
            t = 30 + (60 - 30) * ((t - 50) / (500 - 100));
            if (t > Math.abs(wx)) {
                wx = x > ox ? t : -t;
            }
        }
        ox = x;
        return true;
    };
    setInterval(function () {
        ss = windowSize();
        --lag;
        if (lag < 0) {
            lag = 5 + Math.random() * 25;
            var s = new snow();
            s.addToScreen(15, ss.width);
            snowArr.push(s);
        }
        for (var i = 0; i < snowArr.length; ++i) {
            var s = snowArr[i];
            s.update();
            if ((s.y + s.size + 5) > ss.height) {
                s.end(0);
                snowArr.splice(i, 1);
            } else if (s.x < 0) {
                s.end(1);
                snowArr.splice(i, 1);
            } else if ((s.x + s.size + 5) > ss.width) {
                s.end(2);
                snowArr.splice(i, 1);
            } else {
                s.draw();
            }
        }
        if (Math.abs(wx) > 1) {
            wx += (-wx) / 300;
        }
    }, 10);
}
