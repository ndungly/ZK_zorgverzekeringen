if (window.VarCurrentView) VarCurrentView.set('Desktop');
function init_Desktop() {
	if ( rcdObj.view != 'Desktop' ) return;
	if (!isOPAPub() || isLOPopup()) window.init_page();
	preload(rcdObj['preload_'+rcdObj.view]);
}
function defineFuncs_Desktop() {
	if ( rcdObj.view != 'Desktop' ) return;
	try{
		if (window.initGEV)
		{
		 initGEV(0,swipeLeft,swipeRight);

		}
		} catch(e) { if (window.console) window.console.log(e); }	pageClick = n;
	pageRClick = n;
	pageKey = n;
}
og4.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og4",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
shape223.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 1366 78\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(683 39)\" style=\"\">\n	<path d=\"M 0 0 L 1366 0 L 1366 78 L 0 78 L 0 0 Z\" style=\"stroke: rgb(238, 238, 238); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-683, -39) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(683 39)\">\n		<text font-family=\"Verdana\" font-size=\"-19.9999995\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(125,96,62); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"-6.3\" fill=\"#7D603E\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 0px; top: 2.89901e-12px; width: 1366px; height: 78px; z-index: 4; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj223",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Header"
	},
	objData:	{"a":[0,160,0,[0,2.8990143619012088e-12,1366,78]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":0,"width":1366,"height":78},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape16.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton221.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 150 58\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(75 29)\" style=\"\">\n	<path d=\"M 0 0 L 150 0 L 150 58 L 0 58 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_3847_368_10907\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"150\" height=\"58\" xlink:href=\"images/Button_sluit_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 150 0 L 150 58 L 0 58 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_3847_368_10907&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(75 29)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 1202px; top: 10px; width: 150px; height: 58px; z-index: 5; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj221",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Button sluit",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkExitClose',actItem:function(){ {cleanupTitle('zk_zorgverzekeringen.html'); trivExitPage('ObjLayerActionExit()',false);} 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33184,0,[1202,10.000000000000302,150,58]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1202,"y":10,"width":150,"height":58},"imgDataNormal":"images/desktop_shape17.png","imgDataOver":"images/desktop_shape17.png","imgDataDown":"images/desktop_shape17.png","imgDataDisabled":"images/desktop_shape17_disabled.png","svgDataNormal":"<g transform=\"translate(75 29)\" style=\"\">\n\t<path d=\"M 0 0 L 150 0 L 150 58 L 0 58 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_3847_368_10907\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"150\" height=\"58\" xlink:href=\"images/Button_sluit_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 150 0 L 150 58 L 0 58 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_3847_368_10907&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(75 29)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(75 29)\" style=\"\">\n\t<path d=\"M 0 0 L 150 0 L 150 58 L 0 58 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_3847_368_10909\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"150\" height=\"58\" xlink:href=\"images/Button_sluit_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 150 0 L 150 58 L 0 58 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_3847_368_10909&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(75 29)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(75 29)\" style=\"\">\n\t<path d=\"M 0 0 L 150 0 L 150 58 L 0 58 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_3847_368_10911\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"150\" height=\"58\" xlink:href=\"images/Button_sluit_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 150 0 L 150 58 L 0 58 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_3847_368_10911&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(75 29)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(75 29)\" style=\"\">\n\t<path d=\"M 0 0 L 150 0 L 150 58 L 0 58 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_3847_368_10913\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"150\" height=\"58\" xlink:href=\"images/Button_sluit_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 150 0 L 150 58 L 0 58 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_3847_368_10913&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(75 29)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton2674.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 125 58\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(62.5 29)\" style=\"\">\n	<path d=\"M 0 0 L 125 0 L 125 58 L 0 58 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-62.5, -29) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_3847_368_10915\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"125\" height=\"58\" xlink:href=\"images/Button_menu_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 125 0 L 125 58 L 0 58 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_3847_368_10915&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-62.5, -29) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(62.5 29)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 1066px; top: 10px; width: 125px; height: 58px; z-index: 6; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj2674",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Button menu",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkGoTo',actItem:function(){ trivExitPage('zk_zorgverzekeringen_hoofdmenu_hoofdmenu.html',true,false);
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33056,0,[1065.9999999999998,10.000000000000242,125,58]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1066,"y":10,"width":125,"height":58},"imgDataNormal":"images/desktop_shape2674.png","imgDataOver":"images/desktop_shape2674.png","imgDataDown":"images/desktop_shape2674.png","imgDataDisabled":"images/desktop_shape2674_disabled.png","svgDataNormal":"<g transform=\"translate(62.5 29)\" style=\"\">\n\t<path d=\"M 0 0 L 125 0 L 125 58 L 0 58 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-62.5, -29) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_3847_368_10915\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"125\" height=\"58\" xlink:href=\"images/Button_menu_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 125 0 L 125 58 L 0 58 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_3847_368_10915&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-62.5, -29) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(62.5 29)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(62.5 29)\" style=\"\">\n\t<path d=\"M 0 0 L 125 0 L 125 58 L 0 58 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-62.5, -29) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_3847_368_10917\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"125\" height=\"58\" xlink:href=\"images/Button_menu_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 125 0 L 125 58 L 0 58 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_3847_368_10917&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-62.5, -29) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(62.5 29)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(62.5 29)\" style=\"\">\n\t<path d=\"M 0 0 L 125 0 L 125 58 L 0 58 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-62.5, -29) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_3847_368_10919\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"125\" height=\"58\" xlink:href=\"images/Button_menu_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 125 0 L 125 58 L 0 58 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_3847_368_10919&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-62.5, -29) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(62.5 29)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(62.5 29)\" style=\"\">\n\t<path d=\"M 0 0 L 125 0 L 125 58 L 0 58 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-62.5, -29) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_3847_368_10921\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"125\" height=\"58\" xlink:href=\"images/Button_menu_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 125 0 L 125 58 L 0 58 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_3847_368_10921&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-62.5, -29) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(62.5 29)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text228.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 403px; min-height: 77px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 393px; min-height: 67px;\"><p style=\"margin-left: 0px; text-indent: 0px; margin-top: 0px; margin-bottom: 0px; text-align: center;\"><strong><span style=\"font-size:16pt; font-family: &quot;Titillium Web&quot;, sans-serif; color: rgb(0, 104, 189);\">Zorgverzekeringen</span></strong></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 482px; top: 7px; width: 403px; height: 77px; z-index: 7;",
	cssClasses:	"header-module-title",
	htmlId:		"tobj228",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Module title"
	},
	objData:	{"a":[0,32,0,[482,7,403,77]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":482,"y":7,"width":403,"height":77},"dwTextFlags":0,"marginSize":5,"textPublishLang":"Inherit"}
};
image219.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj219Img\" src=\"images/Logo-ZK.jpg\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 134px; height: 41px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 21px; top: 19px; width: 134px; height: 41px; z-index: 8;",
	cssClasses:	"",
	htmlId:		"tobj219",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Logo-ZK"
	},
	objData:	{"a":[0,416,0,[21,19,134,41]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":21,"y":19,"width":134,"height":41}}
};
shape218.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 1366 690\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(683 345)\" style=\"\">\n	<path d=\"M 0 0 L 1366 0 L 1366 690 L 0 690 L 0 0 Z\" style=\"stroke: rgb(238, 238, 238); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(224, 245, 244); fill-rule: nonzero; opacity:0.85;filter:alpha(opacity=85); pointer-events: auto;\" transform=\"translate(0 0) translate(-683, -345) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(683 345)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:0.85;filter:alpha(opacity=85);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: -1.93268e-12px; top: 78px; width: 1366px; height: 690px; z-index: 9; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj218",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Overlay"
	},
	objData:	{"a":[0,160,0,[-1.9326762412674725e-12,78.0000000000029,1366,690]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":78,"width":1366,"height":690},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape21.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px; opacity: 0.85;\">"}
};
text236.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 396px; min-height: 80px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 396px; min-height: 80px;\"><p align=\"center\" style=\"margin-left:0px;text-indent:0px;margin-top:0px;margin-bottom:0px;\"><span style=\"font-size:12pt; font-family: &quot;Titillium Web&quot;, sans-serif; color: rgb(0, 104, 189);\">Eigen risico en eigen bijdrage</span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 484px; top: 43px; width: 396px; height: 80px; z-index: 10;",
	cssClasses:	"header-module-subtitle",
	htmlId:		"tobj236",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Module subtitle"
	},
	objData:	{"a":[0,32,0,[484,43,396,80]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":484,"y":43,"width":396,"height":80},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
textbutton2846.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 34 34\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(17 17)\" style=\"\">\n	<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_3847_3332_11195\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"34\" height=\"34\" xlink:href=\"images/Button_vorige.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_3847_3332_11195&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(17 17)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 38px; top: 388px; width: 34px; height: 34px; z-index: 38; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj2846",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Vorige",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkGoTo',actItem:function(){ trivExitPage('zk_zorgverzekeringen_hoofdstukken_h2_intro_test_vraag_3.html',false,false);
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33120,0,[37.999999999999986,388,34,34]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":38,"y":388,"width":34,"height":34},"imgDataNormal":"images/desktop_shape264.png","imgDataOver":"images/desktop_shape264_over.png","imgDataDown":"images/desktop_shape264.png","imgDataDisabled":"images/desktop_shape264_disabled.png","svgDataNormal":"<g transform=\"translate(17 17)\" style=\"\">\n\t<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_3847_3332_11195\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"34\" height=\"34\" xlink:href=\"images/Button_vorige.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_3847_3332_11195&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(17 17)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(17 17)\" style=\"\">\n\t<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_3847_3332_11197\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"34\" height=\"34\" xlink:href=\"images/Button_vorige_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_3847_3332_11197&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(17 17)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(17 17)\" style=\"\">\n\t<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_3847_3332_11199\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"34\" height=\"34\" xlink:href=\"images/Button_vorige.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_3847_3332_11199&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(17 17)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(17 17)\" style=\"\">\n\t<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_3847_3332_11201\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"34\" height=\"34\" xlink:href=\"images/Button_vorige.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_3847_3332_11201&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(17 17)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton2844.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 34 34\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(17 17)\" style=\"\">\n	<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_3847_3332_11203\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"34\" height=\"34\" xlink:href=\"images/Button_volgende.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_3847_3332_11203&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(17 17)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 1295px; top: 388px; width: 34px; height: 34px; z-index: 39; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj2844",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Volgende",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkGoTo',actItem:function(){ trivExitPage('zk_zorgverzekeringen_hoofdstukken_h2_intro_test_vraag_5.html',true,false);
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33088,0,[1295,388,34,34]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1295,"y":388,"width":34,"height":34},"imgDataNormal":"images/desktop_shape261.png","imgDataOver":"images/desktop_shape261_over.png","imgDataDown":"images/desktop_shape261.png","imgDataDisabled":"images/desktop_shape261_disabled.png","svgDataNormal":"<g transform=\"translate(17 17)\" style=\"\">\n\t<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_3847_3332_11203\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"34\" height=\"34\" xlink:href=\"images/Button_volgende.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_3847_3332_11203&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(17 17)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(17 17)\" style=\"\">\n\t<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_3847_3332_11205\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"34\" height=\"34\" xlink:href=\"images/Button_volgende_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_3847_3332_11205&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(17 17)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(17 17)\" style=\"\">\n\t<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_3847_3332_11207\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"34\" height=\"34\" xlink:href=\"images/Button_volgende.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_3847_3332_11207&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(17 17)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(17 17)\" style=\"\">\n\t<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_3847_3332_11209\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"34\" height=\"34\" xlink:href=\"images/Button_volgende.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_3847_3332_11209&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(17 17)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape2843.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 1138 597\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(569 298.5)\" style=\"\">\n	<path d=\"M 7.12 0 L 1130.88 0 A 7.12 7.12 0 0 1 1138 7.12 L 1138 589.88 A 7.12 7.12 0 0 1 1130.88 597 L 7.12 597 A 7.12 7.12 0 0 1 0 589.88 L 0 7.12 A 7.12 7.12 0 0 1 7.12 0 Z\" style=\"stroke: rgb(126, 187, 194); stroke-width: 0; stroke-dasharray: 1, 2; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-569, -298.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(569 298.5)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 114px; top: 116px; width: 1138px; height: 597px; z-index: 11; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj2843",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rounded Rectangle"
	},
	objData:	{"a":[0,32,0,[113.99999999999955,116.00000000000045,1138,597]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":114,"y":116,"width":1138,"height":597},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape275.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
qu3218.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"qu3218",
	bInsAnc:	undefined,
	cwObj:		{
				"crLineColor":	"",
				"questType":	2,
				"dwQuestFlags":	8,
				"doImmFeedback":	0,
				"maxAllowedAttempts":	0,
				"arrAns":	["\\u0043\\u0068\\u006F\\u0069\\u0063\\u0065\\u0020\\u004F\\u006E\\u0065"],
				"correctFeedbackFunc":	0,
				"incorrectFeedbackFunc":	0,
				"attemptsFeedbackFunc":	0,
				"varQuest":	VarQ2_score
	},
	objData:	{"a":[0,32,0,[]]}
};
text3219.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"visibility: inherit; position: absolute; left: -171px; top: 134px; width: 113px; height: 20px; z-index: 12;",
	cssClasses:	"",
	htmlId:		"tobj3219",
	bInsAnc:	0,
	fieldsetId:	'fset3218',
	cwObj:		{
		"name":	"Question Text"
	},
	objData:	{"a":[0,32,0,[-171,134,113,20]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":-171,"y":134,"width":113,"height":20},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text3220.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"visibility: inherit; position: absolute; left: -142px; top: 164px; width: 99px; height: 20px; z-index: 13;",
	cssClasses:	"",
	htmlId:		"tobj3220",
	bInsAnc:	0,
	fieldsetId:	'fset3218',
	cwObj:		{
		"name":	"Choice 1 text"
	},
	objData:	{"a":[0,32,0,[-142,164,99,20]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":-142,"y":164,"width":99,"height":20},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
radio3221.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"visibility: inherit; position: absolute; left: -171px; top: 164px; width: 19px; height: 19px; z-index: 14;",
	cssClasses:	"",
	htmlId:		"tobj3221",
	bInsAnc:	0,
	fieldsetId:	'fset3218',
	cwObj:		{
		"name":	"Choice 1 button"
	},
	objData:	{"a":[0,32,0,[-171,164,19,19]],"desktopRect":{"x":-171,"y":164,"width":19,"height":19},"formType":1,"dwFormFlags":0}
};
og3850.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og3850",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
og3857.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og3857",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
og3861.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og3861",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
og3865.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og3865",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
textbutton3871.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 97 39\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(48.5 19.5)\" style=\"\">\n	<path d=\"M 0 0 L 97 0 L 97 39 L 0 39 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-48.5, -19.5) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_3847_11243\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"97\" height=\"39\" xlink:href=\"images/Button_check_groot_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 97 0 L 97 39 L 0 39 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_3847_11243&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-48.5, -19.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(48.5 19.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 636px; top: 614px; width: 97px; height: 39px; z-index: 40; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj3871",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Button check",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkRunActGrp',actItem:function(){ {og3850.issueActions(1001);}
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ shape3915.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ textbutton2844.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ VarQ2.add('_04'); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ if(VarQuestion_3879.equals('C'))VarQ2_score.add('1'); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkRunActGrp',actItem:function(){ {og3861.issueActions(1001);}
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ textbutton3871.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33088,0,[636,614,97,39]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":636,"y":614,"width":97,"height":39},"imgDataNormal":"images/desktop_shape480.png","imgDataOver":"images/desktop_shape480_over.png","imgDataDown":"images/desktop_shape480.png","imgDataDisabled":"images/desktop_shape480_disabled.png","svgDataNormal":"<g transform=\"translate(48.5 19.5)\" style=\"\">\n\t<path d=\"M 0 0 L 97 0 L 97 39 L 0 39 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-48.5, -19.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_3847_11243\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"97\" height=\"39\" xlink:href=\"images/Button_check_groot_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 97 0 L 97 39 L 0 39 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_3847_11243&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-48.5, -19.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(48.5 19.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(48.5 19.5)\" style=\"\">\n\t<path d=\"M 0 0 L 97 0 L 97 39 L 0 39 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-48.5, -19.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_3847_11245\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"97\" height=\"39\" xlink:href=\"images/Button_check_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 97 0 L 97 39 L 0 39 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_3847_11245&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-48.5, -19.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(48.5 19.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(48.5 19.5)\" style=\"\">\n\t<path d=\"M 0 0 L 97 0 L 97 39 L 0 39 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-48.5, -19.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_3847_11247\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"97\" height=\"39\" xlink:href=\"images/Button_check_groot_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 97 0 L 97 39 L 0 39 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_3847_11247&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-48.5, -19.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(48.5 19.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(48.5 19.5)\" style=\"\">\n\t<path d=\"M 0 0 L 97 0 L 97 39 L 0 39 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-48.5, -19.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_3847_11249\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"97\" height=\"39\" xlink:href=\"images/Button_check_groot_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 97 0 L 97 39 L 0 39 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_3847_11249&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-48.5, -19.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(48.5 19.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
qu3879.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"qu3879",
	bInsAnc:	undefined,
	cwObj:		{
				"crLineColor":	"",
				"questType":	2,
				"dwQuestFlags":	8,
				"doImmFeedback":	0,
				"maxAllowedAttempts":	0,
				"arrAns":	["\\u0043\\u0068\\u006F\\u0069\\u0063\\u0065\\u0020\\u004F\\u006E\\u0065"],
				"correctFeedbackFunc":	0,
				"incorrectFeedbackFunc":	0,
				"attemptsFeedbackFunc":	0,
				"varQuest":	VarQuestion_3879
	},
	objData:	{"a":[0,32,0,[]]}
};
text3880.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"visibility: inherit; position: absolute; left: -177px; top: 30px; width: 113px; height: 20px; z-index: 15;",
	cssClasses:	"",
	htmlId:		"tobj3880",
	bInsAnc:	0,
	fieldsetId:	'fset3879',
	cwObj:		{
		"name":	"Question Text"
	},
	objData:	{"a":[0,32,0,[-177,30,113,20]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":-177,"y":30,"width":113,"height":20},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text3881.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"visibility: inherit; position: absolute; left: -148px; top: 60px; width: 99px; height: 20px; z-index: 16;",
	cssClasses:	"",
	htmlId:		"tobj3881",
	bInsAnc:	0,
	fieldsetId:	'fset3879',
	cwObj:		{
		"name":	"Choice 1 text"
	},
	objData:	{"a":[0,32,0,[-148,60,99,20]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":-148,"y":60,"width":99,"height":20},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
radio3882.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"visibility: inherit; position: absolute; left: -177px; top: 60px; width: 19px; height: 19px; z-index: 17;",
	cssClasses:	"",
	htmlId:		"tobj3882",
	bInsAnc:	0,
	fieldsetId:	'fset3879',
	cwObj:		{
		"name":	"Choice 1 button"
	},
	objData:	{"a":[0,32,0,[-177,60,19,19]],"desktopRect":{"x":-177,"y":60,"width":19,"height":19},"formType":1,"dwFormFlags":0}
};
qu3883.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"qu3883",
	bInsAnc:	undefined,
	cwObj:		{
				"crLineColor":	"",
				"questType":	2,
				"dwQuestFlags":	8,
				"doImmFeedback":	0,
				"maxAllowedAttempts":	0,
				"arrAns":	["\\u0043\\u0068\\u006F\\u0069\\u0063\\u0065\\u0020\\u004F\\u006E\\u0065"],
				"correctFeedbackFunc":	0,
				"incorrectFeedbackFunc":	0,
				"attemptsFeedbackFunc":	0,
				"varQuest":	VarCorrectAns_3883
	},
	objData:	{"a":[0,32,0,[]]}
};
text3884.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"visibility: inherit; position: absolute; left: -185px; top: 190px; width: 113px; height: 20px; z-index: 18;",
	cssClasses:	"",
	htmlId:		"tobj3884",
	bInsAnc:	0,
	fieldsetId:	'fset3883',
	cwObj:		{
		"name":	"Question Text"
	},
	objData:	{"a":[0,32,0,[-185,190,113,20]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":-185,"y":190,"width":113,"height":20},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text3885.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"visibility: inherit; position: absolute; left: -156px; top: 220px; width: 99px; height: 20px; z-index: 19;",
	cssClasses:	"",
	htmlId:		"tobj3885",
	bInsAnc:	0,
	fieldsetId:	'fset3883',
	cwObj:		{
		"name":	"Choice 1 text"
	},
	objData:	{"a":[0,32,0,[-156,220,99,20]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":-156,"y":220,"width":99,"height":20},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
radio3886.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"visibility: inherit; position: absolute; left: -185px; top: 220px; width: 19px; height: 19px; z-index: 20;",
	cssClasses:	"",
	htmlId:		"tobj3886",
	bInsAnc:	0,
	fieldsetId:	'fset3883',
	cwObj:		{
		"name":	"Choice 1 button"
	},
	objData:	{"a":[0,32,0,[-185,220,19,19]],"desktopRect":{"x":-185,"y":220,"width":19,"height":19},"formType":1,"dwFormFlags":0}
};
text3887.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 319px; min-height: 46px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 319px; min-height: 46px;\"><p style=\"margin-left: 0px; text-indent: 0px; margin-top: 0px; margin-bottom: 0px;\"><span style=\"font-size:20pt; color: rgb(0, 40, 87); font-family: &quot;Titillium Web SemiBold&quot;, sans-serif;\">Vraag 4</span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 182px; top: 165px; width: 319px; height: 46px; z-index: 21;",
	cssClasses:	"page-title",
	htmlId:		"tobj3887",
	bInsAnc:	0,
	cwObj:		{
		"name":	">>>Titel1"
	},
	objData:	{"a":[0,32,0,[182,165,319,46]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":182,"y":165,"width":319,"height":46},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text3888.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 558px; min-height: 75px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 558px; min-height: 75px;\"><p style=\"line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><span style=\"font-size:13pt; font-family:pt sans; color:rgb(0, 40, 87)\">Wat gebeurt er met het vrijwillig eigen risico als een verzekerde halverwege het jaar overstapt naar een andere zorgverzekeraar?&nbsp;</span></span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 182px; top: 226px; width: 558px; height: 75px; z-index: 22;",
	cssClasses:	"page-body",
	htmlId:		"tobj3888",
	bInsAnc:	0,
	cwObj:		{
		"name":	">>>tekst"
	},
	objData:	{"a":[0,32,0,[182,226,558,75]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":182,"y":226,"width":558,"height":75},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
og3889.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og3889",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
text3890.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; cursor: pointer; width: 954px; height: 60px; background-color: rgb(214, 239, 240);\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 954px; height: 60px;\"><table border=\"0px\" cellpadding=\"0px\" cellspacing=\"0px\">\n	<tbody>\n		<tr valign=\"top\">\n			<td style=\"padding: 0px 4px; width: 930px; vertical-align: middle; height: 60px; border-width: 0px; border-style: solid;\">\n			<p><span style=\"font-size: 13pt; font-family: &quot;pt sans&quot;, sans-serif; color: rgb(0, 104, 189);\">Het volledige vrijwillig eigen risico wordt overgenomen door de nieuwe verzekeraar.</span></p>\n			</td>\n		</tr>\n	</tbody>\n</table></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 182px; top: 321px; width: 954px; height: 60px; z-index: 23; cursor: pointer;",
	cssClasses:	"MPC_A_notsel",
	htmlId:		"tobj3890",
	bInsAnc:	1,
	cwObj:		{
		"name":	">>>Antwoord_A",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkModVarSaveAnswer',actItem:function(){ if( text3890.eatOnUp==true ){
        text3890.eatOnUp=false;
        return;
    }
    VarQuestion_3879.set('A'); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if( text3890.eatOnUp==true ){
        text3890.eatOnUp=false;
        return;
    }
    textbutton3871.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkChangeColor_A',actItem:function(){ if( text3890.eatOnUp==true ){
        text3890.eatOnUp=false;
        return;
    }
    runJS3893();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkUnselect_B',actItem:function(){ if( text3890.eatOnUp==true ){
        text3890.eatOnUp=false;
        return;
    }
    runJS3894();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkUnselect_C',actItem:function(){ if( text3890.eatOnUp==true ){
        text3890.eatOnUp=false;
        return;
    }
    runJS3895();
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,32,0,[182,321,954,60]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":182,"y":321,"width":954,"height":60},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text3896.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; cursor: pointer; width: 954px; height: 60px; background-color: rgb(214, 239, 240);\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 954px; height: 60px;\"><table border=\"0px\" cellpadding=\"0px\" cellspacing=\"0px\">\n	<tbody>\n		<tr valign=\"top\">\n			<td style=\"padding: 0px 4px; width: 930px; vertical-align: middle; height: 60px; border-width: 0px; border-style: solid;\">\n			<p><span style=\"font-size: 13pt; font-family: &quot;pt sans&quot;, sans-serif; color: rgb(0, 104, 189);\">Het vrijwillig eigen risico dat nog open staat wordt overgenomen door de nieuwe verzekeraar.</span></p>\n			</td>\n		</tr>\n	</tbody>\n</table></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 182px; top: 394px; width: 954px; height: 60px; z-index: 24; cursor: pointer;",
	cssClasses:	"MPC_B_notsel",
	htmlId:		"tobj3896",
	bInsAnc:	1,
	cwObj:		{
		"name":	">>>Antwoord_B",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkModVarSaveAnswer',actItem:function(){ if( text3896.eatOnUp==true ){
        text3896.eatOnUp=false;
        return;
    }
    VarQuestion_3879.set('B'); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if( text3896.eatOnUp==true ){
        text3896.eatOnUp=false;
        return;
    }
    textbutton3871.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkChangeColor_B',actItem:function(){ if( text3896.eatOnUp==true ){
        text3896.eatOnUp=false;
        return;
    }
    runJS3899();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkUnselect_A',actItem:function(){ if( text3896.eatOnUp==true ){
        text3896.eatOnUp=false;
        return;
    }
    runJS3900();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkUnselect_C',actItem:function(){ if( text3896.eatOnUp==true ){
        text3896.eatOnUp=false;
        return;
    }
    runJS3901();
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,32,0,[182,394,954,60]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":182,"y":394,"width":954,"height":60},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text3902.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; cursor: pointer; width: 954px; height: 60px; background-color: rgb(214, 239, 240);\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 954px; height: 60px;\"><table border=\"0px\" cellpadding=\"0px\" cellspacing=\"0px\">\n	<tbody>\n		<tr valign=\"top\">\n			<td style=\"padding: 0px 4px; width: 930px; vertical-align: middle; height: 60px; border-width: 0px; border-style: solid;\">\n			<p><span style=\"font-size: 13pt; font-family: &quot;pt sans&quot;, sans-serif; color: rgb(0, 104, 189);\">Het vrijwillig eigen risico wordt naar rato berekend voor het aantal maanden die de klant bij ons verzekerd is.</span></p>\n			</td>\n		</tr>\n	</tbody>\n</table></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 182px; top: 467px; width: 954px; height: 60px; z-index: 25; cursor: pointer;",
	cssClasses:	"MPC_C_notsel",
	htmlId:		"tobj3902",
	bInsAnc:	1,
	cwObj:		{
		"name":	">>>Antwoord_C",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkModVarSaveAnswer',actItem:function(){ if( text3902.eatOnUp==true ){
        text3902.eatOnUp=false;
        return;
    }
    VarQuestion_3879.set('C'); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if( text3902.eatOnUp==true ){
        text3902.eatOnUp=false;
        return;
    }
    textbutton3871.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkChangeColor_C',actItem:function(){ if( text3902.eatOnUp==true ){
        text3902.eatOnUp=false;
        return;
    }
    runJS3905();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkUnselect_A',actItem:function(){ if( text3902.eatOnUp==true ){
        text3902.eatOnUp=false;
        return;
    }
    runJS3906();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkUnselect_B',actItem:function(){ if( text3902.eatOnUp==true ){
        text3902.eatOnUp=false;
        return;
    }
    runJS3907();
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,32,0,[182,467,954,60]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":182,"y":467,"width":954,"height":60},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
og3908.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og3908",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
image3909.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj3909Img\" src=\"images/dragdrop-correct-dark.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 30px; height: 30px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 1122px; top: 337px; width: 30px; height: 30px; z-index: 26;",
	cssClasses:	"",
	htmlId:		"tobj3909",
	bInsAnc:	0,
	cwObj:		{
		"name":	"dragdrop-correct-dark-1"
	},
	objData:	{"a":[0,256,0,[1122,337,30,30]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1122,"y":337,"width":30,"height":30}}
};
image3910.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj3910Img\" src=\"images/dragdrop-wrong-dark.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 30px; height: 30px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 1122px; top: 337px; width: 30px; height: 30px; z-index: 27;",
	cssClasses:	"",
	htmlId:		"tobj3910",
	bInsAnc:	0,
	cwObj:		{
		"name":	"dragdrop-wrong-dark-1"
	},
	objData:	{"a":[0,256,0,[1122,337,30,30]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1122,"y":337,"width":30,"height":30}}
};
image3911.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj3911Img\" src=\"images/dragdrop-correct-dark.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 30px; height: 30px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 1122px; top: 409px; width: 30px; height: 30px; z-index: 28;",
	cssClasses:	"",
	htmlId:		"tobj3911",
	bInsAnc:	0,
	cwObj:		{
		"name":	"dragdrop-correct-dark-2"
	},
	objData:	{"a":[0,256,0,[1122,409,30,30]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1122,"y":409,"width":30,"height":30}}
};
image3912.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj3912Img\" src=\"images/dragdrop-wrong-dark.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 30px; height: 30px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 1122px; top: 409px; width: 30px; height: 30px; z-index: 29;",
	cssClasses:	"",
	htmlId:		"tobj3912",
	bInsAnc:	0,
	cwObj:		{
		"name":	"dragdrop-wrong-dark-2"
	},
	objData:	{"a":[0,256,0,[1122,409,30,30]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1122,"y":409,"width":30,"height":30}}
};
image3913.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj3913Img\" src=\"images/dragdrop-correct-dark.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 30px; height: 30px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 1123px; top: 482px; width: 30px; height: 30px; z-index: 30;",
	cssClasses:	"",
	htmlId:		"tobj3913",
	bInsAnc:	0,
	cwObj:		{
		"name":	"dragdrop-correct-dark-3"
	},
	objData:	{"a":[0,256,0,[1123,482,30,30]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1123,"y":482,"width":30,"height":30}}
};
image3914.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj3914Img\" src=\"images/dragdrop-wrong-dark.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 30px; height: 30px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 1123px; top: 482px; width: 30px; height: 30px; z-index: 31;",
	cssClasses:	"",
	htmlId:		"tobj3914",
	bInsAnc:	0,
	cwObj:		{
		"name":	"dragdrop-wrong-dark-3"
	},
	objData:	{"a":[0,256,0,[1123,482,30,30]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1123,"y":482,"width":30,"height":30}}
};
shape3915.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 1103 548\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(551.5 274)\" style=\"\">\n	<path d=\"M 0 0 L 1103 0 L 1103 548 L 0 548 L 0 0 Z\" style=\"stroke: rgb(0, 120, 228); stroke-width: 0; stroke-dasharray: 2, 2; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-551.5, -274) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(551.5 274)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 134px; top: 128px; width: 1103px; height: 548px; z-index: 32; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj3915",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Disable pane"
	},
	objData:	{"a":[0,0,0,[133.9999999999999,128.0000000000001,1103,548]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":134,"y":128,"width":1103,"height":548},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape1471.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
og4051.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og4051",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
shape4052.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 17 17\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(8.5 8.5)\" style=\"\">\n	<path d=\"M 0 8.5 A 8.5 8.5 0 1 1 17 8.5 A 8.5 8.5 0 1 1 0 8.5 Z\" style=\"stroke: rgb(126, 187, 194); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(126, 187, 194); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-8.5, -8.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(8.5 8.5)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 584px; top: 732px; width: 17px; height: 17px; z-index: 33; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj4052",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Ellipse"
	},
	objData:	{"a":[0,32,0,[584,732,17,17]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":584,"y":732,"width":17,"height":17},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape372.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape4053.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 17 17\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(8.5 8.5)\" style=\"\">\n	<path d=\"M 0 8.5 A 8.5 8.5 0 1 1 17 8.5 A 8.5 8.5 0 1 1 0 8.5 Z\" style=\"stroke: rgb(126, 187, 194); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(126, 187, 194); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-8.5, -8.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(8.5 8.5)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 631px; top: 732px; width: 17px; height: 17px; z-index: 34; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj4053",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Ellipse"
	},
	objData:	{"a":[0,32,0,[631,732,17,17]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":631,"y":732,"width":17,"height":17},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape372.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape4054.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 17 17\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(8.5 8.5)\" style=\"\">\n	<path d=\"M 0 8.5 A 8.5 8.5 0 1 1 17 8.5 A 8.5 8.5 0 1 1 0 8.5 Z\" style=\"stroke: rgb(126, 187, 194); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(126, 187, 194); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-8.5, -8.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(8.5 8.5)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 678px; top: 732px; width: 17px; height: 17px; z-index: 35; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj4054",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Ellipse"
	},
	objData:	{"a":[0,32,0,[678,732,17,17]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":678,"y":732,"width":17,"height":17},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape372.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape4055.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 17 17\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(8.5 8.5)\" style=\"\">\n	<path d=\"M 0 8.5 A 8.5 8.5 0 1 1 17 8.5 A 8.5 8.5 0 1 1 0 8.5 Z\" style=\"stroke: rgb(126, 187, 194); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(0, 40, 87); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-8.5, -8.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(8.5 8.5)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 725px; top: 732px; width: 17px; height: 17px; z-index: 36; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj4055",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Ellipse"
	},
	objData:	{"a":[0,32,0,[725,732,17,17]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":725,"y":732,"width":17,"height":17},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape371.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape4056.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 17 17\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(8.5 8.5)\" style=\"\">\n	<path d=\"M 0 8.5 A 8.5 8.5 0 1 1 17 8.5 A 8.5 8.5 0 1 1 0 8.5 Z\" style=\"stroke: rgb(126, 187, 194); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(126, 187, 194); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-8.5, -8.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(8.5 8.5)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 772px; top: 732px; width: 17px; height: 17px; z-index: 37; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj4056",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Ellipse"
	},
	objData:	{"a":[0,32,0,[772,732,17,17]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":772,"y":732,"width":17,"height":17},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape372.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
rcdObj.rcdData.att_Desktop = 
{
	font:	{"bold":0,"italic":0,"underline":0,"size":"12","color":null,"bgColor":null,"name":"'Arial',sans-serif","lineHeight":"1.15","marginTop":"0px","marginBottom":"0px"},
	pageIdx:	20
};
rcdObj.pgWidth_Desktop = pgWidth_desktop;
rcdObj.preload_Desktop = ["images/Button_sluit_groot.png","images/Logo-ZK.jpg","images/Button_volgende.png","images/Button_volgende_hover.png","images/Button_vorige.png","images/Button_vorige_hover.png","images/Button_check_groot_hover.png","images/Button_check_groot.png","images/dragdrop-correct-dark.png","images/dragdrop-wrong-dark.png","images/Button_menu_groot.png"];
rcdObj.pgStyle_Desktop = 'position: absolute; left: 0px; top: 0px; width: 1366px; height: 768px; overflow: hidden; background-size: auto;'
rcdObj.backgrd_Desktop = ["#FFFFFF","",0,0,1];