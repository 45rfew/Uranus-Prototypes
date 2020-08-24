/*Lobster

The enginers at Goldman Aerospace must've been very bored, when they decided to
design a bunch of fish-like space combat vehicles. They designed a whole lot of
them, and called them Nautic-Series. Two of said fighters have been approved for
participation in Prototypes combat tests.

Turtle is a medium-large fighter/rammer, with exceptional survivability.

It is a turtle. A space turtle. While its combat strength can't be rated too
high, where it truly shines is surviving enemy fire. Its Shell it up! ability
lets it tuck its bits and pieces into the shell - just like a real turtle would!
Then, all of its power is directed towards shields, making it incredibly hard to
hit. Sadly, this kind of shielding doesn't last, and thus the prior shield
state is restored when Unshelling.

*/

//$fileTape ifFlag prerender
//$fileTape setWriting false

var virtualBlade_main = '{"name":"VirtualBlade","level":6,"author":"Finalizer","scaleUp":0.8,"model":1,"size":2,"specs":{"shield":{"capacity":[350,500],"reload":[10,20]},"generator":{"capacity":[550,700],"reload":[350,450]},"ship":{"mass":700,"speed":[80,100],"rotation":[20,30],"acceleration":[50,90]}},"bodies":{"main":{"section_segments":12,"offset":{"x":0,"y":0,"z":-10},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"y":[-100,-85,-83,-75,-73,-65,-70,-50,-20,10,50,65,70,60],"z":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},"width":[0,2,2,3,3,4,15,30,40,35,35,20,20,0],"height":[0,2,2,3,3,4,15,30,25,20,20,10,10,0],"propeller":true,"texture":[4,17,4,17,4,17,1,1,10,1,12,17,18]},"uwings_front":{"section_segments":[0,30,60,90,120,150,180],"offset":{"x":-25,"y":-70,"z":-10},"position":{"x":[0,0,0,0,0,0,0],"y":[-60,-70,40,120,180,130],"z":[0,0,0,0,0,0,0]},"width":[0,10,20,15,10,0],"height":[0,10,20,15,10,0],"texture":[12,2,18,3,13]},"cockpit":{"section_segments":[40,90,180,270,320],"offset":{"x":0,"y":-85,"z":15},"position":{"x":[0,0,0,0],"y":[15,35,50,95],"z":[-10,0,6,6]},"width":[5,13,13,13],"height":[0,14,12,12],"texture":[8.98,8.98,4]},"deco":{"section_segments":7,"angle":-2,"offset":{"x":22,"y":-130,"z":-10},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"y":[0,3,7,11,14,17,21,25,28,31,35,39,42,45,49,53,57],"z":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},"width":[1,4,6,4,1,4,6,4,1,4,6,4,1,4,6,4,1],"height":[1,4,6,4,1,4,6,4,1,4,6,4,1,4,6,4,1],"texture":[4,17,17,4,4,17,17,4,4,17,17,4,4,17,17,4]},"rear_cockpit":{"angle":180,"section_segments":[40,90,180,270,320],"offset":{"x":0,"y":85,"z":15},"position":{"x":[0,0,0,0],"y":[15,35,50,95],"z":[-10,3,6,6]},"width":[5,5,5,5],"height":[0,14,12,12],"texture":[9.93,1,4]},"tube1":{"angle":180,"section_segments":4,"offset":{"x":23,"y":0,"z":10},"position":{"x":[-4,0,0,0],"y":[-40,10,140,143],"z":[-4,1,-10,-10]},"width":[0,2,2,0],"height":[0,2,2,0],"texture":[13,17,13]},"tube2":{"angle":180,"section_segments":4,"offset":{"x":23,"y":0,"z":-30},"position":{"x":[-4,0,0,0],"y":[-40,10,140,143],"z":[-4,1,10,10]},"width":[0,2,2,0],"height":[0,2,2,0],"texture":[13,17,13]},"top_box":{"section_segments":[40,45,50,130,135,140,220,225,230,310,315,320],"offset":{"x":0,"y":-20,"z":10},"position":{"x":[0,0,0,0,0,0,0],"y":[-40,-20,0,45,70,85],"z":[-10,0,0,0,0,-5]},"width":[15,20,30,30,20,20],"height":[0,18,20,20,20,0],"texture":[1,1,9.95,11,12]},"engine1":{"section_segments":[30,90,150,210,270,330],"offset":{"x":35,"y":30,"z":15},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0,0,0],"y":[-90,-100,-95,-90,-80,-70,-60,-30,-30,-20,0,5,0],"z":[0,0,0,0,0,0,0,0,0,0,0,0,0,0]},"width":[0,5,8,10.5,15,15,8,8,15,15,10,10,0],"height":[0,5,8,10.5,15,15,8,8,15,15,10,10,0],"texture":[12,3.9,16.9,3.9,12.9,3.9,16.9,3.9,13,17.97,17,18],"propeller":true},"t1":{"section_segments":6,"offset":{"x":42,"y":-20,"z":26},"position":{"x":[0,0,0,0,0],"y":[-20,-20,30,70,70],"z":[0,0,0,0,0]},"width":[0,2,2,2,0],"height":[0,2,2,2,0],"texture":[12.9,12.9,2.9]},"t2":{"section_segments":6,"offset":{"x":28,"y":-20,"z":26},"position":{"x":[0,0,0,0,0],"y":[-20,-20,30,70,70],"z":[0,0,0,0,0]},"width":[0,2,2,2,0],"height":[0,2,2,2,0],"texture":[12.9,12.9,2.9]},"t3":{"section_segments":6,"offset":{"x":48,"y":-20,"z":15},"position":{"x":[0,0,0,0,0],"y":[-20,-20,30,70,70],"z":[0,0,0,0,0]},"width":[0,2,2,2,0],"height":[0,2,2,2,0],"texture":[12.9,12.9,2.9]},"t4":{"section_segments":6,"offset":{"x":22,"y":-20,"z":15},"position":{"x":[0,0,0,0,0],"y":[-20,-20,30,70,70],"z":[0,0,0,0,0]},"width":[0,2,2,2,0],"height":[0,2,2,2,0],"texture":[12.9,12.9,2.9]},"t5":{"section_segments":6,"offset":{"x":42,"y":-20,"z":4},"position":{"x":[0,0,0,0,0],"y":[-20,-20,30,70,70],"z":[0,0,0,0,0]},"width":[0,2,2,2,0],"height":[0,2,2,2,0],"texture":[12.9,12.9,2.9]},"t6":{"section_segments":6,"offset":{"x":28,"y":-20,"z":4},"position":{"x":[0,0,0,0,0],"y":[-20,-20,30,70,70],"z":[0,0,0,0,0]},"width":[0,2,2,2,0],"height":[0,2,2,2,0],"texture":[12.9,12.9,2.9]},"engine2":{"section_segments":[30,90,150,210,270,330],"offset":{"x":55,"y":30,"z":-5},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0,0,0],"y":[-90,-100,-95,-90,-80,-70,-60,-30,-30,-20,0,5,0],"z":[0,0,0,0,0,0,0,0,0,0,0,0,0,0]},"width":[0,5,8,10.5,15,15,8,8,15,15,10,10,0],"height":[0,5,8,10.5,15,15,8,8,15,15,10,10,0],"texture":[12,3.9,16.9,3.9,12.9,3.9,16.9,3.9,13,17.97,17,18],"propeller":true},"t7":{"section_segments":6,"offset":{"x":62,"y":-20,"z":6},"position":{"x":[0,0,0,0,0],"y":[-20,-20,30,70,70],"z":[0,0,0,0,0]},"width":[0,2,2,2,0],"height":[0,2,2,2,0],"texture":[12.9,12.9,2.9]},"t8":{"section_segments":6,"offset":{"x":48,"y":-20,"z":6},"position":{"x":[0,0,0,0,0],"y":[-20,-20,30,70,70],"z":[0,0,0,0,0]},"width":[0,2,2,2,0],"height":[0,2,2,2,0],"texture":[12.9,12.9,2.9]},"t9":{"section_segments":6,"offset":{"x":68,"y":-20,"z":-5},"position":{"x":[0,0,0,0,0],"y":[-20,-20,30,70,70],"z":[0,0,0,0,0]},"width":[0,2,2,2,0],"height":[0,2,2,2,0],"texture":[12.9,12.9,2.9]},"t10":{"section_segments":6,"offset":{"x":42,"y":-20,"z":-5},"position":{"x":[0,0,0,0,0],"y":[-20,-20,30,70,70],"z":[0,0,0,0,0]},"width":[0,2,2,2,0],"height":[0,2,2,2,0],"texture":[12.9,12.9,2.9]},"t11":{"section_segments":6,"offset":{"x":62,"y":-20,"z":-16},"position":{"x":[0,0,0,0,0],"y":[-20,-20,30,70,70],"z":[0,0,0,0,0]},"width":[0,2,2,2,0],"height":[0,2,2,2,0],"texture":[12.9,12.9,2.9]},"t12":{"section_segments":6,"offset":{"x":48,"y":-20,"z":-16},"position":{"x":[0,0,0,0,0],"y":[-20,-20,30,70,70],"z":[0,0,0,0,0]},"width":[0,2,2,2,0],"height":[0,2,2,2,0],"texture":[12.9,12.9,2.9]},"engine_cap1":{"section_segments":[30,90,150,210,270,330],"offset":{"x":55,"y":50,"z":-5},"position":{"x":[0,0,0,0,0],"y":[5,0,0,5,5],"z":[0,0,0,0,0]},"width":[12,12,15,15,12],"height":[12,12,15,15,12],"texture":[12,1.9]},"engine_cap2":{"section_segments":[30,90,150,210,270,330],"offset":{"x":35,"y":50,"z":15},"position":{"x":[0,0,0,0,0],"y":[5,0,0,5,5],"z":[0,0,0,0,0]},"width":[12,12,15,15,12],"height":[12,12,15,15,12],"texture":[12,1.9]},"b_c1":{"section_segments":12,"offset":{"x":0,"y":-260,"z":-5},"position":{"x":[0,0,0,0,0,0,0],"y":[0],"z":[0,0,0,0,0,0,0]},"width":[0,5,5,5,5,12,0],"height":[0,5,5,5,5,12,0],"angle":-90,"laser":{"damage":[5,5],"rate":10,"type":2,"speed":[0.001,0.001],"recoil":0,"number":1,"error":0},"texture":[4,4,17,18,63,4]},"b_c2":{"section_segments":12,"offset":{"x":0,"y":-250,"z":-5},"position":{"x":[0,0,0,0,0,0,0],"y":[0],"z":[0,0,0,0,0,0,0]},"width":[0,5,5,5,5,12,0],"height":[0,5,5,5,5,12,0],"angle":-90,"laser":{"damage":[5,5],"rate":10,"type":2,"speed":[0.001,0.001],"recoil":0,"number":1,"error":0},"texture":[4,4,17,18,63,4]},"b_c3":{"section_segments":12,"offset":{"x":0,"y":-240,"z":-5},"position":{"x":[0,0,0,0,0,0,0],"y":[0],"z":[0,0,0,0,0,0,0]},"width":[0,5,5,5,5,12,0],"height":[0,5,5,5,5,12,0],"angle":-90,"laser":{"damage":[5,5],"rate":10,"type":2,"speed":[0.001,0.001],"recoil":0,"number":1,"error":0},"texture":[4,4,17,18,63,4]},"b_c4":{"section_segments":12,"offset":{"x":0,"y":-230,"z":-5},"position":{"x":[0,0,0,0,0,0,0],"y":[0],"z":[0,0,0,0,0,0,0]},"width":[0,5,5,5,5,12,0],"height":[0,5,5,5,5,12,0],"angle":-90,"laser":{"damage":[5,5],"rate":10,"type":2,"speed":[0.001,0.001],"recoil":0,"number":1,"error":0},"texture":[4,4,17,18,63,4]},"b_c5":{"section_segments":12,"offset":{"x":0,"y":-220,"z":-5},"position":{"x":[0,0,0,0,0,0,0],"y":[0],"z":[0,0,0,0,0,0,0]},"width":[0,5,5,5,5,12,0],"height":[0,5,5,5,5,12,0],"angle":-90,"laser":{"damage":[5,5],"rate":10,"type":2,"speed":[0.001,0.001],"recoil":0,"number":1,"error":0},"texture":[4,4,17,18,63,4]},"b_c6":{"section_segments":12,"offset":{"x":0,"y":-210,"z":-5},"position":{"x":[0,0,0,0,0,0,0],"y":[0],"z":[0,0,0,0,0,0,0]},"width":[0,5,5,5,5,12,0],"height":[0,5,5,5,5,12,0],"angle":-90,"laser":{"damage":[5,5],"rate":10,"type":2,"speed":[0.001,0.001],"recoil":0,"number":1,"error":0},"texture":[4,4,17,18,63,4]},"b_c7":{"section_segments":12,"offset":{"x":0,"y":-200,"z":-5},"position":{"x":[0,0,0,0,0,0,0],"y":[0],"z":[0,0,0,0,0,0,0]},"width":[0,5,5,5,5,12,0],"height":[0,5,5,5,5,12,0],"angle":-90,"laser":{"damage":[5,5],"rate":10,"type":2,"speed":[0.001,0.001],"recoil":0,"number":1,"error":0},"texture":[4,4,17,18,63,4]},"b_c8":{"section_segments":12,"offset":{"x":0,"y":-190,"z":-5},"position":{"x":[0,0,0,0,0,0,0],"y":[0],"z":[0,0,0,0,0,0,0]},"width":[0,5,5,5,5,12,0],"height":[0,5,5,5,5,12,0],"angle":-90,"laser":{"damage":[5,5],"rate":10,"type":2,"speed":[0.001,0.001],"recoil":0,"number":1,"error":0},"texture":[4,4,17,18,63,4]},"b_c9":{"section_segments":12,"offset":{"x":0,"y":-180,"z":-5},"position":{"x":[0,0,0,0,0,0,0],"y":[0],"z":[0,0,0,0,0,0,0]},"width":[0,5,5,5,5,12,0],"height":[0,5,5,5,5,12,0],"angle":-90,"laser":{"damage":[5,5],"rate":10,"type":2,"speed":[0.001,0.001],"recoil":0,"number":1,"error":0},"texture":[4,4,17,18,63,4]},"b_c10":{"section_segments":12,"offset":{"x":0,"y":-170,"z":-5},"position":{"x":[0,0,0,0,0,0,0],"y":[0],"z":[0,0,0,0,0,0,0]},"width":[0,5,5,5,5,12,0],"height":[0,5,5,5,5,12,0],"angle":-90,"laser":{"damage":[5,5],"rate":10,"type":2,"speed":[0.001,0.001],"recoil":0,"number":1,"error":0},"texture":[4,4,17,18,63,4]},"b_c11":{"section_segments":12,"offset":{"x":0,"y":-160,"z":-5},"position":{"x":[0,0,0,0,0,0,0],"y":[0],"z":[0,0,0,0,0,0,0]},"width":[0,5,5,5,5,12,0],"height":[0,5,5,5,5,12,0],"angle":-90,"laser":{"damage":[5,5],"rate":10,"type":2,"speed":[0.001,0.001],"recoil":0,"number":1,"error":0},"texture":[4,4,17,18,63,4]},"b_c12":{"section_segments":12,"offset":{"x":0,"y":-150,"z":-5},"position":{"x":[0,0,0,0,0,0,0],"y":[0],"z":[0,0,0,0,0,0,0]},"width":[0,5,5,5,5,12,0],"height":[0,5,5,5,5,12,0],"angle":-90,"laser":{"damage":[5,5],"rate":10,"type":2,"speed":[0.001,0.001],"recoil":0,"number":1,"error":0},"texture":[4,4,17,18,63,4]},"b_c13":{"section_segments":12,"offset":{"x":0,"y":-140,"z":-5},"position":{"x":[0,0,0,0,0,0,0],"y":[0],"z":[0,0,0,0,0,0,0]},"width":[0,5,5,5,5,12,0],"height":[0,5,5,5,5,12,0],"angle":-90,"laser":{"damage":[5,5],"rate":10,"type":2,"speed":[0.001,0.001],"recoil":0,"number":1,"error":0},"texture":[4,4,17,18,63,4]},"b_c14":{"section_segments":12,"offset":{"x":0,"y":-130,"z":-5},"position":{"x":[0,0,0,0,0,0,0],"y":[0],"z":[0,0,0,0,0,0,0]},"width":[0,5,5,5,5,12,0],"height":[0,5,5,5,5,12,0],"angle":-90,"laser":{"damage":[5,5],"rate":10,"type":2,"speed":[0.001,0.001],"recoil":0,"number":1,"error":0},"texture":[4,4,17,18,63,4]},"b_c15":{"section_segments":12,"offset":{"x":0,"y":-120,"z":-5},"position":{"x":[0,0,0,0,0,0,0],"y":[0],"z":[0,0,0,0,0,0,0]},"width":[0,5,5,5,5,12,0],"height":[0,5,5,5,5,12,0],"angle":-90,"laser":{"damage":[5,5],"rate":10,"type":2,"speed":[0.001,0.001],"recoil":0,"number":1,"error":0},"texture":[4,4,17,18,63,4]},"b_c16":{"section_segments":12,"offset":{"x":0,"y":-110,"z":-5},"position":{"x":[0,0,0,0,0,0,0],"y":[0],"z":[0,0,0,0,0,0,0]},"width":[0,5,5,5,5,12,0],"height":[0,5,5,5,5,12,0],"angle":-90,"laser":{"damage":[5,5],"rate":10,"type":2,"speed":[0.001,0.001],"recoil":0,"number":1,"error":0},"texture":[4,4,17,18,63,4]},"b_c17":{"section_segments":12,"offset":{"x":0,"y":-100,"z":-5},"position":{"x":[0,0,0,0,0,0,0],"y":[0],"z":[0,0,0,0,0,0,0]},"width":[0,5,5,5,5,12,0],"height":[0,5,5,5,5,12,0],"angle":-90,"laser":{"damage":[5,5],"rate":10,"type":2,"speed":[0.001,0.001],"recoil":0,"number":1,"error":0},"texture":[4,4,17,18,63,4]},"b_c18":{"section_segments":12,"offset":{"x":0,"y":-90,"z":-5},"position":{"x":[0,0,0,0,0,0,0],"y":[0],"z":[0,0,0,0,0,0,0]},"width":[0,5,5,5,5,12,0],"height":[0,5,5,5,5,12,0],"angle":-90,"laser":{"damage":[5,5],"rate":10,"type":2,"speed":[0.001,0.001],"recoil":0,"number":1,"error":0},"texture":[4,4,17,18,63,4]},"disc1":{"section_segments":16,"offset":{"x":50,"y":-48,"z":10},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[7,7,0,0,0,2,5,7,7,7],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[10,10,10,12,12,12,12,12,10,10],"height":[10,10,10,12,12,12,12,12,10,10],"texture":[4,4,4,4,4,17,4]},"disc2":{"section_segments":16,"offset":{"x":50,"y":2,"z":10},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[7,7,0,0,0,2,5,7,7,7],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[10,10,10,12,12,12,12,12,10,10],"height":[10,10,10,12,12,12,12,12,10,10],"texture":[4,4,4,4,4,17,4]},"turret":{"vertical":true,"section_segments":20,"offset":{"x":0,"y":35,"z":0},"position":{"x":[0,0,0,0,0,0,0],"y":[-10,6,5,5,-7,-7],"z":[0,0,0,0,0,0,0]},"width":[25,19,12,10,10,0],"height":[25,19,12,10,10,0],"texture":[11,18,17,9,17]},"balls":{"section_segments":24,"offset":{"x":0,"y":0,"z":35},"position":{"x":[0,0,0,0,0,0,0,0,0],"y":[-5.2,-5,-4.4,-3,0,3,4.4,5,5.2],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,2,3.4000000000000004,4.800000000000001,5.6000000000000005,4.800000000000001,3.4000000000000004,2,0],"height":[0,2,3.4000000000000004,4.800000000000001,5.6000000000000005,4.800000000000001,3.4000000000000004,2,0],"texture":[111]},"balls2":{"section_segments":24,"angle":90,"offset":{"x":0,"y":0,"z":35},"position":{"x":[0,0,0,0,0,0,0,0,0],"y":[-5.2,-5,-4.4,-3,0,3,4.4,5,5.2],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,2,3.4000000000000004,4.800000000000001,5.6000000000000005,4.800000000000001,3.4000000000000004,2,0],"height":[0,2,3.4000000000000004,4.800000000000001,5.6000000000000005,4.800000000000001,3.4000000000000004,2,0],"texture":[111]},"balls3":{"section_segments":24,"angle":45,"offset":{"x":0,"y":0,"z":35},"position":{"x":[0,0,0,0,0,0,0,0,0],"y":[-5.2,-5,-4.4,-3,0,3,4.4,5,5.2],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,2,3.4000000000000004,4.800000000000001,5.6000000000000005,4.800000000000001,3.4000000000000004,2,0],"height":[0,2,3.4000000000000004,4.800000000000001,5.6000000000000005,4.800000000000001,3.4000000000000004,2,0],"texture":[111]},"balls4":{"section_segments":24,"angle":135,"offset":{"x":0,"y":0,"z":35},"position":{"x":[0,0,0,0,0,0,0,0,0],"y":[-5.2,-5,-4.4,-3,0,3,4.4,5,5.2],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,2,3.4000000000000004,4.800000000000001,5.6000000000000005,4.800000000000001,3.4000000000000004,2,0],"height":[0,2,3.4000000000000004,4.800000000000001,5.6000000000000005,4.800000000000001,3.4000000000000004,2,0],"texture":[111]},"p1":{"section_segments":[40,45,50,130,135,140,220,225,230,310,315,320],"offset":{"x":0.01,"y":0,"z":40},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0],"y":[5,10,11,20,25,25],"z":[3,9,10,0,-15,-15]},"width":[0,1,2,3,3,0],"height":[0,1,2,3,6,0],"angle":0,"texture":[18,17,4,18,4,18,13,17,18]},"p2":{"section_segments":[40,45,50,130,135,140,220,225,230,310,315,320],"offset":{"x":0.01,"y":0,"z":40},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0],"y":[5,10,11,20,25,25],"z":[3,9,10,0,-15,-15]},"width":[0,1,2,3,3,0],"height":[0,1,2,3,6,0],"angle":60,"texture":[18,17,4,18,4,18,13,17,18]},"p3":{"section_segments":[40,45,50,130,135,140,220,225,230,310,315,320],"offset":{"x":0.01,"y":0,"z":40},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0],"y":[5,10,11,20,25,25],"z":[3,9,10,0,-15,-15]},"width":[0,1,2,3,3,0],"height":[0,1,2,3,6,0],"angle":120,"texture":[18,17,4,18,4,18,13,17,18]},"p4":{"section_segments":[40,45,50,130,135,140,220,225,230,310,315,320],"offset":{"x":0.01,"y":0,"z":40},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0],"y":[5,10,11,20,25,25],"z":[3,9,10,0,-15,-15]},"width":[0,1,2,3,3,0],"height":[0,1,2,3,6,0],"angle":180,"texture":[18,17,4,18,4,18,13,17,18]},"p5":{"section_segments":[40,45,50,130,135,140,220,225,230,310,315,320],"offset":{"x":0.01,"y":0,"z":40},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0],"y":[5,10,11,20,25,25],"z":[3,9,10,0,-15,-15]},"width":[0,1,2,3,3,0],"height":[0,1,2,3,6,0],"angle":240,"texture":[18,17,4,18,4,18,13,17,18]},"p6":{"section_segments":[40,45,50,130,135,140,220,225,230,310,315,320],"offset":{"x":0.01,"y":0,"z":40},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0],"y":[5,10,11,20,25,25],"z":[3,9,10,0,-15,-15]},"width":[0,1,2,3,3,0],"height":[0,1,2,3,6,0],"angle":300,"texture":[18,17,4,18,4,18,13,17,18]},"wire":{"section_segments":8,"angle":-10,"offset":{"x":10,"y":-30,"z":30},"position":{"x":[10,10,9,7,6,6,7,8,8,5,5],"y":[-70,-58,-48,-38,-28,-18,-8,2,12,11],"z":[-38,-30,-23,-18,-11,-8,-6,-3,-1,-5,-5]},"width":[0,2,2,2,2,2,2,2,2,2],"height":[0,2,2,2,2,2,2,2,2,2],"propeller":false,"texture":[13,13,17,13,17,13,17,13,17]},"wire2":{"section_segments":8,"angle":-10,"offset":{"x":8,"y":-40,"z":30},"position":{"x":[12,12,12,10,8,8,8,8,8,9,5,5],"y":[-70,-58,-48,-38,-28,-18,-8,2,12,22],"z":[-38,-30,-25,-20,-14,-10,-6,-3,-1,1,-5,-5]},"width":[2,2,2,2,2,2,2,2,2,2],"height":[2,2,2,2,2,2,2,2,2,2],"propeller":false,"texture":[13,17,13,17,13,17,13,17,13,17]},"box2":{"section_segments":[40,45,50,130,135,140,220,225,230,310,315,320],"offset":{"x":28,"y":-85,"z":0},"position":{"x":[0,0,0,0,0],"y":[-30,-15,15,25],"z":[2,0,0,-3]},"width":[2,4,4,2],"height":[0,8,8,0],"texture":[13,18.2,4]}},"wings":{"shields":{"doubleside":true,"offset":{"x":6,"y":65,"z":-38},"length":[0,25,30,25],"width":[50,50,85,85,50,50],"angle":[30,30,90,150],"position":[10,10,0,0,10],"texture":[4,18,4,18],"bump":{"position":40,"size":4}}},"typespec":{"name":"VirtualBlade","level":1,"model":1,"code":101,"specs":{"shield":{"capacity":[650,500],"reload":[2,20]},"generator":{"capacity":[550,700],"reload":[40,450]},"ship":{"mass":240,"speed":[100,100],"rotation":[30,30],"acceleration":[70,90]}},"shape":[4,5.794,5.772,4.825,3.758,3.634,3.688,3.566,3.446,3.177,2.998,2.876,2.81,2.822,2.877,3,3.177,3.461,3.561,3.211,2.911,3.513,4.528,4.617,4.267,4.011,4.267,4.617,4.528,3.513,2.911,3.211,3.561,3.461,3.177,3,2.877,2.822,2.81,2.876,2.998,3.177,3.446,3.566,3.688,3.634,3.758,4.825,5.772,5.794],"lasers":[],"radius":5.794}}';

