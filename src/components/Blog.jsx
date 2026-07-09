import './Blog.css'

const Blog = () => {
  return (
    <div className="blog-outer-wrapper">
      <div className="blog-bg-wrapper">
        <div className="blog-page-wrapper">
          <section className="blog-hero">
            <h2 className="blog-title">Our Blog</h2>
            <p className="blog-subtitle">Stay updated with the latest news and insights.</p>
          </section>
          
          <section className="blog-content">
            <p className="blog-coming-soon">Coming Soon...</p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Blog
