/*Unstablecore
Light Dive Bomber

Inertial bombers aren't a new idea - it doesn't take that big of an intellectual
to imagine dive bombers in space - and yet in never really took off. Lets see
if 4339 is any different, with the advent of Unstablecore - a powerful,
efficient dive bomber, built around the Crystal Core, also known as
AHTP-4335-00d2. Scientist are still not entirely sure as to how these things
work, but we have managed to increase their stability to a reasonable level -
and we found plenty of them to reverse-engineer and produce our own.

Said core can produce a blast of pure energy when triggered. That blast can be
captured into a proper, damaging bolt, with some basic, trivial equipment.
The core loses stability over time, but the system is able to monitor and
combat that effect - yet sometimes, it is useful to let the core fail, which
produces a powerful EMP-like burst, disrupting enemy electronics within range,
bypassing their shields.

*/

//$fileTape ifFlag prerender
//$fileTape setWriting false

var unstablecoreLDB = '{"name":"Unstablecore LDB","level":6,"model":3,"size":0.8,"specs":{"shield":{"capacity":[300,100],"reload":[2,3]},"generator":{"capacity":[500,60],"reload":[100,15]},"ship":{"mass":140,"speed":[150,150],"rotation":[60,60],"acceleration":[100,100]}},"bodies":{"frontTop":{"section_segments":4,"offset":{"x":0,"y":-147,"z":10},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-58,-40,10,30],"z":[0,0,0,0,0,0,0,0,0]},"width":[9,15,15,9],"height":[0,1,1,0],"texture":[1]},"frontBottom":{"section_segments":4,"offset":{"x":0,"y":-147,"z":-10},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-58,-40,10,30],"z":[0,0,0,0,0,0,0,0,0]},"width":[9,15,15,9],"height":[0,1,1,0],"texture":[4]},"frontEnd":{"section_segments":4,"offset":{"x":1,"y":-205,"z":0},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-1,8,20,21],"z":[0,0,0,0,0,0,0,0,0]},"width":[30,30,20,0],"height":[10,10,6,0],"texture":[1,63,63],"angle":90},"frontSides":{"section_segments":6,"offset":{"x":15,"y":-160,"z":0},"position":{"x":[-6,0,0,10,10,6,0,0],"y":[-45,-27,23,43,90,90,100,100,105,105],"z":[0,0,0,0,0,0,0,0,0,0,0]},"width":[10,10,10,5,5,10,10,0],"height":[10,10,10,10,10,10,5,0],"texture":[63]},"frontTopDeco1":{"section_segments":4,"offset":{"x":10,"y":-190,"z":10.5},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-10,-6,2,7],"z":[0,0,0,0,0,0,0,0,0]},"width":[0,2,2,0],"height":[0,1,1,0],"texture":[4],"angle":30},"frontTopDeco2":{"section_segments":4,"offset":{"x":10,"y":-170,"z":10.5},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-10,-6,2,7],"z":[0,0,0,0,0,0,0,0,0]},"width":[0,2,2,0],"height":[0,1,1,0],"texture":[4],"angle":30},"frontTopDeco3":{"section_segments":4,"offset":{"x":10,"y":-180,"z":10.5},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-10,-6,2,7],"z":[0,0,0,0,0,0,0,0,0]},"width":[0,2,2,0],"height":[0,1,1,0],"texture":[4],"angle":30},"frontDeco":{"section_segments":4,"offset":{"x":9,"y":-196,"z":10},"position":{"x":[0,0,0,6,0,0,0,0],"y":[-40,-40,-10,10],"z":[-10,-10,0,0,0,0,0,0,0]},"width":[0,3,3,0],"height":[0,1,1,0],"texture":[4]},"cockpitBottom":{"section_segments":6,"offset":{"x":0,"y":-117,"z":-10},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-20,0,30,47,57],"z":[0,0,0,0,7,0,0,0,0]},"width":[17,29,29,29,18],"height":[0,10,10,5,0],"texture":[3.8]},"cockpitFront":{"section_segments":4,"offset":{"x":11,"y":-130,"z":10},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-28,-7,5,13,15],"z":[0,0,0,0,0,0,0,0,0]},"width":[0,5,10,14,14],"height":[0,7,10,10,10],"texture":[9,7,2]},"cockpitBack":{"section_segments":6,"offset":{"x":1,"y":-70,"z":0},"position":{"x":[0,0,0,10,0,0,0,0,0],"y":[-1,10,20,25],"z":[0,0,0,0,0,0,0,0,0]},"width":[20,20,20,0],"height":[10,10,10,0],"texture":[3.8,63],"angle":90},"coreConnectCockpitT":{"section_segments":6,"offset":{"x":0,"y":-65,"z":15},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-40,-25,-10,-10,30],"z":[-5,0,0,2,2,0,0,0,0,0]},"width":[20,20,20,10,10],"height":[10,10,10,5,5],"texture":[0.8,0.8,2.8,3.8]},"coreConnectCockpitT2":{"section_segments":6,"offset":{"x":5,"y":-65,"z":15},"position":{"x":[0,20,20,20,0,0,0,0,0],"y":[-10,10,35,45],"z":[0,0,0,0,0]},"width":[10,7,7,3],"height":[5,5,5,5],"texture":[3.8]},"coreConnectCockpitB2":{"section_segments":6,"offset":{"x":5,"y":-65,"z":-15},"position":{"x":[10,10,10,20,20,20,0,0,0,0,0],"y":[-40,-20,-10,10,35,45],"z":[5,0,0,0,0,0,0]},"width":[7,7,7,7,7,3],"height":[5,5,5,5,5,5],"texture":[3.8]},"coreMain":{"section_segments":4,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-30,-20,-20,-10],"z":[0,0,0,0,0,0,0,0,0]},"width":[0,5,6,10],"height":[0,21,25,25],"texture":[17,63,4],"angle":0},"coreCrystals":{"section_segments":4,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-35,-30,-25],"z":[0,0,0,0,0,0,0,0,0]},"width":[0,5,0],"height":[0,18,0],"texture":[17],"angle":22.5},"coreTopArms":{"section_segments":6,"offset":{"x":0,"y":0,"z":26},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[10,20,20,25,30,32,37,39],"z":[0,0,0,0,-5,-7,-13,-13,0]},"width":[10,10,7,7,7,10,10,0],"height":[5,5,4,4,4,6,6,0],"texture":[18,63,3.8],"angle":0},"coreBottomArms":{"section_segments":6,"offset":{"x":0,"y":0,"z":-26},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[10,20,20,25,30,32,37,39],"z":[0,0,0,0,5,7,13,13,0,null]},"width":[10,10,7,7,7,10,10,0],"height":[5,5,4,4,4,6,6,0],"texture":[18,63,3.8],"angle":0},"coreStructure":{"section_segments":6,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0],"y":[32,32,37,37],"z":[0,0,0,0,0,0,0,0,0]},"width":[0,8,6,0],"height":[0,25,18,0],"texture":[2.8],"angle":0},"coreConnectEnginesBB":{"section_segments":6,"offset":{"x":65,"y":25,"z":-15},"position":{"x":[20,20,20,0,0,0,0,0,0,0],"y":[-25,-15,10,35,45],"z":[5,0,0,0,0,0,0]},"width":[7,7,7,7,3],"height":[5,5,5,5,5],"texture":[3.8],"angle":-90},"coreConnectEnginesBF":{"section_segments":6,"offset":{"x":75,"y":0,"z":-15},"position":{"x":[20,20,0,0,0,0,0,0,0,0],"y":[-15,-5,20,35,45],"z":[5,0,0,0,0,0,0]},"width":[7,7,7,7,3],"height":[5,5,5,5,5],"texture":[3.8],"angle":-90},"coreConnectEnginesTB":{"section_segments":6,"offset":{"x":65,"y":25,"z":15},"position":{"x":[20,20,20,0,0,0,0,0,0,0],"y":[-25,-15,10,35,45],"z":[-5,0,0,0,0,0,0]},"width":[7,7,7,7,3],"height":[5,5,5,5,5],"texture":[3.8],"angle":-90},"coreConnectEnginesTF":{"section_segments":6,"offset":{"x":75,"y":0,"z":15},"position":{"x":[20,20,0,0,0,0,0,0,0,0],"y":[-15,-5,20,35,45],"z":[-5,0,0,0,0,0,0]},"width":[7,7,7,7,3],"height":[5,5,5,5,5],"texture":[3.8],"angle":-90},"engineConnectPointB":{"section_segments":6,"offset":{"x":90,"y":30,"z":-7},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-25,-20,30,35],"z":[0,0,0,0,0,0,0,0,0]},"width":[0,7,7,0],"height":[0,10,10,0],"texture":[3.8]},"engineConnectPointT":{"section_segments":6,"offset":{"x":90,"y":30,"z":7},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-25,-20,30,35],"z":[0,0,0,0,0,0,0,0,0]},"width":[0,7,7,0],"height":[0,10,10,0],"texture":[3.8]},"enginesNacelles":{"section_segments":8,"offset":{"x":100,"y":85,"z":0},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-20,0,0,10,10,40,20],"z":[0,0,0,0,0,0,0,0,0]},"width":[0,17,20,20,17,12,0],"height":[0,17,20,20,17,12,0],"texture":[4,63,18,63,13,17],"propeller":true},"enginesFrontConnect":{"section_segments":6,"offset":{"x":100,"y":-19,"z":0},"position":{"x":[-20,0,0,-20,0,0,0,0],"y":[-15,-12,12,15],"z":[0,0,0,0,0,0,0,0,0]},"width":[0,16,16,0],"height":[0,15,15,0],"texture":[1],"angle":90},"enginesFrontT":{"section_segments":6,"offset":{"x":100,"y":-34,"z":10},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-2,-2,0,0,-2,2,10,20],"z":[0,0,0,0,0,0,0,0,0]},"width":[0,12,12,15,15,17,17,0],"height":[0,7,7,9,9,11,11,0],"texture":[16.8,16.8,18,4,63,2.8,2.8,2.8]},"enginesFrontB":{"section_segments":6,"offset":{"x":100,"y":-34,"z":-10},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-2,-2,0,0,-2,2,10,20],"z":[0,0,0,0,0,0,0,0,0]},"width":[0,12,12,15,15,17,17,0],"height":[0,7,7,9,9,11,11,0],"texture":[16.8,16.8,18,4,63,2.8,2.8,2.8]},"backWingsCoreConnect":{"section_segments":6,"offset":{"x":0,"y":50,"z":-10},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-16,-10,50,50],"z":[10,0,0,0,0,0,0,0,0]},"width":[6,6,6,0],"height":[20,10,10,0],"texture":[3.8]},"backWingsCoreConnect2":{"section_segments":6,"offset":{"x":1,"y":90,"z":-10},"position":{"x":[0,0,0,5,0,0,0,0],"y":[-1,10,10,30,30],"z":[0,0,0,0,0,0,0,0,0]},"width":[30,30,20,15,0],"height":[15,15,8,5,0],"texture":[3.8,3.8,63],"angle":90},"frontWingsConnect":{"section_segments":6,"offset":{"x":40,"y":-100,"z":0},"position":{"x":[0,0,-40,-40,0,0,0,0],"y":[-20,-10,10,10],"z":[0,0,-10,-7,0,0,0,0,0]},"width":[40,40,30,0],"height":[5,5,5,0],"texture":[63,63],"angle":90},"coreBombLauncher":{"section_segments":4,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-10,0,10],"z":[0,0,0,0,0,0,0,0,0]},"width":[0,10,0],"height":[0,10,0],"texture":[17],"laser":{"damage":[100,60],"rate":0.5,"type":2,"speed":[3,240],"number":4,"angle":270,"error":0}},"cockpitt":{"section_segments":4,"offset":{"x":0,"y":-175,"z":8},"position":{"x":[0,0,0,0,0,0,0],"y":[0,20,50,60,80,105],"z":[0,10,12,12,12,0,null,null]},"width":[7,10,10,23,23,23],"height":[2,2,2,2,2,2,2],"texture":[9,9,1],"angle":0},"cockpitb":{"section_segments":4,"offset":{"x":0,"y":-175,"z":8},"position":{"x":[0,0,0,0,0,0,0],"y":[0,20,50,60,80,105],"z":[-10,-10,-12,-12,-12,0,null,null]},"width":[7,10,10,23,23,23],"height":[2,2,2,2,2,2,2],"texture":[9],"angle":0},"cockpitsides":{"section_segments":4,"offset":{"x":0.01,"y":-175,"z":8},"position":{"x":[7,10,10,23,23,23,null,null],"y":[0,20,50,60,80,105],"z":[-5,0,0,0,0,0,0]},"width":[2,2,2,2,2,2,2],"height":[5,10,12,12,12,0],"texture":[9,9,1,1,13],"angle":0},"enginesdsides":{"section_segments":4,"offset":{"x":100.01,"y":5,"z":0},"position":{"x":[-5,-13,-13,-7,-7,-13,-13,-5,null,null,null],"y":[-30,-20,0,10,50,60,70,85],"z":[0,0,0,0,0,0,0,0]},"width":[3,3,3,3,3,3,3,3,3],"height":[5,17,17,17,17,17,17,5],"texture":[1,1,63,4,63,8,3],"angle":0},"enginest":{"section_segments":4,"offset":{"x":100,"y":5,"z":0},"position":{"x":[0,0,0,3,3,0,0,0,0],"y":[-30,-20,0,10,50,60,70,85],"z":[5,17,17,17,17,17,17,5,null]},"width":[5,13,13,10,10,13,13,5],"height":[3,3,3,3,3,3,3,3,3],"texture":[1,1,63,4,63,8,3],"angle":0},"enginesb":{"section_segments":4,"offset":{"x":100,"y":5,"z":0},"position":{"x":[0,0,0,3,3,0,0,0,0],"y":[-30,-20,0,10,50,60,70,85],"z":[-5,-17,-17,-17,-17,-17,-17,-5,null]},"width":[5,13,13,10,10,13,13,5],"height":[3,3,3,3,3,3,3,3,3],"texture":[1,1,63,4,63,8,3],"angle":0},"enginessides":{"section_segments":4,"offset":{"x":100.01,"y":5,"z":0},"position":{"x":[5,13,13,13,13,13,13,5,null,null],"y":[-30,-20,0,10,50,60,70,85],"z":[0,0,0,0,0,0,0,0]},"width":[3,3,3,3,3,3,3,3,3],"height":[5,17,17,17,17,17,17,5],"texture":[1,1,63,4,63,8,3],"angle":0},"reactorTsegment0":{"section_segments":4,"offset":{"x":0,"y":0,"z":30},"position":{"x":[0,0,0,0,0,0],"y":[0,10,12,16,18],"z":[5,5,2,-3,-30]},"width":[0,4.14213562373095,4.970562748477141,6.6274169979695206,7.45584412271571,null],"height":[0,0,0,0,0,0],"angle":0,"texture":[8,17,3,4]},"reactorTsegment1":{"section_segments":4,"offset":{"x":0,"y":0,"z":30},"position":{"x":[0,0,0,0,0,0],"y":[0,10,12,16,18],"z":[5,5,2,-3,-30]},"width":[0,4.14213562373095,4.970562748477141,6.6274169979695206,7.45584412271571,null],"height":[0,0,0,0,0,0],"angle":45,"texture":[8,17,3,4]},"reactorTsegment2":{"section_segments":4,"offset":{"x":0,"y":0,"z":30},"position":{"x":[0,0,0,0,0,0],"y":[0,10,12,16,18],"z":[5,5,2,-3,-30]},"width":[0,4.14213562373095,4.970562748477141,6.6274169979695206,7.45584412271571,null],"height":[0,0,0,0,0,0],"angle":90,"texture":[8,17,3,4]},"reactorTsegment3":{"section_segments":4,"offset":{"x":0,"y":0,"z":30},"position":{"x":[0,0,0,0,0,0],"y":[0,10,12,16,18],"z":[5,5,2,-3,-30]},"width":[0,4.14213562373095,4.970562748477141,6.6274169979695206,7.45584412271571,null],"height":[0,0,0,0,0,0],"angle":135,"texture":[8,17,3,4]},"reactorTsegment4":{"section_segments":4,"offset":{"x":0,"y":0,"z":30},"position":{"x":[0,0,0,0,0,0],"y":[0,10,12,16,18],"z":[5,5,2,-3,-30]},"width":[0,4.14213562373095,4.970562748477141,6.6274169979695206,7.45584412271571,null],"height":[0,0,0,0,0,0],"angle":180,"texture":[8,17,3,4]},"reactorTsegment5":{"section_segments":4,"offset":{"x":0,"y":0,"z":30},"position":{"x":[0,0,0,0,0,0],"y":[0,10,12,16,18],"z":[5,5,2,-3,-30]},"width":[0,4.14213562373095,4.970562748477141,6.6274169979695206,7.45584412271571,null],"height":[0,0,0,0,0,0],"angle":225,"texture":[8,17,3,4]},"reactorTsegment6":{"section_segments":4,"offset":{"x":0,"y":0,"z":30},"position":{"x":[0,0,0,0,0,0],"y":[0,10,12,16,18],"z":[5,5,2,-3,-30]},"width":[0,4.14213562373095,4.970562748477141,6.6274169979695206,7.45584412271571,null],"height":[0,0,0,0,0,0],"angle":270,"texture":[8,17,3,4]},"reactorTsegment7":{"section_segments":4,"offset":{"x":0,"y":0,"z":30},"position":{"x":[0,0,0,0,0,0],"y":[0,10,12,16,18],"z":[5,5,2,-3,-30]},"width":[0,4.14213562373095,4.970562748477141,6.6274169979695206,7.45584412271571,null],"height":[0,0,0,0,0,0],"angle":315,"texture":[8,17,3,4]},"reactorTsegment8":{"section_segments":4,"offset":{"x":0,"y":0,"z":30},"position":{"x":[0,0,0,0,0,0],"y":[0,10,12,16,18],"z":[5,5,2,-3,-30]},"width":[0,4.14213562373095,4.970562748477141,6.6274169979695206,7.45584412271571,null],"height":[0,0,0,0,0,0],"angle":360,"texture":[8,17,3,4]},"reactorBsegment0":{"section_segments":4,"offset":{"x":0,"y":0,"z":-30},"position":{"x":[0,0,0,0,0,0],"y":[0,10,12,16,18],"z":[-5,-5,-2,3,30,null]},"width":[0,4.14213562373095,4.970562748477141,6.6274169979695206,7.45584412271571,null],"height":[0,0,0,0,0,0],"angle":0,"texture":[8,17,3,4]},"reactorBsegment1":{"section_segments":4,"offset":{"x":0,"y":0,"z":-30},"position":{"x":[0,0,0,0,0,0],"y":[0,10,12,16,18],"z":[-5,-5,-2,3,30,null]},"width":[0,4.14213562373095,4.970562748477141,6.6274169979695206,7.45584412271571,null],"height":[0,0,0,0,0,0],"angle":45,"texture":[8,17,3,4]},"reactorBsegment2":{"section_segments":4,"offset":{"x":0,"y":0,"z":-30},"position":{"x":[0,0,0,0,0,0],"y":[0,10,12,16,18],"z":[-5,-5,-2,3,30,null]},"width":[0,4.14213562373095,4.970562748477141,6.6274169979695206,7.45584412271571,null],"height":[0,0,0,0,0,0],"angle":90,"texture":[8,17,3,4]},"reactorBsegment3":{"section_segments":4,"offset":{"x":0,"y":0,"z":-30},"position":{"x":[0,0,0,0,0,0],"y":[0,10,12,16,18],"z":[-5,-5,-2,3,30,null]},"width":[0,4.14213562373095,4.970562748477141,6.6274169979695206,7.45584412271571,null],"height":[0,0,0,0,0,0],"angle":135,"texture":[8,17,3,4]},"reactorBsegment4":{"section_segments":4,"offset":{"x":0,"y":0,"z":-30},"position":{"x":[0,0,0,0,0,0],"y":[0,10,12,16,18],"z":[-5,-5,-2,3,30,null]},"width":[0,4.14213562373095,4.970562748477141,6.6274169979695206,7.45584412271571,null],"height":[0,0,0,0,0,0],"angle":180,"texture":[8,17,3,4]},"reactorBsegment5":{"section_segments":4,"offset":{"x":0,"y":0,"z":-30},"position":{"x":[0,0,0,0,0,0],"y":[0,10,12,16,18],"z":[-5,-5,-2,3,30,null]},"width":[0,4.14213562373095,4.970562748477141,6.6274169979695206,7.45584412271571,null],"height":[0,0,0,0,0,0],"angle":225,"texture":[8,17,3,4]},"reactorBsegment6":{"section_segments":4,"offset":{"x":0,"y":0,"z":-30},"position":{"x":[0,0,0,0,0,0],"y":[0,10,12,16,18],"z":[-5,-5,-2,3,30,null]},"width":[0,4.14213562373095,4.970562748477141,6.6274169979695206,7.45584412271571,null],"height":[0,0,0,0,0,0],"angle":270,"texture":[8,17,3,4]},"reactorBsegment7":{"section_segments":4,"offset":{"x":0,"y":0,"z":-30},"position":{"x":[0,0,0,0,0,0],"y":[0,10,12,16,18],"z":[-5,-5,-2,3,30,null]},"width":[0,4.14213562373095,4.970562748477141,6.6274169979695206,7.45584412271571,null],"height":[0,0,0,0,0,0],"angle":315,"texture":[8,17,3,4]},"reactorBsegment8":{"section_segments":4,"offset":{"x":0,"y":0,"z":-30},"position":{"x":[0,0,0,0,0,0],"y":[0,10,12,16,18],"z":[-5,-5,-2,3,30,null]},"width":[0,4.14213562373095,4.970562748477141,6.6274169979695206,7.45584412271571,null],"height":[0,0,0,0,0,0],"angle":360,"texture":[8,17,3,4]},"coreMainstar1":{"section_segments":4,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-30,-20,-20,-10],"z":[0,0,0,0,0,0,0,0,0]},"width":[0,5,6,10],"height":[0,21,25,25],"texture":[17,63,4],"angle":45},"coreMainstar2":{"section_segments":4,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-30,-20,-20,-10],"z":[0,0,0,0,0,0,0,0,0]},"width":[0,5,6,10],"height":[0,21,25,25],"texture":[17,63,4],"angle":90},"coreMainstar3":{"section_segments":4,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-30,-20,-20,-10],"z":[0,0,0,0,0,0,0,0,0]},"width":[0,5,6,10],"height":[0,21,25,25],"texture":[17,63,4],"angle":135},"coreMainstar4":{"section_segments":4,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-30,-20,-20,-10],"z":[0,0,0,0,0,0,0,0,0]},"width":[0,5,6,10],"height":[0,21,25,25],"texture":[17,63,4],"angle":180},"coreMainstar5":{"section_segments":4,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-30,-20,-20,-10],"z":[0,0,0,0,0,0,0,0,0]},"width":[0,5,6,10],"height":[0,21,25,25],"texture":[17,63,4],"angle":225},"coreMainstar6":{"section_segments":4,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-30,-20,-20,-10],"z":[0,0,0,0,0,0,0,0,0]},"width":[0,5,6,10],"height":[0,21,25,25],"texture":[17,63,4],"angle":270},"coreMainstar7":{"section_segments":4,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-30,-20,-20,-10],"z":[0,0,0,0,0,0,0,0,0]},"width":[0,5,6,10],"height":[0,21,25,25],"texture":[17,63,4],"angle":315},"coreCrystalsstar1":{"section_segments":4,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-35,-30,-25],"z":[0,0,0,0,0,0,0,0,0]},"width":[0,5,0],"height":[0,18,0],"texture":[17],"angle":67.5},"coreCrystalsstar2":{"section_segments":4,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-35,-30,-25],"z":[0,0,0,0,0,0,0,0,0]},"width":[0,5,0],"height":[0,18,0],"texture":[17],"angle":112.5},"coreCrystalsstar3":{"section_segments":4,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-35,-30,-25],"z":[0,0,0,0,0,0,0,0,0]},"width":[0,5,0],"height":[0,18,0],"texture":[17],"angle":157.5},"coreCrystalsstar4":{"section_segments":4,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-35,-30,-25],"z":[0,0,0,0,0,0,0,0,0]},"width":[0,5,0],"height":[0,18,0],"texture":[17],"angle":202.5},"coreCrystalsstar5":{"section_segments":4,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-35,-30,-25],"z":[0,0,0,0,0,0,0,0,0]},"width":[0,5,0],"height":[0,18,0],"texture":[17],"angle":247.5},"coreCrystalsstar6":{"section_segments":4,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-35,-30,-25],"z":[0,0,0,0,0,0,0,0,0]},"width":[0,5,0],"height":[0,18,0],"texture":[17],"angle":292.5},"coreCrystalsstar7":{"section_segments":4,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-35,-30,-25],"z":[0,0,0,0,0,0,0,0,0]},"width":[0,5,0],"height":[0,18,0],"texture":[17],"angle":337.5},"coreTopArmsstar1":{"section_segments":6,"offset":{"x":0,"y":0,"z":26},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[10,20,20,25,30,32,37,39],"z":[0,0,0,0,-5,-7,-13,-13,0]},"width":[10,10,7,7,7,10,10,0],"height":[5,5,4,4,4,6,6,0],"texture":[18,63,3.8],"angle":45},"coreTopArmsstar2":{"section_segments":6,"offset":{"x":0,"y":0,"z":26},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[10,20,20,25,30,32,37,39],"z":[0,0,0,0,-5,-7,-13,-13,0]},"width":[10,10,7,7,7,10,10,0],"height":[5,5,4,4,4,6,6,0],"texture":[18,63,3.8],"angle":90},"coreTopArmsstar3":{"section_segments":6,"offset":{"x":0,"y":0,"z":26},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[10,20,20,25,30,32,37,39],"z":[0,0,0,0,-5,-7,-13,-13,0]},"width":[10,10,7,7,7,10,10,0],"height":[5,5,4,4,4,6,6,0],"texture":[18,63,3.8],"angle":135},"coreTopArmsstar4":{"section_segments":6,"offset":{"x":0,"y":0,"z":26},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[10,20,20,25,30,32,37,39],"z":[0,0,0,0,-5,-7,-13,-13,0]},"width":[10,10,7,7,7,10,10,0],"height":[5,5,4,4,4,6,6,0],"texture":[18,63,3.8],"angle":180},"coreTopArmsstar5":{"section_segments":6,"offset":{"x":0,"y":0,"z":26},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[10,20,20,25,30,32,37,39],"z":[0,0,0,0,-5,-7,-13,-13,0]},"width":[10,10,7,7,7,10,10,0],"height":[5,5,4,4,4,6,6,0],"texture":[18,63,3.8],"angle":225},"coreTopArmsstar6":{"section_segments":6,"offset":{"x":0,"y":0,"z":26},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[10,20,20,25,30,32,37,39],"z":[0,0,0,0,-5,-7,-13,-13,0]},"width":[10,10,7,7,7,10,10,0],"height":[5,5,4,4,4,6,6,0],"texture":[18,63,3.8],"angle":270},"coreTopArmsstar7":{"section_segments":6,"offset":{"x":0,"y":0,"z":26},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[10,20,20,25,30,32,37,39],"z":[0,0,0,0,-5,-7,-13,-13,0]},"width":[10,10,7,7,7,10,10,0],"height":[5,5,4,4,4,6,6,0],"texture":[18,63,3.8],"angle":315},"coreBottomArmsstar1":{"section_segments":6,"offset":{"x":0,"y":0,"z":-26},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[10,20,20,25,30,32,37,39],"z":[0,0,0,0,5,7,13,13,0,null]},"width":[10,10,7,7,7,10,10,0],"height":[5,5,4,4,4,6,6,0],"texture":[18,63,3.8],"angle":45},"coreBottomArmsstar2":{"section_segments":6,"offset":{"x":0,"y":0,"z":-26},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[10,20,20,25,30,32,37,39],"z":[0,0,0,0,5,7,13,13,0,null]},"width":[10,10,7,7,7,10,10,0],"height":[5,5,4,4,4,6,6,0],"texture":[18,63,3.8],"angle":90},"coreBottomArmsstar3":{"section_segments":6,"offset":{"x":0,"y":0,"z":-26},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[10,20,20,25,30,32,37,39],"z":[0,0,0,0,5,7,13,13,0,null]},"width":[10,10,7,7,7,10,10,0],"height":[5,5,4,4,4,6,6,0],"texture":[18,63,3.8],"angle":135},"coreBottomArmsstar4":{"section_segments":6,"offset":{"x":0,"y":0,"z":-26},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[10,20,20,25,30,32,37,39],"z":[0,0,0,0,5,7,13,13,0,null]},"width":[10,10,7,7,7,10,10,0],"height":[5,5,4,4,4,6,6,0],"texture":[18,63,3.8],"angle":180},"coreBottomArmsstar5":{"section_segments":6,"offset":{"x":0,"y":0,"z":-26},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[10,20,20,25,30,32,37,39],"z":[0,0,0,0,5,7,13,13,0,null]},"width":[10,10,7,7,7,10,10,0],"height":[5,5,4,4,4,6,6,0],"texture":[18,63,3.8],"angle":225},"coreBottomArmsstar6":{"section_segments":6,"offset":{"x":0,"y":0,"z":-26},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[10,20,20,25,30,32,37,39],"z":[0,0,0,0,5,7,13,13,0,null]},"width":[10,10,7,7,7,10,10,0],"height":[5,5,4,4,4,6,6,0],"texture":[18,63,3.8],"angle":270},"coreBottomArmsstar7":{"section_segments":6,"offset":{"x":0,"y":0,"z":-26},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[10,20,20,25,30,32,37,39],"z":[0,0,0,0,5,7,13,13,0,null]},"width":[10,10,7,7,7,10,10,0],"height":[5,5,4,4,4,6,6,0],"texture":[18,63,3.8],"angle":315},"coreStructurestar1":{"section_segments":6,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0],"y":[32,32,37,37],"z":[0,0,0,0,0,0,0,0,0]},"width":[0,8,6,0],"height":[0,25,18,0],"texture":[2.8],"angle":45},"coreStructurestar2":{"section_segments":6,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0],"y":[32,32,37,37],"z":[0,0,0,0,0,0,0,0,0]},"width":[0,8,6,0],"height":[0,25,18,0],"texture":[2.8],"angle":90},"coreStructurestar3":{"section_segments":6,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0],"y":[32,32,37,37],"z":[0,0,0,0,0,0,0,0,0]},"width":[0,8,6,0],"height":[0,25,18,0],"texture":[2.8],"angle":135},"coreStructurestar4":{"section_segments":6,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0],"y":[32,32,37,37],"z":[0,0,0,0,0,0,0,0,0]},"width":[0,8,6,0],"height":[0,25,18,0],"texture":[2.8],"angle":180},"coreStructurestar5":{"section_segments":6,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0],"y":[32,32,37,37],"z":[0,0,0,0,0,0,0,0,0]},"width":[0,8,6,0],"height":[0,25,18,0],"texture":[2.8],"angle":225},"coreStructurestar6":{"section_segments":6,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0],"y":[32,32,37,37],"z":[0,0,0,0,0,0,0,0,0]},"width":[0,8,6,0],"height":[0,25,18,0],"texture":[2.8],"angle":270},"coreStructurestar7":{"section_segments":6,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0],"y":[32,32,37,37],"z":[0,0,0,0,0,0,0,0,0]},"width":[0,8,6,0],"height":[0,25,18,0],"texture":[2.8],"angle":315}},"wings":{"fwings":{"doubleside":true,"offset":{"x":40,"y":-90,"z":-10},"length":[0,20,0,20,0,20],"width":[0,160,120,80,40],"angle":[0,0,0,0,0,0],"position":[-10,-10,10,30,70,0],"texture":[63,63,4],"bump":{"position":40,"size":5}},"bwings":{"doubleside":true,"offset":{"x":25,"y":100,"z":-10},"length":[0,30,20,0,20],"width":[0,100,50,20],"angle":[0,0,0,0,0,0],"position":[-10,-10,-10,-25,0],"texture":[63,63,4],"bump":{"position":-40,"size":5}}},"typespec":{"name":"Unstablecore LDB","level":6,"model":3,"code":603,"specs":{"shield":{"capacity":[300,100],"reload":[2,3]},"generator":{"capacity":[500,60],"reload":[100,15]},"ship":{"mass":140,"speed":[150,150],"rotation":[60,60],"acceleration":[100,100]}},"shape":[3.781,3.694,2.95,2.646,2.25,1.827,1.668,1.558,1.485,1.564,1.906,1.895,1.871,1.871,1.915,1.996,2.118,2.372,2.519,2.685,2.596,2.043,2.129,2.26,2.275,1.859,2.275,2.26,2.129,2.043,2.596,2.685,2.519,2.372,2.118,1.996,1.915,1.871,1.871,1.895,1.906,1.564,1.485,1.558,1.668,1.827,2.25,2.646,2.95,3.694],"lasers":[{"x":0,"y":-0.16,"z":0,"angle":0,"damage":[100,60],"rate":0.5,"type":1,"speed":[3,240],"number":4,"spread":270,"error":0,"recoil":0}],"radius":3.781}}';

