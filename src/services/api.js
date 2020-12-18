export function getFetch(_search) {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${_search}`;
  return fetch(url)
    .then((r) => r.json())
    .then((d) => d.drinks)
    .catch((e) => console.error(e));
}

export function getFetchById(id) {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
  return fetch(url)
    .then((r) => r.json())
    .then((d) => d.drinks[0])
    .catch((e) => console.error(e));
}
