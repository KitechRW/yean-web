export const getAllUsers = `query getAllUsers($offset: Int!, $limit: Int!){
  getAllUsers(offset: $offset, limit: $limit) {
    rows{
      id
      firstName,
      email
    }
  }
}`;
