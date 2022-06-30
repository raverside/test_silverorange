interface ContainerProps {
  languages: any; // no time to type!
  setLang: (l: string) => void;
}
function RepoLangFilter({ languages, setLang }: ContainerProps) {
  return (
    <>
      <input type="button" value="All" onClick={() => setLang('')} />
      {languages.map((l: string, i: number) => (
        <input type="button" key={i} value={l} onClick={() => setLang(l)} />
      ))}
    </>
  );
}

export default RepoLangFilter;
