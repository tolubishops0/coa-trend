import React from "react";
import { digonistic } from "../../../utils";

const Diagonistics = ({ activeUser }) => {
  console.log(activeUser?.diagnostic_list);
  return (
    <div className="bg-white rounded-[1rem] px-3">
      <div className="w-[100%] mx-auto">
        <p
          id="nameListTitle"
          className="font-bold text-[1rem] lg:text-headerText pt-3 pb-6">
          Diagnosis History
        </p>
      </div>
      <div>
        <div className="flex justify-between items-center bg-[#f6f7f8] rounded-[4.375rem] px-3 py-[0.5rem] ">
          {/* {digonistic.map((item, index) => (
            <p
              className="text-left text-defaultColorText text-defaultText font-bold py-[0.5rem] "
              key={index}>
              {item}
            </p>
          ))} */}
          <p className="w-[30%] text-defaultText text-defaultColorText font-bold">
            Problem/Diagnosis
          </p>

          <p className="w-[60%] text-defaultText text-defaultColorText font-bold">
            Description
          </p>
          <p className="w-[20%] text-defaultText text-defaultColorText font-bold">
            Status
          </p>
        </div>
        <div className=" max-h-[10rem] overflow-y-auto px-3 py-4 flex flex-col gap-y-5 justify-between">
          {activeUser?.diagnostic_list.map((item, index) => (
            <div
              key={index}
              className="h-[2rem] flex   items-center justify-between ">
              <p className="flex items-center justify-start w-[30%] text-defaultText text-defaultColorText font-semibold">
                {item.name}
              </p>
              <p className="flex items-center justify-start w-[60%] text-defaultText text-defaultColorText font-semibold">
                {item.description}
              </p>
              <p className="w-[20%] text-defaultText text-defaultColorText font-semibold">
                {item.status}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Diagonistics;

// <table className="table">
//   <thead className="table-head">
//     <tr>
//       {digonistic.map((item, index) => (
//         <th
//           className="text-defaultColorText text-defaultText font-bold py-[0.5rem] "
//           key={index}>
//           {item}
//         </th>
//       ))}
//       {/* <th className="text-defaultColorText text-defaultText font-bold py-[0.5rem] ">
//               City
//             </th>
//             <th className="text-defaultColorText text-defaultText font-bold py-[0.5rem] ">
//               Time
//             </th>
//             <th className="text-defaultColorText text-defaultText font-bold py-[0.5rem] ">
//               Country
//             </th> */}
//     </tr>
//   </thead>

//   <tbody>
//     {activeUser?.diagnostic_list.map((item, index) => (
//       <tr key={index}>
//         <td className="text-defaultText text-defaultColorText font-semibold">
//           {item.name}
//         </td>
//         <td className="text-defaultText text-defaultColorText font-semibold">
//           {item.description}
//         </td>
//         <td className="text-defaultText text-defaultColorText font-semibold">
//           {item.status}
//         </td>
//       </tr>
//     ))}
//   </tbody>
// </table>;
