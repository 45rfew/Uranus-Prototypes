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

var uSeriesShips = {};
uSeriesShips.UBarricade = '{"name":"U-Barricade","level":6,"model":1,"size":2.2,"specs":{"shield":{"capacity":[450,600],"reload":[15,20]},"generator":{"capacity":[500,800],"reload":[100,175]},"ship":{"mass":700,"speed":[100,120],"rotation":[15,30],"acceleration":[20,55]}},"bodies":{"main":{"section_segments":12,"offset":{"x":0,"y":-40,"z":10},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"y":[-170,-180,-150,-130,-110,-79,-60,-40,-20,40,50,120,140,145,135],"z":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},"width":[0,10,16,18,14,14,25,25,35,35,45,45,30,30,0],"height":[0,5,10,12,15,15,20,20,20,20,30,30,15,15,0],"texture":[12,3,2,10,11,1,1,63,63,18,8,13,17,18],"propeller":true},"cockpit":{"section_segments":[40,90,180,270,320],"offset":{"x":0,"y":-210,"z":16},"position":{"x":[0,0,0,0,0],"y":[0,20,40,60,100],"z":[1,0,4,4,4]},"width":[5,10,12,5,5],"height":[0,15,10,10,10],"texture":[8.98,8.98,4]},"uwings1":{"section_segments":[0,30,60,90,120,150,180],"offset":{"x":-35,"y":-30,"z":10},"position":{"x":[0,0,0,0,0,0,0],"y":[-60,-70,40,80,110,110],"z":[0,0,0,0,0,0,0]},"width":[0,5,20,20,10,0],"height":[0,5,20,20,20,0],"texture":[12,2,18,10,13]},"uwings2":{"section_segments":12,"offset":{"x":30,"y":50,"z":30},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-65,-60,-70,-60,40,60,65,50],"z":[0,0,0,0,0,0,0,0]},"width":[0,10,11,12,20,15,15,0],"height":[0,10,14,15,20,15,15,0],"texture":[17,12,18,1,13,17,18],"propeller":true},"uwings4":{"section_segments":12,"offset":{"x":30,"y":50,"z":-10},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-65,-60,-70,-60,40,60,65,50],"z":[0,0,0,0,0,0,0,0]},"width":[0,10,11,12,20,15,15,0],"height":[0,10,14,15,20,15,15,0],"texture":[17,12,18,2,13,17,18],"propeller":true},"uwing5":{"section_segments":[0,45,90,135,180],"offset":{"x":-137,"y":40,"z":-10},"position":{"x":[0,0,0,0,0,0],"y":[-70,-80,40,80,90,100],"z":[0,0,0,0,0,0]},"width":[0,5,15,10,0],"height":[0,5,20,15,0],"texture":[12,2,63,4]},"cannons1":{"section_segments":12,"offset":{"x":0,"y":-90,"z":35},"position":{"x":[0,0,0,0,0,0,0,0,0],"y":[-60,-73,-70,-50,-50,-20,-10,5,30],"z":[0,0,0,0,0,0,0,0,0]},"width":[0,5,5,5,4,4,10,10,10],"height":[0,5,5,5,4,4,7,7,7],"angle":0,"laser":{"damage":[30,50],"rate":4,"type":2,"speed":[200,240],"recoil":20,"number":1,"error":0},"propeller":false,"texture":[4,17,18,4,13,63,10,1]},"box":{"section_segments":[40,45,50,130,135,140,220,225,230,310,315,320],"offset":{"x":0,"y":0,"z":35},"position":{"x":[0,0,0,0,0],"y":[-60,-60,-15,15],"z":[2,0,0,-7]},"width":[0,20,20,20],"height":[0,10,10,10],"texture":[4,17.95,13]},"box2":{"section_segments":[40,45,50,130,135,140,220,225,230,310,315,320],"offset":{"x":0,"y":70,"z":35},"position":{"x":[0,0,0,0,0],"y":[-85,-70,10,25],"z":[2,0,0,-9]},"width":[20,30,30,30],"height":[0,20,20,0],"texture":[4,8.18,18]},"box3":{"section_segments":[40,45,50,130,135,140,220,225,230,310,315,320],"offset":{"x":120,"y":100,"z":-10},"position":{"x":[0,0,0,0,0],"y":[-60,-60,-15,-5],"z":[0,0,0,0]},"width":[0,20,20,20],"height":[0,15,15,0],"texture":[4,17.95,13]},"cannons2":{"section_segments":12,"offset":{"x":32,"y":-70,"z":20},"position":{"x":[0,0,0,0,0,0,-5,-5,0,0],"y":[-60,-70,-67,-50,-50,-20,-10,10,25],"z":[0,0,0,0,0,0,0,0,0,0,0]},"width":[0,5,5,5,4,4,10,10,5,0],"height":[0,5,5,5,4,4,10,10,5,0],"angle":0,"laser":{"damage":[25,45],"rate":3,"type":2,"speed":[190,240],"recoil":20,"number":1,"error":0},"propeller":false,"texture":[4,17,18,4,13,4,10,4]},"cannons3":{"section_segments":12,"offset":{"x":51,"y":50,"z":54},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0],"y":[-60,-70,-67,-50,-50,-10,10,30,50,55,40],"z":[0,0,0,0,0,0,0,0,0,0,0]},"width":[0,5,5,5,4,4,10,10,5,5,0],"height":[0,5,5,5,4,4,10,10,5,5,0],"laser":{"damage":[60,80],"rate":2,"type":2,"speed":[190,240],"recoil":100,"number":1,"error":0},"propeller":true,"texture":[4,17,18,4,13,10,63,13,17,4]},"cannons4":{"section_segments":12,"offset":{"x":70,"y":20,"z":5},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0],"y":[-50,-60,-57,-40,-40,-20,-10,20,50,60,63,55],"z":[0,0,0,0,0,0,0,0,0,0,0,0]},"width":[0,5,5,5,3,4,8,10,10,5,5,0],"height":[0,5,5,5,3,3,15,15,15,5,5,0],"laser":{"damage":[40,60],"rate":2,"type":2,"speed":[190,240],"recoil":75,"number":1,"error":0},"propeller":true,"texture":[4,17,18,4,13,18,63,8,13,17,18]},"cannons5":{"section_segments":12,"offset":{"x":130,"y":40,"z":-10},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0],"y":[-40,-50,-47,-30,-30,-10,0,20,50,60,63,55],"z":[0,0,0,0,0,0,0,0,0,0,0,0]},"width":[0,5,5,5,3,4,8,10,10,5,5,0],"height":[0,5,5,5,3,3,15,15,15,5,5,0],"laser":{"damage":[40,60],"rate":2,"type":2,"speed":[190,240],"recoil":75,"number":1,"error":0},"propeller":true,"texture":[4,17,18,4,13,18,63,8,13,17,18]},"cannons6":{"section_segments":12,"offset":{"x":110,"y":40,"z":-10},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0],"y":[-40,-50,-47,-30,-30,-10,0,20,50,60,63,55],"z":[0,0,0,0,0,0,0,0,0,0,0,0]},"width":[0,5,5,5,3,4,8,10,10,5,5,0],"height":[0,5,5,5,3,3,15,15,15,5,5,0],"laser":{"damage":[40,60],"rate":2,"type":2,"speed":[190,240],"recoil":75,"number":1,"error":0},"propeller":true,"texture":[4,17,18,4,13,18,63,8,13,17,18]},"core_shield":{"angle":180,"section_segments":12,"vertical":true,"offset":{"x":0,"y":30,"z":25},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0],"y":[-10,-5,-5,-4,0,20,25,30,20,0,-10],"z":[0,0,0,0,0,0,0,0,0,0,0]},"width":[25,35,37,40,45,45,40,25,20,20,25],"height":[50,60,62,65,70,110,65,50,45,45,50],"texture":[11,17,4,13,10,13,11,10,9,63]},"hubs1":{"vertical":true,"section_segments":20,"offset":{"x":0,"y":50,"z":-25},"position":{"x":[0,0,0,0,0,0,0],"y":[0,10,5,5,10,9],"z":[0,0,0,0,0,0,0]},"width":[18,15,13,12,10,0],"height":[18,15,13,12,10,0],"texture":[11,18,17,18,18]},"hubs2":{"vertical":true,"section_segments":20,"offset":{"x":0,"y":50,"z":-60},"position":{"x":[0,0,0,0,0,0,0],"y":[0,10,5,5,10,9],"z":[0,0,0,0,0,0,0]},"width":[18,15,13,12,10,0],"height":[18,15,13,12,10,0],"texture":[11,18,17,18,18]},"hubs3":{"vertical":true,"section_segments":20,"offset":{"x":0,"y":40,"z":36},"position":{"x":[0,0,0,0,0,0,0],"y":[0,10,5,5,10,9],"z":[0,0,0,0,0,0,0]},"width":[15,13,11,10,7,0],"height":[15,13,11,10,7,0],"texture":[11,18,17,18,18]},"disc1":{"section_segments":12,"offset":{"x":30,"y":20,"z":35},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[8,8,0,0,0,0,0,8,8,8],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[16,16,16,18,18,18,18,18,16,16],"height":[16,16,16,18,18,18,18,18,16,16],"texture":[17]},"disc2":{"section_segments":12,"offset":{"x":30,"y":37.5,"z":35},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[8,8,0,0,0,0,0,8,8,8],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[18,18,18,20,20,20,20,20,18,18],"height":[18,18,18,20,20,20,20,20,18,18],"texture":[17]},"disc3":{"section_segments":12,"offset":{"x":30,"y":55,"z":35},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[8,8,0,0,0,0,0,8,8,8],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[20,20,20,22,22,22,22,22,20,20],"height":[20,20,20,22,22,22,22,22,20,20],"texture":[17]},"disc4":{"section_segments":12,"offset":{"x":120,"y":80,"z":-10},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[4,4,0,0,0,0,0,4,4,4],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[15,15,15,18,18,18,18,18,15,15],"height":[15,15,15,18,18,18,18,18,15,15],"texture":[17]},"disc5":{"section_segments":12,"offset":{"x":120,"y":70,"z":-10},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[4,4,0,0,0,0,0,4,4,4],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[15,15,15,18,18,18,18,18,15,15],"height":[15,15,15,18,18,18,18,18,15,15],"texture":[17]},"wire1":{"section_segments":8,"angle":55,"offset":{"x":100,"y":55,"z":15},"position":{"x":[5,5,5,5,5,5,6,8,9,10,10],"y":[-65,-64,-51.5,-40,-28,-18,-8,2,12,11],"z":[0,0,-1,-2,-6,-8,-11,-15,-18,-18,-18]},"width":[4,4,4,4,4,4,4,4,3,0],"height":[0,3,3,3,3,3,3,3,3,0],"propeller":false,"texture":[13,13,17,13,17,13,17,13,17]},"wire2":{"section_segments":8,"angle":55,"offset":{"x":100,"y":75,"z":15},"position":{"x":[5,5,5,5,5,5,6,8,9,10,10],"y":[-65,-64,-51.5,-40,-28,-18,-8,2,12,11],"z":[0,0,-1,-2,-6,-8,-11,-15,-18,-18,-18]},"width":[4,4,4,4,4,4,4,4,3,0],"height":[0,3,3,3,3,3,3,3,3,0],"propeller":false,"texture":[13,13,17,13,17,13,17,13,17]}},"wings":{"front":{"doubleside":true,"offset":{"x":10,"y":-90,"z":10},"length":[0,60],"width":[0,160,0],"angle":[0,0,0,90],"position":[0,-50,120],"texture":[13,63],"bump":{"position":50,"size":5}},"spike1":{"doubleside":true,"offset":{"x":30,"y":100,"z":20},"length":[50,0,5],"width":[40,20,100,10],"angle":[60,60,60],"position":[-50,-30,-50,-20],"texture":[3,63,63],"bump":{"position":40,"size":17}},"main":{"length":[75,55],"width":[100,60,35],"angle":[-10,-15],"position":[-50,-20,10],"texture":[18],"doubleside":true,"offset":{"x":0,"y":60,"z":15},"bump":{"position":-30,"size":15}},"side":{"doubleside":true,"offset":{"x":135,"y":70,"z":-10},"length":[0,50],"width":[0,70,0],"angle":[0,50],"position":[0,0,90],"texture":[63],"bump":{"position":10,"size":10}},"side2":{"doubleside":true,"offset":{"x":135,"y":70,"z":-10},"length":[0,40],"width":[0,40,0],"angle":[0,-30],"position":[0,0,50],"texture":[63],"bump":{"position":10,"size":10}}},"typespec":{"name":"U-Barricade","level":6,"model":1,"code":601,"specs":{"shield":{"capacity":[450,600],"reload":[15,20]},"generator":{"capacity":[500,800],"reload":[100,175]},"ship":{"mass":700,"speed":[100,120],"rotation":[15,30],"acceleration":[20,55]}},"shape":[9.69,9.051,6.498,5.122,4.28,3.686,3.324,3.079,3.653,3.74,6.491,6.463,6.393,6.505,6.745,7.091,7.609,9.143,9.988,10.181,5.009,5.236,5.434,5.32,5.151,4.629,5.151,5.32,5.434,5.236,5.009,10.181,9.988,9.143,7.609,7.091,6.745,6.505,6.393,6.463,6.491,3.74,3.653,3.079,3.324,3.686,4.28,5.122,6.498,9.051],"lasers":[{"x":0,"y":-7.172,"z":1.54,"angle":0,"damage":[30,50],"rate":4,"type":2,"speed":[200,240],"number":1,"spread":0,"error":0,"recoil":20},{"x":1.408,"y":-6.16,"z":0.88,"angle":0,"damage":[25,45],"rate":3,"type":2,"speed":[190,240],"number":1,"spread":0,"error":0,"recoil":20},{"x":-1.408,"y":-6.16,"z":0.88,"angle":0,"damage":[25,45],"rate":3,"type":2,"speed":[190,240],"number":1,"spread":0,"error":0,"recoil":20},{"x":2.244,"y":-0.88,"z":2.376,"angle":0,"damage":[60,80],"rate":2,"type":2,"speed":[190,240],"number":1,"spread":0,"error":0,"recoil":100},{"x":-2.244,"y":-0.88,"z":2.376,"angle":0,"damage":[60,80],"rate":2,"type":2,"speed":[190,240],"number":1,"spread":0,"error":0,"recoil":100},{"x":3.08,"y":-1.76,"z":0.22,"angle":0,"damage":[40,60],"rate":2,"type":2,"speed":[190,240],"number":1,"spread":0,"error":0,"recoil":75},{"x":-3.08,"y":-1.76,"z":0.22,"angle":0,"damage":[40,60],"rate":2,"type":2,"speed":[190,240],"number":1,"spread":0,"error":0,"recoil":75},{"x":5.72,"y":-0.44,"z":-0.44,"angle":0,"damage":[40,60],"rate":2,"type":2,"speed":[190,240],"number":1,"spread":0,"error":0,"recoil":75},{"x":-5.72,"y":-0.44,"z":-0.44,"angle":0,"damage":[40,60],"rate":2,"type":2,"speed":[190,240],"number":1,"spread":0,"error":0,"recoil":75},{"x":4.84,"y":-0.44,"z":-0.44,"angle":0,"damage":[40,60],"rate":2,"type":2,"speed":[190,240],"number":1,"spread":0,"error":0,"recoil":75},{"x":-4.84,"y":-0.44,"z":-0.44,"angle":0,"damage":[40,60],"rate":2,"type":2,"speed":[190,240],"number":1,"spread":0,"error":0,"recoil":75}],"radius":10.181}}';

