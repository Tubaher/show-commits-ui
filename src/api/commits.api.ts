export interface CommitsResponse {
  commits: CommitElement[];
  page: number;
  perPage: number;
  totalPages: number;
}

export interface CommitElement {
  sha: string;
  node_id: string;
  commit: CommitCommit;
  url: string;
  html_url: string;
  comments_url: string;
  author: AuthorMeta;
  committer: AuthorMeta;
  parents: Parent[];
}

export interface AuthorMeta {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}

export interface CommitCommit {
  author: Author;
  committer: Author;
  message: string;
  tree: Tree;
  url: string;
  comment_count: number;
  verification: Verification;
}

export interface Author {
  name: string;
  email: string;
  date: Date;
}

export interface Tree {
  sha: string;
  url: string;
}

export interface Verification {
  verified: boolean;
  reason: string;
  signature: null;
  payload: null;
}

export interface Parent {
  sha: string;
  url: string;
  html_url: string;
}
