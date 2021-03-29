import { calculateHitValue, pomekonBattle, Dabriel, Guarte } from './dojo';

describe('calculateHitValue', () => {
  describe('when players level is odd', () => {
    it('should return 17.5 as hit value', () => {
      const hitValue = calculateHitValue(5, 12, 23, 15);
      expect(hitValue).toBe(17.5);
    });
    it('should return 15 as hit value', () => {
      const hitValue = calculateHitValue(5, 20, 10, 15);
      expect(hitValue).toBe(15);
    });
  });

  describe('when players level is even', () => {
    it('should return 20 as hit value', () => {
      const hitValue = calculateHitValue(5, 20, 10, 10);
      expect(hitValue).toBe(20);
    });
    it('should return 34.5 as hit value', () => {
      const hitValue = calculateHitValue(10, 32, 17, 20);
      expect(hitValue).toBe(34.5);
    });
  });
});

describe('pomekonBattle', () => {
  it('should return the winner with type string', () => {
    const winner = pomekonBattle({});
    expect(typeof winner).toBe('string');
  });
  it('should return Guarte as the winner', () => {
    const winner = pomekonBattle({
      dabrielStats: [5, 5, 5, 5],
      guartStats: [5, 10, 5, 5],
    });
    expect(winner).toBe('Guarte');
  });
  it('should return Dabriel as the winner', () => {
    const winner = pomekonBattle({
      dabrielStats: [5, 10, 5, 5],
      guartStats: [5, 5, 5, 5],
    });
    expect(winner).toBe('Dabriel');
  });
  it('should return Draw', () => {
    const winner = pomekonBattle({
      dabrielStats: [5, 10, 5, 5],
      guartStats: [5, 10, 5, 5],
    });
    expect(winner).toBe('Draw');
  });
});

describe('Dabriel', () => {
  it('should have name Dabriel', () => {
    const player = new Dabriel([]);
    expect(player.name).toBe('Dabriel');
  });
});
describe('Guarte', () => {
  it('should have name Guarte', () => {
    const player = new Guarte([]);
    expect(player.name).toBe('Guarte');
  });
});