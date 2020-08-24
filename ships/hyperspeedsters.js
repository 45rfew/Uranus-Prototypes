/*Hyperspeedsters

Agility is key - that is the consensus among all great pilots. Hyperspeedsters
by Goldman Aerospace follow that principle. Impressively large fighters with
great agility, powerful reactors, and decent shields. They're not really a part
of Prototypes project, but they are valid combat vehicles and since January 4339
they are allowed to participate in Prototypes combat tests.

All Hyperspeedsters are able to engage Reroute ability, boosting their engines
even further at the cost of their reactor's power.

All ships are rather heavy, and most are equipped with shotgun-like weapons.

*/

//$fileTape ifFlag prerender
//$fileTape setWriting false

var rocBirdtD70 = '{"name":"Roc Birdt D-70","author":"Goldman","teamMarkerSize":1.3,"level":6,"model":33,"size":2.3,"specs":{"shield":{"capacity":[350,450],"reload":[8,10]},"generator":{"capacity":[250,300],"reload":[100,150]},"ship":{"mass":450,"speed":[185,200],"rotation":[130,170],"acceleration":[130,170]}},"bodies":{"main":{"section_segments":8,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-68,-66,-30,-30,12,52,60,60],"z":[6,6,6,0,0,0,0,0]},"width":[0,12,12,17,23,25,15,0],"height":[0,3,3,15,15,15,15,0],"texture":[3,8,3,3,10,63]},"detail":{"section_segments":8,"offset":{"x":0,"y":-10,"z":-15},"position":{"x":[0,0,0,0],"y":[-82,-80,70,70],"z":[0,0,0,0]},"width":[0,12,12,0],"height":[0,3,3,0],"texture":[1,15,4]},"detail_1":{"section_segments":6,"offset":{"x":0,"y":25,"z":16},"position":{"x":[0,0,0,0],"y":[-20,-20,20,20],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[63],"angle":90},"detail_2":{"section_segments":6,"offset":{"x":0,"y":35,"z":16},"position":{"x":[0,0,0,0],"y":[-20,-20,20,20],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[63],"angle":90},"detail_3":{"section_segments":6,"offset":{"x":0,"y":25,"z":-16},"position":{"x":[0,0,0,0],"y":[-20,-20,20,20],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[63],"angle":90},"detail_4":{"section_segments":6,"offset":{"x":0,"y":35,"z":-16},"position":{"x":[0,0,0,0],"y":[-20,-20,20,20],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[63],"angle":90},"cockpit":{"section_segments":8,"offset":{"x":0,"y":-24,"z":7},"position":{"x":[0,0,0,0,0],"y":[-5,0,25,35,40],"z":[0,0,0,0,0]},"width":[0,7,11,10,0],"height":[0,13,17,10,0],"propeller":false,"texture":[7,9,4]},"cannon":{"section_segments":8,"offset":{"x":0,"y":-45,"z":-5},"position":{"x":[0,0,0,0,0],"y":[-45,-50,-40,25,35],"z":[0,0,0,0,0]},"width":[0,4,7,7,3],"height":[0,4,7,7,3],"texture":[2,4,63,5],"laser":{"damage":[40,55],"rate":3,"type":1,"speed":[140,160],"number":1}},"gun":{"section_segments":6,"offset":{"x":12,"y":-34,"z":-5},"position":{"x":[0,0,0,0,0],"y":[-10,-15,-5,10,10],"z":[0,0,0,0,0]},"width":[0,1,4,4,0],"height":[0,1,4,4,0],"texture":[2,6,1,5],"angle":-90,"laser":{"damage":[6,9],"rate":4,"type":1,"speed":[150,190],"number":1}},"gun2":{"section_segments":6,"offset":{"x":12,"y":-43,"z":-5},"position":{"x":[0,0,0,0,0],"y":[-10,-15,-5,10,10],"z":[0,0,0,0,0]},"width":[0,1,4,4,0],"height":[0,1,4,4,0],"texture":[2,6,1,5],"angle":-90,"laser":{"damage":[6,9],"rate":4,"type":1,"speed":[150,190],"number":1}},"gun3":{"section_segments":6,"offset":{"x":12,"y":-52,"z":-5},"position":{"x":[0,0,0,0,0],"y":[-10,-15,-5,10,10],"z":[0,0,0,0,0]},"width":[0,1,4,4,0],"height":[0,1,4,4,0],"texture":[2,6,1,5],"angle":-90,"laser":{"damage":[6,9],"rate":4,"type":1,"speed":[150,190],"number":1}},"gun4":{"section_segments":6,"offset":{"x":12,"y":-61,"z":-5},"position":{"x":[0,0,0,0,0],"y":[-10,-15,-5,10,10],"z":[0,0,0,0,0]},"width":[0,1,4,4,0],"height":[0,1,4,4,0],"texture":[2,6,1,5],"angle":-90,"laser":{"damage":[6,9],"rate":4,"type":1,"speed":[150,190],"number":1}},"propeller":{"section_segments":8,"offset":{"x":0,"y":40,"z":0},"position":{"x":[0,0,0,0,0,0,0],"y":[-50,-45,-31,0,20,50,40],"z":[0,0,0,0,0,0,0]},"width":[0,5,10,10,14,12,0],"height":[0,5,10,10,14,12,0],"angle":0,"propeller":true,"texture":[4,4,10,4,11,17]},"propeller2":{"section_segments":8,"offset":{"x":20,"y":40,"z":15},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-40,-37,-21,0,20,30,35,25],"z":[0,0,0,0,0,0,0,0]},"width":[0,5,10,10,15,14,10,0],"height":[0,5,10,10,15,14,10,0],"angle":0,"propeller":true,"texture":[4,4,12,63,63,63,17]},"propeller3":{"section_segments":8,"offset":{"x":20,"y":40,"z":-15},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-40,-37,-21,0,20,30,35,25],"z":[0,0,0,0,0,0,0,0]},"width":[0,5,10,10,15,14,10,0],"height":[0,5,10,10,15,14,10,0],"angle":0,"propeller":true,"texture":[4,4,12,63,63,63,17]}},"wings":{"main":{"length":[40],"width":[120,35],"angle":[0],"position":[0,0],"doubleside":true,"offset":{"x":0,"y":20,"z":0},"bump":{"position":30,"size":10},"texture":[8]},"main2":{"doubleside":true,"offset":{"x":40,"y":20,"z":0},"length":[-2,10],"width":[0,80,50],"angle":[0,0,0],"position":[0,0,20],"texture":[1,63,63],"bump":{"position":30,"size":15}}},"typespec":{"name":"Roc Birdt D-70","level":6,"model":7,"code":607,'+
'"specs":{"shield":{"capacity":[350,450],"reload":[2,10]},"generator":{"capacity":[250,300],"reload":[40,150]},"ship":{"mass":190,"speed":[150,150],"rotation":[90,170],"acceleration":[150,170]}}'+
',"shape":[4.374,4.196,3.072,3.105,2.731,2.318,1.299,1.268,1.302,1.975,1.942,1.954,2.01,2.099,2.234,2.375,2.511,2.719,3.027,3.463,3.717,3.6,3.716,3.627,4.177,4.148,4.177,3.627,3.716,3.6,3.717,3.463,3.027,2.719,2.511,2.375,2.234,2.099,2.01,1.954,1.942,1.975,1.302,1.268,1.299,2.318,2.731,3.105,3.072,4.196],'+
'"lasers":[{"x":0,"y":-4.37,"z":-0.23,"angle":0,"damage":[35,55],"rate":1,"type":1,"speed":[80,160],"number":2,"spread":0,"error":0,"recoil":30}],"radius":4.374}}';

