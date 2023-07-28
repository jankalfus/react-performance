import { useState } from "react";
import { SlowComponent } from "../shared/SlowComponent";

export const ComponentsAsChildren = () => {
  const [scrollY, setScrollY] = useState(0);
  return (
    <>
      <div>scrollY (for debug): {scrollY}</div>
      <div
        onScroll={(e) => {
          setScrollY(e.currentTarget.scrollTop);
        }}
        style={{
          width: "95vw",
          height: "50vh",
          border: "1px solid black",
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
      <div style={{ position: "absolute" }}>
        {collapsed ? <CompactMenu /> : <FullMenu />}
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
        <li
          key={item}
          style={{
            border: "1px solid black",
            padding: "0.5rem",
            background: "lightgrey",
            cursor: "pointer",
          }}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

const CompactMenu = () => {
  return (
    <div
      style={{
        border: "1px solid black",
        margin: "2rem",
        padding: "0.5rem",
        background: "lightgrey",
        cursor: "pointer",
      }}
    >
      Hamburger
    </div>
  );
};
