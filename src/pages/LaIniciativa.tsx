import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Target, Users, Shield, BookOpen, ArrowRight, Network, Globe, Heart } from 'lucide-react';

const principios = [
  {
    icon: Users,
    title: 'Equidad e Inclusión',
    description: 'Democratizamos el acceso a la educación en IA, priorizando comunidades rurales y vulnerables.'
  },
  {
    icon: Shield,
    title: 'Ética y Privacidad',
    description: 'Promovemos un uso responsable de la IA, protegiendo los datos y derechos de estudiantes.'
  },
  {
    icon: Heart,
    title: 'Enfoque en el Estudiante',
    description: 'Ponemos a los jóvenes en el centro, como protagonistas de su aprendizaje y transformación social.'
  },
  {
    icon: Globe,
    title: 'Conocimiento Abierto',
    description: 'Compartimos recursos, metodologías y evidencia bajo licencias abiertas.'
  }
];

const diferencias = [
  'Modelo colaborativo descentralizado que respeta la autonomía territorial',
  'Metodología de Aprendizaje Basado en Proyectos contextualizada a realidades locales',
  'Formación docente integral con acompañamiento continuo y microcredenciales',
  'Evaluación rigurosa del impacto educativo y social de cada intervención'
];

export default function LaIniciativa() {
  return (
    <div className="py-20">
      <div className="container">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-semibold mb-6">La Iniciativa</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            IA Sin Barreras es una red nacional que articula colegios, universidades, 
            industria y gobierno para democratizar la educación en inteligencia artificial 
            en Colombia, con equidad y enfoque territorial.
          </p>
        </div>

        {/* Propósito */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl p-12">
            <div className="text-center mb-12">
              <Target className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-semibold mb-4">Nuestro Propósito</h2>
            </div>
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg leading-relaxed mb-8">
                Transformar la educación colombiana mediante la integración ética y equitativa 
                de la inteligencia artificial, preparando a las nuevas generaciones para liderar 
                la innovación y resolver los desafíos de sus comunidades.
              </p>
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div>
                  <h3 className="font-semibold text-lg mb-3">Visión 2030</h3>
                  <p className="text-muted-foreground">
                    Colombia líder regional en educación en IA, con una red de 500 colegios 
                    formando jóvenes que usan la tecnología para generar impacto social positivo.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-3">Misión</h3>
                  <p className="text-muted-foreground">
                    Articular ecosistemas educativos territoriales donde colegios, universidades 
                    y aliados co-crean experiencias de aprendizaje en IA contextualizadas y transformadoras.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Principios */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-4">Nuestros Principios</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Los valores que guían cada decisión y acción en nuestra red nacional
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {principios.map((principio, index) => (
              <Card key={index} className="hover-lift card-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-lg bg-primary/10 flex-shrink-0">
                      <principio.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">{principio.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{principio.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Modelo Hub and Spoke */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <Network className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-semibold mb-4">Modelo de Red Distribuida</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Un sistema hub-and-spoke que conecta lo local con lo nacional
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="hover-lift card-shadow">
              <CardContent className="p-8 text-center">
                <div className="p-4 rounded-full bg-brand-emerald/10 w-fit mx-auto mb-6">
                  <Users className="h-8 w-8 text-brand-emerald" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Clústeres Locales</h3>
                <p className="text-muted-foreground mb-6">
                  Grupos de 3-8 colegios cercanos que comparten recursos, experiencias 
                  y desarrollan proyectos colaborativos de IA.
                </p>
                <ul className="text-sm text-left space-y-2">
                  <li>• Intercambio de buenas prácticas</li>
                  <li>• Proyectos inter-colegios</li>
                  <li>• Formación docente conjunta</li>
                  <li>• Recursos compartidos</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-lift card-shadow">
              <CardContent className="p-8 text-center">
                <div className="p-4 rounded-full bg-primary/10 w-fit mx-auto mb-6">
                  <Network className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Ejes Regionales</h3>
                <p className="text-muted-foreground mb-6">
                  Universidades ancla + empresas/gremios + secretarías de educación 
                  que brindan soporte técnico y académico.
                </p>
                <ul className="text-sm text-left space-y-2">
                  <li>• Formación avanzada docente</li>
                  <li>• Mentoría de proyectos</li>
                  <li>• Infraestructura tecnológica</li>
                  <li>• Conexión con industria</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-lift card-shadow">
              <CardContent className="p-8 text-center">
                <div className="p-4 rounded-full bg-secondary/10 w-fit mx-auto mb-6">
                  <Target className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Hub Nacional</h3>
                <p className="text-muted-foreground mb-6">
                  Coordinación liviana que facilita metodologías, evaluación, 
                  recursos abiertos y articulación de políticas.
                </p>
                <ul className="text-sm text-left space-y-2">
                  <li>• Metodologías y estándares</li>
                  <li>• Recursos educativos abiertos</li>
                  <li>• Investigación y evaluación</li>
                  <li>• Política pública educativa</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Qué nos hace diferentes */}
        <section className="mb-20">
          <div className="bg-muted/30 rounded-3xl p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-semibold mb-4">¿Qué nos hace diferentes?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Nuestro enfoque único combina autonomía territorial con coordinación nacional
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {diferencias.map((diferencia, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-1">
                    {index + 1}
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{diferencia}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-semibold mb-6">
            ¿Listo para ser parte del cambio?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Conoce cómo tu institución puede integrarse a esta red nacional 
            de transformación educativa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/participar">
                Cómo Participar
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/contacto">Contactar ahora</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}