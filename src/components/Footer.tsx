import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { Button } from '@/components/ui/button';

const socialLinks = [
  { name: 'GitHub', href: '#', icon: FaGithub },
  { name: 'LinkedIn', href: '#', icon: FaLinkedin },
  { name: 'Twitter', href: '#', icon: FaTwitter },
  { name: 'Email', href: '#', icon: FaEnvelope },
];

export function Footer() {
  return (
    <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          {socialLinks.map((item) => (
            <Button key={item.name} variant="ghost" size="icon" asChild>
              <a href={item.href} className="text-muted-foreground hover:text-primary">
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-5 w-5" />
              </a>
            </Button>
          ))}
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-sm leading-5 text-muted-foreground">
            &copy; {new Date().getFullYear()} Muhammad Jihad Rinaldi. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}