import { Tree } from "../../components/Sidebar/Tree"
import { TreeState, DBDataState, state$ } from "../../core/state"
import { ObservableObject as O } from '@legendapp/state';
import { dbTreeInitInState } from "../../core/util";

type Props = {
  treeID: string
  dbState: string
}

export const MongoDBView = ({treeID, dbState}: Props) => {

  const tree = state$.data[treeID] as O<TreeState>
  const state = state$.data[dbState].data as O<DBDataState>

  if (!Object.keys(tree.data.peek()).length){
    dbTreeInitInState(state, tree)
  }
  
  return (
    <div>
      <Tree state={tree} />
      <div>jghklhkgjfh</div>
      <div></div>
    </div>
  )
}