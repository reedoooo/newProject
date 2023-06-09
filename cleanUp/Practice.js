import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default class Practice extends Component {
  render() {
    return (
      <Container>
        <Row>
            <Col className='grid-cols-1 h-screen border-black'>Col 1</Col>
            <Col className='grid-cols-2 h-screen border-black'>Col 2</Col>
            <Col className='grid-cols-3 h-screen border-black'>Col 3</Col>
            <Col className='grid-cols-4 h-screen border-black'>Col 4</Col>
        </Row>
      </Container>
    )
  }
}
 
// class App extends Component {
//   titles = [];
//   constructor(props) {
//     super();
//     this.state = {
//       foo: "bar",
//       basic_info: {},
//       projectData: {},
//     };
//   }

//   componentDidMount = () => {
//     this.loadProjectData("projects.json");
//     this.loadbasic_info("profile.json");
//   };
//   loadbasic_info = () => {
//     $.ajax({
//       url: `https://raw.githubusercontent.com/reedoooo/portfolio-prep/ec448c2d8401ec6dd2892d6ba5e7fca5a158d374/public/profile.json`,
//       dataType: "json",
//       cache: false,
//       success: function (data) {
//         this.setState({ basic_info: data });
//       }.bind(this),
//       error: function (xhr, status, err) {
//         console.log("Error loading profile data: ", err);
//         alert(err);
//       },
//     });
//   };

//   loadProjectData = () => {
//     $.ajax({
//       url: `https://raw.githubusercontent.com/reedoooo/portfolio-prep/ec448c2d8401ec6dd2892d6ba5e7fca5a158d374/public/projects.json`,
//       dataType: "json",
//       cache: false,
//       success: function (data) {
//         this.setState(
//           { projectData: data },
//           () => (document.title = `${this.state.projectData.basic_info.name}`)
//         );
//       }.bind(this),
//       error: function (xhr, status, err) {
//         console.log("Error loading project data: ", err);
//         alert(err);
//       },
//     });
//   };

//   render() {
//     console.log(this.state.projectData);
//     console.log(this.state.basic_info);

//     return (
//       <div className="MASTER-DIV">
//         <Header
//           basic_info={this.state.basic_info.basic_info}
//           projectData={this.state.projectData.basic_info}
//         />
//         <Main
//           basic_info={this.state.basic_info}
//           projectData={this.state.projectData}
//         />
//         <Footer />
//       </div>
//     );
//   }
// }

// export default App;
// body {
// 	background: linear-gradient(to top, #00172D, #00264D, #02386E, #00498D, #0052A2);
// }

// body {
// 	margin: 0;
// 	padding: 0;
// 	font-family: 'Roboto', sans-serif;
// }

// .container {
// 	width: 90%;
// 	margin: auto;
// }

// h1 {
// 	text-align: center;
// }

// #header {
// 	background-color: #4CAF50;
// 	color: #ffffff;
// 	padding: 10px;
// }

// #header::after {
// 	content: '';
// 	display: table;
// 	clear: both;
// }

// #navbar {
// 	z-index: 7;
// 	position: fixed;
// 	background-color: white;
// 	color: white;
// 	float: right;
// 	margin: 0;
// 	padding: 0;
// 	top: 10
// }

// #navbar li {
// 	display: inline-block;
// 	margin-left: 70px;
// }

// #navbar li a {
// 	display: block;
// 	color: white;
// 	text-align: center;
// 	padding: 14px 16px;
// 	text-decoration: none;
// }

// #navbar li a:hover {
// 	background-color: #111;
// }

// .active {
// 	background-color: #008CBA;
// 	border-radius: 10%;
// }

// #home {
// 	// background-image: url('https://www.w3schools.com/w3images/mountains.jpg');
// 	background-repeat: no-repeat;
// 	background-size: cover;
// 	min-height: 100vh;
// }

