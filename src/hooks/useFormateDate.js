const monthName = {
  0: "Jan",
  1: "Feb",
  2: "Mar",
  3: "Apr",
  4: "May",
  5: "Jun",
  6: "Jul",
  7: "Aug",
  8: "Sep",
  9: "Oct",
  10: "Nov",
  11: "Dec",
};

export function useFormatDate(submittedDate) {
  if (submittedDate) {
    let date;
    let day, month, year, fullDate;

    date = new Date(submittedDate);
    day = date.getDate();
    year = parseInt(String(date.getFullYear()).split("").slice(2, 4).join(""));

    let trackMonth = date.getMonth();
    month = monthName[Object.keys(monthName).find((m) => m === trackMonth)];
    fullDate = day + "th " + month + " " + year;
    return fullDate;
  }
}

export function useCompareDate(date) {
  const oldDate = new Date(date).toLocaleDateString();
  const newDate = new Date().toLocaleDateString();

  if (oldDate < newDate || oldDate === newDate) {
    return "active";
  } else {
    return "pending";
  }
}
