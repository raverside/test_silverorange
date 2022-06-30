interface ContainerProps {
  repos: any; // no time to type!
}
function RepoList({ repos }: ContainerProps) {
  return (
    <table className="repo_list">
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Language</th>
          <th>Forks Count</th>
        </tr>
      </thead>
      <tbody>
        {repos.map((r: any) => (
          <tr key={r.id}>
            <td>{r.name}</td>
            <td>{r.description}</td>
            <td>{r.language}</td>
            <td>{r.forks_count}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default RepoList;
