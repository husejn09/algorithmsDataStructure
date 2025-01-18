import React, { useRef } from "react";

function Visualization() {
  const initialArray = [8, 2, 4, 7, 1, 3, 9, 6, 5];
  const divWidth = 50;
  const divsRef = useRef([]);

  const swapSteps = [
    [0, 4], // Swap 8 and 1
    [1, 1], // Swap 2 and 2 (no change)
    [2, 5], // Swap 4 and 3
    [3, 5], // Swap 7 and 4
    [4, 8], // Swap 8 and 5
    [5, 7], // Swap 7 and 6
    [6, 7], // Swap 9 and 7
    [7, 8], // Swap 8 and 9
  ];

  // Function to animate the swaps
  const startAnimation = () => {
    let stepIndex = 0;

    const animateSwap = () => {
      if (stepIndex >= swapSteps.length) return;  // Stop if we've done all swaps

      const [index1, index2] = swapSteps[stepIndex];
      const div1 = divsRef.current[index1];
      const div2 = divsRef.current[index2];

      // Log the current step for debugging
      console.log(`Step ${stepIndex + 1}: Swapping indices ${index1} and ${index2}`);

      // Swap the positions of div1 and div2 using transform
      const temp = div1.style.transform;
      div1.style.transform = div2.style.transform;
      div2.style.transform = temp;

      // Increment stepIndex for the next swap
      stepIndex++;

      // Call animateSwap again after a short delay (for smooth animation)
      setTimeout(animateSwap, 1000);  // Delay between swaps
    };

    animateSwap();  // Start the animation sequence
  };

  const handleReset = () => {
    // Reset all divs to initial positions
    divsRef.current.forEach((div, index) => {
      div.style.transform = `translateX(${index * divWidth}px)`;
    });
  };

  return (
    <div>
      <div className="relative w-full h-24">
        {initialArray.map((num, index) => (
          <div
            key={index}
            ref={(el) => (divsRef.current[index] = el)}  // Assign refs to divs
            style={{
              position: "absolute",
              width: `${divWidth}px`,
              height: "50px",
              lineHeight: "50px",
              textAlign: "center",
              backgroundColor: "#007BFF",
              color: "#fff",
              borderRadius: "5px",
              transition: "transform 0.5s ease",  // Smooth transition for transform
              transform: `translateX(${index * divWidth}px)`,
            }}
          >
            {num}
          </div>
        ))}
      </div>
      <div className="mt-4 flex space-x-4">
        <button
          onClick={startAnimation}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          Start Animation
        </button>
        <button
          onClick={handleReset}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Visualization;
