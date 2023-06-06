function Categories() {
  return (
    <div className="w-full mb-8">
      <div className="border border-[#d7d7d7] overflow-hidden mb-10 rounded">
        <h3 className="border-b border-[#d7d7d7] text-sm text-[#222] font-extrabold uppercase bg-[#f5f5f5] p-4">Categories</h3>
        <div className="py-4 px-5">
          <div className="box-border">
            <ul>
              <li className="border-b border-dotted border-[#e4e4e4] m-0 relative">
                <a href="category.html" className="text-[#333] py-2.5 font-normal capitalize hover:text-[#094bad] text-sm">Smartphone & Tablets</a>
                <span className="button-view fa fa-plus-square-o absolute right-0 top-1 cursor-pointer z-10 text-center w-7 h-7 text-sm leading-7"></span>
                <ul className="ml-5 space-y-1.5">
                  <li className="relative"><a href="category.html" className="py-1.5 text-[#333] cursor-pointer hover:text-[#094bad] text-sm hover:transition duration-75 ease-in-out"></a></li>
                  <li><a href="category.html" className="py-1.5 text-[#333] cursor-pointer hover:text-[#094bad] text-sm">Women's Watches</a></li>
                  <li><a href="category.html" className="py-1.5 text-[#333] cursor-pointer hover:text-[#094bad] text-sm">Kids' Watches</a></li>
                  <li><a href="category.html" className="py-1.5 text-[#333] cursor-pointer hover:text-[#094bad] text-sm">Accessories</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Categories;