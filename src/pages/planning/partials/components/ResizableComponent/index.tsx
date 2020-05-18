import React, { useEffect, useState } from "react";
import { Resizable } from "re-resizable";
import { ORDER_HEIGHT } from "../../../constants";

interface IProps {
  start: number;
  end: number;
  onResize: (newStart: number, newEnd: number) => void;
  direction?: "left" | "right" | "both";
  style?: React.CSSProperties;
}

const ResizableComponent: React.FC<IProps> = ({
  children,
  start,
  end,
  onResize,
  direction = "both",
  style = {}
}) => {
  const [left, setLeft] = useState(start);
  const [tempLeft, setTempLeft] = useState(start);
  const [right, setRight] = useState(end);
  const [tempRight, setTempRight] = useState(end);
  const [width, setWidth] = useState(end - start);

  // if the order was dragged
  useEffect(() => {
    setLeft(start);
    setTempLeft(start);
    setRight(end);
    setTempRight(end);
    setWidth(end - start);
  }, [start, end]);

  const handleResizeStart = () => {
    setTempLeft(left);
    setTempRight(right);
  };

  const handleResizeStop = () => {
    setWidth(right - left);
    onResize(left, right);
  };

  const handleResize = (e, direction, ref, d) => {
    e.preventDefault();
    if (direction === "left") {
      setLeft(tempLeft - d.width);
    } else {
      setRight(tempRight + d.width);
    }
  };

  return (
    <Resizable
      style={{ ...style, left }}
      size={{
        width,
        height: ORDER_HEIGHT
      }}
      onResize={handleResize}
      onResizeStart={handleResizeStart}
      onResizeStop={handleResizeStop}
      enable={{
        left: direction === "left" || direction === "both",
        right: direction === "right" || direction === "both"
      }}
    >
      {children}
    </Resizable>
  );
};

export default ResizableComponent;
