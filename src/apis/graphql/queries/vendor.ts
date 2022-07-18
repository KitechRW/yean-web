export const getAllVendors = `query getAllVendors($offset: Int!, $limit: Int!){
  getAllVendors(offset: $offset, limit: $limit) {
    rows{
      id
    }
  }
}`;
