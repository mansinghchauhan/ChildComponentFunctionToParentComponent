import { forwardRef, useImperativeHandle, useState } from "react";

const ChildBase = (props, ref) => {
  const [click, setClick] = useState(0);

  useImperativeHandle(ref, () => ({
    focus: () => {
      console.log("Input is in focus");
    },
    getCounterValue: () => {
      return click;
    },
    inc: () => {
      setClick(click + 1);
    },
    dec: () => {
      setClick(click - 1);
    },
  }));

  return (
    <div style={{ padding: 10, border: "2px solid red" }}>
      Child Counter Value: {click}
    </div>
  );
};

const Child = forwardRef(ChildBase);

export default Child;
