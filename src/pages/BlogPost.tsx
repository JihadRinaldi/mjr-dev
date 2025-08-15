import { useParams, Navigate, Link } from 'react-router-dom';
import { FaCalendarAlt, FaArrowLeft } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { getBlogPost } from '@/data/blogPosts';
import CodeBlock from '@/components/CodeBlock';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug) {
    return <Navigate to="/blog" replace />;
  }

  const post = getBlogPost(slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <Button variant="ghost" asChild className="mb-8">
            <Link to="/blog">
              <FaArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>

          <div className="space-y-6">
            {post.coverImage && (
              <div className="aspect-video overflow-hidden rounded-lg">
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="h-full w-full object-cover"
                />
              </div>
            )}
            
            <div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <FaCalendarAlt className="h-4 w-4" />
                <time dateTime={post.publishDate}>
                  {formatDate(post.publishDate)}
                </time>
              </div>
              
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                {post.title}
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <Card>
            <CardHeader className="pb-4">
              <p className="text-xl text-muted-foreground leading-relaxed">
                {post.excerpt}
              </p>
            </CardHeader>
            <CardContent>
              <div className="prose prose-lg max-w-none">
                <div className="text-foreground leading-relaxed space-y-6">
                  {(() => {
                    const lines = post.content.split('\n');
                    const elements: JSX.Element[] = [];
                    let i = 0;
                    
                    while (i < lines.length) {
                      const line = lines[i];
                      
                      if (line.trim() === '') {
                        i++;
                        continue;
                      }
                      
                      // Handle code blocks
                      if (line.startsWith('```')) {
                        const language = line.substring(3).trim();
                        const codeLines: string[] = [];
                        i++; // Skip opening ```
                        
                        while (i < lines.length && !lines[i].startsWith('```')) {
                          codeLines.push(lines[i]);
                          i++;
                        }
                        
                        if (codeLines.length > 0) {
                          elements.push(
                            <CodeBlock 
                              key={`code-${elements.length}`}
                              code={codeLines.join('\n')}
                              language={language || 'code'}
                            />
                          );
                        }
                        
                        i++; // Skip closing ```
                        continue;
                      }
                      
                      // Handle headers
                      if (line.startsWith('# ')) {
                        elements.push(
                          <h1 key={`h1-${elements.length}`} className="text-3xl font-bold mt-12 mb-6 first:mt-0">
                            {line.substring(2)}
                          </h1>
                        );
                        i++;
                        continue;
                      }
                      
                      if (line.startsWith('## ')) {
                        elements.push(
                          <h2 key={`h2-${elements.length}`} className="text-2xl font-bold mt-10 mb-4">
                            {line.substring(3)}
                          </h2>
                        );
                        i++;
                        continue;
                      }
                      
                      if (line.startsWith('### ')) {
                        elements.push(
                          <h3 key={`h3-${elements.length}`} className="text-xl font-bold mt-8 mb-3">
                            {line.substring(4)}
                          </h3>
                        );
                        i++;
                        continue;
                      }
                      
                      // Handle lists
                      if (line.startsWith('- ')) {
                        elements.push(
                          <li key={`li-${elements.length}`} className="ml-6 mb-2">
                            {line.substring(2)}
                          </li>
                        );
                        i++;
                        continue;
                      }
                      
                      if (line.match(/^\d+\. /)) {
                        elements.push(
                          <li key={`oli-${elements.length}`} className="ml-6 mb-2 list-decimal">
                            {line.replace(/^\d+\. /, '')}
                          </li>
                        );
                        i++;
                        continue;
                      }
                      
                      // Regular paragraphs
                      elements.push(
                        <p key={`p-${elements.length}`} className="mb-4 leading-relaxed">
                          {line}
                        </p>
                      );
                      i++;
                    }
                    
                    return elements;
                  })()}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;