// #home .header-content {
// 	text-align: center;
// 	position: relative;
// 	top: 50%;
// 	transform: translateY(-50%);
// 	color: white;
// }

// #home .header-content h1 {
// 	font-size: 3.5rem;
// 	margin: 0;
// }

// #home .header-content p {
// 	font-size: 1.5rem;
// 	margin-bottom: 1.25rem;
// }

// #about .about-heading {

// 	text-align: center;
// }

// #about .about-heading h2 {
// 	font-size: 3rem;
// }

// #about .about-content {
// 	display: flex;
// 	justify-content: space-between;
// 	align-items: center;
// }

// #about .about-content .left-column {
// 	flex-basis: 50%;
// 	padding-right: 1rem;
// }

// #about .about-content .right-column {
// 	flex-basis: 50%;
// 	padding-left: 1rem;
// }

// #services .service-item {
// 	text-align: center;
// 	margin-bottom: 2rem;
// }

// #services .service-item h2 {
// 	font-size: 2.5rem;
// }

// #services .service-item p {
// 	font-size: 1rem;
// }




// #portfolio .portfolio-item {
// 	display: flex;
// 	justify-content: space-evenly;
// 	position: relative;
// 	overflow: hidden;
// 	margin-bottom: 20px;
// }

// #portfolio .portfolio-item .foto {
// 	position: relative;
// 	display: block;
// }

// #portfolio .portfolio-item .foto img {
// 	display: block;
// 	transition: all 0.2s ease-out;
// }

// #portfolio .portfolio-item .foto:hover img {
// 	transform: scale(1.2);
// }

// #portfolio .portfolio-item .project-date {
// 	display: block;
// 	position: absolute;
// 	top: 0;
// 	left: 0;
// 	padding: 5px 10px;
// 	font-size: 14px;
// 	font-weight: 600;
// 	background: #fff;
// 	color: #333;
// 	border-bottom-right-radius: 5px;
// }

// #portfolio .portfolio-item .project-title-settings {
// 	position: absolute;
// 	bottom: 0;
// 	left: 0;
// 	padding: 10px;
// 	width: 100%;
// 	background-color: rgba(0, 0, 0, 0.7);
// 	color: #fff;
// 	opacity: 0;
// 	transition: opacity 0.2s ease-out;
// }

// #portfolio .portfolio-item:hover .project-title-settings {
// 	opacity: 1;
// }

// #portfolio .portfolio-item .how-title {
// 	color: #fff;
// 	font-size: 16px;
// 	font-weight: bold;
// }

// #portfolio .portfolio-item .skill {
// 	margin-top: 5px;
// 	display: flex;
// 	align-items: center;
// }

// #portfolio .portfolio-item .skill p {
// 	margin: 0;
// 	font-size: 14px;
// 	font-weight: 600;
// }

// #portfolio .portfolio-item .skill-bar {
// 	height: 6px;
// 	width: 100%;
// 	background-color: #fff;
// 	margin: 0 5px;
// 	position: relative;
// }

// #portfolio .portfolio-item .skill-bar::before {
// 	content: "";
// 	position: absolute;
// 	height: 100%;
// 	top: 0;
// 	left: 0;
// 	background-color: #00baff;
// 	transition: width 0.3s ease-out;
// }

// #portfolio .portfolio-item .skill1 .skill-count1::after {
// 	content: '%';
// }

// #portfolio .portfolio-item .skill2 .skill-count2::after {
// 	content: '%';
// }

// #portfolio .portfolio-item .skill3 .skill-count3::after {
// 	content: '%';
// }

// #portfolio .portfolio-item .skill-count1 {
// 	color: #00baff;
// 	font-size: 14px;
// 	font-weight: 600;
// }

// #portfolio .portfolio-item .skill-count2 {
// 	color: #00baff;
// 	font-size: 14px;
// 	font-weight: 600;
// }

// #portfolio .portfolio-item .skill-count3 {
// 	color: #00baff;
// 	font-size: 14px;
// 	font-weight: 600;
// }

