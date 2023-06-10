import { useDispatch } from 'react-redux'
import { toggleVisibility, setPath } from '../store/slices/breadcrumbSlice'
import { useEffect } from 'react'

function Article({ article }) {
  return (
    <div className="">
      <div className="relative h-[218px] cursor-pointer hover:opacity-80 overflow-hidden">
        <div className="absolute top-0 left-0 -translate-x-[50%] -translate-y-[50%] w-[140px] h-[140px] bg-white -rotate-45"></div>
        <div className="absolute top-0 left-0 p-2">
          <div className="text-2xl font-bold">{article.publishedAt.day}</div>
          <div className="text-sm">{article.publishedAt.month}</div>
        </div>
        <img src={article.picture} className="w-full h-full" />
      </div>
      <div className="p-[15px] space-y-4">
        <div className="text-[15px] font-medium">{article.title}</div>
        <div className="flex space-x-2 items-center justify-between text-gray-400 text-[13px]">
          <div className="flex space-x-2 items-center">
            <i className="fa fa-user"></i>
            <div>Post by {article.author}</div>
          </div>
          <div className="flex space-x-2 items-center">
            <i className="fa fa-comment-o"></i>
            <div>{article.comments.length} Comments</div>
          </div>
        </div>
        <hr />
        <div className="text-xs text-gray-700 leading-loose">
          {article.content}
        </div>
        <div className="flex space-x-2 items-center cursor-pointer text-primary">
          <i className="fa fa-caret-right" style={{ fontSize: 14 }}></i>
          <div className="text-sm">Read More</div>
        </div>
      </div>
    </div>
  )
}

function Articles() {
  const articles = [0, 1, 2, 3, 4, 5, 6, 7, 8].map((index) => ({
    id: index + 1,
    picture: 'image/catalog/blog/4.jpg',
    title: 'Duis autem vel eum irure sed diam nonumy',
    author: 'Wash upito',
    publishedAt: {
      day: (index + 4 > 9 ? '' : '0') + (index + 4),
      month: 'Dec',
    },
    content:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lore...',
    comments: [],
  }))
  return (
    <div className="grid grid-cols-3 gap-4">
      {articles.map((article, index) => (
        <Article key={index} article={article} />
      ))}
    </div>
  )
}

export default function Blog() {
  const dispatch = useDispatch()

  const hideBreadcrumb = () => {
    dispatch(toggleVisibility({ hidden: true }))
    dispatch(setPath({ path: [] }))
  }
  const showBreadCrumb = () => {
    dispatch(setPath({ path: ['Blog'] }))
    dispatch(toggleVisibility({ hidden: false }))
  }
  useEffect(() => {
    showBreadCrumb()
    return hideBreadcrumb
  }, [])

  return (
    <div className="px-[2.5%] flex space-x-8">
      <div className="w-[237px] flex-shrink-0"></div>
      <div className="flex-auto space-y-6">
        <div className="space-y-8">
          <div className="uppercase font-bold">our blog</div>
          <div className="flex space-x-[1px] items-center">
            {[1, 2, 3, 4, 5].map((index) => (
              <div
                key={index}
                className="text-sm w-[33px] h-[33px] flex items-center justify-center bg-[#666] text-white cursor-pointer hover:bg-primary"
              >
                {index < 5 && <div>{index}</div>}
                {index == 5 && <i className="fa fa-bars"></i>}
              </div>
            ))}
          </div>
        </div>
        <Articles />
      </div>
    </div>
  )
}
