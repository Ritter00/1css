const list = `<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>`
// создаем новый объект
const parser = new DOMParser();
// парсим
const xmlPars = parser.parseFromString(list, 'text/xml');
// получаем нужные объкты
const name1 = xmlPars.querySelectorAll('first');
const name2 = xmlPars.querySelectorAll('second');
const age1 = xmlPars.querySelectorAll('age');
const prof1 = xmlPars.querySelectorAll('prof');
// получаем атрибуты
const lang1Attr1 = xmlPars.querySelectorAll('name')[0].getAttribute('lang');
const lang1Attr2 = xmlPars.querySelectorAll('name')[1].getAttribute('lang');
// через .textContent получаем текстовой значение
const res = [{
  name: `${name1[0].textContent}  ${name2[0].textContent}`,
  age : +(age1[0].textContent),
  prof: prof1[0].textContent,
  lang: lang1Attr1
},
  {
  name: `${name1[1].textContent}  ${name2[1].textContent}`,
  age : +(age1[1].textContent),
  prof: prof1[1].textContent,
  lang: lang1Attr2
},
            ]
console.log(res);