uSeriesShips.USpeeder = '{"name":"U-Speeder","level":6,"model":4,"size":2,"specs":{"shield":{"capacity":[300,400],"reload":[10,20]},"generator":{"capacity":[200,400],"reload":[100,200]},"ship":{"mass":250,"speed":[100,120],"rotation":[40,50],"acceleration":[60,110]}},"bodies":{"main":{"section_segments":8,"offset":{"x":0,"y":-50,"z":0},"position":{"x":[0,0,0,0,0,0,0],"y":[0,-10,30,70,120,100],"z":[0,0,0,0,0,0,0]},"width":[0,10,25,30,20,0],"height":[0,5,20,25,20,0],"texture":[15,4,3,8,17],"propeller":true},"cockpit":{"section_segments":[40,90,180,270,320],"offset":{"x":0,"y":-35,"z":15},"position":{"x":[0,0,0,0],"y":[0,30,60,95],"z":[0,2,8,6]},"width":[5,13,13,5],"height":[0,12,12,0],"texture":[8.98,8.98,63]},"uwings_front_left":{"section_segments":[0,45,90,135,180],"offset":{"x":0,"y":-50,"z":0},"position":{"x":[-55,-55,-55,-55,-55,-55],"y":[-90,-100,40,80,90,100],"z":[0,0,0,0,0,0]},"width":[0,10,25,20,0],"height":[0,5,25,20,0],"texture":[12,2,18,4]},"uwings_front_right":{"section_segments":[180,225,270,315,360],"offset":{"x":0,"y":-50,"z":0},"position":{"x":[55,55,55,55,55,55],"y":[-90,-100,40,80,90,100],"z":[0,0,0,0,0,0]},"width":[0,10,25,20,0],"height":[0,5,25,20,0],"texture":[12,2,18,4]},"cannons_front":{"section_segments":12,"offset":{"x":45,"y":-30,"z":0},"position":{"x":[0,0,0,5,5,10,10],"y":[-60,-70,-20,0,20,50,45],"z":[0,0,0,0,0,-1,-1]},"width":[0,5,6,15,15,5,0],"height":[0,5,5,15,15,5,0],"laser":{"damage":[60,80],"rate":2,"type":2,"speed":[190,240],"recoil":100,"number":1,"error":0},"propeller":false,"texture":[4,13,18,4,63,4]},"cannon_rear":{"section_segments":12,"offset":{"x":0,"y":60,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"y":[-60,-75,-60,-62,-63,-60,-45,-47,-49,-45,-30,-33,-35,-30,-15,-18,-20,-15,0],"z":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},"width":[0,2,3,4,6,3,4,6,8,5,6,7,11,7,8,12,15,8,10],"height":[0,2,3,4,6,3,4,6,8,5,6,7,11,7,8,12,15,8,10],"angle":180,"laser":{"damage":[20,40],"rate":10,"type":2,"speed":[150,200],"recoil":100,"number":1,"error":0},"propeller":false,"texture":[4,4,8,13,17,4,2,2,17,4,2,2,17,4,2,2,17,4]},"engines":{"section_segments":12,"offset":{"x":25,"y":-30,"z":0},"position":{"x":[-7,-7,-2,0,0,0,0,0],"y":[15,0,20,50,75,80,65],"z":[0,0,0,0,0,0,0,0]},"width":[0,7,10,11,10,8,0],"height":[0,15,18,19,18,15,0],"texture":[3,8,63,13,17,18],"propeller":true},"tube1":{"section_segments":4,"offset":{"x":20,"y":20,"z":14},"position":{"x":[-4,0,0,0],"y":[-40,-25,125,128],"z":[-4,0,0,0]},"width":[0,2,2,0],"height":[0,2,2,2],"texture":[13,4,13]},"tube2":{"section_segments":4,"offset":{"x":20,"y":20,"z":-14},"position":{"x":[-4,0,0,0],"y":[-40,-25,125,128],"z":[4,0,0,0]},"width":[0,2,2,0],"height":[0,2,2,2],"texture":[13,4,13]},"disc5":{"section_segments":12,"offset":{"x":0,"y":145,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[0,0,0,0,0,5,5,5,0,0],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[22,22,22,25,25,25,25,22,22,22],"height":[22,22,22,25,25,25,25,22,22,22],"texture":[4],"propeller":false},"wire":{"section_segments":8,"angle":-45,"offset":{"x":9,"y":30,"z":30},"position":{"x":[5,5,5,5,5,5,6,8,9,10,10],"y":[-65,-64,-51.5,-40,-28,-18,-8,2,12,11],"z":[-15,-15,-9,-8,-8,-9,-12,-15,-18,-18,-18]},"width":[4,4,4,4,4,4,4,4,3,0],"height":[0,3,3,3,3,3,3,3,3,0],"propeller":false,"texture":[13,13,17,13,17,13,17,13,17]}},"wings":{"main":{"doubleside":true,"offset":{"x":10,"y":25,"z":0},"length":[50],"width":[80,50],"angle":[0],"position":[0,-50],"texture":[18],"bump":{"position":10,"size":20}},"inner":{"offset":{"x":-57,"y":-85,"z":0},"length":[5],"width":[165,112],"angle":[0],"position":[20,0],"texture":[17,63],"doubleside":true,"bump":{"position":30,"size":4}}},"typespec":{"name":"U-Speeder","level":4,"model":4,"code":404,"specs":{"shield":{"capacity":[300,400],"reload":[10,20]},"generator":{"capacity":[200,400],"reload":[100,200]},"ship":{"mass":250,"speed":[100,120],"rotation":[40,50],"acceleration":[60,110]}},"shape":[2.405,2.433,2.33,6.539,6.199,5.137,4.472,4.033,3.694,3.475,3.333,3.256,3.225,3.15,3.149,3.227,3.231,2.933,2.72,2.197,2.396,2.369,2.821,4.683,6.083,6.012,6.083,4.683,2.821,2.369,2.396,2.197,2.72,2.933,3.231,3.227,3.149,3.148,3.225,3.256,3.333,3.475,3.694,4.033,4.472,5.137,6.199,6.539,2.33,2.433],"lasers":[{"x":1.8,"y":-4,"z":0,"angle":0,"damage":[60,80],"rate":2,"type":2,"speed":[190,240],"number":1,"spread":0,"error":0,"recoil":100},{"x":-1.8,"y":-4,"z":0,"angle":0,"damage":[60,80],"rate":2,"type":2,"speed":[190,240],"number":1,"spread":0,"error":0,"recoil":100},{"x":0,"y":5.4,"z":0,"angle":180,"damage":[20,40],"rate":10,"type":2,"speed":[150,200],"number":1,"spread":0,"error":0,"recoil":100}],"radius":6.539}}';

