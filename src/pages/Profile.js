import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Repos } from '../components/Repos';

import { GithubContext } from '../context/github/githubContext';

export const Profile = ({ match }) => {
  const { getUser, getRepos, loading, user, repos } = useContext(GithubContext);
  const urlName = match.params.name;

  useEffect(() => {
    getUser(urlName);
    getRepos(urlName);
    //eslint-disable-next-line
  }, []);

  if (loading) {
    return <p className="text-cent">Loading...</p>;
  }

  const {
    name,
    company,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
  } = user;
  return (
    <>
      <Link to="/" className="btn btn-info">
        Go to main page
      </Link>
      <div className="card mb-3">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-3 text-center">
              <img
                src={avatar_url}
                alt={`${login}-avatar`}
                className="card-img-top"
              />
              <h1>{name || login}</h1>
              {location && <p>Location: {location}</p>}
            </div>
            <div className="col">
              {bio && (
                <>
                  <h3>BIO:</h3>
                  <p>{bio}</p>
                </>
              )}
              <a
                href={html_url}
                target="_blank"
                rel="noreferrer"
                className="btn btn-dark"
              >
                Go to profile
              </a>
              <ul className="mt-1">
                {login && (
                  <li>
                    <strong>Username: </strong> {login}
                  </li>
                )}
                {company && (
                  <li>
                    <strong>UCompany: </strong> {company}
                  </li>
                )}
                {blog && (
                  <li>
                    <strong>Website: </strong> {blog}
                  </li>
                )}
              </ul>
              <div className="badge badge-primary mr-1">
                Followers: {followers}
              </div>
              <div className="badge badge-secondary mr-1">
                Following: {following}
              </div>
              <div className="badge badge-info mr-1">Repos: {public_repos}</div>
              <div className="badge badge-success mr-1">
                Gists: {public_gists}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Repos repos={repos} />
    </>
  );
};
