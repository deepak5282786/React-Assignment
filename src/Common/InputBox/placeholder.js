import { fullDate } from "../Utils/CurrentDate";
export const commonPlaceholder = {
  readonlyPlaceholder: `Created On: ${fullDate.monthName[fullDate.month]} ${
    fullDate.day
  }, ${fullDate.year} (ReadOnly)`,
  namePlaceholder: "Enter Name",
  titlePlaceholder: "Enter Title",
  descPlaceholder: "Enter Something Here!",
  searchNameTitle: "Enter Name Or Title for Search",
};
