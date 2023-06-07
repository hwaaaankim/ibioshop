import Breadcrumb from "../components/product/Breadcrumb"
import ProductPreview from "../components/product/ProductPreview"
import ProductTab from "../components/product/ProductTab"
import RelatedProducts from "../components/product/RelatedProducts"
import Categories from "../components/product/Categories"
import LatestProducts from "../components/product/LatestProducts"
import BannerSidebar from "../components/product/BannerSidebar"

function Product() {
  return (
    <div className="w-full p-10">
      <Breadcrumb />
      <div className="w-full flex">
        <div className="w-[79%] flex flex-col">
          <ProductPreview />
          <ProductTab />
          <RelatedProducts />
        </div>
        <div className="w-[21%] flex flex-col px-[15px]">
          <Categories />
          <LatestProducts />
          <BannerSidebar />
        </div>
      </div>
    </div>
  )
}

export default Product