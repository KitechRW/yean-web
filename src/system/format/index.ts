export const formatJoiErorr = (error: string) => {
  if (!error) {
    return;
  }
  const message = error.replace(/"/g, '').replace(/Id/g, '');
  return message.charAt(0).toUpperCase() + message.slice(1);
};

export const convertToSlug = (title: string, id: number) => {
  const url = title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
  return `${url}-${id}`;
};
