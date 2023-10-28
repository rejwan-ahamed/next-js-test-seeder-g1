// working as server side component
const products = async () => {
  let response = await fetch("https://dummyjson.com/products");
  let data = await response.json();
  return data.products;
};

const ServerProductList = async () => {
  let productData = await products();
  return (
    <>
      {productData.map((data) => (
        <h4>{data.title}</h4>
      ))}
    </>
  );
};

export default ServerProductList;
