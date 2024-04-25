import { collection, doc } from "@firebase/firestore";

export const useProfileDoc = async () => {
  await useFirebaseAuth()?.authStateReady();
  let user = useCurrentUser();
  console.log(user.value)
  console.log(user.value?.uid);

  let db = useFirestore();
  let profileDoc =
    useDocument(doc(collection(db, 'users'), `${user.value?.uid}`));

  console.log(profileDoc)
  return {
    promise: profileDoc.promise,
    data: profileDoc.data,
    error: profileDoc.error,
    loading: profileDoc.pending,
  };

}