var virtualBlade_blade = virtualBlade_main;

/*jship = JSON.parse(virtualBlade_main)

/*jship.typespec.lasers[0] = {
  "x":0,"y":-2,"z":-0.2,
  "angle":0,"damage":[150,5],"rate":0.7,
  "type":2,"speed":[40,0.001],"number":1,
  "spread":0,"error":0,"recoil":340
}
jship.lockBulletSpeed = 1;

virtualBlade_main = JSON.stringify(jship);*/

jship = JSON.parse(virtualBlade_blade)

var lasers = jship.typespec.lasers;
var num = 15;
for(var i = 0; i<num; i++){
  lasers[i] = {
    "x":0,"y":-3*i-3,"z":-0,
    "angle":-90,"damage":[45,5],"rate":3,
    "type":2,"speed":[0.001,0.001],"number":1,
    "spread":0,"error":0,"recoil":0
  }
}
lasers.push(
  {
    "x":0,"y":-3,"z":-0,
    "angle":0,"damage":[55,5],"rate":3,
    "type":2,"speed":[5,5],"number":2,
    "spread":180,"error":0,"recoil":0
  }
)
lasers.push(
  {
    "x":0,"y":-3*num-8,"z":-0,
    "angle":-180,"damage":[45,5],"rate":3,
    "type":2,"speed":[4,4],"number":2,
    "spread":20,"error":0,"recoil":0
  }
)
jship.lockShipAccel = 1;
jship.lockBulletSpeed = 1;
jship.typespec.specs.ship.acceleration = [0.001,0.001];
jship.typespec.specs.ship.rotation = [20,50];
jship.typespec.specs.generator.reload = [0.001,0.001];
jship.typespec.specs.generator.capacity = [5000,5000];

