export function dateFormatter(date) {
  let formattedDate = date.slice(5, 7) + "/" + date.slice(0, 4);
  return formattedDate;
}
