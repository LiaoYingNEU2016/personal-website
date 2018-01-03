import React from 'react';

const About = (props) => {
  return (
    <div className="about">
      <h1>About</h1>
      <hr/>
      <div className="about-paragraph">
        <p>Hello, I am Ying Liao, a graduating student from Northeastern University, majoring in Information System. I am passionate about coding and always keep learning new stuff. I've spent this summer at <a href="https://www.messenger.com/">Facebook Messenger</a> as a mobile engineering intern. I've also worked as a TA for Java class.</p>
        <p>If you would like to collaborate or just say hello, feel free to contact me at <a href="mailto:liaoying.shufe@gmail.com">liaoying.shufe@gmail.com</a></p>
        <p>Scroll down to read more about my previous projects.</p>
      </div>
    </div>
  );
}

export default About;