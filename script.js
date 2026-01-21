class Player {
  constructor(number, ign, role, target = null) {
    this.number = number;
    this.ign = ign;
    this.role = role;
    this.target = target;
  }
}

const Role = {
  Doctor: 0,
  Assassin: 1,
  Butler: 2,
};

const players = [
  new Player(10, "Alice", Role.Doctor, null), // "You will do nothing.", "You did nothing last night.", "You were attacked.", "You died!"
  new Player(4, "Bob", Role.Assassin, 10), // "You will attack ([10] Alice).", "You attacked ([10] Alice).", "You killed ([10] Alice)!"
  new Player(3, "Eve", Role.Butler, 7), // "You will roleblock ([7] Mallory).", "You tried to roleblock ([7] Mallory).", "You successfully roleblocked ([7] Mallory)!"
  new Player(7, "Mallory", Role.Assassin, 3), // "You will attack ([3] Eve).", "You were roleblocked and couldn't act."
  new Player(0, "Trent", Role.Doctor, 6), // "You will heal ([6] Charlie).", "You healed ([6] Charlie).", "You saved ([6] Charlie)!"
  new Player(6, "Charlie", Role.Butler, 3), // "You will roleblock ([3] Eve).", "You tried to roleblock ([3] Eve).", "You were attacked.", "You were attacked.", "You were healed!", "You failed to roleblock ([3] Eve)."
  new Player(9, "Dave", Role.Assassin, 6), // "You will attack ([6] Charlie).", "You attacked ([6] Charlie).", "([6] Charlie) survived your attack."
  new Player(2, "Grace", Role.Butler, 6), // "You will roleblock ([6] Charlie).", "You tried to roleblock ([6] Charlie).", "You failed to roleblock ([6] Charlie)."
  new Player(8, "Ivan", Role.Assassin, 6), // "You will attack ([6] Charlie).", "You attacked ([6] Charlie).", "([6] Charlie) survived your attack."
  new Player(5, "Frank", Role.Doctor, 1), // "You will do nothing.", "You did nothing last night."
  new Player(1, "Walter", Role.Assassin, 5), // no feedback
];
