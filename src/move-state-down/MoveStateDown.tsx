import { useState } from "react";
import { SlowComponent } from "../shared/SlowComponent";

export const MoveStateDown = () => {
  const [value, setValue] = useState("");
  return (
    <>
      <input
        className="input input-bordered w-full max-w-xs mb-4"
        placeholder="Type something here"
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <SlowComponent />
    </>
  );
};
