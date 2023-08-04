import { useState } from "react";

const MaxItems = 50;
const items = Array.from({ length: MaxItems }, (_, i) => ({
  id: i,
  name: `Item #${i + 1}`,
}));

export const ReactMemo = () => {
  const [listItems, setListItems] = useState(items);

  return (
    <>
      <input
        onChange={() => {
          setListItems((items) => {
            const indexToRemove = Math.floor(Math.random() * items.length);
            return items.filter((_, i) => i !== indexToRemove);
          });
        }}
        placeholder="Hide random item by typing"
      />
      <ul>
        {listItems.map((item) => (
          <ListItem key={item.id} name={item.name} />
        ))}
      </ul>
    </>
  );
};

const ListItem = ({ name }: { name: string }) => {
  for (let i = 0; i < 10000000; i++) {} // do not touch

  return <li>{name}</li>;
};
