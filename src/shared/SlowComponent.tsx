export const SlowComponent = () => {
  for (let i = 0; i < 100000000; i++) {}

  return (
    <div style={{ border: "1px solid black", margin: "2rem", padding: "1rem" }}>
      I’m a slow component :(
    </div>
  );
};