// #portfolio .portfolio-item .skill1 .skill-bar::before {
// 	width: 95%;
// }

// #portfolio .portfolio-item .skill2 .skill-bar::before {
// 	width: 85%;
// }

// #portfolio .portfolio-item .skill3 .skill-bar::before {
// 	width: 75%;
// }

// #portfolio .portfolio-item .skill .skill-count {
// 	position: absolute;
// 	top: -35px;
// 	right: -40px;
// 	color: #18d26e;
// 	font-size: 24px;
// 	font-weight: 700;
// 	letter-spacing: 1px;
// }

// #portfolio .portfolio-item .skill1 .skill-count1 {
// 	content: '95%';
// }

// #portfolio .portfolio-item .skill2 .skill-count2 {
// 	content: '85%';
// }

// #portfolio .portfolio-item .skill3 .skill-count3 {
// 	content: '75%';
// }






// #portfolio {
// 	background-color: #f5f5f5;
// 	width: auto;
// 	padding-top: 20px;
// }

// /* Portfolio Choices */
// .project-choices {
// 	display: flex;
// 	flex-wrap: wrap;
// 	justify-content: space-between;
// }

// /* Portfolio Items */
// .portfolio-item {
// 	position: relative;
// 	overflow: hidden;
// 	margin-bottom: 15px;
// 	border-radius: 5px;
// }

// #portfolio.col {
// 	display: flex;
// 	flex-direction: column;
// }

// .portfolio-item img {
// 	transition: all 0.3s ease 0s;
// }

// #portfolio .portfolio-item .project-date {
// 	position: absolute;
// 	top: 0;
// 	left: 0;
// 	background-color: #333333;
// 	color: #ffffff;
// 	font-size: 12px;
// 	padding: 5px 10px;
// 	opacity: 0.8;
// }

// #portfolio .portfolio-item .project-title-settings {
// 	margin-top: 15px;
// 	margin-bottom: 0;
// 	font-size: 20px;
// 	font-weight: 600;
// 	line-height: 24px;
// }

// /* Progress bars ---------------------------------------------------------*/
// .wrapper {
// 	margin-top: 1.5rem;
// }

// .how-title {
// 	margin-bottom: 10px;
// 	font-size: 18px;
// 	font-weight: 600;
// }

// .skill {
// 	margin-bottom: 10px;
// 	position: relative;
// }

// .skill p {
// 	font-size: 14px;
// 	font-weight: 500;
// 	margin-bottom: 5px;
// }

// .skill-bar {
// 	height: 15px;
// 	background-color: #f5f5f5;
// 	border-radius: 50px;
// 	position: relative;
// }

// .skill-count1 {
// 	position: absolute;
// 	right: 0;
// 	top: -25px;
// 	font-size: 12px;
// 	font-weight: 600;
// }

// .skill-count2 {
// 	position: absolute;
// 	right: 0;
// 	top: -25px;
// 	font-size: 12px;
// 	font-weight: 600;
// }

// .skill-count3 {
// 	position: absolute;
// 	right: 0;
// 	top: -25px;
// 	font-size: 12px;
// 	font-weight: 600;
// }

// /* Progress bar colors */
// .skill1 .skill-bar::before {
// 	content: '';
// 	position: absolute;
// 	left: 0;
// 	top: 0;
// 	bottom: 0;
// 	width: 95%;
// 	background-color: #007bff;
// 	border-radius: 50px;
// }

// .skill2 .skill-bar::before {
// 	content: '';
// 	position: absolute;
// 	left: 0;
// 	top: 0;
// 	bottom: 0;
// 	width: 85%;
// 	background-color: #dc3545;
// 	border-radius: 50px;
// }

// .skill3 .skill-bar::before {
// 	content: '';
// 	position: absolute;
// 	left: 0;
// 	top: 0;
// 	bottom: 0;
// 	width: 75%;
// 	background-color: #ffc107;
// 	border-radius: 50px;
// }

