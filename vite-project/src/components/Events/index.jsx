import React, { useState } from 'react';

const Events = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const daysInMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth() + 1,
    0
  ).getDate();

  const days = [];
  for (let day = 1; day <= daysInMonth; day++) {
    days.push(day);
  }

  const goToPreviousMonth = () => {
    const previousMonth = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth() - 1,
      1
    );
    setCurrentMonth(previousMonth);
  };

  const goToNextMonth = () => {
    const nextMonth = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth() + 1,
      1
    );
    setCurrentMonth(nextMonth);
  };

  const renderWeekdays = () => {
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    return weekdays.map((day) => (
      <th key={day} className="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
        {day}
      </th>
    ));
  };

  const renderDays = () => {
    const firstDayOfMonth = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      1
    ).getDay();

    const dayElements = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
      dayElements.push(<td key={`empty-${i}`} className="border"></td>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      dayElements.push(
        <td
          key={day}
          className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300"
        >
          <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
            <div className="top h-5 w-full">
              <span className="text-gray-500">{day}</span>
            </div>
          </div>
        </td>
      );
    }

    const totalDays = dayElements.length;
    const remainingEmptyCells = (totalDays + 7 - daysInMonth) % 7;

    for (let i = 0; i < remainingEmptyCells; i++) {
      dayElements.push(<td key={`empty-${i}`} className="border"></td>);
    }

    const weeks = [];
    while (dayElements.length > 0) {
      weeks.push(
        <tr key={weeks.length} className="text-center h-20">
          {dayElements.splice(0, 7)}
        </tr>
      );
    }

    return weeks;
  };

  return (
    <div className="container mx-auto mt-10">
      <div className="wrapper bg-white rounded shadow w-full">
        <div className="header flex justify-between border-b p-2">
          <span className="text-lg font-bold">
            {new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' }).format(currentMonth)}
          </span>
          <div className="buttons">
            <button className="p-1" onClick={goToPreviousMonth}>
              <svg width="1em" fill="gray" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-left-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                      <path fillRule="evenodd" d="M8.354 11.354a.5.5 0 0 0 0-.708L5.707 8l2.647-2.646a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708 0z"/>
                      <path fillRule="evenodd" d="M11.5 8a.5.5 0 0 0-.5-.5H6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5z"/>
              </svg>
            </button>
            <button className="p-1" onClick={goToNextMonth}>
              <svg width="1em" fill="gray" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-right-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                 <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path fillRule="evenodd" d="M7.646 11.354a.5.5 0 0 1 0-.708L10.293 8 7.646 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0z"/>
                <path fillRule="evenodd" d="M4.5 8a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5z"/>
              </svg>
            </button>
          </div>
        </div>
        <table className="w-full">
          <thead>
            <tr>{renderWeekdays()}</tr>
          </thead>
          <tbody>{renderDays()}</tbody>
        </table>
      </div>
    </div>
  );
};

export default Events;






// import { useState } from 'react';


// const Events = () => {
//     const [currentMonth, setCurrentMonth] = useState(new Date());

//     const goToPreviousMonth = () => {
//         setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
//       };
      
//       const goToNextMonth = () => {
//         setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
//       };
      

