import { TreeState } from "../../core/state";
import { 
  ControlledTreeEnvironment,
  Tree as TreeComp,
  TreeItem,
} from 'react-complex-tree';
import { ObservableObject } from '@legendapp/state';

type Props = {
  state: ObservableObject<TreeState>
  handleClick: (item: TreeItem<any>) => void;
}

export const Tree = ({state, handleClick}: Props) => {

  const onClick = (item: TreeItem<any>) => {
    state.state.root.assign({focusedItem: item.index})
    handleClick(item)
  }

  return (
    <ControlledTreeEnvironment
      items={state.data.peek()}
      getItemTitle={item => item.data}
      viewState={state.state.get()}
      onFocusItem={onClick}
      onExpandItem={item => state.state.root.expandedItems.set( (p) => p.concat(item.index) ) }
      onCollapseItem={item => state.state.root.expandedItems.set( (p) => p.filter((v) => v !== item.index) ) }
      onSelectItems={item => state.state.root.selectedItems.set(item)}
    >
      <TreeComp treeId="root" rootItem="root" treeLabel="Tree Example" />
    </ControlledTreeEnvironment>    
  )
}