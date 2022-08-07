export function User(user) {
  const defaultUser =  {
    email: "wofara2759@carsik.com",
    password: "123123"
  }

  return ({...defaultUser, ...user})
}
