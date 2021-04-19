const items = [
  ['Body długie', 'body_long'],
  ['Body krótkie', 'body_short'],
  ['Czapki', 'cap'],
  ['Koce', 'blankets'],
  // ['Kombinezony', 'suits'],
  ['Koszulki', 'tshirts'],
  ['Majtki', 'panties'],
  ['Pajacyki', 'rompers'],
  ['Pieluchy tetrowe', 'diapers_tetra'],
  ['Pieluchy wielorazowe', 'diapers_reusable'],
  ['Prześcieradła łóżeczkowe', 'sheets_crib'],
  ['Prześcieradła wózkowe', 'sheets_stroller'],
  ['Rampersy', 'rampers'],
  ['Ręczniki kąpielowe', 'bath_towels'],
  ['Rękawiczki', 'gloves'],
  ['Rożki', 'cornets'],
  ['Różne', 'misc'],
  ['Skarpetki', 'socks'],
  ['Spodnie', 'pants'],
  ['Spódniczki', 'skirts'],
  ['Sukienki', 'dresses'],
  ['Sweterki', 'sweter'],
  ['Szaliki', 'scarves'],
  ['Śpiochy', 'sleepers'],
  ['Śpiworki', 'sleeping_bags'],
]

const h = (className, tagName = 'div') => {
  const el = document.createElement(tagName);
  el.className = className;
  return el;
};

const itemH = ([label, source]) => {
  const img = h('item__image', 'img');
  img.src = `img/${source}.png`;
  // img.src = `body_long.png`;
  const text = h('item__text');
  text.textContent = label;
  const item = h('item');
  item.appendChild(img);
  item.appendChild(text);
  return item;
}


window.addEventListener('DOMContentLoaded',  () => {
  const itemEls = items.map(item => itemH(item));
  const chunk = 8;

  for (let i=0,j=itemEls.length; i<j; i+=chunk) {
    const container = h('notes');
    const arr = itemEls.slice(i,i+chunk);
    arr.forEach(itemEl => container.appendChild(itemEl));
    document.body.appendChild(container);
  }
});
