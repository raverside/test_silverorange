import RepoRepository from '../repositories/RepoRepository';

class RepoService {
  public static async fetchAllRepos() {
    const localRepos = await RepoRepository.getLocalRepositories();
    const remoteRepos = await RepoRepository.getRemoteRepositories();

    return [...localRepos, ...remoteRepos];
  }
}

export default RepoService;
