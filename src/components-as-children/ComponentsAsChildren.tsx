import { useState } from "react";
import { SlowComponent } from "../shared/SlowComponent";

export const ComponentsAsChildren = () => {
  return (
    <>
      <CollapsibleMenu>
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
      </CollapsibleMenu>
    </>
  );
};

const CollapsibleMenu = ({
  children,
}: {
  children: React.ReactElement | ReadonlyArray<React.ReactElement>;
}) => {
  const [scrollY, setScrollY] = useState(0);
  return (
    <>
      <div>scrollY (for debug): {scrollY}</div>
      <div
        className="border rounded w-full min-h-96 max-h-[70vh] overflow-y-scroll"
        onScroll={(e) => {
          setScrollY(e.currentTarget.scrollTop);
        }}
      >
        <Menu collapsed={scrollY > 0} />
        {children}
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
      {/* heigh of buttons + margins */}
      <div className="mt-[calc(48px+2*16px)]"></div>
    </>
  );
};

const MenuItems = ["Menu item 1", "Menu item 2", "Menu item 3"];
const FullMenu = () => {
  return (
    <ul className="m-4 flex gap-2">
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
    <button className="btn btn-square m-4">
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
