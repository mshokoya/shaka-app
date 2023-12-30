import { TreeState } from "../../core/state";
import { 
  ControlledTreeEnvironment,
  Tree as TreeComp,
} from 'react-complex-tree';
import { ObservableObject } from '@legendapp/state';

type Props = {
  state: ObservableObject<TreeState>
}

export const Tree = ({state}: Props) => {


  return (
    <ControlledTreeEnvironment
      items={state.data.peek()}
      getItemTitle={item => item.data}
      viewState={state.state.get()}
      onFocusItem={item => state.state.root.assign({focusedItem: item.index})}
      onExpandItem={item => state.state.root.expandedItems.set( (p) => p.concat(item.index) ) }
      onCollapseItem={item => state.state.root.expandedItems.set( (p) => p.filter((v) => v !== item.index) ) }
      onSelectItems={item => state.state.root.selectedItems.set(item)}
    >
      <TreeComp treeId="root" rootItem="root" treeLabel="Tree Example" />
    </ControlledTreeEnvironment>    
  )
}