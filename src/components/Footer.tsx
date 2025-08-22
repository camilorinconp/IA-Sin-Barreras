import { Link } from 'react-router-dom';
import { GraduationCap, Mail, MapPin, ExternalLink } from 'lucide-react';

const quickLinks = [
  { name: 'La Iniciativa', href: '/iniciativa' },
  { name: 'Cómo Participar', href: '/participar' },
  { name: 'Recursos', href: '/recursos' },
  { name: 'Red Nacional', href: '/red' },
];

const legal = [
  { name: 'Política de Privacidad', href: '/politica-privacidad' },
  { name: 'Tratamiento de Datos', href: '/tratamiento-datos' },
  { name: 'Términos de Uso', href: '/terminos-uso' },
  { name: 'Cookies', href: '/cookies' },
];

const social = [
  { name: 'X (Twitter)', href: '#', icon: ExternalLink },
  { name: 'LinkedIn', href: '#', icon: ExternalLink },
  { name: 'YouTube', href: '#', icon: ExternalLink },
];

export default function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand and Description */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="p-2 rounded-lg bg-primary text-primary-foreground">
                <GraduationCap className="h-5 w-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-semibold">IA Sin Barreras</span>
                <span className="text-sm text-brand-gray-medium">Colombia</span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground mb-6 max-w-md">
              Red nacional que conecta colegios, universidades, industria y gobierno 
              para llevar la IA al aula con equidad, ética y proyectos reales.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>contacto@iasinbarreras.co</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Bogotá, Colombia</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-sm text-muted-foreground hover:text-primary transition-smooth"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal and Social */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 mb-6">
              {legal.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-sm text-muted-foreground hover:text-primary transition-smooth"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <h3 className="font-semibold mb-4">Síguenos</h3>
            <ul className="space-y-2">
              {social.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-smooth"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <link.icon className="h-4 w-4" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2024 IA Sin Barreras Colombia. Todos los derechos reservados.
          </p>
          <p className="text-sm text-muted-foreground mt-2 md:mt-0">
            Construido con ❤️ para la educación colombiana
          </p>
        </div>
      </div>
    </footer>
  );
}