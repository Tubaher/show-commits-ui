import { CommitElement } from "../api/commits.api";

interface CommitListProps {
  commits: CommitElement[];
}

function CommitList({ commits }: CommitListProps) {
  const formatDate = (dateString: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <ul>
      {commits.map((commit) => (
        <li
          key={commit.sha}
          className="group mb-4 border-b pb-4 last:border-0 hover:bg-purple-100"
        >
          <a
            href={commit.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:underline block mb-2 group-hover:text-purple-400"
          >
            {commit.commit.message}
          </a>
          <span className="text-gray-600">
            {commit.commit.author.name} •{" "}
            {formatDate(commit.commit.author.date)}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default CommitList;
