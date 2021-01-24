import './App.css';

import Dashboard from "./components/Dashboard/Dashboard";
import TopNav from "./components/TopNav/TopNav";
import Footer from "./components/Footer/Footer1";
import AboutUs from "./components/AboutUs/AboutUs";
import ContactUs from "./components/ContactUs/ContactUs";
import UserCard from "./components/Card/UserCard";
import Cart from "./components/Cart/Cart";
import Login from "./components/SignIN_UP/Login";
import Register from "./components/SignIN_UP/Register";
import Category from "./components/Category/Category";
import Register from "./components/SignIN_UP/Register";

import { useRoutes } from "hookrouter";

const routes = {
  '/AboutUs': () => <AboutUs/>,
  '/ContactUs': () => <ContactUs/>,
  '/register': () => <Register/>,
  '/login': () => <Login/>,
}

function App() {
  const match = useRoutes(routes)
  return (
    <div className="App">
      {/* <TopNav/>
      <Category/>
      <Cart/>
      {match}
      <Cart/>
      <UserCard/>
      <Dashboard/>
      <Footer/> */}
    </div>
  );
}

export default App;
