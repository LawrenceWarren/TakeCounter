import React, { useState } from "react";

function SelectDirectoryButton({ className }) {
  const [selectedPath, setSelectedPath] = useState(null);

  const handleSelectDirectory = async () => {
    const folderPath = await window.electronAPI.selectDirectory();
    if (folderPath) {
      console.log("Selected folder path:", folderPath);
      setSelectedPath(folderPath);
      // You can trigger polling or file watching from here
    }
  };

  return (
    <div style={{ padding: "1rem", fontFamily: "sans-serif" }}>
      <button
        onClick={handleSelectDirectory}
        className={className || "btn btn-primary m-1"}
      >
        Select Folder
      </button>

      {selectedPath && (
        <div style={{ marginTop: "1rem", color: "#4b5563" }}>
          <strong>Selected:</strong> {selectedPath}
        </div>
      )}
    </div>
  );
}

export default SelectDirectoryButton;
