import { FaCalendarAlt, FaExternalLinkAlt } from 'react-icons/fa';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { getAllWorkExperience } from '@/data/workExperience';

const Work = () => {
  const workExperience = getAllWorkExperience();

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long'
    });
  };

  const getDuration = (startDate: string, endDate?: string) => {
    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : new Date();
    const months = (end.getFullYear() - start.getFullYear()) * 12 + end.getMonth() - start.getMonth();
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;
    
    if (years === 0) {
      return `${remainingMonths} month${remainingMonths !== 1 ? 's' : ''}`;
    } else if (remainingMonths === 0) {
      return `${years} year${years !== 1 ? 's' : ''}`;
    } else {
      return `${years} year${years !== 1 ? 's' : ''} ${remainingMonths} month${remainingMonths !== 1 ? 's' : ''}`;
    }
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl animate-fade-in">
              Work Experience
            </h1>
            <p className="mt-6 text-xl leading-8 text-muted-foreground animate-fade-in">
              My professional journey and the projects I've worked on
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>
            
            <div className="space-y-12">
              {workExperience.map((job, index) => (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg"></div>
                  
                  {/* Content */}
                  <div className="ml-20">
                    <Card className="hover:shadow-glow transition-all duration-300">
                      <CardHeader>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                          <div>
                            <CardTitle className="text-xl font-bold">{job.role}</CardTitle>
                            <CardDescription className="text-lg font-semibold text-primary">
                              {job.company}
                            </CardDescription>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <FaCalendarAlt className="h-4 w-4" />
                            <span>
                              {formatDate(job.startDate)} - {job.endDate ? formatDate(job.endDate) : 'Present'}
                            </span>
                            <span className="text-xs">({getDuration(job.startDate, job.endDate)})</span>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="text-muted-foreground leading-relaxed">
                          <ul className="list-disc list-inside space-y-1">
                            {job.description.map((item, idx) => (
                              <li key={idx} className="text-sm">
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-2">Technologies Used:</h4>
                          <div className="flex flex-wrap gap-2">
                            {job.technologies.map((tech) => (
                              <Badge key={tech} variant="outline">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 sm:py-32 bg-accent/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Featured Projects
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Some of the projects I'm most proud of
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
            {[
              {
                title: "Kana Mastery",
                description: "nteractive PWA for mastering Japanese Hiragana with quizzes, progress tracking, and offline support.",
                image: "/images/kana-mastery.png",
                tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "PWA"],
                link: "https://kana-mastery.vercel.app/"
              },
              {
                title: "Wordle Bahasa Indonesia",
                description: "Wordle Game using Bahasa Indonesia Dictionary",
                image: "/images/wordle-indonesia.png",
                tech: ["React", "Typescript", "Hooks"],
                link: "https://jihad-wordle.netlify.app/"
              },
              {
                title: "Currency Exchange",
                description: "Currency exchange rate app with real-time updates and historical data visualization using frankfurter.app API",
                image: "/images/currency-exchange.png",
                tech: ["React", "Typescript", "Hooks", "Jest"],
                link: "https://fx-watch.vercel.app/"
              },
            ].map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-glow transition-all duration-300">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {project.title}
                    <Button variant="ghost" size="icon" asChild>
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <FaExternalLinkAlt className="h-4 w-4" />
                      </a>
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription>{project.description}</CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Work;