import logo from './logo.svg';
import './App.css';
import { ResponsiveBoxPlot } from '@nivo/boxplot'
import { ResponsiveBar } from '@nivo/bar'
import { ResponsiveLine } from '@nivo/line'
import { useState, useMemo } from 'react';

// const data3=[
//   {
//     "id": "japan",
//     "color": "hsl(270, 70%, 50%)",
//     "data": [
//       {
//         "x": "plane",
//         "y": 53
//       },
//       {
//         "x": "helicopter",
//         "y": 287
//       },
//       {
//         "x": "boat",
//         "y": 228
//       },
//       {
//         "x": "train",
//         "y": 228
//       },
//       {
//         "x": "subway",
//         "y": 296
//       },
//       {
//         "x": "bus",
//         "y": 220
//       },
//       {
//         "x": "car",
//         "y": 89
//       },
//       {
//         "x": "moto",
//         "y": 110
//       },
//       {
//         "x": "bicycle",
//         "y": 15
//       },
//       {
//         "x": "horse",
//         "y": 219
//       },
//       {
//         "x": "skateboard",
//         "y": 254
//       },
//       {
//         "x": "others",
//         "y": 106
//       }
//     ]
//   },
//   {
//     "id": "france",
//     "color": "hsl(177, 70%, 50%)",
//     "data": [
//       {
//         "x": "plane",
//         "y": 114
//       },
//       {
//         "x": "helicopter",
//         "y": 161
//       },
//       {
//         "x": "boat",
//         "y": 157
//       },
//       {
//         "x": "train",
//         "y": 25
//       },
//       {
//         "x": "subway",
//         "y": 112
//       },
//       {
//         "x": "bus",
//         "y": 202
//       },
//       {
//         "x": "car",
//         "y": 93
//       },
//       {
//         "x": "moto",
//         "y": 90
//       },
//       {
//         "x": "bicycle",
//         "y": 158
//       },
//       {
//         "x": "horse",
//         "y": 31
//       },
//       {
//         "x": "skateboard",
//         "y": 271
//       },
//       {
//         "x": "others",
//         "y": 152
//       }
//     ]
//   },
//   {
//     "id": "us",
//     "color": "hsl(213, 70%, 50%)",
//     "data": [
//       {
//         "x": "plane",
//         "y": 52
//       },
//       {
//         "x": "helicopter",
//         "y": 226
//       },
//       {
//         "x": "boat",
//         "y": 67
//       },
//       {
//         "x": "train",
//         "y": 213
//       },
//       {
//         "x": "subway",
//         "y": 182
//       },
//       {
//         "x": "bus",
//         "y": 18
//       },
//       {
//         "x": "car",
//         "y": 222
//       },
//       {
//         "x": "moto",
//         "y": 44
//       },
//       {
//         "x": "bicycle",
//         "y": 4
//       },
//       {
//         "x": "horse",
//         "y": 246
//       },
//       {
//         "x": "skateboard",
//         "y": 142
//       },
//       {
//         "x": "others",
//         "y": 95
//       }
//     ]
//   },
//   {
//     "id": "germany",
//     "color": "hsl(274, 70%, 50%)",
//     "data": [
//       {
//         "x": "plane",
//         "y": 154
//       },
//       {
//         "x": "helicopter",
//         "y": 200
//       },
//       {
//         "x": "boat",
//         "y": 32
//       },
//       {
//         "x": "train",
//         "y": 229
//       },
//       {
//         "x": "subway",
//         "y": 117
//       },
//       {
//         "x": "bus",
//         "y": 8
//       },
//       {
//         "x": "car",
//         "y": 207
//       },
//       {
//         "x": "moto",
//         "y": 296
//       },
//       {
//         "x": "bicycle",
//         "y": 60
//       },
//       {
//         "x": "horse",
//         "y": 62
//       },
//       {
//         "x": "skateboard",
//         "y": 72
//       },
//       {
//         "x": "others",
//         "y": 167
//       }
//     ]
//   },
//   {
//     "id": "norway",
//     "color": "hsl(317, 70%, 50%)",
//     "data": [
//       {
//         "x": "plane",
//         "y": 240
//       },
//       {
//         "x": "helicopter",
//         "y": 121
//       },
//       {
//         "x": "boat",
//         "y": 288
//       },
//       {
//         "x": "train",
//         "y": 23
//       },
//       {
//         "x": "subway",
//         "y": 135
//       },
//       {
//         "x": "bus",
//         "y": 240
//       },
//       {
//         "x": "car",
//         "y": 136
//       },
//       {
//         "x": "moto",
//         "y": 161
//       },
//       {
//         "x": "bicycle",
//         "y": 184
//       },
//       {
//         "x": "horse",
//         "y": 109
//       },
//       {
//         "x": "skateboard",
//         "y": 253
//       },
//       {
//         "x": "others",
//         "y": 94
//       }
//     ]
//   }
// ]

