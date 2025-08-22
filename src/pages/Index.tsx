import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { StatsCard } from '@/components/ui/stats-card';
import { TestimonialCard } from '@/components/ui/testimonial-card';
import { ArrowRight, Users, BookOpen, Target, TrendingUp, School, Brain, Lightbulb, Network } from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';

const stats = [
  {
    title: 'Colegios Participantes',
    value: '120',
    description: 'Instituciones en toda Colombia',
    icon: School,
    trend: '15%'
  },
  {
    title: 'Docentes Formados',
    value: '4,000',
    description: 'Educadores capacitados en IA',
    icon: Users,
    trend: '28%'
  },
  {
    title: 'Estudiantes Activos',
    value: '30,000',
    description: 'Jóvenes liderando proyectos',
    icon: BookOpen,
    trend: '42%'
  },
  {
    title: 'Regiones Activas',
    value: '6',
    description: 'Macrorregiones con hubs',
    icon: Network,
    trend: '50%'
  }
];

const testimonials = [
  {
    quote: "Antes veía la IA como algo lejano, ahora mis estudiantes crean chatbots para ayudar a su comunidad rural.",
    author: "María González",
    role: "Docente de Tecnología",
    school: "I.E. San José, Boyacá"
  },
  {
    quote: "Desarrollamos un sistema de IA para optimizar el uso del agua en nuestra región. Es increíble lo que podemos lograr.",
    author: "Carlos Mendoza",
    role: "Estudiante Grado 11",
    school: "Colegio Nacional, Huila"
  },
  {
    quote: "La metodología ABP con IA nos permite conectar el aprendizaje con problemas reales de nuestros estudiantes.",
    author: "Ana Rodríguez",
    role: "Coordinadora Académica",
    school: "Institución Educativa Central"
  }
];

const howItWorks = [
  {
    step: '1',
    title: 'Clústeres Locales',
    description: 'Grupos de colegios cercanos se organizan para compartir recursos y experiencias',
    icon: School
  },
  {
    step: '2',
    title: 'Ejes Regionales',
    description: 'Universidades, empresas y secretarías de educación forman hubs de apoyo territorial',
    icon: Network
  },
  {
    step: '3',
    title: 'Hub Nacional',
    description: 'Coordinación liviana que facilita recursos, formación y evaluación conjunta',
    icon: Target
  }
];

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
        <div className="container relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-balance leading-tight">
                  IA Sin Barreras: la red de colegios que lidera la 
                  <span className="text-brand-electric"> educación en IA</span> en Colombia
                </h1>
                <p className="text-lg text-muted-foreground text-balance max-w-2xl">
                  Conectamos colegios con universidades, industria y gobierno para que cada estudiante 
                  lidere con IA proyectos reales que transformen su comunidad.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="hero-shadow hover-glow" asChild>
                  <Link to="/contacto">
                    Únete como colegio
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="hover-lift" asChild>
                  <Link to="/contacto">Soy aliado</Link>
                </Button>
                <Button variant="ghost" size="lg" className="hover-lift" asChild>
                  <Link to="/red">Explora la red</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Estudiantes y docentes colombianos trabajando con IA en el aula"
                className="rounded-2xl shadow-2xl hover-lift"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-4">Nuestro Impacto en Números</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Métricas en tiempo real de la transformación educativa que estamos liderando en Colombia
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <StatsCard key={index} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold mb-4">Cómo Funciona</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Un modelo colaborativo que conecta todos los niveles del sistema educativo
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {howItWorks.map((item, index) => (
              <Card key={index} className="hover-lift card-shadow relative">
                <CardContent className="p-8 text-center">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm">
                      {item.step}
                    </div>
                  </div>
                  <div className="p-4 rounded-full bg-primary/10 w-fit mx-auto mb-4 mt-4">
                    <item.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold mb-4">Historias de Transformación</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Escucha las voces de quienes están liderando el cambio en sus comunidades
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-12 text-center text-white">
            <h2 className="text-3xl font-semibold mb-4">
              ¿Listo para transformar la educación en tu región?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Únete a la red nacional que está democratizando el acceso a la educación en IA
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="hover-lift" asChild>
                <Link to="/contacto">
                  Quiero vincular mi colegio
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" asChild>
                <Link to="/participar">Conoce cómo participar</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
