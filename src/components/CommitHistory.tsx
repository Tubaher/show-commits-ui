import { useState, useEffect } from "react";
import axios from "axios";
import { CommitElement, CommitsResponse } from "../api/commits.api";
import CommitList from "./CommitList";
const history_api = import.meta.env.VITE_GITHUB_HISTORY_API;

function CommitHistory() {
  const [commits, setCommits] = useState<CommitElement[]>([]);
  const [page, setPage] = useState<number>(1);
  const commitsPerPage = 10;

  useEffect(() => {
    axios
      .get<CommitsResponse>(
        `${history_api}commits?page=${page}&per_page=${commitsPerPage}`
      )
      .then((response) => {
        setCommits(response.data.commits);
      })
      .catch((error) => {
        console.error("Error fetching commits:", error);
      });
  }, [page]);

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-indigo-500">
          Commit History
        </h1>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <CommitList commits={commits} />

          <div className="mt-6 flex justify-between">
            <button
              onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
              disabled={page === 1}
              className={`px-4 py-2 rounded bg-indigo-600 text-white hover:bg-indigo-500 focus:outline-none ${
                page === 1 ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              Previous
            </button>

            <span className="text-gray-700">{page}</span>

            <button
              onClick={() => setPage((prev) => prev + 1)}
              disabled={commits.length < commitsPerPage}
              className={`px-4 py-2 rounded bg-indigo-600 text-white hover:bg-indigo-500 focus:outline-none ${
                commits.length < commitsPerPage
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommitHistory;
