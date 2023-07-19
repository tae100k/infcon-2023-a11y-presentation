import CollectionPage from "CollectionPage";
import MainPage from "MainPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SubscribePage from "SubscribePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/subscribe" element={<SubscribePage />}></Route>
        <Route path="/collection" element={<CollectionPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
