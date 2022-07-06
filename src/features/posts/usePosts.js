import { compareAsNumbers, compareAsStrings } from './postsHelpers';

export function useFilteredPosts(posts, { filterBy, filterQuery }) {
  const filteredPosts = posts.filter(
    (post) => post[filterBy].includes(filterQuery),
  );

  return filteredPosts;
}

export function useSortedPosts(posts, { field, order }) {
  const sortedPosts = [...posts];

  sortedPosts.sort((post1, post2) => {
    const a = post1[field];
    const b = post2[field];

    if (field === 'id') {
      return compareAsNumbers(a, b, order);
    }

    return compareAsStrings(a, b, order);
  });

  return sortedPosts;
}

export default function usePosts(posts, { filterBy, filterQuery }, { field, order }) {
  const filteredPosts = useFilteredPosts(posts, { filterBy, filterQuery });
  const resultPosts = useSortedPosts(filteredPosts, { field, order });

  return resultPosts;
}
