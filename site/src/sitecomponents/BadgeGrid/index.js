import React from 'react';
import CertificationProgram from "../../../static/assets/badges/certification-program/certification-program.png";
import MeshMasterCertified from "../../../static/assets/badges/meshmaster-certified/meshmaster-certified.png";

import BadgesWrapper from './Badges.styles';
const jsonData = require('../../badgesInfo.json');

const Footer = () => {
  return (
    <BadgesWrapper>
      <h2>Achievement Badges</h2>
      <div className="badge-grid">
        {jsonData.achievementBadges.map((badge) => {
          return (
            <div key={badge.slug}>
              <img src={badge.location} alt="Khulnasoft badges" />
              <span>{badge.title}</span>
              <p>{badge.description}</p>
            </div>
          );
        })}
      </div>

      <h2>Project Badges</h2>

      <div className="badge-grid">
        {jsonData.projectBadges.map((badge) => {
          return (
            <div key={badge.slug}>
              <img src={badge.imageSource} alt="Khulnasoft badges" />
              <span>{badge.title}</span>
              <p dangerouslySetInnerHTML={{__html: badge.description}}></p>
            </div>
          );
       })}
      </div>
     
<h2 id="certification">Certification Badges</h2>
    <div className="badge-grid">
        <div>
        <img src={MeshMasterCertified} alt="Khulnasoft badges" />
          <span>MeshMaster</span> <p>This badge is awarded to individuals who have demonstrated a clear and holistic understanding of cloud native infrastructure management.</p>
        </div>
        <div>
        <img src={CertificationProgram} alt="Khulnasoft badges" />
          <span>Coming Soon...</span> <p>Additional certications are coming soon!</p>
        </div>
      </div>
    </BadgesWrapper>
  )
}

export default Footer; 
