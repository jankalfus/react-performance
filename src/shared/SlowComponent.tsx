export const SlowComponent = () => {
  for (let i = 0; i < 100000000; i++) {}
  return null;
};
