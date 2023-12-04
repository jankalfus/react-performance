import { useCallback, useState } from "react";
import React from "react";

export const ReactMemoNotWorking = () => {
  // Don’t touch this component, this is here only to simulate re-rendering parent of MyComponent
  const [, setCount] = useState(0);

  return (
    <>
      <button className="btn" onClick={() => setCount((count) => count + 1)}>
        Simulate MyComponent re-render
      </button>
      <MyComponent />
    </>
  );
};

type ComponentAProps = {
  readonly children: React.ReactElement;
  readonly onClick: () => void;
};

const ComponentA = ({ children, onClick }: ComponentAProps) => (
  <div onClick={onClick}>Component A: {children}</div>
);
const MemoizedComponentA = React.memo(ComponentA);

const ComponentB = () => <span>Component B</span>;
const MemoizedComponentB = React.memo(ComponentB);

function MyComponent() {
  const handleClick = useCallback(() => {
    console.log("something");
  }, []);

  return (
    <MemoizedComponentA onClick={handleClick}>
      <MemoizedComponentB />
    </MemoizedComponentA>
  );
}
