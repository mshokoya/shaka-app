import { state$ } from "../../core/state"
import { 
  TreeItemIndex,
  TreeItem,
  UncontrolledTreeEnvironment,
  Tree,
  StaticTreeDataProvider
} from 'react-complex-tree'

type Props = {
  
}


export const TreeComp = ({}: Props) => {
  const data = dbtree('mongodb')

  return (
    <UncontrolledTreeEnvironment
      dataProvider={ new StaticTreeDataProvider(data, (item, data) => ({...item, data})) }
      getItemTitle={(item) => item.data}
      viewState={}
    >
      <Tree treeId="tree-1" rootItem="root" treeLabel="Tree Example" />
    </UncontrolledTreeEnvironment>
  )
}

const viewState = (display: string, layout: string, component?: string) => {
  let stateLayout = state$.display[display as 'mongodb'].layout[layout as 'default']

  layout === 'defualt'
    ? stateLayout = stateLayout.
  
}


// (FIX) could cause problems if db and collection has same name 
const dbtree = (module: string): Record<TreeItemIndex, TreeItem> => {
  const items: Record<TreeItemIndex, TreeItem> = {}
  // (FIX) remove 'as 'mongodb'' & 'as 'testconnkey'' '

  const conns = Object.entries(state$.module[module as 'mongodb'].get())

  // (FIX) make it so conn, db & table iterations are seprate
  conns.forEach( conn => {
    let dbs = Object.entries(conn[1])
    let tables = dbs.map(db => Object.keys(db[1].tables)).flat()

    items[conn[0]] = {
      index: items['root'] ? 'root' : conn[0],
      data: conn[0],
      isFolder: !!dbs.length,
      children: dbs.map(db => db[0])
    }

    dbs.forEach(db => {
      const tables = Object.keys(db[1].tables)
      items[db[0]] = {
        index: db[0],
        data: db[0],
        isFolder: !!tables.length,
        children: tables
      }
    })

    tables.forEach(tb => {
      items[tb] = {
        index: tb,
        data: tb,
      }
    })
  })

  return items
}