import Landing from "./components/Landing";
import './App.scss'
import { useEffect } from "react";


function App() {

  useEffect(()=>{
    document.title = 'Medzzy';
  });

  return (
    <div className="App">
      <Landing/>
    </div>
  );
}

export default App;
