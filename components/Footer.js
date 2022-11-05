import React from "react"

export default function Footer() {
    return (
        <footer className="footer"> 
            <ul className="footer--list">
                <li> <a href="https://twitter.com" className="footer--link"> <i className="bi bi-twitter"></i></a> </li>
                <li> <a href="https://facebook.com" className="footer--link"> <i className="bi bi-facebook"></i></a> </li>
                <li> <a href="https://instagram.com" className="footer--link"> <i className="bi bi-instagram"></i></a> </li>
                <li> <a href="https://github.com" className="footer--link"> <i className="bi bi-github"></i></a> </li>
            </ul>
        </footer>
    )
}