// import { day, month, year, monthName } from "../Components/CurrentDate";
import { fullDate } from "../Components/CurrentDate";
export const commonPlaceholder = {
  readonlyPlaceholder: `Created On: ${fullDate.monthName[fullDate.month]} ${
    fullDate.day
  }, ${fullDate.year} (ReadOnlyobject)`,
  namePlaceholder: "Enter Name",
  titlePlaceholder: "Enter Title",
  descPlaceholder: "Enter Something Here!",
  searchNameTitle: "Enter Name Or Title for Search",
};
