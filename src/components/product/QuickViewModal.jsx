import { React, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { XMarkIcon } from '@heroicons/react/24/outline'
import product1 from '../../assets/images/1.jpg'
import product2 from '../../assets/images/1.jpg'
import product3 from '../../assets/images/1.jpg'
import product4 from '../../assets/images/1.jpg'
import pro from '../../assets/images/1 (1).jpg'
import { closeModal } from '../../store/slices/modalSlice'
import { useDispatch } from 'react-redux'
import { http } from '../../services/http/http'
import { BASE_URL } from '../../config/config'

function QuickView({ productId }) {
  const [product, setProduct] = useState()
  const availabilities = [
    'In Stock',
    'Out of Stock',
    'Coming Soon',
    'Unavailable',
  ]

  const getProduct = async () => {
    const response = await http.request({ url: 'products/' + productId })
    if (!response.isError) {
      setProduct(response)
    }
  }
  useEffect(() => {
    getProduct()
  }, [productId])

  const dispatch = useDispatch()
  const handleClose = () => {
    dispatch(closeModal())
  }
  const [value, setValue] = useState(1)

  const handleInputChange = (event) => {
    setValue(parseInt(event.target.value) || '')
  }

  const handleMinusClick = () => {
    setValue(value - 1)
  }

  const handlePlusClick = () => {
    setValue(value + 1)
  }

  const slide = [
    { image: product1 },
    { image: product2 },
    { image: product3 },
    { image: product4 },
  ]
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="md:h-[535px] md:w-[1000px] h-[450px] w-[400px] m-auto p-5 bg-white overflow-y-auto">
          <XMarkIcon
            onClick={handleClose}
            className="sm:w-6 sm:h-6 w-3 h-3 float-right cursor-pointer"
          />
          {product && (
            <div className="flex sm:justify-center text-[#999] h-full w-full">
              <div className="flex flex-col mr-5">
                {/* main-product-image */}
                <div className="border border-[#e6e6e6] md:w-[447px] md:h-[446px] sm:p-0.5 w-[160px] h-[160px]">
                  <a title="Banner Image" href="#" className="">
                    <img
                      src={
                        product?.media && product.media.length > 0
                          ? BASE_URL + '/images/' + product.media[0].title
                          : pro
                      }
                      alt="Banner Image"
                    />
                  </a>
                </div>
                {/* sub-product-images */}
                <div className="flex space-x-6 mt-4">
                  {slide.map((product, index) => (
                    <Link
                      key={index}
                      className="hidden mb-2.5 text-sm font-medium  hover:border hover:border-[#337ab7]"
                    >
                      <img
                        src={product.image}
                        title="Chicken swinesha"
                        alt="Chicken swinesha"
                        className="w-[95px] h-[95px]"
                      />
                    </Link>
                  ))}
                </div>
              </div>
              {/* product-detail */}
              <div className="w-full flex flex-col">
                <div className="w-full">
                  <h2 className="text-[#444] font-medium mb-2.5 sm:text-2xl text-sm">
                    {product.name}
                  </h2>
                  <div className="sm:flex">
                    <div className="flex space-x-1 items-center">
                      <i className="fa fa-star" style={{ fontSize: 13 }}></i>
                      <i className="fa fa-star" style={{ fontSize: 13 }}></i>
                      <i className="fa fa-star" style={{ fontSize: 13 }}></i>
                      <i className="fa fa-star" style={{ fontSize: 13 }}></i>
                      <i className="fa fa-star" style={{ fontSize: 13 }}></i>
                    </div>
                    <span className="text-[#555] flex space-x-2 text-xs">
                      <a className="px-2" href="">
                        0 reviews
                      </a>
                      |<a className="write_review_buttonick">Write a review</a>
                    </span>
                  </div>
                  <div className="flex flex-col my-5">
                    <div className="flex items-center font-semibold text-lg">
                      <span className="text-[#094bad] mr-5" itemprop="price">
                        ${product?.basePrice || 0}
                      </span>
                      <span className="line-through text-sm font-normal">
                        $122.00
                      </span>
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
                        <span className="font-bold">
                          Price in reward points:
                        </span>{' '}
                        400
                      </div>
                      <div className="brand">
                        <span className="font-bold">Brand:</span>
                        <a href="#">Apple</a>{' '}
                      </div>
                      <div className="model">
                        <span className="font-bold">Product Code:</span> Product
                        15
                      </div>
                      <div className="reward">
                        <span className="font-bold">Reward Points:</span> 100
                      </div>
                    </div>
                  </div>
                  <div className="mt-10">
                    <h4 className="my-2.5 text-[#666] font-medium">
                      Available Options
                    </h4>
                    <div className="text-[12px] leading-6">
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
                    <div class="text-[12px]">
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
                      <div className="mb-5">
                        <div class="relative my-2.5">
                          <label
                            for="checkbox_1"
                            className="min-h-[20px] pl-5 font-normal cursor-pointer text-[12px]"
                          >
                            <input
                              type="checkbox"
                              name="option[232][]"
                              value="36"
                              id="checkbox_1"
                              className="absolute -ml-5 mt-1 leading-normal"
                            />
                            Checkbox 1 (+$12.00)
                          </label>
                        </div>
                        <div class="relative my-2.5">
                          <label
                            for="checkbox_1"
                            className="min-h-[20px] pl-5 font-normal cursor-pointer text-[12px]"
                          >
                            <input
                              type="checkbox"
                              name="option[232][]"
                              value="36"
                              id="checkbox_1"
                              className="absolute -ml-5 mt-1 leading-normal"
                            />
                            Checkbox 1 (+$12.00)
                          </label>
                        </div>
                        <div class="relative my-2.5">
                          <label
                            for="checkbox_1"
                            className="min-h-[20px] pl-5 font-normal cursor-pointer text-[12px]"
                          >
                            <input
                              type="checkbox"
                              name="option[232][]"
                              value="36"
                              id="checkbox_1"
                              className="absolute -ml-5 mt-1 leading-normal"
                            />
                            Checkbox 1 (+$12.00)
                          </label>
                        </div>
                        <div class="relative my-2.5">
                          <label
                            for="checkbox_1"
                            className="min-h-[20px] pl-5 font-normal cursor-pointer text-[12px]"
                          >
                            <input
                              type="checkbox"
                              name="option[232][]"
                              value="36"
                              id="checkbox_1"
                              className="absolute -ml-5 mt-1 leading-normal"
                            />
                            Checkbox 1 (+$12.00)
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="sm:flex w-full mb-4">
                      <div className="">
                        <div className="bg-[#eee] relative py-1 px-2.5 border-separate table">
                          <label className="font-normal mt-2 pr-1 mb-1">
                            Qty
                          </label>
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
                          title=""
                          value="Add to Cart"
                          className="bg-[#094bad] text-xs hover:bg-[#666] cursor-pointer font-extrabold py-3 px-4 leading-tight text-white uppercase"
                          onclick="cart.add('42', '1');"
                          data-original-title="Add to Cart"
                        />
                      </div>
                      <div className="flex items-center">
                        <ul className="flex items-center">
                          <li className="px-1.5">
                            <a
                              className="py-2.5 px-3.5 text-[#666] border border-[#e6e6e6] text-sm hover:border-[#094bad] hover:text-[#094bad] cursor-pointer"
                              data-toggle="tooltip"
                              title=""
                              onclick="wishlist.add('50');"
                              data-original-title="Add to Wish List"
                            >
                              <i className="fa fa-heart"></i>
                            </a>
                          </li>
                          <li className="px-1.5">
                            <a
                              className="py-2.5 px-3.5 text-[#666] border border-[#e6e6e6] text-sm hover:border-[#094bad] hover:text-[#094bad] cursor-pointer"
                              data-toggle="tooltip"
                              title=""
                              onclick="compare.add('50');"
                              data-original-title="Compare this Product"
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
          )}
        </div>
      </div>
      <div className="opacity-40 fixed inset-0 z-40 bg-black"></div>
    </>
  )
}

export default QuickView
