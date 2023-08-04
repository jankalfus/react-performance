import { useState } from "react";
import { SlowComponent } from "../shared/SlowComponent";

export const ComponentsAsChildren = () => {
  const [scrollY, setScrollY] = useState(0);
  return (
    <>
      <div>scrollY (for debug): {scrollY}</div>
      <div
        className="border rounded"
        onScroll={(e) => {
          setScrollY(e.currentTarget.scrollTop);
        }}
        style={{
          width: "95vw",
          height: "50vh",
          textAlign: "center",
          overflowY: "scroll",
        }}
      >
        <Menu collapsed={scrollY > 0} />
        <SlowComponent />
        <SlowComponent />
        <SlowComponent />
        <SlowComponent />
        <SlowComponent />
        <SlowComponent />
        <SlowComponent />
        <SlowComponent />
        <SlowComponent />
        <SlowComponent />
        <SlowComponent />
        <SlowComponent />
        <SlowComponent />
        <SlowComponent />
        <SlowComponent />
        <SlowComponent />
        <SlowComponent />
        <SlowComponent />
        <SlowComponent />
        <SlowComponent />
      </div>
    </>
  );
};

const Menu = ({ collapsed }: { collapsed: boolean }) => {
  return (
    <>
      <div className="absolute">
        <div className="relative z-10">
          {collapsed ? <CompactMenu /> : <FullMenu />}
        </div>
      </div>
      <div style={{ marginTop: "calc(4rem + 42px)" }}></div>
    </>
  );
};

const MenuItems = ["Menu item 1", "Menu item 2", "Menu item 3"];
const FullMenu = () => {
  return (
    <ul
      style={{
        listStyleType: "none",
        display: "flex",
        gap: "1rem",
        padding: 0,
        margin: "2rem",
      }}
    >
      {MenuItems.map((item) => (
        <li key={item} className="btn">
          {item}
        </li>
      ))}
    </ul>
  );
};

const CompactMenu = () => {
  return (
    <button className="btn btn-square m-8">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block w-5 h-5 stroke-current"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"
        ></path>
      </svg>
    </button>
  );
};
