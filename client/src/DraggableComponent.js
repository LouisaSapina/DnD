import React, { useRef, useState } from 'react';

function DraggableComponent() {
  const draggableRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  const handleTouchStart = (event) => {
    const touch = event.touches[0];
    const { left, top } = draggableRef.current.getBoundingClientRect();
    setIsDragging(true);
    setDragOffset({
      x: touch.clientX - left,
      y: touch.clientY - top,
    });
  };

  const handleTouchMove = (event) => {
    if (isDragging) {
      const touch = event.touches[0];
      setPosition({
        x: touch.clientX - dragOffset.x,
        y: touch.clientY - dragOffset.y,
      });
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <div
      ref={draggableRef}
      style={{
        width: '200px',
        height: '200px',
        background: 'lime',
        position: 'absolute',
        left: position.x,
        top: position.y,
        cursor: 'move',
      }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      Drag me!
    </div>
  );
}

export default DraggableComponent;
