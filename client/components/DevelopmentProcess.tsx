import { useState, useRef } from "react";
import DevelopmentStages from "./DevelopmentStages";
import ProcessDetails from "./ProcessDetail";

export default function DevelopmentProcess() {
  // Track which stage is being hovered (null means no hover)
  const [hoveredStage, setHoveredStage] = useState<number | null>(null);

  return (
    <div className="development-process bg-black">
      <DevelopmentStages onStageHover={setHoveredStage} />
      <ProcessDetails hoveredStage={hoveredStage} />
    </div>
  );
}