// .wrapper2 {
// 	align-items: center;
// 	margin-top: auto;
// 	margin-bottom: auto;
// }

// #portfolio .portfolio-item .wrapper {
// 	// background: #ffffff;
// 	// 	display: inline-block;
// 	// 	margin: 0 auto 5% auto;
// 	// 	padding: 10px 10px 5px;
// 	// 	text-align: center;
// 	// 	text-decoration: none;
// 	// 	-webkit-box-shadow: 0 4px 6px rgba(0, 0, 0, .3);
// 	// 	-moz-box-shadow: 0 4px 6px rgba(0, 0, 0, .3);
// 	// 	box-shadow: 0 4px 6px rgba(0, 0, 0, .3);
// 	// 	-webkit-transition: all .20s linear;
// 	// 	-moz-transition: all .20s linear;
// 	// 	transition: all .20s linear;
// 	// 	z-index: 0;
// 	// 	position: relative;
// 	margin-top: auto;
// 	margin-bottom: auto;
// 	position: absolute;
// 	width: auto;
// 	background-color: rgba(0, 0, 0, 0.7);
// 	color: #fff;
// }

// .div-main {
// 	margin-top: 5%;
// 	margin-bottom: 5%;
// 	display: flex;
// 	flex-direction: row;
// 	flex-grow: 1;
// }


// .foto div {
// 	background: #ffffff;
// 	align-items: center;
// 	display: inline-block;
// 	margin-top: auto;
// 	padding: 30px 30px 20px;
// 	text-align: center;
// 	text-decoration: none;
// 	-webkit-box-shadow: 0 4px 6px rgba(0, 0, 0, .3);
// 	-moz-box-shadow: 0 4px 6px rgba(0, 0, 0, .3);
// 	box-shadow: 0 4px 6px rgba(0, 0, 0, .3);
// 	-webkit-transition: all .20s linear;
// 	-moz-transition: all .20s linear;
// 	transition: all .20s linear;
// 	z-index: 0;
// 	position: relative;
// }






// /* Modal */
// .modal-dialog {
// 	max-width: 800px;
// 	margin: 1.75rem auto;
// }

// .modal-body {
// 	position: relative;
// 	padding: 20px 30px;
// }

// .modal-content .close {
// 	position: absolute;
// 	top: 0;
// 	right: 0;
// 	z-index: 1;
// 	padding: 1rem;
// 	background-color: #f5f5f5;
// }

// /* Modal --------------------------------------------------------------------*/
// .modal-content .close:hover {
// 	color: #f6a50b;
// }

// .modal-dialog {
// 	max-width: 80%;
// }

// .modal-header {
// 	background-color: #f6a50b;
// 	color: #ffffff;
// }

// .modal-header .modal-title {
// 	font-size: 24px;
// 	font-weight: 600;
// }

// .modal-body .project-date {
// 	margin-top: 15px;
// 	font-size: 14px;
// 	font-weight: 700;
// }

// .modal-body .project-description {
// 	margin-top: 15px;
// 	margin-bottom: 0;
// 	font-size: 16px;
// 	line-height: 24px;
// }

// .modal-body .project-description p {
// 	margin-bottom: 5px;
// }

// /* Project Details Modal -------------------------------------------------------------*/
// .modal-body .project-title-settings {
// 	margin-top: 30px;
// 	margin-bottom: 0;
// 	font-size: 20px;
// 	font-weight: 600;
// 	line-height: 24px;
// }

// .modal-body p {
// 	font-size: 16px;
// 	line-height: 24px;
// 	margin: 0;
// }

// .modal-body .project-description {
// 	margin-top: 30px;
// 	margin-bottom: 0;
// 	font-size: 16px;
// 	line-height: 24px;
// }

// .modal-body ul {
// 	margin-top: 30px;
// 	margin-bottom: 0;
// 	padding-left: 20px;
// }

