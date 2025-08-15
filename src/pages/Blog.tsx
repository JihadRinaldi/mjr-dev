import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaArrowRight } from 'react-icons/fa';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { getAllBlogPosts } from '@/data/blogPosts';

const Blog = () => {
  const blogPosts = getAllBlogPosts();

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl animate-fade-in">
              Blog
            </h1>
            <p className="mt-6 text-xl leading-8 text-muted-foreground animate-fade-in">
              Thoughts on web development, technology, and building great user experiences
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="space-y-8">
              {blogPosts.map((post, index) => (
                <Card key={post.slug} className="overflow-hidden hover:shadow-glow transition-all duration-300 animate-fade-in">
                  <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                    {post.coverImage && (
                      <div className="lg:col-span-5">
                        <div className="aspect-video lg:aspect-[4/3] overflow-hidden">
                          <img
                            src={post.coverImage}
                            alt={post.title}
                            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                          />
                        </div>
                      </div>
                    )}
                    <div className={post.coverImage ? "lg:col-span-7" : "lg:col-span-12"}>
                      <CardHeader>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                          <FaCalendarAlt className="h-4 w-4" />
                          <time dateTime={post.publishDate}>
                            {formatDate(post.publishDate)}
                          </time>
                        </div>
                        <CardTitle className="text-2xl font-bold leading-tight">
                          <Link 
                            to={`/blog/${post.slug}`}
                            className="hover:text-primary transition-colors"
                          >
                            {post.title}
                          </Link>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <CardDescription className="text-base leading-relaxed">
                          {post.excerpt}
                        </CardDescription>
                        <Button variant="outline" asChild>
                          <Link to={`/blog/${post.slug}`}>
                            Read More <FaArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {blogPosts.length === 0 && (
              <div className="text-center py-16">
                <h3 className="text-lg font-semibold text-muted-foreground">
                  No blog posts yet
                </h3>
                <p className="text-muted-foreground mt-2">
                  Check back soon for new content!
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;