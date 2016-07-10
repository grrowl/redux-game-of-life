import Seedrandom from 'seedrandom'

export const randomizer = (seed) => {
  const random = new Seedrandom(seed)
  return (y, x) => random(x + y) > 0.8
}
