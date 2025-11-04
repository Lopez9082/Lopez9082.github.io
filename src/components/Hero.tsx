import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="max-w-5xl mx-auto text-center">
        <div className="mb-6 animate-fade-in">
          <span className="inline-block px-4 py-2 bg-card border border-border rounded-full text-sm text-muted-foreground">
            Disponível para oportunidades de estágio
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
          Olá, eu sou{' '}
          <span className="text-gradient">José Augusto</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in-up delay-200">
          Estudante de Ciências da Computação apaixonado por desenvolvimento web full stack.
          Buscando transformar ideias em código limpo e funcional.
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center mb-12 animate-fade-in-up delay-300">
          <Button size="lg" className="gap-2 glow-effect">
            <a href="#contact" className="flex items-center gap-2">
              Entre em Contato
              <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
          <Button size="lg" variant="outline">
            <a href="#projects" className="flex items-center">
              Ver Projetos
            </a>
          </Button>
        </div>
        
        <div className="flex gap-6 justify-center animate-fade-in-up delay-400">
          <a href="https://github.com/joseaugusto" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com/in/joseaugusto" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="mailto:contato@joseaugusto.com" className="text-muted-foreground hover:text-foreground transition-colors">
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
}
