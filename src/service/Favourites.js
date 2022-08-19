import {openDatabase} from 'react-native-sqlite-storage';

export function getFavouriteServers() {
  const db = openDatabase({name: 'favourites.db', createFromLocation: 1});
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql('SELECT * FROM favourites', [], function (tx, results) {
        resolve(results);
      });
    });
  });
}
export function setFavouriteServers(id) {
  const db = openDatabase({name: 'favourites.db', createFromLocation: 1});
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO favourites (sid) Values (?)',
        [id],
        (tx, results) => {
          console.log(results.rowsAffected, ' Rows Inserted');
          resolve(results.rowsAffected);
        },
        err => {
          reject(err);
        },
      );
    });
  });
}
export function deleteFavouriteServers(id) {
  const db = openDatabase({name: 'favourites.db', createFromLocation: 1});
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'DELETE from favourites where sid=?',
        [id],
        (tx, results) => {
          console.log(results.rowsAffected, ' Rows Deleted');
          resolve(results.rowsAffected);
        },
        err => {
          reject(err);
        },
      );
    });
  });
}
