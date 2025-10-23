import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Summary = () => {
  const { t } = useLanguage();

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-md border-l-4 border-l-primary">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">{t('professionalSummary')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/90 leading-relaxed">
                {t('summaryText')}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
