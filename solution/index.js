module.exports = function (Homework) {
  return async function reduce(asyncArray, fn, initialValue, cb) {
    let accumulator = initialValue;
    let len = await new Promise((resolve) => asyncArray.length(resolve));
    let i = await new Promise((resolve) => Homework.add(0, 0, resolve));
    let indexIsLessThanLen = await new Promise((resolve) =>
      Homework.less(i, len, resolve)
    );

    while (indexIsLessThanLen) {
      let arrI = await new Promise((resolve) => asyncArray.get(i, resolve));

      accumulator = await new Promise((resolve) =>
        fn(accumulator, arrI, i, asyncArray, resolve)
      );

      i = await new Promise((resolve) => Homework.add(i, 1, resolve));

      indexIsLessThanLen = await new Promise((resolve) =>
        Homework.less(i, len, resolve)
      );
    }

    cb(accumulator);
  };
};
