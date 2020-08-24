/*Sidewinder
Light Mobile Turret

Stinger was highly successful, efficient and deadly, and thus, the engineers
behind it decided to expand upon its concept.

And so they did. Sidewinder LMT is the "brother" of Stinger LMT, utilizing
the same(slightly modified) base platform, and swapping two reasonable
pulse weapons for a giant, deadly one, full of recoil.

A mighty fighter. Its recoil may seem like a downside in some rare situations,
but most of the time, it is trully useful. It also allows the ship to
retreat from combat without turning around, and on top of that, the Reentry
ability allows the ship to re-enter combat soon after, fully reshielded and
searching revenge.

*/

//$fileTape ifFlag prerender
//$fileTape setWriting false

var sidewinderLMT = '{"name":"Sidewinder LMT","level":6,"model":16,"size":1,"zoom":1,"scaleUp":1.4,"circularHitbox":1,"specs":{"shield":{"capacity":[300,300],"reload":[2,2]},"generator":{"capacity":[200,200],"reload":[55,55]},"ship":{"mass":110,"speed":[150,150],"rotation":[30,105],"acceleration":[50,30]}},"bodies":{"main":{"section_segments":6,"offset":{"x":0,"y":-50,"z":0},"position":{"x":[20,20,20,20,20,20,20,20,20,20,null],"y":[-10,0,30,35,70,120,122],"z":[0,0,0,0,0,0,0,0,0]},"width":[15,20,20,25,25,20,0],"height":[0,10,10,10,10,10,0],"texture":[11,10,3,10,11.6,0.8]},"cockpit":{"section_segments":6,"offset":{"x":0,"y":-49,"z":8},"position":{"x":[20,20,20,20,20,20,20,20,20,20,20,null],"y":[-10,-7,0,10,30,40,60,80],"z":[-7,-3,0,0,0,0,0,-6,0,0]},"width":[6,8,12,12,12,15,15,15],"height":[0,3,4,5,5,10,10,5],"texture":[4,4,9,9,4,18,18]},"front":{"section_segments":4,"offset":{"x":0,"y":-50,"z":0},"position":{"x":[14.284261726902422,28.28426172690242,28.28426172690242,7.284261726902422,7.284261726902422,28.28426172690242,28.28426172690242,28.28426172690242,null,null],"y":[4.284280768018174,18.284280768018174,28.284280768018174,48.28428076801818,48.28428076801818,null,null],"z":[0,0,0,0,0,0,0,0,0]},"width":[5,5,5,5,0],"height":[5,5,5,5,0],"texture":[4,63,4],"angle":45},"underside":{"section_segments":6,"offset":{"x":0,"y":0,"z":-5},"position":{"x":[20,20,20,20,20,20,20,20,20,20,null],"y":[-57,-50,-30,10,50,70],"z":[2,1,0,0,0,0,0,0,0]},"width":[17,21,23,30,20,0],"height":[0,6,7,7,5,0],"texture":[3.8]},"reactorHeatSinks":{"section_segments":6,"offset":{"x":0,"y":46,"z":8},"position":{"x":[28,28,28,28,28,28,28,28,28,28,null,null],"y":[-10,0,17,20,22],"z":[-6,0,0,-1,-5,0,0,0,0]},"width":[5,5,5,5,5,5,5,5],"height":[0,5,5,5,0],"texture":[3.8,16.8,3.8,3.8]},"reactorEngine":{"section_segments":6,"offset":{"x":0,"y":46,"z":8},"position":{"x":[20,20,20,20,20,20,20,20,20,20,20,20,null],"y":[-30,-15,-10,-5,18,23,28,28,25],"z":[0,0,0,0,0,0,0,0,0]},"width":[10,10,8,8,8,8,6,5,0],"height":[6,6,8,8,8,8,6,5,0],"texture":[3.8,18,13,16,13,18,3.8,16.8],"propeller":true},"bottomEngines":{"section_segments":6,"offset":{"x":0,"y":43,"z":-6},"position":{"x":[30,30,30,30,30,30,30,30,30,30,null,null],"y":[-20,-10,20,25,30,35,30],"z":[3,0,0,0,0,0,0,0,0]},"width":[10,10,10,7,7,5,0],"height":[7,7,7,7,7,5,0],"texture":[2.8,2.8,2.8,3.8,18,16.8],"propeller":true},"weapon":{"section_segments":6,"offset":{"x":0,"y":-12,"z":0},"position":{"x":[-25,-25,-25,-25,-25,-25,-25,-25,-25,-25,null,null],"y":[-50,-70,-40,-40,-10,10,30,31],"z":[0,0,0,0,0,0,0,0,0]},"width":[0,7,9,11,11,11,11,0],"height":[0,7,9,11,20,20,15,0],"texture":[16.8,13,11,11,1,10,0.8],"laser":{"damage":[150,150],"rate":1,"type":2,"speed":[120,70],"number":1,"error":0,"recoil":70}},"gunConnectorFront":{"section_segments":6,"offset":{"x":0,"y":-20,"z":0},"position":{"x":[-0.000013464102072031659,-0.000013464102072031659,-0.000013464102072031659,-0.000013464102072031659,-0.000013464102072031659,-0.000013464102072031659,-0.000013464102072031659,-0.000013464102072031659,null],"y":[-9.999999999995467,5.000000000004533,7.000000000004533,30.000000000004533,null],"z":[0,0,0,0,0,0,0,0,0]},"width":[10,10,6,6],"height":[5,5,3,3],"texture":[3.8,63,0.8],"angle":-90},"reactor":{"section_segments":12,"offset":{"x":0,"y":39,"z":0},"position":{"x":[0.000016830127590039574,0.000016830127590039574,0.000016830127590039574,0.000016830127590039574,0.000016830127590039574,0.000016830127590039574,0.000016830127590039574,0.000016830127590039574,0.000016830127590039574,0.000016830127590039574,0.000016830127590039574,0.000016830127590039574,0.000016830127590039574,0.000016830127590039574,0.000016830127590039574,0.000016830127590039574,0.000016830127590039574,null,null],"y":[-37.99999999999434,-37.99999999999434,-35.99999999999434,-35.99999999999434,-37.99999999999434,-36.99999999999434,-34.99999999999434,-14.999999999994337,-12.999999999994337,-12.999999999994337,-14.999999999994337,-14.999999999994337,5.000000000005663,5.000000000005663,null,null],"z":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},"width":[0,7,9,19,21,23,25,25,23,13,12,10,15,0],"height":[0,7,9,19,21,23,25,25,23,13,12,5,5,0],"texture":[18,8,17,1,1,1,1,1,1,4,18,11],"angle":90},"reactorTopGlowPiece1":{"section_segments":8,"offset":{"x":0,"y":22,"z":-5},"position":{"x":[-25,-25,-25,-25,-25,-25,-25,-25,null,null],"y":[-4,0,0,4,4,5,5,null],"z":[0,0,0,0,0,0,0,0,0]},"width":[3,3,2.5,2.5,3,2,0,null],"height":[3,3,2.5,2.5,3,2,0],"texture":[1,1,17,4,1,17],"vertical":true},"reactorTopGlowPiece2":{"section_segments":8,"offset":{"x":0,"y":22,"z":-12},"position":{"x":[-25,-25,-25,-25,-25,-25,-25,-25,null,null],"y":[-4,0,0,4,4,5,5,null],"z":[0,0,0,0,0,0,0,0,0]},"width":[3,3,2.5,2.5,3,2,0,null],"height":[3,3,2.5,2.5,3,2,0],"texture":[1,1,17,4,1,17],"vertical":true},"reactorTopGlowPiece3":{"section_segments":8,"offset":{"x":0,"y":22,"z":-19},"position":{"x":[-25,-25,-25,-25,-25,-25,-25,-25,null,null],"y":[-4,0,0,4,4,5,5,null],"z":[0,0,0,0,0,0,0,0,0]},"width":[3,3,2.5,2.5,3,2,0,null],"height":[3,3,2.5,2.5,3,2,0],"texture":[1,1,17,4,1,17],"vertical":true},"reactorTopGlowPiece4":{"section_segments":8,"offset":{"x":0,"y":-22,"z":-5},"position":{"x":[-25,-25,-25,-25,-25,-25,-25,-25,null,null],"y":[4,0,0,-4,-4,-5,-5,null],"z":[0,0,0,0,0,0,0,0,0]},"width":[-3,-3,-2.5,-2.5,-3,-2,0,null],"height":[3,3,2.5,2.5,3,2,0],"texture":[1,1,17,4,1,17],"vertical":true},"reactorTopGlowPiece5":{"section_segments":8,"offset":{"x":0,"y":-22,"z":-12},"position":{"x":[-25,-25,-25,-25,-25,-25,-25,-25,null,null],"y":[4,0,0,-4,-4,-5,-5,null],"z":[0,0,0,0,0,0,0,0,0]},"width":[-3,-3,-2.5,-2.5,-3,-2,0,null],"height":[3,3,2.5,2.5,3,2,0],"texture":[1,1,17,4,1,17],"vertical":true},"reactorTopGlowPiece6":{"section_segments":8,"offset":{"x":0,"y":-22,"z":-19},"position":{"x":[-25,-25,-25,-25,-25,-25,-25,-25,null,null],"y":[4,0,0,-4,-4,-5,-5,null],"z":[0,0,0,0,0,0,0,0,0]},"width":[-3,-3,-2.5,-2.5,-3,-2,0,null],"height":[3,3,2.5,2.5,3,2,0],"texture":[1,1,17,4,1,17],"vertical":true},"tubesSideOuter":{"section_segments":6,"offset":{"x":0,"y":0,"z":13},"position":{"x":[-31,-35,-38,-38,-33,-33,-38,-38,null,null],"y":[-20,-15,-5,7,15,30],"z":[-7,-3,0,0,0,0,0,0,0]},"width":[3,3,3,3,3,3],"height":[3,3,3,3,3,3],"texture":[63]},"tubesSideInner":{"section_segments":6,"offset":{"x":0,"y":0,"z":13},"position":{"x":[-19,-15,-12,-12,-17,-17,-12,-12,null,null,null],"y":[-20,-15,-5,7,15,30],"z":[-7,-3,0,0,0,0,0,0,0]},"width":[3,3,3,3,3,3],"height":[3,3,3,3,3,3],"texture":[63]},"engineMain":{"section_segments":8,"offset":{"x":0,"y":80,"z":0},"position":{"x":[-25,-25,-25,-25,-25,-25,-25,-25,-25,-25,null,null],"y":[-40,-15,-10,3,8,10,11,16,25,15],"z":[0,0,0,0,0,0,0,0,0,0,0]},"width":[10,10,7,7,10,10,15,15,12,0],"height":[10,10,7,7,10,10,15,15,12,0],"texture":[1,13,4,13,8,4,4,4,17],"propeller":true},"engineMainHorizontalPiece":{"section_segments":6,"offset":{"x":0,"y":75,"z":0},"position":{"x":[-25,-25,-25,-25,-25,-25,-25,-25,null,null],"y":[-20,-10,17,20],"z":[0,0,0,0,0,0,0,0,0]},"width":[13,15,15,0],"height":[6,6,6,0],"texture":[1,18]},"canister1":{"section_segments":8,"offset":{"x":0,"y":71,"z":10},"position":{"x":[0.000016830127590039574,0.000016830127590039574,0.000016830127590039574,0.000016830127590039574,0.000016830127590039574,0.000016830127590039574,0.000016830127590039574,0.000016830127590039574,null,null],"y":[-39.99999999999434,-39.99999999999434,-37.99999999999434,-34.99999999999434,-14.999999999994337,-11.999999999994337,-9.999999999994337,-9.999999999994337,null,null],"z":[0,0,0,0,0,0,0,0,0]},"width":[0,3,6,7,7,6,3,0],"height":[0,3,6,7,7,6,3,0],"texture":[63],"angle":90},"canister2":{"section_segments":8,"offset":{"x":0,"y":84,"z":10},"position":{"x":[0.000016830127590039574,0.000016830127590039574,0.000016830127590039574,0.000016830127590039574,0.000016830127590039574,0.000016830127590039574,0.000016830127590039574,0.000016830127590039574,null,null],"y":[-39.99999999999434,-39.99999999999434,-37.99999999999434,-34.99999999999434,-14.999999999994337,-11.999999999994337,-9.999999999994337,-9.999999999994337,null,null],"z":[0,0,0,0,0,0,0,0,0]},"width":[0,3,6,7,7,6,3,0],"height":[0,3,6,7,7,6,3,0],"texture":[63],"angle":90},"canister3":{"section_segments":8,"offset":{"x":0,"y":71,"z":-10},"position":{"x":[0.000016830127590039574,0.000016830127590039574,0.000016830127590039574,0.000016830127590039574,0.000016830127590039574,0.000016830127590039574,0.000016830127590039574,0.000016830127590039574,null,null],"y":[-39.99999999999434,-39.99999999999434,-37.99999999999434,-34.99999999999434,-14.999999999994337,-11.999999999994337,-9.999999999994337,-9.999999999994337,null,null],"z":[0,0,0,0,0,0,0,0,0]},"width":[0,3,6,7,7,6,3,0],"height":[0,3,6,7,7,6,3,0],"texture":[63],"angle":90},"canister4":{"section_segments":8,"offset":{"x":0,"y":84,"z":-10},"position":{"x":[0.000016830127590039574,0.000016830127590039574,0.000016830127590039574,0.000016830127590039574,0.000016830127590039574,0.000016830127590039574,0.000016830127590039574,0.000016830127590039574,null,null],"y":[-39.99999999999434,-39.99999999999434,-37.99999999999434,-34.99999999999434,-14.999999999994337,-11.999999999994337,-9.999999999994337,-9.999999999994337,null,null],"z":[0,0,0,0,0,0,0,0,0]},"width":[0,3,6,7,7,6,3,0],"height":[0,3,6,7,7,6,3,0],"texture":[63],"angle":90},"gunTopdsides":{"section_segments":4,"offset":{"x":0,"y":-70,"z":13},"position":{"x":[-31.996040070672006,-31.996040070672006,-31.996040070672006,-29.996040070672006,-29.996040070672006,null,null,null,null,null,null,null],"y":[49.546237238178776,54.546237238178776,66.54623723817878,69.54623723817878,99.54623723817878,null,null],"z":[-10,0,0,0,-4]},"width":[2,2,2,2,2,2],"height":[6,6,6,6,10],"texture":[1],"angle":1},"gunTopt":{"section_segments":4,"offset":{"x":0,"y":-70,"z":13},"position":{"x":[-25.996040070672006,-25.996040070672006,-25.996040070672006,-25.996040070672006,-25.996040070672006,-25.996040070672006,-25.996040070672006,-25.996040070672006,null,null],"y":[49.546237238178776,54.546237238178776,66.54623723817878,69.54623723817878,99.54623723817878,null,null],"z":[-4,6,6,6,6,null]},"width":[6,6,6,4,4],"height":[2,2,2,2,2,2],"texture":[1],"angle":1},"gunTopb":{"section_segments":4,"offset":{"x":0,"y":-70,"z":13},"position":{"x":[-25.996040070672006,-25.996040070672006,-25.996040070672006,-25.996040070672006,-25.996040070672006,-25.996040070672006,-25.996040070672006,-25.996040070672006,null,null],"y":[49.546237238178776,54.546237238178776,66.54623723817878,69.54623723817878,99.54623723817878,null,null],"z":[-16,-6,-6,-6,-14,null]},"width":[6,6,6,4,4],"height":[2,2,2,2,2,2],"texture":[1],"angle":1},"gunTopsides":{"section_segments":4,"offset":{"x":0,"y":-70,"z":13},"position":{"x":[-19.996040070672006,-19.996040070672006,-19.996040070672006,-21.996040070672006,-21.996040070672006,null,null,null,null,null,null],"y":[49.546237238178776,54.546237238178776,66.54623723817878,69.54623723817878,99.54623723817878,null,null],"z":[-10,0,0,0,-4]},"width":[2,2,2,2,2,2],"height":[6,6,6,6,10],"texture":[1],"angle":1},"gunBottomdsides":{"section_segments":4,"offset":{"x":0,"y":-70,"z":-13},"position":{"x":[-31.996040070672006,-31.996040070672006,-31.996040070672006,-29.996040070672006,-29.996040070672006,null,null,null,null,null,null,null],"y":[49.546237238178776,54.546237238178776,66.54623723817878,69.54623723817878,99.54623723817878,null,null],"z":[10,0,0,0,4]},"width":[2,2,2,2,2,2],"height":[6,6,6,6,10],"texture":[1],"angle":1},"gunBottomt":{"section_segments":4,"offset":{"x":0,"y":-70,"z":-13},"position":{"x":[-25.996040070672006,-25.996040070672006,-25.996040070672006,-25.996040070672006,-25.996040070672006,-25.996040070672006,-25.996040070672006,-25.996040070672006,null,null],"y":[49.546237238178776,54.546237238178776,66.54623723817878,69.54623723817878,99.54623723817878,null,null],"z":[16,6,6,6,14,null]},"width":[6,6,6,4,4],"height":[2,2,2,2,2,2],"texture":[1],"angle":1},"gunBottomb":{"section_segments":4,"offset":{"x":0,"y":-70,"z":-13},"position":{"x":[-25.996040070672006,-25.996040070672006,-25.996040070672006,-25.996040070672006,-25.996040070672006,-25.996040070672006,-25.996040070672006,-25.996040070672006,null,null],"y":[49.546237238178776,54.546237238178776,66.54623723817878,69.54623723817878,99.54623723817878,null,null],"z":[4,-6,-6,-6,-6,null]},"width":[6,6,6,4,4],"height":[2,2,2,2,2,2],"texture":[1],"angle":1},"gunBottomsides":{"section_segments":4,"offset":{"x":0,"y":-70,"z":-13},"position":{"x":[-19.996040070672006,-19.996040070672006,-19.996040070672006,-21.996040070672006,-21.996040070672006,null,null,null,null,null,null],"y":[49.546237238178776,54.546237238178776,66.54623723817878,69.54623723817878,99.54623723817878,null,null],"z":[10,0,0,0,4]},"width":[2,2,2,2,2,2],"height":[6,6,6,6,10],"texture":[1],"angle":1},"cockpitdsides":{"section_segments":4,"offset":{"x":0,"y":-75,"z":10},"position":{"x":[15.01,13.01,13.01,13.01,13.01,null,null,null,null,null,null,null],"y":[20,26,41,56,70,null,null],"z":[-6,-1,0,0,0,5]},"width":[2,2,2,2,2,2],"height":[2,2,6,7,3],"texture":[4,9,9,4],"angle":0},"cockpitt":{"section_segments":4,"offset":{"x":0,"y":-75,"z":10},"position":{"x":[20,20,20,20,20,20,20,20,null],"y":[20,26,41,56,70,null],"z":[-4,1,6,7,3,null,null]},"width":[5,7,7,7,7],"height":[2,2,2,2,2,2],"texture":[4,9,9,4],"angle":0},"cockpitb":{"section_segments":4,"offset":{"x":0,"y":-75,"z":10},"position":{"x":[20,20,20,20,20,20,20,20,null],"y":[20,26,41,56,70,null],"z":[-8,-3,-6,-7,-3,null,null]},"width":[5,7,7,7,7],"height":[2,2,2,2,2,2],"texture":[9],"angle":0},"cockpitsides":{"section_segments":4,"offset":{"x":0,"y":-75,"z":10},"position":{"x":[25.009999999999998,27.009999999999998,27.009999999999998,27.009999999999998,27.009999999999998,null,null,null,null,null,null],"y":[20,26,41,56,70,null,null],"z":[-6,-1,0,0,0,5]},"width":[2,2,2,2,2,2],"height":[2,2,6,7,3],"texture":[4,9,9,4],"angle":0},"frontduplicate":{"section_segments":4,"offset":{"x":0,"y":-50,"z":0},"position":{"x":[14,0,0,21,21,0,0,0,null,null,null],"y":[-24,-10,0,20,20,null,null],"z":[0,0,0,0,0,0,0,0,0]},"width":[5,5,5,5,0],"height":[5,5,5,5,0],"texture":[4,63,4],"angle":-45},"reactorHeatSinksduplicate":{"section_segments":6,"offset":{"x":0,"y":46,"z":8},"position":{"x":[12,12,12,12,12,12,12,12,12,12,null,null,null],"y":[-10,0,17,20,22],"z":[-6,0,0,-1,-5,0,0,0,0]},"width":[5,5,5,5,5,5,5,5],"height":[0,5,5,5,0],"texture":[3.8,16.8,3.8,3.8]},"bottomEnginesduplicate":{"section_segments":6,"offset":{"x":0,"y":43,"z":-6},"position":{"x":[10,10,10,10,10,10,10,10,10,10,null,null,null],"y":[-20,-10,20,25,30,35,30],"z":[3,0,0,0,0,0,0,0,0]},"width":[10,10,10,7,7,5,0],"height":[7,7,7,7,7,5,0],"texture":[2.8,2.8,2.8,3.8,18,16.8],"propeller":true},"cockpitdsidesduplicate":{"section_segments":4,"offset":{"x":0,"y":-75,"z":10},"position":{"x":[24.990000000000002,26.990000000000002,26.990000000000002,26.990000000000002,26.990000000000002,null,null,null,null,null,null,null,null],"y":[20,26,41,56,70,null,null],"z":[-6,-1,0,0,0,5]},"width":[2,2,2,2,2,2],"height":[2,2,6,7,3],"texture":[4,9,9,4],"angle":0},"cockpitsidesduplicate":{"section_segments":4,"offset":{"x":0,"y":-75,"z":10},"position":{"x":[14.99,12.99,12.99,12.99,12.99,null,null,null,null,null,null,null],"y":[20,26,41,56,70,null,null],"z":[-6,-1,0,0,0,5]},"width":[2,2,2,2,2,2],"height":[2,2,6,7,3],"texture":[4,9,9,4],"angle":0}},"typespec":{"name":"Sidewinder LMT","level":6,"model":16,"code":616,"specs":{"shield":{"capacity":[300,300],"reload":[2,2]},"generator":{"capacity":[200,200],"reload":[35,45]},"ship":{"mass":110,"speed":[150,150],"rotation":[30,105],"acceleration":[90,30]}},"shape":[1.214,1.234,1.274,1.338,1.415,1.406,1.362,1.184,1.063,0.936,0.901,0.883,0.888,0.913,0.942,0.953,0.982,1.027,1.099,1.225,1.443,1.659,1.704,1.567,1.586,1.509,2.138,2.208,2.227,1.879,1.418,1.192,1.042,0.939,0.867,0.8,0.824,0.818,0.818,0.817,0.809,0.81,0.853,0.944,1.08,1.248,1.495,1.754,1.724,1.076],"lasers":[{"x":-0.5,"y":-1.64,"z":0,"angle":0,"damage":[150,150],"rate":1,"type":2,"speed":[120,70],"number":1,"spread":0,"error":0,"recoil":300}],"radius":2.227}}';

