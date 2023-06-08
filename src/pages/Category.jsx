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
      <div className="w-full sm:flex">
        <div className="xl:w-[21%] flex flex-col px-[15px]">
          <Categories />
          <LatestProducts />
          <BannerSidebar />
        </div>
        <div className="w-[79%] flex flex-col mb-[30px] relative px-[15px] min-h-[1px]">
          <h3 className="text-lg uppercase text-[#222] border-b-2 border-[#eee] relative pb-2.5 font-medium leading-none mb-2.5">Accessories</h3>
          <div className="category-desc">
            <div className="-mx-[15px]">
              <div className="relative min-h-[1px] px-[15px]">
                <div className="banners">
                  <div>
                    <a href="#"><img src="image/catalog/demo/category/img-cate.jpg" alt="img cate" /><br /></a>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div className="product-filter product-filter-top filters-panel mt-[15px] mb-[30px]">
            <div className="-mx-[15px]">
              <div className="px-[15px]">

                <div className="list-view inline-block">
                  <button className="bg-[094bad] text-white mr-[1px] w-[33px] h-[33px] text-center text-xs align-middle leading-[34px] float-left"><i className="text-sm fa fa-th"></i></button>
                  <button className="bg-[094bad] text-white mr-[1px] w-[33px] h-[33px] text-center text-xs align-middle leading-[34px] float-left"><i className="fa fa-th-list"></i></button>
                </div>

              </div>
              <div className="short-by-show form-inline text-right col-md-7 col-sm-9 col-xs-12">
                <div className="form-group short-by">
                  <label className="control-label" for="input-sort">Sort By:</label>
                  <select id="input-sort" className="form-control" onchange="location = this.value;">
                    <option value="" selected="selected">Default</option>
                    <option value="">Name (A - Z)</option>
                    <option value="">Name (Z - A)</option>
                    <option value="">Price (Low &gt; High)</option>
                    <option value="">Price (High &gt; Low)</option>
                    <option value="">Rating (Highest)</option>
                    <option value="">Rating (Lowest)</option>
                    <option value="">Model (A - Z)</option>
                    <option value="">Model (Z - A)</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="control-label" for="input-limit">Show:</label>
                  <select id="input-limit" className="form-control" onchange="location = this.value;">
                    <option value="" selected="selected">15</option>
                    <option value="">25</option>
                    <option value="">50</option>
                    <option value="">75</option>
                    <option value="">100</option>
                  </select>
                </div>
              </div>
              {/* <!-- <div className="box-pagination col-md-3 col-sm-4 col-xs-12 text-right">
                <ul className="pagination">
                  <li className="active"><span>1</span></li>
                  <li><a href="">2</a></li><li><a href="">&gt;</a></li>
                  <li><a href="">&gt;|</a></li>
                </ul>
              </div> --> */}
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Product