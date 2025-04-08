import React from 'react';

function HiddenComponent({ hidden }) {
  if (hidden) {
    return null;
  }

  return (
    <div className="hidden-component">
      <h3>This component is supposed to be hidden</h3>
      <p>If you can see this, there might be an issue with the 'hidden' prop!</p>
    </div>
  );
}

export default HiddenComponent;
