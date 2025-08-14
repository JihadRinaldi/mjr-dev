import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Work', href: '/work' },
  { name: 'Blog', href: '/blog' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const location = useLocation();

  const closeMobileMenu = () => {
    setIsClosing(true);
    setTimeout(() => {
      setMobileMenuOpen(false);
      setIsClosing(false);
    }, 300);
  };

  useEffect(() => {
    if (mobileMenuOpen) {
      setIsClosing(false);
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                &lt;MJR /&gt;
              </span>
            </Link>
          </div>
          
          <div className="flex items-center lg:hidden">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 ml-2"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <HiMenu className="h-6 w-6" aria-hidden="true" />
            </Button>
          </div>
          
          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-semibold leading-6 transition-colors hover:text-primary ${
                  location.pathname === item.href
                    ? 'text-primary'
                    : 'text-muted-foreground'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <ThemeToggle />
          </div>
        </nav>
      </header>
      
      {/* Mobile menu - positioned outside header */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className={`fixed inset-0 z-50 bg-background/80 backdrop-blur-sm duration-300 ${
            isClosing ? 'animate-out fade-out-0' : 'animate-in fade-in-0'
          }`} onClick={closeMobileMenu} />
          <div className={`fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-border duration-300 ${
            isClosing ? 'animate-out slide-out-to-right-full' : 'animate-in slide-in-from-right-full'
          }`}>
            <div className="flex items-center justify-between">
              <Link to="/" className="-m-1.5 p-1.5" onClick={closeMobileMenu}>
                <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  &lt;MJR /&gt;
                </span>
              </Link>
              <Button
                variant="ghost"
                size="icon"
                className="-m-2.5 rounded-md p-2.5"
                onClick={closeMobileMenu}
              >
                <span className="sr-only">Close menu</span>
                <HiX className="h-6 w-6" aria-hidden="true" />
              </Button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-border">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 transition-colors hover:bg-gradient-primary ${
                        location.pathname === item.href
                          ? 'bg-gradient-primary bg-clip-text text-transparent bg-accent'
                          : 'text-foreground'
                      }`}
                      onClick={closeMobileMenu}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-muted-foreground">Theme</span>
                    <ThemeToggle />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}