uSeriesShips.USniper2 = '{"name":"U-Sniper Mk 2","level":6,"model":1,"size":1.8,"specs":{"shield":{"capacity":[250,300],"reload":[4,6]},"generator":{"capacity":[100,160],"reload":[50,60]},"ship":{"mass":200,"speed":[125,145],"rotation":[50,70],"acceleration":[60,110]}},"bodies":{"main":{"section_segments":8,"offset":{"x":0,"y":-15,"z":0},"position":{"x":[0,0,0,0,0,0],"y":[0,-10,40,100,90,100],"z":[0,0,0,0,0,0]},"width":[0,10,25,10,0],"height":[0,5,15,10,0],"texture":[2,1,10,18],"propeller":true},"cockpit":{"section_segments":[40,90,180,270,320],"offset":{"x":0,"y":-25,"z":11},"position":{"x":[0,0,0,0],"y":[25,50,70,85],"z":[-1,0,0,1]},"width":[5,12,10,5],"height":[0,12,15,0],"texture":[8.98,8.98,4]},"uwings":{"section_segments":[0,45,90,135,180],"offset":{"x":-55,"y":-30,"z":0},"position":{"x":[0,0,0,0,0,0],"y":[-90,-100,40,80,90,100],"z":[0,0,0,0,0,0]},"width":[0,10,25,20,0],"height":[0,5,25,20,0],"texture":[12,1,63,3]},"cannons_front":{"section_segments":12,"offset":{"x":45,"y":10,"z":0},"position":{"x":[0,0,0,10,10,10,10],"y":[-60,-70,-20,0,40,50],"z":[0,0,0,0,0,-1,-1]},"width":[0,5,6,15,10,0],"height":[0,5,5,25,20,0],"angle":0,"laser":{"damage":[40,60],"rate":2,"type":2,"speed":[190,240],"recoil":200,"number":1,"error":0},"propeller":false,"texture":[17,13,18,63,3]},"side_propulsors":{"section_segments":10,"offset":{"x":20,"y":15,"z":0},"position":{"x":[-10,-10,0,0,0,0,0,0,0,0],"y":[-20,-30,15,35,40,50,55,60,55],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,5,10,10,10,5,5,5,0],"height":[0,5,10,10,10,5,5,5,0],"propeller":true,"texture":[6,10,11,4,63,11,17,12]},"wing_engines":{"section_segments":10,"offset":{"x":58,"y":5,"z":0},"position":{"x":[0,0,0,0],"y":[40,55,60,55],"z":[0,0,0,0]},"width":[10,10,13,0],"height":[10,10,13,0],"propeller":true,"texture":[13,17,18]}},"wings":{"main":{"doubleside":true,"offset":{"x":10,"y":35,"z":0},"length":[50],"width":[60,30],"angle":[0],"position":[10,-15],"texture":[11],"bump":{"position":10,"size":15}},"inner":{"offset":{"x":-57,"y":-65,"z":0},"length":[5],"width":[165,112],"angle":[0],"position":[20,0],"texture":[17,63],"doubleside":true,"bump":{"position":30,"size":4}}},"typespec":{"name":"U-Sniper Mk 2","level":1,"model":1,"code":101,"specs":{"shield":{"capacity":[250,300],"reload":[4,6]},"generator":{"capacity":[100,160],"reload":[50,60]},"ship":{"mass":200,"speed":[125,145],"rotation":[50,70],"acceleration":[60,110]}},"shape":[0.902,0.916,0.946,5.172,5.232,4.531,3.93,3.534,3.255,3.054,2.924,2.853,2.837,2.902,2.925,2.995,3.121,3.245,3.449,3.417,3.036,2.398,2.843,2.839,3.081,3.066,3.081,2.839,2.843,2.398,3.036,3.417,3.449,3.245,3.121,2.995,2.925,2.902,2.837,2.853,2.924,3.054,3.255,3.534,3.93,4.531,5.232,5.172,0.946,0.916],"lasers":[{"x":1.62,"y":-2.16,"z":0,"angle":0,"damage":[40,60],"rate":2,"type":2,"speed":[190,240],"number":1,"spread":0,"error":0,"recoil":200},{"x":-1.62,"y":-2.16,"z":0,"angle":0,"damage":[40,60],"rate":2,"type":2,"speed":[190,240],"number":1,"spread":0,"error":0,"recoil":200}],"radius":5.232}}';
for(var sh in uSeriesShips){
  var parsed = JSON.parse(uSeriesShips[sh]);

  parsed.scaleUp = 0.75;

  uSeriesShips[sh] = JSON.stringify(parsed);
}

