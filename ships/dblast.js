/*D-Blast

Sometimes you'd like to maneuver and shoot at the same time. That is possible -
with turrets. Sadly, turrets are only installed onto larger ships: fregates,
battleships, dreadnaughts.

But what if you built a fighter around a turret?

Well, then you'd end up with this thing.

It's a reasonable fighter with a somewhat-boring shape. It is able to rotate its
weapons 360 degrees, thus allowing for unconventional combat maneuvers. Weapons
are powerful and produce a reasonable amount of recoil, which can be utilized
by the aforementioned turret's rotation.

*/

//$fileTape ifFlag prerender
//$fileTape setWriting false

var d_blast = '{"name":"D-Blast","level":6,"model":18,"size":1.5,"specs":{"shield":{"capacity":[350,100],"reload":[2,2]},"generator":{"capacity":[120,60],"reload":[50,100]},"ship":{"mass":150,"speed":[150,150],"rotation":[30,60],"acceleration":[40,100]}},"bodies":{"c1":{"section_segments":16,"offset":{"x":0,"y":-15,"z":0},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-2,-2,2,2],"z":[0,0,0,0,0,0,0,0,0]},"width":[0,60,60,0],"height":[0,60,60,0],"texture":[3],"vertical":true},"c2":{"section_segments":16,"offset":{"x":0,"y":15,"z":0},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-2,-2,2,2],"z":[0,0,0,0,0,0,0,0,0]},"width":[0,60,60,0],"height":[0,60,60,0],"texture":[3],"vertical":true},"cockpitBack":{"section_segments":6,"offset":{"x":1,"y":5,"z":25},"position":{"x":[5,5,0,0,0,0,0,0],"y":[-1,10,24,24],"z":[0,0,0,-5,0,0,0,0,0]},"width":[20,20,15,0],"height":[10,10,10,0],"texture":[4,3,4],"angle":90},"cockpitFront":{"section_segments":8,"offset":{"x":0,"y":-60,"z":20},"position":{"x":[0,0,0,0,0,0,0,0],"y":[0,10,15,20],"z":[-5,-1,1,0,0,0,0,0,0]},"width":[0,14,15,0],"height":[0,5,6,0],"texture":[1]},"cockpitFrontFlat":{"section_segments":6,"offset":{"x":1,"y":-49,"z":17},"position":{"x":[5,5,0,0,0,0,0,0],"y":[-1,10,24,24],"z":[0,0,0,-5,0,0,0,0,0]},"width":[8,8,7,0],"height":[4,4,4,0],"texture":[0.8],"angle":90},"sidesTop":{"section_segments":3,"offset":{"x":0,"y":0,"z":21},"position":{"x":[-25,-35,-40,-43,-40,-35,-25,null],"y":[-55,-40,-25,0,25,40,55],"z":[-5,-2,0,0,0,-2,-5,0,0]},"width":[0,15,20,24,20,15,0],"height":[0,6,10,10,10,6,0],"texture":[63]},"sidesTopDeco":{"section_segments":3,"offset":{"x":0,"y":0,"z":21},"position":{"x":[-23.5,-28.5,-31,-32.5,-31,-28.5,-23.5,null,null],"y":[-55,-40,-25,0,25,40,55],"z":[-5,-2,0,0,0,-2,-5,0,0]},"width":[0,7.5,10,12,10,7.5,0,null],"height":[0,6,10,10,10,6,0],"texture":[3.5]},"sidesBottom":{"section_segments":3,"offset":{"x":0,"y":0,"z":-21},"position":{"x":[-25,-35,-40,-43,-40,-35,-25,null],"y":[55,40,25,0,-25,-40,-55,null],"z":[5,2,0,0,0,2,5,0,0,null]},"width":[0,15,20,24,20,15,0],"height":[0,-6,-10,-10,-10,-6,0,null],"texture":[63]},"sidesBottomDeco":{"section_segments":3,"offset":{"x":0,"y":0,"z":-21},"position":{"x":[-23.5,-28.5,-31,-32.5,-31,-28.5,-23.5,null,null],"y":[55,40,25,0,-25,-40,-55,null],"z":[5,2,0,0,0,2,5,0,0,null]},"width":[0,7.5,10,12,10,7.5,0,null],"height":[0,-6,-10,-10,-10,-6,0,null],"texture":[3.6]},"tTop":{"section_segments":6,"offset":{"x":0,"y":0,"z":12},"position":{"x":[0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,null],"y":[0,10,25,35,35,null],"z":[0,0,0,0,0,0,0,0,0]},"width":[45,45,40,20,0],"height":[5,5,5,5,0],"texture":[0.8],"angle":90},"tBottom":{"section_segments":6,"offset":{"x":0,"y":0,"z":-12},"position":{"x":[0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,null],"y":[0,10,25,35,35,null],"z":[0,0,0,0,0,0,0,0,0]},"width":[45,45,40,20,0],"height":[5,5,5,5,0],"texture":[0.8],"angle":90},"tMain":{"section_segments":6,"offset":{"x":0,"y":0,"z":0},"position":{"x":[20,20,17,10,20,20,20,20,20,null],"y":[0,15,25,35,null],"z":[0,0,0,0,0,0,0,0,0]},"width":[10,10,10,0],"height":[15,15,15,15],"texture":[0.8],"angle":90},"tCannonM":{"section_segments":8,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,null],"y":[-50,-70,-30,-30,-10,null],"z":[0,0,0,0,0,0,0,0,0]},"width":[0,4,5,6,7],"height":[0,4,5,6,7],"texture":[17,4,63,4],"angle":0,"laser":{"damage":[35,8],"rate":1.5,"type":1,"speed":[110,180],"number":1,"error":5,"recoil":70}},"tCannonsSides":{"section_segments":8,"offset":{"x":0,"y":0,"z":0},"position":{"x":[13,13,13,13,13,13,13,13,null],"y":[-50,-70,-30,-30,-10,null],"z":[0,0,0,0,0,0,0,0,0]},"width":[0,4,5,6,7],"height":[0,4,5,6,7],"texture":[17,4,63,4],"angle":0,"laser":{"damage":[35,8],"rate":1.5,"type":1,"speed":[110,180],"number":1,"error":5,"recoil":70}},"tAntennae1":{"section_segments":4,"offset":{"x":0,"y":0,"z":2},"position":{"x":[45,45,45,45,45,45,45,45,null,null],"y":[-110,-105,-100,-95,-35,null],"z":[0,0,0,0,0,0,0,0,0]},"width":[0,2,2,1,1],"height":[0,2,2,1,1],"texture":[4,17,4],"angle":0},"tAntennae2":{"section_segments":4,"offset":{"x":0,"y":0,"z":-2},"position":{"x":[42,42,42,42,42,42,42,42,null,null],"y":[-120,-115,-30,null],"z":[0,0,0,0,0,0,0,0,0]},"width":[0,1,1],"height":[0,1,1],"texture":[4],"angle":0},"tAntennaeBox":{"section_segments":6,"offset":{"x":0,"y":0,"z":0},"position":{"x":[55,55,55,55,55,55,55,55,null,null],"y":[-35,-35,-30,-30,-10,-10,-5,-5,null,null],"z":[0,0,0,0,0,0,0,0,0]},"width":[0,6,6,10,10,6,6,0],"height":[0,4,4,6,6,4,4,0],"texture":[3.8,13,3.8,18,3.8,13,3.8],"angle":30},"reactor":{"section_segments":12,"offset":{"x":0,"y":-20,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0],"y":[-27,-27,-25,-25,-27,-25,-17,-15,4],"z":[0,0,0,0,0,0,0,0,0,0,0,0]},"width":[0,10,10,15,15,20,20,30,30],"height":[0,10,10,15,15,20,20,30,30],"texture":[18,4,17,4,4,4,8,4],"vertical":true},"reactorPipes":{"section_segments":4,"offset":{"x":25,"y":-50,"z":0},"position":{"x":[-10,0,0,0,0,0,0,0],"y":[5,10,20],"z":[0,0,0,0,0,0,0,0,0]},"width":[4,4,4],"height":[4,4,4],"texture":[4],"vertical":true},"capacitorBottom":{"section_segments":6,"offset":{"x":0,"y":-42,"z":-20},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-15,-15,-10,-10,10,10,20],"z":[0,0,0,0,0,0,0,0,0]},"width":[0,10,10,8,8,10,10],"height":[0,7,7,5,5,7,7],"texture":[3.8,3.8,3.8,17,3.8,3.8]},"capacitorsBottomSide":{"section_segments":6,"offset":{"x":15,"y":-40,"z":-20},"position":{"x":[-8,0,0,0,0,0,0,0],"y":[-17,-15,-10,-10,10,10,50],"z":[0,0,0,0,0,0,0,0,0]},"width":[0,10,10,8,8,10,10],"height":[4,7,7,5,5,7,7],"texture":[3.8,3.8,3.8,17,3.8,3.8],"angle":0},"reactorPipesstar1":{"section_segments":4,"offset":{"x":17.67766357931401,"y":-50,"z":17.67767548001136},"position":{"x":[-7.071065431725605,0,0,0,0,0,0,0],"y":[5,10,20],"z":[-7.071070192004544,0,0,0,0,0,0,0]},"width":[4,4,4],"height":[4,4,4],"texture":[4],"angle":0,"vertical":true},"reactorPipesstar2":{"section_segments":4,"offset":{"x":-0.000016830127590039574,"y":-50,"z":24.999999999994333},"position":{"x":[0.0000067320510360158295,0,0,0,0,0,0,0],"y":[5,10,20],"z":[-9.999999999997733,0,0,0,0,0,0,0]},"width":[4,4,4],"height":[4,4,4],"texture":[4],"angle":0,"vertical":true},"reactorPipesstar3":{"section_segments":4,"offset":{"x":-17.67768738070069,"y":-50,"z":17.677651678608658},"position":{"x":[7.071074952280276,0,0,0,0,0,0,0],"y":[5,10,20],"z":[-7.071060671443464,0,0,0,0,0,0,0]},"width":[4,4,4],"height":[4,4,4],"texture":[4],"angle":0,"vertical":true},"reactorPipesstar4":{"section_segments":4,"offset":{"x":-24.99999999997734,"y":-50,"z":-0.00003366025518007152},"position":{"x":[9.999999999990937,0,0,0,0,0,0,0],"y":[5,10,20],"z":[0.000013464102072028608,0,0,0,0,0,0,0]},"width":[4,4,4],"height":[4,4,4],"texture":[4],"angle":0,"vertical":true},"reactorPipesstar5":{"section_segments":4,"offset":{"x":-17.677639777895287,"y":-50,"z":-17.67769928138202},"position":{"x":[7.0710559111581155,0,0,0,0,0,0,0],"y":[5,10,20],"z":[7.071079712552807,0,0,0,0,0,0,0]},"width":[4,4,4],"height":[4,4,4],"texture":[4],"angle":0,"vertical":true},"reactorPipesstar6":{"section_segments":4,"offset":{"x":0.00005049038275898598,"y":-50,"z":-24.999999999949015},"position":{"x":[-0.000020196153103594392,0,0,0,0,0,0,0],"y":[5,10,20],"z":[9.999999999979606,0,0,0,0,0,0,0]},"width":[4,4,4],"height":[4,4,4],"texture":[4],"angle":0,"vertical":true},"reactorPipesstar7":{"section_segments":4,"offset":{"x":17.67771118205533,"y":-50,"z":-17.677627877173908},"position":{"x":[-7.071084472822131,0,0,0,0,0,0,0],"y":[5,10,20],"z":[7.071051150869563,0,0,0,0,0,0,0]},"width":[4,4,4],"height":[4,4,4],"texture":[4],"angle":0,"vertical":true},"propSidesbottom":{"section_segments":6,"offset":{"x":25,"y":25,"z":-21},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-30,-10,10,30],"z":[6,0,0,6,0,0,0,0,0]},"width":[2,2,2,2],"height":[0,10,10,0],"texture":[3.8]},"propTopbottom":{"section_segments":6,"offset":{"x":0,"y":25,"z":-30},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-32,-10,10,10,5,15],"z":[15,0,0,0,0,15,0,0,0]},"width":[30,30,30,0,30,30],"height":[1,1,1,0,0,0],"texture":[3.8]},"prop00bottom":{"section_segments":6,"offset":{"x":0,"y":35,"z":-21},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-10,5,10,5],"z":[0,0,0,0,0,0,0,0,0]},"width":[4,4,2,0],"height":[4,4,2,0],"texture":[4,18,17],"propeller":true},"prop10bottom":{"section_segments":6,"offset":{"x":4,"y":35,"z":-21},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-10,5,10,5],"z":[0,0,0,0,0,0,0,0,0]},"width":[4,4,2,0],"height":[4,4,2,0],"texture":[4,18,17],"propeller":true},"prop20bottom":{"section_segments":6,"offset":{"x":8,"y":35,"z":-21},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-10,5,10,5],"z":[0,0,0,0,0,0,0,0,0]},"width":[4,4,2,0],"height":[4,4,2,0],"texture":[4,18,17],"propeller":true},"prop30bottom":{"section_segments":6,"offset":{"x":12,"y":35,"z":-21},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-10,5,10,5],"z":[0,0,0,0,0,0,0,0,0]},"width":[4,4,2,0],"height":[4,4,2,0],"texture":[4,18,17],"propeller":true},"prop40bottom":{"section_segments":6,"offset":{"x":16,"y":35,"z":-21},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-10,5,10,5],"z":[0,0,0,0,0,0,0,0,0]},"width":[4,4,2,0],"height":[4,4,2,0],"texture":[4,18,17],"propeller":true},"prop50bottom":{"section_segments":6,"offset":{"x":20,"y":35,"z":-21},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-10,5,10,5],"z":[0,0,0,0,0,0,0,0,0]},"width":[4,4,2,0],"height":[4,4,2,0],"texture":[4,18,17],"propeller":true},"prop01bottom":{"section_segments":6,"offset":{"x":2,"y":30,"z":-26},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-10,5,10,5],"z":[0,0,0,0,0,0,0,0,0]},"width":[4,4,2,0],"height":[4,4,2,0],"texture":[4,18,17],"propeller":true},"prop11bottom":{"section_segments":6,"offset":{"x":6,"y":30,"z":-26},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-10,5,10,5],"z":[0,0,0,0,0,0,0,0,0]},"width":[4,4,2,0],"height":[4,4,2,0],"texture":[4,18,17],"propeller":true},"prop21bottom":{"section_segments":6,"offset":{"x":10,"y":30,"z":-26},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-10,5,10,5],"z":[0,0,0,0,0,0,0,0,0]},"width":[4,4,2,0],"height":[4,4,2,0],"texture":[4,18,17],"propeller":true},"prop31bottom":{"section_segments":6,"offset":{"x":14,"y":30,"z":-26},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-10,5,10,5],"z":[0,0,0,0,0,0,0,0,0]},"width":[4,4,2,0],"height":[4,4,2,0],"texture":[4,18,17],"propeller":true},"prop41bottom":{"section_segments":6,"offset":{"x":18,"y":30,"z":-26},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-10,5,10,5],"z":[0,0,0,0,0,0,0,0,0]},"width":[4,4,2,0],"height":[4,4,2,0],"texture":[4,18,17],"propeller":true},"propSidestop":{"section_segments":6,"offset":{"x":25,"y":25,"z":21},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-30,-10,10,30],"z":[-6,0,0,-6,0,0,0,0,0]},"width":[2,2,2,2],"height":[0,10,10,0],"texture":[3.8]},"propToptop":{"section_segments":6,"offset":{"x":0,"y":25,"z":30},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-32,-10,10,10,5,15],"z":[-15,0,0,0,0,-15,0,0,0]},"width":[30,30,30,0,30,30],"height":[1,1,1,0,0,0],"texture":[3.8]},"prop00top":{"section_segments":6,"offset":{"x":0,"y":35,"z":21},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-10,5,10,5],"z":[0,0,0,0,0,0,0,0,0]},"width":[4,4,2,0],"height":[4,4,2,0],"texture":[4,18,17],"propeller":true},"prop10top":{"section_segments":6,"offset":{"x":4,"y":35,"z":21},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-10,5,10,5],"z":[0,0,0,0,0,0,0,0,0]},"width":[4,4,2,0],"height":[4,4,2,0],"texture":[4,18,17],"propeller":true},"prop20top":{"section_segments":6,"offset":{"x":8,"y":35,"z":21},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-10,5,10,5],"z":[0,0,0,0,0,0,0,0,0]},"width":[4,4,2,0],"height":[4,4,2,0],"texture":[4,18,17],"propeller":true},"prop30top":{"section_segments":6,"offset":{"x":12,"y":35,"z":21},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-10,5,10,5],"z":[0,0,0,0,0,0,0,0,0]},"width":[4,4,2,0],"height":[4,4,2,0],"texture":[4,18,17],"propeller":true},"prop40top":{"section_segments":6,"offset":{"x":16,"y":35,"z":21},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-10,5,10,5],"z":[0,0,0,0,0,0,0,0,0]},"width":[4,4,2,0],"height":[4,4,2,0],"texture":[4,18,17],"propeller":true},"prop50top":{"section_segments":6,"offset":{"x":20,"y":35,"z":21},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-10,5,10,5],"z":[0,0,0,0,0,0,0,0,0]},"width":[4,4,2,0],"height":[4,4,2,0],"texture":[4,18,17],"propeller":true},"prop01top":{"section_segments":6,"offset":{"x":2,"y":30,"z":26},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-10,5,10,5],"z":[0,0,0,0,0,0,0,0,0]},"width":[4,4,2,0],"height":[4,4,2,0],"texture":[4,18,17],"propeller":true},"prop11top":{"section_segments":6,"offset":{"x":6,"y":30,"z":26},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-10,5,10,5],"z":[0,0,0,0,0,0,0,0,0]},"width":[4,4,2,0],"height":[4,4,2,0],"texture":[4,18,17],"propeller":true},"prop21top":{"section_segments":6,"offset":{"x":10,"y":30,"z":26},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-10,5,10,5],"z":[0,0,0,0,0,0,0,0,0]},"width":[4,4,2,0],"height":[4,4,2,0],"texture":[4,18,17],"propeller":true},"prop31top":{"section_segments":6,"offset":{"x":14,"y":30,"z":26},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-10,5,10,5],"z":[0,0,0,0,0,0,0,0,0]},"width":[4,4,2,0],"height":[4,4,2,0],"texture":[4,18,17],"propeller":true},"prop41top":{"section_segments":6,"offset":{"x":18,"y":30,"z":26},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-10,5,10,5],"z":[0,0,0,0,0,0,0,0,0]},"width":[4,4,2,0],"height":[4,4,2,0],"texture":[4,18,17],"propeller":true},"sidesTopduplicate":{"section_segments":3,"offset":{"x":0,"y":0,"z":21},"position":{"x":[25,35,40,43,40,35,25,null,null],"y":[-55,-40,-25,0,25,40,55],"z":[-5,-2,0,0,0,-2,-5,0,0]},"width":[0,15,20,24,20,15,0],"height":[0,6,10,10,10,6,0],"texture":[63]},"sidesTopDecoduplicate":{"section_segments":3,"offset":{"x":0,"y":0,"z":21},"position":{"x":[23.5,28.5,31,32.5,31,28.5,23.5,null,null,null],"y":[-55,-40,-25,0,25,40,55],"z":[-5,-2,0,0,0,-2,-5,0,0]},"width":[0,7.5,10,12,10,7.5,0,null],"height":[0,6,10,10,10,6,0],"texture":[3.5]},"sidesBottomduplicate":{"section_segments":3,"offset":{"x":0,"y":0,"z":-21},"position":{"x":[25,35,40,43,40,35,25,null,null],"y":[55,40,25,0,-25,-40,-55,null],"z":[5,2,0,0,0,2,5,0,0,null]},"width":[0,15,20,24,20,15,0],"height":[0,-6,-10,-10,-10,-6,0,null],"texture":[63]},"sidesBottomDecoduplicate":{"section_segments":3,"offset":{"x":0,"y":0,"z":-21},"position":{"x":[23.5,28.5,31,32.5,31,28.5,23.5,null,null,null],"y":[55,40,25,0,-25,-40,-55,null],"z":[5,2,0,0,0,2,5,0,0,null]},"width":[0,7.5,10,12,10,7.5,0,null],"height":[0,-6,-10,-10,-10,-6,0,null],"texture":[3.6]},"cockpitdsides":{"section_segments":4,"offset":{"x":0.01,"y":-50,"z":24},"position":{"x":[-8,-10,-10,-10,-10,null,null],"y":[0,10,28,47,50],"z":[-5,-3,0,0,0,0]},"width":[5,5,5,5,5,5],"height":[2,7,10,10,10],"texture":[7,9,3],"angle":0},"cockpitt":{"section_segments":4,"offset":{"x":0,"y":-50,"z":24},"position":{"x":[0,0,0,0,0],"y":[0,10,28,47,50],"z":[-3,4,10,10,10,null,null]},"width":[8,10,10,10,10],"height":[1,1,1,1,1,1],"texture":[7,9,9,4],"angle":0},"cockpitb":{"section_segments":4,"offset":{"x":0,"y":-50,"z":24},"position":{"x":[0,0,0,0,0],"y":[0,10,28,47,50],"z":[-7,-10,-10,-10,-10,null,null]},"width":[8,10,10,10,10],"height":[1,1,1,1,1,1],"texture":[9],"angle":0},"cockpitsides":{"section_segments":4,"offset":{"x":0.01,"y":-50,"z":24},"position":{"x":[8,10,10,10,10,null],"y":[0,10,28,47,50],"z":[-5,-3,0,0,0,0]},"width":[5,5,5,5,5,5],"height":[2,7,10,10,10],"texture":[7,9,3],"angle":0},"cockpitBottomdsides":{"section_segments":4,"offset":{"x":0.01,"y":-50,"z":20},"position":{"x":[-25,-27,-28,-28,null,null],"y":[0,10,42,57],"z":[-5,-2,0,-5,0,0]},"width":[0,0,0,0,0],"height":[3,3,5,3],"texture":[1],"angle":0},"cockpitBottomt":{"section_segments":4,"offset":{"x":0,"y":-50,"z":20},"position":{"x":[0,0,0,0],"y":[0,10,42,57],"z":[-2,1,5,-2,null,null,null]},"width":[25,27,28,28],"height":[0,0,0,0,0],"texture":[1,10,3],"angle":0},"cockpitBottomb":{"section_segments":4,"offset":{"x":0,"y":-50,"z":20},"position":{"x":[0,0,0,0],"y":[0,10,42,57],"z":[-8,-5,-5,-8,null,null,null]},"width":[25,27,28,28],"height":[0,0,0,0,0],"texture":[1,1,3],"angle":0},"cockpitBottomsides":{"section_segments":4,"offset":{"x":0.01,"y":-50,"z":20},"position":{"x":[25,27,28,28,null],"y":[0,10,42,57],"z":[-5,-2,0,-5,0,0]},"width":[0,0,0,0,0],"height":[3,3,5,3],"texture":[1],"angle":0},"tSidesdsides":{"section_segments":4,"offset":{"x":0,"y":0,"z":0},"position":{"x":[25.01,25.01,17.01,17.01,20.01,13.010000000000002,null,null,null,null],"y":[-65,-30,-20,20,30,40,null],"z":[0,0,0,0,0,0]},"width":[0,0,0,0,0,0,0],"height":[12,12,12,12,12,12],"texture":[1,1,10,1],"angle":0},"tSidest":{"section_segments":4,"offset":{"x":0,"y":0,"z":0},"position":{"x":[25,35,32,32,30,20,30,null],"y":[-65,-30,-20,20,30,40,null],"z":[12,12,12,12,12,12,null]},"width":[0,10,15,15,10,7],"height":[0,0,0,0,0,0,0],"texture":[1],"angle":0},"tSidesb":{"section_segments":4,"offset":{"x":0,"y":0,"z":0},"position":{"x":[25,35,32,32,30,20,30,null],"y":[-65,-30,-20,20,30,40,null],"z":[-12,-12,-12,-12,-12,-12,null]},"width":[0,10,15,15,10,7],"height":[0,0,0,0,0,0,0],"texture":[1],"angle":0},"tSidessides":{"section_segments":4,"offset":{"x":0,"y":0,"z":0},"position":{"x":[25.01,45.010000000000005,47.010000000000005,47.010000000000005,40.010000000000005,27.01,null,null,null],"y":[-65,-30,-20,20,30,40,null],"z":[0,0,0,0,0,0]},"width":[0,0,0,0,0,0,0],"height":[12,12,12,12,12,12],"texture":[1,1,10,1],"angle":0},"tBackdsides":{"section_segments":4,"offset":{"x":0,"y":0,"z":0},"position":{"x":[30,30,35,25,null,null,null],"y":[0,20,30,40,null],"z":[0,0,0,0,0,0]},"width":[0,0,0,0,0],"height":[12,12,12,12],"texture":[1],"angle":-90},"tBackt":{"section_segments":4,"offset":{"x":0,"y":0,"z":0},"position":{"x":[40,40,40,25,null],"y":[0,20,30,40,null],"z":[12,12,12,12,null,null,null]},"width":[10,10,5,0],"height":[0,0,0,0,0],"texture":[1],"angle":-90},"tBackb":{"section_segments":4,"offset":{"x":0,"y":0,"z":0},"position":{"x":[40,40,40,25,null],"y":[0,20,30,40,null],"z":[-12,-12,-12,-12,null,null,null]},"width":[10,10,5,0],"height":[0,0,0,0,0],"texture":[1],"angle":-90},"tBacksides":{"section_segments":4,"offset":{"x":0,"y":0,"z":0},"position":{"x":[50,50,45,25,null,null],"y":[0,20,30,40,null],"z":[0,0,0,0,0,0]},"width":[0,0,0,0,0],"height":[12,12,12,12],"texture":[1],"angle":-90},"tTopduplicate":{"section_segments":6,"offset":{"x":0,"y":0,"z":12},"position":{"x":[-0.001,-0.001,-0.001,-0.001,-0.001,-0.001,-0.001,-0.001,null,null],"y":[0,10,25,35,35,null],"z":[0,0,0,0,0,0,0,0,0]},"width":[45,45,40,20,0],"height":[5,5,5,5,0],"texture":[0.8],"angle":-90},"tBottomduplicate":{"section_segments":6,"offset":{"x":0,"y":0,"z":-12},"position":{"x":[-0.001,-0.001,-0.001,-0.001,-0.001,-0.001,-0.001,-0.001,null,null],"y":[0,10,25,35,35,null],"z":[0,0,0,0,0,0,0,0,0]},"width":[45,45,40,20,0],"height":[5,5,5,5,0],"texture":[0.8],"angle":-90},"tMainduplicate":{"section_segments":6,"offset":{"x":0,"y":0,"z":0},"position":{"x":[-20,-20,-17,-10,-20,-20,-20,-20,-20,null,null],"y":[0,15,25,35,null],"z":[0,0,0,0,0,0,0,0,0]},"width":[10,10,10,0],"height":[15,15,15,15],"texture":[0.8],"angle":-90},"tCannonsSidesduplicate":{"section_segments":8,"offset":{"x":0,"y":0,"z":0},"position":{"x":[-13,-13,-13,-13,-13,-13,-13,-13,null,null],"y":[-50,-70,-30,-30,-10,null],"z":[0,0,0,0,0,0,0,0,0]},"width":[0,4,5,6,7],"height":[0,4,5,6,7],"texture":[17,4,63,4],"angle":0},"tSidesdsidesduplicate":{"section_segments":4,"offset":{"x":0,"y":0,"z":0},"position":{"x":[-25.01,-25.01,-17.01,-17.01,-20.01,-13.010000000000002,null,null,null,null,null],"y":[-65,-30,-20,20,30,40,null],"z":[0,0,0,0,0,0]},"width":[0,0,0,0,0,0,0],"height":[12,12,12,12,12,12],"texture":[1,1,10,1],"angle":0},"tSidestduplicate":{"section_segments":4,"offset":{"x":0,"y":0,"z":0},"position":{"x":[-25,-35,-32,-32,-30,-20,-30,null,null],"y":[-65,-30,-20,20,30,40,null],"z":[12,12,12,12,12,12,null]},"width":[0,10,15,15,10,7],"height":[0,0,0,0,0,0,0],"texture":[1],"angle":0},"tSidesbduplicate":{"section_segments":4,"offset":{"x":0,"y":0,"z":0},"position":{"x":[-25,-35,-32,-32,-30,-20,-30,null,null],"y":[-65,-30,-20,20,30,40,null],"z":[-12,-12,-12,-12,-12,-12,null]},"width":[0,10,15,15,10,7],"height":[0,0,0,0,0,0,0],"texture":[1],"angle":0},"tSidessidesduplicate":{"section_segments":4,"offset":{"x":0,"y":0,"z":0},"position":{"x":[-25.01,-45.010000000000005,-47.010000000000005,-47.010000000000005,-40.010000000000005,-27.01,null,null,null,null],"y":[-65,-30,-20,20,30,40,null],"z":[0,0,0,0,0,0]},"width":[0,0,0,0,0,0,0],"height":[12,12,12,12,12,12],"texture":[1,1,10,1],"angle":0},"tBackdsidesduplicate":{"section_segments":4,"offset":{"x":0,"y":0,"z":0},"position":{"x":[-30,-30,-35,-25,null,null,null,null],"y":[0,20,30,40,null],"z":[0,0,0,0,0,0]},"width":[0,0,0,0,0],"height":[12,12,12,12],"texture":[1],"angle":90},"tBacktduplicate":{"section_segments":4,"offset":{"x":0,"y":0,"z":0},"position":{"x":[-40,-40,-40,-25,null,null],"y":[0,20,30,40,null],"z":[12,12,12,12,null,null,null]},"width":[10,10,5,0],"height":[0,0,0,0,0],"texture":[1],"angle":90},"tBackbduplicate":{"section_segments":4,"offset":{"x":0,"y":0,"z":0},"position":{"x":[-40,-40,-40,-25,null,null],"y":[0,20,30,40,null],"z":[-12,-12,-12,-12,null,null,null]},"width":[10,10,5,0],"height":[0,0,0,0,0],"texture":[1],"angle":90},"tBacksidesduplicate":{"section_segments":4,"offset":{"x":0,"y":0,"z":0},"position":{"x":[-50,-50,-45,-25,null,null,null],"y":[0,20,30,40,null],"z":[0,0,0,0,0,0]},"width":[0,0,0,0,0],"height":[12,12,12,12],"texture":[1],"angle":90}},"typespec":{"name":"D-Blast","level":6,"model":18,"code":618,"specs":{"shield":{"capacity":[350,100],"reload":[2,2]},"generator":{"capacity":[120,60],"reload":[50,100]},"ship":{"mass":150,"speed":[150,150],"rotation":[30,60],"acceleration":[80,100]}},"shape":[2.103,2.138,2.161,3.814,3.307,2.568,2.16,1.961,1.861,1.876,1.866,1.867,1.912,1.914,1.867,1.866,1.876,1.861,1.874,1.844,1.802,1.835,1.823,1.777,1.781,1.8,1.781,1.777,1.823,1.835,1.802,1.844,1.874,1.861,1.876,1.866,1.867,1.912,1.914,1.867,1.866,1.876,1.861,1.874,1.844,1.828,1.973,2.089,2.161,2.138],"lasers":[{"x":0,"y":-2.1,"z":0,"angle":0,"damage":[35,8],"rate":1.5,"type":1,"speed":[110,180],"number":1,"spread":0,"error":5,"recoil":70},{"x":0.39,"y":-2.1,"z":0,"angle":0,"damage":[35,8],"rate":1.5,"type":1,"speed":[110,180],"number":1,"spread":0,"error":5,"recoil":70}],"radius":3.814}}';

