import Navbar from "./Navbar";
import Home from "./Home";
import Create from "./Create";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Blogdetails from "./BLogdetails";
import NotFound from "./NotFound";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/create" Component={Create} />
            <Route path="/blogs/:id" Component={Blogdetails} />
            <Route path="*" Component={NotFound} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
