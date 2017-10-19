

const cleanData = (response, user) => {
  return Object.assign({id: response.id}, user)
}

export default cleanData;
