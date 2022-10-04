const d = new Date();
export const fullDate = {
  monthName: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  day: d.getDate(),
  month: d.getMonth(),
  year: d.getFullYear(),
};
