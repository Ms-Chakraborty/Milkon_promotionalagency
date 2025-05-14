import React from 'react';
import './Services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faChartBar, faCopy, faMarker, faUserGear, faCoins } from '@fortawesome/free-solid-svg-icons';

export default function Services() {

    // Icons
    const faLaptopCodeIcon = <FontAwesomeIcon icon={faLaptopCode} />
    const faChartBarIcon = <FontAwesomeIcon icon={faChartBar} />
    const faCopyIcon = <FontAwesomeIcon icon={faCopy} />
    const faMarkerIcon = <FontAwesomeIcon icon={faMarker} />
    const faUserGearIcon = <FontAwesomeIcon icon={faUserGear} />
    const faCoinsIcon = <FontAwesomeIcon icon={faCoins} />
  return (
    <>
     <div id="services">
        <div className="container">
            <div className="title_headling">
                <h3>What's Services We Are Offering to Our Customers</h3>
                <p>We help our customers strategize to promote company's product and increase visibility. Reach as to truly understand your audience and take your business to the next level.</p>
            </div>
            <div className="service_wrapper">
                <div className="service_box">
                    <div className="service_icon blue_icon">{faLaptopCodeIcon}</div>
                    <h4 className="number">01</h4>
                    <div className="service_content">
                        <h5>Cloud Computing</h5>
                        <p> We harness the power of cloud computing to supercharge your marketing campaigns.</p>
                        <a href="/" className="read">Read more</a>
                    </div>
                </div> 
                <div className="service_box">
                    <div className="service_icon">{faChartBarIcon}</div>
                    <h4 className="number">02</h4>
                    <div className="service_content">
                        <h5>Business Strategy</h5>
                        <p>We will work with you to understand your target audience, competitive landscape, and marketing goals.</p>
                        <a href="/" className="read">Read more</a>
                    </div>
                </div>
                <div className="service_box">
                    <div className="service_icon green_icon">{faCopyIcon}</div>
                    <h4 className="number">03</h4>
                    <div className="service_content">
                        <h5>Reports Analysis</h5>
                        <p>We will help you improve your website ranking on search engine results, truly understanding the feedback and planning accordingly.</p>
                        <a href="/" className="read">Read more</a>
                    </div>
                </div>
                <div className="service_box">
                    <div className="service_icon">{faMarkerIcon}</div>
                    <h4 className="number">04</h4>
                    <div className="service_content">
                        <h5>Decision Maker</h5>
                        <p>We will help you reach multiple solutions while making sure you take the ultimate call.</p>
                        <a href="/" className="read">Read more</a>
                    </div>
                </div>
                <div className="service_box">
                    <div className="service_icon green_icon">{faUserGearIcon}</div>
                    <h4 className="number">05</h4>
                    <div className="service_content">
                        <h5>Customer Oriented</h5>
                        <p>We will help you reach you audience , assess their wants and needs and plan accordingly.</p>
                        <a href="/" className="read">Read more</a>
                    </div>
                </div>
                <div className="service_box">
                    <div className="service_icon blue_icon">{faCoinsIcon}</div>
                    <h4 className="number">06</h4>
                    <div className="service_content">
                        <h5>Solution Focused</h5>
                        <p>We focus on being solution driven no matter the problems and its constraints.</p>
                        <a href="/" className="read">Read more</a>
                    </div>
                </div>
            </div>
        </div>
     </div>
    </>
  )
}
