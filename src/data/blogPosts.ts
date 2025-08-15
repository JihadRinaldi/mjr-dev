export interface BlogPost {
  slug: string;
  title: string;
  content: string;
  publishDate: string;
  coverImage?: string;
  excerpt: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'typescript-best-practices',
    title: 'TypeScript Best Practices for React',
    excerpt: 'Learn how to effectively use TypeScript in React applications for better code quality and developer experience.',
    content: `
# TypeScript Best Practices for React

TypeScript brings type safety to React development, helping catch errors early and improving code maintainability.

## Essential TypeScript Patterns

### Component Props

\`\`\`typescript
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', onClick }) => {
  return (
    <button className={\`btn btn-\${variant}\`} onClick={onClick}>
      {children}
    </button>
  );
};
\`\`\`

### Custom Hooks

\`\`\`typescript
function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue] as const;
}
\`\`\`

## Key Benefits

- **Early Error Detection**: Catch type errors at compile time
- **Better IDE Support**: Enhanced autocomplete and refactoring
- **Self-Documenting Code**: Types serve as documentation
- **Safer Refactoring**: Confidence when making changes

TypeScript is an investment that pays dividends in code quality and developer productivity.
    `,
    publishDate: '2025-08-13',
    coverImage: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea',
  },
  {
    slug: 'web-performance-tips',
    title: 'Essential Web Performance Tips',
    excerpt: 'Practical techniques to improve your web application performance and user experience.',
    content: `
# Essential Web Performance Tips

Web performance directly impacts user experience, SEO rankings, and conversion rates. Here are practical tips to make your applications faster.

## Core Performance Metrics

### Core Web Vitals
- **LCP (Largest Contentful Paint)**: Should occur within 2.5 seconds
- **FID (First Input Delay)**: Should be less than 100 milliseconds
- **CLS (Cumulative Layout Shift)**: Should be less than 0.1

## Optimization Techniques

### 1. Image Optimization
- Use modern formats (WebP, AVIF)
- Implement lazy loading
- Serve appropriately sized images
- Use responsive images with srcset

### 2. Code Optimization
\`\`\`javascript
// Code splitting with React.lazy
const LazyComponent = React.lazy(() => import('./LazyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}
\`\`\`

### 3. Bundle Optimization
- Tree shaking to remove unused code
- Minimize and compress assets
- Use a CDN for static resources
- Implement proper caching strategies

### 4. Runtime Performance
- Minimize re-renders with React.memo
- Use useMemo and useCallback for expensive operations
- Optimize list rendering with proper keys
- Debounce user inputs

## Measuring Performance

Use these tools to monitor and improve performance:
- **Lighthouse**: Comprehensive audits
- **Chrome DevTools**: Real-time debugging
- **Web Vitals**: Core metrics monitoring
- **Bundle Analyzer**: Understand bundle composition

Remember: Measure first, optimize second, and always validate improvements with real data.
    `,
    publishDate: '2025-08-15',
    coverImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
}