import {encoded, translations} from './data.js'


console.log("Let's rock")
// console.log(encoded, translations)


function decodeFields(encoded, translations) { // 1. создаю функцию

  const decoded = encoded.map((item) => { // 2. расшифровываю id
    const decodedItem = { ...item }; // 3. кладу все в новый объект

    for (const key in decodedItem) { // 4. начинаю перебирать все значения

      if (key.endsWith("Id") && !["groupId", "service", "formatSize", "ca"].includes(key)) { // 5. пишу условие 
        const id = decodedItem[key]; // 6. извлекаю значения из ключей

        if (translations[id]) { // 7. меняю изначальные значения на значения из translations
          decodedItem[key] = translations[id];
        }
      }
    }
    return decodedItem; // 8. возвращаю новый объект
  });
  return decoded; // 9. возвращаю весь массив
}

const decoded = decodeFields(encoded, translations); // 10. кладу в переменную вызов всей функции
console.log(decoded); // 11. вызываю ее




const uniqueIds = [...new Set(encoded.flatMap(item => Object.values(item)).filter(id => translations[id]))]; // 1. кладу в массив только уникальные id
console.log("Unique ID:", uniqueIds); // 2. вывожу их в консоль