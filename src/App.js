import Home from "./pages/home";
import Header from "./components/header/index"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/footer";
import AddExpense from "./pages/add-expense";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/add-expense" exact element={<AddExpense/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
