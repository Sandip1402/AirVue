import './Footer.css'
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { TiArrowForward } from "react-icons/ti";

export default function Footer() {

    return (
        <footer id="footer">
            <div id="socials"><span>Follow Us:</span>
            <ul>
                <li><a href="https://www.facebook.com/"><FaSquareFacebook /></a></li>
                <li><a href="https://www.instagram.com/"><FaInstagramSquare /></a></li>
                <li><a href="https://www.x.com/"><FaSquareXTwitter /></a></li>
            </ul>
            </div>

            <div id="links"><span>Useful Links:</span>
                <ul>
                <li><a href=""><TiArrowForward />Home</a></li>
                <li><a href=""><TiArrowForward />Your Location</a></li>
                <li><a href=""><TiArrowForward />Get Weather</a></li>
                <li><a href=""><TiArrowForward />Get update on Mail</a></li>
                </ul>
            </div>

            <div id="about"><span>About Us:</span>
                <p>Welcome to <span style={{color: "#6547ff"}}>AirVue</span>, your go-to source for accurate and up-to-date 
                    weather forecasts. Whether you're planning your daily commute, a weekend getaway, 
                    or simply staying prepared for changing conditions, we provide real-time weather
                     updates, detailed forecasts, and expert insights to keep you informed.</p>
            </div>
      </footer>
    )
}