// .modal-body ul li {
// 	font-size: 16px;
// 	line-height: 24px;
// }

// .modal-content {
// 	border-radius: 0;
// 	border: none;
// }

// .modal-header {
// 	border-bottom: none;
// }

// .modal-footer {
// 	border-top: none;
// }

// .modal-content .close {
// 	position: absolute;
// 	top: 15px;
// 	right: 15px;
// 	color: #222222;
// 	opacity: 1;
// 	font-size: 28px;
// 	font-weight: normal;
// }

// .modal-content .close:hover {
// 	color: #4c4c4c;
// 	opacity: 1;
// }

// .modal-content .close:focus {
// 	outline: none;
// }

// .modal-dialog {
// 	margin: 0;
// 	width: 100%;
// 	max-width: none;
// }

// @media (min-width: 576px) {
// 	.modal-dialog {
// 		max-width: 750px;
// 	}
// }

// @media (min-width: 768px) {
// 	.modal-dialog {
// 		max-width: 970px;
// 	}
// }

// @media (min-width: 992px) {
// 	.modal-dialog {
// 		max-width: 1170px;
// 	}

// 	.modal-content {
// 		min-height: 600px;
// 	}

// 	.modal-body {
// 		padding: 60px 80px;
// 	}

// 	.modal-body .project-title-settings {
// 		margin-top: 40px;
// 		font-size: 30px;
// 		line-height: 36px;
// 	}

// 	.modal-body .project-date {
// 		font-size: 18px;
// 		font-weight: 500;
// 		margin-top: 10px;
// 	}

// 	.modal-body .project-description {
// 		margin-top: 20px;
// 		font-size: 20px;
// 		font-weight: 500;
// 		line-height: 26px;
// 	}

// 	.modal-body .project-link {
// 		margin-top: 30px;
// 	}

// 	.modal-body .project-link a {
// 		color: #fff;
// 		background-color: #6c63ff;
// 		border-color: #6c63ff;
// 		font-size: 20px;
// 		font-weight: 600;
// 		padding: 10px 25px;
// 		border-radius: 5px;
// 		text-decoration: none;
// 		transition: all 0.3s ease;
// 	}

// 	.modal-body .project-link a:hover {
// 		background-color: #5b54d5;
// 		border-color: #5b54d5;
// 		transition: all 0.3s ease;
// 	}
// }

// /* Beginning of old CSS scraps ------------------------------------------------------*/

// span {
// 	color: #a3a3a3;
// }


// html {
// 	font-size: 62.5%;
// 	-webkit-font-smoothing: antialiased;
// 	margin: 0;
// 	padding: 0;
// }

// .aligner {
// 	display: flex;
// 	align-items: center;
// 	justify-content: center;
// }

// .title-container {
// 	height: 50px;
// }

// .title-styles {
// 	font-family: 'Raleway', sans-serif;
// 	font-size: 250%;
// }

// .header-icon {
// 	height: 150px;
// 	width: 150px;
// }

// header {
// 	position: relative;
// 	height: 520px;
// 	min-height: 450px;
// 	width: 100%;
// 	// background: linear-gradient(to bottom, #00172D, #00264D, #02386E, #00498D, #0052A2);
// 	// background-repeat: no-repeat;
// 	background-attachment: fixed;
// 	text-align: center;
// 	overflow: hidden;
// 	padding-top: 150px;
// 	padding-bottom: 0;
// }



// .vstack .background .transparentbox {
// 	margin: auto;
// 	display: flex;
// 	flex-grow: 1;
// 	width: 50%;
// 	align-items: center;
// 	justify-content: center;
// }

// .vstack .background .transparentbox #portfolio {
// 	margin: auto;
// 	padding: 10px;
// 	display: flex;
// 	flex-grow: 1;
// 	width: 50%;
// 	align-items: center;
// 	justify-content: center;
// }

