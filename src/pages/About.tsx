import { HiOutlineLocationMarker } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const skills = [
  'React', 'TypeScript', 'Next.js', 'Tailwind', 'Node.js', 'GraphQL', 'Go', 'PostgreSQL', 'Redis', 'RabbitMQ', 'AWS', 'Docker', 'Jest', 'Figma'
];

const About = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
            <div className="lg:col-span-7">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl animate-fade-in">
                About Me
              </h1>
              <p className="mt-6 text-xl leading-8 text-muted-foreground animate-fade-in">
                I'm a passionate frontend developer with over 5 years of experience creating modern, 
                accessible, and performant web applications.
              </p>
              <div className="mt-8 animate-fade-in">
                <div className="flex items-center gap-x-4 text-sm leading-6 text-muted-foreground">
                  <HiOutlineLocationMarker className="h-4 w-4" />
                  <span>Jakarta, Indonesia</span>
                </div>
                <div className="mt-6 flex gap-x-4">
                  <Button variant="outline" size="icon" asChild>
                    <a href="https://github.com/JihadRinaldi" target="_blank" rel="noopener noreferrer">
                      <FaGithub className="h-4 w-4" />
                      <span className="sr-only">GitHub</span>
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a href="https://linkedin.com/in/JihadRinaldi" target="_blank" rel="noopener noreferrer">
                      <FaLinkedin className="h-4 w-4" />
                      <span className="sr-only">LinkedIn</span>
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a href="mailto:jihadmjr@gmail.com">
                      <FaEnvelope className="h-4 w-4" />
                      <span className="sr-only">Email</span>
                    </a>
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="mt-16 lg:col-span-5 lg:mt-0">
              <div className="lg:pl-8">
                {/* Profile Picture */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-24 sm:py-32 bg-accent/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
              
              {/* Story */}
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-foreground">My Story</h2>
                <div className="mt-6 text-base leading-7 text-muted-foreground space-y-4">
                  <p>
                    Born and raised in Jakarta, Indonesia, I took a less-than-linear path into software engineering.
                    I didn't grow up surrounded by tech, but my curiosity for how things worked especially on the web,
                    slowly evolved into a passion for building software. That passion truly took shape during my time 
                    at the University of Indonesia, where I first started coding and discovered the thrill of turning ideas into working products.
                  </p>
                  <p>
                    Since then, I've had the opportunity to work at some of Southeast Asia's leading tech companies,
                    including Good Doctor Technology, Kargo Technologies, and Shopee. Each role gave me the chance to
                    tackle unique challenges — from improving healthcare accessibility to streamlining logistics and
                    enhancing e-commerce platforms used by millions.
                  </p>
                  <p>
                    Through it all, I've learned that being an engineer is about more than just writing clean code.
                    It's about staying curious, collaborating with others, and building solutions that make a meaningful impact on people's lives.
                  </p>
                </div>
              </div>

              {/* Philosophy */}
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-foreground">My Philosophy</h2>
                <div className="mt-6 text-base leading-7 text-muted-foreground space-y-4">
                  <p>
                    I believe great software is more than just clean code but also provides an 
                    exceptional user experience. This means paying attention to performance, 
                    accessibility, and design details.
                  </p>
                  <p>
                    Continuous learning is at the core of my approach. The web platform evolves 
                    rapidly, and I stay updated with the latest technologies and best practices 
                    to deliver modern solutions.
                  </p>
                  <p>
                    Collaboration and communication are key to successful projects. I enjoy working 
                    with designers, product managers, and other developers to bring ideas to life.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Skills & Technologies
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Technologies I work with to bring ideas to life
            </p>
          </div>
          
          <Card className="mt-16 max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle>Technical Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-sm py-1 px-3">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default About;