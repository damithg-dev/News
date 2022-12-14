export const capitalize = (str: string) => {
  return `${str[0].toUpperCase()}${str.slice(1)}`;
  // return str[0].toUpperCase() + str.slice(1)   // without template string
};
