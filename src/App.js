import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Generate from "./Generate";
import Home from "./Home";
import Loader from "./Loader";

function App() {

  const [text, setText] = useState([]);
  const [startDestination, setStartDestination] = useState("");
  const [endDestination, setEndDestination] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  return (
      <Router>
        <Routes>
          <Route
            path="/generate"
            element={
              <Generate
                text={text}
                setText={setText}
                startDestination={startDestination}
                endDestination={endDestination}
                startDate={startDate}
                endDate={endDate}
              />
            }
          />
          <Route
            path="/"
            element={
              <Home
                text={text}
                setText={setText}
                startDestination={startDestination}
                setStartDestination={setStartDestination}
                endDestination={endDestination}
                setEndDestination={setEndDestination}
                startDate={startDate}
                setStartDate={setStartDate}
                endDate={endDate}
                setEndDate={setEndDate}
              />
            }
          />
        </Routes>
      </Router>
  );
}

export default App;
