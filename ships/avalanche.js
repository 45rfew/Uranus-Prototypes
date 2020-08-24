/*Avalache
Heavy Attack Ship

Every once in a while an organization producing spaceships just goes wild
and pours billions of credits into creating a single, amazing, hi-tech design.

Meet the Avalanche, by Goldman Aerospace. Truly beautiful, truly deadly, truly
complex. A heavy pulse fighter with a large cockpit, which almost bumps it into
fregate territory. Enhanced with cutting-edge technology, and

*/

//$fileTape ifFlag prerender
//$fileTape setWriting false

 var avalanche_pulse = '{"name":"Avanache","level":6,"author":"Goldman","model":43,"size":1.05,"scaleUp":5,"teamMarkerSize":0.3,"teamMarkerDepth":0.3,"specs":{"shield":{"capacity":[75,100],"reload":[2,3]},"generator":{"capacity":[40,60],"reload":[10,15]},"ship":{"mass":60,"speed":[125,145],"rotation":[110,130],"acceleration":[100,120]}},"bodies":{"detail":{"section_segments":[30,45,135,150,210,225,315,330],"offset":{"x":0,"y":20,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0],"y":[-70,-70,-69.4,-65,-55,-35,-20,25,25],"z":[1,1,2,4,2,3,0,0,0]},"width":[0,1,2,5,10,10,10,10,0],"height":[0,0.5,1,3,12,13,10,10,0],"texture":[63,63,3,3.33,3,3.3,3,4]},"detail2":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":20,"z":5},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-68,-65,-55,-54.5,-35,-20,25,25],"z":[-2,-2,3,3,5,0,0,0]},"width":[0,8,13,13,13,13,13,0],"height":[0,1,1,1,1,1,1,0],"texture":[2,8.02,17,15,4]},"detail3":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":20,"z":-5.5},"position":{"x":[0,0,0,0,0],"y":[-68,-65,-55,25,25],"z":[8,8,0,0,0]},"width":[0,8,13,13,0],"height":[0,1,1,1,0],"texture":[2,3,3,4]},"detail4":{"section_segments":5,"angle":0,"offset":{"x":0,"y":-22,"z":12.2},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0],"y":[-21,-21,-20.5,-18,-13,-12.6,7,22,28,36,42,42],"z":[-7,-7,-7,-4.5,-1,-1,1,-4,-4,-4,-4,-4]},"width":[0,1,3,4,4.7,4.7,4,3,4,4,3,0],"height":[0,1,1.5,2,3,3,3,2,2,2,2,0],"texture":[7,7,7,7,7,7,3,4,4,4,4]},"detail5":{"section_segments":10,"angle":0,"offset":{"x":2,"y":-25,"z":12.38},"position":{"x":[1,1,0,0,0],"y":[-14,-14,-10,5.5,5.5],"z":[-3.8,-3.8,0,1.6,1.6]},"width":[0,0.5,0.5,0.5,0],"height":[0,1,1,1,0],"texture":[1]},"detail6":{"section_segments":4,"angle":0,"offset":{"x":0,"y":-35,"z":13.3},"position":{"x":[0,0,0,0],"y":[0,0,0.3,0.3],"z":[0,0,0,0]},"width":[0,2.2,2.2,0],"height":[0,1,1,0],"texture":[1]},"detail7":{"section_segments":4,"angle":0,"offset":{"x":0,"y":-19.8,"z":14.7},"position":{"x":[0,0,0,0],"y":[0,0,0.3,0.3],"z":[0,0,0,0]},"width":[0,2.2,2.2,0],"height":[0,1.1,1.1,0],"texture":[1]},"detail8":{"section_segments":[45,135,225,315],"angle":0,"offset":{"x":1,"y":-17,"z":15.2},"position":{"x":[0,0,0,0],"y":[-2.5,-2.5,2,2],"z":[0,0,0.4,0.4]},"width":[0,0.5,0.5,0],"height":[0,0.2,0.2,0],"texture":[1]},"detail9":{"section_segments":10,"angle":0,"offset":{"x":2,"y":-23,"z":13.5},"position":{"x":[2.4,2.4,0,0],"y":[-3,-3,3.5,3.5],"z":[-1.6,-1.6,0.3,0.3]},"width":[0,0.5,0.5,0],"height":[0,1,1,0],"texture":[1]},"detail10":{"section_segments":4,"angle":0,"offset":{"x":0,"y":-39,"z":12},"position":{"x":[0.1,0.1,1.5,2.5,2.5,2.5],"y":[-8,-8,-6,1.2,1.3],"z":[-7.185,-7.185,-5.485,-1.2,-1.2]},"width":[1.2,1.2,1.2,1.2,1.2,0],"height":[0.1,0.1,0.1,0.2,0],"texture":[63]},"detail11":{"section_segments":4,"angle":0,"offset":{"x":0,"y":-39,"z":12},"position":{"x":[-0.1,-0.1,-1.5,-2.5,-2.5,-2.5],"y":[-8,-8,-6,1.2,12],"z":[-7.185,-7.185,-5.485,-1.2,0]},"width":[1.2,1.2,1.2,1.2,1.2,0],"height":[0.1,0.1,0.1,0.2,0],"texture":[63]},"detail12":{"section_segments":10,"angle":0,"offset":{"x":7,"y":-25,"z":12},"position":{"x":[-1.8,-1.8,0,0,-1,-1,0,0,-1.8,-1.8],"y":[-8,-8,-6,-3,-1,1,3,6,8,8],"z":[0,0,0.1,0.4,0.6,0.9,1.1,1.4,1.8,0]},"width":[0,0.3,0.3,0.3,0.3,0.3,0.3,0.3,0.3,0],"height":[0,0.1,0.1,0.1,0.1,0.1,0.1,0.1,0.1,0],"texture":[63]},"detail13":{"section_segments":[45,135,225,315],"offset":{"x":5,"y":-25,"z":11},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-10,-10,-2,-1,1,2,10,10],"z":[0,0,0.5,0.8,1,1,2,2]},"width":[0,5,5,3.7,3.7,5,5,0],"height":[0,1,1,1,1,1,1,0],"texture":[4,4,4,15,4]},"detail14":{"section_segments":[45,135,225,315],"angle":0,"offset":{"x":5,"y":20,"z":8},"position":{"x":[0,0,0,0],"y":[-35,-20,25,25],"z":[5,0,0,0]},"width":[1,1,1,0],"height":[2,2,2,0],"texture":[4]},"detail15":{"section_segments":12,"angle":0,"offset":{"x":3,"y":-45,"z":0},"position":{"x":[0,0,0,0,0,0],"y":[-1,-1,-0.5,1.3,1,8],"z":[0,0,0,0,0,0]},"width":[0,0.3,1,1.3,1.6,1.6],"height":[0,0.3,1,1.3,1.6,1.6],"texture":[63,63,63,4,15]},"detail16":{"section_segments":12,"angle":0,"offset":{"x":4,"y":25,"z":0},"position":{"x":[0,0,0,0,0,0],"y":[-20,-20,-2,2,20,20],"z":[0,0,0,0,0,0]},"width":[0,5,5,5,5,0],"height":[0,7,7,7,7,0],"texture":[4,4,15,4,4]},"detail17":{"section_segments":12,"angle":0,"offset":{"x":4,"y":-5,"z":0},"position":{"x":[0,0,0,0],"y":[-5,-5,5,5],"z":[1.5,1.5,0,0]},"width":[0,5,5,0],"height":[0,10,7,0],"texture":[4]},"detail18":{"section_segments":12,"angle":0,"offset":{"x":3,"y":-45,"z":0},"position":{"x":[0,0,0,0,0,0],"y":[-1,-1,-0.5,1.3,1,8],"z":[0,0,0,0,0,0]},"width":[0,0.3,1,1.3,1.6,1.6],"height":[0,0.3,1,1.3,1.6,1.6],"texture":[63,63,63,4,15]},"detail19":{"section_segments":[45,135,225,315],"angle":0,"offset":{"x":0,"y":-45,"z":-5},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-11,-12,-12,-10,-10,-6,3,4,6,6],"z":[1,1,1,0.3,0,0,0,0.5,0.3,0.3]},"width":[0,0.8,1,1,1,1,1,1,1,0],"height":[0,0.3,0.5,1.5,1,1,1,1.5,1.5,0],"texture":[17,4,13,3,10,3]},"detail20":{"section_segments":[45,135,225,315],"angle":0,"offset":{"x":3,"y":-40,"z":-3},"position":{"x":[0,0,0,0,0],"y":[-2,-2,-1.6,3,3],"z":[0,0,0,0,0]},"width":[2,2,2,2,0],"height":[0,2,2,2,0],"texture":[8,17,2,4]},"detail21":{"section_segments":12,"angle":90,"offset":{"x":0,"y":-39,"z":-4},"position":{"x":[0,0,0,0,0,0],"y":[-3,-3,-2,2,3,3],"z":[0,0,0,0,0,0]},"width":[0,1.5,2,2,1.5,0],"height":[0,1.5,2,2,1.5,0],"texture":[63,63,13,63]},"detail22":{"section_segments":12,"angle":0,"offset":{"x":0,"y":4.9,"z":-10},"position":{"x":[0,0,0,0,0],"y":[-0.5,6,6,5.5,5.5],"z":[0,0,0,0,0]},"width":[2.2,2.2,2,2,2],"height":[2.2,2.2,2,2,0],"texture":[2,2,2,15],"vertical":true},"detail23":{"section_segments":12,"angle":0,"offset":{"x":0,"y":4.6,"z":-10},"position":{"x":[0,0,0,0,0],"y":[-0.5,6,6,5.5,5.5],"z":[0,0,0,0,0]},"width":[3.2,3.2,3,3,0],"height":[3.2,3.2,3,3,0],"texture":[3,17,3,4],"vertical":true},"detail24":{"section_segments":12,"angle":0,"offset":{"x":8.5,"y":-35,"z":0.5},"position":{"x":[-4,0,0,-10],"y":[-10,0,20,20],"z":[2.5,0,0,0]},"width":[0,0,0,0],"height":[0,7,7,7],"texture":[3]},"detail25":{"section_segments":[45,135,225,315],"angle":90,"offset":{"x":0,"y":20,"z":0},"position":{"x":[-12,-12,5,5,-12,-12],"y":[-30,-30,-5,5,30,30],"z":[0,0,0,0,0,0]},"width":[0,5,30,30,5,0],"height":[0,2,5,5,2,0],"texture":[3]},"detail26":{"section_segments":[45,135,225,315],"angle":90,"offset":{"x":0,"y":26,"z":4},"position":{"x":[-5,-5,15,15,-5,-5],"y":[-15,-15,-5,5,15,15],"z":[0,0,1,1,0,0]},"width":[0,10,40,40,10,0],"height":[0,0.5,1,1,0.5,0],"texture":[3]},"detail27":{"section_segments":[45,135,225,315],"angle":0,"offset":{"x":0,"y":-8,"z":14.9},"position":{"x":[0,0,0,0,0,0],"y":[-5,-5,-2,-1,5,5],"z":[0,0,-1.4,-1.7,-4.2,-4]},"width":[0,2,2.5,1.8,1.8,0],"height":[0,1,1,1,1,0],"texture":[4]},"detail28":{"section_segments":[45,135,225,315],"angle":0,"offset":{"x":0,"y":-5,"z":11.3},"position":{"x":[0,0,0,0],"y":[-1.5,-1.5,1.5,1.5],"z":[1.25,1.25,0,0]},"width":[0,1.2,1.2,0],"height":[0,0.5,0.5,0],"texture":[4,15,4]},"detail29":{"section_segments":[45,135,225,315],"angle":0,"offset":{"x":1,"y":-11.5,"z":15.47},"position":{"x":[-0.6,-0.6,-0.6,0.1,0.1,0.1],"y":[-1.5,-1.5,1.5,2.8,8.5,8.5],"z":[0,0,-1.4,-1.77,-4.2,-4.2]},"width":[0,0.2,0.2,0.2,0.2,0],"height":[0,0.2,0.2,0.2,0.2,0],"texture":[63]},"detail30":{"section_segments":[45,135,225,315],"angle":0,"offset":{"x":0.5,"y":10,"z":11},"position":{"x":[0,0,0,0],"y":[-1,-1,1,1],"z":[0,0,0,0]},"width":[0,0.2,0.2,0],"height":[0,0.3,0.3,0],"texture":[3]},"detail31":{"section_segments":[45,135,225,315],"angle":0,"offset":{"x":0,"y":10,"z":10.3},"position":{"x":[0,0,0,0],"y":[-2.1,-2.1,2.1,2.1],"z":[0,0,0,0]},"width":[0,0.4,0.4,0],"height":[0,0.3,0.3,0],"texture":[2]},"detail32":{"section_segments":[45,135,225,315,345,375],"angle":0,"offset":{"x":0,"y":11.8,"z":-10},"position":{"x":[0,0,0,0,0,0],"y":[-0.5,-0.5,0.3,0.5,1,1],"z":[0,0,0,0,0,0]},"width":[0,3,3,3,1.5,0],"height":[0,3.7,3.7,3.7,1,0],"texture":[4,8,63,3],"vertical":true},"detail33":{"section_segments":10,"angle":0,"offset":{"x":13.5,"y":11.5,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0],"y":[-11,-11,-13,-11.5,-11,-10,29.5,30,33,30,30],"z":[0,0,0,0,0,0,0,0,0,0,0]},"width":[0,3,3.8,4.2,4.2,4,4,4,3,2,0],"height":[0,3,3.8,4.2,4.2,4,4,4,3,2,0],"texture":[3,3,3,3,3,3,17,4,17],"propeller":true},"detail34":{"section_segments":[45,135,225,315],"angle":90,"offset":{"x":13,"y":15,"z":4.5},"position":{"x":[4.5,4.5,-1,-4.3,2,-2.4,-7.8,-9,-9,-4.8,-5.5,-5.5],"y":[-4,-4,-2,2,4,11,13,15,15,15,16.5,16.5],"z":[0,0,0,0,0,0,0,0,0,0,0,0]},"width":[0,10,15,15,4,4,10,10,10,4,3.5,0],"height":[0,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0],"texture":[4,4,4,4,4,4,4,4,4]},"detail35":{"section_segments":10,"angle":0,"offset":{"x":13.43,"y":11.5,"z":0.1},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-11,-11,-13,-11.5,-11,-10,10,10],"z":[0,0,0,0,0,0,0,0]},"width":[0,3,3.8,4.2,4.2,4,4,0],"height":[0,3,3.8,4.2,4.2,4,4,0],"texture":[3,3,63,63,63,3]},"detail36":{"section_segments":8,"angle":0,"offset":{"x":14,"y":11.5,"z":2},"position":{"x":[0,0,0,0],"y":[-10,-7,-2,10],"z":[0,0,0,0]},"width":[2,2,2,2],"height":[2,2,2,2],"texture":[4,10,8]},"detail37":{"section_segments":8,"angle":0,"offset":{"x":16.4,"y":11.5,"z":1.1},"position":{"x":[-0.1,-0.1,-0.81,-0.81],"y":[-10,-7,-4,10],"z":[0,0,1,1]},"width":[1,1,1,1],"height":[1,1,1,1],"texture":[4]},"detail38":{"section_segments":4,"angle":0,"offset":{"x":16,"y":3,"z":2.2},"position":{"x":[0,0,0,0],"y":[-1,-1,1,4],"z":[0,0,0,1]},"width":[0,0.8,0.8,0],"height":[0,1,1,0],"texture":[63]},"detail39":{"section_segments":4,"angle":0,"offset":{"x":12,"y":8,"z":3.4},"position":{"x":[0,0,0,0],"y":[-6,-6,6,6],"z":[0,0,0,0]},"width":[0,1,1,0],"height":[0,0.5,0.5,0],"texture":[15]},"detail40":{"section_segments":12,"angle":0,"offset":{"x":13.5,"y":3,"z":0},"position":{"x":[0,0,0,0,0,0],"y":[-4,-4,-6,-6,0,0],"z":[0,0,0,0,0,0]},"width":[0,2.8,2.8,3,3,0],"height":[0,2.8,2.8,3,3,0],"texture":[3]},"detail41":{"section_segments":[45,135,225,315],"angle":90,"offset":{"x":15.6,"y":-0.76,"z":2.4},"position":{"x":[0,0,0,0],"y":[-0.5,-0.5,0.5,0.5],"z":[0,0,-1,-1]},"width":[0,6,3,0],"height":[0,0.2,0.2,0],"texture":[4]},"detail42":{"section_segments":[45,135,225,315],"angle":90,"offset":{"x":-11.4,"y":-0.76,"z":2.4},"position":{"x":[0,0,0,0],"y":[-0.5,-0.5,0.5,0.5],"z":[0,0,-1,-1]},"width":[0,6,3,0],"height":[0,0.2,0.2,0],"texture":[4]},"detail43":{"section_segments":[45,135,225,315],"angle":90,"offset":{"x":-11.4,"y":-0.76,"z":-2.4},"position":{"x":[0,0,0,0],"y":[-0.5,-0.5,0.5,0.5],"z":[0,0,1,1]},"width":[0,6,3,0],"height":[0,0.2,0.2,0],"texture":[4]},"detail44":{"section_segments":[45,135,225,315],"angle":90,"offset":{"x":15.6,"y":-0.76,"z":-2.4},"position":{"x":[0,0,0,0],"y":[-0.5,-0.5,0.5,0.5],"z":[0,0,1,1]},"width":[0,6,3,0],"height":[0,0.2,0.2,0],"texture":[4]},"detail45":{"section_segments":16,"angle":0,"offset":{"x":13.45,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-2,-2,2,2],"z":[0,0,0,0]},"width":[0,2,2,0],"height":[0,2,2,0],"texture":[63]},"detail46":{"section_segments":16,"angle":0,"offset":{"x":13.45,"y":-0.1,"z":0},"position":{"x":[0,0,0,0,0,0],"y":[-2,-2,-2,-2,2,2],"z":[0,0,0,0,0,0]},"width":[0,0.3,1.6,1.8,1.8,0],"height":[0,0.3,1.6,1.8,1.8,0],"texture":[17,4,17,4]},"detail47":{"section_segments":16,"angle":0,"offset":{"x":13.45,"y":-0.3,"z":0},"position":{"x":[0,0,0,0,0,0],"y":[-1,-1,-2,-2,2,2],"z":[0,0,0,0,0,0]},"width":[0,1.3,1.3,1.5,1.5,0],"height":[0,1.3,1.3,1.5,1.5,0],"texture":[8]},"detail48":{"section_segments":[45,135,225,315],"angle":90,"offset":{"x":13,"y":15,"z":4.5},"position":{"x":[4.5,4.5,-1,-4.3,-13,-13,-7.8,-9,-9,-14.5,-16,-16],"y":[-4,-4,-2,2,4,11,13,15,15,15,16,16],"z":[0,0,0,0,0,0,0,0,0,0,0,0]},"width":[0,10,15,15,2,2,10,10,7,2,3,0],"height":[0,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0],"texture":[4,4,4,4,8,4,4,4,63]},"detail49":{"section_segments":12,"angle":0,"offset":{"x":0,"y":40,"z":9},"position":{"x":[0,0,0,0,0],"y":[-7,-7,-4,7,7],"z":[0,0,0,0,0]},"width":[0,5,5,5,0],"height":[0,1.5,1.5,1.5,0],"texture":[4,4,2,4]},"detail50":{"section_segments":8,"angle":0,"offset":{"x":0,"y":42,"z":10.15},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-4,-4,-2.2,-2,2,2.3,4,4],"z":[0,0,0,0,0,0,0,0]},"width":[0,3.5,3.5,3.5,3.5,3.5,3.5,0],"height":[0,0.3,0.3,0.3,0.3,0.3,0.3,0],"texture":[4,4,17,15,17,4,4]},"detail51":{"section_segments":[45,135,225,315],"angle":0,"offset":{"x":0,"y":39,"z":9.5},"position":{"x":[0,0,0,0,0],"y":[-2,-2,-1,2,2],"z":[0,0,0,0,0]},"width":[0,1,1,1,0],"height":[0,1.5,1.5,1.5,0],"texture":[4,63,4]},"detail52":{"section_segments":[45,135,225,315,345,375],"angle":0,"offset":{"x":0,"y":10,"z":-30},"position":{"x":[7,7,7,7,7,7],"y":[-0.5,-0.5,0.2,0.5,1,1],"z":[0,0,0,0,-2,-2]},"width":[0,5,5,5,3,0],"height":[0,8,8,8,0.35,0],"texture":[4,4,17,2,17],"vertical":true},"detail53":{"section_segments":[45,135,225,315,345,375],"angle":0,"offset":{"x":0,"y":10,"z":-30},"position":{"x":[-7,-7,-7,-7,-7,-7],"y":[-0.5,-0.5,0.2,0.5,1,1],"z":[0,0,0,0,-2,-2]},"width":[0,5,5,5,3,0],"height":[0,8,8,8,0.35,0],"texture":[4,4,17,2,17],"vertical":true},"detail54":{"section_segments":[45,135,225,315,345,375],"angle":0,"offset":{"x":0,"y":9.9,"z":-30},"position":{"x":[6,6,6,6,6,6],"y":[-0.5,-0.5,0.2,0.5,1,1],"z":[0,0,0,0,-2,-2]},"width":[0,5,5,5,3,0],"height":[0,8,8,8,0.35,0],"texture":[4,4,17,63,4],"vertical":true},"detail55":{"section_segments":[45,135,225,315,345,375],"angle":0,"offset":{"x":0,"y":9.9,"z":-30},"position":{"x":[-6,-6,-6,-6,-6,-6],"y":[-0.5,-0.5,0.2,0.5,1,1],"z":[0,0,0,0,-2,-2]},"width":[0,5,5,5,3,0],"height":[0,8,8,8,0.35,0],"texture":[4,4,17,63,4],"vertical":true},"detail56":{"section_segments":[45,135,225,315],"angle":0,"offset":{"x":7,"y":28.8,"z":10.7},"position":{"x":[1,1,1,0,0,0],"y":[-6.4,-6.4,-3,-1,2.9,2.9],"z":[-0.5,-0.5,-0.3,-0.2,0,0]},"width":[0,0.3,0.3,0.3,0.3,0],"height":[0,0.5,0.5,0.5,0.5,0],"texture":[4]},"detail57":{"section_segments":[45,135,225,315],"angle":0,"offset":{"x":6.7,"y":25.8,"z":10.45},"position":{"x":[0,0,0,-0.6],"y":[-2,-2,0,2],"z":[-0.22,-0.22,-0.11,0]},"width":[0,0.8,0.8,0],"height":[0,0.5,0.5,0.5],"texture":[63]},"detail58":{"section_segments":4,"angle":90,"offset":{"x":7,"y":33.3,"z":10.7},"position":{"x":[0,0,0,0],"y":[-2,-2,2,2],"z":[0,0,0,0]},"width":[0,1.6,1.6,0],"height":[0,0.2,0.2,0],"texture":[10]},"detail59":{"section_segments":4,"angle":0,"offset":{"x":4,"y":29,"z":11},"position":{"x":[0,0,0,0],"y":[-2,-2,2,2],"z":[0,0,0,0]},"width":[0,1,1,0],"height":[0,0.2,0.2,0],"texture":[15]},"detail60":{"section_segments":4,"angle":0,"offset":{"x":9,"y":29,"z":11},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-2,-2,-1.8,-1,1,1.8,2,2],"z":[0,0,0,0,0,0,0,0]},"width":[0,1,1,1,1,1,1,0],"height":[0,0.2,0.2,0.2,0.2,0.2,0.2,0],"texture":[63,63,2,10,2,63,63]},"detail61":{"section_segments":[45,135,225,315],"offset":{"x":4,"y":-25,"z":14.2},"position":{"x":[0,0,0,0],"y":[-10,-10,10,10],"z":[-1.9,-1.9,0,0]},"width":[0,0.2,0.2,0],"height":[0,0.2,0.2,0],"texture":[17]},"detail62":{"section_segments":[45,135,225,315],"offset":{"x":4,"y":-30,"z":13},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-5,-5,-4.5,-2,2,4.5,5,5],"z":[-1,-1,-0.9,-0.45,0,0,0,0]},"width":[0,1,1,1,1,1,1,0],"height":[0,1,1,1,1,1,1,0],"texture":[63,63,15,10,15,63]},"detail63":{"section_segments":10,"offset":{"x":0,"y":34,"z":0},"position":{"x":[0,0,0,0,0],"y":[-5,-5,15,12,12],"z":[0,0,0,0,0]},"width":[0,7,5,2,0],"height":[0,7,5,2,0],"texture":[4,4,17],"propeller":true},"detail64":{"section_segments":[45,135,225,315],"angle":90,"offset":{"x":23,"y":14,"z":0},"position":{"x":[0,0,-15,-15],"y":[-5,-5,6,6],"z":[0,0,0,0]},"width":[0,4,3,0],"height":[0,3.4,2.1,0],"texture":[4,15,4]},"detail65":{"section_segments":[45,135,225,315],"angle":90,"offset":{"x":23,"y":17,"z":0},"position":{"x":[0,0,0,-7.1,-7.5,-7.5],"y":[-2.5,-2.5,-2.25,2.75,3,3],"z":[0,0,0,0,0,0]},"width":[0,4,4,3,3,0],"height":[0,3,3,2.1,2.1,0],"texture":[4,63,1,63,4]},"detail66":{"section_segments":[45,135,225,315],"angle":32.5,"offset":{"x":23,"y":17.6,"z":0},"position":{"x":[0,0,0,0],"y":[-1.6,-1.6,1.6,1.6],"z":[0,0,0,0]},"width":[0,0,0,0],"height":[0,2,2,0],"texture":[1,10.05,1]},"detail67":{"section_segments":12,"angle":0,"offset":{"x":21.2,"y":0,"z":-16},"position":{"x":[0,0,0,0],"y":[-1.6,-1.6,1.6,1.6],"z":[0,0,0,0]},"width":[0,1,1,0],"height":[0,1,1,0],"texture":[4,15,4],"vertical":true},"detail68":{"section_segments":12,"angle":0,"offset":{"x":24.8,"y":0,"z":-21},"position":{"x":[0,0,0,0,0,0],"y":[-1.3,-1.3,-0.2,0.2,1.3,1.3],"z":[0,0,0,0,0,0]},"width":[0,1,1,1,1,0],"height":[0,1,1,1,1,0],"texture":[4,4,17,4],"vertical":true},"detail69":{"section_segments":[45,135,225,315],"angle":170,"offset":{"x":9,"y":-35,"z":4},"position":{"x":[3,0,0,0,0,0,0],"y":[-15,-5,2,2,1,1,1],"z":[0,0,0,0,0,0,0]},"width":[4,4,4,3.5,3.5,3.5],"height":[3,3,3,2.5,2.5,0],"texture":[4,4,17,3,12]},"detail70":{"section_segments":[45,135,225,315],"angle":170,"offset":{"x":9,"y":-37,"z":0},"position":{"x":[3,0,0,0,0,0,0],"y":[-15,-5,2,2,1,1,1],"z":[0,0,0,0,0,0,0]},"width":[3,3,3,2.5,2.5,2.5],"height":[2,2,2,1.5,1.5,0],"texture":[3,3,3,63,4]},"detail71":{"section_segments":[45,135,225,315],"offset":{"x":8,"y":1.5,"z":20},"position":{"x":[0,0,0,0,0,0],"y":[-6,-6,-4,4,6,6],"z":[0,0,0,0,0,0]},"width":[0,2,3,3,2,0],"height":[0,2,3,3,2,0],"texture":[63,4,15,4,63],"vertical":true},"detail72":{"section_segments":[45,135,225,315],"offset":{"x":5,"y":1.5,"z":12.5},"position":{"x":[0,0,0,0,0,0],"y":[-4,-4,-3.8,3.8,4,4],"z":[0,0,0,0,0,0]},"width":[0,3,3,3,3,0],"height":[0,3,3,3,3,0],"texture":[63,17,10,17,63],"vertical":true},"detail73":{"section_segments":[45,135,225,315],"offset":{"x":9.5,"y":-20,"z":4.5},"position":{"x":[0,0,0,0],"y":[-1,-1,1,1],"z":[0,0,0,0]},"width":[0,1,1,0],"height":[0,1,1,0],"texture":[63]},"detail74":{"section_segments":[45,135,225,315],"offset":{"x":9.5,"y":-20,"z":-1.5},"position":{"x":[0,0,0,0],"y":[-1,-1,1,1],"z":[0,0,0,0]},"width":[0,1,1,0],"height":[0,1,1,0],"texture":[63]},"detail75":{"section_segments":[45,135,225,315],"angle":90,"offset":{"x":21,"y":14,"z":4.5},"position":{"x":[0,0,-2.5,-2.5],"y":[-2,-2,2,2],"z":[0,0,0,0]},"width":[0,5,5,0],"height":[0,1,1,0],"texture":[2]},"detail76":{"section_segments":[45,135,225,315],"angle":90,"offset":{"x":11,"y":14,"z":4},"position":{"x":[0,0,-4.7,-5,-5],"y":[-4,-4,3.5,4,4],"z":[0,0,0,0,0]},"width":[0,10,10,10,0],"height":[0,2,2,2,0],"texture":[2,2,17,4]},"detail77":{"section_segments":[45,135,225,315],"angle":90,"offset":{"x":21,"y":14,"z":4.5},"position":{"x":[0,0,-2.5,-2.5],"y":[-1.9,-1.9,1.9,1.9],"z":[0,0,0,0]},"width":[0,5.4,5.4,0],"height":[0,0.8,0.8,0],"texture":[17]},"detail78":{"section_segments":[45,135,225,315],"offset":{"x":9.8,"y":1.5,"z":19.5},"position":{"x":[0,0,0,0,0,0],"y":[-3,-3,-1,1,3,3],"z":[0,0,0,1,1,1]},"width":[0,0.5,0.5,0.5,0.5,0],"height":[0,0.3,0.3,0.3,0.3,0],"texture":[1],"vertical":true},"detail79":{"section_segments":[45,135,225,315],"offset":{"x":8,"y":18,"z":6},"position":{"x":[0,0,0,0,0,0],"y":[-6,-6,-4,4,6,6],"z":[0,0,0,0,0,0]},"width":[0,2,3,3,2,0],"height":[0,2,3,3,2,0],"texture":[63,4,15,63,63]},"detail80":{"section_segments":[45,135,225,315],"offset":{"x":18,"y":35,"z":0},"position":{"x":[0,0,0,0,0,0],"y":[-6,-6,-4,4,6,6],"z":[0,0,0,0,0,0]},"width":[0,2,3,3,2,0],"height":[0,2,3,3,2,0],"texture":[63,4,15,63,63]},"detail81":{"section_segments":[45,135,225,315],"angle":90,"offset":{"x":20,"y":35,"z":0},"position":{"x":[0,0,0,0,0,0],"y":[-6,-6,-4,4,6,6],"z":[0,0,0,0,0,0]},"width":[0,2,3,3,2,0],"height":[0,0.5,1,1,0.5,0],"texture":[63,4,4,63,63]},"detail82":{"section_segments":[45,135,225,315],"offset":{"x":9,"y":18,"z":7.7},"position":{"x":[0,0,0,0],"y":[-4,-4,4,4],"z":[0,0,0,0]},"width":[0,0.4,0.4,0],"height":[0,0.6,0.6,0],"texture":[63]},"detail83":{"section_segments":[45,135,225,315],"offset":{"x":7,"y":18,"z":7.7},"position":{"x":[0,0,0,0],"y":[-4,-4,4,4],"z":[0,0,0,0]},"width":[0,0.4,0.4,0],"height":[0,0.6,0.6,0],"texture":[63]},"detail84":{"section_segments":[45,135,225,315],"offset":{"x":8,"y":18,"z":7.7},"position":{"x":[0,0,0,0,0,0],"y":[-4,-4,-1,1,4,4],"z":[0,0,0,0,0,0]},"width":[0,0.4,0.4,0.4,0.4,0],"height":[0,0.6,0.6,0.6,0.6,0],"texture":[4,4,8,4,4]},"detail85":{"section_segments":[45,135,225,315],"offset":{"x":12,"y":18,"z":5},"position":{"x":[1,1,1,0,0,0],"y":[-8,-8,-1,1,5,5],"z":[0,0,0,0,0,0]},"width":[0,0.4,0.4,0.4,0.4,0],"height":[0,0.6,0.6,0.6,0.6,0],"texture":[63]},"detail86":{"section_segments":[45,135,225,315],"offset":{"x":13,"y":10,"z":5},"position":{"x":[0,0,0,0,0],"y":[-1,-1,-0.6,1,1],"z":[0,0,0,0,0]},"width":[0,1,1,1,0],"height":[0,1,1,1,0],"texture":[4,17,8,4]},"detail87":{"section_segments":[45,135,225,315],"offset":{"x":12,"y":25,"z":5},"position":{"x":[0,0,0,0,0],"y":[-2,-2,-1,2,2],"z":[0,0,0,0,0]},"width":[0,1,1,1,0],"height":[0,1,1,1,0],"texture":[4,17,15,4]},"detail88":{"section_segments":[45,135,225,315],"offset":{"x":10,"y":15,"z":5},"position":{"x":[0,0,0,0,0],"y":[-2,-2,-1,2,2],"z":[0,0,0,0,0]},"width":[0,1,1,1,0],"height":[0,1,1,1,0],"texture":[4,4,63,4]},"detail89":{"section_segments":[45,135,225,315],"offset":{"x":13.5,"y":21,"z":5},"position":{"x":[0,0,0,0],"y":[-2,-2,2,2],"z":[0,0,0,0]},"width":[0,1,1,0],"height":[0,1,1,0],"texture":[4,10,4]},"detail90":{"section_segments":12,"offset":{"x":1.5,"y":26,"z":9},"position":{"x":[0,0,0,0],"y":[-8,-8,8,8],"z":[0,0,0,0]},"width":[0,0.5,0.5,0],"height":[0,0.5,0.5,0],"texture":[4]},"detail91":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":26,"z":6.9},"position":{"x":[0,0,0,0],"y":[-5,-5,5,5],"z":[0,0,0,0]},"width":[0,2.5,2.5,0],"height":[0,2.5,2.5,0],"texture":[10.44]},"detail92":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":10,"z":13.5},"position":{"x":[0,0,0,0,0],"y":[-5,-5,5,6,6],"z":[0,0,0,0,0]},"width":[0,1,1,0.4,0],"height":[0,1,1,0.4,0],"texture":[2,2,3]},"detail93":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":10,"z":13.9},"position":{"x":[0,0,0,0],"y":[-4.5,-4.5,4.5,4.5],"z":[0,0,0,0]},"width":[0,0.4,0.4,0],"height":[0,0.5,0.5,0],"texture":[63]},"detail94":{"section_segments":[45,135,225,315],"angle":90,"offset":{"x":20.5,"y":28,"z":4.4},"position":{"x":[0,0,0,0],"y":[-12,-12,4,4],"z":[0,0,0,0]},"width":[0,2.5,2.5,0],"height":[0,0.5,0.5,0],"texture":[17]},"detail95":{"section_segments":[45,135,225,315],"angle":0,"offset":{"x":13,"y":25,"z":4.5},"position":{"x":[0,0,0,0],"y":[-6,-6,6,6],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,0.5,0.5,0],"texture":[4]},"detail96":{"section_segments":[45,135,225,315],"offset":{"x":18,"y":25,"z":2},"position":{"x":[0,0,0,0,0,0],"y":[-6,-6,-4,4,6,6],"z":[0,0,0,0,0,0]},"width":[0,2,3,3,2,0],"height":[0,2,3,3,2,0],"texture":[63,4,15,63,63]},"detail97":{"section_segments":[45,135,225,315],"offset":{"x":22,"y":28,"z":1},"position":{"x":[0,0,0,0,0],"y":[-6,-6,-4,4,4],"z":[0,0,0,0,0]},"width":[0,2,3,3,0],"height":[0,2,3,3,0],"texture":[63,63,10.2,4]},"detail98":{"section_segments":[45,135,225,315],"offset":{"x":26,"y":22,"z":4.65},"position":{"x":[0,0,0,0],"y":[-4,-4,4,4],"z":[0,0,0,0]},"width":[0,1,1,0],"height":[0,0.5,0.5,0],"texture":[63]},"detail99":{"section_segments":[45,135,225,315],"offset":{"x":4,"y":-8,"z":13.9},"position":{"x":[0,0,0,0,0],"y":[-7,-7,7,15,15],"z":[0,0,0,-5,-5]},"width":[0,2,2,2,0],"height":[0,1,1,1,0],"texture":[2]},"detail100":{"section_segments":[45,135,225,315],"offset":{"x":4,"y":-8,"z":14},"position":{"x":[0,0,0,0,0,0],"y":[-7,-7,-3,7,15,15],"z":[0,0,0,0,-5,-5]},"width":[0,1,1,1,1,0],"height":[0,1,1,1,1,0],"texture":[4,15,10,63]}},"typespec":{"name":"Avanache","level":6,"model":43,"code":643,'+
