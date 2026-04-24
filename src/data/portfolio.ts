export interface Project {
  title: string;
  category: string;
  imageUrl: string;
}

export const categories = ['All', 'Web Design', 'E-Commerce', 'Web Application', 'Branding'];

export const projects: Project[] = [
  {
    title: 'Nova Tech Dashboard',
    category: 'Web Application',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
  },
  {
    title: 'Artisan Coffee Co.',
    category: 'E-Commerce',
    imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80',
  },
  {
    title: 'FinVault Banking',
    category: 'Web Application',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
  },
  {
    title: 'GreenLeaf Health',
    category: 'Web Design',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
  },
  {
    title: 'Urban Threads Apparel',
    category: 'E-Commerce',
    imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
  },
  {
    title: 'Atlas Travel Agency',
    category: 'Web Design',
    imageUrl: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80',
  },
  {
    title: 'Apex Fitness Studio',
    category: 'Branding',
    imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80',
  },
  {
    title: 'Meridian Real Estate',
    category: 'Web Application',
    imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
  },
  {
    title: 'Bloom Florist Studio',
    category: 'Branding',
    imageUrl: 'https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=800&q=80',
  },
];
