function Categories() {
  return (
    <div className="border border-[#d7d7d7] overflow-hidden mb-10 rounded-[3px]">
      <h3 className="border-b border-[#d7d7d7] text-[16px] text-[#222] font-extrabold uppercase bg-[#f5f5f5] p-[15px]">Categories</h3>
      <div className="py-[15px] px-5">
        <div className="box-border">
          <ul>
            <li className="flex items-center border-b border-dotted border-[#e4e4e4] m-0 relative">
              <a href="category.html" className="text-[#333] py-2 font-normal capitalize hover:text-[#094bad] text-[12px]">Smartphone & Tablets</a>
              <span className="button-view fa fa-plus-square-o absolute right-0 top-3 cursor-pointer z-10 text-center w-7 h-7 leading-7"></span>
              <ul className="hidden ml-5 space-y-2.5 text-[#333] text-[12px] my-2">
                <li><a href="category.html" className="hover:text-[#094bad] cursor-pointer">Men's Watches</a></li>
                <li><a href="category.html" className="hover:text-[#094bad] cursor-pointer">Women's Watches</a></li>
                <li><a href="category.html" className="hover:text-[#094bad] cursor-pointer">Kids' Watches</a></li>
                <li><a href="category.html" className="hover:text-[#094bad] cursor-pointer">Accessories</a></li>
              </ul>
            </li>
            <li className="flex items-center border-b border-dotted border-[#e4e4e4] m-0 relative">
              <a href="category.html" className="text-[#333] py-2 font-normal capitalize hover:text-[#094bad] text-[12px]">Electronics</a>
              <span className="button-view fa fa-plus-square-o absolute right-0 top-3 cursor-pointer z-10 text-center w-7 h-7 leading-7"></span>
              <ul className="ml-5 space-y-2.5 text-[#333] text-[12px] my-2">
                <ul className="hidden">
                  <li><a href="category.html" className="hover:text-[#094bad] cursor-pointer">Cycling</a></li>
                  <li><a href="category.html" className="hover:text-[#094bad] cursor-pointer">Running</a></li>
                  <li><a href="category.html" className="hover:text-[#094bad] cursor-pointer">Swimming</a></li>
                  <li><a href="category.html" className="hover:text-[#094bad] cursor-pointer">Football</a></li>
                  <li><a href="category.html" className="hover:text-[#094bad] cursor-pointer">Golf</a></li>
                  <li><a href="category.html" className="hover:text-[#094bad] cursor-pointer">Windsurfing</a></li>
                </ul>
              </ul>
            </li>
            <li className="flex items-center border-b border-dotted border-[#e4e4e4] m-0 relative">
              <a href="category.html" className="text-[#333] py-2 font-normal capitalize hover:text-[#094bad] text-[12px]">Shoes</a>
              <span className="button-view fa fa-plus-square-o absolute right-0 top-3 cursor-pointer z-10 text-center w-7 h-7 leading-7"></span>
              <ul className="ml-5 space-y-2.5 text-[#333] text-[12px] my-2">
                <ul className="hidden">
                  <li><a href="category.html" className="hover:text-[#094bad] cursor-pointer">Cycling</a></li>
                  <li><a href="category.html" className="hover:text-[#094bad] cursor-pointer">Running</a></li>
                  <li><a href="category.html" className="hover:text-[#094bad] cursor-pointer">Swimming</a></li>
                  <li><a href="category.html" className="hover:text-[#094bad] cursor-pointer">Football</a></li>
                  <li><a href="category.html" className="hover:text-[#094bad] cursor-pointer">Golf</a></li>
                  <li><a href="category.html" className="hover:text-[#094bad] cursor-pointer">Windsurfing</a></li>
                </ul>
              </ul>
            </li>
            <li className="flex items-center border-b border-dotted border-[#e4e4e4] m-0 relative">
              <a href="category.html" className="text-[#333] py-2 font-normal capitalize hover:text-[#094bad] text-[12px]">Watches</a>
              <span className="button-view fa fa-plus-square-o absolute right-0 top-3 cursor-pointer z-10 text-center w-7 h-7 leading-7"></span>
              <ul className="ml-5 space-y-2.5 text-[#333] text-[12px] my-2">
                <ul className="hidden">
                  <li><a href="category.html" className="hover:text-[#094bad] cursor-pointer">Cycling</a></li>
                  <li><a href="category.html" className="hover:text-[#094bad] cursor-pointer">Running</a></li>
                  <li><a href="category.html" className="hover:text-[#094bad] cursor-pointer">Swimming</a></li>
                  <li><a href="category.html" className="hover:text-[#094bad] cursor-pointer">Football</a></li>
                  <li><a href="category.html" className="hover:text-[#094bad] cursor-pointer">Golf</a></li>
                  <li><a href="category.html" className="hover:text-[#094bad] cursor-pointer">Windsurfing</a></li>
                </ul>
              </ul>
            </li>
            <li className="flex border-b border-dotted border-[#e4e4e4] m-0 relative">
              <a href="category.html" className="text-[#333] py-2 font-normal capitalize hover:text-[#094bad] text-[12px]">Health & Beauty</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Categories;