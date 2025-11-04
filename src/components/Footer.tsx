import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-muted-foreground flex items-center justify-center gap-2">
          Feito com <Heart className="w-4 h-4 text-red-500 fill-red-500" /> por José Augusto © {currentYear}
        </p>
      </div>
    </footer>
  );
}
