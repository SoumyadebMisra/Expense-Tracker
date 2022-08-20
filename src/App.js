import "./styles.css";
import Header from "./components/Header";
import History from "./components/History";
import NewTrans from "./components/NewTrans";
import { GlobalProvider } from "./context/globalState";

export default function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <Header />
        <History />
        <NewTrans />
      </GlobalProvider>
    </div>
  );
}