'"specs":{"shield":{"capacity":[700,100],"reload":[1,2]},"generator":{"capacity":[20,60],"reload":[50,15]},"ship":{"mass":340,"speed":[150,150],"rotation":[30,130],"acceleration":[80,120]}},"shape":[1.197,0.977,0.847,0.807,0.499,0.359,0.303,0.264,0.238,0.271,0.338,0.352,0.367,0.368,0.375,0.389,0.528,0.766,0.842,0.977,0.967,0.953,0.996,0.983,1.034,1.031,1.034,0.983,0.996,0.953,0.967,0.977,0.842,0.766,0.528,0.389,0.375,0.368,0.367,0.352,0.338,0.271,0.238,0.264,0.303,0.359,0.499,0.807,0.847,0.977],"lasers":[],"radius":1.197}}';

var avalanche_barrage = "";
var avalanche_showcase = avalanche_pulse;

avalanche_barrage = JSON.parse(avalanche_pulse)
avalanche_pulse = JSON.parse(avalanche_pulse)

avalanche_pulse.zoom = 0.7;
avalanche_barrage.zoom = 0.5;

avalanche_pulse.typespec.specs.generator.capacity = [150,150]
avalanche_pulse.typespec.lasers.push({
  "x":0,"y":-2,"z":0,"angle":0,
  "damage":[80,8],"rate":1.2,"type":2,
  "speed":[70,180],"number":1,"spread":0,
  "error":0,"recoil":80
})

