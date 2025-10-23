import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

export const Experience = () => {
  const { t } = useLanguage();

  const experiences = [
    {
      role: t('exp1_role'),
      company: t('exp1_company'),
      date: t('exp1_date'),
      responsibilities: [t('exp1_resp1'), t('exp1_resp2'), t('exp1_resp3')],
      achievements: [t('exp1_ach1'), t('exp1_ach2')],
    },
    {
      role: t('exp2_role'),
      company: t('exp2_company'),
      date: t('exp2_date'),
      responsibilities: [t('exp2_resp1'), t('exp2_resp2')],
      achievements: [t('exp2_ach1'), t('exp2_ach2')],
    },
  ];

  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="flex items-center gap-3">
            <Briefcase className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">{t('experienceTitle')}</h2>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card key={index} className="shadow-md hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <CardTitle className="text-xl text-foreground">{exp.role}</CardTitle>
                    <Badge variant="secondary" className="w-fit">{exp.date}</Badge>
                  </div>
                  <p className="text-primary font-semibold">{exp.company}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-2">{t('responsibilities')}</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-foreground/90">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-2">{t('achievements')}</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-foreground/90">
                      {exp.achievements.map((ach, i) => (
                        <li key={i}>{ach}</li>
                      ))}
                    </ul>
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
