

export const cleanData = (response, user) => {
  return Object.assign({id: response.id}, user)
}


// export const queryDatabase = (id, email) => {
//   fetch('http://localhost:3000/api/users/')
// }
