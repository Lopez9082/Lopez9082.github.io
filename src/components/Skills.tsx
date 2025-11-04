import { Code2, Database, Layout, Server, GitBranch, Palette } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      icon: Layout,
      title: 'Frontend',
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3', 'JavaScript'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Server,
      title: 'Backend',
      skills: ['PHP', 'CodeIgniter', 'Node.js', 'REST APIs'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Database,
      title: 'Database',
      skills: ['MySQL', 'PostgreSQL', 'SQL'],
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: GitBranch,
      title: 'Ferramentas',
      skills: ['Git', 'GitHub', 'VS Code', 'Postman'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Palette,
      title: 'Design',
      skills: ['Figma', 'UI/UX', 'Responsive Design'],
      color: 'from-violet-500 to-purple-500'
    },
    {
      icon: Code2,
      title: 'Outros',
      skills: ['Linux', 'Metodologias Ágeis', 'Clean Code', 'DevOps'], 
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Habilidades <span className="text-gradient">&amp; Tecnologias</span>
          </h2>
          <p className="text-muted-foreground">Ferramentas e tecnologias que domino</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:scale-105 group"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-secondary text-sm rounded-full border border-border"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