//     return (
//         <div className="container mx-auto mt-10">
//             <div className="wrapper bg-white rounded shadow w-full ">
//             <div className="header flex justify-between border-b p-2">
//             <span className="text-lg font-bold">
//                     {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long' }).format(currentMonth)}
//             </span>
//                 <div className="buttons">
//                 <button className="p-1" onClick={goToPreviousMonth}>
//                     <svg width="1em" fill="gray" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-left-circle" xmlns="http://www.w3.org/2000/svg">
//                         <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
//                         <path fillRule="evenodd" d="M8.354 11.354a.5.5 0 0 0 0-.708L5.707 8l2.647-2.646a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708 0z"/>
//                         <path fillRule="evenodd" d="M11.5 8a.5.5 0 0 0-.5-.5H6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5z"/>
//                     </svg>
//                 </button>
//                 <button className="p-1" onClick={goToNextMonth}>
//                     <svg width="1em" fill="gray" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-right-circle" xmlns="http://www.w3.org/2000/svg">
//                         <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
//                         <path fillRule="evenodd" d="M7.646 11.354a.5.5 0 0 1 0-.708L10.293 8 7.646 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0z"/>
//                         <path fillRule="evenodd" d="M4.5 8a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5z"/>
//                     </svg>
//                 </button>
//                 </div>
//             </div>
//             <table className="w-full">
//                 <thead>
//                 <tr>
//                     <th className="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
//                     <span className="xl:block lg:block md:block sm:block hidden">Sunday</span>
//                     <span className="xl:hidden lg:hidden md:hidden sm:hidden block">Sun</span>
//                     </th>
//                     <th className="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
//                     <span className="xl:block lg:block md:block sm:block hidden">Monday</span>
//                     <span className="xl:hidden lg:hidden md:hidden sm:hidden block">Mon</span>
//                     </th>
//                     <th className="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
//                     <span className="xl:block lg:block md:block sm:block hidden">Tuesday</span>
//                     <span className="xl:hidden lg:hidden md:hidden sm:hidden block">Tue</span>
//                     </th>
//                     <th className="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
//                     <span className="xl:block lg:block md:block sm:block hidden">Wednesday</span>
//                     <span className="xl:hidden lg:hidden md:hidden sm:hidden block">Wed</span>
//                     </th>
//                     <th className="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
//                     <span className="xl:block lg:block md:block sm:block hidden">Thursday</span>
//                     <span className="xl:hidden lg:hidden md:hidden sm:hidden block">Thu</span>
//                     </th>
//                     <th className="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
//                     <span className="xl:block lg:block md:block sm:block hidden">Friday</span>
//                     <span className="xl:hidden lg:hidden md:hidden sm:hidden block">Fri</span>
//                     </th>
//                     <th className="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
//                     <span className="xl:block lg:block md:block sm:block hidden">Saturday</span>
//                     <span className="xl:hidden lg:hidden md:hidden sm:hidden block">Sat</span>
//                     </th>
//                 </tr>
//                 </thead>
//                 <tbody>
//                 <tr className="text-center h-20">
//                     <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300 ">
//                     <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
//                         <div className="top h-5 w-full">
//                         <span className="text-gray-500">1</span>
//                         </div>
//                     </div>
//                     </td>
//                     <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
//                     <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
//                         <div className="top h-5 w-full">
//                         <span className="text-gray-500">2</span>
//                         </div>
//                         <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
//                     </div>
//                     </td>
//                     <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
//                     <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
//                         <div className="top h-5 w-full">
//                         <span className="text-gray-500">3</span>
//                         </div>
//                         <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
//                     </div>
//                     </td>
//                     <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
//                     <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
//                         <div className="top h-5 w-full">
//                         <span className="text-gray-500">4</span>
//                         </div>
//                         <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
//                     </div>
//                     </td>
//                     <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
//                     <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
//                         <div className="top h-5 w-full">
//                         <span className="text-gray-500">6</span>
//                         </div>
//                         <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
//                     </div>
//                     </td>
//                     <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-hidden transition cursor-pointer duration-500 ease hover:bg-gray-300">
//                     <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
//                         <div className="top h-5 w-full">
//                         <span className="text-gray-500">7</span>
//                         </div>
//                     </div>
//                     </td>
//                     <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
//                     <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
//                         <div className="top h-5 w-full">
//                         <span className="text-gray-500 text-sm">8</span>
//                         </div>
//                         <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
//                     </div>
//                     </td>
//                 </tr>
//                 <tr className="text-center h-20">
//                     <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
//                     <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
//                         <div className="top h-5 w-full">
//                         <span className="text-gray-500">9</span>
//                         </div>
//                         <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
//                     </div>
//                     </td>
//                     <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
//                     <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
//                         <div className="top h-5 w-full">
//                         <span className="text-gray-500">10</span>
//                         </div>
//                         <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
//                     </div>
//                     </td>
//                     <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
//                     <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
//                         <div className="top h-5 w-full">
//                         <span className="text-gray-500">12</span>
//                         </div>
//                         <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
//                     </div>
//                     </td>
//                     <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
//                     <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
//                         <div className="top h-5 w-full">
//                         <span className="text-gray-500">13</span>
//                         </div>
//                         <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
//                     </div>
//                     </td>
//                     <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
//                     <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
//                         <div className="top h-5 w-full">
//                         <span className="text-gray-500">14</span>
//                         </div>
//                         <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
//                     </div>
//                     </td>
//                     <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
//                     <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
//                         <div className="top h-5 w-full">
//                         <span className="text-gray-500">15</span>
//                         </div>
//                         <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
//                     </div>
//                     </td>
//                     <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
//                     <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
//                         <div className="top h-5 w-full">
//                         <span className="text-gray-500 text-sm">16</span>
//                         </div>
//                         <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
//                     </div>
//                     </td>
//                 </tr>
//                 <tr className="text-center h-20">
//                     <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
//                     <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
//                         <div className="top h-5 w-full">
//                         <span className="text-gray-500">16</span>
//                         </div>
//                         <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
//                     </div>
//                     </td>
//                     <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
//                     <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
//                         <div className="top h-5 w-full">
//                         <span className="text-gray-500">17</span>
//                         </div>
//                         <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
//                     </div>
//                     </td>
//                     <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
//                     <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
//                         <div className="top h-5 w-full">
//                         <span className="text-gray-500">18</span>
//                         </div>
//                         <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
//                     </div>
//                     </td>
//                     <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
//                     <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
//                         <div className="top h-5 w-full">
//                         <span className="text-gray-500">19</span>
//                         </div>
//                         <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
//                     </div>
//                     </td>
//                     <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
//                     <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
//                         <div className="top h-5 w-full">
//                         <span className="text-gray-500">20</span>
//                         </div>
//                         <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
//                     </div>
//                     </td>
//                     <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
//                     <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
//                         <div className="top h-5 w-full">
//                         <span className="text-gray-500">21</span>
//                         </div>
//                         <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
//                     </div>
//                     </td>
//                     <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
//                     <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
//                         <div className="top h-5 w-full">
//                         <span className="text-gray-500 text-sm">22</span>
//                         </div>
//                         <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
//                     </div>
//                     </td>
//                 </tr>

