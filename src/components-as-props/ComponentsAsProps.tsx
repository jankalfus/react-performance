import { useState } from "react";
import { SlowComponent } from "../shared/SlowComponent";

export const ComponentsAsProps = () => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="border rounded-lg flex overflow-hidden pr-4 relative">
      <div>
        <Content onShowDetailsClick={() => setShowDetails(true)} />
      </div>
      <div
        className="absolute w-[300px] h-full bg-white border rounded-lg drop-shadow-lg transition-all duration-200"
        style={{ right: showDetails ? 0 : -280 }}
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
    <div className="p-4 flex flex-col items-start gap-4">
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
      <button className="btn" onClick={onShowDetailsClick}>
        Show me the details
      </button>
    </div>
  );
};

const Details = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="flex flex-col items-start gap-4 p-4">
      <p>Details are here</p>
      <SlowComponent />
      <SlowComponent />
      <SlowComponent />
      <button className="btn" onClick={onClose}>
        Close
      </button>
    </div>
  );
};
