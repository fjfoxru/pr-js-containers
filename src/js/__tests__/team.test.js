import Team from '../team';
import Character from '../character';

const ivan = new Character('Иван');
const vasya = new Character('Вася');
const oleg = new Character('Олег');
const igor = new Character('Игорь');

it('работает добавление по одному', () => {
  const team = new Team();
  team.members.add(ivan);
  expect(team.members.has(ivan)).toBe(true);
});

it('один не добавляется несколько раз, выдаст ошибку', () => {
    const team = new Team();
    expect(() => {
        team.add(ivan);
        team.add(ivan);
    }).toThrow();
  });

  it('Объект класса не Character не добавится ', () => {
    const team = new Team();
        team.add({'222': 'g', '444': 'ddd'});
        expect(team.members.size).toBe(0);
  });

  it('Добавление нескольких, другого инстанса и повторяющиеся - не добавятся', () => {
    const team = new Team();
        team.addAll(ivan, vasya, oleg, igor, {}, igor);
        expect(team.members.size).toBe(4);
  });

  it('Получается массив из set в toArray', () => {
    const team = new Team();
    team.addAll(ivan, vasya, oleg, igor);
    const testToArray = team.toArray();
    expect(Array.isArray(testToArray)).toBe(true);
  });




