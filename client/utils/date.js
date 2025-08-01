export const getDaysInMonth = (year, month) => {
  return new Date(year, month + 1, 0).getDate();
};

export const getFirstDayOfMonth = (year, month) => {
  return new Date(year, month, 1).getDay();
};

export const formatDate = (date) => {
  const format = {
    weekday: "short",
    day: "numeric",
  };
  const formattedDate = date.toLocaleDateString("pl-PL", format);
  return (
    formattedDate.charAt(0).toUpperCase() +
    formattedDate.slice(1).replace(",", "")
  );
};
