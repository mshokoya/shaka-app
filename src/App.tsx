// import { GridLayout } from "./components/Layout/Grid/Layout";
import { Theme } from '@radix-ui/themes';
import { MongoDBView } from "./modules/mongo/View";

function App() {

  return (
  <Theme>
    <MongoDBView />
  </Theme>
  );
}

export default App;