const data2=[
  // {
  //   "country": "AD",
  //   "hot dog": 122,
  //   "burger": 7,

  //   "sandwich": 158,

  //   "kebab": 78,

  //   "fries": 20,

  //   "donut": 25,

  // },
  {
    "country": "AE",
    "hot dog": 122,

    "burger": 33,

    "sandwich": 169,

    "kebab": 160,
 
    "fries": 40,
 
    "donut": 108,
    
  },
  
]
const data =[
  {
    "group": "Alpha",
    "subgroup": "A",
    "mu": 5,
    "sd": 1,
    "n": 20,
    "value": 3.534516334739064
  },
  {
    "group": "Alpha",
    "subgroup": "A",
    "mu": 5,
    "sd": 1,
    "n": 20,
    "value": 4.566236594223841
  },
  {
    "group": "Alpha",
    "subgroup": "A",
    "mu": 5,
    "sd": 1,
    "n": 20,
    "value": 4.939547735822732
  },
  {
    "group": "Alpha",
    "subgroup": "A",
    "mu": 5,
    "sd": 1,
    "n": 20,
    "value": 3.174831213576999
  },
  {
    "group": "Alpha",
    "subgroup": "A",
    "mu": 5,
    "sd": 1,
    "n": 20,
    "value": 6.112598467793484
  },
  {
    "group": "Alpha",
    "subgroup": "A",
    "mu": 5,
    "sd": 1,
    "n": 20,
    "value": 5.404307617598017
  },
  {
    "group": "Alpha",
    "subgroup": "A",
    "mu": 5,
    "sd": 1,
    "n": 20,
    "value": 5.33594747917922
  },
  {
    "group": "Alpha",
    "subgroup": "A",
    "mu": 5,
    "sd": 1,
    "n": 20,
    "value": 5.906591754004248
  },
  {
    "group": "Alpha",
    "subgroup": "A",
    "mu": 5,
    "sd": 1,
    "n": 20,
    "value": 3.7793273548330077
  },
  {
    "group": "Alpha",
    "subgroup": "A",
    "mu": 5,
    "sd": 1,
    "n": 20,
    "value": 6.123909501052096
  },
  {
    "group": "Alpha",
    "subgroup": "A",
    "mu": 5,
    "sd": 1,
    "n": 20,
    "value": 4.747605795879216
  },
  {
    "group": "Alpha",
    "subgroup": "A",
    "mu": 5,
    "sd": 1,
    "n": 20,
    "value": 5.673871329361929
  },
  {
    "group": "Alpha",
    "subgroup": "A",
    "mu": 5,
    "sd": 1,
    "n": 20,
    "value": 6.708158705656973
  },
  {
    "group": "Alpha",
    "subgroup": "A",
    "mu": 5,
    "sd": 1,
    "n": 20,
    "value": 4.910026852036096
  },
  {
    "group": "Alpha",
    "subgroup": "A",
    "mu": 5,
    "sd": 1,
    "n": 20,
    "value": 3.9748984732548145
  },
  {
    "group": "Alpha",
    "subgroup": "A",
    "mu": 5,
    "sd": 1,
    "n": 20,
    "value": 5.3933857665807805
  },
  {
    "group": "Alpha",
    "subgroup": "A",
    "mu": 5,
    "sd": 1,
    "n": 20,
    "value": 5.23725002878926
  },
  {
    "group": "Alpha",
    "subgroup": "A",
    "mu": 5,
    "sd": 1,
    "n": 20,
    "value": 5.720723108320701
  },
  {
    "group": "Alpha",
    "subgroup": "A",
    "mu": 5,
    "sd": 1,
    "n": 20,
    "value": 6.803227080033805
  },
  {
    "group": "Alpha",
    "subgroup": "A",
    "mu": 5,
    "sd": 1,
    "n": 20,
    "value": 5.002143794667785
  },
  {
    "group": "Alpha",
    "subgroup": "B",
    "mu": 6,
    "sd": 1,
    "n": 20,
    "value": 6.572284680160231
  },
  {
    "group": "Alpha",
    "subgroup": "B",
    "mu": 6,
    "sd": 1,
    "n": 20,
    "value": 6.888719587363075
  },
  {
    "group": "Alpha",
    "subgroup": "B",
    "mu": 6,
    "sd": 1,
    "n": 20,
    "value": 6.962246733099918
  },
  {
    "group": "Alpha",
    "subgroup": "B",
    "mu": 6,
    "sd": 1,
    "n": 20,
    "value": 6.558147627595813
  },
  {
    "group": "Alpha",
    "subgroup": "B",
    "mu": 6,
    "sd": 1,
    "n": 20,
    "value": 6.1545539470152395
  },
  {
    "group": "Alpha",
    "subgroup": "B",
    "mu": 6,
    "sd": 1,
    "n": 20,
    "value": 6.428348462979457
  },
  {
    "group": "Alpha",
    "subgroup": "B",
    "mu": 6,
    "sd": 1,
    "n": 20,
    "value": 5.6444795584209375
  },
  {
    "group": "Alpha",
    "subgroup": "B",
    "mu": 6,
    "sd": 1,
    "n": 20,
    "value": 5.964419285406641
  },
  {
    "group": "Alpha",
    "subgroup": "B",
    "mu": 6,
    "sd": 1,
    "n": 20,
    "value": 5.973109280745453
  },
  {
    "group": "Alpha",
    "subgroup": "B",
    "mu": 6,
    "sd": 1,
    "n": 20,
    "value": 6.309087475809138
  },
  {
    "group": "Alpha",
    "subgroup": "B",
    "mu": 6,
    "sd": 1,
    "n": 20,
    "value": 6.014723257564876
  },
  {
    "group": "Alpha",
    "subgroup": "B",
    "mu": 6,
    "sd": 1,
    "n": 20,
    "value": 4.4114600380328355
  },
  {
    "group": "Alpha",
    "subgroup": "B",
    "mu": 6,
    "sd": 1,
    "n": 20,
    "value": 5.588439608086439
  },
  {
    "group": "Alpha",
    "subgroup": "B",
    "mu": 6,
    "sd": 1,
    "n": 20,
    "value": 6.821772383456741
  },
  {
    "group": "Alpha",
    "subgroup": "B",
    "mu": 6,
    "sd": 1,
    "n": 20,
    "value": 6.263677727145932
  },
  {
    "group": "Alpha",
    "subgroup": "B",
    "mu": 6,
    "sd": 1,
    "n": 20,
    "value": 5.975513343688342
  },
  {
    "group": "Alpha",
    "subgroup": "B",
    "mu": 6,
    "sd": 1,
    "n": 20,
    "value": 5.54030053676024
  },
  {
    "group": "Alpha",
    "subgroup": "B",
    "mu": 6,
    "sd": 1,
    "n": 20,
    "value": 7.800768379750885
  },
  {
    "group": "Alpha",
    "subgroup": "B",
    "mu": 6,
    "sd": 1,
    "n": 20,
    "value": 7.158094223007058
  },
  {
    "group": "Alpha",
    "subgroup": "B",
    "mu": 6,
    "sd": 1,
    "n": 20,
    "value": 6.220971012528011
  },
  {
    "group": "Beta",
    "subgroup": "A",
    "mu": 8,
    "sd": 1.4,
    "n": 20,
    "value": 5.321957683849718
  },
  {
    "group": "Beta",
    "subgroup": "A",
    "mu": 8,
    "sd": 1.4,
    "n": 20,
    "value": 5.958690905519029
  },
  {
    "group": "Beta",
    "subgroup": "A",
    "mu": 8,
    "sd": 1.4,
    "n": 20,
    "value": 7.76529883856869
  },
  {
    "group": "Beta",
    "subgroup": "A",
    "mu": 8,
    "sd": 1.4,
    "n": 20,
    "value": 6.0101445745650555
  },
  {
    "group": "Beta",
    "subgroup": "A",
    "mu": 8,
    "sd": 1.4,
    "n": 20,
    "value": 7.86315688836764
  },
  {
    "group": "Beta",
    "subgroup": "A",
    "mu": 8,
    "sd": 1.4,
    "n": 20,
    "value": 9.509143638302202
  },
  {
    "group": "Beta",
    "subgroup": "A",
    "mu": 8,
    "sd": 1.4,
    "n": 20,
    "value": 7.035212037846993
  },
  {
    "group": "Beta",
    "subgroup": "A",
    "mu": 8,
    "sd": 1.4,
    "n": 20,
    "value": 9.000808426168545
  },
  {
    "group": "Beta",
    "subgroup": "A",
    "mu": 8,
    "sd": 1.4,
    "n": 20,
    "value": 3.7407389897186984
  },
  {
    "group": "Beta",
    "subgroup": "A",
    "mu": 8,
    "sd": 1.4,
    "n": 20,
    "value": 7.320990267288304
  },
  {
    "group": "Beta",
    "subgroup": "A",
    "mu": 8,
    "sd": 1.4,
    "n": 20,
    "value": 8.434339909423727
  },
  {
    "group": "Beta",
    "subgroup": "A",
    "mu": 8,
    "sd": 1.4,
    "n": 20,
    "value": 7.615094819262083
  },
  {
    "group": "Beta",
    "subgroup": "A",
    "mu": 8,
    "sd": 1.4,
    "n": 20,
    "value": 8.073084507069229
  },
  {
    "group": "Beta",
    "subgroup": "A",
    "mu": 8,
    "sd": 1.4,
    "n": 20,
    "value": 6.4235597638670425
  },
  {
    "group": "Beta",
    "subgroup": "A",
    "mu": 8,
    "sd": 1.4,
    "n": 20,
    "value": 9.545701093712156
  },
  {
    "group": "Beta",
    "subgroup": "A",
    "mu": 8,
    "sd": 1.4,
    "n": 20,
    "value": 7.75302792453886
  },
  {
    "group": "Beta",
    "subgroup": "A",
    "mu": 8,
    "sd": 1.4,
    "n": 20,
    "value": 7.6618494781222415
  },
  {
    "group": "Beta",
    "subgroup": "A",
    "mu": 8,
    "sd": 1.4,
    "n": 20,
    "value": 7.646493760900941
  },
  {
    "group": "Beta",
    "subgroup": "A",
    "mu": 8,
    "sd": 1.4,
    "n": 20,
    "value": 7.120521477628921
  },
  {
    "group": "Beta",
    "subgroup": "A",
    "mu": 8,
    "sd": 1.4,
    "n": 20,
    "value": 8.184240984933
  },
  {
    "group": "Beta",
    "subgroup": "B",
    "mu": 7.5,
    "sd": 1.4,
    "n": 20,
    "value": 7.864292380485767
  },
  {
    "group": "Beta",
    "subgroup": "B",
    "mu": 7.5,
    "sd": 1.4,
    "n": 20,
    "value": 8.828455109161817
  },
  {
    "group": "Beta",
    "subgroup": "B",
    "mu": 7.5,
    "sd": 1.4,
    "n": 20,
    "value": 7.93653093053341
  },
  {
    "group": "Beta",
    "subgroup": "B",
    "mu": 7.5,
    "sd": 1.4,
    "n": 20,
    "value": 7.633236260578104
  },
  {
    "group": "Beta",
    "subgroup": "B",
    "mu": 7.5,
    "sd": 1.4,
    "n": 20,
    "value": 8.300255471648368
  },
  {
    "group": "Beta",
    "subgroup": "B",
    "mu": 7.5,
    "sd": 1.4,
    "n": 20,
    "value": 7.763540600658842
  },
  {
    "group": "Beta",
    "subgroup": "B",
    "mu": 7.5,
    "sd": 1.4,
    "n": 20,
    "value": 5.677322225368866
  },
  {
    "group": "Beta",
    "subgroup": "B",
    "mu": 7.5,
    "sd": 1.4,
    "n": 20,
    "value": 6.2678067750661945
  },
  {
    "group": "Beta",
    "subgroup": "B",
    "mu": 7.5,
    "sd": 1.4,
    "n": 20,
    "value": 4.930839621834039
  },
  {
    "group": "Beta",
    "subgroup": "B",
    "mu": 7.5,
    "sd": 1.4,
    "n": 20,
    "value": 6.871082256826464
  },
  {
    "group": "Beta",
    "subgroup": "B",
    "mu": 7.5,
    "sd": 1.4,
    "n": 20,
    "value": 6.55439838808166
  },
  {
    "group": "Beta",
    "subgroup": "B",
    "mu": 7.5,
    "sd": 1.4,
    "n": 20,
    "value": 7.787584121115027
  },
  {
    "group": "Beta",
    "subgroup": "B",
    "mu": 7.5,
    "sd": 1.4,
    "n": 20,
    "value": 7.219776283589516
  },
  {
    "group": "Beta",
    "subgroup": "B",
    "mu": 7.5,
    "sd": 1.4,
    "n": 20,
    "value": 6.583431749469257
  },
  {
    "group": "Beta",
    "subgroup": "B",
    "mu": 7.5,
    "sd": 1.4,
    "n": 20,
    "value": 6.210389167772868
  },
  {
    "group": "Beta",
    "subgroup": "B",
    "mu": 7.5,
    "sd": 1.4,
    "n": 20,
    "value": 7.058489367130007
  },
  {
    "group": "Beta",
    "subgroup": "B",
    "mu": 7.5,
    "sd": 1.4,
    "n": 20,
    "value": 6.746010928812804
  },
  {
    "group": "Beta",
    "subgroup": "B",
    "mu": 7.5,
    "sd": 1.4,
    "n": 20,
    "value": 7.443702160268033
  },
  {
    "group": "Beta",
    "subgroup": "B",
    "mu": 7.5,
    "sd": 1.4,
    "n": 20,
    "value": 8.319181252699412
  },
  {
    "group": "Beta",
    "subgroup": "B",
    "mu": 7.5,
    "sd": 1.4,
    "n": 20,
    "value": 8.065139193617803
  },
  {
    "group": "Gamma",
    "subgroup": "A",
    "mu": 5,
    "sd": 1,
    "n": 20,
    "value": 5.225357459042544
  },
  {
    "group": "Gamma",
    "subgroup": "A",
    "mu": 5,
    "sd": 1,
    "n": 20,
    "value": 4.336023182531741
  },
  {
    "group": "Gamma",
    "subgroup": "A",
    "mu": 5,
    "sd": 1,
    "n": 20,
    "value": 4.892748334370695
  },
  {
    "group": "Gamma",
    "subgroup": "A",
    "mu": 5,
    "sd": 1,
    "n": 20,
    "value": 4.2973957516503525
  },
  {
    "group": "Gamma",
    "subgroup": "A",
    "mu": 5,
    "sd": 1,
    "n": 20,
    "value": 6.550103427864713
  },
  {
    "group": "Gamma",
    "subgroup": "A",
    "mu": 5,
    "sd": 1,
    "n": 20,
    "value": 2.6345721510874296
  },
  {
    "group": "Gamma",
    "subgroup": "A",
    "mu": 5,
    "sd": 1,
    "n": 20,
    "value": 4.6608045350723915
  },
  {
    "group": "Gamma",
    "subgroup": "A",
    "mu": 5,
    "sd": 1,
    "n": 20,
    "value": 4.911183037595321
  },
  {
    "group": "Gamma",
    "subgroup": "A",
    "mu": 5,
    "sd": 1,
    "n": 20,
    "value": 5.346251276613742
  },
  {
    "group": "Gamma",
    "subgroup": "A",
    "mu": 5,
    "sd": 1,
    "n": 20,
    "value": 5.0773330684674205
  },
  {
    "group": "Gamma",
    "subgroup": "A",
    "mu": 5,
    "sd": 1,
    "n": 20,
    "value": 4.7595069780588
  },
  {
    "group": "Gamma",
    "subgroup": "A",
    "mu": 5,
    "sd": 1,
    "n": 20,
    "value": 3.1463719813520834
  },
  {
    "group": "Gamma",
    "subgroup": "A",
    "mu": 5,
    "sd": 1,
    "n": 20,
    "value": 4.014706420906091
  },
  {
    "group": "Gamma",
    "subgroup": "A",
    "mu": 5,
    "sd": 1,
    "n": 20,
    "value": 5.135947598127723
  },
  {
    "group": "Gamma",
    "subgroup": "A",
    "mu": 5,
    "sd": 1,
    "n": 20,
    "value": 4.513211208264311
  },
  {
    "group": "Gamma",
    "subgroup": "A",
    "mu": 5,
    "sd": 1,
    "n": 20,
    "value": 4.222564152787935
  },
  {
    "group": "Gamma",
    "subgroup": "A",
    "mu": 5,
    "sd": 1,
    "n": 20,
    "value": 5.0556604192399615
  },
  {
    "group": "Gamma",
    "subgroup": "A",
    "mu": 5,
    "sd": 1,
    "n": 20,
    "value": 5.226676523105661
  },
  {
    "group": "Gamma",
    "subgroup": "A",
    "mu": 5,
    "sd": 1,
    "n": 20,
    "value": 4.321401376758715
  },
  {
    "group": "Gamma",
    "subgroup": "A",
    "mu": 5,
    "sd": 1,
    "n": 20,
    "value": 4.717114054310048
  },
  {
    "group": "Gamma",
    "subgroup": "B",
    "mu": 7.2,
    "sd": 1.8,
    "n": 20,
    "value": 7.149636468565937
  },
  {
    "group": "Gamma",
    "subgroup": "B",
    "mu": 7.2,
    "sd": 1.8,
    "n": 20,
    "value": 5.862474181682547
  },
  {
    "group": "Gamma",
    "subgroup": "B",
    "mu": 7.2,
    "sd": 1.8,
    "n": 20,
    "value": 8.854847107891826
  },
  {
    "group": "Gamma",
    "subgroup": "B",
    "mu": 7.2,
    "sd": 1.8,
    "n": 20,
    "value": 8.936224898760049
  },
  {
    "group": "Gamma",
    "subgroup": "B",
    "mu": 7.2,
    "sd": 1.8,
    "n": 20,
    "value": 6.1743673579499285
  },
  {
    "group": "Gamma",
    "subgroup": "B",
    "mu": 7.2,
    "sd": 1.8,
    "n": 20,
    "value": 9.999481761505745
  },
  {
    "group": "Gamma",
    "subgroup": "B",
    "mu": 7.2,
    "sd": 1.8,
    "n": 20,
    "value": 2.2124159090585502
  },
  {
    "group": "Gamma",
    "subgroup": "B",
    "mu": 7.2,
    "sd": 1.8,
    "n": 20,
    "value": 9.119015688867043
  },
  {
    "group": "Gamma",
    "subgroup": "B",
    "mu": 7.2,
    "sd": 1.8,
    "n": 20,
    "value": 6.7217176428489775
  },
  {
    "group": "Gamma",
    "subgroup": "B",
    "mu": 7.2,
    "sd": 1.8,
    "n": 20,
    "value": 7.124454603484396
  },
  {
    "group": "Gamma",
    "subgroup": "B",
    "mu": 7.2,
    "sd": 1.8,
    "n": 20,
    "value": 7.189840695463377
  },
  {
    "group": "Gamma",
    "subgroup": "B",
    "mu": 7.2,
    "sd": 1.8,
    "n": 20,
    "value": 7.753526642162573
  },
  {
    "group": "Gamma",
    "subgroup": "B",
    "mu": 7.2,
    "sd": 1.8,
    "n": 20,
    "value": 7.52066595645313
  },
  {
    "group": "Gamma",
    "subgroup": "B",
    "mu": 7.2,
    "sd": 1.8,
    "n": 20,
    "value": 6.330820578591072
  },
  {
    "group": "Gamma",
    "subgroup": "B",
    "mu": 7.2,
    "sd": 1.8,
    "n": 20,
    "value": 8.167044304756292
  },
  {
    "group": "Gamma",
    "subgroup": "B",
    "mu": 7.2,
    "sd": 1.8,
    "n": 20,
    "value": 6.746915658653726
  },
  {
    "group": "Gamma",
    "subgroup": "B",
    "mu": 7.2,
    "sd": 1.8,
    "n": 20,
    "value": 6.68867548439236
  },
  {
    "group": "Gamma",
    "subgroup": "B",
    "mu": 7.2,
    "sd": 1.8,
    "n": 20,
    "value": 7.405366373011436
  },
  {
    "group": "Gamma",
    "subgroup": "B",
    "mu": 7.2,
    "sd": 1.8,
    "n": 20,
    "value": 7.339154199064939
  },
  {
    "group": "Gamma",
    "subgroup": "B",
    "mu": 7.2,
    "sd": 1.8,
    "n": 20,
    "value": 8.306349173612066
  },
  {
    "group": "Delta",
    "subgroup": "A",
    "mu": 5,
    "sd": 1,
    "n": 20,
    "value": 4.851392974290208
  },
  {
    "group": "Delta",
    "subgroup": "A",
    "mu": 5,
    "sd": 1,
    "n": 20,
    "value": 5.557355301527838
  },
  {
    "group": "Delta",
    "subgroup": "A",
    "mu": 5,
    "sd": 1,
    "n": 20,
    "value": 3.8756888416190227
  },
  {
    "group": "Delta",
    "subgroup": "A",
    "mu": 5,
    "sd": 1,
    "n": 20,
    "value": 4.250996368919378
  },
  {
    "group": "Delta",
    "subgroup": "A",
    "mu": 5,
    "sd": 1,
    "n": 20,
    "value": 4.886228312670985
  },
  {
    "group": "Delta",
    "subgroup": "A",
    "mu": 5,
    "sd": 1,
    "n": 20,
    "value": 4.399771979604743
  },
  {
    "group": "Delta",
    "subgroup": "A",
    "mu": 5,
    "sd": 1,
    "n": 20,
    "value": 3.847446648923335
  },
  {
    "group": "Delta",
    "subgroup": "A",
    "mu": 5,
    "sd": 1,
    "n": 20,
    "value": 5.116291424338468
  },
  {
    "group": "Delta",
    "subgroup": "A",
    "mu": 5,
    "sd": 1,
    "n": 20,
    "value": 5.350289809938122
  },
  {
    "group": "Delta",
    "subgroup": "A",
    "mu": 5,
    "sd": 1,
    "n": 20,
    "value": 5.382763548751481
  },
  {
    "group": "Delta",
    "subgroup": "A",
    "mu": 5,
    "sd": 1,
    "n": 20,
    "value": 6.339520282836255
  },
  {
    "group": "Delta",
    "subgroup": "A",
    "mu": 5,
    "sd": 1,
    "n": 20,
    "value": 5.19006158202654
  },
  {
    "group": "Delta",
    "subgroup": "A",
    "mu": 5,
    "sd": 1,
    "n": 20,
    "value": 3.9972869499901442
  },
  {
    "group": "Delta",
    "subgroup": "A",
    "mu": 5,
    "sd": 1,
    "n": 20,
    "value": 4.604219231405688
  },
  {
    "group": "Delta",
    "subgroup": "A",
    "mu": 5,
    "sd": 1,
    "n": 20,
    "value": 3.1669978975884936
  },
  {
    "group": "Delta",
    "subgroup": "A",
    "mu": 5,
    "sd": 1,
    "n": 20,
    "value": 3.071312869762398
  },
  {
    "group": "Delta",
    "subgroup": "A",
    "mu": 5,
    "sd": 1,
    "n": 20,
    "value": 5.593119109311204
  },
  {
    "group": "Delta",
    "subgroup": "A",
    "mu": 5,
    "sd": 1,
    "n": 20,
    "value": 3.372741314767799
  },
  {
    "group": "Delta",
    "subgroup": "A",
    "mu": 5,
    "sd": 1,
    "n": 20,
    "value": 5.922136467927339
  },
  {
    "group": "Delta",
    "subgroup": "A",
    "mu": 5,
    "sd": 1,
    "n": 20,
    "value": 4.606770124121647
  },
  {
    "group": "Delta",
    "subgroup": "B",
    "mu": 6,
    "sd": 1,
    "n": 20,
    "value": 6.066424142596569
  },
  {
    "group": "Delta",
    "subgroup": "B",
    "mu": 6,
    "sd": 1,
    "n": 20,
    "value": 6.042075259675587
  },
  {
    "group": "Delta",
    "subgroup": "B",
    "mu": 6,
    "sd": 1,
    "n": 20,
    "value": 5.963254244674879
  },
  {
    "group": "Delta",
    "subgroup": "B",
    "mu": 6,
    "sd": 1,
    "n": 20,
    "value": 5.777145117096115
  },
  {
    "group": "Delta",
    "subgroup": "B",
    "mu": 6,
    "sd": 1,
    "n": 20,
    "value": 6.78602446600534
  },
  {
    "group": "Delta",
    "subgroup": "B",
    "mu": 6,
    "sd": 1,
    "n": 20,
    "value": 5.138544544527498
  },
  {
    "group": "Delta",
    "subgroup": "B",
    "mu": 6,
    "sd": 1,
    "n": 20,
    "value": 6.145406142276851
  },
  {
    "group": "Delta",
    "subgroup": "B",
    "mu": 6,
    "sd": 1,
    "n": 20,
    "value": 8.025918434624728
  },
  {
    "group": "Delta",
    "subgroup": "B",
    "mu": 6,
    "sd": 1,
    "n": 20,
    "value": 6.775186886657589
  },
  {
    "group": "Delta",
    "subgroup": "B",
    "mu": 6,
    "sd": 1,
    "n": 20,
    "value": 6.595443584309179
  },
  {
    "group": "Delta",
    "subgroup": "B",
    "mu": 6,
    "sd": 1,
    "n": 20,
    "value": 5.461896453300861
  },
  {
    "group": "Delta",
    "subgroup": "B",
    "mu": 6,
    "sd": 1,
    "n": 20,
    "value": 8.907096877551753
  },
  {
    "group": "Delta",
    "subgroup": "B",
    "mu": 6,
    "sd": 1,
    "n": 20,
    "value": 5.571694222320798
  },
  {
    "group": "Delta",
    "subgroup": "B",
    "mu": 6,
    "sd": 1,
    "n": 20,
    "value": 6.987468320287874
  },
  {
    "group": "Delta",
    "subgroup": "B",
    "mu": 6,
    "sd": 1,
    "n": 20,
    "value": 7.943820572754729
  },
  {
    "group": "Delta",
    "subgroup": "B",
    "mu": 6,
    "sd": 1,
    "n": 20,
    "value": 7.120120273880588
  },
  {
    "group": "Delta",
    "subgroup": "B",
    "mu": 6,
    "sd": 1,
    "n": 20,
    "value": 5.464804720348052
  },
  {
    "group": "Delta",
    "subgroup": "B",
    "mu": 6,
    "sd": 1,
    "n": 20,
    "value": 6.063037835446756
  },
  {
    "group": "Delta",
    "subgroup": "B",
    "mu": 6,
    "sd": 1,
    "n": 20,
    "value": 7.723302023715277
  },
  {
    "group": "Delta",
    "subgroup": "B",
    "mu": 6,
    "sd": 1,
    "n": 20,
    "value": 5.035517512494572
  },
  {
    "group": "Epsilon",
    "subgroup": "A",
    "mu": 5,
    "sd": 1.4,
    "n": 20,
    "value": 4.608190194848133
  },
  {
    "group": "Epsilon",
    "subgroup": "A",
    "mu": 5,
    "sd": 1.4,
    "n": 20,
    "value": 3.2178123381254293
  },
  {
    "group": "Epsilon",
    "subgroup": "A",
    "mu": 5,
    "sd": 1.4,
    "n": 20,
    "value": 6.028614624671679
  },
  {
    "group": "Epsilon",
    "subgroup": "A",
    "mu": 5,
    "sd": 1.4,
    "n": 20,
    "value": 6.870778967141123
  },
  {
    "group": "Epsilon",
    "subgroup": "A",
    "mu": 5,
    "sd": 1.4,
    "n": 20,
    "value": 6.166161946175609
  },
  {
    "group": "Epsilon",
    "subgroup": "A",
    "mu": 5,
    "sd": 1.4,
    "n": 20,
    "value": 4.734994016756842
  },
  {
    "group": "Epsilon",
    "subgroup": "A",
    "mu": 5,
    "sd": 1.4,
    "n": 20,
    "value": 4.786535970878269
  },
  {
    "group": "Epsilon",
    "subgroup": "A",
    "mu": 5,
    "sd": 1.4,
    "n": 20,
    "value": 5.721514935946957
  },
  {
    "group": "Epsilon",
    "subgroup": "A",
    "mu": 5,
    "sd": 1.4,
    "n": 20,
    "value": 4.405499060729837
  },
  {
    "group": "Epsilon",
    "subgroup": "A",
    "mu": 5,
    "sd": 1.4,
    "n": 20,
    "value": 6.370902446175659
  },
  {
    "group": "Epsilon",
    "subgroup": "A",
    "mu": 5,
    "sd": 1.4,
    "n": 20,
    "value": 4.68414034574623
  },
  {
    "group": "Epsilon",
    "subgroup": "A",
    "mu": 5,
    "sd": 1.4,
    "n": 20,
    "value": 3.7774348232187025
  },
  {
    "group": "Epsilon",
    "subgroup": "A",
    "mu": 5,
    "sd": 1.4,
    "n": 20,
    "value": 7.320953308965986
  },
  {
    "group": "Epsilon",
    "subgroup": "A",
    "mu": 5,
    "sd": 1.4,
    "n": 20,
    "value": 4.022800554254543
  },
  {
    "group": "Epsilon",
    "subgroup": "A",
    "mu": 5,
    "sd": 1.4,
    "n": 20,
    "value": 3.8291536047976065
  },
  {
    "group": "Epsilon",
    "subgroup": "A",
    "mu": 5,
    "sd": 1.4,
    "n": 20,
    "value": 7.063981943361852
  },
  {
    "group": "Epsilon",
    "subgroup": "A",
    "mu": 5,
    "sd": 1.4,
    "n": 20,
    "value": 6.08803931868547
  },
  {
    "group": "Epsilon",
    "subgroup": "A",
    "mu": 5,
    "sd": 1.4,
    "n": 20,
    "value": 4.338640161721752
  },
  {
    "group": "Epsilon",
    "subgroup": "A",
    "mu": 5,
    "sd": 1.4,
    "n": 20,
    "value": 4.912784530944842
  },
  {
    "group": "Epsilon",
    "subgroup": "A",
    "mu": 5,
    "sd": 1.4,
    "n": 20,
    "value": 100
  },
  {
    "group": "Epsilon",
    "subgroup": "B",
    "mu": 6,
    "sd": 3,
    "n": 20,
    "value": 4.65927285005117
  },
  {
    "group": "Epsilon",
    "subgroup": "B",
    "mu": 6,
    "sd": 3,
    "n": 20,
    "value": 2.9744396860784224
  },
  {
    "group": "Epsilon",
    "subgroup": "B",
    "mu": 6,
    "sd": 3,
    "n": 20,
    "value": 2.400921578989695
  },
  {
    "group": "Epsilon",
    "subgroup": "B",
    "mu": 6,
    "sd": 3,
    "n": 20,
    "value": 9.868283108744224
  },
  {
    "group": "Epsilon",
    "subgroup": "B",
    "mu": 6,
    "sd": 3,
    "n": 20,
    "value": 8.182021965134211
  },
  {
    "group": "Epsilon",
    "subgroup": "B",
    "mu": 6,
    "sd": 3,
    "n": 20,
    "value": 9.755708359123915
  },
  {
    "group": "Epsilon",
    "subgroup": "B",
    "mu": 6,
    "sd": 3,
    "n": 20,
    "value": 7.722112021730705
  },
  {
    "group": "Epsilon",
    "subgroup": "B",
    "mu": 6,
    "sd": 3,
    "n": 20,
    "value": 2.518941993070319
  },
  {
    "group": "Epsilon",
    "subgroup": "B",
    "mu": 6,
    "sd": 3,
    "n": 20,
    "value": 2.5250926629310753
  },
  {
    "group": "Epsilon",
    "subgroup": "B",
    "mu": 6,
    "sd": 3,
    "n": 20,
    "value": 6.828179173465145
  },
  {
    "group": "Epsilon",
    "subgroup": "B",
    "mu": 6,
    "sd": 3,
    "n": 20,
    "value": 6.245602607814353
  },
  {
    "group": "Epsilon",
    "subgroup": "B",
    "mu": 6,
    "sd": 3,
    "n": 20,
    "value": 4.497175087832071
  },
  {
    "group": "Epsilon",
    "subgroup": "B",
    "mu": 6,
    "sd": 3,
    "n": 20,
    "value": 3.536798021741406
  },
  {
    "group": "Epsilon",
    "subgroup": "B",
    "mu": 6,
    "sd": 3,
    "n": 20,
    "value": 4.13660663297297
  },
  {
    "group": "Epsilon",
    "subgroup": "B",
    "mu": 6,
    "sd": 3,
    "n": 20,
    "value": 5.487115957591233
  },
  {
    "group": "Epsilon",
    "subgroup": "B",
    "mu": 6,
    "sd": 3,
    "n": 20,
    "value": 6.199198313299723
  },
  {
    "group": "Epsilon",
    "subgroup": "B",
    "mu": 6,
    "sd": 3,
    "n": 20,
    "value": 6.283228926193793
  },
  {
    "group": "Epsilon",
    "subgroup": "B",
    "mu": 6,
    "sd": 3,
    "n": 20,
    "value": 6.900504125723646
  },
  {
    "group": "Epsilon",
    "subgroup": "B",
    "mu": 6,
    "sd": 3,
    "n": 20,
    "value": 5.9486269786780115
  },
  {
    "group": "Epsilon",
    "subgroup": "B",
    "mu": 6,
    "sd": 3,
    "n": 20,
    "value": 6.210996696835578
  }
]
function App() {
  const [data3, setData3]= useState([
    {
      "id": "japan",
      "color": "hsl(270, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 53
        },
        {
          "x": "helicopter",
          "y": 287
        },
        {
          "x": "boat",
          "y": 228
        },
        {
          "x": "train",
          "y": 228
        },
        {
          "x": "subway",
          "y": 296
        },
        {
          "x": "bus",
          "y": 220
        },
        {
          "x": "car",
          "y": 89
        },
        {
          "x": "moto",
          "y": 110
        },
        {
          "x": "bicycle",
          "y": 15
        },
        {
          "x": "horse",
          "y": 219
        },
        {
          "x": "skateboard",
          "y": 254
        },
        {
          "x": "others",
          "y": 106
        }
      ]
    },
    {
      "id": "france",
      "color": "hsl(177, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 114
        },
        {
          "x": "helicopter",
          "y": 161
        },
        {
          "x": "boat",
          "y": 157
        },
        {
          "x": "train",
          "y": 25
        },
        {
          "x": "subway",
          "y": 112
        },
        {
          "x": "bus",
          "y": 202
        },
        {
          "x": "car",
          "y": 93
        },
        {
          "x": "moto",
          "y": 90
        },
        {
          "x": "bicycle",
          "y": 158
        },
        {
          "x": "horse",
          "y": 31
        },
        {
          "x": "skateboard",
          "y": 271
        },
        {
          "x": "others",
          "y": 152
        }
      ]
    },
    {
      "id": "us",
      "color": "hsl(213, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 52
        },
        {
          "x": "helicopter",
          "y": 226
        },
        {
          "x": "boat",
          "y": 67
        },
        {
          "x": "train",
          "y": 213
        },
        {
          "x": "subway",
          "y": 182
        },
        {
          "x": "bus",
          "y": 18
        },
        {
          "x": "car",
          "y": 222
        },
        {
          "x": "moto",
          "y": 44
        },
        {
          "x": "bicycle",
          "y": 4
        },
        {
          "x": "horse",
          "y": 246
        },
        {
          "x": "skateboard",
          "y": 142
        },
        {
          "x": "others",
          "y": 95
        }
      ]
    },
    {
      "id": "germany",
      "color": "hsl(274, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 154
        },
        {
          "x": "helicopter",
          "y": 200
        },
        {
          "x": "boat",
          "y": 32
        },
        {
          "x": "train",
          "y": 229
        },
        {
          "x": "subway",
          "y": 117
        },
        {
          "x": "bus",
          "y": 8
        },
        {
          "x": "car",
          "y": 207
        },
        {
          "x": "moto",
          "y": 296
        },
        {
          "x": "bicycle",
          "y": 60
        },
        {
          "x": "horse",
          "y": 62
        },
        {
          "x": "skateboard",
          "y": 72
        },
        {
          "x": "others",
          "y": 167
        }
      ]
    },
    {
      "id": "norway",
      "color": "hsl(317, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 240
        },
        {
          "x": "helicopter",
          "y": 121
        },
        {
          "x": "boat",
          "y": 288
        },
        {
          "x": "train",
          "y": 23
        },
        {
          "x": "subway",
          "y": 135
        },
        {
          "x": "bus",
          "y": 240
        },
        {
          "x": "car",
          "y": 136
        },
        {
          "x": "moto",
          "y": 161
        },
        {
          "x": "bicycle",
          "y": 184
        },
        {
          "x": "horse",
          "y": 109
        },
        {
          "x": "skateboard",
          "y": 253
        },
        {
          "x": "others",
          "y": 94
        }
      ]
    }
  ])
  const handleData3 = () =>{
    fetch("http://127.0.0.1:5000/country")
    .then(function (response) {
      return response.json()
      
    })
    .then(function (myJson) {
      console.log(myJson)
      setData3(myJson)
    });
  }
  return (
    <>
    <button onClick={handleData3}>test</button>
    <ResponsiveBoxPlot
        data={data}
        margin={{ top: 60, right: 140, bottom: 60, left: 60 }}
        minValue={0}
        maxValue={10}
        subGroupBy="subgroup"
        padding={0.12}
        enableGridX={true}
        axisTop={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '',
            legendOffset: 36
        }}
        axisRight={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '',
            legendOffset: 0
        }}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'group',
            legendPosition: 'middle',
            legendOffset: 32
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'value',
            legendPosition: 'middle',
            legendOffset: -40
        }}
        colors={{ scheme: 'nivo' }}
        borderRadius={2}
        borderWidth={2}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.3
                ]
            ]
        }}
        medianWidth={2}
        medianColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.3
                ]
            ]
        }}
        whiskerEndSize={0.6}
        whiskerColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.3
                ]
            ]
        }}
        motionConfig="stiff"
        legends={[
            {
                anchor: 'right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemWidth: 60,
                itemHeight: 20,
                itemsSpacing: 3,
                itemTextColor: '#999',
                itemDirection: 'left-to-right',
                symbolSize: 20,
                symbolShape: 'square',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]}
    />
    <ResponsiveBar
        data={data2}
        keys={[
            'hot dog',
            'burger',
            'sandwich',
            'kebab',
            'fries',
            'donut'
        ]}
        indexBy="country"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'nivo' }}
        groupMode="grouped"
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#38bcb2',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: '#eed312',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'fries'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'sandwich'
                },
                id: 'lines'
            }
        ]}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'country',
            legendPosition: 'middle',
            legendOffset: 32
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'food',
            legendPosition: 'middle',
            legendOffset: -40
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
        legends={[
            {
                dataFrom: 'keys',
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: 'left-to-right',
                itemOpacity: 0.85,
                symbolSize: 20,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={e=>e.id+": "+e.formattedValue+" in country: "+e.indexValue}
    />
    <ResponsiveLine
        data={data3}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: false,
            reverse: false
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'transportation',
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'count',
            legendOffset: -40,
            legendPosition: 'middle'
        }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
    </>
     
  );
}

export default App;
