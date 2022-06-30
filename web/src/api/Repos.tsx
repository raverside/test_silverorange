export async function getRepos() {
  const response = await fetch('http://localhost:4000/repos');

  return await response.json();
}
