import {encoded, translations} from './data.js'

console.log("Let's rock")

const iteratedIds = [];
const uniqueIds = new Set();

const result = encoded.map(item => {
  const resultObject = {};

  Object.keys(item).forEach(itemKey => {
    if(itemKey !== 'groupId' && itemKey !== 'service' && itemKey !== 'formatSize' && itemKey !== 'ca') {
      const translation = translations[item[itemKey]] || null;

      if(translation) {
        if(!uniqueIds.has(item[itemKey]) && !iteratedIds.includes(item[itemKey])) {
          uniqueIds.add(item[itemKey]);
          iteratedIds.push(item[itemKey]);
        } else if(uniqueIds.has(item[itemKey])) {
          uniqueIds.delete(item[itemKey]);
        }
      }

      resultObject[itemKey] = translation;
    } else {
      resultObject[itemKey] = item[itemKey]
    }
  });

  return resultObject;
});

console.log(result);
console.log(uniqueIds)