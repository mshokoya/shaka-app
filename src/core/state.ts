import {observable} from '@legendapp/state';


export const state$ = observable({
    connection: {
      mongodb: {
        "testconnkey1": {name: "test app", url: "mongodb://127.0.0.1:27017", host: '', port: '', user: '', password: 'password', database: '', configPath: '', key: 'testkey1'},
        "testconnkey2": {name: "test app", url: "mongodb://127.0.0.1:500000", host: '', port: '', user: '', password: 'passwordddd', database: '', configPath: '', key: 'testkey2'}
      },
    },
    module: {
      mongodb: {
        testconnkey1: {
          dbs: {
            dbt1: {
              name: "dbt1",
              tables: {
                coltest1: { name: 'coltest1', fields: ["testcol1", "testcol2", "testcol3"], data: [{testcol1: "hello", testcol2: "world", testcol3: "wee"}] },
                coltest2: { name: 'coltest2', fields: ["testcol4", "testcol5", "testcol6"], data: [{testcol4: "my", testcol5: "name", testcol6: "is"}] },
                coltest3: { name: 'coltest3', fields: ["testcol7", "testcol8", "testcol9"], data: [{testcol7: "zee", testcol8: "gee", testcol9: "imesa"}] },
              }
            },
            dbt2: {
              name: "dbt1",
              tables: {
                coltest4: { name: 'coltest4', fields: ["testcol1", "testcol2", "testcol3"], data: [{testcol1: "hdsadsao", testcol2: "wdsadasorld", testcol3: "wdsadee"}] },
                coltest5: { name: 'coltest5', fields: ["testcol4", "testcol5", "testcol6"], data: [{testcol4: "hevcxllo", testcol5: "worldavd", testcol6: "wevsdavdase"}] },
                coltest6: { name: 'coltest6', fields: ["testcol7", "testcol8", "testcol9"], data: [{testcol7: "hecsdfllo", testcol8: "wordvczxld", testcol9: "wecsxvcze"}] },
              }
            },
          }
        },
        testconnkey2: {
          dbs: {
            dbt3: {
              name: "dbt3",
              tables: {
                coltest7:  {  name: 'coltest7', fields: ["testcol10", "testcol11", "testcol12"], data: [{testcol10: "helsdavdsvslo", testcol11: "world", testcol12: "fdsafwee"}] },
                coltest8:  {  name: 'coltest8', fields: ["testcol13", "testcol14", "testcol15"], data: [{testcol13: "hdsvasdvello", testcol14: "world", testcol15: "vxzcwee"}] },
                coltest9:  {  name: 'coltest9', fields: ["testcol16", "testcol17", "testcol18"], data: [{testcol16: "dsadsds", testcol17: "fdsfzxc", testcol18: "vczxwfdsaf"}] },
              }
            },
            dbt4: {
              name: "dbt4",
              tables: {
                coltest10: {  name: 'coltest10', fields: ["testcol1", "testcol2", "testcol3"], data: [{testcol1: "hvczvxcello", testcol2: "world", testcol3: "wee"}] },
                coltest11: {  name: 'coltest11', fields: ["testcol4", "testcol5", "testcol6"], data: [{testcol4: "fgjhdhello", testcol5: "rwtsfgdworld", testcol6: "cxvfwee"}] },
                coltest12: {  name: 'coltest12', fields: ["testcol7", "testcol8", "testcol9"], data: [{testcol7: "dgnfbhellovdf", testcol8: "wdsforlddf", testcol9: "wbsdbsee"}] },
              }
            },
          }
        }
      }
    },
    display: {
      mongodb: {
        id: "mongodb",
        layout: {
          default: {},
          pane: {},
          grid: {}
        }
      },
      custommongo: {
        id: "ddjksadkjas",
        layout: {
          default: '',
          pane: {},
          grid: {
            id: 'custommonggridid', 
            // when importing do it in parallel (promise.all)
            el: [
              { key: "blue-eyes-dragon", i: "blue-eyes-dragon", x: 0, y: 0, w: 300, h: 50, isDraggable: true, resizeHandles: ['s' , 'w' , 'e' , 'n' , 'sw' , 'nw' , 'se' , 'ne']},
              { key: "dark-magician", i: "dark-magician", x: 18, y: 0, w: 53, h: 67, isDraggable: true, resizeHandles: ['s' , 'w' , 'e' , 'n' , 'sw' , 'nw' , 'se' , 'ne'] },
              { key: "kuriboh", i: "kuriboh", x: 71, y: 0, w: 29, h: 67, isDraggable: true, resizeHandles: ['s' , 'w' , 'e' , 'n' , 'sw' , 'nw' , 'se' , 'ne']  },
              { i: "fake", x: 71, y: 0, w: 29, h: 67, isDraggable: true, resizeHandles: ['s' , 'w' , 'e' , 'n' , 'sw' , 'nw' , 'se' , 'ne']  },
            ],
            state: {
              "blue-eyes-dragon": {
                name: 'mongodb-sidebar',
                type: 'tree-side',
                viewState: {}
              },
              "dark-magician": {},
              "kuriboh": {},
            }
          }
        }
      } 
    }
  })

  // {
  //   connections: {
  //     mongo: {
  //       "testkey1": {name: "test app", url: "mongodb://127.0.0.1:27017", host: '', port: '', user: '', password: 'password', database: '', configPath: '', key: 'testkey1'},
  //       "testkey2": {name: "test app", url: "mongodb://127.0.0.1:500000", host: '', port: '', user: '', password: 'passwordddd', database: '', configPath: '', key: 'testkey2'}
  //     },
  //   },
  //   modules: {
  //     mongo: {
  //       keys: ["testkey1","testkey2"],
  //       dbs: {
  //         testkey1: {
  //           dbt1: {
  //             name: "dbt1",
  //             tables: ["coltest1", "coltest2", "coltest3"],
  //           },
  //           dbt2: {
  //             name: "dbt2",
  //             tables: ["coltest4", "coltest5", "coltest6"],
  //           },
  //         },
  //         testkey2: {
  //           dbt3: {
  //             name: "dbt3",
  //             tables: ["coltest7", "coltest8", "coltest9"],
  //           },
  //           dbt4: {
  //             name: "dbt4",
  //             tables: ["coltest10", "coltest11", "coltest12"],
  //           },
  //         }
  //       },
  //       dbList: {
  //         testkey1: ['dbt1', 'dbt2'], // use computed() + find a func that updates keys when added or removed
  //         testkey2: ['dbt3', 'dbt4'],
  //       },
  //       data: {
  //         testkey1: {
  //           dbt1 : {
  //             coltest1: { fields: ["testcol1", "testcol2", "testcol3"], data: [{testcol1: "hello", testcol2: "world", testcol3: "wee"}] },
  //             coltest2: { fields: ["testcol4", "testcol5", "testcol6"], data: [{testcol4: "my", testcol5: "name", testcol6: "is"}] },
  //             coltest3: { fields: ["testcol7", "testcol8", "testcol9"], data: [{testcol7: "zee", testcol8: "gee", testcol9: "imesa"}] },
  //           },
  //           dbt2 : {
  //             coltest4: { fields: ["testcol1", "testcol2", "testcol3"], data: [{testcol1: "hdsadsao", testcol2: "wdsadasorld", testcol3: "wdsadee"}] },
  //             coltest5: { fields: ["testcol4", "testcol5", "testcol6"], data: [{testcol4: "hevcxllo", testcol5: "worldavd", testcol6: "wevsdavdase"}] },
  //             coltest6: { fields: ["testcol7", "testcol8", "testcol9"], data: [{testcol7: "hecsdfllo", testcol8: "wordvczxld", testcol9: "wecsxvcze"}] },
  //           }
  //         },
  //         testkey2: {
  //           dbt3: {
  //             coltest7:  { fields: ["testcol10", "testcol11", "testcol12"], data: [{testcol10: "helsdavdsvslo", testcol11: "world", testcol12: "fdsafwee"}] },
  //             coltest8:  { fields: ["testcol13", "testcol14", "testcol15"], data: [{testcol13: "hdsvasdvello", testcol14: "world", testcol15: "vxzcwee"}] },
  //             coltest9:  { fields: ["testcol16", "testcol17", "testcol18"], data: [{testcol16: "dsadsds", testcol17: "fdsfzxc", testcol18: "vczxwfdsaf"}] },
  //           },
  //           dbt4 : {
  //             coltest10: { fields: ["testcol1", "testcol2", "testcol3"], data: [{testcol1: "hvczvxcello", testcol2: "world", testcol3: "wee"}] },
  //             coltest11: { fields: ["testcol4", "testcol5", "testcol6"], data: [{testcol4: "fgjhdhello", testcol5: "rwtsfgdworld", testcol6: "cxvfwee"}] },
  //             coltest12: { fields: ["testcol7", "testcol8", "testcol9"], data: [{testcol7: "dgnfbhellovdf", testcol8: "wdsforlddf", testcol9: "wbsdbsee"}] },
  //           }
  //         }
  //       }
  //     }
  //   },
  //   moduleConfig: {}
  // }