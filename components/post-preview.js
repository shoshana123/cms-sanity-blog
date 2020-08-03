import Avatar from '../components/avatar'
import Date from '../components/date'
import CoverImage from './cover-image'
import Link from 'next/link'

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  categories,
  tags
}) {
  return (
    <div>
      <div className="mb-5">
        <CoverImage slug={slug} title={title} url={coverImage} />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <Date dateString={date} />
      </div>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
      <Avatar name={author.name} picture={author.picture} />
      <div style={{display: 'flex'}}>
      <div style={{width: '50%'}}>
          <h4 className="text-lg leading-relaxed text-3xl">Categories: </h4>
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
  )
}
