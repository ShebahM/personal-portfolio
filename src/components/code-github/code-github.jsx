import React, {Component} from 'react';
import {
    Card,
    CardHeader,
    CardActions,
    CardText
} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import './code-github.css';

class CodeGithubComponent extends Component {

    render() {
        return (
            <div>
            <p className="headline">Look at my code, my code is amazing</p>
                <div className="code-github">
              
                <Card>
                  <CardHeader
                    subtitle="Github Repository"
                    title="ShebahM/personal-portfolio"
                    avatar="github.png"
                  />
                <CardText>
                        This application is made with React and Material UI. Check out the code on Github. <br/>
                        Forked from salomonelli/personal-portfolio. <br/>
                        Check out the code on Github.
                    </CardText>
                    <CardActions>
                        <FlatButton label="View on github" href="https://github.com/ShebahM/personal-portfolio" target="_blank"/>
                    </CardActions>
                </Card>
                <Card>
                  <CardHeader
                    subtitle="Github Repository"
                    title="ShebahM/GiftsofGrace-static-website"
                    avatar="github.png"
                  />
                <CardText>
                        This application is made with JavaScript, HTML and SCSS/CSS. <br/>
                        Check out the code on Github.
                    </CardText>
                    <CardActions>
                        <FlatButton label="View on github" href="https://github.com/ShebahM/GiftsofGrace-static-website" target="_blank"/>
                    </CardActions>
                </Card>
                <Card>
                  <CardHeader
                    subtitle="Gitlab Repository"
                    title="client-work3/provirtuehealthcare"
                    avatar="github.png"
                  />
                <CardText>
                        This application is made with NextJS and JavaScript. <br/>
                        Deployed with Vercel. <br/>
                        Check out the code on Gitlab.
                    </CardText>
                    <CardActions>
                        <FlatButton label="View on gitlab" href="https://gitlab.com/client-work3/provirtuehealthcare" target="_blank"/>
                    </CardActions>
                </Card>
            </div>
            </div>
        );
    }
}

export default CodeGithubComponent;
