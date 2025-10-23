import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, FolderGit2 } from "lucide-react";

export const Projects = () => {
  const { t } = useLanguage();

  const projects = [
    {
      name: t('proj1_name'),
      description: t('proj1_desc'),
      achievements: [t('proj1_ach1'), t('proj1_ach2')],
      demo: "https://news-inc.web.app/#/",
      github: "https://github.com/Team-C5-News-Inc",
    },
    {
      name: t('proj2_name'),
      description: t('proj2_desc'),
      achievements: [t('proj2_ach1'), t('proj2_ach2')],
      github: "https://github.com/SWAT-Handwritten-Recognition/",
    },
  ];

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="flex items-center gap-3">
            <FolderGit2 className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">{t('projectsTitle')}</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border-t-4 border-t-accent">
                <CardHeader>
                  <CardTitle className="text-lg text-foreground">{project.name}</CardTitle>
                  <CardDescription className="text-sm">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    {project.achievements.map((ach, i) => (
                      <li key={i}>{ach}</li>
                    ))}
                  </ul>
                  <div className="flex gap-2">
                    {project.demo && (
                      <Button size="sm" variant="default" asChild className="gap-2">
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                          {t('viewDemo')}
                        </a>
                      </Button>
                    )}
                    {project.github && (
                      <Button size="sm" variant="outline" asChild className="gap-2">
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                          {t('viewCode')}
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
