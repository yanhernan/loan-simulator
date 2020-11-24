import "antd/dist/antd.css";
import "./App.css";
import { LayoutApp } from "./components/LayoutApp";
import Routes from "./Routes";

function App() {
  return <LayoutApp>
    <Routes />
  </LayoutApp>;
}

export default App;
