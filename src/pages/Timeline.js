import React from 'react'
import "../assets/css/pages/timeline.css"
import html from "../assets/images/html.png"
import css from "../assets/images/css.png"
import bootstrap from "../assets/images/Bootstrap.png"
import javascript from "../assets/images/Javascript.png"
import jquery from "../assets/images/jquery.jpg"
import reacti from "../assets/images/reacti.png"
import nodejs from "../assets/images/nodejs.png"
import expressjs from "../assets/images/expressjs.png"
import api from "../assets/images/api.png"
import sql from "../assets/images/sql.png"
import mdb from "../assets/images/mdb.jpeg"
import dep from "../assets/images/dep.jpg"
function Timeline() {
    
    // const hmodule = (event)=>{
    //     event.preventDefault();
    //     window.location = '../pages/Html.js';
    // }
    return (
        <>
        <div className="timeline-container">

        
        <h1 id="heading">Frontend Development</h1>
        <div className="main-container">
		<div className="text-wrapper left">
			<div className="content">
				<h3 id="heading">HTML</h3>
                <img className="imgsize" src={html} alt="html"/>
			</div>
		</div>
		<div className="text-wrapper right">
			<div className="content">
				<h3 id="heading">CSS</h3>
				<img className="imgsize" src={css} alt="css"/>
			</div>
		</div>
		<div className="text-wrapper left">
			<div className="content">
				<h3 id="heading">Bootstrap</h3>
				<img className="imgsize" src={bootstrap} alt="bootstrap"/>
			</div>
		</div>
		<div className="text-wrapper right">
			<div className="content">
				<h3 id="heading" >Javascript</h3>
				<img className="imgsize" src={javascript} alt="javascript"/>
			</div>
		</div>
        <div className="text-wrapper left">
			<div className="content">
				<h3 id="heading">jQuery</h3>
				<img className="imgsize" src={jquery} alt="jquery"/>
			</div>
		</div>
        <div className="text-wrapper right">
			<div className="content">
				<h3 id="heading">React</h3>
				<img className="imgsize" src={reacti} alt=""/>
			</div>
		</div>
	</div>
        <h1 id="heading">Backend Development</h1>
        <div className="main-container">
		<div className="text-wrapper left">
			<div className="content">
				<h3 id="heading">Nodejs</h3>
                <a href="../pages/Auth/Html.js"><img className="imgsize" src={nodejs} alt="nodejs"/></a>
			</div>
		</div>
		<div className="text-wrapper right">
			<div className="content">
				<h3 id="heading">Expressjs</h3>
				<img className="imgsize" src={expressjs} alt="expressjs"/>
			</div>
		</div>
		<div className="text-wrapper left">
			<div className="content">
				<h3 id="heading">API</h3>
				<img className="imgsize" src={api} alt="api"/>
			</div>
		</div>
		<div className="text-wrapper right">
			<div className="content">
				<h3 id="heading">SQL</h3>
				<img className="imgsize" src={sql} alt="sql"/>
			</div>
		</div>
        <div className="text-wrapper left">
			<div className="content">
				<h3 id="heading">MongoDB</h3>
				<img className="imgsize" src={mdb} alt="mongodb"/>
			</div>
		</div>
        <div className="text-wrapper right">
			<div className="content">
				<h3 id="heading">Deploy</h3>
				<img className="imgsize" src={dep} alt="deploy"/>
			</div>
		</div>
	</div>
    </div>
        </>
    )
}

export default Timeline;