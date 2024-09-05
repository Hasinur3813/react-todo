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

export function formatDate(submittedDate) {
  if (submittedDate) {
    let date;
    let day, month, year, fullDate;

    date = new Date(submittedDate);
    day = date.getDate();
    year = parseInt(String(date.getFullYear()).split("").slice(-2).join(""));

    let trackMonth = date.getMonth();
    month = monthName[Object.keys(monthName).find((m) => m === trackMonth)];

    day =
      day === 1
        ? day + "st "
        : day === 2
        ? day + "nd "
        : day === 3
        ? day + "rd "
        : day + "th";

    fullDate = day + month + " " + year;
    return fullDate;
  }
}

export function compareDate(date) {
  const makeValidDate = date.replace(/(\d+)(st|nd|rd|th)/, "$1");
  const todoDate = new Date(makeValidDate);
  const newDate = new Date();

  if (todoDate > newDate || todoDate === newDate) {
    return "active";
  } else {
    return "pending";
  }
}
