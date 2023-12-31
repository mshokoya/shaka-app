// import { GridLayout } from "./components/Layout/Grid/Layout";
import { Table } from "./components/DBTable/Table";
import { MongoDBView } from "./modules/mongo/View";
import { Theme } from '@radix-ui/themes';

function App() {

  return (
  <Theme>
    {/* <MongoDBView treeID={'mongoTreeState'} dbState={'mongo'} /> */}
    <Table tableId="mongoTableState" tableState="" />
  </Theme>
  );
}

export default App;
