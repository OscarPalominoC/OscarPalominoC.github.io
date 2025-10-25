import { useLanguage } from "@/contexts/LanguageContext";
import { Mail, Phone, Linkedin, Github, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const { t } = useLanguage();

  const contactLinks = [
    { icon: Mail, text: "ing.oscarp1@gmail.com", href: "mailto:ing.oscarp1@gmail.com" },
    { icon: MapPin, text: t('location'), href: null },
    { icon: Linkedin, text: "LinkedIn", href: "https://www.linkedin.com/in/oscarpalominocardenas/" },
    { icon: Github, text: "OscarPalominoC", href: "https://github.com/OscarPalominoC" },
    { icon: Github, text: "oscar-dev91", href: "https://github.com/oscar-dev91" },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-block">
            <div className="h-32 w-32 rounded-full bg-gradient-to-br from-primary via-primary-glow to-accent flex items-center justify-center text-white font-bold text-5xl shadow-lg mx-auto">
              OP
            </div>
          </div>
          
          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              {t('name')}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium">
              {t('title')}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            {contactLinks.map((link, index) => {
              const Icon = link.icon;
              if (link.href) {
                return (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    asChild
                    className="gap-2 transition-all hover:scale-105"
                  >
                    <a href={link.href} target="_blank" rel="noopener noreferrer">
                      <Icon className="h-4 w-4" />
                      <span className="text-xs">{link.text}</span>
                    </a>
                  </Button>
                );
              }
              return (
                <div
                  key={index}
                  className="flex items-center gap-2 px-3 py-2 rounded-md bg-muted text-muted-foreground text-xs"
                >
                  <Icon className="h-4 w-4" />
                  <span>{link.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
