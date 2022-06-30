interface ContainerProps {
  repos: any; // no time to type!
}
function RepoList({ repos }: ContainerProps) {
  return (
    <table className="repo_list">
      {repos.map((r: any) => (
        <tr key={r.id}>
          <td>{r.name}</td>
        </tr>
      ))}
    </table>
  );
}

export default RepoList;
