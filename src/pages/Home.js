import React, { useContext } from 'react';

import { Search } from '../components/Search';
import { Card } from '../components/Card';
import { GithubContext } from '../context/github/githubContext';

export const Home = () => {
  const { loading, users } = useContext(GithubContext);

  return (
    <>
      <Search />
      <div className="row">
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : (
          users.map((user) => (
            <div
              className="col-10 col-lg-3 col-md-4 col-sm-6 mb-4"
              key={user.id}
            >
              <Card user={user} />
            </div>
          ))
        )}
      </div>
    </>
  );
};
