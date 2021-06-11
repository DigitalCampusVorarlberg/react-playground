import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Layout from "./components/Layout/Layout";
import {useEffect, useState} from "react";
import axios from "axios";
import Starship from "./components/Starship/Starship";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Cars from "./pages/Cars/Cars";
import Home from "./pages/Home/Home";
import SubmitCar from "./pages/SubmitCar/SubmitCar";


function App() {
    const items = [{title: "Start", url: "/"}, {title: "Cars", url: "/cars"}, {title: "Submit", url: "/submit"}];

    return (
        <Router>

            <div className="App">
                <Navbar logoUrl="https://logoipsum.com/logo/logo-24.svg" menuItems={items}/>
                <Layout>
                    <Switch>
                        <Route path="/cars">
                            <Cars />
                        </Route>
                        <Route path="/submit">
                            <SubmitCar />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </Layout>
            </div>
        </Router>
    );
}

export default App;
