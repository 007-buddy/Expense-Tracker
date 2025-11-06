// import React from 'react'
// import { LuUtensils,LuTrendingUp,LuTrendingDown,LuTrash2 } from 'react-icons/lu'


// const TransactionInfoCard = ({title, icon, date, amount, type, hideDeleteBtn,onDelete
// }) => {
    //     const getAmountStyles = ()=>
        //        type === "income"?"bg-green-50 text-green-500":"bg-red-50 text-red-500" ;  

//   return (
    //     <div className="group relative flex items-center gap-4 mt-2 p-3 rounded-lg hover:bg-gray-100/50">
    //         <div className="w-12 h-12 flex items-center justify-center text-xl text-gray-800 bg-gray-100 rounded-full">
    //             {
        //                 icon ? (
            //                     <img src={icon} alt={title} className="w-6 h-6"/>
            //                 ):(
                //                     <LuUtensils />
                
                //                 )}
                //         </div>
                
                //         <div className ="flex-1 flex items-center justify-between">
                //             <div>
                //                 <p className="text-sm text-gray-700 font-medium">{title}</p>
                //                 <p className="text-xs text-gray-400 mt-1">{date}</p>
                //             </div>
                //             <div className="flex items-center gap-2">
                //                 {!hideDeleteBtn && (
                    //                     <button className="text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
//                     onClick={onDelete}>
//                         <LuTrash2 size={18}/>
//                     </button>
//                 )}

// <div className={`flex items-center gap-2 px-3 py-1.5 rounded-md ${getAmountStyles()}`}>
//     <h6 className="text-xs font-medium">
//         {type==="income"?"+":"-"} ${amount}
//     </h6>
//     {type==="income"?<LuTrendingUp/>:<LuTrendingDown/>}
//     </div>
//         </div>  
//         </div>
//     </div>
//   );
// };

// export default TransactionInfoCard

// // ...existing code...


// import { BASE_URL } from "../../utils/apiPaths";
// ...existing code...



// import React from "react";
// import { LuUtensils, LuTrendingUp, LuTrendingDown, LuTrash2 } from "react-icons/lu";
// import { BASE_URL } from "../../utils/apiPaths";

// const TransactionInfoCard = ({ title = "", icon, date = "", amount = 0, type = "income", hideDeleteBtn, onDelete }) => {
//   const getAmountStyles = () =>
//     type === "income" ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700";

//   const renderIcon = (icon, title) => {
//     if (!icon) return <LuUtensils className="text-xl" />;
//     if (React.isValidElement(icon)) return icon;
//     if (typeof icon === "function") {
//       const IconComp = icon;
//       return <IconComp className="text-xl" />;
//     }
//     if (typeof icon === "string") {
//       const src = icon.trim();
//       if (!src) return <LuUtensils className="text-xl" />;
//       const finalSrc =
//         src.startsWith("http") || src.startsWith("/")
//           ? src
//           : `${BASE_URL.replace(/\/$/, "")}/${src.replace(/^\/+/, "")}`;
//       return (
//         <img
//           src={finalSrc}
//           alt={title || "icon"}
//           className="w-6 h-6 object-contain rounded"
//           onError={(e) => {
//             e.currentTarget.style.display = "none"; // hide broken image
//           }}
//         />
//       );
//     }
//     return <LuUtensils className="text-xl" />;
//   };

//   return (
//     <div className="group relative flex items-center gap-4 mt-2 p-3 rounded-lg">
//       <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full">
//         {renderIcon(icon, title)}
//       </div>

//       <div className="flex-1 flex items-center justify-between">
//         <div>
//           <p className="text-sm text-gray-700 font-medium">{title}</p>
//           <p className="text-xs text-gray-400 mt-1">{date}</p>
//         </div>

//         <div className="flex items-center gap-3">
//           <div className={`px-3 py-1.5 rounded-md ${getAmountStyles()}`}>
//             <span className="text-sm font-medium">
//               {type === "income" ? "+" : "-"} ${amount}
//             </span>
//           </div>
//           {!hideDeleteBtn && onDelete && (
//             <button
//               className="text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
//               onClick={onDelete}
//             >
//               <LuTrash2 size={18} />
//             </button>
//           )}
//           {type === "income" ? <LuTrendingUp /> : <LuTrendingDown />}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TransactionInfoCard;

import React from "react";
import { LuUtensils, LuTrendingUp, LuTrendingDown, LuTrash2 } from "react-icons/lu";
import { BASE_URL } from "../../utils/apiPaths";

const TransactionInfoCard = ({
  title = "",
  icon,
  date = "",
  amount = 0,
  type = "income",
  hideDeleteBtn,
  onDelete
}) => {
  const getAmountStyles = () =>
    type === "income" ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700";

  const isEmoji = typeof icon === "string" &&
    icon.match(/^[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F1E0}-\u{1F1FF}]+$/u);

  const renderIcon = (icon, title) => {
    if (!icon) return <LuUtensils className="text-xl" />;
    if (React.isValidElement(icon)) return icon;
    if (typeof icon === "function") {
      const IconComp = icon;
      return <IconComp className="text-xl" />;
    }
    if (isEmoji) {
      return <span className="text-2xl">{icon}</span>;
    }
    if (typeof icon === "string") {
      const src = icon.trim();
      if (!src) return <LuUtensils className="text-xl" />;
      const finalSrc =
        src.startsWith("http") || src.startsWith("/")
          ? src
          : `${BASE_URL.replace(/\/$/, "")}/${src.replace(/^\/+/, "")}`;
      return (
        <img
          src={finalSrc}
          alt={title || "icon"}
          className="w-6 h-6 object-contain rounded"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
      );
    }
    return <LuUtensils className="text-xl" />;
  };

  return (
    <div className="group relative flex items-center gap-4 mt-2 p-3 rounded-lg">
      <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full">
        {renderIcon(icon, title)}
      </div>
      <div className="flex-1 flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-700 font-medium">{title}</p>
          <p className="text-xs text-gray-400 mt-1">{date}</p>
        </div>
        <div className="flex items-center gap-3">
          <div className={`px-3 py-1.5 rounded-md ${getAmountStyles()}`}>
            <span className="text-sm font-medium">
              {type === "income" ? "+" : "-"} ${amount}
            </span>
          </div>
          {!hideDeleteBtn && onDelete && (
            <button
              className="text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
              onClick={onDelete}
            >
              <LuTrash2 size={18} />
            </button>
          )}
          {type === "income" ? <LuTrendingUp /> : <LuTrendingDown />}
        </div>
      </div>
    </div>
  );
};

export default TransactionInfoCard;
