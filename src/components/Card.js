import React from 'react';

import { Link } from 'react-router-dom';

export const Card = ({ user }) => {
  return (
    <div className="card">
      <img src={user.avatar_url} alt={user.login} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-tit">{user.login}</h5>
        <Link to={'/profile/' + user.login} className="btn btn-info">
          See more about "{user.login}"
        </Link>
      </div>
    </div>
  );
};
