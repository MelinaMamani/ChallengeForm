import Main from "./components/Main";
import PersonState from "./context/person/PersonState";

function App() {
  return (
    <PersonState>
      <Main/>
    </PersonState>
  );
}

export default App;
