const intDec = 1233567;
const floatDec = -123.45678;
const negIntDec = -1234567;
const negFloatDec = -1.346788;
const num = 144;
const num = 12;
const expDec = 10000000000;
const expDec2 = 0.000001;
const exponentDec = 5 ** 2;
const powDec = 5 ** 2 ** 3 ** 1 ** 1 ** 1;
const powDec2 = 222 ** -1;
const multpDec = 22 * 2 * 3 * 1 * 1111;
const modDec = 22 % 1;
const modDec2 = 44 % 3 % 2;
const divDec = 1 / 2;
const divDec2 = 1 / 1 / (3 / 3);
const divDec3 = 5 / 2;
const addNum = intDec + floatDec;
const addNum2 = expDec + expDec2;
const addNum3 = powDec + powDec2;
const subNum = addNum - negIntDec;
const subNum2 = 0 - 248;
const operCheck = subNum * (subNum2 ** divDec / expDec * expDec2 ** 3);
const operCheck2 = 0.99 ** 365;
const operCheck3 = -111 + (2 ** 3 * 8 + 34 - 23);
// BOOLEAN DECLARATION
const boolDec = true;
const boolDec2 = false;
const boolCheck = true === false;
const notEqual = true !== false;
const boolCheck2 = 4 > 1;
const boolCheck3 = 4 === 4;
const boolCheck4 = 5 < 9;
const boolCheck6 = 1 <= 1;
const boolCheck7 = 4 >= 5;
const boolCheck9 = 'testString' > 'StringCompare';
const concatCheck2 = 'this is a test ' + 'folder';
const logicalCheck = true && true;
const logicalCheck2 = false && false;
const logicalCheck3 = false && true;
const logicalCheck4 = true && false;
const logicalCheck5 = true || true;
const logicalCheck6 = false || false;
const logicalCheck7 = false || true;
const logicalCheck8 = true || false;
const logicalCheck9 = 1 && 2;
const logicalCheck13 = 5 > 4 && (6 > 4 && (7 < 0 && true > false));
const logicalCheck14 = true > false;
const logicalCheck16 = true === true;
const logicalCheck17 = -1 === -4 + 3;
const logicalCheck18 = -1 !== 1.31431;
const logicalCheck20 = 23 > 2 ** 2;
const logicalCheck21 = 10 ** 5 && 100000;
const logicalCheck23 = 100 + 2000;
const logicalCheck24 = 5 > 1 === (9 !== 9);
// ARRAYS
const arrayCheck = [];
const arrayCheck2 = [];
const arrayCheck3 = [
  1,
  2,
  2.334,
  10000,
  true,
  'str',
  2 + 4,
  4 ** 4,
  3 % 3,
  2 > 1,
  2 || true,
  'dtr' + '675',
  5 && 4
];
const arrayCheck4 = [
  1,
  2,
  {
    a: 23,
    b: []
  }
];
const arrayCheck5 = [
  ,
  23,
  ,
  ,
  44,
  ,
];
const arrayCheck6 = [
  1,
  [
    'str',
    [
      true,
      false,
      [
        1.315,
        [],
        10000
      ]
    ]
  ]
];
//OBJECTS
const objectCheck = {};
const objectCheck2 = {};
const objectCheck3 = { a: {} };
const objectCheck4 = {
  a: 23,
  4: 'str',
  'string': 's',
  b: true,
  c: [
    2,
    true
  ],
  e: {
    'happy': 1 + 2,
    '_sad': 1 > 3 % 1
  },
  f: [
    { 'js': 'foobar' },
    {
      'cd': [{
          obj: [
            ,
            'nine'
          ]
        }]
    }
  ]
};
// ARRAY-SUBSCRIPTING -- MEMBER-EXPRESSIONS
const arrSubs = arrayCheck3[0];
const arrSubs2 = arrayCheck3[0] + 4 + arrayCheck3[1];
const arrSubs3 = arrayCheck3[0] > arrayCheck3[1] + 2;
const arrSubs4 = arrayCheck3[1] + 1 + 4;
const arrSubs5 = arrayCheck3[0] && arrayCheck3[1] + 234;
// Member check
const memCheck = objectCheck3.a;
const memCheck2 = objectCheck4.a;
const memCheck3 = objectCheck4['string'];
const memCheck4 = objectCheck4.c[0];
const memCheck5 = objectCheck4.c[1];
const memCheck6 = objectCheck4.f[0]['js'];
const memCheck7 = objectCheck4.f[0].js;
const memCheck8 = objectCheck4.e['_sad'];
const memCheck9 = objectCheck4['4'];
const memCheck10 = objectCheck4.f[1].cd[0].obj;
const memCheck11 = objectCheck4.f[1].cd[0]['obj'];
const memCheck12 = objectCheck4.f[1].cd[0]['obj'][0];
const memCheck13 = objectCheck4.f[1].cd[0]['obj']  // should fail
                                                   //boolCheck5 = 5 < 'string'
                                                   //strNumAdd = 5 + 'string'
                                                   // boolCheck8 = 5 <= 'clean'
                                                   //boolCheck10 = true > 1
                                                   //concatCheck = 1 ++ 3
                                                   //concatCheck3 = 'clean' ++ 01235
                                                   // concatCheck4 = 01234 ++ 'afnbf'
                                                   // concatCheck5 = true ++ false
                                                   // concatCheck6 = true ++ 1
                                                   //logicalCheck11 = 1 && 'dack'
                                                   // logicalCheck10 = 1 && true
                                                   //logicalCheck12 = 1 || true
                                                   // logicalCheck15 = 7 != 7 && 'garima' ++ ' kamboj'
                                                   // logicalCheck19 = -4 == 'clean'
                                                   // logicalCheck22 = 10 & 10
                                                   // logicalCheck24 = 5 > 1 == 9 != 9
                                                   // arrayCheck7 = (['str'] ++ ['tgb'])
                                                   // arrSubs3 = arrayCheck3[0] + arrayCheck3[1]
                                                   // arrSubs5 = arrayCheck3[1 + 3]
                                                   //

