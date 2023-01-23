import React from "react";

export default function FormattedDate(props) {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let monthNumber = props.date.slice(5, 7);
  if (monthNumber < 10) {
    monthNumber = props.date.slice(6, 7);
  }
  let month = months[monthNumber];
  let day = props.date.slice(8, 10);
  let year = props.date.slice(0, 4);
  return (
    <div>
      {month} {day}th, {year}
    </div>
  );
}
