
 export function isActive(href: string): boolean {
     if (href === '/' && currentPath === '/') return true;
     if (href !== '/' && currentPath.startsWith(href)) return true;
     return false;
 }
