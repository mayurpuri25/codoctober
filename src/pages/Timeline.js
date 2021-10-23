import React from "react";
import "../assets/css/pages/timeline.css";
// import html from "../assets/images/html.png";
// import css from "../assets/images/css.png";
// import bootstrap from "../assets/images/Bootstrap.png";
// import javascript from "../assets/images/Javascript.png";
// import jquery from "../assets/images/jquery.jpg";
// import reacti from "../assets/images/reacti.png";
// import nodejs from "../assets/images/nodejs.png";
// import expressjs from "../assets/images/expressjs.png";
// import api from "../assets/images/api.png";
// import sql from "../assets/images/sql.png";
// import mdb from "../assets/images/mdb.jpeg";
// import dep from "../assets/images/dep.jpg";
function Timeline() {
  return (
    <>
	
    <div className="timeline">
        <div className="modules left">
            <div className="content">
                <h2 className="log"><a href="https://www.google.com">HTML</a></h2>
                <p>
                    HTML (Hypertext Markup Language) is the code that is used to structure a web page and its content.
                </p>
            </div>
        </div>
        <div className="modules right">
            <i className="icon fa fa-gift"></i>
            <div className="content">
                <h2><a href="https://www.google.com">CSS</a></h2>
                <p>
                    CSS (Cascading Style Sheets) is used to style and layout web pages — for example, font, color, size,
                    and spacing, split it into multiple columns, or add animations and other decorative features.
                </p>
            </div>
        </div>
        <div className="modules left">
            <i className="icon fa fa-user"></i>
            <div className="content">
                <h2><a href="https://www.google.com">Bootstrap</a></h2>
                <p>
                    Bootstrap is a free and open source front end development framework for the creation of websites and
                    web apps.
                </p>
            </div>
        </div>
        <div className="modules right">
            <i className="icon fa fa-running"></i>
            <div className="content">
                <h2><a href="https://www.google.com">Javascript</a></h2>
                <p>
                    JavaScript is a lightweight, cross-platform, and interpreted scripting language. It is well-known
                    for the development of web pages, many non-browser environments also use it.
                </p>
            </div>
        </div>
        <div className="modules left">
            <i className="icon fa fa-cog"></i>
            <div className="content">
                <h2><a href="https://www.google.com">React</a></h2>
                <p>
                    React. js is an open-source JavaScript library that is used for building user interfaces
                    specifically for single-page applications. It's used for handling the view layer for web and mobile
                    apps.
                </p>
            </div>
        </div>
        <div className="modules right">
            <div className="date"></div>
            <i className="icon fa fa-certificate"></i>
            <div className="content">
                <h2><a href="https://www.google.com">NodeJs</a></h2>
                <p>
                    Node. js is primarily used for non-blocking, event-driven servers, due to its single-threaded
                    nature. It's used for traditional web sites and back-end API services, but was designed with
                    real-time, push-based architectures in mind.
                </p>
            </div>
        </div>
        <div className="modules left">
            <i className="icon fa fa-cog"></i>
            <div className="content">
                <h2><a href="https://www.google.com">ExpressJs</a></h2>
                <p>
                    Express provides a minimal interface to build our applications. It provides us the tools that are required to build our app. It is flexible as there are numerous modules available on npm, which can be directly plugged into Express.
                </p>
            </div>
        </div>
        <div className="modules right">
            <div className="date"></div>
            <i className="icon fa fa-certificate"></i>
            <div className="content">
                <h2><a href="https://www.google.com">ExpressJs</a></h2>
                <p>
                    An application programming interface is a connection between computers or between computer programs.
                    It is a type of software interface, offering a service to other pieces of software
                </p>
            </div>
        </div>
        <div className="modules left">
            <i className="icon fa fa-cog"></i>
            <div className="content">
                <h2><a href="https://www.google.com">SQL</a></h2>
                <p>
                    SQL is a domain-specific language used in programming and designed for managing data held in a
                    relational database management system, or for stream processing in a relational data stream
                    management system
                </p>
            </div>
        </div>
        <div className="modules right">
            <div className="date"></div>
            <i className="icon fa fa-certificate"></i>
            <div className="content">
                <h2><a href="https://www.google.com">MongoDB</a></h2>
                <p>
                    MongoDB is a source-available cross-platform document-oriented database program. classNameified as a
                    NoSQL database program, MongoDB uses JSON-like documents with optional schemas.
                </p>
            </div>
        </div>
        <div className="modules left">
            <i className="icon fa fa-cog"></i>
            <div className="content">
                <h2><a href="https://www.google.com">Deploy</a></h2>
                <p>
                    Now it's time to go ahead and deploy your project.
                    All the best!!!
                </p>
            </div>
        </div>
    </div>
    </>
  );
}

export default Timeline;