var owlPS = '{"name":"Owl-PS","author":"Goldman","level":6,"model":34,"size":1.65,"specs":{"shield":{"capacity":[300,375],"reload":[8,10]},"generator":{"capacity":[145,185],"reload":[75,100]},"ship":{"mass":300,"speed":[180,205],"rotation":[130,170],"acceleration":[130,170]}},"bodies":{"main":{"section_segments":8,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0],"y":[-70,-75,0,40,60,60],"z":[0,0,0,0,0,0]},"width":[0,12,23,25,15,0],"height":[0,10,15,15,15,0],"texture":[1,10,11,63],"laser":{"damage":[27,35],"rate":3.5,"number":1,"type":1,"speed":[145,185],"error":1}},"cockpit":{"section_segments":8,"offset":{"x":0,"y":5,"z":7},"position":{"x":[0,0,0,0,0],"y":[-10,0,30,40,50],"z":[0,0,0,0,0]},"width":[0,12,15,10,0],"height":[0,13,17,10,0],"propeller":false,"texture":[7,9,4]},"gun":{"section_segments":8,"offset":{"x":32,"y":0,"z":0},"position":{"x":[0,0,0,0,0],"y":[-35,-40,-25,25,35],"z":[0,0,0,0,0]},"width":[0,5,8,10,7],"height":[0,5,8,10,7],"texture":[2,3,4,5],"laser":{"damage":[5,8],"rate":5,"number":1,"type":1,"speed":[145,180],"error":1}},"propulsors":{"section_segments":10,"offset":{"x":54,"y":35,"z":-1},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-20,-15,0,10,20,25,30,40,70,60],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,7,13,13,13,8,8,13,10,0],"height":[0,7,13,13,13,8,8,13,10,0],"texture":[3,4,10,3,3,63,4,4,17],"propeller":true},"propulsors2":{"section_segments":10,"offset":{"x":15,"y":35,"z":5},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-20,-15,0,10,20,25,30,40,60,50],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,7,13,13,13,8,8,13,10,0],"height":[0,7,13,13,13,8,8,13,10,0],"texture":[1,2,10,1,1,63,2,2,17],"propeller":true}},"wings":{"main1":{"doubleside":true,"offset":{"x":20,"y":40,"z":0},"length":[15,10,0,15,0,12,0,20],"width":[35,35,35,100,50,35,35,135,60],"angle":[40,40,0,0,0,-20,0,0],"position":[-20,-20,-10,20,0,0,10,30,10],"texture":[4,11,3,63,63,11,3,63],"bump":{"position":-35,"size":10}}},"typespec":{"name":"Owl-PS","level":5,"model":5,"code":505,'+
'"specs":{"shield":{"capacity":[250,450],"reload":[3,10]},"generator":{"capacity":[150,300],"reload":[30,150]},"ship":{"mass":140,"speed":[150,150],"rotation":[120,170],"acceleration":[200,170]}}'+
',"shape":[2.48,2.506,2.269,1.692,1.345,1.713,1.798,1.714,1.601,1.51,1.427,1.38,1.356,2.429,2.909,3.032,3.208,3.483,3.862,4.123,4.501,5.025,3.853,3.238,3.191,3.141,3.191,3.238,3.853,5.025,4.501,4.123,3.862,3.483,3.208,3.032,2.909,2.429,1.356,1.38,1.427,1.51,1.601,1.714,1.798,1.713,1.345,1.692,2.269,2.506],"lasers":[{"x":1.056,"y":-1.32,"z":0,"angle":0,"damage":[20,8],"rate":3,"type":1,"speed":[145,180],"number":1,"spread":0,"error":1,"recoil":0},{"x":-1.056,"y":-1.32,"z":0,"angle":0,"damage":[20,8],"rate":3,"type":1,"speed":[145,180],"number":1,"spread":0,"error":1,"recoil":0}],"radius":5.025}}';

