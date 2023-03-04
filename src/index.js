export const personages = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
];

export default function sortPersonages(arr) {
  const sortPersonage = [];

  const arrHealth = arr.map((i) => i.health).sort((a, b) => a - b).reverse();

  arrHealth.forEach((i) => sortPersonage.push(arr.find((y) => y.health === i)));

  return sortPersonage;
}
