import React from 'react';

export default function About() {
  return (
    <>
      <h1>About project</h1>
      <p>
        Training project for practicing React development skills.
        Built using React, Redux Toolkit (with RTK Query tool) and Bootstrap.
      </p>
      <h2>Basic features</h2>
      <ul>
        <li>Post list linked to specific post pages;</li>
        <li>ability to create and delete post items;</li>
        <li>automatic re-fetching after mutations;</li>
        <li>sorting and filtering posts;</li>
        <li>page navigation;</li>
        <li>client-side routing;</li>
        <li>fake authorization;</li>
        <li>notifications about successful and unsuccessful data manipulations;</li>
        <li>custom UI components (modal window and preloader);</li>
        <li>transitions;</li>
        <li>&ldquo;Page not found&rdquo; and &ldquo;Access denied&rdquo; error pages;</li>
        <li>sticky footer (when page is shorter than screen height).</li>
      </ul>
    </>
  );
}
