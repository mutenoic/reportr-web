import { CACHE_SIZE_UNLIMITED, initializeFirestore, persistentLocalCache, persistentMultipleTabManager } from "firebase/firestore";

import { indexedDBLocalPersistence } from 'firebase/auth';

export default defineNuxtPlugin((nuxtApp) => {
  const firebaseApp = useFirebaseApp();

  const firestore = initializeFirestore(firebaseApp, {
    localCache: persistentLocalCache(
      {
        tabManager: persistentMultipleTabManager(),
        cacheSizeBytes: CACHE_SIZE_UNLIMITED,
      },
    ),
  });

  useFirebaseAuth()?.setPersistence(indexedDBLocalPersistence);
  console.log(firestore);
})

