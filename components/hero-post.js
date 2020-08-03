import Avatar from '../components/avatar'
import Date from '../components/date'
import CoverImage from '../components/cover-image'
import Link from 'next/link'

export default function HeroPost({
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
    <section>
      <div className="mb-8 md:mb-16">
        <CoverImage slug={slug} title={title} url={coverImage} />
      </div>
      <div className="md:grid md:grid-cols-2 md:col-gap-16 lg:col-gap-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a className="hover:underline">{title}</a>
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg">
            <Date dateString={date} />
          </div>
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
          <Avatar name={author.name} picture={author.picture} />
        </div>
        <div>
          <h4 className="text-lg leading-relaxed text-3xl">Categories: </h4>
          {categories && categories.map((category,index)=>{
            if(index<categories.length-1){
              return <span key={category} className="text-lg leading-relaxed mb-4 ">{category}, </span>;
            }
            else return <span key={category} className="text-lg leading-relaxed mb-4 ">{category}</span>;
          })}
          </div>
          <div>
          <h4 className="text-lg leading-relaxed text-3xl">Tags: </h4>
          {tags && tags.map((tag,index)=>{
            if(index<tags.length-1){
              return <span key={tag} className="text-lg leading-relaxed mb-4 ">{tag}, </span>;
            }
            else return <span key={tag} className="text-lg leading-relaxed mb-4 ">{tag}</span>;
          })}
          </div>
      </div>
    </section>
  )
}