//                 <tr className="text-center h-20">
//                     <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
//                     <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
//                         <div className="top h-5 w-full">
//                         <span className="text-gray-500">23</span>
//                         </div>
//                         <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
//                     </div>
//                     </td>
//                     <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
//                     <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
//                         <div className="top h-5 w-full">
//                         <span className="text-gray-500">24</span>
//                         </div>
//                         <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
//                     </div>
//                     </td>
//                     <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
//                     <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
//                         <div className="top h-5 w-full">
//                         <span className="text-gray-500">25</span>
//                         </div>
//                         <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
//                     </div>
//                     </td>
//                     <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
//                     <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
//                         <div className="top h-5 w-full">
//                         <span className="text-gray-500">26</span>
//                         </div>
//                         <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
//                     </div>
//                     </td>
//                     <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
//                     <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
//                         <div className="top h-5 w-full">
//                         <span className="text-gray-500">27</span>
//                         </div>
//                         <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
//                     </div>
//                     </td>
//                     <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
//                     <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
//                         <div className="top h-5 w-full">
//                         <span className="text-gray-500">28</span>
//                         </div>
//                         <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
//                     </div>
//                     </td>
//                     <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
//                     <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
//                         <div className="top h-5 w-full">
//                         <span className="text-gray-500 text-sm">29</span>
//                         </div>
//                         <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
//                     </div>
//                     </td>
//                 </tr>

//                 <tr className="text-center h-20">
//                     <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
//                     <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
//                         <div className="top h-5 w-full">
//                         <span className="text-gray-500">30</span>
//                         </div>
//                         <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
//                     </div>
//                     </td>
//                     <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
//                     <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
//                         <div className="top h-5 w-full">
//                         <span className="text-gray-500">31</span>
//                         </div>
//                         <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
//                     </div>
//                     </td>
//                     <td className="border bg-gray-100 p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
//                         <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
//                         <div className="top h-5 w-full">
//                             <span className="text-gray-500">1</span>
//                         </div>
//                         <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
//                         </div>
//                     </td>
//                     <td className="border bg-gray-100 p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
//                     <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
//                         <div className="top h-5 w-full">
//                         <span className="text-gray-500">2</span>
//                         </div>
//                         <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
//                     </div>
//                     </td>
//                     <td className="border bg-gray-100 p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
//                     <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
//                         <div className="top h-5 w-full">
//                         <span className="text-gray-500">3</span>
//                         </div>
//                         <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
//                     </div>
//                     </td>
//                     <td className="border bg-gray-100 p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
//                     <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
//                         <div className="top h-5 w-full">
//                         <span className="text-gray-500">4</span>
//                         </div>
//                         <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
//                     </div>
//                     </td>
//                     <td className="border bg-gray-100 p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
//                     <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
//                         <div className="top h-5 w-full">
//                         <span className="text-gray-500 text-sm">5</span>
//                         </div>
//                         <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
//                     </div>
//                     </td>
//                 </tr>
//                 </tbody>
//             </table>
//             </div>
//   </div>
//       );
// };

// export default Events
