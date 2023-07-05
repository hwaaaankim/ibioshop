import { useDispatch } from 'react-redux'
import { toggleVisibility, setPath } from '../store/slices/breadcrumbSlice'
import { useEffect } from 'react'

import { useState } from 'react'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import image from '../assets/images/10.jpg'
import AccountSiteMap from '../components/my_account/AccountSiteMap'
import '../App.css'

function WishListTable() {
  const whishs = [
    {
      id: 1,
      image: { image },
      pName: 'iPad',
      model: 'pt 001',
      stoke: 'In stoke',
      unitPrice: {
        priceNew: '$45',
        priceOld: '$80',
      },
    },
    {
      id: 2,
      image: { image },
      pName: 'Comas samer rumas',
      model: 'pt 002',
      stoke: 'Pre-Order',
      unitPrice: {
        priceNew: '$80',
      },
    },
  ]
  const handleRemove = () => {}
  const handleUpdate = () => {}
  return (
    <>
      <div className="w-full">
        <h2 className="mt-5 text-xl text-inherit box-border font-normal leading-none mb-2">
          My Wish List
        </h2>
      </div>
      <div
        className="box-border overflow-x-auto min-h-[0.01%] leading-6 text-xs text-gray-2 w-full"
        style={{ minHeight: 0.1 + '%' }}
      >
        <table className="mb-3 min-w-[500px] w-full max-w-full text-neutral-600 bg-transparent border border-solid border-collapse border-spacing-0 box-border">
          <thead className="py-2 bg-zinc-200 border-b-transparent h-9">
            <tr className="font-bold align-middle">
              <td className="text-center border border-solid px-2">Image</td>
              <td className="text-left border border-solid px-2">
                Product Name
              </td>
              <td className="text-left border border-solid px-2">Model</td>
              <td className="text-right border border-solid px-2">Stock</td>
              <td className="text-right border border-solid px-2">
                Unit Price
              </td>
              <td className="text-right border border-solid px-2">Action</td>
            </tr>
          </thead>
          <tbody>
            {whishs.map((wish) => (
              <tr
                key={wish.id}
                className="hover:bg-gray-100 align-top border border-solid whitespace-nowrap"
              >
                <td className="border border-solid p-2 text-center">
                  <a href="product.html">
                    <img
                      src={image}
                      alt="Xitefun Causal Wear Fancy Shoes"
                      title="Xitefun Causal Wear Fancy Shoes"
                      className="wish-image transition-all rounded object-cover p-1 border-solid border-gray-400
                            max-w-full inline-block align-middle cursor-pointer"
                    />
                  </a>
                </td>
                <td className="text-left border border-solid p-2">
                  <a href="product.html">{wish.pName}</a>
                </td>
                <td className="text-left border border-solid p-2">
                  {wish.model}
                </td>
                <td className="text-right border border-solid p-2">
                  {wish.stoke}
                </td>
                <td className="text-right border border-solid p-2">
                  <div className="price">
                    <span
                      className="font-semibold text-lg"
                      style={{ color: '#094bad' }}
                    >
                      {wish.unitPrice.priceNew}
                    </span>
                    {wish.unitPrice?.priceOld && (
                      <span
                        className="font-medium text-sm line-through inline-block px-2 leading-5"
                        style={{ color: '#aaa' }}
                      >
                        {wish.unitPrice?.priceOld}
                      </span>
                    )}
                  </div>
                </td>
                <td className="flex float-right p-2">
                  <Tippy
                    content={<span className="text-xs"> Add to Cart</span>}
                  >
                    <button
                      className="mr-1 cursor-pointer bg-blue-1 hover:bg-blue-2 text-white align-middle text-center 
                  leading-normal font-normal text-sm inline-block px-4 h-9"
                      onClick={handleUpdate}
                      type="button"
                    >
                      <i className="fa fa-shopping-cart"></i>
                    </button>
                  </Tippy>
                  <Tippy content={<span className="text-xs"> Remove</span>}>
                    <button
                      type="button"
                      className="cursor-pointer bg-red-1 hover:bg-red-500 text-white align-middle text-center 
                  leading-normal font-normal text-sm inline-block px-4 h-9"
                      onClick={handleRemove}
                    >
                      <i className="fa fa-times"></i>
                    </button>
                  </Tippy>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
export default function WishList() {
  const dispatch = useDispatch()

  const hideBreadcrumb = () => {
    dispatch(toggleVisibility({ hidden: true }))
    dispatch(setPath({ path: [] }))
  }
  const showBreadCrumb = () => {
    dispatch(
      setPath({
        path: [
          { title: 'Account', path: '/account' },
          {
            title: 'My Wish List',
            path: '/wish_list',
          },
        ],
      })
    )
    dispatch(toggleVisibility({ hidden: false }))
  }
  useEffect(() => {
    showBreadCrumb()
    return hideBreadcrumb
  }, [])

  return (
    <div className="overflow-visible box-border text-gray-400 lgp8:max-w-[1650px] w-[95%] mx-auto p-0 leading-6 text-sm justify-center mb-3">
      <div className="w-full text-gray-600 bg-transparent my-3 mx-0 rounded list-none box-border flex flex-col md:flex-row gap-8 p-0 min-h-fit">
        <div
          className="mb-2 float-left relative md:w-[79%] lg:w-[84%] w-full"
          style={{ minHeight: 1 + 'px', margin: '0 auto' }}
        >
          <WishListTable />
        </div>
        <div
          className="hidden md:w-[21%] lg:w-[16%] md:block text-gray-2"
          style={{ margin: '0 auto', minHeight: 1 + 'px' }}
        >
          <AccountSiteMap />
        </div>
      </div>
    </div>
  )
}
