import { useEffect, useRef } from "react";
import "gridstack/dist/gridstack.css";
import "gridstack/dist/gridstack.min.css";
import { GridStack } from "gridstack";

export default function TestPage() {
  const gridRef = useRef(null);
  const subGridRef = useRef(null);

  useEffect(() => {
    // Initialize the main Gridstack
    const grid = GridStack.init(
      {
        staticGrid: false, // Enable dragging and resizing
        float: true, // Items will float above the grid container
        resizable: { handles: "se" }, // Resizable from the bottom-right
      },
      gridRef.current
    );

    // Initialize the nested sub-grid
    const subGrid = GridStack.init(
      {
        staticGrid: false, // Enable dragging and resizing for nested grid
      },
      subGridRef.current
    );

    return () => {
      // Clean up the grid instances when the component is unmounted
      grid.destroy();
      subGrid.destroy();
    };
  }, []);

  return (
    <div style={{ border: "2px solid", width: "100%", height: "100%" }}>
      <div
        ref={gridRef}
        className="grid-stack"
        style={{ border: "2px solid", height: "100%" }}
      >
        <div className="grid-stack-item" data-gs-width="4" data-gs-height="4">
          <div className="grid-stack-item-content">
            <h3>Main Grid Item 1</h3>
            {/* Nested sub-grid inside this item */}
            <div
              ref={subGridRef}
              className="grid-stack sub-grid"
              style={{ border: "2px solid" }}
            >
              <div
                className="grid-stack-item"
                data-gs-width="4"
                data-gs-height="4"
                style={{ border: "2px solid" }}
              >
                <div className="grid-stack-item-content">
                  <h4>Sub Grid Item 1</h4>
                </div>
              </div>
              <div
                className="grid-stack-item"
                data-gs-width="4"
                data-gs-height="4"
                style={{ border: "2px solid" }}
              >
                <div className="grid-stack-item-content">
                  <h4>Sub Grid Item 2</h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid-stack-item" data-gs-width="4" data-gs-height="2">
          <div className="grid-stack-item-content">
            <h3>Main Grid Item 2</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
