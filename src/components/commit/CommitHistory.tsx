import { useState, useEffect } from "react";
import axios from "axios";
import { CommitElement, CommitsResponse } from "../../api/commits.api";
import CommitList from "./CommitList";
import Note from "../note/Note";
import { Tooltip } from "react-tooltip";
const history_api = import.meta.env.VITE_GITHUB_HISTORY_API;

function CommitHistory() {
  const [commits, setCommits] = useState<CommitElement[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const commitsPerPage = 10;

  const fetchCommits = () => {
    axios
      .get<CommitsResponse>(
        `${history_api}commits?page=${page}&per_page=${commitsPerPage}`
      )
      .then((response) => {
        setCommits(response.data.commits);
        setTotalPages(response.data.totalPages);
      })
      .catch((error) => {
        console.error("Error fetching commits:", error);
      });
  };

  useEffect(() => {
    fetchCommits();
  }, [page]);

  const handleRefresh = () => {
    fetchCommits();
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-indigo-500">
          Commit History
        </h1>
        <Note>
          <p>
            The CommitList components uses the{" "}
            <span className="font-semibold">GET /commits</span> endpoint to
            retrieve the commit History. It receives two possible query
            parameters: <span className="font-semibold">page</span> and{" "}
            <span className="font-semibold">perPage</span>. The default values
            are 1 and 10 respectively. To see how the pagination works hover the
            navigation buttons below the list.
          </p>
        </Note>

        <button
          onClick={handleRefresh}
          className="px-4 py-2 mb-3 rounded bg-indigo-600 text-white hover:bg-indigo-500 focus:outline-none"
        >
          Refresh
        </button>

        <div className="bg-white shadow-lg rounded-lg p-6">
          <CommitList commits={commits} />

          <div className="mt-6 flex justify-between">
            <Tooltip anchorSelect=".prev-btn" place="bottom">
              When it is hit the "page" parameter is decreased by one, and the
              <br />
              api is called with "Get /commits" and the new value of "page" as
              <br />
              query parameter.
            </Tooltip>
            <a className="prev-btn">
              <button
                onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                disabled={page === 1}
                className={`px-4 py-2 rounded bg-indigo-600 text-white hover:bg-indigo-500 focus:outline-none ${
                  page === 1 ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                Previous
              </button>
            </a>

            <span className="text-gray-700">{page}</span>

            <Tooltip anchorSelect=".next-btn" place="bottom">
              When it is hit the "page" parameter is increased by one, and the
              <br />
              api is called with "Get /commits" and the new value of "page" as
              <br />
              query parameter.
            </Tooltip>

            <a className="next-btn">
              <button
                disabled={!(page < totalPages)}
                onClick={() => setPage((prev) => prev + 1)}
                className={`px-4 py-2 rounded bg-indigo-600 text-white hover:bg-indigo-500 focus:outline-none ${
                  !(page < totalPages) ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                Next
              </button>
            </a>
          </div>
        </div>
        <div className="mt-6">
          <Note>
            <p>
              The <span className="font-semibold">GET /commits</span> endpoint
              returns a list of commits and metadata. Here, we display the
              "page" property, and the button "Next" will be available is the
              "page" property is less than the "totalPages" property. The same
              logic is applied to the "Previous" button.
            </p>
          </Note>
        </div>
      </div>
    </div>
  );
}

export default CommitHistory;
