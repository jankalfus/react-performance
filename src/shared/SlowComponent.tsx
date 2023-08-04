export const SlowComponent = () => {
  for (let i = 0; i < 100000000; i++) {}

  return (
    <div className="card w-full bg-base-100 p-8 border">
      I’m a slow component 😢
    </div>
  );
};
