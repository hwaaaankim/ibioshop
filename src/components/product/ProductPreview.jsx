import { React, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import pro from '../../assets/images/1 (1).jpg'
import Notice from '../Notification/Notice'
import Wishlist from '../Notification/Wishlist'
import Compare from '../Notification/Compare'
import { BASE_URL, CDN_URL } from '../../config/config'

import { useDispatch, useSelector } from 'react-redux'
import { updateQuantity, addToCart } from '../../store/slices/cartSlice'
import { http } from '../../services/http/http'

function ProductPreview({ product }) {
  const [showNotification, setShowNotification] = useState(false)
  const [showWishlistNotification, setWishShowNotification] = useState(false)
  const [showCompareNotification, setCompareShowNotification] = useState(false)
  const [value, setValue] = useState(1)

  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart)
  const availabilities = [
    'In Stock',
    'Out of Stock',
    'Coming Soon',
    'Unavailable',
  ]
  const [activeImage, setActiveImage] = useState(
    product?.media && product.media.length > 0
      ? BASE_URL + '/images/' + product.media[0].title
      : pro
  )

  const handleInputChange = (event) => {
    setValue(parseInt(event.target.value) || '')
  }

  const handleMinusClick = () => {
    setValue((prev) => (prev > 1 ? prev - 1 : prev))
  }

  const handlePlusClick = () => {
    setValue(value + 1)
  }

  const handleAddToCart = () => {
    const doesItExist = cart.some((item) => item.id === product.id)
    console.log({ doesItExist })
    if (doesItExist)
      dispatch(updateQuantity({ id: product.id, quantity: +value }))
    else
      dispatch(
        addToCart({ product: { ...product, size: 'xl' }, quantity: +value })
      )

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

  const [totalReviews, setTotal] = useState(0)
  const getReviews = async () => {
    const response = await http.request({
      url: 'product_reviews/product/' + product.id,
    })
    if (!response.isError) setTotal(response.totalProductReviews)
  }
  const [rating, setRating] = useState(0)
  const getRating = async () => {
    const response = await http.request({
      url: 'product_rates/' + product.id,
    })
    if (!response.isError) setRating(Number(response.rate))
  }

  useEffect(() => {
    getReviews()
    getRating()
  }, [])
  return (
    <div className="lg:flex lg:flex-row flex-col text-[#999]">
      {/* product image */}
      <>{showNotification ? <Notice /> : null}</>
      <>{showWishlistNotification ? <Wishlist /> : null}</>
      <>{showCompareNotification ? <Compare /> : null}</>

      <div className="lg:w-2/5 w-full mr-4 space-y-2">
        {/* main-product-image */}
        <div className="border border-[#e6e6e6]  md:h-[380px] p-0.5">
          <a title="Banner Image" href="#" className="">
            <img
              src={activeImage}
              alt="Banner Image"
              className="w-full h-full"
            />
          </a>
        </div>

        {/* sub-product-images */}
        {/* <div className="flex flex-col mr-4">
          {product?.media &&
            product.media.map((image, index) => (
              <Link
                key={index}
                className="mb-2.5 text-sm font-medium w-[98px] h-[98px] hover:border hover:border-[#337ab7]"
              >
              <img
                src={BASE_URL + '/images/' + image.title}
                title="Chicken swinesha"
                alt="Chicken swinesha"
              />
              </Link>
            ))}
        </div> */}

        <div className="flex space-x-2 overflow-x-hidden mr-4">
          {product.media.map((item, index) => (
            <Link
              key={index}
              className="mb-2.5 text-sm font-medium w-[93px] h-[93px] p-1 border hover:border-[#337ab7] shrink-0"
            >
              <img
                src={
                  item.title
                    ? BASE_URL + '/images/' + item.title
                    : '/image/catalog/demo/product/fashion/1.jpg'
                }
                title="Chicken swinesha"
                alt="Chicken swinesha"
                onClick={() =>
                  setActiveImage(BASE_URL + '/images/' + item.title)
                }
              />
            </Link>
          ))}
        </div>
      </div>
      {/* product-detail */}
      <div className="lg:w-3/5 flex flex-col pr-[15px] mt-12 lg:mt-0">
        <div className="w-full">
          <h2 className="text-[#444] font-medium mb-2.5 text-2xl">
            {product.name}
          </h2>
          <div className="flex">
            <div className="flex space-x-1 items-center">
              {Array.from({ length: 5 }).map((item, index) => (
                <i
                  key={index}
                  className="fa fa-star"
                  style={{
                    fontSize: 13,
                    color: index < rating ? 'orange' : '',
                  }}
                ></i>
              ))}
            </div>

            <span className="text-[#555] flex space-x-2 text-xs">
              <a className="px-2" href="">
                {totalReviews} reviews
              </a>
              |<a className="write_review_buttonick">Write a review</a>
            </span>
          </div>
          <div className="lg:flex lg:justify-between items-center my-5">
            <div className="flex items-center font-semibold text-lg">
              <span className="text-[#094bad] mr-5" itemprop="price">
                ${product?.basePrice || 0}
              </span>
              <span className="line-through text-sm font-normal">$122.00</span>
            </div>
            <div className="text-xs flex items-center space-x-3">
              <span>Availability:</span>
              <div className="flex space-x-1 items-center">
                <i
                  className="fa fa-check-square-o text-[#00abf0]"
                  style={{ fontSize: 12 }}
                ></i>
                <span className="text-[#00abf0]">
                  {availabilities[product?.status || 0]}
                </span>
              </div>
            </div>
          </div>
          <div className="border-y border-[#eee] py-2.5 px-5">
            <div className="relative text-[#666] text-xs leading-6">
              <div className="w-1 bg-[#094bad] h-full absolute -left-5 top-0"></div>
              <div className="">
                <span className="font-bold">Ex Tax:</span> $60.00
              </div>
              <div className="reward">
                <span className="font-bold">Price in reward points:</span> 400
              </div>
              <div className="brand">
                <span className="font-bold">Brand:</span>
                <a href="#">Apple</a>{' '}
              </div>
              <div className="model">
                <span className="font-bold">Product Code:</span> Product 15
              </div>
              <div className="reward">
                <span className="font-bold">Reward Points:</span> 100
              </div>
            </div>
          </div>
          <div className="mt-2 space-y-3">
            <h4 className="my-1 text-[#666] font-medium">Available Options</h4>
            <div className="text-xs leading-6 space-y-2">
              <span className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-2 h-2 text-red-600 mr-1"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clip-rule="evenodd"
                  />
                </svg>
                <label className="text-[#666] mr-2.5 font-normal">Colors</label>
              </span>
              <ul className="flex space-x-1">
                <li className="w-6 h-6 cursor-pointer p-[2px] border">
                  <img
                    src={CDN_URL + '/image/demo/colors/blue.jpg'}
                    data-original-title="blue +$12.00"
                    className="w-full h-full border border-[#ddd]"
                  />
                </li>
                <li className="w-6 h-6 cursor-pointer p-[2px] border">
                  <img
                    src={CDN_URL + '/image/demo/colors/blue.jpg'}
                    className="w-full h-full border border-[#ddd]"
                  />
                </li>
                <li className="w-6 h-6 cursor-pointer p-[2px] border">
                  <img
                    src={CDN_URL + '/image/demo/colors/blue.jpg'}
                    className="w-full h-full border border-[#ddd]"
                  />
                </li>
              </ul>
            </div>

            <div className="text-xs leading-6 space-y-2">
              <span className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-2 h-2 text-red-600 mr-1"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clip-rule="evenodd"
                  />
                </svg>
                <label className="text-[#666] mt-1 mr-2.5 font-normal">
                  Checkbox
                </label>
              </span>
              <div className="space-y-2">
                {[1, 2, 3, 4].map((item) => (
                  <div className="flex space-x-2 items-center">
                    <input type="checkbox" />
                    <div className="text-sm text-gray-700">
                      Checkbox 1 (+$12.00)
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex w-full mb-4 mt-2">
              <div className="">
                <div className="bg-[#eee] relative py-1 px-2.5 border-separate table">
                  <label className="font-normal mt-2 pr-1 mb-1">Qty</label>
                  <input
                    type="text"
                    value={value}
                    onChange={handleInputChange}
                    className="h-8 leading-8 mr-4 px-2.5 w-9 border border-[#bdc2c9] z0"
                  />
                  <span
                    onClick={handleMinusClick}
                    className="bg-[#444] text-xs px-1 absolute top-5 right-3 w-4 h-4 leading-4 hover:bg-blue-600 cursor-pointer text-white"
                  >
                    −
                  </span>
                  <span
                    onClick={handlePlusClick}
                    className="bg-[#444] text-xs absolute right-3 top-1 h-4 w-4 px-1 hover:bg-blue-600 cursor-pointer text-white"
                  >
                    +
                  </span>
                </div>
              </div>
              <div className="mr-2.5">
                <input
                  type="button"
                  data-toggle="tooltip"
                  title="Add to cart"
                  value="Add to Cart"
                  className="bg-[#094bad] text-xs hover:bg-[#666] cursor-pointer font-extrabold py-3 px-4 leading-tight text-white uppercase"
                  onClick={handleAddToCart}
                />
              </div>
              <div className="flex items-center">
                <ul className="flex items-center">
                  <li className="px-1.5">
                    <a
                      className="py-2.5 px-3.5 text-[#666] border border-[#e6e6e6] text-sm hover:border-[#094bad] hover:text-[#094bad] cursor-pointer"
                      data-toggle="tooltip"
                      title="Add to Wish list"
                      onClick={handleAddToWishlist}
                    >
                      <i className="fa fa-heart"></i>
                    </a>
                  </li>
                  <li className="px-1.5">
                    <a
                      className="py-2.5 px-3.5 text-[#666] border border-[#e6e6e6] text-sm hover:border-[#094bad] hover:text-[#094bad] cursor-pointer"
                      data-toggle="tooltip"
                      title="Compare this product"
                      onClick={handleAddToCompare}
                    >
                      <i className="fa fa-exchange"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPreview
