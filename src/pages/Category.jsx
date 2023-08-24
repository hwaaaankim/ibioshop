import { React, useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Tab } from '@headlessui/react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { toggleVisibility, setPath } from '../store/slices/breadcrumbSlice'
import { openModal } from '../store/slices/modalSlice'

import Categories from '../components/product/Categories'
import LatestProducts from '../components/product/LatestProducts'
import BannerSidebar from '../components/product/BannerSidebar'
import Notice from '../components/Notification/Notice'
import Wishlist from '../components/Notification/Wishlist'
import Compare from '../components/Notification/Compare'
import { http } from '../services/http/http'
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function ProductBanner() {
  return (
    <div className="">
      <div className="relative text-[18px] uppercase text-[#222] border-b-2 border-[#eee] w-full pb-2.5 inline-block font-medium mb-2.5">
        Accessories
        <div className="absolute w-[110px] h-[2px] bg-[#094bad] -bottom-0.5 left-0"></div>
      </div>
      <a href="#" className="">
        <img src="/image/catalog/demo/category/img-cate.jpg" alt="img cate" />
        <br />
      </a>
    </div>
  )
}
function Product({ product }) {
  const [mouseOver, setMouseOver] = useState(false)
  const [showNotification, setShowNotification] = useState(false)
  const [showWishlistNotification, setWishShowNotification] = useState(false)
  const [showCompareNotification, setCompareShowNotification] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const openQuickView = (event) => {
    event.stopPropagation()
    dispatch(openModal({ id: 2 }))
  }

  const handleCardClick = () => {
    // history.push(`/product/${product.id}`);
    navigate('/product')
  }

  // const handleEyeClick = (e) => {
  //   e.stopPropagation();
  //   setShowModal(true);
  // };

  const handleAddToCart = () => {
    setShowNotification(true)
    setTimeout(() => {
      setShowNotification(false)
    }, 3000) // hide the notification after 3 seconds
  }

  const handleAddToWishlist = () => {
    setWishShowNotification(true)
    setTimeout(() => {
      setWishShowNotification(false)
    }, 3000) // hide the notification after 3 seconds
  }
  const handleAddToCompare = () => {
    setCompareShowNotification(true)
    setTimeout(() => {
      setCompareShowNotification(false)
    }, 3000) // hide the notification after 3 seconds
  }

  return (
    <div
      className="space-y-2 w-full mb-20"
      onMouseEnter={() => setMouseOver(true)}
      onMouseLeave={() => setMouseOver(false)}
    >
      <>{showNotification ? <Notice /> : null}</>
      <>{showWishlistNotification ? <Wishlist /> : null}</>
      <>{showCompareNotification ? <Compare /> : null}</>
      <div
        className="lg:h-[180px] lg:w-[180px] 2xl:w-[249px] 2xl:h-[249px] cursor-pointer group relative text-black"
        onClick={handleCardClick}
      >
        <img
          src={product.picture}
          className="w-full h-full opacity-80 group-hover:opacity-100"
        />
        {product.discounted && (
          <div className="w-[38px] h-[38px] rounded-full flex items-center justify-center bg-[#ffd839] absolute right-[8px] top-[8px]">
            <div className="text-xs font-semibold">
              {product.discountPercent}
            </div>
          </div>
        )}
        {product.isNew && (
          <div className="w-[38px] h-[38px] rounded-full flex items-center justify-center bg-[#53d542] absolute left-[8px] top-[8px]">
            <div className="text-sm font-semibold uppercase">New</div>
          </div>
        )}
        <div className="absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center">
          <AnimatePresence>
            {mouseOver && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={{ duration: 0.3 }}
                className="w-[38px] h-[38px] flex items-center justify-center rounded-full bg-primary hover:bg-red-500 text-white"
              >
                <button title="Quick View">
                  <i className="fa fa-eye" onClick={openQuickView}></i>
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="flex flex-col items-center space-y-2">
        <div className="relative w-full">
          <AnimatePresence>
            {mouseOver && (
              <motion.div
                exit={{ y: -30, opacity: 0, transition: { duration: 0.1 } }}
                className="absolute top-0 left-0 right-0 bottom-0 flex items-center z-10"
              >
                <div className="flex-auto flex items-center space-x-2 -mt-5 justify-center">
                  <motion.div
                    initial={{ y: -30 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-primary py-2 font-semibold px-3 text-white cursor-pointer capitalize rounded-full text-xs  hover:bg-red-500"
                    onClick={handleAddToCart}
                    title="Add to cart"
                  >
                    add to cart
                  </motion.div>

                  <motion.div
                    initial={{ y: -30 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="flex-shrink-0 w-[30px] h-[30px] flex items-center justify-center text-right border rounded-full text-primary border-primary cursor-pointer  hover:bg-primary hover:text-white"
                    onClick={handleAddToWishlist}
                    title="Add to Wish List"
                  >
                    <i className="fa fa-heart-o"></i>
                  </motion.div>
                  <motion.div
                    initial={{ y: -30 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    className="flex-shrink-0 w-[30px] h-[30px] flex items-center justify-center text-right border rounded-full text-primary border-primary cursor-pointer  hover:bg-primary hover:text-white"
                    onClick={handleAddToCompare}
                    title="Compare this product"
                  >
                    <i className="fa fa-retweet"></i>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <div
            className={
              'flex flex-col items-center space-y-2 ' +
              (mouseOver ? 'opacity-0' : 'opacity-100')
            }
          >
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
          </div>
          <div className="flex space-x-2 items-center justify-center">
            <div className="text-primary font-semibold">
              ${product.discounted ? product.discountedPrice : product.price}
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
    </div>
  )
}
function GridProducts({ products }) {
  return (
    <div className="grid lg:grid-cols-5 lg:gap-[30px] gap-0 grid-cols-1">
      {products.map((product, index) => (
        <Product product={product} key={index} />
      ))}
    </div>
  )
}
function ListedProducts({ products }) {
  const [showModal, setShowModal] = useState(false)
  const [showNotification, setShowNotification] = useState(false)
  const [showWishlistNotification, setWishShowNotification] = useState(false)
  const [showCompareNotification, setCompareShowNotification] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const openQuickView = (event) => {
    event.stopPropagation()
    dispatch(openModal({ id: 2 }))
  }

  const handleCardClick = () => {
    // history.push(`/product/${product.id}`);
    navigate('/product')
  }

  // const handleEyeClick = (e) => {
  //   e.stopPropagation();
  //   setShowModal(true);
  // };

  const handleAddToCart = () => {
    setShowNotification(true)
    setTimeout(() => {
      setShowNotification(false)
    }, 3000) // hide the notification after 3 seconds
  }

  const handleAddToWishlist = () => {
    setWishShowNotification(true)
    setTimeout(() => {
      setWishShowNotification(false)
    }, 3000) // hide the notification after 3 seconds
  }
  const handleAddToCompare = () => {
    setCompareShowNotification(true)
    setTimeout(() => {
      setCompareShowNotification(false)
    }, 3000) // hide the notification after 3 seconds
  }

  return (
    <div className="flex flex-col">
      <>{showModal ? <QuickView /> : null}</>
      <>{showNotification ? <Notice /> : null}</>
      <>{showWishlistNotification ? <Wishlist /> : null}</>
      <>{showCompareNotification ? <Compare /> : null}</>
      {products.map((product, index) => (
        <div key={index} className="w-full sm:flex mb-8">
          <div className="cursor-pointer group relative text-black">
            <div className="sm:w-[268px] sm:h-[268px]">
              <img
                src={product.picture}
                className="sm:w-[268px] sm:h-[268px] opacity-80 group-hover:opacity-100"
                onClick={handleCardClick}
              />
            </div>
            {product.discounted && (
              <div className="w-[38px] h-[38px] rounded-full flex items-center justify-center bg-[#ffd839] absolute right-[8px] top-[8px]">
                <div className="text-xs font-semibold">
                  {product.discountPercent}
                </div>
              </div>
            )}
            {product.isNew && (
              <div className="w-[38px] h-[38px] rounded-full flex items-center justify-center bg-[#53d542] absolute left-[8px] top-[8px]">
                <div className="text-sm font-semibold uppercase">New</div>
              </div>
            )}
          </div>
          <div className="flex flex-col space-y-2 text-left pt-5 sm:ml-[40px] pr-5">
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
                ${product.discounted ? product.discountedPrice : product.price}
                .00
              </div>
              {product.discounted && (
                <div className="line-through text-gray-600 text-sm">
                  ${product.price}.00
                </div>
              )}
            </div>
            <div className="hidden sm:block text-[13px] text-[#666]">
              {product.description}
            </div>
            <div className="list-block">
              <button
                className="bg-[#094bad] border border-[#094bad] text-white rounded-[3px] text-[12px] uppercase mr-[5px] py-[7px] px-[15px] text-center"
                type="button"
                title="Add to Cart"
                onClick={handleAddToCart}
              >
                <i className="fa fa-shopping-basket"></i>
              </button>
              <button
                className="bg-white border border-[#eaeaea] text-[#666] rounded-[3px] text-[12px] uppercase mr-[5px] py-[7px] px-[15px] text-center hover:bg-[#094bad] hover:text-white"
                type="button"
                title="Add to Wish List"
                onClick={handleAddToWishlist}
              >
                <i className="fa fa-heart"></i>
              </button>
              <button
                className="bg-white border border-[#eaeaea] text-[#666] rounded-[3px] text-[12px] uppercase mr-[5px] py-[7px] px-[15px] text-center hover:bg-[#094bad] hover:text-white"
                type="button"
                title="Compare this Product"
                onClick={handleAddToCompare}
              >
                <i className="fa fa-refresh"></i>
              </button>
              <a
                onClick={openQuickView}
                title="Quick View"
                className="bg-white border border-[#eaeaea] cursor-pointer text-[#666] rounded-[3px] text-[12px] uppercase mr-[5px] py-[10px] px-[15px] text-center hover:bg-[#094bad] hover:text-white"
              >
                <i className="fa fa-eye"></i>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
function ShowingPages() {
  return (
    <div div className="border-t border-[#ebebeb] pt-5 mt-5 mb-[30px]">
      <div className="">
        {/* <div className="text-left px-[15px]"></div> */}
        <div className="px-[15px] text-right text-[12px]">
          Showing 1 to 15 of 15 (1 Pages)
        </div>
      </div>
    </div>
  )
}

export default function Category() {
  const { id } = useParams()
  const dispatch = useDispatch()
  const hideBreadcrumb = () => {
    dispatch(toggleVisibility({ hidden: true }))
    dispatch(setPath({ path: [] }))
  }
  const showBreadCrumb = () => {
    dispatch(
      setPath({
        path: [{ title: 'Smartphone & Tablets', path: '#' }],
      })
    )
    dispatch(toggleVisibility({ hidden: false }))
  }

  const [products, setProducts] = useState([])
  const getProducts = async () => {
    const response = await http.request({ url: 'products/categories/' + id })
    if (!response.isError) setProducts(response.products)
  }
  useEffect(() => {
    showBreadCrumb()
    return hideBreadcrumb
  }, [])

  useEffect(() => {
    getProducts()
  }, [id])

  return (
    <div className="w-full md:px-10 px-4 2xl:flex 2xl:m-auto 2xl:px-0 2xl:max-w-[1650px] 2xl:w-[95%]">
      <div className="md:flex">
        <div className="flex flex-col md:pr-[15px]">
          <Categories />
          <LatestProducts />
          <BannerSidebar />
        </div>
        <div className="md:w-[79%] md:pl-[15px]">
          <ProductBanner />
          <Tab.Group>
            <Tab.List className="mb-[30px] text-[#666] text-[12px] leading-5">
              <div className="md:flex justify-between">
                <div className="list-view flex items-center">
                  <Tab
                    className={({ selected }) =>
                      classNames(
                        'mr-[1px] float-left w-[33px] h-[33px] leading-[34px] text-center text-white focus:outline-none',
                        selected ? 'bg-blue-600' : 'bg-[#666]'
                      )
                    }
                  >
                    <i className="fa fa-th"></i>
                  </Tab>
                  <Tab
                    className={({ selected }) =>
                      classNames(
                        'mr-[1px] float-left w-[33px] h-[33px] leading-[34px] text-center text-white focus:outline-none',
                        selected ? 'bg-blue-600' : 'bg-[#666]'
                      )
                    }
                  >
                    <i className="fa fa-th-list"></i>
                  </Tab>
                </div>
                <div className="md:flex items-center">
                  <div className="lg:flex items-center md:ml-2.5 mb-6 md:mb-0">
                    <label
                      className="text-[#444] lg:w-20 float-right lg:float-none"
                      for="input-sort"
                    >
                      Sort By:
                    </label>
                    <select className="w-full border border-[#e5e5e5] h-[33px] leading-8 pl-2.5 pr-5 bg-white focus:outline-none text-[#555] text-[14px]">
                      <option value="" selected="selected">
                        Default
                      </option>
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
                  <div className="lg:flex items-center md:ml-2.5">
                    <label
                      className="text-[#444] mr-1 float-right lg:float-none"
                      for="input-limit"
                    >
                      Show:
                    </label>
                    <select className="w-full border border-[#e5e5e5] h-[33px] leading-8 pl-2.5 pr-5 bg-white focus:outline-none text-[#555] text-[14px]">
                      <option value="" selected="selected">
                        15
                      </option>
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
              <Tab.Panel>
                <GridProducts products={products} />
              </Tab.Panel>
              <Tab.Panel>
                <ListedProducts products={products} />
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
          <ShowingPages />
        </div>
      </div>
    </div>
  )
}
