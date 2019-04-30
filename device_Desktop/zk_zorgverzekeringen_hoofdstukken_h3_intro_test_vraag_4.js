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
	cssText:	"visibility: inherit; position: absolute; left: 0px; top: 4.09273e-12px; width: 1366px; height: 78px; z-index: 4; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj223",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Header"
	},
	objData:	{"a":[0,160,0,[0,4.092726157978177e-12,1366,78]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":0,"width":1366,"height":78},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape16.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton221.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 150 58\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(75 29)\" style=\"\">\n	<path d=\"M 0 0 L 150 0 L 150 58 L 0 58 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_5382_368_13454\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"150\" height=\"58\" xlink:href=\"images/Button_sluit_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 150 0 L 150 58 L 0 58 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_5382_368_13454&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(75 29)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
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
	objData:	{"a":[4,33184,0,[1202,10.000000000000426,150,58]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1202,"y":10,"width":150,"height":58},"imgDataNormal":"images/desktop_shape17.png","imgDataOver":"images/desktop_shape17.png","imgDataDown":"images/desktop_shape17.png","imgDataDisabled":"images/desktop_shape17_disabled.png","svgDataNormal":"<g transform=\"translate(75 29)\" style=\"\">\n\t<path d=\"M 0 0 L 150 0 L 150 58 L 0 58 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_5382_368_13454\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"150\" height=\"58\" xlink:href=\"images/Button_sluit_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 150 0 L 150 58 L 0 58 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_5382_368_13454&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(75 29)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(75 29)\" style=\"\">\n\t<path d=\"M 0 0 L 150 0 L 150 58 L 0 58 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_5382_368_13456\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"150\" height=\"58\" xlink:href=\"images/Button_sluit_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 150 0 L 150 58 L 0 58 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_5382_368_13456&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(75 29)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(75 29)\" style=\"\">\n\t<path d=\"M 0 0 L 150 0 L 150 58 L 0 58 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_5382_368_13458\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"150\" height=\"58\" xlink:href=\"images/Button_sluit_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 150 0 L 150 58 L 0 58 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_5382_368_13458&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(75 29)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(75 29)\" style=\"\">\n\t<path d=\"M 0 0 L 150 0 L 150 58 L 0 58 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_5382_368_13460\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"150\" height=\"58\" xlink:href=\"images/Button_sluit_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 150 0 L 150 58 L 0 58 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_5382_368_13460&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(75 29)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton2674.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 125 58\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(62.5 29)\" style=\"\">\n	<path d=\"M 0 0 L 125 0 L 125 58 L 0 58 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-62.5, -29) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_5382_368_13462\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"125\" height=\"58\" xlink:href=\"images/Button_menu_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 125 0 L 125 58 L 0 58 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_5382_368_13462&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-62.5, -29) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(62.5 29)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
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
	objData:	{"a":[4,33056,0,[1065.9999999999998,10.000000000000341,125,58]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1066,"y":10,"width":125,"height":58},"imgDataNormal":"images/desktop_shape2674.png","imgDataOver":"images/desktop_shape2674.png","imgDataDown":"images/desktop_shape2674.png","imgDataDisabled":"images/desktop_shape2674_disabled.png","svgDataNormal":"<g transform=\"translate(62.5 29)\" style=\"\">\n\t<path d=\"M 0 0 L 125 0 L 125 58 L 0 58 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-62.5, -29) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_5382_368_13462\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"125\" height=\"58\" xlink:href=\"images/Button_menu_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 125 0 L 125 58 L 0 58 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_5382_368_13462&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-62.5, -29) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(62.5 29)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(62.5 29)\" style=\"\">\n\t<path d=\"M 0 0 L 125 0 L 125 58 L 0 58 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-62.5, -29) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_5382_368_13464\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"125\" height=\"58\" xlink:href=\"images/Button_menu_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 125 0 L 125 58 L 0 58 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_5382_368_13464&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-62.5, -29) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(62.5 29)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(62.5 29)\" style=\"\">\n\t<path d=\"M 0 0 L 125 0 L 125 58 L 0 58 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-62.5, -29) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_5382_368_13466\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"125\" height=\"58\" xlink:href=\"images/Button_menu_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 125 0 L 125 58 L 0 58 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_5382_368_13466&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-62.5, -29) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(62.5 29)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(62.5 29)\" style=\"\">\n\t<path d=\"M 0 0 L 125 0 L 125 58 L 0 58 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-62.5, -29) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_5382_368_13468\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"125\" height=\"58\" xlink:href=\"images/Button_menu_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 125 0 L 125 58 L 0 58 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_5382_368_13468&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-62.5, -29) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(62.5 29)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
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
	cssText:	"visibility: inherit; position: absolute; left: -2.72848e-12px; top: 78px; width: 1366px; height: 690px; z-index: 9; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj218",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Overlay"
	},
	objData:	{"a":[0,160,0,[-2.7284841053187847e-12,78.00000000000409,1366,690]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":78,"width":1366,"height":690},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape21.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px; opacity: 0.85;\">"}
};
text240.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 396px; min-height: 80px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 396px; min-height: 80px;\"><p align=\"center\" style=\"margin-left:0px;text-indent:0px;margin-top:0px;margin-bottom:0px;\"><span style=\"font-size:12pt; font-family: &quot;Titillium Web&quot;, sans-serif; color: rgb(0, 104, 189);\">Collectieve en aanvullende verzekeringen</span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 484px; top: 43px; width: 396px; height: 80px; z-index: 10;",
	cssClasses:	"header-module-subtitle",
	htmlId:		"tobj240",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Module subtitle"
	},
	objData:	{"a":[0,32,0,[484,43,396,80]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":484,"y":43,"width":396,"height":80},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
textbutton5145.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 34 34\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(17 17)\" style=\"\">\n	<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_5382_4718_13974\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"34\" height=\"34\" xlink:href=\"images/Button_vorige.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_5382_4718_13974&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(17 17)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 38px; top: 388px; width: 34px; height: 34px; z-index: 40; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj5145",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Vorige",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkGoTo',actItem:function(){ trivExitPage('zk_zorgverzekeringen_hoofdstukken_h3_intro_test_vraag_3.html',false,false);
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33120,0,[37.999999999999986,388,34,34]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":38,"y":388,"width":34,"height":34},"imgDataNormal":"images/desktop_shape264.png","imgDataOver":"images/desktop_shape264_over.png","imgDataDown":"images/desktop_shape264.png","imgDataDisabled":"images/desktop_shape264_disabled.png","svgDataNormal":"<g transform=\"translate(17 17)\" style=\"\">\n\t<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_5382_4718_13974\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"34\" height=\"34\" xlink:href=\"images/Button_vorige.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_5382_4718_13974&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(17 17)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(17 17)\" style=\"\">\n\t<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_5382_4718_13976\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"34\" height=\"34\" xlink:href=\"images/Button_vorige_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_5382_4718_13976&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(17 17)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(17 17)\" style=\"\">\n\t<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_5382_4718_13978\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"34\" height=\"34\" xlink:href=\"images/Button_vorige.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_5382_4718_13978&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(17 17)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(17 17)\" style=\"\">\n\t<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_5382_4718_13980\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"34\" height=\"34\" xlink:href=\"images/Button_vorige.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_5382_4718_13980&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(17 17)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton5143.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 34 34\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(17 17)\" style=\"\">\n	<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_5382_4718_13982\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"34\" height=\"34\" xlink:href=\"images/Button_volgende.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_5382_4718_13982&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(17 17)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 1295px; top: 388px; width: 34px; height: 34px; z-index: 41; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj5143",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Volgende",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkGoTo',actItem:function(){ trivExitPage('zk_zorgverzekeringen_hoofdstukken_h3_hotspot_hotspot.html',true,false);
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33088,0,[1295,388,34,34]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1295,"y":388,"width":34,"height":34},"imgDataNormal":"images/desktop_shape261.png","imgDataOver":"images/desktop_shape261_over.png","imgDataDown":"images/desktop_shape261.png","imgDataDisabled":"images/desktop_shape261_disabled.png","svgDataNormal":"<g transform=\"translate(17 17)\" style=\"\">\n\t<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_5382_4718_13982\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"34\" height=\"34\" xlink:href=\"images/Button_volgende.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_5382_4718_13982&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(17 17)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(17 17)\" style=\"\">\n\t<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_5382_4718_13984\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"34\" height=\"34\" xlink:href=\"images/Button_volgende_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_5382_4718_13984&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(17 17)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(17 17)\" style=\"\">\n\t<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_5382_4718_13986\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"34\" height=\"34\" xlink:href=\"images/Button_volgende.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_5382_4718_13986&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(17 17)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(17 17)\" style=\"\">\n\t<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_5382_4718_13988\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"34\" height=\"34\" xlink:href=\"images/Button_volgende.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_5382_4718_13988&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(17 17)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape5142.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 1138 597\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(569 298.5)\" style=\"\">\n	<path d=\"M 7.12 0 L 1130.88 0 A 7.12 7.12 0 0 1 1138 7.12 L 1138 589.88 A 7.12 7.12 0 0 1 1130.88 597 L 7.12 597 A 7.12 7.12 0 0 1 0 589.88 L 0 7.12 A 7.12 7.12 0 0 1 7.12 0 Z\" style=\"stroke: rgb(126, 187, 194); stroke-width: 0; stroke-dasharray: 1, 2; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-569, -298.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(569 298.5)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 114px; top: 116px; width: 1138px; height: 597px; z-index: 11; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj5142",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rounded Rectangle"
	},
	objData:	{"a":[0,32,0,[113.99999999999955,116.00000000000045,1138,597]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":114,"y":116,"width":1138,"height":597},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape275.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
qu4714.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"qu4714",
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
				"varQuest":	VarQ3_score
	},
	objData:	{"a":[0,32,0,[]]}
};
text4715.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"visibility: inherit; position: absolute; left: -171px; top: 134px; width: 113px; height: 20px; z-index: 12;",
	cssClasses:	"",
	htmlId:		"tobj4715",
	bInsAnc:	0,
	fieldsetId:	'fset4714',
	cwObj:		{
		"name":	"Question Text"
	},
	objData:	{"a":[0,32,0,[-171,134,113,20]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":-171,"y":134,"width":113,"height":20},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text4716.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"visibility: inherit; position: absolute; left: -142px; top: 164px; width: 99px; height: 20px; z-index: 13;",
	cssClasses:	"",
	htmlId:		"tobj4716",
	bInsAnc:	0,
	fieldsetId:	'fset4714',
	cwObj:		{
		"name":	"Choice 1 text"
	},
	objData:	{"a":[0,32,0,[-142,164,99,20]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":-142,"y":164,"width":99,"height":20},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
radio4717.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"visibility: inherit; position: absolute; left: -171px; top: 164px; width: 19px; height: 19px; z-index: 14;",
	cssClasses:	"",
	htmlId:		"tobj4717",
	bInsAnc:	0,
	fieldsetId:	'fset4714',
	cwObj:		{
		"name":	"Choice 1 button"
	},
	objData:	{"a":[0,32,0,[-171,164,19,19]],"desktopRect":{"x":-171,"y":164,"width":19,"height":19},"formType":1,"dwFormFlags":0}
};
qu5385.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"qu5385",
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
				"varQuest":	VarCorrectAns_5385
	},
	objData:	{"a":[0,32,0,[]]}
};
text5386.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"visibility: inherit; position: absolute; left: -190px; top: 219px; width: 113px; height: 20px; z-index: 15;",
	cssClasses:	"",
	htmlId:		"tobj5386",
	bInsAnc:	0,
	fieldsetId:	'fset5385',
	cwObj:		{
		"name":	"Question Text"
	},
	objData:	{"a":[0,32,0,[-190,219,113,20]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":-190,"y":219,"width":113,"height":20},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text5387.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"visibility: inherit; position: absolute; left: -161px; top: 249px; width: 99px; height: 20px; z-index: 16;",
	cssClasses:	"",
	htmlId:		"tobj5387",
	bInsAnc:	0,
	fieldsetId:	'fset5385',
	cwObj:		{
		"name":	"Choice 1 text"
	},
	objData:	{"a":[0,32,0,[-161,249,99,20]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":-161,"y":249,"width":99,"height":20},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
radio5388.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"visibility: inherit; position: absolute; left: -190px; top: 249px; width: 19px; height: 19px; z-index: 17;",
	cssClasses:	"",
	htmlId:		"tobj5388",
	bInsAnc:	0,
	fieldsetId:	'fset5385',
	cwObj:		{
		"name":	"Choice 1 button"
	},
	objData:	{"a":[0,32,0,[-190,249,19,19]],"desktopRect":{"x":-190,"y":249,"width":19,"height":19},"formType":1,"dwFormFlags":0}
};
qu5389.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"qu5389",
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
				"varQuest":	VarQuestion_5389
	},
	objData:	{"a":[0,32,0,[]]}
};
text5390.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"visibility: inherit; position: absolute; left: -202px; top: 412px; width: 113px; height: 20px; z-index: 18;",
	cssClasses:	"",
	htmlId:		"tobj5390",
	bInsAnc:	0,
	fieldsetId:	'fset5389',
	cwObj:		{
		"name":	"Question Text"
	},
	objData:	{"a":[0,32,0,[-202,412,113,20]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":-202,"y":412,"width":113,"height":20},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text5391.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"visibility: inherit; position: absolute; left: -173px; top: 442px; width: 99px; height: 20px; z-index: 19;",
	cssClasses:	"",
	htmlId:		"tobj5391",
	bInsAnc:	0,
	fieldsetId:	'fset5389',
	cwObj:		{
		"name":	"Choice 1 text"
	},
	objData:	{"a":[0,32,0,[-173,442,99,20]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":-173,"y":442,"width":99,"height":20},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
radio5392.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"visibility: inherit; position: absolute; left: -202px; top: 442px; width: 19px; height: 19px; z-index: 20;",
	cssClasses:	"",
	htmlId:		"tobj5392",
	bInsAnc:	0,
	fieldsetId:	'fset5389',
	cwObj:		{
		"name":	"Choice 1 button"
	},
	objData:	{"a":[0,32,0,[-202,442,19,19]],"desktopRect":{"x":-202,"y":442,"width":19,"height":19},"formType":1,"dwFormFlags":0}
};
og5393.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og5393",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
og5399.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og5399",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
text5410.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 319px; min-height: 46px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 319px; min-height: 46px;\"><p style=\"margin-left: 0px; text-indent: 0px; margin-top: 0px; margin-bottom: 0px;\"><span style=\"font-size:20pt; color: rgb(0, 40, 87); font-family: &quot;Titillium Web SemiBold&quot;, sans-serif;\">Vraag 4</span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 182px; top: 165px; width: 319px; height: 46px; z-index: 21;",
	cssClasses:	"page-title",
	htmlId:		"tobj5410",
	bInsAnc:	0,
	cwObj:		{
		"name":	">>>Titel1"
	},
	objData:	{"a":[0,32,0,[182,165,319,46]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":182,"y":165,"width":319,"height":46},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text5411.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 553px; min-height: 75px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 553px; min-height: 75px;\"><p style=\"line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span style=\"color: rgb(0, 40, 87); font-family: &quot;pt sans&quot;, sans-serif; font-size: 13pt;\">Mensen met een laag inkomen kunnen onder bepaalde voorwaarden een collectieve zorgverzekering afsluiten via de gemeente. </span></p>\n\n<p style=\"line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span style=\"color: rgb(0, 40, 87); font-family: &quot;pt sans&quot;, sans-serif; font-size: 13pt;\">Wat zijn de voordelen hiervan? &nbsp;</span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 182px; top: 227px; width: 553px; height: 75px; z-index: 22;",
	cssClasses:	"page-body",
	htmlId:		"tobj5411",
	bInsAnc:	0,
	cwObj:		{
		"name":	">>>tekst"
	},
	objData:	{"a":[0,32,0,[182,227,553,75]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":182,"y":227,"width":553,"height":75},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
og5412.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og5412",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
og5418.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og5418",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
text5419.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; cursor: pointer; width: 954px; height: 50px; background-color: rgb(214, 239, 240);\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 944px; height: 40px;\"><table border=\"0px\" cellpadding=\"0px\" cellspacing=\"0px\">\n	<tbody>\n		<tr valign=\"top\">\n			<td style=\"padding: 0px; width: 954px; vertical-align: middle; height: 50px; border-width: 0px; border-style: solid;\"><span style=\"font-size:12pt; font-family:pt sans; color:rgb(0, 40, 87)\">Lagere premie omdat de gemeente meebetaalt</span></td>\n		</tr>\n	</tbody>\n</table></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 249px; top: 343px; width: 954px; height: 50px; z-index: 23; cursor: pointer;",
	cssClasses:	"vink_A",
	htmlId:		"tobj5419",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Vink_A",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ if( text5419.eatOnUp==true ){
        text5419.eatOnUp=false;
        return;
    }
    if(!VarQuestion_5389.contains('A'))VarQuestion_5389.add('A'); else VarQuestion_5389.sub('A'); 
    if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkChangeColor_A',actItem:function(){ if( text5419.eatOnUp==true ){
        text5419.eatOnUp=false;
        return;
    }
    runJS5421();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkChange_Check_A',actItem:function(){ if( text5419.eatOnUp==true ){
        text5419.eatOnUp=false;
        return;
    }
    if(VarQuestion_5389.contains('A'))image5423.changeContents( "images/vink_aan%20lichtblauw.png" ); else image5423.changeContents( "images/vink_uit%20lichtblauw.png" ); 
    if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,32,0,[249,343,954,50]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":249,"y":343,"width":954,"height":50},"dwTextFlags":0,"marginSize":5,"textPublishLang":"Inherit"}
};
image5423.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj5423Img\" src=\"images/vink_uit%20lichtblauw.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 51px; height: 50px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 183px; top: 347px; width: 51px; height: 50px; z-index: 24; cursor: pointer;",
	cssClasses:	"",
	htmlId:		"tobj5423",
	bInsAnc:	1,
	cwObj:		{
		"name":	"vink_A",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ if(!VarQuestion_5389.contains('A'))VarQuestion_5389.add('A'); else VarQuestion_5389.sub('A'); 
    if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkChangeColor_A',actItem:function(){ runJS5425();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkChange_Check_A',actItem:function(){ if(VarQuestion_5389.contains('A'))image5423.changeContents( "images/vink_aan%20lichtblauw.png" ); else image5423.changeContents( "images/vink_uit%20lichtblauw.png" ); 
    if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,288,0,[183,347,51,50]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":183,"y":347,"width":51,"height":50}}
};
text5427.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; cursor: pointer; width: 954px; height: 50px; background-color: rgb(214, 239, 240);\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 944px; height: 40px;\"><table border=\"0px\" cellpadding=\"0px\" cellspacing=\"0px\">\n	<tbody>\n		<tr valign=\"top\">\n			<td style=\"padding: 0px; width: 954px; vertical-align: middle; height: 50px; border-width: 0px; border-style: solid;\"><span style=\"font-size:12pt; font-family:pt sans; color:rgb(0, 40, 87)\">Extra vergoedingen</span></td>\n		</tr>\n	</tbody>\n</table></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 249px; top: 406px; width: 954px; height: 50px; z-index: 25; cursor: pointer;",
	cssClasses:	"vink_B",
	htmlId:		"tobj5427",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Vink_B",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ if( text5427.eatOnUp==true ){
        text5427.eatOnUp=false;
        return;
    }
    if(!VarQuestion_5389.contains('B'))VarQuestion_5389.add('B'); else VarQuestion_5389.sub('B'); 
    if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkChangeColor_B',actItem:function(){ if( text5427.eatOnUp==true ){
        text5427.eatOnUp=false;
        return;
    }
    runJS5429();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkChange_Check_B',actItem:function(){ if( text5427.eatOnUp==true ){
        text5427.eatOnUp=false;
        return;
    }
    if(VarQuestion_5389.contains('B'))image5431.changeContents( "images/vink_aan%20lichtblauw.png" ); else image5431.changeContents( "images/vink_uit%20lichtblauw.png" ); 
    if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,32,0,[249,406,954,50]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":249,"y":406,"width":954,"height":50},"dwTextFlags":0,"marginSize":5,"textPublishLang":"Inherit"}
};
image5431.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj5431Img\" src=\"images/vink_uit%20lichtblauw.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 51px; height: 50px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 183px; top: 410px; width: 51px; height: 50px; z-index: 26; cursor: pointer;",
	cssClasses:	"",
	htmlId:		"tobj5431",
	bInsAnc:	1,
	cwObj:		{
		"name":	"vink_B",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ if(!VarQuestion_5389.contains('B'))VarQuestion_5389.add('B'); else VarQuestion_5389.sub('B'); 
    if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkChangeColor_B',actItem:function(){ runJS5433();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkChange_Check_B',actItem:function(){ if(VarQuestion_5389.contains('B'))image5431.changeContents( "images/vink_aan%20lichtblauw.png" ); else image5431.changeContents( "images/vink_uit%20lichtblauw.png" ); 
    if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,288,0,[183,410,51,50]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":183,"y":410,"width":51,"height":50}}
};
text5435.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; cursor: pointer; width: 954px; height: 50px; background-color: rgb(214, 239, 240);\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 944px; height: 40px;\"><table border=\"0px\" cellpadding=\"0px\" cellspacing=\"0px\">\n	<tbody>\n		<tr valign=\"top\">\n			<td style=\"padding: 0px; width: 954px; vertical-align: middle; height: 50px; border-width: 0px; border-style: solid;\"><span style=\"font-size:12pt; font-family:pt sans; color:rgb(0, 40, 87)\">Geen eigen risico</span></td>\n		</tr>\n	</tbody>\n</table></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 249px; top: 470px; width: 954px; height: 50px; z-index: 27; cursor: pointer;",
	cssClasses:	"vink_C",
	htmlId:		"tobj5435",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Vink_C",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ if( text5435.eatOnUp==true ){
        text5435.eatOnUp=false;
        return;
    }
    if(!VarQuestion_5389.contains('C'))VarQuestion_5389.add('C'); else VarQuestion_5389.sub('C'); 
    if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkChangeColor_C',actItem:function(){ if( text5435.eatOnUp==true ){
        text5435.eatOnUp=false;
        return;
    }
    runJS5437();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkChange_Check_C',actItem:function(){ if( text5435.eatOnUp==true ){
        text5435.eatOnUp=false;
        return;
    }
    if(VarQuestion_5389.contains('C'))image5439.changeContents( "images/vink_aan%20lichtblauw.png" ); else image5439.changeContents( "images/vink_uit%20lichtblauw.png" ); 
    if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,32,0,[249,470,954,50]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":249,"y":470,"width":954,"height":50},"dwTextFlags":0,"marginSize":5,"textPublishLang":"Inherit"}
};
image5439.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj5439Img\" src=\"images/vink_uit%20lichtblauw.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 51px; height: 50px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 183px; top: 474px; width: 51px; height: 50px; z-index: 28; cursor: pointer;",
	cssClasses:	"",
	htmlId:		"tobj5439",
	bInsAnc:	1,
	cwObj:		{
		"name":	"vink_C",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ if(!VarQuestion_5389.contains('C'))VarQuestion_5389.add('C'); else VarQuestion_5389.sub('C'); 
    if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkChangeColor_C',actItem:function(){ runJS5441();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkChange_Check_C',actItem:function(){ if(VarQuestion_5389.contains('C'))image5439.changeContents( "images/vink_aan%20lichtblauw.png" ); else image5439.changeContents( "images/vink_uit%20lichtblauw.png" ); 
    if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,288,0,[183,474,51,50]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":183,"y":474,"width":51,"height":50}}
};
text5443.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; cursor: pointer; width: 954px; height: 50px; background-color: rgb(214, 239, 240);\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 944px; height: 40px;\"><table border=\"0px\" cellpadding=\"0px\" cellspacing=\"0px\">\n	<tbody>\n		<tr valign=\"top\">\n			<td style=\"padding: 0px; width: 954px; vertical-align: middle; height: 50px; border-width: 0px; border-style: solid;\"><span style=\"font-size:12pt; font-family:pt sans; color:rgb(0, 40, 87)\">Mogelijkheid voor advies van budgetcoach</span></td>\n		</tr>\n	</tbody>\n</table></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 249px; top: 533px; width: 954px; height: 50px; z-index: 29; cursor: pointer;",
	cssClasses:	"vink_D",
	htmlId:		"tobj5443",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Vink_D",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ if( text5443.eatOnUp==true ){
        text5443.eatOnUp=false;
        return;
    }
    if(!VarQuestion_5389.contains('D'))VarQuestion_5389.add('D'); else VarQuestion_5389.sub('D'); 
    if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkChangeColor_D',actItem:function(){ if( text5443.eatOnUp==true ){
        text5443.eatOnUp=false;
        return;
    }
    runJS5445();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkChange_Check_D',actItem:function(){ if( text5443.eatOnUp==true ){
        text5443.eatOnUp=false;
        return;
    }
    if(VarQuestion_5389.contains('D'))image5447.changeContents( "images/vink_aan%20lichtblauw.png" ); else image5447.changeContents( "images/vink_uit%20lichtblauw.png" ); 
    if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,32,0,[249,533,954,50]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":249,"y":533,"width":954,"height":50},"dwTextFlags":0,"marginSize":5,"textPublishLang":"Inherit"}
};
image5447.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj5447Img\" src=\"images/vink_uit%20lichtblauw.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 51px; height: 50px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 183px; top: 537px; width: 51px; height: 50px; z-index: 30; cursor: pointer;",
	cssClasses:	"",
	htmlId:		"tobj5447",
	bInsAnc:	1,
	cwObj:		{
		"name":	"vink_D",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ if(!VarQuestion_5389.contains('D'))VarQuestion_5389.add('D'); else VarQuestion_5389.sub('D'); 
    if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkChangeColor_D',actItem:function(){ runJS5449();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkChange_Check_D',actItem:function(){ if(VarQuestion_5389.contains('D'))image5447.changeContents( "images/vink_aan%20lichtblauw.png" ); else image5447.changeContents( "images/vink_uit%20lichtblauw.png" ); 
    if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,288,0,[183,537,51,50]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":183,"y":537,"width":51,"height":50}}
};
og5459.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og5459",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
image5460.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj5460Img\" src=\"images/dragdrop-correct-dark.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 30px; height: 30px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 1188px; top: 358px; width: 30px; height: 30px; z-index: 31;",
	cssClasses:	"",
	htmlId:		"tobj5460",
	bInsAnc:	0,
	cwObj:		{
		"name":	"dragdrop-correct-dark-1"
	},
	objData:	{"a":[0,256,0,[1188,358,30,30]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1188,"y":358,"width":30,"height":30}}
};
image5461.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj5461Img\" src=\"images/dragdrop-correct-dark.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 30px; height: 30px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 1188px; top: 421px; width: 30px; height: 30px; z-index: 32;",
	cssClasses:	"",
	htmlId:		"tobj5461",
	bInsAnc:	0,
	cwObj:		{
		"name":	"dragdrop-correct-dark-2"
	},
	objData:	{"a":[0,256,0,[1188,421,30,30]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1188,"y":421,"width":30,"height":30}}
};
image5462.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj5462Img\" src=\"images/dragdrop-correct-dark.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 30px; height: 30px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 1188px; top: 484px; width: 30px; height: 30px; z-index: 33;",
	cssClasses:	"",
	htmlId:		"tobj5462",
	bInsAnc:	0,
	cwObj:		{
		"name":	"dragdrop-correct-dark-3"
	},
	objData:	{"a":[0,256,0,[1188,484,30,30]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1188,"y":484,"width":30,"height":30}}
};
image5463.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj5463Img\" src=\"images/dragdrop-correct-dark.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 30px; height: 30px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 1188px; top: 547px; width: 30px; height: 30px; z-index: 34;",
	cssClasses:	"",
	htmlId:		"tobj5463",
	bInsAnc:	0,
	cwObj:		{
		"name":	"dragdrop-correct-dark-4"
	},
	objData:	{"a":[0,256,0,[1188,547,30,30]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1188,"y":547,"width":30,"height":30}}
};
textbutton5465.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 97 39\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(48.5 19.5)\" style=\"\">\n	<path d=\"M 0 0 L 97 0 L 97 39 L 0 39 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-48.5, -19.5) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_5382_14022\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"97\" height=\"39\" xlink:href=\"images/Button_check_groot_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 97 0 L 97 39 L 0 39 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_5382_14022&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-48.5, -19.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(48.5 19.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 638px; top: 627px; width: 97px; height: 39px; z-index: 42; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj5465",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Button check",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkRunActGrp',actItem:function(){ {og5412.issueActions(1001);}
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ VarQ3.add('_04'); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ if(VarQuestion_5389.contains('A')&&VarQuestion_5389.contains('B'))VarQ3_score.add('1'); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ textbutton5518.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ textbutton5465.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33120,0,[638,627,97,39]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":638,"y":627,"width":97,"height":39},"imgDataNormal":"images/desktop_shape480.png","imgDataOver":"images/desktop_shape480_over.png","imgDataDown":"images/desktop_shape480.png","imgDataDisabled":"images/desktop_shape480_disabled.png","svgDataNormal":"<g transform=\"translate(48.5 19.5)\" style=\"\">\n\t<path d=\"M 0 0 L 97 0 L 97 39 L 0 39 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-48.5, -19.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_5382_14022\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"97\" height=\"39\" xlink:href=\"images/Button_check_groot_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 97 0 L 97 39 L 0 39 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_5382_14022&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-48.5, -19.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(48.5 19.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(48.5 19.5)\" style=\"\">\n\t<path d=\"M 0 0 L 97 0 L 97 39 L 0 39 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-48.5, -19.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_5382_14024\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"97\" height=\"39\" xlink:href=\"images/Button_check_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 97 0 L 97 39 L 0 39 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_5382_14024&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-48.5, -19.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(48.5 19.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(48.5 19.5)\" style=\"\">\n\t<path d=\"M 0 0 L 97 0 L 97 39 L 0 39 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-48.5, -19.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_5382_14026\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"97\" height=\"39\" xlink:href=\"images/Button_check_groot_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 97 0 L 97 39 L 0 39 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_5382_14026&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-48.5, -19.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(48.5 19.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(48.5 19.5)\" style=\"\">\n\t<path d=\"M 0 0 L 97 0 L 97 39 L 0 39 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-48.5, -19.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_5382_14028\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"97\" height=\"39\" xlink:href=\"images/Button_check_groot_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 97 0 L 97 39 L 0 39 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_5382_14028&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-48.5, -19.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(48.5 19.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton5518.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 150 36\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(75 18)\" style=\"\">\n	<path d=\"M 0 0 L 150 0 L 150 36 L 0 36 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -18) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_5382_14030\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"150\" height=\"36\" xlink:href=\"images/Button_verder_blauw.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 150 0 L 150 36 L 0 36 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_5382_14030&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -18) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(75 18)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 610px; top: 629px; width: 150px; height: 36px; z-index: 43; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj5518",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Button verder_klein",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ og5493.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkChange',actItem:function(){ text5510.changeContents( "Je hebt " +  VarQ3_score.getValueForDisplay() + " van de 4 vragen goed" ); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ textbutton5143.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShowBadTxt',actItem:function(){ if(VarQ3_score.lessThan('4'))og5483.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShowGoodTxt',actItem:function(){ if(VarQ3_score.equals('4'))og5487.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33088,0,[610,629,150,36]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":610,"y":629,"width":150,"height":36},"imgDataNormal":"images/desktop_shape2005.png","imgDataOver":"images/desktop_shape2005_over.png","imgDataDown":"images/desktop_shape2005.png","imgDataDisabled":"images/desktop_shape2005_disabled.png","svgDataNormal":"<g transform=\"translate(75 18)\" style=\"\">\n\t<path d=\"M 0 0 L 150 0 L 150 36 L 0 36 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -18) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_5382_14030\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"150\" height=\"36\" xlink:href=\"images/Button_verder_blauw.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 150 0 L 150 36 L 0 36 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_5382_14030&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -18) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(75 18)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(75 18)\" style=\"\">\n\t<path d=\"M 0 0 L 150 0 L 150 36 L 0 36 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -18) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_5382_14032\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"150\" height=\"36\" xlink:href=\"images/Button_verder_blauw_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 150 0 L 150 36 L 0 36 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_5382_14032&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -18) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(75 18)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(75 18)\" style=\"\">\n\t<path d=\"M 0 0 L 150 0 L 150 36 L 0 36 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -18) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_5382_14034\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"150\" height=\"36\" xlink:href=\"images/Button_verder_blauw.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 150 0 L 150 36 L 0 36 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_5382_14034&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -18) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(75 18)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(75 18)\" style=\"\">\n\t<path d=\"M 0 0 L 150 0 L 150 36 L 0 36 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -18) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_5382_14036\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"150\" height=\"36\" xlink:href=\"images/Button_verder_blauw.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 150 0 L 150 36 L 0 36 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_5382_14036&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -18) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(75 18)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
og5471.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og5471",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
shape5472.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 17 17\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(8.5 8.5)\" style=\"\">\n	<path d=\"M 0 8.5 A 8.5 8.5 0 1 1 17 8.5 A 8.5 8.5 0 1 1 0 8.5 Z\" style=\"stroke: rgb(126, 187, 194); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(126, 187, 194); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-8.5, -8.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(8.5 8.5)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 605px; top: 732px; width: 17px; height: 17px; z-index: 35; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj5472",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Ellipse"
	},
	objData:	{"a":[0,32,0,[605,732,17,17]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":605,"y":732,"width":17,"height":17},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape372.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape5473.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 17 17\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(8.5 8.5)\" style=\"\">\n	<path d=\"M 0 8.5 A 8.5 8.5 0 1 1 17 8.5 A 8.5 8.5 0 1 1 0 8.5 Z\" style=\"stroke: rgb(126, 187, 194); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(126, 187, 194); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-8.5, -8.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(8.5 8.5)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 652px; top: 732px; width: 17px; height: 17px; z-index: 36; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj5473",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Ellipse"
	},
	objData:	{"a":[0,32,0,[652,732,17,17]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":652,"y":732,"width":17,"height":17},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape372.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape5474.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 17 17\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(8.5 8.5)\" style=\"\">\n	<path d=\"M 0 8.5 A 8.5 8.5 0 1 1 17 8.5 A 8.5 8.5 0 1 1 0 8.5 Z\" style=\"stroke: rgb(126, 187, 194); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(126, 187, 194); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-8.5, -8.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(8.5 8.5)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 699px; top: 732px; width: 17px; height: 17px; z-index: 37; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj5474",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Ellipse"
	},
	objData:	{"a":[0,32,0,[699,732,17,17]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":699,"y":732,"width":17,"height":17},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape372.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape5475.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 17 17\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(8.5 8.5)\" style=\"\">\n	<path d=\"M 0 8.5 A 8.5 8.5 0 1 1 17 8.5 A 8.5 8.5 0 1 1 0 8.5 Z\" style=\"stroke: rgb(126, 187, 194); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(0, 40, 87); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-8.5, -8.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(8.5 8.5)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 746px; top: 732px; width: 17px; height: 17px; z-index: 38; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj5475",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Ellipse"
	},
	objData:	{"a":[0,32,0,[746,732,17,17]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":746,"y":732,"width":17,"height":17},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape371.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape5477.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 1103 514\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(551.5 257)\" style=\"\">\n	<path d=\"M 0 0 L 1103 0 L 1103 514 L 0 514 L 0 0 Z\" style=\"stroke: rgb(0, 120, 228); stroke-width: 0; stroke-dasharray: 2, 2; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-551.5, -257) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(551.5 257)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 134px; top: 128px; width: 1103px; height: 514px; z-index: 39; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj5477",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Disable pane"
	},
	objData:	{"a":[0,0,0,[133.9999999999999,128.0000000000001,1103,514]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":134,"y":128,"width":1103,"height":514},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape530.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
og5493.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og5493",
	bInsAnc:	undefined,
	objData:	{"a":[0,64,0,[]],"bReadLast":false}
};
shape5494.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 1366 690\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(683 345)\" style=\"\">\n	<path d=\"M 0 0 L 1366 0 L 1366 690 L 0 690 L 0 0 Z\" style=\"stroke: rgb(238, 238, 238); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(214, 239, 240); fill-rule: nonzero; opacity:0.85;filter:alpha(opacity=85); pointer-events: auto;\" transform=\"translate(0 0) translate(-683, -345) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(683 345)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:0.85;filter:alpha(opacity=85);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: -1.13687e-13px; top: 78px; width: 1366px; height: 690px; z-index: 44; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj5494",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Overlay"
	},
	objData:	{"a":[0,0,0,[-1.1368683772161603e-13,78.00000000000017,1366,690]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":78,"width":1366,"height":690},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape6143.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px; opacity: 0.85;\">"}
};
shape5495.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 746 480\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(373 240)\" style=\"\">\n	<path d=\"M 4.84 0 L 741.16 0 A 4.84 4.84 0 0 1 746 4.84 L 746 475.16 A 4.84 4.84 0 0 1 741.16 480 L 4.84 480 A 4.84 4.84 0 0 1 0 475.16 L 0 4.84 A 4.84 4.84 0 0 1 4.84 0 Z\" style=\"stroke: rgb(238, 238, 238); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(39, 158, 218); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-373, -240) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(373 240)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 309px; top: 178px; width: 746px; height: 480px; z-index: 45; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj5495",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Green bg"
	},
	objData:	{"a":[0,0,0,[308.99999999999994,178.00000000000009,746,480]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":309,"y":178,"width":746,"height":480},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape5495.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
image5496.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj5496Img\" src=\"images/Kruisje.png\" style=\"opacity:0.1;filter:alpha(opacity=10); position: absolute; border-style: none; left: 0px; top: 0px; width: 58px; height: 59px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 456px; top: 254px; width: 58px; height: 59px; z-index: 46;",
	cssClasses:	"",
	htmlId:		"tobj5496",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Kruisje"
	},
	objData:	{"a":[0,256,0,[456,254,58,59]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":456,"y":254,"width":58,"height":59}}
};
image5497.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj5497Img\" src=\"images/Kruisje.png\" style=\"opacity:0.1;filter:alpha(opacity=10); position: absolute; border-style: none; left: 0px; top: 0px; width: 58px; height: 59px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 573px; top: 366px; width: 58px; height: 59px; z-index: 47;",
	cssClasses:	"",
	htmlId:		"tobj5497",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Kruisje"
	},
	objData:	{"a":[0,256,0,[573,366,58,59]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":573,"y":366,"width":58,"height":59}}
};
image5498.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj5498Img\" src=\"images/Kruisje.png\" style=\"opacity:0.1;filter:alpha(opacity=10); position: absolute; border-style: none; left: 0px; top: 0px; width: 58px; height: 59px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 813px; top: 422px; width: 58px; height: 59px; z-index: 48;",
	cssClasses:	"",
	htmlId:		"tobj5498",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Kruisje"
	},
	objData:	{"a":[0,256,0,[813,422,58,59]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":813,"y":422,"width":58,"height":59}}
};
image5499.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj5499Img\" src=\"images/Kruisje.png\" style=\"opacity:0.1;filter:alpha(opacity=10); position: absolute; border-style: none; left: 0px; top: 0px; width: 58px; height: 59px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 911px; top: 248px; width: 58px; height: 59px; z-index: 49;",
	cssClasses:	"",
	htmlId:		"tobj5499",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Kruisje"
	},
	objData:	{"a":[0,256,0,[911,248,58,59]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":911,"y":248,"width":58,"height":59}}
};
image5500.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj5500Img\" src=\"images/Kruisje.png\" style=\"opacity:0.1;filter:alpha(opacity=10); position: absolute; border-style: none; left: 0px; top: 0px; width: 58px; height: 59px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 389px; top: 558px; width: 58px; height: 59px; z-index: 50;",
	cssClasses:	"",
	htmlId:		"tobj5500",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Kruisje"
	},
	objData:	{"a":[0,256,0,[389,558,58,59]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":389,"y":558,"width":58,"height":59}}
};
image5501.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj5501Img\" src=\"images/Kruisje.png\" style=\"opacity:0.1;filter:alpha(opacity=10); position: absolute; border-style: none; left: 0px; top: 0px; width: 58px; height: 59px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 917px; top: 551px; width: 58px; height: 59px; z-index: 51;",
	cssClasses:	"",
	htmlId:		"tobj5501",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Kruisje"
	},
	objData:	{"a":[0,256,0,[917,551,58,59]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":917,"y":551,"width":58,"height":59}}
};
image5502.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj5502Img\" src=\"images/Path%20107.png\" style=\"opacity:0.1;filter:alpha(opacity=10); position: absolute; border-style: none; left: 0px; top: 0px; width: 25px; height: 25px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 372px; top: 309px; width: 25px; height: 25px; z-index: 52;",
	cssClasses:	"",
	htmlId:		"tobj5502",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Path 107"
	},
	objData:	{"a":[0,256,0,[372,309,25,25]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":372,"y":309,"width":25,"height":25}}
};
image5503.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj5503Img\" src=\"images/Path%20107.png\" style=\"opacity:0.1;filter:alpha(opacity=10); position: absolute; border-style: none; left: 0px; top: 0px; width: 25px; height: 25px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 503px; top: 492px; width: 25px; height: 25px; z-index: 53;",
	cssClasses:	"",
	htmlId:		"tobj5503",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Path 107"
	},
	objData:	{"a":[0,256,0,[503,492,25,25]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":503,"y":492,"width":25,"height":25}}
};
image5504.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj5504Img\" src=\"images/Path%20107.png\" style=\"opacity:0.1;filter:alpha(opacity=10); position: absolute; border-style: none; left: 0px; top: 0px; width: 25px; height: 25px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 362px; top: 474px; width: 25px; height: 25px; z-index: 54;",
	cssClasses:	"",
	htmlId:		"tobj5504",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Path 107"
	},
	objData:	{"a":[0,256,0,[362,474,25,25]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":362,"y":474,"width":25,"height":25}}
};
image5505.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj5505Img\" src=\"images/Path%20107.png\" style=\"opacity:0.1;filter:alpha(opacity=10); position: absolute; border-style: none; left: 0px; top: 0px; width: 25px; height: 25px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 831px; top: 544px; width: 25px; height: 25px; z-index: 55;",
	cssClasses:	"",
	htmlId:		"tobj5505",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Path 107"
	},
	objData:	{"a":[0,256,0,[831,544,25,25]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":831,"y":544,"width":25,"height":25}}
};
image5506.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj5506Img\" src=\"images/Path%20107.png\" style=\"opacity:0.1;filter:alpha(opacity=10); position: absolute; border-style: none; left: 0px; top: 0px; width: 25px; height: 25px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 565px; top: 211px; width: 25px; height: 25px; z-index: 56;",
	cssClasses:	"",
	htmlId:		"tobj5506",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Path 107"
	},
	objData:	{"a":[0,256,0,[565,211,25,25]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":565,"y":211,"width":25,"height":25}}
};
image5507.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj5507Img\" src=\"images/Path%20107.png\" style=\"opacity:0.1;filter:alpha(opacity=10); position: absolute; border-style: none; left: 0px; top: 0px; width: 25px; height: 25px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 855px; top: 315px; width: 25px; height: 25px; z-index: 57;",
	cssClasses:	"",
	htmlId:		"tobj5507",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Path 107"
	},
	objData:	{"a":[0,256,0,[855,315,25,25]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":855,"y":315,"width":25,"height":25}}
};
image5508.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj5508Img\" src=\"images/Path%20107.png\" style=\"opacity:0.1;filter:alpha(opacity=10); position: absolute; border-style: none; left: 0px; top: 0px; width: 25px; height: 25px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 984px; top: 447px; width: 25px; height: 25px; z-index: 58;",
	cssClasses:	"",
	htmlId:		"tobj5508",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Path 107"
	},
	objData:	{"a":[0,256,0,[984,447,25,25]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":984,"y":447,"width":25,"height":25}}
};
image5509.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj5509Img\" src=\"images/Path%20107.png\" style=\"opacity:0.1;filter:alpha(opacity=10); position: absolute; border-style: none; left: 0px; top: 0px; width: 25px; height: 25px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 737px; top: 337px; width: 25px; height: 25px; z-index: 59;",
	cssClasses:	"",
	htmlId:		"tobj5509",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Path 107"
	},
	objData:	{"a":[0,256,0,[737,337,25,25]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":737,"y":337,"width":25,"height":25}}
};
text5510.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 411px; min-height: 107px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 411px; min-height: 107px;\"><p style=\"margin-left: 0px; text-indent: 0px; margin-top: 0px; margin-bottom: 0px; text-align: center;\"><span style=\"font-size:28pt; color: rgb(255, 255, 255); font-family: &quot;Titillium Web SemiBold&quot;, sans-serif;\">Je hebt " +  VarQ3_score.getValueForDisplay() + " van de 4&nbsp;vragen goed</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 475px; top: 259px; width: 411px; height: 107px; z-index: 60;",
	cssClasses:	"popup-title-white",
	htmlId:		"tobj5510",
	bInsAnc:	0,
	cwObj:		{
		"name":	">>>ScoreTitel1"
	},
	objData:	{"a":[0,64,0,[475,259,411,107]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":475,"y":259,"width":411,"height":107},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
og5487.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og5487",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
textbutton5488.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 176 52\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(88 26)\" style=\"\">\n	<path d=\"M 0 0 L 176 0 L 176 52 L 0 52 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-88, -26) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_5382_14038\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"176\" height=\"52\" xlink:href=\"images/Button_verder.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 176 0 L 176 52 L 0 52 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_5382_14038&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-88, -26) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(88 26)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 694px; top: 547px; width: 176px; height: 52px; z-index: 61; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj5488",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Button verder",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkGoTo',actItem:function(){ trivExitPage('zk_zorgverzekeringen_hoofdstukken_h3_opdracht_stelling_1.html',true,false);
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33088,0,[694,547,176,52]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":694,"y":547,"width":176,"height":52},"imgDataNormal":"images/desktop_shape1972.png","imgDataOver":"images/desktop_shape1972_over.png","imgDataDown":"images/desktop_shape1972.png","imgDataDisabled":"images/desktop_shape1972_disabled.png","svgDataNormal":"<g transform=\"translate(88 26)\" style=\"\">\n\t<path d=\"M 0 0 L 176 0 L 176 52 L 0 52 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-88, -26) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_5382_14038\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"176\" height=\"52\" xlink:href=\"images/Button_verder.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 176 0 L 176 52 L 0 52 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_5382_14038&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-88, -26) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(88 26)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(88 26)\" style=\"\">\n\t<path d=\"M 0 0 L 176 0 L 176 52 L 0 52 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-88, -26) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_5382_14040\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"176\" height=\"52\" xlink:href=\"images/Button_verder_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 176 0 L 176 52 L 0 52 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_5382_14040&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-88, -26) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(88 26)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(88 26)\" style=\"\">\n\t<path d=\"M 0 0 L 176 0 L 176 52 L 0 52 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-88, -26) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_5382_14042\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"176\" height=\"52\" xlink:href=\"images/Button_verder.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 176 0 L 176 52 L 0 52 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_5382_14042&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-88, -26) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(88 26)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(88 26)\" style=\"\">\n\t<path d=\"M 0 0 L 176 0 L 176 52 L 0 52 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-88, -26) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_5382_14044\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"176\" height=\"52\" xlink:href=\"images/Button_verder.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 176 0 L 176 52 L 0 52 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_5382_14044&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-88, -26) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(88 26)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton5490.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 176 52\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(88 26)\" style=\"\">\n	<path d=\"M 0 0 L 176 0 L 176 52 L 0 52 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-88, -26) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_5382_14046\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"176\" height=\"52\" xlink:href=\"images/Button_samenvatting.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 176 0 L 176 52 L 0 52 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_5382_14046&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-88, -26) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(88 26)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 497px; top: 547px; width: 176px; height: 52px; z-index: 62; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj5490",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Button sv",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkGoTo',actItem:function(){ trivExitPage('zk_zorgverzekeringen_hoofdstukken_h3_hotspot_hotspot.html',true,false);
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33088,0,[497,547,176,52]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":497,"y":547,"width":176,"height":52},"imgDataNormal":"images/desktop_shape1974.png","imgDataOver":"images/desktop_shape1974_over.png","imgDataDown":"images/desktop_shape1974.png","imgDataDisabled":"images/desktop_shape1974_disabled.png","svgDataNormal":"<g transform=\"translate(88 26)\" style=\"\">\n\t<path d=\"M 0 0 L 176 0 L 176 52 L 0 52 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-88, -26) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_5382_14046\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"176\" height=\"52\" xlink:href=\"images/Button_samenvatting.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 176 0 L 176 52 L 0 52 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_5382_14046&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-88, -26) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(88 26)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(88 26)\" style=\"\">\n\t<path d=\"M 0 0 L 176 0 L 176 52 L 0 52 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-88, -26) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_5382_14048\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"176\" height=\"52\" xlink:href=\"images/Button_samenvatting_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 176 0 L 176 52 L 0 52 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_5382_14048&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-88, -26) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(88 26)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(88 26)\" style=\"\">\n\t<path d=\"M 0 0 L 176 0 L 176 52 L 0 52 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-88, -26) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_5382_14050\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"176\" height=\"52\" xlink:href=\"images/Button_samenvatting.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 176 0 L 176 52 L 0 52 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_5382_14050&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-88, -26) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(88 26)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(88 26)\" style=\"\">\n\t<path d=\"M 0 0 L 176 0 L 176 52 L 0 52 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-88, -26) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_5382_14052\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"176\" height=\"52\" xlink:href=\"images/Button_samenvatting.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 176 0 L 176 52 L 0 52 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_5382_14052&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-88, -26) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(88 26)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text5492.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 539px; min-height: 135px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 539px; min-height: 135px;\"><p style=\"text-align: center; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><span style=\"font-size:14pt; font-family:pt sans; color:rgb(255, 255, 255)\">Prima! Met je basiskennis over collectieve en aanvullende verzekeringen zit het goed. Klik op ‘verder’ om je te verdiepen in de verzekeringen die Zilveren Kruis aanbiedt. Toch nog even je kennis over collectieve een aanvullende verzekeringen opfrissen? Bekijk dan de samenvatting. &nbsp;</span></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 416px; top: 370px; width: 539px; height: 135px; z-index: 63;",
	cssClasses:	"popup-body-white",
	htmlId:		"tobj5492",
	bInsAnc:	0,
	cwObj:		{
		"name":	">>>Goodtxt"
	},
	objData:	{"a":[0,64,0,[416,370,539,135]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":416,"y":370,"width":539,"height":135},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
og5483.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og5483",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
text5484.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 539px; min-height: 106px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 539px; min-height: 106px;\"><p style=\"text-align: center; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><span style=\"font-size:14pt; font-family:pt sans; color:rgb(255, 255, 255)\">Helaas! Je kennis over collectieve en aanvullende verzekeringen is nog niet helemaal wat hij moet zijn. In de samenvatting hebben we de belangrijkste kenmerken voor je op een rij gezet.&nbsp;</span></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 416px; top: 370px; width: 539px; height: 106px; z-index: 64;",
	cssClasses:	"popup-body-white",
	htmlId:		"tobj5484",
	bInsAnc:	0,
	cwObj:		{
		"name":	">>>Badtxt"
	},
	objData:	{"a":[0,64,0,[416,370,539,106]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":416,"y":370,"width":539,"height":106},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
textbutton5485.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 176 52\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(88 26)\" style=\"\">\n	<path d=\"M 0 0 L 176 0 L 176 52 L 0 52 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-88, -26) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_5382_14054\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"176\" height=\"52\" xlink:href=\"images/Button_samenvatting.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 176 0 L 176 52 L 0 52 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_5382_14054&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-88, -26) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(88 26)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 601px; top: 500px; width: 176px; height: 52px; z-index: 65; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj5485",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Button sv",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkGoTo',actItem:function(){ trivExitPage('zk_zorgverzekeringen_hoofdstukken_h3_hotspot_hotspot.html',true,false);
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33088,0,[601,500,176,52]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":601,"y":500,"width":176,"height":52},"imgDataNormal":"images/desktop_shape1974.png","imgDataOver":"images/desktop_shape1974_over.png","imgDataDown":"images/desktop_shape1974.png","imgDataDisabled":"images/desktop_shape1974_disabled.png","svgDataNormal":"<g transform=\"translate(88 26)\" style=\"\">\n\t<path d=\"M 0 0 L 176 0 L 176 52 L 0 52 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-88, -26) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_5382_14054\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"176\" height=\"52\" xlink:href=\"images/Button_samenvatting.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 176 0 L 176 52 L 0 52 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_5382_14054&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-88, -26) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(88 26)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(88 26)\" style=\"\">\n\t<path d=\"M 0 0 L 176 0 L 176 52 L 0 52 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-88, -26) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_5382_14056\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"176\" height=\"52\" xlink:href=\"images/Button_samenvatting_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 176 0 L 176 52 L 0 52 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_5382_14056&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-88, -26) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(88 26)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(88 26)\" style=\"\">\n\t<path d=\"M 0 0 L 176 0 L 176 52 L 0 52 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-88, -26) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_5382_14058\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"176\" height=\"52\" xlink:href=\"images/Button_samenvatting.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 176 0 L 176 52 L 0 52 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_5382_14058&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-88, -26) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(88 26)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(88 26)\" style=\"\">\n\t<path d=\"M 0 0 L 176 0 L 176 52 L 0 52 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-88, -26) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_5382_14060\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"176\" height=\"52\" xlink:href=\"images/Button_samenvatting.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 176 0 L 176 52 L 0 52 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_5382_14060&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-88, -26) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(88 26)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
rcdObj.rcdData.att_Desktop = 
{
	font:	{"bold":0,"italic":0,"underline":0,"size":"12","color":null,"bgColor":null,"name":"'Arial',sans-serif","lineHeight":"1.15","marginTop":"0px","marginBottom":"0px"},
	pageIdx:	27
};
rcdObj.pgWidth_Desktop = pgWidth_desktop;
rcdObj.preload_Desktop = ["images/Button_sluit_groot.png","images/Logo-ZK.jpg","images/Button_volgende.png","images/Button_volgende_hover.png","images/Button_vorige.png","images/Button_vorige_hover.png","images/Button_check_groot_hover.png","images/Button_check_groot.png","images/dragdrop-correct-dark.png","images/vink_uit%20lichtblauw.png","images/vink_aan%20lichtblauw.png","images/Path%20107.png","images/Kruisje.png","images/Button_samenvatting.png","images/Button_samenvatting_hover.png","images/Button_verder.png","images/Button_verder_hover.png","images/Button_verder_blauw.png","images/Button_verder_blauw_hover.png","images/Button_menu_groot.png"];
rcdObj.pgStyle_Desktop = 'position: absolute; left: 0px; top: 0px; width: 1366px; height: 768px; overflow: hidden; background-size: auto;'
rcdObj.backgrd_Desktop = ["#FFFFFF","",0,0,1];
