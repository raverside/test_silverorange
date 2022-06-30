import { useEffect, useState } from 'react';
import RepoLangFilter from '../components/RepoLangFilter';
import RepoList from '../components/RepoList';
import { getRepos } from '../api/Repos';

function Repos() {
  const [repos, setRepos] = useState<any>([]); //no time to type!
  const [filterLang, setFilterLang] = useState<string>('');
  const allRepoLanguages = Array.from(
    new Set(repos.map((r: any) => r.language))
  ); //unique repo languages

  //filter the repos by active lang filter
  const filteredRepos = repos.filter(
    (r: any) => r.language === filterLang || !filterLang
  );

  //sort the repos by creation date in reverse chronological order
  filteredRepos.sort(
    (a: any, b: any) =>
      new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  );

  useEffect(() => {
    fetchRepos();
  }, []);

  const fetchRepos = async () => {
    const remoteRepos = await getRepos();

    setRepos(remoteRepos);
  };

  return (
    <>
      {repos.length <= 0 ? (
        <p>No repos found</p>
      ) : (
        <>
          <RepoLangFilter
            languages={allRepoLanguages}
            setLang={setFilterLang}
          />
          <RepoList repos={filteredRepos} />
        </>
      )}
    </>
  );
}

export default Repos;
