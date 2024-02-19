export const formatEntryNumber = (id) => {
  if (id.length === 4 || id.length === 3) return id;
  const newId = '00' + id;
  return newId.substring(newId.length - 3);
};
