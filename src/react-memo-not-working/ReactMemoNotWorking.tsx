import { useCallback, useState } from "react";
import "../App.css";
import React from "react";

const GrandParent = () => {
  const [, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount((count) => count + 1)}>
        Increase count
      </button>
      <MyComponent />
    </>
  );
};

type ParentProps = {
  readonly children: React.ReactElement;
  readonly onClick: () => void;
};

const Parent = ({ children, onClick }: ParentProps) => (
  <div onClick={onClick}>Parent: {children}</div>
);
const MemoizedParent = React.memo(Parent);

const Child = () => <span>Child</span>;
const MemoizedChild = React.memo(Child);

function MyComponent() {
  const handleClick = useCallback(() => {
    console.log("something");
  }, []);

  return (
    <MemoizedParent onClick={handleClick}>
      <MemoizedChild />
    </MemoizedParent>
  );
}

export default GrandParent;