var addArray, ang, dupl, duplicateBody, i, j, jship, k, multiplyArray, ox, oy, ref, v;

multiplyArray = function(arr, m) {
  var i, j, k, ref;
  k = [];
  for (i = j = 0, ref = arr.length; 0 <= ref ? j <= ref : j >= ref; i = 0 <= ref ? ++j : --j) {
    k.push(arr[i] * m);
  }
  return k;
};

addArray = function(arr, m) {
  var i, j, k, ref;
  k = [];
  for (i = j = 0, ref = arr.length; 0 <= ref ? j <= ref : j >= ref; i = 0 <= ref ? ++j : --j) {
    k.push(arr[i] + m);
  }
  return k;
};

duplicateBody = function(name, newName) {
  var b, n;
  if (newName === void 0) {
    newName = name + "duplicate";
  }
  b = model.bodies[name];
  model.bodies[newName] = {
    section_segments: b.section_segments,
    offset: {
      x: b.offset.x,
      y: b.offset.y,
      z: b.offset.z
    },
    position: {
      x: multiplyArray(b.position.x.slice(0), -1),
      y: b.position.y.slice(0),
      z: b.position.z.slice(0)
    },
    width: b.width.slice(0),
    height: b.height.slice(0),
    texture: b.texture.slice(0)
  };
  n = model.bodies[newName];
  if (b.angle !== void 0) {
    n.angle = b.angle;
  }
  if (b.propeller !== void 0) {
    n.propeller = b.propeller;
  }
  return n;
};

