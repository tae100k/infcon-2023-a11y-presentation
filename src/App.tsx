import MainPage from "MainPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SubscribePage from "SubscribePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/subscribe" element={<SubscribePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
