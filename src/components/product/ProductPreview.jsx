import { React, useState } from 'react'
import { Link } from 'react-router-dom'
import pro from '../../assets/images/1 (1).jpg'
import Notice from '../Notification/Notice'
import Wishlist from '../Notification/Wishlist'
import Compare from '../Notification/Compare'
import { BASE_URL } from '../../config/config'
function ProductPreview({ product }) {
  const [showNotification, setShowNotification] = useState(false)
  const [showWishlistNotification, setWishShowNotification] = useState(false)
  const [showCompareNotification, setCompareShowNotification] = useState(false)
  const [value, setValue] = useState(1)
  const availabilities = [
    'In Stock',
    'Out of Stock',
    'Coming Soon',
    'Unavailable',
  ]

  const handleInputChange = (event) => {
    setValue(parseInt(event.target.value) || '')
  }

  const handleMinusClick = () => {
    setValue(value - 1)
  }

  const handlePlusClick = () => {
    setValue(value + 1)
  }

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
    <div className="lg:flex lg:flex-row flex-col text-[#999]">
      {/* product image */}
      <>{showNotification ? <Notice /> : null}</>
      <>{showWishlistNotification ? <Wishlist /> : null}</>
      <>{showCompareNotification ? <Compare /> : null}</>

      <div className="lg:w-2/5 w-full mr-4">
        {/* main-product-image */}
        <div className="border border-[#e6e6e6]  md:h-[380px] p-0.5">
          <a title="Banner Image" href="#" className="">
            <img
              src={
                product?.media && product.media.length > 0
                  ? BASE_URL + '/images/' + product.media[0].title
                  : pro
              }
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
          {[1, 2, 3, 4, 5].map((item, index) => (
            <Link
              key={index}
              className="mb-2.5 text-sm font-medium w-[98px] h-[98px] hover:border hover:border-[#337ab7] shrink-0"
            >
              <img
                src="/image/catalog/demo/product/fashion/1.jpg"
                title="Chicken swinesha"
                alt="Chicken swinesha"
              />
            </Link>
          ))}
        </div>
      </div>
      {/* product-detail */}
      <div className="lg:w-3/5 flex flex-col pr-[15px] mt-12 lg:mt-0">
        <div className="w-full">
          <h2 className="text-[#444] font-medium mb-2.5 text-2xl">
            Chicken swinesha
          </h2>
          <div className="flex">
            <span className="flex space-x-1 mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-3.5 h-3.5"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clip-rule="evenodd"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-3.5 h-3.5"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clip-rule="evenodd"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-3.5 h-3.5"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clip-rule="evenodd"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-3.5 h-3.5"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clip-rule="evenodd"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-3.5 h-3.5"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
            <span className="text-[#555] flex space-x-2 text-xs">
              <a className="px-2" href="">
                {product?.reviews?.length || 0} reviews
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
            <div className="text-xs flex items-center">
              <span className="mr-2">Availability:</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="text-[#00abf0] w-4 h-4"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="text-[#00abf0]">
                {availabilities[product?.status || 0]}
              </span>
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
          <div className="text-[#666] text-left leading-6 mb-[15px]">
            <h4 className="text-[15px] text-[#666] font-medium my-2.5">
              OverView
            </h4>
            <span className="text-left text-xs">
              The 30-inch Apple Cinema HD Display delivers an amazing 2560 x
              1600 pixel
              <br /> resolution. Designed specifically for the creative
              professional, this display provid...
            </span>
          </div>
          <div className="mt-10">
            <h4 className="my-2.5 text-[#666] font-medium">
              Available Options
            </h4>
            <div className="text-xs leading-6">
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
                  Colors
                </label>
              </span>
              <ul className="flex items-center">
                <li className="relative z-10 capitalize cursor-pointer my-2.5">
                  <label className="text-[#666] font-normal cursor-pointer text-xs inline-block">
                    <input
                      className="absolute -ml-5 mt-1 leading-normal hidden"
                      type="radio"
                    />
                    <img
                      src="image/demo/colors/blue.jpg"
                      data-original-title="blue +$12.00"
                      className="w-5 h-5 border border-[#ddd]"
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="font-bold w-5 h-5 absolute text-white text-center z-10 top-0 left-0"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <label className="p-0 text-[#666]"> </label>
                  </label>
                </li>
                <li className="relative z-10 capitalize cursor-pointer my-2.5">
                  <label className="text-[#666] font-normal cursor-pointer text-xs inline-block">
                    <input
                      className="absolute -ml-5 mt-1 leading-normal hidden"
                      type="radio"
                    />
                    <img
                      src="image/demo/colors/blue.jpg"
                      className="w-5 h-5 border border-[#ddd]"
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="font-bold w-5 h-5 absolute text-white text-center z-10 top-0 left-0"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <label className="p-0 text-[#666]"> </label>
                  </label>
                </li>
                <li className="relative z-10 capitalize cursor-pointer my-2.5">
                  <label className="text-[#666] font-normal cursor-pointer text-xs inline-block">
                    <input
                      className="absolute -ml-5 mt-1 leading-normal hidden"
                      type="radio"
                    />
                    <img
                      src="image/demo/colors/blue.jpg"
                      className="w-5 h-5 border border-[#ddd]"
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="font-bold w-5 h-5 absolute text-white text-center z-10 top-0 left-0"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <label className="p-0 text-[#666]"> </label>
                  </label>
                </li>
                <li className="ml-2 -mt-2 capitalize bg-[#5cb85c] text-xs font-normal text-white leading-none rounded h-full p-1">
                  blue +$12.00
                </li>
              </ul>
            </div>

            <div className="flex w-full mb-4">
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
