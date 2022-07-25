# Simple React App

Training project for practicing React development skills. Built using React, Redux Toolkit (with RTK Query tool) and Bootstrap.

## Basic features

- Post list linked to specific post pages;
- ability to create and delete post items;
- automatic re-fetching after mutations;
- sorting and filtering posts;
- page navigation;
- client-side routing;
- fake authorization;
- notifications about successful and unsuccessful data manipulations;
- custom UI components (modal window and preloader);
- transitions;
- "Page not found" and "Access denied" error pages;
- sticky footer (when page is shorter than screen height).

## How to use

1. Clone project content into the current folder with the following command: `$ git clone https://github.com/ilovesg/simple-react-app .` or [download it manually](https://github.com/ilovesg/simple-react-app/archive/refs/heads/main.zip).
2. Change the `baseUrl` parameter inside the `/src/features/posts/postsApi.js` file from `'https://jsonplaceholder.typicode.com/'` to `'http://localhost:3001/'` (it is important if you want to test not-fake adding/deleting posts with automatic re-fetching).
3. Install dependencies: `$ npm i`.
4. Run: `$ npm run dev`.
