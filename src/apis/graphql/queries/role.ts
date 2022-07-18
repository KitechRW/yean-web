export const getAllRoles = `query getAllRoles($offset: Int!, $limit: Int!){
  getAllRoles(offset: $offset, limit: $limit) {
    rows{
      id
      name
    }
  }
}`;
