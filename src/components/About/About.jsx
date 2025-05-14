import React from 'react';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBusinessTime, faChartPie, faTruckFast, faUserClock, faHouseLaptop, faPhone } from '@fortawesome/free-solid-svg-icons';
import AboutImage from '../../assets/about/about_img.jpg';

export default function About() {
    // Icons
    const faBusinessIcon = <FontAwesomeIcon icon={faBusinessTime} />
    const faChartPieIcon = <FontAwesomeIcon icon={faChartPie} />
    const faTruckFastIcon = <FontAwesomeIcon icon={faTruckFast} />
    const faUserClockIcon = <FontAwesomeIcon icon={faUserClock} />
    const faHouseLaptopIcon = <FontAwesomeIcon icon={faHouseLaptop} />
    const faPhoneIcon = <FontAwesomeIcon icon={faPhone} />

  return (
    <>
    <section id="about">
        <div class="container">
            <div className="title_headling">
                <h3>We provide you with remarkable ideas.</h3>
                <p> Whether you're launching a product, building brand awareness, or refining your business strategy, we offer personalized service with the precision and professionalism of a larger firm — all while maintaining the flexibility and attention to detail that only a dedicated team can provide.</p>
            </div>
            <div className="about_box_wrapper">
                <div className="about_box">
                    <div className="about_icon">
                        {faBusinessIcon}
                    </div>
                    <div className="about_content">
                        <h5>Development</h5>
                        <p>We craft tailored promotional strategies that support long-term business growth and adaptability.</p>
                    </div>
                </div>
                <div className="about_box">
                    <div className="about_icon green_icon">
                        {faChartPieIcon}
                    </div>
                    <div className="about_content">
                        <h5>Integration</h5>
                        <p>Our cloud-based solutions seamlessly integrate with your existing systems to enhance efficiency and collaboration.</p>
                    </div>
                </div>
                <div className="about_box">
                    <div className="about_icon blue_icon">
                        {faTruckFastIcon}
                    </div>
                    <div className="about_content">
                        <h5>Branding</h5>
                        <p>We build strong, consistent brand identities that resonate across platforms and drive lasting engagement.</p>
                    </div>
                </div>
            </div>

            <div className="about_box_details">
                <div className="about_col">
                    <div className="about_image">
                        <img src={AboutImage} alt="about" className="about_main"/>
                    </div>
                    <div className="img_info__box">
                        <h6 className="img_info__title">GET A PRICE QUOTE TODAY!</h6>
                        <p>Reach as out as soon as possible  <br/>get a competitive and reasonable quotes from our consultants.</p>
                        <a href="/">{faPhoneIcon} <span>1-800-654-3210</span></a>
                    </div>
                </div>
                <div className="about_col more_space">
                    <h3>We have business skills that will increase your earnings</h3>
                    <p>With a deep understanding of business strategy and market dynamics, our team delivers tailored solutions that are specifically designed to enhance operational efficiency, strengthen your competitive edge, and significantly increase your revenue potential.</p>

                    <div className="grid_info">
                        <div className="icon">{faUserClockIcon}</div>
                        <div className="detail">
                            <h4>Start your own business in minutes</h4>
                            <p>If you are looking for a team to work with you side by side to fulfil your dream of starting a business, look no further. We are here for you every step of the way on this journey .</p>
                        </div>
                    </div>
                    <div className="grid_info">
                        <div className="icon green_icon">{faHouseLaptopIcon}</div>
                        <div className="detail">
                            <h4>Open a business account online</h4>
                            <p>We are a focused, results-oriented promotional agency that blends strategic insight with the power of cloud technology.So start your business with our help online or expand it the same.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
