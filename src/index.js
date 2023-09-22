import React from "react";
import ReactDOM from "react-dom"
import "../index.css"
import Header from "./components/Header";
import Body from "./components/Body";

const AppLayout = () => {
    return (
        <div className="appLayout">
            <Header />
            <Body />
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<AppLayout />)