import sortPersonages, { personages } from '../index';

test('check sort health', () => {
  const result = sortPersonages(personages);

  expect(result).toEqual([
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ]);
});
