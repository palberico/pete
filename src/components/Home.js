import React, { Component } from 'react';
import Pete from '../images/pete.jpg';
import Resume from '../images/resume.png';


class Home extends Component {
  render() {
    return (
     <div>
        <div className="borderBox1 borderBox1-s borderBox1-m borderBox1-l">
          <div className="redBox redBox-s redBox-m redBox-l">
            <div className="title1 title1-s title1-m title1-l">PETE ALBERICO</div>
            <div className="title2 title2-s title2-m title2-l">web developer</div>
            <img className="imagePete imagePete-s imagePete-m imagePete-l" src={Pete} alt="Pete Alberico" />
          </div>
        </div>
        <div className="borderBox2 borderBox2-s borderBox2-m borderBox2-l">
          <div className="greenBox greenBox-s greenBox-m greenBox-l">
            <div className="greenBoxTxt greenBoxTxt-s greenBoxTxt-m greenBoxTxt-l">about me</div>
          </div>
            <div className="yellowBox yellowBox-s yellowBox-m yellowBox-l"></div>
        </div>
        <div className="borderBox3 borderBox3-s borderBox3-m borderBox3-l">
          <div className="blueBox blueBox-s blueBox-m blueBox-l">
            <div className="title2 title2-s title2-m title2-l">projects</div>
          </div>
        </div>
        {/* <div className="resumeBox"> */}
        {/* <img className="imageResume" src={Resume} alt="Pete Alberico Resume" /> */}
        {/* </div> */}
     </div>
    );
  }
}

export default Home;
