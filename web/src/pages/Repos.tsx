import { useEffect, useState } from 'react';
import RepoList from '../components/RepoList';
import { getRepos } from '../api/Repos';

function Repos() {
  const [repos, setRepos] = useState<object[]>([]);
  useEffect(() => {
    fetchRepos();
  }, []);

  const fetchRepos = async () => {
    setRepos(await getRepos());
  };

  return (
    <>
      <RepoList repos={repos} />
    </>
  );
}

export default Repos;
