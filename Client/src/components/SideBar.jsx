// import React, { useState } from "react";

// const Sidebar = ({ onSidebarButtonClick }) => {
//   const [showSidebar, setShowSidebar] = useState(false);

//   return (
//     <>
//       {showSidebar ? (
//         <button
//           className="flex text-4xl text-white items-center cursor-pointer fixed left-10 top-6 z-50"
//           onClick={() => setShowSidebar(!showSidebar)}
//         >
//           x
//         </button>
//       ) : (
//         <svg
//           onClick={() => setShowSidebar(!showSidebar)}
//           className="fixed z-30 flex items-center cursor-pointer left-10 top-6"
//           fill="#2563EB"
//           viewBox="0 0 100 80"
//           width="40"
//           height="40"
//         >
//           <rect width="100" height="10"></rect>
//           <rect y="30" width="100" height="10"></rect>
//           <rect y="60" width="100" height="10"></rect>
//         </svg>
//       )}

//       <div
//         className={`top-0 left-0 w-[35vw] bg-blue-600 p-10 pl-20 text-white fixed h-full z-40 ease-in-out duration-300 ${
//           showSidebar ? "translate-x-0 " : "translate-x-full"
//         }`}
//       >
//         {/* Your Sidebar content here */}
//         <button
//           className="mb-4 text-white text-lg"
//           onClick={() => onSidebarButtonClick("Button 1 Clicked")}
//         >
//           Button 1
//         </button>
//         <button
//           className="mb-4 text-white text-lg"
//           onClick={() => onSidebarButtonClick("Button 2 Clicked")}
//         >
//           Button 2
//         </button>
//         <button
//           className="mb-4 text-white text-lg"
//           onClick={() => onSidebarButtonClick("Button 3 Clicked")}
//         >
//           Button 3
//         </button>
//       </div>
//     </>
//   );
// };

// export default Sidebar;

// <!-- TW Elements is free under AGPL, with commercial license required for specific uses. See more details: https://tw-elements.com/license/ and contact us for queries at tailwind@mdbootstrap.com -->
// <!-- Sidenav -->

// import { MoreVertical, ChevronLast, ChevronFirst } from "lucide-react";
// import { useContext, createContext, useState } from "react";

// const SidebarContext = createContext();

// export default function Sidebar({ children }) {
//   const [expanded, setExpanded] = useState(true);

//   return (
//     <aside className="h-screen">
//       <nav className="h-full flex flex-col bg-yellow-300 border-r shadow-sm">
//         <div className="p-4 pb-2 flex justify-between items-center">
//           <img
//             src="/public/LOGO 2.png"
//             className={`overflow-hidden transition-all ${
//               expanded ? "w-32" : "w-0"
//             }`}
//             alt=""
//           />
//           <button
//             onClick={() => setExpanded((curr) => !curr)}
//             className="p-1.5 rounded-lg bg-red-600 hover:bg-gray-100"
//           >
//             {expanded ? <ChevronFirst /> : <ChevronLast />}
//           </button>
//         </div>

//         <SidebarContext.Provider value={{ expanded }}>
//           <ul className="flex-1 px-3">{children}</ul>
//         </SidebarContext.Provider>

//         <div className="border-t flex p-3">
//           <img src="" alt="" className="w-10 h-10 rounded-md" />
//           <div
//             className={`
//               flex justify-between items-center
//               overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}
//           `}
//           >
//             <div className="leading-4">
//               <h4 className="font-semibold">BidAuctio</h4>
//               <span className="text-xs text-gray-600">info@bidauctio.com</span>
//             </div>
//             <MoreVertical size={20} />
//           </div>
//         </div>
//       </nav>
//     </aside>
//   );
// }
import React from "react";
const SideBar = () => {
  return (
    <div
      id="sidebar-mini"
      className="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full z-0 transition-all duration-300 transform hidden fixed pt-14 top-0 start-0 bottom-0  w-20 bg-yellow-400 border-e border-gray-200 lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500 dark:bg-gray-800 dark:border-gray-700"
    >
      <div className="flex flex-col justify-center items-center gap-y-2 py-4">
        <div className="mb-4">
          <a className="flex-none" href="#">
            <svg
              className="w-10 h-auto"
              width="100"
              height="100"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="100" height="100" rx="10" fill="black" />
              <path
                d="M37.656 68V31.6364H51.5764C54.2043 31.6364 56.3882 32.0507 58.1283 32.8793C59.8802 33.696 61.1882 34.8146 62.0523 36.2351C62.9282 37.6555 63.3662 39.2654 63.3662 41.0646C63.3662 42.5443 63.0821 43.8108 62.5139 44.8643C61.9458 45.906 61.1823 46.7524 60.2235 47.4034C59.2646 48.0544 58.1934 48.522 57.0097 48.8061V49.1612C58.2999 49.2322 59.5369 49.6288 60.7206 50.3509C61.9162 51.0611 62.8927 52.0672 63.6503 53.3693C64.4079 54.6714 64.7867 56.2457 64.7867 58.0923C64.7867 59.9744 64.3309 61.6671 63.4195 63.1705C62.508 64.6619 61.1349 65.8397 59.3002 66.7038C57.4654 67.5679 55.1572 68 52.3754 68H37.656ZM44.2433 62.4957H51.3279C53.719 62.4957 55.4413 62.04 56.4948 61.1286C57.5601 60.2053 58.0928 59.0215 58.0928 57.5774C58.0928 56.5002 57.8264 55.5296 57.2938 54.6655C56.7611 53.7895 56.0035 53.103 55.021 52.6058C54.0386 52.0968 52.8667 51.8423 51.5054 51.8423H44.2433V62.4957ZM44.2433 47.1016H50.7597C51.896 47.1016 52.92 46.8944 53.8314 46.4801C54.7429 46.054 55.459 45.4562 55.9798 44.6868C56.5125 43.9055 56.7789 42.9822 56.7789 41.9169C56.7789 40.5083 56.2817 39.3482 55.2874 38.4368C54.3049 37.5253 52.843 37.0696 50.9017 37.0696H44.2433V47.1016Z"
                fill="white"
              />
            </svg>
          </a>
        </div>

        <div className="hs-tooltip inline-block [--placement:right]">
          <button
            type="button"
            className="hs-tooltip-toggle w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          >
            <svg
              className="flex-shrink-0 w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            <span
              className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg whitespace-nowrap dark:bg-neutral-700"
              role="tooltip"
            >
              Home
            </span>
          </button>
        </div>

        <div className="hs-tooltip inline-block [--placement:right]">
          <button
            type="button"
            className="hs-tooltip-toggle w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          >
            <svg
              className="flex-shrink-0 w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            <span
              className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg whitespace-nowrap dark:bg-neutral-700"
              role="tooltip"
            >
              Users
            </span>
          </button>
        </div>

        <div className="hs-tooltip inline-block [--placement:right]">
          <button
            type="button"
            className="hs-tooltip-toggle w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          >
            <svg
              className="flex-shrink-0 w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
              <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
            </svg>
            <span
              className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg whitespace-nowrap dark:bg-neutral-700"
              role="tooltip"
            >
              Notifications
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;