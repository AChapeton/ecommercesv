/*Reconoce cuando el usuario ha iniciado sesión*/
import { auth } from './setup';

export function watchUserChanges(callback) {
  const unsub = auth.onAuthStateChanged((user) => {
    if (user && !user.isAnonymous) {
      console.log('Logged in');
      callback({
        id: user.uid,
        email: user.email,
        displayName: user.displayName,
      });
    } else {
      console.log('NOT logged in');
      callback(null);
    }
  });

  return unsub;
}
