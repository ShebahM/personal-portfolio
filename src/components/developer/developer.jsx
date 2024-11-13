import React, { Component } from 'react';
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import './developer.css';


class DesignComponent extends Component {

  render() {
    return (
      <div className="design">
        <p className="headline">Cloud Developer</p>
        <p className="text-justify">
          Specialising in designing, building, and maintaining applications and services that run on cloud platforms like AWS. 
          Focusing on creating scalable, reliable, and secure solutions by leveraging cloud-native technologies, microservices, serverless architectures, and infrastructure as code (IaC). 
          Working with APIs, databases, and CI/CD pipelines to streamline deployment and manage resources efficiently.
        </p>

        <div className="design-checkbox">
          <Checkbox
            checkedIcon={<ActionFavorite />}
            uncheckedIcon={<ActionFavoriteBorder />}
            iconStyle={{ "fill": "#A80202" }}
            label="Terraform"
          />
        </div>
        <div className="design-checkbox">
          <Checkbox
            checkedIcon={<ActionFavorite />}
            uncheckedIcon={<ActionFavoriteBorder />}
            iconStyle={{ "fill": "#A80202" }}
            label="Lambda"
          />
        </div>
        <div className="design-checkbox">
          <Checkbox
            checkedIcon={<ActionFavorite />}
            uncheckedIcon={<ActionFavoriteBorder />}
            iconStyle={{ "fill": "#A80202" }}
            label="EC2"
          />
        </div>
        <div className="design-checkbox">
          <Checkbox
            checkedIcon={<ActionFavorite />}
            uncheckedIcon={<ActionFavoriteBorder />}
            iconStyle={{ "fill": "#A80202" }}
            label="DynamoDB"
          />
        </div>
        <div className="design-checkbox">
          <Checkbox
            checkedIcon={<ActionFavorite />}
            uncheckedIcon={<ActionFavoriteBorder />}
            iconStyle={{ "fill": "#A80202" }}
            label="Cloud Formation"
          />
        </div>

      </div>
    );
  }
}

export default DesignComponent;
