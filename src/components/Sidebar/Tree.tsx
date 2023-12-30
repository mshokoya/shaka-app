import { state$, TreeState } from "../../core/state"

import { 
  TreeItemIndex,
  TreeItem,
  UncontrolledTreeEnvironment,
  Tree,
  StaticTreeDataProvider
} from 'react-complex-tree'
import { ObservableObject } from '@legendapp/state';

type Props = {
  state: ObservableObject<TreeState>
}


export const TreeComp = ({state}: Props) => {
  


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
    ? stateLayout = stateLayout....
  
}