var thunderbirdPD70 = '{"name":"Thunderbird PD-70","author":"Goldman","teamMarkerSize":1.2,"level":6,"model":35,"size":1.9,"specs":{"shield":{"capacity":[325,425],"reload":[10,12]},"generator":{"capacity":[275,325],"reload":[80,125]},"ship":{"mass":400,"speed":[190,205],"rotation":[130,170],"acceleration":[130,170]}},"bodies":{"main":{"section_segments":10,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-87,-85,-30,-30,0,40,60,60],"z":[7,7,7,0,0,0,0,0]},"width":[0,12,12,17,23,25,15,0],"height":[0,3,3,15,15,15,15,0],"texture":[1,15,4,1,11,63]},"cockpit":{"section_segments":8,"offset":{"x":0,"y":-24,"z":7},"position":{"x":[0,0,0,0,0],"y":[-5,0,25,35,40],"z":[0,0,0,0,0]},"width":[0,10,14,10,0],"height":[0,13,17,10,0],"propeller":false,"texture":[7,9,4]},"gun":{"section_segments":6,"offset":{"x":0,"y":-60,"z":-5},"position":{"x":[0,0,0,0,0],"y":[-45,-50,-35,25,35],"z":[0,0,0,0,0]},"width":[0,2,5,7,3],"height":[0,2,5,7,3],"texture":[2,63,1,5],"laser":{"damage":[28,37],"rate":2.25,"type":1,"speed":[150,175],"number":1,"error":0}},"gun2":{"section_segments":6,"offset":{"x":12,"y":-30,"z":-5},"position":{"x":[0,0,0,0,0],"y":[-15,-20,-10,15,15],"z":[0,0,0,0,0]},"width":[0,2,4,4,0],"height":[0,2,4,4,0],"texture":[2,6,63,5],"angle":-20,"laser":{"damage":[6,10],"rate":4,"type":1,"speed":[150,175],"number":1,"error":0}},"gun3":{"section_segments":6,"offset":{"x":12,"y":-50,"z":-5},"position":{"x":[0,0,0,0,0],"y":[-15,-20,-10,15,15],"z":[0,0,0,0,0]},"width":[0,2,4,4,0],"height":[0,2,4,4,0],"texture":[2,6,63,5],"angle":-20,"laser":{"damage":[6,10],"rate":4,"type":1,"speed":[150,175],"number":1,"error":0}},"gun4":{"section_segments":6,"offset":{"x":12,"y":-70,"z":-5},"position":{"x":[0,0,0,0,0],"y":[-15,-20,-10,15,15],"z":[0,0,0,0,0]},"width":[0,2,4,4,0],"height":[0,2,4,4,0],"texture":[2,6,63,5],"angle":-20,"laser":{"damage":[6,10],"rate":4,"type":1,"speed":[150,175],"number":1,"error":0}},"detail":{"section_segments":6,"offset":{"x":0,"y":-55,"z":9},"position":{"x":[0,0,0,0],"y":[-30,-30,25,25],"z":[0,0,0,0]},"width":[0,4,4,0],"height":[0,2,2,0],"texture":[63],"angle":0},"detail2":{"section_segments":6,"offset":{"x":30,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-20,-20,20,20],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[63],"angle":50},"detail3":{"section_segments":6,"offset":{"x":30,"y":15,"z":0},"position":{"x":[0,0,0,0],"y":[-20,-20,20,20],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[63],"angle":50},"propeller":{"section_segments":8,"offset":{"x":0,"y":40,"z":16},"position":{"x":[0,0,0,0,0,0,0],"y":[-50,-45,-31,0,20,50,40],"z":[0,0,0,0,0,0,0]},"width":[0,5,10,10,15,14,0],"height":[0,5,10,10,15,14,0],"angle":0,"propeller":true,"texture":[4,4,10,4,15,17]},"propeller2":{"section_segments":8,"offset":{"x":0,"y":40,"z":-16},"position":{"x":[0,0,0,0,0,0,0],"y":[-50,-45,-31,0,20,50,40],"z":[0,0,0,0,0,0,0]},"width":[0,5,10,10,15,14,0],"height":[0,5,10,10,15,14,0],"angle":0,"propeller":true,"texture":[4,4,10,4,15,17]},"propeller3":{"section_segments":8,"offset":{"x":45,"y":40,"z":0},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-45,-50,-31,0,20,40,50,40],"z":[0,0,0,0,0,0,0,0]},"width":[0,5,10,10,15,14,10,0],"height":[0,5,10,10,15,14,10,0],"angle":0,"propeller":true,"texture":[4,4,1,63,8,4,17]}},"wings":{"main1":{"doubleside":true,"offset":{"x":10,"y":55,"z":0},"length":[30,5],"width":[35,35,30],"angle":[0,0],"position":[-20,0,-10],"texture":[2],"bump":{"position":-35,"size":10}},"main2":{"doubleside":true,"offset":{"x":47,"y":45,"z":5},"length":[15,0,10],"width":[20,20,100,20],"angle":[50,50,50],"position":[0,0,-15,5],"texture":[8,13,1],"bump":{"position":35,"size":20}},"main3":{"doubleside":true,"offset":{"x":47,"y":45,"z":-5},"length":[15,0,10],"width":[20,20,100,20],"angle":[-50,-50,-50],"position":[0,0,-15,5],"texture":[8,13,1],"bump":{"position":35,"size":20}}},"typespec":{"name":"Thunderbird PD-70","level":6,"model":6,"code":606,'+
'"specs":{"shield":{"capacity":[400,450],"reload":[1,10]},"generator":{"capacity":[150,300],"reload":[35,150]},"ship":{"mass":170,"speed":[150,150],"rotation":[180,170],"acceleration":[110,170]}}'+
',"shape":[4.181,3.441,3.459,1.99,1.702,1.19,1.055,0.967,0.9,0.944,2.283,2.257,2.286,2.355,2.47,2.639,2.884,3.238,3.685,3.691,3.957,4.008,3.779,2.925,3.461,3.427,3.461,2.925,3.779,4.008,3.957,3.691,3.685,3.238,2.884,2.639,2.47,2.355,2.286,2.257,2.283,0.944,0.9,0.967,1.055,1.19,1.702,1.99,3.459,3.441],'+
'"lasers":[{"x":0,"y":-4.37,"z":-0.23,"angle":0,"damage":[22,55],"rate":1,"type":1,"speed":[80,160],"number":5,"spread":0,"error":15,"recoil":30}],"radius":4.181}}';

