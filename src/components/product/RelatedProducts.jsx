import banner from '../../assets/images/banner-sidebar.jpg'

function RelatedProducts() {

  return (
    <div class="rounded">
      <div class="relative overflow-hidden block">
        <div>
          <a title="Banner Image" href="#" className='w-full align-middle cursor-pointer outline-none bg-transparent transit'>
            <img src={banner} alt="Banner Image" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default RelatedProducts;