import React from "react";
// output numbers with leading zero
export function pad(num, size) {
  let s = `${num}`;
  while (s.length < (size || 2)) s = `0${s}`;
  return s;
}

//console log function
export const log = (e) => {
  console.log(e);
};

//redirect the page to the Design CV
// export const redirectDesign = () => {
//   let { id } = useParams();

//   return (
//     <div>
//       <h3>ID: {id}</h3>
//     </div>
//   );
// };
