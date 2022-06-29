import RepoRepository from '../repositories/RepoRepository';

class RepoService {
  public static async fetchAllRepos() {
    const localRepos = await RepoRepository.getLocalRepos();
    const remoteRepos = await RepoRepository.getRemoteRepos();
    const allRepos = [...localRepos, ...remoteRepos];
    const filteredRepos = allRepos.filter((aR) => !aR.fork);

    return filteredRepos;
  }
}

export default RepoService;
