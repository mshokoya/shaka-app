import {observable} from '@legendapp/state';
import { TreeItem, TreeItemIndex, TreeViewState } from 'react-complex-tree';


export const state$ = observable({
    connection: {
      mongo: {
        "testconnkey1": {name: "test app", url: "mongodb://127.0.0.1:27017", host: '', port: '', user: '', password: 'password', database: '', configPath: '', key: 'testkey1'} as ConnectionState,
        "testconnkey2": {name: "test app", url: "mongodb://127.0.0.1:500000", host: '', port: '', user: '', password: 'passwordddd', database: '', configPath: '', key: 'testkey2'} as ConnectionState
      },
    } as Connection,

    data:{
      randomGenInDisplay: { group: '', key: '', type: 'db', display: 'customLayout1', module: 'mongo', connKey: 'testkey1', db: 'dbt1', table: 'coltest1', fields: ["testcol1", "testcol2", "testcol3"], data: [{testcol1: "hello", testcol2: "world", testcol3: "wee"}] } as DBData,
      mongoTableState: { group: '', key: '', type: 'db', display: 'mongo', module: 'mongo', connKey: 'testkey2', db: 'dbt3', table: 'coltest8', fields: ["testcol1", "testcol2", "testcol3"], data: [{testcol1: "hello", testcol2: "world", testcol3: "wee"}] } as DBData,
      mongo: { 
        group: 'mongo',
        data: {
          testkey1: {
            dbt1: {
              name: "dbt1",
              tables: ["coltest1", "coltest2", "coltest3"],
            },
            dbt2: {
              name: "dbt2",
              tables: ["coltest4", "coltest5", "coltest6"],
            },
          } as DBInfo,
          testkey2: {
            dbt3: {
              name: "dbt3",
              tables: ["coltest7", "coltest8", "coltest9"],
            },
            dbt4: {
              name: "dbt4",
              tables: ["coltest10", "coltest11", "coltest12"],
            },
          } as DBInfo
        } as DBDataState
      } as DBState,

      mongoTreeState: { group: 'mongo', data: {}, state: {} } as TreeState,
      randomTreeIDForPOSTGRES: { group: 'postgres', data: {}, state: {} } as TreeState,
    } as Data,

    display: { // only stores id for corrisponding data & 
      mongo: { // default cannot use grid layout... you must create custom grid layout and add default db
        tree: 'mongoTreeState', // for default module all keys & group will be the given module name
        table: 'mongoTableState',
        state: 'mongo', // or connection
      },
      postgres: {
        tree: 'randomTreeIDForPOSTGRES',
        table: 'postgresTableDataID',
        state: 'postgres',
      },
      customLayout1: {
        layout: [
          { group: 'rangroup1', name: 'display name',  data: 'randomGenInDisplay', i: "blue-eyes-dragon", x: 0, y: 0, w: 300, h: 50, isDraggable: true, resizeHandles: ['s' , 'w' , 'e' , 'n' , 'sw' , 'nw' , 'se' , 'ne']},
        ]
      }
    } as Display
  })

export type ConnectionState = {name: string, url: string, host: string, port: string, user: string, password: string, database: string, configPath: string, key: string}

export type Connection = {
  'mongo': Record<string, ConnectionState>
}

export type PostgresDisplay = {tree: string, table: string, state: 'postgres'}
export type MongoDisplay = {tree: string, table: string, state: 'mongo'}

export type DefaultDisplay = { 'mongo': MongoDisplay, 'postgres': PostgresDisplay}

export type GridState = {group: string, name: string, data: string, i: string, x: number, y: number, w: number, h: number, isDraggable: boolean, resizeHandles: string[]}

export type GridDisplay = {
  layout: GridState[]
}

export type Display = Record<string, GridDisplay | MongoDisplay | PostgresDisplay>


export type DBData = { group: string, key: string, type: string, display: string, module: string, connKey: string, db: string, table: string, fields: string[], data: Record<string, any>[]}

export type DBInfo = { [key: string]: { name: string, tables: string[] }}

export type DBDataState = {
  [key: string]: DBInfo
}

export type DBState = {
  group: string,
  data: DBDataState
}

export type TreeState = { group: string, data: Record<TreeItemIndex, TreeItem>, state: TreeViewState }

