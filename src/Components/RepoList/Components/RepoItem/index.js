import React from 'react';

const RepoItem = ({ repo }) => (
  <div  className="repoItemContainer">
    <div className="verticalLine"></div>
  <a
    href={repo.html_url}
    key={repo.id}
  >
    <h2>{repo.name}</h2>
    <span>Stars: {repo.stargazers_count}</span>
    <span>Forks: {repo.forks}</span>
    <span>Issues: {repo.open_issues}</span>
  </a>
  </div>
);

export default RepoItem;