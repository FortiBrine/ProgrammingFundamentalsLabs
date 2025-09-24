
const countTypesInArray = (arr) => {
  const typeCount = {};
  for (const item of arr) {
    let type = typeof item;
    if (item === null) type = 'null';

    if (!typeCount[type]) typeCount[type] = 0;

    typeCount[type] += 1;
  }

  return typeCount;
};

const arr = [true, 'hello', 5, 12, -200, false, false, 'word', 3.14, null, undefined, {a:1}, [1,2], function(){}];

console.dir(countTypesInArray(arr));