// //transparent box for about section
// #about .background .transparentbox {
// 	margin: auto;
// 	margin-top: 10rem;
// 	margin-bottom: 10rem;
// 	display: flex;
// 	flex-grow: 1;
// 	width: 95%;
// 	align-items: center;
// 	justify-content: center;
// }

// #about .background .transparentbox #portfolio {
// 	display: flex;
// 	flex-grow: 1;
// 	height: auto;
// 	width: 95%;
// 	align-items: center;
// 	justify-content: center;
// }

// #about .background .transparentbox #portfolio .aboutCol {
// 	padding: 10px;
// 	display: flex;
// 	flex-grow: 1;
// 	width: 50%;
// 	align-items: center;
// 	justify-content: center;
// }

// /*QuickReset*/
// * {
// 	margin: 0;
// 	box-sizing: border-box;
// }

// html,
// body {
// 	// height: 100%;
// 	font: 14px/1.4 sans-serif;
// }

// input,
// textarea {
// 	font: 14px/1.4 sans-serif;
// }

// .input-group {
// 	display: table;
// 	border-collapse: collapse;
// 	width: 100%;
// }

// .input-group>div {
// 	display: table-cell;
// 	border: 1px solid #ddd;
// 	vertical-align: middle;
// 	/* needed for Safari */
// }

// .input-group-icon {
// 	background: #eee;
// 	color: #777;
// 	padding: 0 12px
// }

// .input-group-area {
// 	width: 100%;
// }

// .input-group input {
// 	border: 0;
// 	display: block;
// 	width: 100%;
// 	padding: 8px;
// }

// // div.foto {
// // 	display:flex;
// // 	justify-content: left;
// // }

// // .flexBox {
// // 	display: flex;
// // 	flex-direction: row;
// // }

// .github-corner:hover .octo-arm {
// 	animation: octocat-wave 560ms ease-in-out
// }

// @keyframes octocat-wave {

// 	0%,
// 	100% {
// 		transform: rotate(0)
// 	}

// 	20%,
// 	60% {
// 		transform: rotate(-25deg)
// 	}

// 	40%,
// 	80% {
// 		transform: rotate(10deg)
// 	}
// }

// @media (max-width:500px) {
// 	.github-corner:hover .octo-arm {
// 		animation: none
// 	}

// 	.github-corner .octo-arm {
// 		animation: octocat-wave 560ms ease-in-out
// 	}
// }

// .project-date {
// 	font-size: 16px;
// 	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
// 	padding: 8px 15px 2px 15px;
// 	position: relative;
// 	z-index: -500;
// 	border-top: 5px solid #696969;
// 	border-radius: 0 0 5px 5px;
// 	background-color: #696969;
// 	color: white;
// }

// .skills-tile {
// 	background-color: transparentize(#F8F5F4, 0.95);
// 	padding: 10px 10px 5px 10px;
// 	width: 100px;
// 	margin: 5px 0 5px 0;
// 	border-radius: 8px;
// }

// header {
// 	color: #a3a3a3;
// }

// header h1 {
// 	font-size: 400%;
// 	text-align: center;
// 	font-weight: 600 !important;
// 	color: #a3a3a3;
// 	font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
// 	margin: 0 auto 18px auto;
// 	width: 100%;
// }

// .slider-image {
// 	border: 5px solid #D7CAAA;
// }

// .slider-tab {
// 	background-color: #D7CAAA;
// 	height: 25px;
// }

// .slider-iconfiy {
// 	margin-top: 10px;
// }

// .styles_typicalWrapper__1_Uvh::after {
// 	cursor: none !important;
// 	display: none;
// }

// #about {
// 	background: transparent;
// 	overflow: hidden;
// }

// #about h1 {
// 	padding-top: 5%;
// 	font: 3rem 'opensans-bold', sans-serif;
// 	text-transform: uppercase;
// 	letter-spacing: 3px;
// 	color: black;
// 	text-align: center;
// }

// .foto img {
// 	display: block;
// 	width: 100%;
// }



