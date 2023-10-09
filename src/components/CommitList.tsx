import { CommitElement } from "../api/commits.api";
import CommitItem from "./CommitItem";

interface CommitListProps {
  commits: CommitElement[];
}

function CommitList({ commits }: CommitListProps) {
  return (
    <ul>
      {commits.map((commit) => (
        <CommitItem key={commit.sha} commit={commit} />
      ))}
    </ul>
  );
}

export default CommitList;
