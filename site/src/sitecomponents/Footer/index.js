import React from 'react';
import SlackIcon from '../../assets/images/social-icons/slack.svg';
import DockerIcon from '../../assets/images/social-icons/docker.svg';
import YoutubeIcon from '../../assets/images/social-icons/youtube.svg';
import TwitterIcon from '../../assets/images/social-icons/twitter.svg';
import GithubIcon from '../../assets/images/social-icons/github.svg';
import CalendarIcon from '../../assets/images/social-icons/calendar.png';
import LinkedinIcon from '../../assets/images/social-icons/linkedin.png';
import FooterWrapper from './Footer.styles';

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="container">
        <div className="footer-links resources">
          <h3 className="section-title">
            <a className="title-link" href="https://layer5.io/community">
              Project
            </a>
          </h3>
          <ul className="section-categories">
            <li>
              <a className="category-link" href="https://layer5.io/calendar">
                <img src={CalendarIcon} alt="Calendar Icon" />
                Calendar
              </a>
            </li>

            <li>
              <a
                className="category-link"
                href="https://hub.docker.com/u/layer5/"
              >
                <img src={DockerIcon} alt="Docker Icon" />
                Docker Hub
              </a>
            </li>
            <li>
              <a className="category-link" href="https://slack.layer5.io/">
                <img src={SlackIcon} alt="Slack Icon" />
                Slack
              </a>
            </li>
            <li>
              <a className="category-link" href="https://github.com/layer5io/">
                <img src={GithubIcon} alt="GitHub Icon" />
                Github
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-links getting-started">
          <h3 className="section-title">
            <a className="title-link" href="https://layer5.io/community">
              Getting Started
            </a>
          </h3>
          <ul className="section-categories">
            <li>
              <a className="category-link" href="https://docs.meshplay.io/">
                Docs
              </a>
            </li>
            <li>
              <a className="category-link" href="https://meshplay.io/features">
                Features
              </a>
            </li>
            <li>
              <a
                className="category-link"
                href="https://layer5.io/cloud-native-management/meshplay/integrations"
              >
                Integrations
              </a>
            </li>
            <li>
              <a
                className="category-link"
                href="https://meshplay.io/#getting-started"
              >
                Run Meshery
              </a>
            </li>
            <li>
              <a
                className="category-link"
                href="https://meshplay.layer5.io/catalog"
              >
                Meshery Catalog
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-links community">
          <h3 className="section-title">
            <a className="title-link" href="https://meshplay.io/community">
              Community
            </a>
          </h3>
          <ul className="section-categories">
            <li>
              <a className="category-link" href="https://discuss.layer5.io/">
                Discussion Forum
              </a>
            </li>
            {/* <li>
              <a
                className="category-link"
                href="https://meshplay.io/blog"
              >Blog
              </a>
            </li> */}
            <li>
              <a className="category-link" href="https://meshplay.layer5.io">
                Layer5 Cloud
              </a>
            </li>
            <li>
              <a
                className="category-link"
                href="https://layer5.io/community/members"
              >
                Community Members
              </a>
            </li>
            <li>
              <a
                className="category-link"
                href="/leaderboard"
              >
                Community Leaderboard
              </a>
            </li>
            <li>
              <a
                className="category-link"
                href="https://layer5.io/community/events/"
              >
                Community Events
              </a>
            </li>
            <li>
              <a className="category-link" href="https://layer5.io/subscribe">
                Mailing Lists
              </a>
            </li>

            <li>
              <a
                className="category-link"
                href="https://layer5.io/service-mesh-landscape"
              >
                Service Mesh Comparison
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-links resources">
          <h3 className="section-title">
            <a className="title-link" href="https://layer5.io/resources">
              Social
            </a>
          </h3>
          <ul className="section-categories">
            <li>
              <a className="category-link" href="https://twitter.com/layer5">
                <img src={TwitterIcon} alt="Twitter Icon" />
                Twitter
              </a>
            </li>
            <li>
              <a
                className="category-link"
                href="https://www.youtube.com/channel/UCFL1af7_wdnhHXL1InzaMvA"
              >
                <img src={YoutubeIcon} alt="Youtube Icon" />
                Youtube
              </a>
            </li>
            <li>
              <a
                className="category-link"
                href="https://www.linkedin.com/company/layer5/"
              >
                <img src={LinkedinIcon} alt="Linkedin Icon" />
                Linkedin
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container flex copyright">
        <div className="text">
          &copy; {new Date().getFullYear()}- The Layer5 Authors
        </div>
        <div className="text">Empowering engineers all around the world</div>
        <div className="text">
          <a href="https://layer5.io/about">About</a>
        </div>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
