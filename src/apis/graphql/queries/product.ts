// queries
export const getAllProducts = `query getAllProducts($offset: Int!, $limit: Int!){
  getAllProducts(offset: $offset, limit: $limit) {
    count
    rows{
      id
    }
  }
}`;

// mutations
export const createProductCategory = `mutation createProductCategory($title: String!){
  createProductCategory(title: $title) {
    id
  }
}`;

export const createProduct = `mutation createProduct($categoryId: ID!, $typeId: ID!, $vendorId: ID!, $subCategoryId: ID, $brandId: ID, $name: String!, $numberOfStock: Int!, $price: Decimal!, $actualPrice: Decimal!, $discount: Int!, $specification: JSON, $images: JSON!, $deliveryCharges: Decimal, $currency: String!, $description: String!) {
  createProduct(categoryId: $categoryId, typeId: $typeId, vendorId: $vendorId, subCategoryId: $subCategoryId, brandId: $brandId, name: $name, numberOfStock: $numberOfStock, price: $price, actualPrice: $actualPrice, discount: $discount, specification: $specification, images: $images, deliveryCharges: $deliveryCharges, currency: $currency, description: $description) {
    id
  }
}`;
