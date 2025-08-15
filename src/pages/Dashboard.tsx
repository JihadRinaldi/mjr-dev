import { Link } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi';
import { FaCode, FaPalette, FaBolt } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const features = [
  {
    name: 'Modern Development',
    description: 'Building with the latest technologies including React, TypeScript, and modern tooling.',
    icon: FaCode,
  },
  {
    name: 'Design Excellence',
    description: 'Creating beautiful, accessible, and user-friendly interfaces with attention to detail.',
    icon: FaPalette,
  },
  {
    name: 'Performance Focus',
    description: 'Optimizing for speed, efficiency, and exceptional user experiences.',
    icon: FaBolt,
  },
];

const Dashboard = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-primary py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl animate-fade-in">
              Muhammad Jihad Rinaldi
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/90 animate-fade-in">
              Senior Software Engineer crafting scalable, high-impact web applications for top tech brands like Good Doctor Technology, Kargo Technologies, and Shopee specializing in React, TypeScript, and cutting-edge frontend technologies.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 animate-fade-in">
              <Button asChild size="lg" variant="secondary">
                <Link to="/work">
                  View My Work <HiArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-black border-white/20 hover:bg-white/10 hover:text-foreground dark:text-white dark:border-white/20 dark:hover:bg-white/10 dark:hover:text-white">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              What I Do
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              I specialize in creating exceptional digital experiences through modern web technologies.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {features.map((feature) => (
                <Card key={feature.name} className="hover:shadow-glow transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-x-3">
                      <div className="rounded-lg bg-primary/10 p-2">
                        <feature.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                      </div>
                      <CardTitle className="text-base font-semibold leading-7">
                        {feature.name}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-7">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-accent/50">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Let's work together
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
              Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild size="lg">
                <Link to="/blog">
                  Read My Blog <HiArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;