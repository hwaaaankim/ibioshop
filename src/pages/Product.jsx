import Breadcrumb from "../components/product/Breadcrumb"
import ProductPreview from "../components/product/ProductPreview"
import ProductTab from "../components/product/ProductTab"
import RelatedProducts from "../components/product/RelatedProducts"
import Categories from "../components/product/Categories"
import LatestProducts from "../components/product/LatestProducts"
import BannerSidebar from "../components/product/BannerSidebar"

function Product() {
  return (
    <div className="w-full px-10 py-6">
      <Breadcrumb />
      <div className="w-full md:flex md:flex-row flex-col">
        <div className="xl:w-[79%] flex flex-col w-full">
          <ProductPreview />
          <ProductTab />
          <RelatedProducts />
        </div>
        <div className="xl:w-[21%] w-full flex flex-col lg:pl-[15px]">
          <Categories />
          <LatestProducts />
          <BannerSidebar />
        </div>
      </div>
    </div>
  )
}

export default Product