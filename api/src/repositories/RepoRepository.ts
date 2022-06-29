import axios from 'axios';
import { readFile } from 'fs/promises';

class RepoRepository {
  public static async getLocalRepos() {
    return JSON.parse(await readFile('./data/repos.json', 'utf8'));
  }

  public static async getRemoteRepos() {
    const response = await axios.get(
      'https://api.github.com/users/silverorange/repos'
    );
    return response.data;
  }
}

export default RepoRepository;
