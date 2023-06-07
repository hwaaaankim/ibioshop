function RelatedProducts() {
  const products = [
    {
      name: 'Lastrami bacon',
      picture: 'image/catalog/demo/product/270/h1.jpg',
      rating: 4,
      totalRatings: 2,
      price: 80,
      discounted: false,
      // discountedPrice: 85,
    },
    {
      name: 'Exceerur sint occaecat',
      picture: 'image/catalog/demo/product/270/h1.jpg',
      rating: 4,
      totalRatings: 3,
      price: 59,
      discounted: true,
      discountedPrice: 50,
      discountPercent: '-15%',
    },
    {
      name: 'Mapicola incidid',
      picture: 'image/catalog/demo/product/270/h1.jpg',
      rating: 4,
      totalRatings: 5,
      price: 60,
      discounted: false,
      discountedPrice: 85,
    },
    {
      name: 'Duis aute irure',
      picture: 'image/catalog/demo/product/270/h1.jpg',
      rating: 4,
      totalRatings: 2,
      price: 48,
      discounted: false,
      discountedPrice: 85,
      isNew: true,
    },
    {
      name: 'Excepteur sint occ',
      picture: 'image/catalog/demo/product/270/h1.jpg',
      rating: 4,
      totalRatings: 4,
      price: 90,
      discounted: false,
      // discountedPrice: 85,
    },
  ]

  return (
    <div className="pb-20">
      <h3 className="text-[16px] font-bold uppercase mb-2">Related Products</h3>
      <div className="grid grid-cols-5 gap-[30px]">
        {products.map((product, index) => (
          <div key={index} className="space-y-2">
            <div className="h-[180px] cursor-pointer group relative">
              <img
                src={product.picture}
                className="w-full h-full opacity-80 group-hover:opacity-100"
              />
              {product.discounted && (
                <div className="w-[38px] h-[38px] rounded-full flex items-center justify-center bg-[#ffd839] absolute right-[8px] top-[8px]">
                  <div className="text-xs font-semibold">{product.discountPercent}</div>
                </div>
              )}
              {product.isNew && (
                <div className="w-[38px] h-[38px] rounded-full flex items-center justify-center bg-[#53d542] absolute left-[8px] top-[8px]">
                  <div className="text-xs font-semibold">New</div>
                </div>
              )}
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="flex space-x-2 items-center">
                <div className="flex space-x-1 items-center">
                  {[1, 2, 3, 4, 5].map((sindex) => (
                    <i
                      key={sindex}
                      className="fa fa-star text-[#fec42d]"
                      style={{ fontSize: 12 }}
                    ></i>
                  ))}
                </div>
                <div className="text-[10px] text-[#333]">
                  ({product.totalRatings})
                </div>
              </div>
              <div className="text-[13px] text-[#333] font-medium">
                {product.name}
              </div>
              <div className="flex space-x-2 items-center justify-center">
                <div className="text-primary font-semibold">
                  $
                  {product.discounted
                    ? product.discountedPrice
                    : product.price}
                  .00
                </div>
                {product.discounted && (
                  <div className="line-through text-gray-600 text-sm">
                    ${product.price}.00
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default RelatedProducts;