export type Data = Record<string, DBData | TreeState | DBState>

  // {
  //   mongodb: {
  //     tree: '',
  //     edit: { open: false },
  //     el: [
  //       { key: "blue-eyes-dragon", i: "blue-eyes-dragon", x: 0, y: 0, w: 300, h: 50, isDraggable: true, resizeHandles: ['s' , 'w' , 'e' , 'n' , 'sw' , 'nw' , 'se' , 'ne']},
  //       { key: "dark-magician", i: "dark-magician", x: 18, y: 0, w: 53, h: 67, isDraggable: true, resizeHandles: ['s' , 'w' , 'e' , 'n' , 'sw' , 'nw' , 'se' , 'ne'] },
  //       { key: "kuriboh", i: "kuriboh", x: 71, y: 0, w: 29, h: 67, isDraggable: true, resizeHandles: ['s' , 'w' , 'e' , 'n' , 'sw' , 'nw' , 'se' , 'ne']  },
  //       { i: "fake", x: 71, y: 0, w: 29, h: 67, isDraggable: true, resizeHandles: ['s' , 'w' , 'e' , 'n' , 'sw' , 'nw' , 'se' , 'ne']  },
  //     ],
  //   },
  //   custommongo: {
  //     id: "ddjksadkjas",
  //     layout: {
  //       default: null,
  //       pane: {},
  //       grid: {
  //         id: 'custommonggridid', 
  //         // when importing do it in parallel (promise.all)
  //         el: [
  //           { key: "blue-eyes-dragon", i: "blue-eyes-dragon", x: 0, y: 0, w: 300, h: 50, isDraggable: true, resizeHandles: ['s' , 'w' , 'e' , 'n' , 'sw' , 'nw' , 'se' , 'ne']},
  //           { key: "dark-magician", i: "dark-magician", x: 18, y: 0, w: 53, h: 67, isDraggable: true, resizeHandles: ['s' , 'w' , 'e' , 'n' , 'sw' , 'nw' , 'se' , 'ne'] },
  //           { key: "kuriboh", i: "kuriboh", x: 71, y: 0, w: 29, h: 67, isDraggable: true, resizeHandles: ['s' , 'w' , 'e' , 'n' , 'sw' , 'nw' , 'se' , 'ne']  },
  //           { i: "fake", x: 71, y: 0, w: 29, h: 67, isDraggable: true, resizeHandles: ['s' , 'w' , 'e' , 'n' , 'sw' , 'nw' , 'se' , 'ne']  },
  //         ],
  //         state: {
  //           "blue-eyes-dragon": {
  //             name: 'mongodb-sidebar',
  //             type: 'tree-side',
  //             viewState: {}
  //           },
  //           "dark-magician": {},
  //           "kuriboh": {},
  //         }
  //       }
  //     }
  //   } 
  // }

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








  // modules: {
  //   mongo: {
  //     keys: ["testkey1","testkey2"], // use computed() 
  //     dbs: {
  //       testkey1: {
  //         dbt1: {
  //           name: "dbt1",
  //           tables: ["coltest1", "coltest2", "coltest3"],
  //         },
  //         dbt2: {
  //           name: "dbt2",
  //           tables: ["coltest4", "coltest5", "coltest6"],
  //         },
  //       },
  //       testkey2: {
  //         dbt3: {
  //           name: "dbt3",
  //           tables: ["coltest7", "coltest8", "coltest9"],
  //         },
  //         dbt4: {
  //           name: "dbt4",
  //           tables: ["coltest10", "coltest11", "coltest12"],
  //         },
  //       }
  //     },
  //     dbList: {
  //       testkey1: ['dbt1', 'dbt2'], // use computed() + find a func that updates keys when added or removed
  //       testkey2: ['dbt3', 'dbt4'],
  //     },
  //   },
  //   data: {
  //     randomGenInDisplay: { displayKey: '', module: 'mongo', connKey: 'testkey2', table: 'coltest1', type: 'db', fields: ["testcol1", "testcol2", "testcol3"], data: [{testcol1: "hello", testcol2: "world", testcol3: "wee"}] },
  //   },

  // },




  // mongoTreeState: { group: 'mongo', data: {
  //   root: {
  //     index: 'root',
  //     isFolder: true,
  //     children: ['child1', 'child2'],
  //     data: 'Root item',
  //   },
  //   child1: {
  //     index: 'child1',
  //     children: [],
  //     data: 'Child item 1',
  //   },
  //   child2: {
  //     index: 'child2',
  //     isFolder: true,
  //     children: ['child3'],
  //     data: 'Child item 2',
  //   },
  //   child3: {
  //     index: 'child3',
  //     children: [],
  //     data: 'Child item 3',
  //   },
  // }, state: {} } as TreeState,