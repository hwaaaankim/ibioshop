import { useState } from 'react'
import { Tab } from '@headlessui/react'

import Categories from "../components/product/Categories"
import LatestProducts from "../components/product/LatestProducts"
import BannerSidebar from "../components/product/BannerSidebar"
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const products = [
  {
    name: 'Lastrami bacon',
    picture: 'image/catalog/demo/product/270/h1.jpg',
    rating: 4,
    totalRatings: 2,
    price: 80,
    discounted: false,
    // discountedPrice: 85,
    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est .'
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
    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est .'
  },
  {
    name: 'Mapicola incidid',
    picture: 'image/catalog/demo/product/270/h1.jpg',
    rating: 4,
    totalRatings: 5,
    price: 60,
    discounted: false,
    discountedPrice: 85,
    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est .'
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
    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est .'
  },
  {
    name: 'Excepteur sint occ',
    picture: 'image/catalog/demo/product/270/h1.jpg',
    rating: 4,
    totalRatings: 4,
    price: 90,
    discounted: false,
    // discountedPrice: 85,
    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est .'
  },
  {
    name: 'Excepteur sint occ',
    picture: 'image/catalog/demo/product/270/h1.jpg',
    rating: 6,
    totalRatings: 4,
    price: 90,
    discounted: false,
    // discountedPrice: 85,
    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est .'
  },
  {
    name: 'Excepteur sint occ',
    picture: 'image/catalog/demo/product/270/h1.jpg',
    rating: 4,
    totalRatings: 4,
    price: 90,
    discounted: false,
    isNew: true,
    // discountedPrice: 85,
    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est .'
  },
  {
    name: 'Excepteur sint occ',
    picture: 'image/catalog/demo/product/270/h1.jpg',
    rating: 4,
    totalRatings: 4,
    price: 90,
    discounted: true,
    discountedPrice: 85,
    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est .'
  },
  {
    name: 'Excepteur sint occ',
    picture: 'image/catalog/demo/product/270/h1.jpg',
    rating: 4,
    totalRatings: 4,
    price: 90,
    discounted: true,
    discountPercent: '-10%',
    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est .'
  },
  {
    name: 'Excepteur sint occ',
    picture: 'image/catalog/demo/product/270/h1.jpg',
    rating: 4,
    totalRatings: 4,
    price: 90,
    discounted: false,
    // discountedPrice: 85,
    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est .'
  },
  {
    name: 'Excepteur sint occ',
    picture: 'image/catalog/demo/product/270/h1.jpg',
    rating: 4,
    totalRatings: 4,
    price: 90,
    discounted: false,
    // discountedPrice: 85,
    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est .'
  },
  {
    name: 'Excepteur sint occ',
    picture: 'image/catalog/demo/product/270/h1.jpg',
    rating: 4,
    totalRatings: 4,
    price: 90,
    discounted: false,
    // discountedPrice: 85,
    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est .'
  },
  {
    name: 'Excepteur sint occ',
    picture: 'image/catalog/demo/product/270/h1.jpg',
    rating: 4,
    totalRatings: 4,
    price: 90,
    discounted: true,
    discountedPrice: 85,
    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est .'
  },
  {
    name: 'Excepteur sint occ',
    picture: 'image/catalog/demo/product/270/h1.jpg',
    rating: 4,
    totalRatings: 4,
    price: 90,
    discounted: false,
    // discountedPrice: 85,
    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est .'
  },
  {
    name: 'Excepteur sint occ',
    picture: 'image/catalog/demo/product/270/h1.jpg',
    rating: 4,
    totalRatings: 4,
    price: 90,
    discounted: true,
    discountedPrice: 85,
    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est .'
  },
]
function Breadcrumb() {

  return (
    <div className="text-[14px]">
      <ul className="flex items-center text-[#999]">
        <li className="mr-2.5">
          <a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
              <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
            </svg>
          </a>
        </li>
        <li><a href="#" className='hover:text-[#094bad]'>Smartphone & Tablets</a></li>
      </ul >
    </div >
  )
}
function ProductBanner() {
  return (
    <div className="">
      <div className="relative text-[18px] uppercase text-[#222] border-b-2 border-[#eee] w-full pb-2.5 inline-block font-medium mb-2.5">Accessories
        <div className="absolute w-[110px] h-[2px] bg-[#094bad] -bottom-0.5 left-0"></div>
      </div>
      <a href="#"><img src="image/catalog/demo/category/img-cate.jpg" alt="img cate" /><br /></a>
    </div>
  )
}
function GridProducts() {
  return (
    <div className="grid lg:grid-cols-5 gap-[30px] grid-cols-2">
      {products.map((product, index) => (
        <div key={index} className="space-y-2 mb-16">
          <div className="lg:h-[180px] cursor-pointer group relative text-black">
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
                <div className="text-sm font-semibold uppercase">New</div>
              </div>
            )}
          </div>
          <div className="flex flex-col items-center space-y-2">
            <div className="flex space-x-2 items-center">
              <div className="flex space-x-1 items-center">
                {[1, 2, 3, 4, 5].map((index) => (
                  <i
                    key={index}
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
  )
}
function ListedProducts() {
  return (
    <div className="flex flex-col">
      {products.map((product, index) => (
        <div key={index} className="w-full flex mb-8">
          <div>
            <div className="w-[268px] h-[268px] cursor-pointer group relative text-black">
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
                  <div className="text-sm font-semibold uppercase">New</div>
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col space-y-2 text-left ml-[40px] pr-5">
            <div className="flex space-x-2">
              <div className="flex space-x-1 items-center">
                {[1, 2, 3, 4, 5].map((index) => (
                  <i
                    key={index}
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
            <div className="flex space-x-2 items-center text-lg">
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
            <div className="text-[13px] text-[#666]">
              {product.description}
            </div>
            <div className="list-block">
              <button
                className="bg-[#094bad] border border-[#094bad] text-white rounded-[3px] text-[12px] uppercase mr-[5px] py-[7px] px-[15px] text-center"
                type="button"
                title="Add to Cart"
                onclick="cart.add('101', '1');"
              >
                <i className="fa fa-shopping-basket"></i>
              </button>
              <button
                className="bg-white border border-[#eaeaea] text-[#666] rounded-[3px] text-[12px] uppercase mr-[5px] py-[7px] px-[15px] text-center hover:bg-[#094bad] hover:text-white"
                type="button"
                title="Add to Wish List"
                onclick="wishlist.add('101');"
              >
                <i className="fa fa-heart"></i>
              </button>
              <button
                className="bg-white border border-[#eaeaea] text-[#666] rounded-[3px] text-[12px] uppercase mr-[5px] py-[7px] px-[15px] text-center hover:bg-[#094bad] hover:text-white"
                type="button"
                title="Compare this Product"
                onclick="compare.add('101');"
              >
                <i className="fa fa-refresh"></i>
              </button>
              <a
                className="bg-white border border-[#eaeaea] text-[#666] rounded-[3px] text-[12px] uppercase mr-[5px] py-[10px] px-[15px] text-center hover:bg-[#094bad] hover:text-white"
                href="quickview.html"
                title="Quick view"
                data-fancybox-type="iframe"
              ><i className="fa fa-eye"></i
              ></a>
            </div>

          </div>
        </div>
      ))}
    </div>
  )
}
function ShowingPages() {
  return (
    <div div className="border-t border-[#ebebeb] pt-5 mt-5 mb-[30px]" >
      <div className="">
        {/* <div className="text-left px-[15px]"></div> */}
        <div className="px-[15px] text-right">Showing 1 to 15 of 15 (1 Pages)</div>
      </div>
    </div >
  )
}

export default function Category() {
  return (
    <div className="w-full px-10 py-8">
      <Breadcrumb />
      <div className="flex mt-5">
        <div className="w-[21%] flex flex-col pr-[15px]">
          <Categories />
          <LatestProducts />
          <BannerSidebar />
        </div>
        <div className="w-[79%] pl-[15px]">
          <ProductBanner />
          {/* <Tab className="bg-blue-600 mr-[1px] float-left w-[33px] h-[33px] leading-[34px] text-center text-white focus:outline-none" title="Grid"><i className="fa fa-th"></i></Tab>
          <Tab className="bg-[#666] mr-[1px] float-left w-[33px] h-[33px] leading-[34px] text-center text-white hover:bg-blue-600 focus:outline-none" title="List"><i className="fa fa-th-list"></i></Tab> */}
          <Tab.Group>
            <Tab.List className="mb-[30px] text-[#666] text-[12px] leading-5">
              <div className="flex justify-between">
                <div className="list-view flex items-center">
                  <Tab
                    className={({ selected }) => classNames(
                      'mr-[1px] float-left w-[33px] h-[33px] leading-[34px] text-center text-white focus:outline-none',
                      selected ? 'bg-blue-600' : 'bg-[#666]'
                    )
                    }
                  >
                    <i className="fa fa-th"></i>
                  </Tab>
                  <Tab
                    className={({ selected }) => classNames(
                      'mr-[1px] float-left w-[33px] h-[33px] leading-[34px] text-center text-white focus:outline-none',
                      selected ? 'bg-blue-600' : 'bg-[#666]'
                    )
                    }
                  >
                    <i className="fa fa-th-list"></i>
                  </Tab>
                </div>
                <div className="flex items-center">
                  <div className="ml-2.5">
                    <label className="text-[#444] mr-1" for="input-sort">Sort By:</label>
                    <select className="border border-[#e5e5e5] h-[33px] leading-8 pl-2.5 pr-5 bg-white focus:outline-none text-[#555] text-[14px]">
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
                  <div className="ml-2.5">
                    <label className="text-[#444] mr-1" for="input-limit">Show:</label>
                    <select className="border border-[#e5e5e5] h-[33px] leading-8 pl-2.5 pr-5 bg-white focus:outline-none text-[#555] text-[14px]">
                      <option value="" selected="selected">15</option>
                      <option value="">25</option>
                      <option value="">50</option>
                      <option value="">75</option>
                      <option value="">100</option>
                    </select>
                  </div>
                </div>
              </div>
            </Tab.List>
            <Tab.Panels>
              <Tab.Panel><GridProducts /></Tab.Panel>
              <Tab.Panel><ListedProducts /></Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
          <ShowingPages />
        </div>
      </div></div >
  )
}