var wyvernWX = '{"name":"Wyvern WX","author":"Goldman","teamMarkerSize":1.4,"level":6,"model":36,"size":2.45,"specs":{"shield":{"capacity":[550,550],"reload":[15,15]},"generator":{"capacity":[700,700],"reload":[230,230]},"ship":{"mass":560,"speed":[160,160],"rotation":[170,170],"acceleration":[170,170]}},"bodies":{"main":{"section_segments":10,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-87,-85,-30,-30,0,40,60,60],"z":[7,7,7,0,0,0,0,0]},"width":[0,12,12,17,23,25,15,0],"height":[0,3,3,15,15,15,15,0],"texture":[63,15,4,1,11,63]},"cockpit":{"section_segments":8,"offset":{"x":0,"y":-24,"z":7},"position":{"x":[0,0,0,0,0],"y":[-5,0,25,35,40],"z":[0,0,0,0,0]},"width":[0,8,11,10,0],"height":[0,13,17,10,0],"propeller":false,"texture":[7,9,4]},"gun":{"section_segments":6,"offset":{"x":0,"y":-60,"z":-5},"position":{"x":[0,0,0,0,0],"y":[-45,-50,-35,25,35],"z":[0,0,0,0,0]},"width":[0,2,5,7,3],"height":[0,2,5,7,3],"texture":[2,4,1,5],"laser":{"damage":[35,35],"rate":1.25,"type":1,"speed":[150,180],"number":1,"error":1}},"gun2":{"section_segments":6,"offset":{"x":12,"y":-30,"z":-5},"position":{"x":[0,0,0,0,0],"y":[-15,-20,-10,15,15],"z":[0,0,0,0,0]},"width":[0,2,4,4,0],"height":[0,2,4,4,0],"texture":[2,6,63,5],"angle":-20,"laser":{"damage":[10,10],"rate":3,"type":1,"speed":[180,180],"number":0,"angle":15,"error":1}},"gun3":{"section_segments":6,"offset":{"x":12,"y":-50,"z":-5},"position":{"x":[0,0,0,0,0],"y":[-15,-20,-10,15,15],"z":[0,0,0,0,0]},"width":[0,2,4,4,0],"height":[0,2,4,4,0],"texture":[2,6,63,5],"angle":-20,"laser":{"damage":[10,10],"rate":3,"type":1,"speed":[180,180],"number":0,"angle":15,"error":1}},"gun4":{"section_segments":6,"offset":{"x":12,"y":-70,"z":-5},"position":{"x":[0,0,0,0,0],"y":[-15,-20,-10,15,15],"z":[0,0,0,0,0]},"width":[0,2,4,4,0],"height":[0,2,4,4,0],"texture":[2,6,63,5],"angle":-20,"laser":{"damage":[10,10],"rate":3,"type":1,"speed":[180,180],"number":0,"angle":15,"error":1}},"gun5":{"section_segments":8,"offset":{"x":40,"y":40,"z":30},"position":{"x":[0,0,0,0,0],"y":[-35,-40,-25,25,20],"z":[0,0,0,0,0]},"width":[0,2,5,5,0],"height":[0,2,5,5,0],"texture":[2,4,8,8],"laser":{"damage":[35,35],"rate":1.25,"type":1,"speed":[180,180],"number":1,"error":1}},"gun6":{"section_segments":8,"offset":{"x":75,"y":20,"z":0},"position":{"x":[0,0,0,0,0],"y":[-35,-40,-25,25,20],"z":[0,0,0,0,0]},"width":[0,2,5,5,0],"height":[0,2,5,5,0],"texture":[2,4,8,8],"laser":{"damage":[35,35],"rate":1.25,"type":1,"speed":[150,180],"number":1,"error":1}},"detail":{"section_segments":6,"offset":{"x":0,"y":-55,"z":9},"position":{"x":[0,0,0,0],"y":[-30,-30,25,25],"z":[0,0,0,0]},"width":[0,4,4,0],"height":[0,2,2,0],"texture":[63],"angle":0},"detail2":{"section_segments":6,"offset":{"x":30,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-20,-20,20,20],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[63],"angle":50},"detail3":{"section_segments":6,"offset":{"x":30,"y":15,"z":0},"position":{"x":[0,0,0,0],"y":[-20,-20,20,20],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[63],"angle":50},"detail4":{"section_segments":6,"offset":{"x":30,"y":30,"z":0},"position":{"x":[0,0,0,0],"y":[-20,-20,20,20],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[63],"angle":50},"detail5":{"section_segments":6,"offset":{"x":30,"y":45,"z":0},"position":{"x":[0,0,0,0],"y":[-20,-20,20,20],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[63],"angle":50},"propeller":{"section_segments":8,"offset":{"x":0,"y":40,"z":16},"position":{"x":[0,0,0,0,0,0,0],"y":[-50,-45,-31,0,20,50,40],"z":[0,0,0,0,0,0,0]},"width":[0,5,10,10,15,14,0],"height":[0,5,10,10,15,14,0],"angle":0,"propeller":true,"texture":[4,4,10,4,15,17]},"propeller2":{"section_segments":8,"offset":{"x":0,"y":40,"z":-16},"position":{"x":[0,0,0,0,0,0,0],"y":[-50,-45,-31,0,20,50,40],"z":[0,0,0,0,0,0,0]},"width":[0,5,10,10,15,14,0],"height":[0,5,10,10,15,14,0],"angle":0,"propeller":true,"texture":[4,4,10,4,15,17]},"propeller3":{"section_segments":8,"offset":{"x":45,"y":40,"z":0},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-45,-50,-31,0,20,40,50,40],"z":[0,0,0,0,0,0,0,0]},"width":[0,5,10,10,15,14,10,0],"height":[0,5,10,10,15,14,10,0],"angle":0,"propeller":true,"texture":[4,4,1,63,8,4,17]}},"wings":{"main1":{"doubleside":true,"offset":{"x":40,"y":45,"z":5},"length":[15,0,10],"width":[20,20,100,20],"angle":[90,90,90],"position":[0,0,-15,5],"texture":[8,13,63],"bump":{"position":35,"size":20}},"main2":{"doubleside":true,"offset":{"x":40,"y":15,"z":0},"length":[35],"width":[35,35,30],"angle":[0,0],"position":[20,0],"texture":[11],"bump":{"position":-35,"size":10}},"main3":{"doubleside":true,"offset":{"x":0,"y":-45,"z":-5},"length":[15,0,10],"width":[20,20,120,20],"angle":[-90,-90,-90],"position":[0,0,-15,5],"texture":[8,1,4],"bump":{"position":35,"size":22}},"main4":{"doubleside":true,"offset":{"x":40,"y":45,"z":-5},"length":[15,0,10],"width":[20,20,100,20],"angle":[-90,-90,-90],"position":[0,0,-15,5],"texture":[8,13,63],"bump":{"position":35,"size":20}}},"typespec":{"name":"Wyvern WX","level":7,"model":3,"code":703,'+
'"specs":{"shield":{"capacity":[740,550],"reload":[1,15]},"generator":{"capacity":[250,700],"reload":[40,230]},"ship":{"mass":250,"speed":[150,150],"rotation":[120,170],"acceleration":[80,170]}}'+
',"shape":[5.88,4.691,4.46,2.719,2.302,2.002,1.807,1.671,1.566,2.191,3.898,3.902,3.928,3.951,4.047,4.213,4.462,4.498,3.952,4.566,5.103,5.168,4.873,3.772,4.463,4.419,4.463,3.772,4.873,5.168,5.103,4.566,3.952,4.498,4.462,4.213,4.047,3.951,3.928,3.902,3.898,2.191,1.566,1.671,1.807,2.002,2.302,2.719,4.46,4.691],'+
'"lasers":[{"x":0,"y":-4.37,"z":-0.23,"angle":0,"damage":[20,55],"rate":1,"type":1,"speed":[80,160],"number":10,"spread":0,"error":15,"recoil":10}],"radius":5.88}}';

