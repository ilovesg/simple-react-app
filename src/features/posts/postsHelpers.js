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
