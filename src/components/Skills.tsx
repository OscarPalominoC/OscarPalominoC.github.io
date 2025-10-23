import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2 } from "lucide-react";

export const Skills = () => {
  const { t } = useLanguage();

  const skillCategories = [
    {
      category: t('languages'),
      skills: ['Python', 'JavaScript', 'Java'],
    },
    {
      category: t('databases'),
      skills: ['SQL', 'PostgreSQL', 'MongoDB'],
    },
    {
      category: t('tools'),
      skills: ['Pandas', 'NumPy', 'Requests', 'BeautifulSoup', 'LXML', 'React', 'SpringBoot', 'FastAPI', 'Django'],
    },
    {
      category: t('cloud'),
      skills: ['AWS (EC2, S3, VPC)', 'Docker'],
    },
    {
      category: t('methodologies'),
      skills: ['Agile', 'SCRUM'],
    },
    {
      category: t('visualization'),
      skills: ['Tableau', 'Power BI'],
    },
  ];

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="flex items-center gap-3">
            <Code2 className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">{t('skillsTitle')}</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <Card key={index} className="shadow-md">
                <CardHeader>
                  <CardTitle className="text-lg text-primary">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
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
