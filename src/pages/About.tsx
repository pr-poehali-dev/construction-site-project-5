import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";

const About = () => {
  return (
    <div className="min-h-screen">
      <section className="py-20 bg-gradient-to-br from-primary/10 to-background">
        <div className="container px-4">
          <h1 className="text-5xl font-bold text-center mb-6 text-secondary">О компании</h1>
          <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto">
            СтройЭксперт — надежный партнер в реализации строительных проектов любой сложности
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-secondary">Наша история</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Компания СтройЭксперт основана в 2008 году группой профессионалов строительной отрасли.
                За 15 лет работы мы реализовали более 200 проектов различной сложности.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Мы специализируемся на строительстве жилых и коммерческих объектов, предлагая полный
                цикл услуг — от проектирования до сдачи объекта под ключ.
              </p>
              <p className="text-lg text-muted-foreground">
                Наша миссия — создавать качественные и безопасные объекты, которые служат людям долгие годы.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { number: "200+", label: "Реализованных проектов" },
                { number: "15", label: "Лет на рынке" },
                { number: "150+", label: "Специалистов" },
                { number: "98%", label: "Довольных клиентов" }
              ].map((stat, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="pt-6">
                    <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-secondary">
            Лицензии и сертификаты
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Лицензия на строительство",
                number: "№ СРО-С-123-45678910",
                date: "Выдана: 15.03.2023",
                icon: "FileCheck"
              },
              {
                title: "ISO 9001:2015",
                number: "Система менеджмента качества",
                date: "Сертифицирован: 2023",
                icon: "Award"
              },
              {
                title: "Допуск СРО",
                number: "№ ГС-1-99-01-12-0-1234567890-123456",
                date: "Выдан: 01.01.2023",
                icon: "ShieldCheck"
              }
            ].map((cert, index) => (
              <Card key={index} className="hover-scale transition-all">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Icon name={cert.icon} size={32} className="text-primary" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{cert.title}</h3>
                  <p className="text-sm text-muted-foreground mb-1">{cert.number}</p>
                  <Badge variant="secondary" className="mt-2">{cert.date}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-muted-foreground">
              Все документы доступны для ознакомления в офисе компании
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-secondary">Наши ценности</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "Target",
                title: "Профессионализм",
                description: "Высокая квалификация специалистов и современные технологии"
              },
              {
                icon: "Heart",
                title: "Ответственность",
                description: "Соблюдение сроков и полная гарантия на выполненные работы"
              },
              {
                icon: "Sparkles",
                title: "Инновации",
                description: "Применение передовых материалов и строительных решений"
              }
            ].map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={value.icon} size={36} className="text-primary" />
                </div>
                <h3 className="font-bold text-xl mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
