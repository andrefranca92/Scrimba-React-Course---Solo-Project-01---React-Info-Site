import React from "react"

export default function Info() {
    return (
        <div className="info"> 
            
            <img className="info--image" src="./images/a.jpg" />
            
            <h1 className="info--name"> André França </h1>
            <h2 className="info--role"> Tech Leader / Developer </h2>
            <h3 className="info--website"> http://andrefranca.tech.com </h3>
            
            <div className="info--buttons">
                <button type="button" className="info--button-email"> <i className="bi bi-envelope-fill"></i> E-mail </button>
                <button type="button" className="info--button-linkedin"> <i className="bi bi-linkedin"></i> LinkedIn </button>
            </div>
            
        </div>
    )
}