gameplayShips.UBarricade = uSeriesShips.UBarricade;
gameplayShips.USpeeder = uSeriesShips.USpeeder;
gameplayShips.USniper2 = uSeriesShips.USniper2;
showcaseShips[33] = uSeriesShips.UBarricade;
showcaseShips[34] = uSeriesShips.USpeeder;
showcaseShips[35] = uSeriesShips.USniper2;

//$fileTape setWriting true

shipsData[33] = {name:"U-Barricade",cl:"U-Series Ship",company: 0,
  configs: [],
  init: function(){
    this.configs[0] = shipIdsToCodes["UBarricade"];
  },
  respawn:function(ship,sh,p){
    ship.set({type:this.configs[0],stats:66666666,healing:false});
  },
  tick:function(ship, sh, p){
  },
  useAbility:function(ship, abId, sh, p){
    switch(abId){
      case 1:
        break;
      default:
      log("unknown ability "+abId);
    }
  },
  getAbilities:function(ship,sh,p){
    k = [];
    k[1] = {name:"One-burst kills",id:1,
      explanation:"Because that's skill. Right?",
      ready: 0,
      state: 2
    }
    return k;
  },
  tips: [
    "Try mining. I bet that'll work."
  ],
  unicodeChar: ".",
  color: "#222222"
};

