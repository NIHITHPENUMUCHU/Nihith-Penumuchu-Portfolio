import React from 'react';

export function Stats() {
  return (
    <div className="container mx-auto mt-20">
      <div className="grid grid-cols-4 gap-8">
        <div className="text-center">
          <h3 className="text-5xl font-bold mb-2">12</h3>
          <p className="text-gray-400">Years of experience</p>
        </div>
        <div className="text-center">
          <h3 className="text-5xl font-bold mb-2">26</h3>
          <p className="text-gray-400">Projects completed</p>
        </div>
        <div className="text-center">
          <h3 className="text-5xl font-bold mb-2">8</h3>
          <p className="text-gray-400">Technologies mastered</p>
        </div>
        <div className="text-center">
          <h3 className="text-5xl font-bold mb-2">499</h3>
          <p className="text-gray-400">Code commits</p>
        </div>
      </div>
    </div>
  );
}