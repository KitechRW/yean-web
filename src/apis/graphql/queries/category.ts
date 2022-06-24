export const getAllProductCategories = `query getAllProductCategories($offset: Int!, $limit: Int!){
  getAllProductCategories(offset: $offset, limit: $limit) {
    rows{
      id
      title
    }
  }
}`;
