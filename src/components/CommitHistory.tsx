import { useState, useEffect } from "react";
import axios from "axios";
import { CommitElement, CommitsResponse } from "../api/commits.api";
const history_api = import.meta.env.VITE_GITHUB_HISTORY_API;

function CommitHistory() {
  const [commits, setCommits] = useState<CommitElement[]>([]);

  useEffect(() => {
    axios
      .get<CommitsResponse>(`${history_api}/commits`)
      .then((response) => {
        setCommits(response.data.commits);
      })
      .catch((error) => {
        console.error("Error fetching commits:", error);
      });
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Commit History</h1>
      <ul>
        {commits.map((commit) => (
          <li key={commit.sha} className="mb-2">
            <a
              href={commit.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {commit.commit.message}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CommitHistory;
