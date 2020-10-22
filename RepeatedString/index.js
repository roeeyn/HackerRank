module.exports = (str, consideredChars) => {
  const reducFn = (carry, letter) => carry + (letter === "a" ? 1 : 0);
  const getA = anotherStr => anotherStr.split("").reduce(reducFn, 0);
  const times2Repeat = Math.floor(consideredChars / str.length);
  return (
    getA(str) * times2Repeat + getA(str.slice(0, consideredChars % str.length))
  );
};
