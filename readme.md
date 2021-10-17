## Задание
Реализовать функцию reduce с использованием асинхронного API из объекта Homework (см. playground.js)

Файл: file:/frontend2021/domashnie-zadanija/asinxronnost-dz/playground.js

Сигнатура функции:

```ts
type reduce = (
    array: AsyncArray
    fn: (
        acc: any,
        cur: any,
        i: number,
        src: AsyncArray,
        cb: (result: any) => void
    ) => void
    initialValue: any
    cb: (result: any) => void
) => void
```

Пример:

```js
const asyncArray = new Homework.AsyncArray([1, 2, 3, 4]);
const reducerSum = (acc, curr, i, src, cb) => Homework.add(acc, curr, cb);

reduce(asyncArray, reducerSum, 0, (res) => {
  console.log(res); // 10
});
```

## Ограничения

Решение должно работать на Node.js 16

Запрещено использовать:

- Арифметические операции и операции сравнения. Вместо них следует вызывать функции из Homework
- Любые операции для работы с массивами. Доступны только методы AsyncArray
- Импорты. Весь вспомогательный код следует положить в замыкание (см. оформление)
- Комментарии в коде не проходят автотесты

## Оформление

Задачу решить в отдельном репозитории. Решение положить в папку `solution` в файл `index.js` и оформить по шаблону:

```js
// solution/index.js
module.exports = function (Homework) {
  // вспомогательные фукнции и т.д.

  return (array, fn, initialValue, cb) => {
    // асинхронный reduce
  };
};
```

Кроме директории с решение приветствуется добавление ридми, тестов, линтеров и т.д.

## P.S.

Рекомендуется придумать как перейти от функций обратного вызова к async/await. Решение только через колбеки будет работать, но... действительно ли ты хочешь остаться в Callback Hell? :)
