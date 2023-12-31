import { Tree } from "../../components/Sidebar/Tree"
import { TreeState, DBDataState, state$, DBData, MongoDisplay } from "../../core/state"
import { ObservableObject as O } from '@legendapp/state';
import { dbTreeInitInState } from "../../core/util";
import { Table } from "../../components/DBTable/Table";
import { TreeItem } from "react-complex-tree";

export const MONGO_DB_STATE = 'mongo'

export const MongoDBView = () => {
  console.log('mongo view render')

  const displayState = (state$.display.mongo as O<MongoDisplay>).peek();
  const tree = state$.data[displayState.tree] as O<TreeState>
  const table = state$.data[displayState.table] as O<DBData>

  if (!Object.keys(tree.data.peek()).length){
    const state = state$.data[MONGO_DB_STATE].data as O<DBDataState>
    dbTreeInitInState(state, tree)
  }

  const handleTreeClick = (item: TreeItem<any>) => {
    
  }
  
  return (
    <div>
      <Tree state={tree} handleClick={handleTreeClick} />
      <Table state={table} />
      <div></div>
    </div>
  )
}