// .foto div:after {
// 	color: #333;
// 	font-size: 25px;
// 	content: attr(title);
// 	position: relative;
// 	top: 15px;
// }

// .foto div:hover {
// 	-webkit-transform: scale(1.01);
// 	-moz-transform: scale(1.01);
// 	transform: scale(1.01);
// 	z-index: 10;
// 	-webkit-box-shadow: 0 10px 20px rgba(0, 0, 0, .7);
// 	-moz-box-shadow: 0 10px 20px rgba(0, 0, 0, .7);
// 	box-shadow: 0 10px 20px rgba(0, 0, 0, .7);
// }

// .progressBars {
// 	width: 65%;
// }

// //Projects Page invisible boxes
// div.transparentbox {
// 	margin: 30px;
// 	background-color: rgb(255, 255, 255, .2);
// 	border-radius: 15px;
// 	// filter: alpha(opacity=60);
// 	/* This is for IE8 and other earlier browsers */
// }

// div.transparentbox p {
// 	margin: .5%;
// 	color: #000000;
// 	font-weight: bold;
// }

// .project-title-settings {
// 	margin-top: 5%;
// 	font: 18px/24px 'opensans-bold', sans-serif;
// 	text-transform: uppercase;
// 	letter-spacing: 3px;
// 	color: black;
// 	text-align: center;
// }

// .polaroid img {
// 	display: block;
// 	max-width: 200px;
// }

// .polaroid span {
// 	background: #ffffff;
// 	display: inline-block;
// 	margin: 55px 75px 30px;
// 	padding: 15px 15px 30px;
// 	text-align: center;
// 	text-decoration: none;
// 	-webkit-box-shadow: 0 4px 6px rgba(0, 0, 0, .3);
// 	-moz-box-shadow: 0 4px 6px rgba(0, 0, 0, .3);
// 	box-shadow: 0 4px 6px rgba(0, 0, 0, .3);
// 	-webkit-transition: all .20s linear;
// 	-moz-transition: all .20s linear;
// 	transition: all .20s linear;
// 	z-index: 0;
// 	position: relative;
// }

// .link-href {
// 	color: #a3a3a3;
// 	// color: black;
// }

// .wave {
// 	font-size: 160%;
// }

// .font-trebuchet {
// 	font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
// }

// #preview {
// 	width: 500px;
// 	background-color: #ebeaf5;
// 	padding: 15px;
// 	position: relative;
// 	margin-bottom: 15%;
// }

// .center {
// 	display: flex;
// 	justify-content: center;
// 	align-items: center;
// }

// #resume {
// 	background-color: transparent;
// 	// background: linear-gradient(to top, #00172D, #00264D, #02386E, #00498D, #0052A2);
// 	background-repeat: no-repeat;
// 	padding-bottom: 5%;
// }

// .experience-icon {
// 	font-size: 300%;
// 	margin-top: 25%;
// 	text-align: center;
// }

// .main-badge {
// 	font-size: 13px !important;
// 	text-align: left !important;
// 	padding: 5px 8px 5px 8px !important;
// 	vertical-align: baseline;
// 	background-color: #AE944F !important;
// 	color: white;
// 	font-weight: lighter !important;
// 	font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
// }

// .experience-badge {
// 	font-size: 11px !important;
// 	text-align: left !important;
// 	padding: 5px 8px 5px 8px !important;
// 	vertical-align: baseline;
// 	background-color: #f9f5e9 !important;
// 	color: black;
// 	font-weight: lighter !important;
// 	font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
// }

// .vertical-timeline-element-date {
// 	padding: 0 !important;
// 	margin: 0 !important;
// }

// @media only screen and (max-width: 1170px) {
// 	.experience-icon {
// 		font-size: 170%;
// 		margin-top: 27%;
// 		text-align: center;
// 	}
// }

// .modal-inside .modal-content {
// 	background: white;
// }



// .bars {
// 	width: 95%;
// 	float: left;
// 	padding: 0;
// 	text-align: left;
// }

