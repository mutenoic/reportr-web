export const useOrganizationId = async () => {
  const {
    data: profile,
    promise: profilePromise,
  } = useProfileDoc()

  await profilePromise.value;

  switch (profile.value?.role) {
    case 'organization':
      return ref(profile.value?.id)

    case 'employee':
      return ref(profile.value?.organization)

    default:
      return ref("")
  }
}
