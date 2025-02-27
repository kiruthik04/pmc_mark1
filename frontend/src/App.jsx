import Page from "./app/dashboard/page";
import LoginPage from "./app/login/page";
import { BrowserRouter, Routes, Route } from "react-router";

function App(){
  return( <BrowserRouter>
  <Routes>
    <Route path="/login" element={<LoginPage />} />
    <Route path="/" element={<Page />} />
  </Routes>
</BrowserRouter>)
}
export default App;