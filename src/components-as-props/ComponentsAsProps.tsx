import { useState } from "react";
import { SlowComponent } from "../shared/SlowComponent";

export const ComponentsAsProps = () => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        overflowX: "hidden",
        border: "1px solid grey",
        paddingRight: 20,
        position: "relative",
      }}
    >
      <div style={{ flex: 1 }}>
        <Content onShowDetailsClick={() => setShowDetails(true)} />
      </div>
      <div
        style={{
          flex: "0 0 400px",
          border: "1px solid grey",
          position: "absolute",
          width: 300,
          right: showDetails ? 0 : -280,
          background: "white",
          height: "calc(100% - 2 * 1px)",
        }}
      >
        <Details onClose={() => setShowDetails(false)} />
      </div>
    </div>
  );
};

const Content = ({
  onShowDetailsClick,
}: {
  onShowDetailsClick: () => void;
}) => {
  return (
    <>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
        placerat vitae tellus vel imperdiet. Nunc faucibus, lectus sit amet
        fermentum tristique, ligula nulla suscipit nibh, sit amet interdum augue
        magna id lectus. Duis eu elementum enim. Ut ac ipsum ullamcorper odio
        tempus feugiat. Donec in feugiat augue, in facilisis sem. Integer
        facilisis ligula turpis, vel tincidunt metus cursus eget. In hac
        habitasse platea dictumst. Suspendisse accumsan maximus est sed
        ultricies. Morbi porttitor dictum lacinia. Vestibulum commodo placerat
        erat nec suscipit. Sed vitae orci in nisi efficitur interdum blandit
        fringilla erat. Ut non viverra quam. Mauris nec magna vel nisl
        scelerisque blandit. Nulla mollis metus in malesuada maximus. Phasellus
        interdum blandit mi vel maximus. Suspendisse vehicula fringilla ante.
      </p>
      <SlowComponent />
      <SlowComponent />
      <SlowComponent />
      <SlowComponent />
      <SlowComponent />
      <button onClick={onShowDetailsClick}>Show me the details</button>
    </>
  );
};

const Details = ({ onClose }: { onClose: () => void }) => {
  return (
    <div style={{ padding: "1rem" }}>
      <p>Details are here</p>
      <SlowComponent />
      <SlowComponent />
      <SlowComponent />
      <button onClick={onClose}>Close</button>
    </div>
  );
};
