export const compareAsNumbers = (a, b, order) => {
  if (order === 'asc') {
    return a - b;
  }

  return b - a;
};

export const compareAsStrings = (a, b, order) => {
  if (order === 'asc') {
    return a.toString().localeCompare(b);
  }

  return b.toString().localeCompare(a);
};

export const getPages = (currentPage, limit, totalCount) => {
  const numberOfPages = Math.ceil(totalCount / limit);
  const pages = [];

  if (numberOfPages > 10) {
    if (currentPage > 5) {
      for (let i = currentPage - 4; i <= currentPage + 4; i += 1) {
        pages.push(i);

        if (i === numberOfPages) {
          break;
        }
      }
    } else {
      for (let i = 1; i <= 10; i += 1) {
        pages.push(i);

        if (i === numberOfPages) {
          break;
        }
      }
    }
  } else {
    for (let i = 1; i <= numberOfPages; i += 1) {
      pages.push(i);
    }
  }

  return [pages, numberOfPages];
};