shipsData[34] = {name:"U-Speeder",cl:"U-Series Ship",company: 0,
  configs: [],
  init: function(){
    this.configs[0] = shipIdsToCodes["USpeeder"];
  },
  respawn:function(ship,sh,p){
    ship.set({type:this.configs[0],stats:66666666,healing:false});
  },
  tick:function(ship, sh, p){
  },
  useAbility:function(ship, abId, sh, p){
    switch(abId){
      case 1:
        break;
      default:
      log("unknown ability "+abId);
    }
  },
  getAbilities:function(ship,sh,p){
    k = [];
    k[1] = {name:"Recoil-based propulsion",id:1,
      explanation:"Sounds good. Doesn't work.",
      ready: 0,
      state: 2
    }
    return k;
  },
  tips: [
    "Try mining. I bet that'll work."
  ],
  unicodeChar: ".",
  color: "#222222"
};

shipsData[35] = {name:"U-Sniper MK II",cl:"U-Series Ship",company: 0,
  configs: [],
  init: function(){
    this.configs[0] = shipIdsToCodes["USniper2"];
  },
  respawn:function(ship,sh,p){
    ship.set({type:this.configs[0],stats:66666666,healing:false});
  },
  tick:function(ship, sh, p){
  },
  useAbility:function(ship, abId, sh, p){
    switch(abId){
      case 1:
        break;
      default:
      log("unknown ability "+abId);
    }
  },
  getAbilities:function(ship,sh,p){
    k = [];
    k[1] = {name:"They do look cool",id:1,
      explanation:"Can't argue with that",
      ready: 0,
      state: 2
    }
    return k;
  },
  tips: [
    "Try mining. I bet that'll work."
  ],
  unicodeChar: ".",
  color: "#222222"
};
