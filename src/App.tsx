// import { GridLayout } from "./components/Layout/Grid/Layout";
import { MongoDBView } from "./modules/mongo/View";

function App() {

  return (
  // <GridLayout/>
  <MongoDBView treeID={'mongoTreeState'} dbState={'mongo'} />
  );
}

export default App;
