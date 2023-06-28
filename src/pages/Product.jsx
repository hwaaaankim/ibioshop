import { React, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { toggleVisibility, setPath } from '../store/slices/breadcrumbSlice'

import ProductPreview from "../components/product/ProductPreview"
import ProductTab from "../components/product/ProductTab"
import RelatedProducts from "../components/product/RelatedProducts"
import Categories from "../components/product/Categories"
import LatestProducts from "../components/product/LatestProducts"
import BannerSidebar from "../components/product/BannerSidebar"

function Product() {
  const dispatch = useDispatch()
  const hideBreadcrumb = () => {
    dispatch(toggleVisibility({ hidden: true }))
    dispatch(setPath({ path: [] }))
  }
  const showBreadCrumb = () => {
    dispatch(
      setPath({
        path: [
          { title: 'Smartphone & Tablets', path: '/category' },
          { title: 'Chicken swinesha', path: '#' }
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
    <div className="w-full sm:px-8 px-3">
      <div className="w-full md:flex md:flex-row flex-col">
        <div className="xl:w-[79%] sm:w-[500px] w-full flex flex-col">
          <ProductPreview />
          <ProductTab />
          <RelatedProducts />
        </div>
        <div className="xl:w-[21%] sm:w-[33%] flex flex-col lg:pl-[15px]">
          <Categories />
          <LatestProducts />
          <BannerSidebar />
        </div>
      </div>
    </div>
  )
}

export default Product