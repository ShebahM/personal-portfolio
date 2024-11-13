import React, {Component} from 'react';
import './introduction.css';
import Avatar from 'material-ui/Avatar';


class IntroductionComponent extends Component {
    render() {
        return (
          <div className="introduction">
            <Avatar src="Shebah.png" size={250}/>
            <p className="introduction-text">
              Loves Python, knitting and porridge.
              Professional Eater.
              Software developer, currently living in the UK. Open to remote work.
            </p>
          </div>
        );
    }
}

export default IntroductionComponent;
