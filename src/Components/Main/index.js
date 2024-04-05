import React, { useState } from 'react';
import './style.css'; // Import your CSS file here

const WebsiteComponent = () => {
    const [showNav, setShowNav] = useState(false);

    const toggleMenu = () => {
        setShowNav(!showNav);
    };

    return (
        <>
            <section className="header">
                <nav>
                    <a href="index.html"><img src="images/logo.JPG" alt="Logo" /></a>
                    <div className={showNav ? "nav-links show" : "nav-links"} id="navLinks">
                        <i className="fa fa-times" onClick={toggleMenu}></i>
                        <ul>
                            <li><a href="home">HOME</a></li>
                            <li><a href="about">ABOUT</a></li>
                            <li><a href="courses">FACILITIES</a></li>
                            <li><a href="blog">LOGIN</a></li>
                            <li><a href="contact">CONTACT</a></li>
                        </ul>
                    </div>
                    <i className="fa fa-bars" aria-hidden="true" onClick={toggleMenu}></i>
                </nav>
                
                <div className="message">
                    <h1>Welcome to CODERANK</h1>
                    <p>Your go-to destination for coding challenges and community!</p>
                    <p>Coding: because every idea deserves a chance</p>
                    <a href="" className="hero-btn">Visit Us To know More</a>
                </div>
            </section>

            <section className="course">
                <h1>DIVE INTO OUR LEARNING RESOURCES</h1>
                <h3>FullStack Development, AWS, DataScience, Python, Java, C Programming</h3>
                <div className="row">
                    <div className="course-col">
                        <h3>Coding Challenges</h3>
                        <p> CODERANK's coding challenges feature offers an immersive learning experience, allowing users to enhance their programming skills in Java, Python, and C. These challenges cater to users of all levels, from beginners to experts, covering a wide range of topics and difficulty levels. By engaging with these challenges, users can apply their knowledge, tackle real-world problems, and strengthen their coding proficiency. Each challenge is thoughtfully designed to stimulate creativity, problem-solving, and critical thinking. Participation not only improves coding skills but also fosters resilience, adaptability, and collaboration—essential qualities in the tech industry. CODERANK's coding challenges provide a rewarding learning journey, promoting growth, mastery, and community engagement in programming.</p>
                    </div>
                    <div className="course-col">
                        <h3>Video Tutorials</h3>
                        <p> CODERANK's Video Tutorials offer an enriching educational resource for users seeking comprehensive learning experiences. Covering a spectrum of programming languages, frameworks, and concepts, these tutorials cater to diverse skill levels, from novice learners to seasoned developers. Through engaging and informative videos, users can explore fundamental concepts, practical coding techniques, and advanced topics in an accessible and digestible format. Whether users are looking to grasp foundational principles or delve into complex programming paradigms, CODERANK's Video Tutorials provide a structured pathway for continuous learning and skill development. With expert instructors guiding the way, users can gain valuable insights, hone their craft, and unlock their full potential in the ever-evolving landscape of technology.</p>
                    </div>
                    <div className="course-col">
                        <h3>Coding Exercises</h3>
                        <p> CODERANK's Coding Exercises feature serves as an invaluable tool for users to apply and reinforce their programming skills. With a diverse array of exercises covering various programming languages and concepts, users can embark on a journey of practical learning and skill-building. From simple algorithms to complex data structures, these exercises provide hands-on opportunities to solve real-world problems and refine coding proficiency. Designed to challenge and inspire, each exercise encourages users to think critically, experiment with different approaches, and iterate on their solutions. Whether users are aspiring programmers or seasoned professionals, CODERANK's Coding Exercises offer a dynamic and engaging platform for continuous improvement and mastery of the art of coding.</p>
                    </div>
                </div>
            </section>

            <section className="campus">
                <h1>Platform Highlights</h1>
                <p>CODERANK's Platform Highlights epitomize our commitment to modern coding education. We offer a dynamic learning environment packed with interactive challenges, comprehensive study materials, engaging video tutorials, and practical coding exercises. Our platform prioritizes accessibility, practicality, and community engagement, ensuring a rewarding experience for learners at every level. Whether you're a beginner or an experienced developer, CODERANK provides the tools and resources you need to thrive in the world of coding.</p>
                <div className="row">
                    <div className="campus-col">
                        <img src="https://iabac.org/blog/uploads/images/202305/image_870x_646f3831c8e4a.jpg" alt="Coding" />
                        <div className="layer">
                            <h3>CODING</h3>
                        </div>
                    </div>
                    <div className="campus-col">
                        <img src="https://softteco.com/wp-content/uploads/2023/12/Pseudocode_big-new-min-1.png" alt="Pseudocode" />
                        <div className="layer">
                            <h3>PSEUDOCODE</h3>
                        </div>
                    </div>
                    <div className="campus-col">
                        <img src="https://techmonitor.ai/wp-content/uploads/sites/4/2016/07/shutterstock_1915506901.webp" alt="Framework" />
                        <div className="layer">
                            <h3>FRAMEWORK</h3>
                        </div>
                    </div>
                </div>
            </section>

            <section className="facilities">
                <h1>Facilities</h1> 
                <p>Welcome to our state-of-the-art facilities designed to enhance your learning experience. Equipped with cutting-edge technology and modern amenities, our facilities provide a conducive environment for academic and extracurricular activities. From well-equipped laboratories to spacious classrooms and recreational areas, we ensure that every aspect of your educational journey is supported. Our commitment to excellence extends beyond academics, as we strive to create a nurturing environment that fosters personal growth and development. Explore our facilities and discover the endless possibilities that await you.</p>
                <div className="row">
                    <div className="facilities-col">
                        <img src="https://img.freepik.com/free-vector/leaderboard-with-abstract-background_52683-51485.jpg" alt="Leader Board" />
                        <h3>Leader Board </h3>
                        <p>Discover our cutting-edge facilities,</p>
                    </div>
                    <div className="facilities-col">
                        <img src="https://assets.hongkiat.com/uploads/freelancers-why-join-online-forums/online-forum.jpg" alt="Engagement Hub" />
                        <h3>Engagement Hub </h3>
                        <p>Welcome to our Engagement Hub, the vibrant nucleus of our community. Here, ideas intertwine, collaborations flourish, and innovation ignites. Join us where interactions drive us towards shared goals.</p>
                    </div>
                    <div className="facilities-col">
                        <img src="https://blog.internshala.com/wp-content/uploads/2023/10/What-are-Problem-Solving-Skills.jpg" alt="Problem Solving" />
                        <h3>Problem Solving</h3>
                        <p>Problem-solving drives innovation, turning obstacles into opportunities through creative exploration and analytical thinking.</p>
                    </div>
                </div>
            </section>

            <section className="testimonial">
                <h1>Meet our Founder</h1>
                <p>Meet our visionary Founder, the driving force behind our mission and values. Explore their journey and the inspiration behind our platform.</p>
                <div className="row">
                    <div className="testimonial-col">
                        <img src="https://learnblog.s3.ap-south-1.amazonaws.com/learn/wp-content/uploads/2023/07/22115133/Study-in-UK-1.png" alt="Founder" />
                        <div>
                            <p>Empowering individuals through innovation and collaboration.</p>
                            <h3>Founder</h3>
                            <i className="fa fa-youtube-play"></i>
                            <i className="fa fa-share" ></i>
                            <i className="fa fa-star" ></i>
                        </div>
                    </div>
                    <div className="testimonial-col">
                        <img src="https://www.casita.com/images/files/public/03112019054409PM-casita-student-blog-student-accommodation-university-life-(1).jpg" alt="Co-founder" />
                        <div>
                            <p>Our Platform Unveiled: A Closer Look at Our Mission, Vision, and Impact</p>
                            <h3>Co-founder</h3>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cta">
                <h1>Enroll for our various Online Programming</h1>
                <a href="" className="hero-btn">CONTACT US</a>
            </section>

            <section className="footer">
                <h4>About us</h4>
                <p>Connect with Us: Stay Updated with Our Latest News and Updates!</p>
                <div className="icons">
                    <i className="fa fa-youtube-play"></i>
                    <i className="fa fa-youtube-play"></i>
                    <i className="fa fa-youtube-play"></i>
                    <i className="fa fa-youtube-play"></i>
                    <i className="fa fa-youtube-play"></i>
                </div>
                <div className="copyright">
                    <p>&copy; 2024 Your Website Name. All rights reserved.</p>
                </div>
                <p>Made with <i className="fa fa-youtube-play"></i> by Easy Tutorials</p>
            </section>
        </>
    );
};

export default WebsiteComponent;
