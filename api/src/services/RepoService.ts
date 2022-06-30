import { Repo } from '../models/Repo';
import RepoRepository from '../repositories/RepoRepository';

class RepoService {
  public static async fetchAllRepos() {
    const localRepos: Repo[] = await RepoRepository.getLocalRepos();
    const remoteRepos: Repo[] = await RepoRepository.getRemoteRepos();
    const allRepos = [...localRepos, ...remoteRepos]; //merge the repos
    const filteredRepos = allRepos.filter((aR) => !aR.fork); //filter out the forks

    return filteredRepos;
  }
}

export default RepoService;
