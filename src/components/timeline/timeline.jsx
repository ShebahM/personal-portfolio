import React, {Component} from 'react';
import {
    Card,
    CardHeader,
    CardText
} from 'material-ui/Card';
import Chip from 'material-ui/Chip';
import './timeline.css';

class TimelineComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
          expanded1: false,
          expanded2: false,
          expanded3: false
        };
    }

    async componentDidMount() {}

    componentWillUnmount() {}

    handleExpandChange = (expanded1) => {
      this.setState({expanded1: expanded1});
    };

    handleExpandChange2 = (expanded2) => {
      this.setState({expanded2: expanded2});
    };

    handleExpandChange3 = (expanded3) => {
      this.setState({expanded3: expanded3});
    };

    handleExpand = () => {
      this.setState({expanded: true});
    };

    handleExpand2 = () => {
      this.setState({expanded2: true});
    };

    handleExpand3 = () => {
      this.setState({expanded3: true});
    };

    handleReduce = () => {
      this.setState({expanded1: false});
    };

    handleReduce2 = () => {
      this.setState({expanded2: false});
    };

    handleReduce3 = () => {
      this.setState({expanded3: false});
    };
    render() {
        return (
            <div className="timeline">
              <p className="headline">Working experience</p>
                <div className="timeline-entry">
                  <Card>
                      <CardHeader title="DevOps Engineer" subtitle="Civil Service"/>
                      <CardText expandable={true}>
                          May 2024 - Present. Automates workflows, manages CI/CD, ensures scalable infrastructure.
                          <br/><br/>
                            <div className="timeline-entries">
                              <div className="timeline-entry-chip">
                                <Chip>Python</Chip>
                              </div>
                              <div className="timeline-entry-chip">
                                <Chip>Elastic</Chip>
                              </div>
                              <div className="timeline-entry-chip">
                                <Chip>Azure</Chip>
                              </div>
                            </div>
                      </CardText>
                  </Card>
                </div>
                  <div className="timeline-entry">
                    <Card expanded={this.state.expanded1} onExpandChange={this.handleExpandChange}>
                        <CardHeader title="Cloud Developer" subtitle="Civil Service"
                          actAsExpander={true} showExpandableButton={true}/>
                        <CardText expandable={true}>
                            August 2022 - May 2024. Builds, deploys, and scales applications on Aws.
                            <br/><br/>
                              <div className="timeline-entries">
                                <div className="timeline-entry-chip">
                                  <Chip>Python</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>Cloud Formation</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>Lambda</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>DynamoDB</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>EC2</Chip>
                                </div>
                              </div>
                        </CardText>
                    </Card>
                  </div>
                  <div className="timeline-entry">
                  <Card expanded={this.state.expanded2} onExpandChange={this.handleExpandChange2}>
                      <CardHeader title="Junior Software Developer" subtitle="Civil Service"
                        actAsExpander={true} showExpandableButton={true}/>
                      <CardText expandable={true}>
                          August 2021 - August 2022. Intensive bootcamp teaching coding and software development skills.

                          <div className="timeline-entries">
                            <div className="timeline-entry-chip">
                              <Chip>JavaScript</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>React</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>Node</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>MongoDB</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>HTML5</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>CSS</Chip>
                            </div>
                          </div>
                      </CardText>
                  </Card>
                </div>
               
            </div>
        );
    }
}

export default TimelineComponent;
