import { heroes } from "../data/heroes";

export const getHeroesByPublisher = (publisher) => {
  const validPublishers = ["DC Comics", "Marvel Comics"];

  if (!validPublishers.includes(publisher)) {
    throw Error`El publisher ${publisher} no es valido`;
  }

  return heroes.filter((hero) => hero.publisher === publisher);
};
