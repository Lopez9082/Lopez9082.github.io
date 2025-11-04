import { Mail, Github, Linkedin, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'contato@joseaugusto.com',
      href: 'mailto:contato@joseaugusto.com'
    },
    {
      icon: Phone,
      label: 'Telefone',
      value: '+55 (11) 99999-9999',
      href: 'tel:+5511999999999'
    },
    {
      icon: MapPin,
      label: 'Localização',
      value: 'São Paulo, Brasil'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/joseaugusto',
      href: 'https://github.com/joseaugusto'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/joseaugusto',
      href: 'https://linkedin.com/in/joseaugusto'
    }
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Entre em <span className="text-gradient">Contato</span>
          </h2>
          <p className="text-muted-foreground">
            Estou aberto a oportunidades de estágio e novos projetos
          </p>
        </div>

        <Card className="p-8 bg-card/50 backdrop-blur-sm border-border">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactInfo.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="flex items-start gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-foreground hover:text-primary transition-colors break-words"
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-foreground break-words">{item.value}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <Button size="lg" className="gap-2 glow-effect" asChild>
              <a href="mailto:contato@joseaugusto.com">
                <Mail className="w-4 h-4" />
                Enviar Email
              </a>
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
}
