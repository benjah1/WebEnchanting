function (a) {
    if (!document.getElementById("starWar") || !(elem = document.getElementById("starWar")).parentNode.removeChild(elem)) {
        s = document.getElementsByTagName("head")[0].appendChild(document.createElement("style"));
        s.setAttribute("id", "starWar");
        s.appendChild(document.createTextNode("div#doc{width:800px;margin:0 auto;height:5000px;font-size:150%;}div#page-outer{background-color:rgba(0,0,0,0.5);width:900px;position:fixed;bottom:0px;-webkit-transform:matrix3d(1.5,0,0,0,0,0.85,0,-0.003,0,0,1,0,0,90,0,2.2);-webkit-transform-style:preserve-3d;-moz-transform:matrix3d(1.5,0,0,0,0,1,0,-0.004,0,0,1,0,0,90,0,2.6);-moz-transform-style:preserve-3d;-o-transform:matrix3d(1.5,0,0,0,0,1,0,-0.004,0,0,1,0,0,90,0,2.6);-o-transform-style:preserve-3d;-ms-transform:matrix3d(1.5,0,0,0,0,1,0,-0.004,0,0,1,0,0,90,0,2.6);-ms-transform-style:preserve-3d;transform:matrix3d(1.5,0,0,0,0,1,0,-­0.004,0,0,1,0,0,90,0,2.6);transform-style:preserve-3d;}div#page-outer>div#page-container{height:100%;overflow:hidden;}div#page-outer>div#page-container>div#page-node-home{margin-top:800px;}"));
        var f = function () {
                var a = 630,
                    c = 460;
                document.body && document.body.offsetWidth && (a = document.body.offsetWidth, c = document.body.offsetHeight);
                "CSS1Compat" == document.compatMode && document.documentElement && document.documentElement.offsetWidth && (a = document.documentElement.offsetWidth, c = document.documentElement.offsetHeight);
                window.innerWidth && window.innerHeight && (a = window.innerWidth, c = window.innerHeight);
                return {
                    width: a,
                    height: c
                }
            };
        a(window).scroll(function () {
            d();
            a("div#page-outer>div#page-container").scrollTop(a(this).scrollTop() / 2)
        });
        a("div#page-outer").css("bottom", "0px");
        var d = function () {
                var b = f();
                a("div#page-outer").stop().animate({
                    height: 1.15 * b.height + "px",
                    bottom: "0px"
                }, function () {
                    a("div#page-outer>div#page-container>div#page-node-home").stop().animate({
                        margin: b.height + "px 0"
                    }, function () {
                        a("div#doc").css("height", 2 * (a("div#page-outer>div#page-container>div#page-node-home>div.content-main").height() + 2 * b.height) + "px");
                        a(window).scrollTop(a(window).scrollTop() - 2 * (e.height - b.height));
                        e = b
                    })
                })
            };
        (function () {
            window.setInterval(function () {
                a(window).scrollTop(a(window).scrollTop() + 2);
                e.height == a(window).scrollTop() && a(window).scrollTop(0)
            }, 100)
        })();
        var e = f();
        a(window).resize(d);
        d()
    }
}
