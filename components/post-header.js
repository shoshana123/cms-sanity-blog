import Avatar from '../components/avatar'
import Date from '../components/date'
import CoverImage from '../components/cover-image'
import PostTitle from '../components/post-title'

export default function PostHeader({ title, coverImage, date, author, categories, tags }) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:block md:mb-12">
        <Avatar name={author.name} picture={author.picture} />
      </div>
      <div className="mb-8 md:mb-16 -mx-5 sm:mx-0">
        <CoverImage title={title} url={coverImage} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          <Avatar name={author.name} picture={author.picture} />
        </div>
        <div className="mb-6 text-lg">
          <Date dateString={date} />
        </div>
        <div style={{display: 'flex'}}>
          <div style={{width: '50%'}}>
          <h4  className="text-lg leading-relaxed text-3xl">Categories: </h4>
          {categories && categories.map((category,index)=>{
            if(index<categories.length-1){
              return <span key={category} className="text-lg leading-relaxed mb-4 ">{category}, </span>;
            }
            else return <span key={category} className="text-lg leading-relaxed mb-4 ">{category}</span>;
          })}
          </div>
          <div style={{width: '50%'}}>
          <h4 className="text-lg leading-relaxed text-3xl">Tags: </h4>
          {tags && tags.map((tag,index)=>{
            if(index<tags.length-1){
              return <span key={tag} className="text-lg leading-relaxed mb-4 ">{tag}, </span>;
            }
            else return <span key={tag} className="text-lg leading-relaxed mb-4 ">{tag}</span>;
          })}
          </div>
          </div>
      </div>
    </>
  )
}
