import Dexie from "dexie";

const db = new Dexie("findehome");
db.version(1).stores({
  favoriteItems: `rent, size, location`,
});

export default db;
