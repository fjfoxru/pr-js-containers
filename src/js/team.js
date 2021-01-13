import Character from './character';

export default class Team {
  constructor() {
      this.members = new Set();
  }
  add(person) {
    if (person instanceof Character) {
      try {
        if (this.members.has(person)) {
          throw new Error('Уже есть такой');
        }
        this.members.add(person);
      } catch(error) {
        console.log(error);
        throw error;
      }
      
    }

  }
  addAll(...persons) {
    persons.forEach(elPerson => {
      if (elPerson instanceof Character) {
        this.members.add(elPerson);
      }
    });

  }
  toArray() {
    return [...this.members];
  }
  
}



