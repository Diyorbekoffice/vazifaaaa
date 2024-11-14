import React, { useState } from "react";

const Lift = () => {
  const [currentFloor, setCurrentFloor] = useState(1); 
  const [duration, setDuration] = useState(300); 

  const qavat = [1, 2, 3, 4, 5, 6, 7].reverse(); 

  const moveLift = (floor) => {
    if (floor !== currentFloor) {
      const floorDifference = Math.abs(floor - currentFloor);
      const newDuration = 1000 * floorDifference; 
      setDuration(newDuration);
      setCurrentFloor(floor); 
    }
  };

  return (
    <div className="flex flex-row items-center p-8 bg-gray-200 min-h-screen">
      <div className="relative w-24 h-[700px] border-2 border-gray-600 bg-gray-300 mr-6">
        <div
          className="absolute left-0 w-full h-[100px] bg-green-500 "
          style={{
            bottom: `${(currentFloor - 1) * 100}px`,
            transitionDuration: `${duration}ms`,
          }}
        ></div>
      </div>

      <div className="flex flex-col gap-3">
        {qavat.map((floor) => (
          <button
            key={floor}
            onClick={() => moveLift(floor)} 
            className={`${
              currentFloor === floor
                ? "bg-green-500"
                : "bg-blue-500 hover:bg-blue-700"
            } text-white py-2 px-4 rounded-full duration-300`}
          >
            {floor} 
          </button>
        ))}
      </div>
    </div>
  );
};

export default Lift;