var a = 0
for (i = j = 0; j <= 2; i = ++j) {
    jship = JSON.parse(d_blast);
    ref = jship.bodies;
    jship.model = 19+i
    a += 90
    ang = a * 0.0174533;
    for (k in ref) {
      v = ref[k];
      if (k[0] === "t") {
        ox = v.offset.x;
        oy = v.offset.y;
        if (ox !== 0) {
          dupl = duplicateBody(k);
          dupl.offset.x = 0;
          dupl.offset.y = 0;
          dupl.position.x = addArray(multiplyArray(v.position.x, -1), -ox);
          dupl.position.y = addArray(v.position.y, oy);
          dupl.angle *= -1;
          dupl.angle += a;
        }
        v.offset.x = 0;
        v.offset.y = 0;
        v.position.x = addArray(v.position.x, ox);
        v.position.y = addArray(v.position.y, oy);
        v.angle += a;
      }
    }
    ref = jship.typespec.lasers;
    for (k in ref){
      v = ref[k]
      var px = v.x * Math.cos(ang) - v.y * Math.sin(ang)
      var py = v.x * Math.sin(ang) + v.y * Math.cos(ang)
      v.x = -px
      v.y = py
      v.angle = a
    }
    gameplayShips["d_blast"+i] = jship//JSON.stringify(jship)
}
// ---
// generated by coffee-script 1.9.2