gameplayShips.rocBirdtD70 = rocBirdtD70;
showcaseShips[18] = rocBirdtD70;

//$fileTape setWriting true

var hyperspeedstersTips = [
  "Hyperspeedsters are agile. Dodge.",
  "Utilize your Reroute ability when additional maneuverability is required."
]

shipsData[18] = {name:"Roc Birdt D-70",cl:"Hyperspeedster",company: 4,
  configs: [],
  init: function(){
    this.configs[0] = shipIdsToCodes["rocBirdtD70"];
  },
  boosterCooldownTime: 20,
  boosterEffectTime: 10,
  respawn:function(ship,sh,p){
    ship.custom.sprototype.cooldown = this.boosterCooldownTime;
    ship.set({type:this.configs[0],stats:66666666,healing:false});
  },
  tick:function(ship, sh, p){
    p.cooldown-=sp.systems.aliveBooster.getReloadBuff(ship);
  },
  useAbility:function(ship, abId, sh, p){
    switch(abId){
      case 1:
        if(p.cooldown<0){
          p.cooldown = this.boosterCooldownTime;
          addEffectToShip(ship, 10, this.boosterEffectTime, 1, 10);
          addEffectToShip(ship, 9, this.boosterEffectTime, 3, 10);
        }
        break;
      default:
      log("unknown ability "+abId);
    }
  },
  getAbilities:function(ship,sh,p){
    k = [];
    var state = 0;
    if(p.cooldown>=0){
      state = 2;
    }
    k[1] = {name:"HYPERSPEED Reroute",id:1,
      explanation:"Reroute energy from reactor to engines",
      ready: 1-p.cooldown/this.boosterCooldownTime,
      state: state
    }
    return k;
  },
  tips: hyperspeedstersTips,
  unicodeChar: "\u{27ff}",
  color: "#FF2200"
};

