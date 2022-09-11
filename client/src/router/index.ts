import React from "react";
import Posts from "../pages/posts/Posts";

export interface IRoute {
  path: string;
  page: React.ComponentType;
  exact?: boolean;
}

export enum RouteNames {
  POSTS = '/posts',
  ANYPATH = '*'
}

export const routes: IRoute[] = [
  {path: RouteNames.POSTS, page: Posts},
  {path: RouteNames.ANYPATH, page: Posts},
]