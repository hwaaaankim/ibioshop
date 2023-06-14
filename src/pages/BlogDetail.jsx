import { useDispatch } from 'react-redux'
import { toggleVisibility, setPath } from '../store/slices/breadcrumbSlice'
import { useEffect } from 'react'

export default function BlogDetail() {
  const dispatch = useDispatch()

  const hideBreadcrumb = () => {
    dispatch(toggleVisibility({ hidden: true }))
    dispatch(setPath({ path: [] }))
  }
  const showBreadCrumb = () => {
    dispatch(
      setPath({ path: ['Blog', 'Duis autem vel eum irure sed diam nonumy'] })
    )
    dispatch(toggleVisibility({ hidden: false }))
  }
  useEffect(() => {
    showBreadCrumb()
    return hideBreadcrumb
  }, [])

  const article = {
    id: 1,
    picture: 'image/catalog/blog/4.jpg',
    title: 'Duis autem vel eum irure sed diam nonumy',
    author: 'Wash upito',
    publishedAt: {
      day: '04',
      month: 'Dec',
    },
    content:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lore...',
    comments: [],
  }
  return (
    <div className="px-[2.5%] flex space-x-8">
      <div className="w-[237px] flex-shrink-0">
        <div className="border rounded">
          <div className="uppercase font-bold p-[15px] bg-[#f5f5f5] border-b">
            blog category
          </div>
          <div className="py-[15px] px-[20px]">
            {[
              'our blog',
              'demo category 1',
              'demo category 2',
              'demo category 3',
              'demo category 4',
              'demo category 5',
            ].map((category, index) => (
              <div
                key={index}
                className="capitalize text-xs py-[10px] px-[15px] cursor-pointer hover:text-primary"
              >
                {category}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex-auto space-y-6">
        <div className="uppercase text-gray-900 font-semibold">
          {article.title}
        </div>
        <div className="flex space-x-2 items-center text-sm text-gray-500">
          <div>Post by: {article.author}</div>
          <div>
            Created Date: {article.publishedAt.month} {article.publishedAt.day}
          </div>
          <div>{article.comments.length} Comments</div>
        </div>
        <div className="">
          <img src={article.picture} />
        </div>

        <div className="text-xs space-y-2">
          <p>
            Morbi tempus, non ullamcorper euismod, erat odio suscipit purus, nec
            ornare lacus turpis ac purus. Mauris cursus in mi vel dignissim.
            Morbi mollis elit ipsum, a feugiat lectus gravida non. Aenean
            molestie justo sed aliquam euismod. Maecenas laoreet bibendum
            laoreet. Morbi tempor massa sit amet purus lobortis, non porta
            tellus dignissim.
          </p>
          <p>
            Proin dictum justo a nisl pellentesque egestas.Nulla commodo euismod
            nisi ac bibendum. Mauris in pellentesque tellus, in cursus magna.
            Sed volutpat dui bibendum mi molestie, at volutpat nunc dictum.
            Fusce sagittis massa id eros scelerisque, eget accumsan magna
            lacinia. Nullam posuere neque at neque dictum interdum
          </p>
          <p>
            Mauris cursus in mi vel dignissim. Morbi mollis elit ipsum, a
            feugiat lectus gravida non. Aenean molestie justo sed aliquam
            euismod. Maecenas laoreet bibendum laoreet. Morbi tempor massa sit
            amet purus lobortis, non porta tellus dignissim. Proin dictum justo
            a nisl pellentesque egestas.Nulla commodo euismod nisi ac bibendum.
            Mauris in pellentesque tellus, in cursus magna. Sed volutpat dui
            bibendum mi molestie, at volutpat nunc dictum. Fusce sagittis massa
            id eros scelerisque, eget accumsan magna lacinia. Nullam posuere
            neque at neque dictum interdum
          </p>
        </div>
        <hr />
      </div>
    </div>
  )
}