if(!startSettings.prerenderShips) gameplayShips.owlPS = owlPS;
if(!startSettings.prerenderShips) showcaseShips[19] = owlPS;
shipsData[19] = {name:"Owl PS",cl:"Hyperspeedster",company: 4,
  configs: [],
  init: function(){
    this.configs[0] = shipIdsToCodes["owlPS"];
  },
  boosterCooldownTime: 10,
  boosterEffectTime: 6,
  respawn:function(ship,sh,p){
    ship.custom.sprototype.cooldown = this.boosterCooldownTime;
    ship.set({type:this.configs[0],stats:66666666,healing:false});

  },
  tick:function(ship, sh, p){
    p.cooldown--;
  },
  useAbility:function(ship, abId, sh, p){
    switch(abId){
      case 1:
        if(p.cooldown<0){
          p.cooldown = this.boosterCooldownTime;

          addEffectToShip(ship, 10, this.boosterEffectTime, 1, 10);
          addEffectToShip(ship, 9, this.boosterEffectTime, 3, 10);
        }
        break;
      default:
      log("unknown ability "+abId);
    }
  },
  getAbilities:function(ship,sh,p){
    k = [];
    var state = 0;
    if(p.cooldown>=0){
      state = 2;
    }
    k[1] = {name:"HYPERSPEED Reroute",id:1,
      explanation:"Reroute energy from reactor to engines",
      ready: 1-p.cooldown/this.boosterCooldownTime,
      state: state
    }
    return k;
  },
  tips: hyperspeedstersTips,
  unicodeChar: "\u{27ff}",
  color: "#FF2200"
};

