import react from "react";
import Counterbutton from "./counter-example/Counterbutton";
import Countervalue from "./counter-example/Countervalue";
import Bloglist from "./BlogApp/Bloglist";
import Addnewblog from "./BlogApp/Addnewblog";

function App() {
  return (
    <>
      <h1 style={{textAlign:"center"}}>Blog App</h1>
      <Addnewblog />
      <Bloglist />
    </>
  );
}

export default App;
