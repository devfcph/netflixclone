function getRandom(number) {
  return Math.floor(Math.random() * number );
}

const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + '...';
    } else {
      return str;
    }
  };

export { getRandom, truncateString };
