import { TreeState } from "../../core/state";
import { 
  ControlledTreeEnvironment,
  Tree as TreeComp,
} from 'react-complex-tree';
import { ObservableObject, observable } from '@legendapp/state';

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





// import { TreeState } from "../../core/state";
// import { 
//   UncontrolledTreeEnvironment,
//   ControlledTreeEnvironment,
//   Tree as TreeComp,
//   StaticTreeDataProvider,
// } from 'react-complex-tree';
// import { ObservableObject } from '@legendapp/state';
// import { useState } from "react";

// type Props = {
//   state: ObservableObject<TreeState>
// }

// const lol = {dsadadas: 'dsljhasdjka'}


//   const items = {
//     root: {
//       index: 'root',
//       isFolder: true,
//       children: ['child1', 'child2'],
//       data: 'Root item',
//     },
//     child1: {
//       index: 'child1',
//       children: ['child3'],
//       isFolder: true,
//       data: 'Child item 1',
//     },
//     child2: {
//       index: 'child2',
//       isFolder: true,
//       children: [],
//       data: 'Child item 2',
//     },
//     child3: {
//       index: 'child3',
//       children: [],
//       data: 'Child item 3',
//     },
//   };




// export const Tree = ({state}: Props) => {

//   const [hehe, sethehe] = useState({});

//   const hc = () => {
//     console.log(hehe)
//   }


//   return (
//     <>
//     <button onClick={hc}>check</button>
//       <UncontrolledTreeEnvironment
//         dataProvider={ new StaticTreeDataProvider(items, (item, data) => ({...item, data})) }
//         getItemTitle={(item) => item.data}
//         viewState={hehe}
//         onExpandItem={() => {console.log('expand')}}
//         onCollapseItem={() => {console.log('collapse')}}
//       >
//         <TreeComp treeId="tree-1" rootItem="root" treeLabel="Tree Example" />
//       </UncontrolledTreeEnvironment>
//     </>
//   )
// }


{/* <button onClick={handleClick}>check state</button>
<UncontrolledTreeEnvironment
  dataProvider={ new StaticTreeDataProvider(items, (item, data) => ({...item, data})) }
  getItemTitle={(item) => item.data}
  viewState={states}
  onFocusItem={handleFocus}
  onExpandItem={handleFocus}
>
  <TreeComp treeId="tree-1" rootItem="root" treeLabel="Tree Example" />
</UncontrolledTreeEnvironment> */}





// import { TreeState } from "../../core/state";
// import { 
//   UncontrolledTreeEnvironment,
//   ControlledTreeEnvironment,
//   Tree as TreeComp,
//   StaticTreeDataProvider,
// } from 'react-complex-tree';
// import { ObservableObject } from '@legendapp/state';
// import { useState } from "react";

// type Props = {
//   state: ObservableObject<TreeState>
// }

// const lol = {dsadadas: 'dsljhasdjka'}


//   const items = {
//     root: {
//       index: 'root',
//       isFolder: true,
//       children: ['child1', 'child2'],
//       data: 'Root item',
//     },
//     child1: {
//       index: 'child1',
//       children: ['child3'],
//       isFolder: true,
//       data: 'Child item 1',
//     },
//     child2: {
//       index: 'child2',
//       isFolder: true,
//       children: [],
//       data: 'Child item 2',
//     },
//     child3: {
//       index: 'child3',
//       children: [],
//       data: 'Child item 3',
//     },
//   };




// export const Tree = ({state}: Props) => {

//   const [focusedItem, setFocusedItem] = useState();
//   const [expandedItems, setExpandedItems] = useState([]);
//   const [hehe, sethehe] = useState({
//     ['tree-3']: {
//       focusedItem,
//       expandedItems,
//     },
//   });

//   const hc = () => {
//     console.log(hehe)
//   }


//   return (
//     <>
//     <button onClick={hc}>check</button>
// <ControlledTreeEnvironment
//       items={{
//         root: {
//           index: 'root',
//           canMove: true,
//           isFolder: true,
//           children: ['child1'],
//           data: 'Root item',
//           canRename: true,
//         },
//         child1: {
//           index: 'child1',
//           canMove: true,
//           isFolder: true,
//           children: ['child2'],
//           data: 'Child item',
//           canRename: true,
//         },
//       }}
//       getItemTitle={item => item.data}
//       viewState={hehe}
//       onFocusItem={item => setFocusedItem(item.index)}
//       onExpandItem={item => setExpandedItems([...expandedItems, item.index])}
//     >
//       <TreeComp treeId="tree-3" rootItem="root" treeLabel="Tree Example" />
//     </ControlledTreeEnvironment>
//     </>
    
//   )
// }