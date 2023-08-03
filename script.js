const input = {
  a: {
    b: {
      c: 1,
    },
  },
  d: {
    e: {
      f: {
        g: 2,
      },
    },
  },
  h: 3,
  x: 4,
};

const tempOutput = {};

function a(obj, key) {
  if (typeof obj === 'Object') {
    const temp = Object.keys(obj);
    console.log('temp', temp);
    temp.forEach((data) => {
      console.log('datab', data);
    });
  }
}

function b() {
  const temp = Object.keys(input);
  console.log('temp', temp);

  temp.forEach((data) => {
    console.log('data', data);
    if (typeof input[data] !== 'Object') {
      console.log(input[data]);
      a(input[data]);
    }
  });
}

b();

/**
     * 
     * {
        "a.b.c": 1,
        "d.e.f.g": 2,
        "h": 3,
        "x": 4
    }
     */
