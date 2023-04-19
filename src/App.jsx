import Header from "./components/header";
import { Tasklist } from "./Tasklist";
import Tasklist from "./components/Tasklist";

function App() {
  return (
    <div className="App">
      <Header />
      <Tasklist List={tasklist}/>
    </div>
  );
}

export default App;
