import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export default function Projects() {
  const projects = [
    {
      title: 'Sistema Web Full Stack',
      description: 'Sistema completo desenvolvido com React e CodeIgniter, incluindo autenticação, CRUD e dashboard administrativo.',
      tech: ['React', 'PHP', 'MySQL', 'Tailwind'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop'
    },
    {
      title: 'Site de consulta medica',
      description: 'Site de consulta moderno e responsiva com animações suaves e Banco de dados.',
      tech: ['HTML', 'PHP', 'CodeIgniter', 'CSS', 'SQL'],
      github: 'https://github.com/Lopez9082/Site-Consulta-medica',
      demo: 'https://demo.com',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=400&fit=crop'
    },
    {
      title: 'TI VERDE',
      description: 'Website desenvolvido com HTML, CSS e JavaScript focado em sustentabilidade e tecnologia verde.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/Lopez9082/TI-VERDE',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop'
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Meus <span className="text-gradient">Projetos</span>
          </h2>
          <p className="text-muted-foreground">Alguns dos trabalhos que desenvolvi</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.title} className="overflow-hidden hover:border-primary/50 transition-all duration-300 hover:scale-105">
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-secondary text-xs rounded-full border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="gap-2">
                {project.github && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="gap-2">
                      <Github className="w-4 h-4" />
                      Código
                    </a>
                  </Button>
                )}
                {project.demo && (
                  <Button size="sm" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="gap-2">
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
