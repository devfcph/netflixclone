function getRandom(number) {
  return Math.floor(Math.random() * number);
}

const truncateString = (str, num) => {
  if (str?.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
};

function isValidPassword(str) {
  return (str !== '' && str.length >= 6);
}


export { getRandom, truncateString, isValidPassword };