gameplayShips.d_blast = d_blast;
showcaseShips[12] = d_blast;

//$fileTape setwriting true

shipsData[12] = {name:"D-Blast",cl:"Defense Ship",company: 5,
  shipCycle: [],
  init: function(){
    this.shipCycle[0] = shipIdsToCodes["d_blast"];
    this.shipCycle[1] = shipIdsToCodes["d_blast0"];
    this.shipCycle[2] = shipIdsToCodes["d_blast1"];
    this.shipCycle[3] = shipIdsToCodes["d_blast2"];
  },
  respawn:function(ship,sh,p){
    ship.set({type:618,stats:66666666,healing:false});
    ship.custom.sprototype.cycle = 0
  },
  /*tick:function(ship, sh, p){
  },*/
  useAbility:function(ship, abId, sh, p){
    switch(abId){
      case 1:
        ship.custom.sprototype.cycle++
        break;
      case 2:
        ship.custom.sprototype.cycle+=2
        break;
      case 3:
        ship.custom.sprototype.cycle--
        break;
      default:
      log("unknown ability "+abId);
    }
    var c = ship.custom.sprototype.cycle;
    ship.custom.sprototype.cycle = ((c % 4) + 4)%4
    ship.set({type:this.shipCycle[ship.custom.sprototype.cycle],stats:ship.custom.lastStats})
    UISystem.events.pushEvent(ship,"shipConfigChange");
  },
  getAbilities:function(ship,sh,p){
    k = [];
    k[1] = {name:"Turn left",id:1,explanation:"Turn the turret 90 degrees to the left",
      ready: 1,
      state: 0
    }
    k[2] = {name:"Flip around",id:2,explanation:"Flip the turret 180 degrees",
      ready: 1,
      state: 0
    }

    k[3] = {name:"Turn right",id:3,explanation:"Turn the turret 90 degrees to the right",
      ready: 1,
      state: 0
    }
    return k;
  },
  tips:[
    "The ultimate turret - choose the aiming configuration that fits you needs best!",
    "Firing straight ahead - simple, classic, reliable.",
    "Broadside drive-by bombing, at your fingertips!",
    "Chased? Or maybe need a boost? Not a problem - turn the turret!",
    "Movement and aiming have never been so detached."
    ],
  unicodeChar: "\u{1f4a0}",
  color: "#00AAFF"
};
