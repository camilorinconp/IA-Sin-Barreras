import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navigation = [
  { name: 'Inicio', href: '/' },
  { name: 'La Iniciativa', href: '/iniciativa' },
  { name: 'Cómo Participar', href: '/participar' },
  { name: 'Pilares', href: '/pilares' },
  { name: 'Red Nacional', href: '/red' },
  { name: 'Recursos', href: '/recursos' },
  { name: 'Eventos', href: '/eventos' },
  { name: 'Impacto y Datos', href: '/impacto' },
  { name: 'Aliados', href: '/aliados' },
  { name: 'Contacto', href: '/contacto' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 hover-lift">
          <div className="p-2 rounded-lg bg-primary text-primary-foreground">
            <GraduationCap className="h-5 w-5" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-semibold text-foreground">IA Sin Barreras</span>
            <span className="text-xs text-brand-gray-medium">Colombia</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-smooth ${
                isActive(item.href)
                  ? 'bg-primary/10 text-primary'
                  : 'text-foreground hover:bg-muted hover:text-primary'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center space-x-3">
          <Button variant="outline" size="sm" asChild>
            <Link to="/contacto">Unir mi colegio</Link>
          </Button>
          <Button size="sm" className="bg-brand-emerald hover:bg-brand-emerald/90" asChild>
            <Link to="/contacto">Soy aliado</Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="sm" className="lg:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Abrir menú</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80">
            <div className="flex flex-col space-y-4 mt-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-smooth ${
                    isActive(item.href)
                      ? 'bg-primary/10 text-primary'
                      : 'text-foreground hover:bg-muted hover:text-primary'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t">
                <Button variant="outline" size="sm" asChild>
                  <Link to="/contacto" onClick={() => setMobileMenuOpen(false)}>
                    Unir mi colegio
                  </Link>
                </Button>
                <Button size="sm" className="bg-brand-emerald hover:bg-brand-emerald/90" asChild>
                  <Link to="/contacto" onClick={() => setMobileMenuOpen(false)}>
                    Soy aliado
                  </Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}