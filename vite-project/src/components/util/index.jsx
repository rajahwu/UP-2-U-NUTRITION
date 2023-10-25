// passing an array of elements to return a random one
export const randomElement = (arr) => {
    const itemNumber = Math.floor(Math.random() * (arr.length));
    return arr[itemNumber];
};
