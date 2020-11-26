import React from 'react';

import { Link } from 'react-router-dom';

export const About = () => {
  return (
    <div className="jumbotron">
      <h1 className="display-4">About GitHub Parser</h1>
      <p className="lead">
        App for easy search repositories from service <strong>GitHub</strong>
      </p>
      <hr className="my-4" />
      <p>Version: 1.0.0</p>
      <p className="lead">
        <Link className="btn btn-primary btn-lg" to="/" exact role="button">
          Get started
        </Link>
      </p>
    </div>
  );
};
