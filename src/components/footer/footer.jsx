import React, { Component } from 'react';
import './footer.css';
import FlatButton from 'material-ui/FlatButton';
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
const scrollTo = require('scroll-to');

class FooterComponent extends Component {

  onScrollToTop() {
    scrollTo(0, 0, {
      ease: 'out-bounce',
      duration: 2000
    });
  }

  render() {
    return (
      <div className="footer">
        <div className="link-list">
          <a target="_blank" href="https://github.com/ShebahM">
            <FaGithub /> Github
          </a>
          <a target="_blank" class="linkedin" href="https://www.linkedin.com/in/shebah-mimano-72704519b/">
            <FaLinkedin /> LinkedIn
          </a>
<<<<<<< HEAD
          <a target="_blank" class="instagram" href="https://www.instagram.com/queeny_shebah/">
            <FaInstagram /> Instagram
=======
           /
          <a target="_blank" href="https://www.xing.com/profile/Sara_Steiert">
            Xing
          </a>
           /
          <a target="_blank" href="https://www.linkedin.com/in/sara-steiert-b0a631134/">
            
>>>>>>> 0a45b18 (updated portfolio)
          </a>
        </div>
        <FlatButton labelStyle={{
          "color": "rgba(0, 0, 0, 0.65)"
        }} label="Back to top" onClick={this.onScrollToTop} />
        <div class="copyright"><small>Site designed by Shebah Mimano.<br/> &#169; Copyright 2024 Shebah Mimano. All Rights Reserved.</small></div>

      </div>
    );
  }
}

export default FooterComponent;