virtualBlade_blade = JSON.stringify(jship);

gameplayShips.virtualBlade_main = virtualBlade_main;
gameplayShips.virtualBlade_blade = virtualBlade_blade;
showcaseShips[29] = virtualBlade_main;


//$fileTape setWriting true

shipsData[29] = {name:"VirtualBlade",cl:"Melee",company: 7,
  barrageCooldownTime: 7,
  barragePrepareTime: 2,
  barrageDuration: 3,
  configs: [],
  init: function(){
    this.configs[0] = shipIdsToCodes["virtualBlade_main"];
    this.configs[1] = shipIdsToCodes["virtualBlade_blade"];
  },
  respawn:function(ship,sh,p){


    ship.set({type:this.configs[0],stats:66666666,healing:false});
    ship.custom.sprototype.hasTransformed = false
    ship.custom.sprototype.barrageCooldown = 6
    ship.custom.sprototype.barragePrepare = 0
  },
  tick:function(ship, sh, p){


    p.barrageCooldown-=sp.systems.aliveBooster.getReloadBuff(ship);
    p.barragePrepare--;
    if(ship.type == this.configs[1]){
      //if(p.barragePrepare <= 1)
      //  sh.idle = true;
      if(ship.type == this.configs[1] && p.barragePrepare == 0)
        ship.set({generator:50000});
      if(p.barragePrepare<-this.barrageDuration){
        ship.set({type:this.configs[0],stats:ship.custom.lastStats,generator:10000});
        UISystem.events.pushEvent(ship,"shipConfigChange");
        p.barrageCooldown = this.barrageCooldownTime
      }
    }
  },
  useAbility:function(ship, abId, sh, p){


    switch(abId){
      case 1:
        if(ship.type==this.configs[0] && p.barrageCooldown>1)return;
        p.hasTransformed = true;
        if(ship.type == this.configs[0]){
          ship.set({type:this.configs[1],stats:ship.custom.lastStats,generator:0});
          p.barrageCooldown = this.barrageCooldownTime
          p.barragePrepare = this.barragePrepareTime
          UISystem.events.pushEvent(ship,"shipConfigChange");
        }
        break;
      default:
      log("unknown ability "+abId);
    }
  },
  getAbilities:function(ship,sh,p){

    k = [];
    config = "Extend blade";
    expl = "Preparing to strike!";
    if(ship.type == this.configs[1]){
      config = "Projecting blade!";
      expl = "Slash them up!";
    }
    var ready = 0.5
    var state = 4

    if(ship.type == this.configs[0]){
      ready = 1-(p.barrageCooldown/this.barrageCooldownTime)
      state = 2
      if(ready >= 1)
        state = 0
    }
    else {
      if(p.barragePrepare>0){
        ready = 1-(p.barragePrepare/this.barragePrepareTime)
        state = 1
      }else{
        ready = 1-(-p.barragePrepare/this.barrageDuration)
        state = 1
      }
    }


    k[1] = {name:config,id:1,explanation:expl,
      ready: ready,
      state: state
    }
    return k;
  },
  tips:[
    "The main configuration is a reasonable fighter. But the blade is deadlier."
    ],
  unicodeChar: "\u{1f5e1}",
  color: "#AAAAAA"
  /*,
  augmentUI: function(ship){
    if(ship.type==this.configs[1])
      barrageExplain(ship);
  }*/
};