if(!startSettings.prerenderShips) gameplayShips.thunderbirdPD70 = thunderbirdPD70;
if(!startSettings.prerenderShips) showcaseShips[20] = thunderbirdPD70;
shipsData[20] = {name:"Thunderbird PD-70",cl:"Hyperspeedster",company: 4,
  configs: [],
  init: function(){
    this.configs[0] = shipIdsToCodes["thunderbirdPD70"];
  },
  boosterCooldownTime: 15,
  boosterEffectTime: 10,
  respawn:function(ship,sh,p){
    ship.custom.sprototype.cooldown = this.boosterCooldownTime;
    ship.set({type:this.configs[0],stats:66666666,healing:false});
  },
  tick:function(ship, sh, p){
    p.cooldown--;
  },
  useAbility:function(ship, abId, sh, p){
    switch(abId){
      case 1:
        if(p.cooldown<0){
          p.cooldown = this.boosterCooldownTime;

          addEffectToShip(ship, 10, this.boosterEffectTime, 1, 10);
          addEffectToShip(ship, 9, this.boosterEffectTime, 3, 10);
        }
        break;
      default:
      log("unknown ability "+abId);
    }
  },
  getAbilities:function(ship,sh,p){
    k = [];
    var state = 0;
    if(p.cooldown>=0){
      state = 2;
    }
    k[1] = {name:"HYPERSPEED Reroute",id:1,
      explanation:"Reroute energy from reactor to engines",
      ready: 1-p.cooldown/this.boosterCooldownTime,
      state: state
    }
    return k;
  },
  tips: hyperspeedstersTips,
  unicodeChar: "\u{27ff}",
  color: "#FF2200"
};

