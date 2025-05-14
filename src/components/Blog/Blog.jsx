import React from 'react';
import './Blog.css';
import BlogImage from '../../assets/blog/blog.jpg';

export default function Blog() {
  return (
    <>
    <section id="blog">
        <div className="container">
            <div className="blog_wrapper">
                <div className="blog_col">
                    <h3>WE HELP BUSINESSES LAUNCH, GROW AND SUCCEED</h3>
                    <p>We partner with businesses at every stage of their journey — from initial launch and market entry to sustainable growth and long-term success. By combining strategic insight, innovative promotional solutions, and cloud-powered efficiency, we empower our clients to build strong foundations, expand their reach, and achieve measurable results in competitive markets.</p>
                    <div className="btn_wrapper">
                        <a className="btn" href="/">Get Started</a>
                    </div>
                </div>
                <div className="blog_col">
                    <div className="blog_image">
                        <img src={BlogImage} alt="Blog" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
