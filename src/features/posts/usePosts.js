export function useFilteredPosts(posts, { filterBy, filterQuery }) {
  const filteredPosts = posts.filter(
    (post) => post[filterBy].includes(filterQuery),
  );

  return filteredPosts;
}

export default function usePosts(posts, { filterBy, filterQuery }) {
  const resultPosts = useFilteredPosts(posts, { filterBy, filterQuery });

  return resultPosts;
}
