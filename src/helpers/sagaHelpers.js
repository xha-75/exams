import { eventChannel } from 'redux-saga';

function databaseCreatedEventChannel(dbRef) {
  const listener = eventChannel((emit) => {
    dbRef
      .on(
        'child_added',
        data => emit({ key: data.key, item: data.val() }),
      );
    return () => dbRef.off(listener);
  });
  return listener;
}

function databaseUpdatedEventChannel(dbRef) {
  const listener = eventChannel((emit) => {
    dbRef
      .on(
        'child_changed',
        data => emit({ key: data.key, item: data.val() }),
      );
    return () => dbRef.off(listener);
  });
  return listener;
}

export {
  databaseCreatedEventChannel,
  databaseUpdatedEventChannel,
};