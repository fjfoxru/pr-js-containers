
// 1 задание
import Team from './team';
import Character from './character';


  const ivan = new Character('Иван');
  const vasya = new Character('Вася');
  const oleg = new Character('Олег');
  const igor = new Character('Игорь');

const team = new Team();
console.log(team);
team.add(oleg);
console.log(team);
team.add(ivan);
const array = team.toArray();
console.log(array);
console.log(team);
team.addAll(vasya, igor, igor);
console.log(team);


// 2 задание
// import ErrorRepository from './errorRepository';
// const errorRepository = new ErrorRepository();
// errorRepository.add('1', 'error1');
// errorRepository.add('2', 'error2');
// errorRepository.add('3', 'error3');
// console.log(typeof errorRepository.view());
// console.log(errorRepository.translate('1'));
// console.log(errorRepository.translate('3'));