// .bars .skills {
// 	margin-top: 36px;
// 	list-style: none;
// }

// .bars li {
// 	position: relative;
// 	margin-bottom: 60px;
// 	background: #ccc;
// 	height: 42px;
// 	border-radius: 3px;
// }

// .bars li em {
// 	font: 15px 'opensans-bold', sans-serif;
// 	color: #313131;
// 	text-transform: uppercase;
// 	letter-spacing: 2px;
// 	font-weight: normal;
// 	position: relative;
// 	top: -36px;
// }

// .bar-expand {
// 	position: absolute;
// 	left: 0;
// 	top: 0;
// 	margin: 0;
// 	padding-right: 24px;
// 	background: #313131;
// 	display: inline-block;
// 	height: 42px;
// 	line-height: 42px;
// 	border-radius: 3px 0 0 3px;
// }

// .modal-close {
// 	text-align: right;
// 	padding: 10px 15px 10px 15px;
// 	cursor: pointer;
// }

// .close-icon {
// 	color: black;
// 	font-weight: lighter !important;
// }

// .modal-description {
// 	text-align: justify;
// 	padding: 5px 5px 0 5px;
// 	margin-bottom: 20px;
// 	font-size: 12px;
// }

// .awssld__next {
// 	outline: none !important;
// }

// .awssld__prev {
// 	outline: none !important;
// }

// .loader-bar-color {
// 	color: black !important;
// }

// #portfolio {
// 	background-color: transparent;
// 	// background: linear-gradient(to top, #00172D, #00264D, #02386E, #00498D, #0052A2);
// 	// background-repeat: no-repeat;
// 	padding-bottom: 2rem;
// 	margin: 1%;
// 	height: 10
// }

// .portfolio-item {
// 	display: flex;
// 	justify-content: space-between;
// 	max-width: 100%;
// 	margin-bottom: 15px;
// 	text-align: center;
// }

// .portfolio .portfolio-item .portfolio-item-caption {
// 	-webkit-transition: all ease 0.5s;
// 	-moz-transition: all ease 0.5s;
// 	transition: all ease 0.5s;
// 	opacity: 0;
// 	background-color: rgba(51, 51, 51, 0.9);
// }

// .portfolio .portfolio-item .portfolio-item-caption:hover {
// 	opacity: 1;
// }

// .portfolio .portfolio-item .portfolio-item-caption .portfolio-item-caption-content {
// 	font-size: 1.5rem;
// }

// @media (min-width: 576px) {
// 	.portfolio .closeButtonResponsive {
// 		display: block;
// 	}

// 	.portfolio .portfolio-item {
// 		margin-bottom: 30px;
// 	}
// }

// #skills {
// 	background-color: transparent;
// 	// background: linear-gradient(to bottom, #00172D, #00264D, #02386E, #00498D, #0052A2);
// 	min-height: 200px;
// 	width: 100%;
// 	overflow: hidden;
// 	padding-bottom: 10%;
// }

// .section-title {
// 	padding-top: 5%;
// 	padding-bottom: 5%;
// 	font: 24px/36px 'opensans-bold', sans-serif;
// 	text-transform: uppercase;
// 	letter-spacing: 3px;
// 	color: #a3a3a3;
// 	text-align: center;
// }

// .skill-icon {
// 	font-size: 180%;
// 	color: white;
// 	text-align: center;
// 	position: relative;
// }

// footer {
// 	background-color: transparent;
// 	// background: linear-gradient(to top, #00172D, #00264D, #02386E, #00498D, #0052A2);
// 	// background-repeat: no-repeat;
// 	min-height: 100px;
// 	width: 100%;
// 	overflow: hidden;
// 	font-size: 14px;
// 	position: relative;
// 	text-align: center;
// }

// footer a,
// footer a:visited {
// 	color: #fff;
// }

// footer a:hover,
// footer a:focus {
// 	color: #fff;
// }