export class Dabriel {
  constructor(stats) {
    this.name = 'Dabriel';
    this.hitValue = calculateHitValue(...stats);
  }
}

export class Guarte {
  constructor(stats) {
    this.name = 'Guarte';
    this.hitValue = calculateHitValue(...stats);
  }
}

export function calculateHitValue(bonus, atk, def, playerLvl) {
  let hitValue = (atk + def) / 2
  if (playerLvl % 2 === 0) hitValue += bonus;
  return hitValue
}

export function pomekonBattle({ dabrielStats = [], guartStats = [] }) {
  const dabriel = new Dabriel(dabrielStats);
  const guarte = new Guarte(guartStats);
  if (dabriel.hitValue === guarte.hitValue) return 'Draw';
  return dabriel.hitValue > guarte.hitValue ? dabriel.name : guarte.name;
}
