import { More, Less } from '../components/product/svg'
import { Disclosure } from '@headlessui/react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleVisibility, setPath } from '../store/slices/breadcrumbSlice'
import { useEffect } from 'react'
import { http } from './../services/http/http'
const Faq = () => {
  const [FAQs, setFAQs] = useState([])
  const getFAQs = async () => {
    const response = await http.request({ url: 'faqs' })
    if (!response.isError) setFAQs(response.faqs)
  }
  const dispatch = useDispatch()

  const hideBreadcrumb = () => {
    dispatch(toggleVisibility({ hidden: true }))
    dispatch(setPath({ path: [] }))
  }
  const showBreadCrumb = () => {
    dispatch(
      setPath({
        path: [
          { title: 'Account', path: '/my_account' },
          { title: 'Page', path: '' },
          { title: 'Faq', path: '/faq' },
        ],
      })
    )
    dispatch(toggleVisibility({ hidden: false }))
  }
  useEffect(() => {
    showBreadCrumb()
    getFAQs()
    return hideBreadcrumb
  }, [])

  return (
    <div className="px-4 sm:px-6 lg:px-8 text-xs font-body mt-3 leading-6 2xl:px-0 2xl:m-auto 2xl:max-w-[1650px] 2xl:w-[95%]">
      <div className="">
        <div className="mb-4">
          <h3 className="text-xl mb-2">Got Questions? We’ve Got Answers!</h3>
          <p>
            Asunt in anim uis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt in anim id est laborum.
            Allamco laboris nisi ut aliquip ex ea commodo consequat. Aser velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in anim id est laborum.
          </p>
        </div>

        {FAQs.map((FAQ) => (
          <Disclosure key={FAQ.id}>
            {({ open }) => (
              <>
                <div>
                  <Disclosure.Button className="flex w-full mb-0.5 font-normal bg-[#f4f4f4]">
                    <div className="bg-[#a0a0a0] p-2 w-10">
                      {open ? (
                        <Less className="mx-auto mt-3 text-[17px] leading-10 text-slate-200" />
                      ) : (
                        <More className="mx-auto mt-3 text-[17px] leading-10 text-slate-200" />
                      )}
                    </div>
                    <h3 className="text-[17px] p-2">{FAQ.question}</h3>
                  </Disclosure.Button>
                  <Disclosure.Panel className="bg-[#e6e6e3] px-3 py-4 border border-solid leading-6 border-[#f4f4f4]">
                    <p>{FAQ.answer}</p>
                  </Disclosure.Panel>
                </div>
              </>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  )
}
export default Faq
