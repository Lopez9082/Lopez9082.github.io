import { User, Briefcase, Award, Target, Code, Calendar, Coffee } from 'lucide-react';

export default function About() {
  const stats = [
    { icon: Code, label: 'Linguagens', value: '8+' },
    { icon: Coffee, label: 'Tecnologias', value: 'Full Stack' },
    { icon: Calendar, label: 'Formação', value: 'Em andamento' },
  ];

  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Sobre <span className="text-gradient">Mim</span>
          </h2>
          <p className="text-muted-foreground">Conheça mais sobre José Augusto</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="bg-card backdrop-blur-sm border border-border rounded-2xl p-6 text-center hover:bg-card/80 transition-all duration-300 hover:scale-105">
                <Icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative group order-2 md:order-1">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-300"></div>
            <div className="relative rounded-3xl overflow-hidden border border-border max-w-md mx-auto">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop"
                alt="José Augusto - Workspace"
                className="w-full h-96 object-cover"
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop';
                }}
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-6 order-1 md:order-2">
            <div className="bg-card backdrop-blur-sm border border-border rounded-2xl p-6 hover:bg-card/80 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center flex-shrink-0">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Quem é José Augusto</h3>
                  <p className="text-muted-foreground">
                    Estudante de Ciências da Computação apaixonado por tecnologia e desenvolvimento web.
                    Estou em busca de uma oportunidade de estágio onde possa aprender, crescer profissionalmente e contribuir com minhas habilidades.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card backdrop-blur-sm border border-border rounded-2xl p-6 hover:bg-card/80 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Formação Acadêmica</h3>
                  <p className="text-muted-foreground">
                    Cursando Ciências da Computação, com foco em desenvolvimento web full stack.
                    Conhecimento em React, PHP, CodeIgniter e bancos de dados SQL. Sempre em busca de novos aprendizados e desafios.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card backdrop-blur-sm border border-border rounded-2xl p-6 hover:bg-card/80 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-pink-700 flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Habilidades Técnicas</h3>
                  <p className="text-muted-foreground">
                    Conhecimento em desenvolvimento full stack: React para interfaces dinâmicas, PHP/CodeIgniter para backend,
                    SQL para bancos de dados, Git para controle de versão e Figma para design UI/UX.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card backdrop-blur-sm border border-border rounded-2xl p-6 hover:bg-card/80 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-700 flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Objetivos e Motivação</h3>
                  <p className="text-muted-foreground">
                    Busco uma oportunidade de estágio para aplicar meus conhecimentos na prática, aprender com profissionais experientes
                    e contribuir com soluções criativas. Comprometido com aprendizado contínuo e crescimento profissional.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}