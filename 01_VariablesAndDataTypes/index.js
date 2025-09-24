function inc(n) {
  return n + 1;
}

const a = 5;
const b = inc(a);
console.dir({ a, b });

function inc2(obj) {
  obj.n += 1;
}

const obj = { n: 5 };
inc2(obj);
console.dir(obj);

const arr = [true, 'hello', 5, 12, -200, false, false, 'word', 3.14, null, undefined, {a:1}, [1,2], function(){}];
const typeCount = {};

for (const item of arr) {
  let type = typeof item;
  if (item === null) type = 'null';

  if (!typeCount[type]) typeCount[type] = 0;

  typeCount[type] += 1;
}

console.dir(typeCount);
