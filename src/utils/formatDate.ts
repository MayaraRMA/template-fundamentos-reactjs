const formatDate = (value: Date): string => {
  const date = new Date(value);

  return date.toLocaleDateString();
};

export default formatDate;
