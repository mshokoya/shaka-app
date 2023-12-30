import { TreeItem, TreeItemIndex } from "react-complex-tree"
import { DBDataState, TreeState } from "./state"
import { ObservableObject } from '@legendapp/state';

const TREE_ROOT_ID: string = 'root'

export const randomId = (length: number = 6, existing: string[] = []): string => {
  const id = Math.random().toString(36).substring(2, length+2);
  return existing.includes(id)
    ? randomId(length, existing)
    : id
}

// (FIX) could cause problems if db and collection has same name 
export const dbTreeInitInState = (
  dataState: ObservableObject<DBDataState>, 
  treeState: ObservableObject<TreeState>, 
) => {
  const items: Record<TreeItemIndex, TreeItem & {db?: string[]}> = {}
  const conns = Object.entries(dataState.peek())
  const existingIds: string[] = []

  // connection keys
  const connKeyList = conns.map(connKey => {
    // db names 
    const dbList = Object.entries(connKey[1]).map(db => {

      // tables or collections
      let tablesList = db[1].tables.map(table => {
        // table logic
        const id = randomId(6, existingIds)
        items[id] = {
          index: id,
          data: table,
          db: [connKey[0], db[0], table]
        }
        return id
      })

      // db logic
      const id = randomId(6, existingIds)
      items[id] = {
        index: id,
        data: db[0],
        isFolder: !!tablesList.length,
        children: tablesList,
      }
      return id
    })

    // conn key logic
    const id = randomId(6, existingIds)
    items[id] = {
      index: id,
      data: connKey[0],
      isFolder: !!dbList.length,
      children: dbList,
    }
    return id 
  })


  items[TREE_ROOT_ID] = {
    index: 'root',
    isFolder: !!connKeyList.length,
    children: connKeyList,
    data: ''
  }

  treeState.data.set(items)
}





























// import { TreeItem, TreeItemIndex } from "react-complex-tree"
// import { DBDataState, TreeState } from "./state"
// import { ObservableObject } from '@legendapp/state';

// // (FIX) could cause problems if db and collection has same name 
// export const dbTreeInitInState = (
//   dataState: ObservableObject<DBDataState>, 
//   treeState: ObservableObject<TreeState>, 
// ) => {
//   const items: Record<TreeItemIndex, TreeItem> = {}
//   const conns = Object.entries(dataState.get())
//   const dbs = conns.map(v => Object.entries(v[1])).flat() // could cause problems is mutile databases have the same name
//   const tables = conns.map(v => Object.values(v[1]).map(v => v.tables)).flat(2) // could cause problems is mutiple tables have the same name

//   // db conn keys/name
//   items['root'] = {
//     index: 'root', 
//     isFolder: true, 
//     children: conns.map(v => v[0]), 
//     data: ''
//   }

//   // db name
//   conns.map(v => {
//     const dbKeys = Object.keys(v[1])
//     items[v[0]] = {
//       index: v[0],
//       isFolder: !!dbKeys.length,
//       children: dbKeys,
//       data: v[0]
//     }
//   })

//   dbs.map(v => {
//     items[v[0]] = {
//       index: v[0],
//       isFolder: !!v[1].tables.length,
//       children: v[1].tables,
//       data: v[0]
//     }
//   })

//   tables.forEach(tb => {
//     items[tb] = {
//       index: tb,
//       data: tb,
//     }
//   })

//   treeState.data.set(items)
// }