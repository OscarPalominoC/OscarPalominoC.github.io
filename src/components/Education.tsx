import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

export const Education = () => {
  const { t } = useLanguage();

  const education = [
    {
      degree: t('edu1_degree'),
      school: t('edu1_school'),
      year: t('edu1_year'),
      description: t('edu1_desc'),
    },
    {
      degree: t('edu2_degree'),
      school: "",
      year: t('edu2_year'),
      description: t('edu2_desc'),
    },
    {
      degree: t('edu3_degree'),
      school: t('edu3_school'),
      year: t('edu3_year'),
      description: t('edu3_desc'),
    },
  ];

  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="flex items-center gap-3">
            <GraduationCap className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">{t('educationTitle')}</h2>
          </div>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index} className="shadow-md">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                    <div>
                      <CardTitle className="text-lg text-foreground">{edu.degree}</CardTitle>
                      {edu.school && (
                        <p className="text-sm text-primary font-medium mt-1">{edu.school}</p>
                      )}
                    </div>
                    <span className="text-sm text-muted-foreground font-medium">{edu.year}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/90 leading-relaxed">{edu.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