gameplayShips.sidewinderLMT = sidewinderLMT;
showcaseShips[10] = sidewinderLMT;

//$fileTape setWriting true

shipsData[10] = {name:"Sidewinder LMT",cl:"Attack ship",company: 0,
  configs: [],
  init: function(){
    this.configs[0] = shipIdsToCodes["sidewinderLMT"];
  },
  reentryCooldownTime: 60,
  reentryDuration: 4,
  reentryVelocity: 1.5,
  respawn:function(ship,sh,p){


    ship.custom.sprototype.reentryCooldown = this.reentryCooldownTime;
    ship.custom.sprototype.reentryActive = 0;
    ship.set({type:this.configs[0],stats:66666666,healing:false});

  },
  tick:function(ship, sh, p){


    p.reentryCooldown-=sp.systems.aliveBooster.getReloadBuff(ship);
    p.reentryActive--;
    if(p.reentryActive>0){
      sh.idle = true
      ship.set({generator:0})
    }else if(p.reentryActive==0){
      ship.set({shield:10000,vx:Math.cos(ship.r)*this.reentryVelocity,vy:Math.sin(ship.r)*this.reentryVelocity})
    }
  },
  useAbility:function(ship, abId, sh, p){


    switch(abId){
      case 1:
        if(p.reentryCooldown<0){
          p.reentryCooldown = this.reentryCooldownTime;
          p.reentryActive = this.reentryDuration;
        }
        break;

      default:
      log("unknown ability "+abId);
    }
  },
  getAbilities:function(ship,sh,p){
    k = [];


    buffState = 0;
    if(p.reentryActive>=0){
      buffState = 1
    }else
    if(p.reentryCooldown>=0){
      buffState = 2;
    }
    //k.push({name:"Defcon",id:1})
    k[1] = {name:"Battle reentry",id:1,
      explanation:"Temporarily disable self to heal.",
      ready: p.reentryActive>0?(1-p.reentryActive/this.reentryDuration):(1-p.reentryCooldown/this.reentryCooldownTime),
      state: buffState
    }
    return k;
  },
  tips:[
    "Recoil is love, recoil is life.",
    "When maneuvering, utilize your weapon's recoil.",
    "Shields are low? Get out of the battle and prepare for Battle Reentry!",
    "Some battles just don't go the way you want them to. Tactical retreat is a valid option."

    ],
  unicodeChar: "\u{2b40}",
  color: "#4466FF"
};
