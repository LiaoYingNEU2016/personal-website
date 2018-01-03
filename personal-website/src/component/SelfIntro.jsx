import React from 'react';
import selfie from '../pics/self.jpg';
import {FaLinkedinSquare, FaGithubSquare, FaFacebookSquare, FaEnvelopeSquare} from 'react-icons/lib/fa'

const SelfIntro = (props) => {
  return (
    <div className="self-intro">
      <img src={selfie} alt="Ying Liao" className="circle" />
      <h1>Ying Liao</h1>
      <hr/>
      <div className="icon-container">
        <a href="https://www.facebook.com/chi.x.duo"><FaFacebookSquare /></a>
        <a href="https://www.linkedin.com/in/ying-liao-2018"><FaLinkedinSquare /></a>
        <a href="https://github.com/LiaoYingNEU2016"><FaGithubSquare /></a>
        <a href="mailto:liaoying.shufe@gmail.com"><FaEnvelopeSquare /></a>
      </div>
    </div>
  );
}

export default SelfIntro;