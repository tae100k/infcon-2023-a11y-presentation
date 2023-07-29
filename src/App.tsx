import CollectionPage from "pages/CollectionPage";
import MainPage from "pages/MainPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SubscribePage from "pages/SubscribePage";

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