var num = 4
var dist = 23
for(var i = 0; i<=num; i++){
  avalanche_barrage.typespec.lasers.push({
    "x":(i/num)*5,
    "y":0,
    "z":0,"angle":i/num*-20+180,"damage":[140,8],
    "rate":4,"type":2,"speed":[-45,180],
    "number":1,"spread":0,"error":0,
    "recoil":5
  })
  avalanche_barrage.typespec.lasers.push({
    "x":(i/num)*-5,
    "y":0,
    "z":0,"angle":i/num*20+180,"damage":[140,8],
    "rate":4,"type":2,"speed":[-45,180],
    "number":1,"spread":0,"error":0,
    "recoil":5
  })
  /*
  avalanche_barrage.bodies["weaponMarker"+i] = {
     section_segments: 4,
     offset: {
       x: (i/num)*2000,
       y: 0,
       z: 0,
     },
     position: {
       x: [0,-40,0,0,0,0,0,0],
       y: [-30,-1],
       z: [0,0,0,0,0,0,0,0,0]
     },
     width: [0,30,0],
     height: [0,0,0],
     texture: [17],
     angle: (i/num)*20
  }*/
}
avalanche_barrage.typespec.specs.generator.capacity = [40000,40000];
avalanche_barrage.typespec.specs.generator.reload = [0.000001,0.000001];
avalanche_barrage.typespec.specs.ship.acceleration = [0.000001,0.000001];
avalanche_barrage.typespec.specs.ship.rotation = [0.000001,0.000001];
avalanche_barrage.model = 44
avalanche_barrage.lockBulletSpeed = true
avalanche_barrage.lockShipAccel = true


