import { React, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleVisibility, setPath } from '../store/slices/breadcrumbSlice'

import ProductPreview from '../components/product/ProductPreview'
import RelatedProducts from '../components/product/RelatedProducts'
import Categories from '../components/product/Categories'
import LatestProducts from '../components/product/LatestProducts'
import BannerSidebar from '../components/product/BannerSidebar'
import { useParams } from 'react-router-dom'
import { http } from '../services/http/http'

function ProductNew() {
  const { id } = useParams()
  const [product, setProduct] = useState()
  const dispatch = useDispatch()
  const hideBreadcrumb = () => {
    dispatch(toggleVisibility({ hidden: true }))
    dispatch(setPath({ path: [] }))
  }

  const getProduct = async () => {
    const response = await http.request({ url: 'products/' + id })
    if (!response.isError) setProduct(response)
  }

  const showBreadCrumb = () => {
    dispatch(
      setPath({
        path: [
          { title: 'Smartphone & Tablets', path: '/category' },
          { title: 'Chicken swinesha', path: '#' },
        ],
      })
    )
    dispatch(toggleVisibility({ hidden: false }))
  }
  useEffect(() => {
    showBreadCrumb()
    getProduct()
    return hideBreadcrumb
  }, [])
  return (
    <div className="w-full md:px-8 px-3 2xl:px-0 2xl:max-w-[1650px] 2xl:w-[95%] 2xl:flex 2xl:m-auto">
      <div className="w-full md:flex md:flex-row flex-col">
        <div className="xl:w-[21%] sm:w-[33%] flex flex-col lg:pr-[15px]">
          <Categories />
          <LatestProducts />
          <BannerSidebar />
        </div>

        <div className="xl:w-[79%] sm:w-[500px] w-full flex flex-col space-y-10">
          <ProductPreview product={product} />
          <RelatedProducts />
        </div>
      </div>
    </div>
  )
}

export default ProductNew