gameplayShips.unstablecoreLDB = unstablecoreLDB;
showcaseShips[2] = unstablecoreLDB;

//$fileTape setWriting true

shipsData[2] = {name:"Unstablecore LDB",cl:"Dive bomber",company: 1,
  configs: [],
  init: function(){
    this.configs[0] = shipIdsToCodes["unstablecoreLDB"];
  },
  EMPCooldownTime: 60,
  EMPRange: 20,
  EMPReactorFailureTime: 10,
  EMPElShutdownTime: 4,
  respawn:function(ship,sh,p){


    ship.custom.sprototype.EMPCooldown = this.EMPCooldownTime;
    ship.set({type:this.configs[0],stats:66666666,healing:false});

  },
  tick:function(ship, sh, p){


    p.EMPCooldown-=sp.systems.aliveBooster.getReloadBuff(ship);
  },
  useAbility:function(ship, abId, sh, p){


    switch(abId){
      case 1:
        if(p.EMPCooldown<0){
          p.EMPCooldown = this.EMPCooldownTime;

          addEffectToShip(ship, 10, this.EMPReactorFailureTime, 2, 10);

          range = this.EMPRange*this.EMPRange;
          for(ss=0;ss<game.ships.length;ss++){
            sh = game.ships[ss];
            xx = sh.x-ship.x;
            yy = sh.y-ship.y;
            xx = xx*xx;
            yy = yy*yy;
            if(xx+yy<range&&sh.custom.team!=ship.custom.team){
              addEffectToShip(sh, 6, this.EMPElShutdownTime, 5, 5);
            }

          }
          GPOTypes[0].create(ship.x,ship.y,ship.custom.team,this.EMPRange,3);
        }
        break;
      default:
      log("unknown ability "+abId);
    }
  },
  getAbilities:function(ship,sh,p){
    k = [];


    EMPState = 0;
    if(p.EMPCooldown>=0){
      EMPState = 2;
    }
    k[1] = {name:"EMP",id:1,
      explanation:"Temporarily shut down all enemies in range",
      ready: 1-p.EMPCooldown/this.EMPCooldownTime,
      state: EMPState
    }
    return k;
  },
  tips:[
    "Prioritize slow targets.",
    "This ship is a dive bomber. Shots should be aimed with movement.",
    "Shots inherit your velocity when fired - dive towards enemies to hit your shots.",
    "Use your EMP ability to temporarily disable enemies in proximity.",
    "EMP is very useful for taking out fast, small fighters."
    ],
  unicodeChar: "\u{1f31f}",
  color: "#FFFF88"
};