if(!startSettings.prerenderShips) gameplayShips.wyvernWX = wyvernWX;
if(!startSettings.prerenderShips) showcaseShips[21] = wyvernWX;
shipsData[21] = {name:"Wyvern VX",cl:"Hyperspeedster",company: 4,
  configs: [],
  init: function(){
    this.configs[0] = shipIdsToCodes["wyvernWX"];
  },
  boosterCooldownTime: 45,
  boosterEffectTime: 8,
  respawn:function(ship,sh,p){
    ship.custom.sprototype.cooldown = this.boosterCooldownTime;
    ship.set({type:this.configs[0],stats:66666666,healing:false});
  },
  tick:function(ship, sh, p){
    p.cooldown--;
  },
  useAbility:function(ship, abId, sh, p){
    switch(abId){
      case 1:
        if(p.cooldown<0){
          p.cooldown = this.boosterCooldownTime;

          addEffectToShip(ship, 10, this.boosterEffectTime, 1, 10);
          addEffectToShip(ship, 9, this.boosterEffectTime, 3, 10);
        }
        break;
      default:
      log("unknown ability "+abId);
    }
  },
  getAbilities:function(ship,sh,p){
    k = [];
    var state = 0;
    if(p.cooldown>=0){
      state = 2;
    }
    k[1] = {name:"HYPERSPEED Reroute",id:1,
      explanation:"Reroute energy from reactor to engines",
      ready: 1-p.cooldown/this.boosterCooldownTime,
      state: state
    }
    return k;
  },
  tips: hyperspeedstersTips,
  unicodeChar: "\u{27ff}",
  color: "#FF2200"
};
