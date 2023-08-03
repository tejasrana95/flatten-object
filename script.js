const input = {
  a: {
    b: {
      c: 1,
    },
  },
  d: {
    e: {
      f: {
        g: {
          f: {
            g: 2,
          },
        },
      },
    },
  },
  h: 3,
  x: 4,
};

function flattenObject(obj, prefix = '') {
  const tempOutput = {};
  Object.keys(obj).forEach((data, index) => {
    if (typeof obj[data] === 'object') {
      const newKeysObj = flattenObject(obj[data], `${prefix}${data}.`);
      Object.assign(tempOutput, newKeysObj);
    } else {
      tempOutput[`${prefix}${data}.`] = obj[data];
    }
  });
  return tempOutput;
}

const a = flattenObject(input);
console.log(a);
/**
     * 
     * {
        "a.b.c": 1,
        "d.e.f.g": 2,
        "h": 3,
        "x": 4
    }
     */