//avalanche_barrage = JSON.stringify(avalanche_barrage)
//avalanche_pulse = JSON.stringify(avalanche_pulse)



gameplayShips.avalanche_pulse = avalanche_pulse;
gameplayShips.avalanche_barrage = avalanche_barrage;
showcaseShips[23] = avalanche_showcase;

//$fileTape setWriting true

shipsData[23] = {name:"GA Avalache",cl:"Defense ship",company: 4,
  barrageCooldownTime: 60,
  barragePrepareTime: 3,
  barrageDuration: 4,
  configs: [],
  init: function(){
    this.configs[0] = shipIdsToCodes["avalanche_pulse"];
    this.configs[1] = shipIdsToCodes["avalanche_barrage"];
  },
  respawn:function(ship,sh,p){


    ship.set({type:this.configs[0],stats:66666666,healing:false});
    ship.custom.sprototype.hasTransformed = false
    ship.custom.sprototype.barrageCooldown = 60
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
    config = "Avalanche";
    expl = "Preparing to strike!";
    if(ship.type == this.configs[1]){
      config = "Avalanche Ready!";
      expl = "Avalanche in progress!";
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
    "Avalanche is a very powerful, but slowly recharging ability. Use it wisely.",
    ],
  unicodeChar: "\u{2744}",
  color: "#88eeff",
  augmentUI: function(ship){
    if(ship.type==this.configs[1])
      barrageExplain(ship);
  }
};
