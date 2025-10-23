import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Projects = () => {
  const projects = [
    {
      title: "Жилой комплекс 'Солнечный'",
      category: "Жилое строительство",
      area: "12 000 м²",
      duration: "18 месяцев",
      year: "2023",
      description: "Строительство современного жилого комплекса с подземной парковкой"
    },
    {
      title: "Торговый центр 'Галерея'",
      category: "Коммерческое строительство",
      area: "8 500 м²",
      duration: "12 месяцев",
      year: "2023",
      description: "Строительство 3-этажного торгового центра с развлекательной зоной"
    },
    {
      title: "Бизнес-центр 'Премьер'",
      category: "Коммерческое строительство",
      area: "15 000 м²",
      duration: "24 месяца",
      year: "2022",
      description: "Современный офисный центр класса А с подземной парковкой"
    },
    {
      title: "Коттеджный поселок 'Лесная поляна'",
      category: "Жилое строительство",
      area: "25 домов",
      duration: "36 месяцев",
      year: "2022",
      description: "Строительство элитного коттеджного поселка с инфраструктурой"
    },
    {
      title: "Производственный комплекс",
      category: "Промышленное строительство",
      area: "20 000 м²",
      duration: "20 месяцев",
      year: "2021",
      description: "Строительство современного производственно-складского комплекса"
    },
    {
      title: "Медицинский центр 'Здоровье'",
      category: "Социальные объекты",
      area: "5 000 м²",
      duration: "14 месяцев",
      year: "2021",
      description: "Многопрофильный медицинский центр с современным оборудованием"
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="py-20 bg-gradient-to-br from-primary/10 to-background">
        <div className="container px-4">
          <h1 className="text-5xl font-bold text-center mb-6 text-secondary">Наши проекты</h1>
          <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto">
            Реализованные объекты различной сложности и назначения
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="hover-scale transition-all overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <Icon name="Building2" size={64} className="text-primary/40" />
                </div>
                <CardContent className="pt-6">
                  <Badge className="mb-3">{project.category}</Badge>
                  <h3 className="font-bold text-xl mb-3">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Icon name="Ruler" size={16} className="text-primary" />
                      <span>Площадь: {project.area}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Icon name="Clock" size={16} className="text-primary" />
                      <span>Срок: {project.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Icon name="Calendar" size={16} className="text-primary" />
                      <span>Год: {project.year}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-secondary">
            География проектов
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { region: "Москва", projects: "85+" },
              { region: "Московская область", projects: "60+" },
              { region: "Санкт-Петербург", projects: "35+" },
              { region: "Другие регионы", projects: "20+" }
            ].map((stat, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-primary mb-2">{stat.projects}</div>
                  <div className="text-muted-foreground">{stat.region}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container px-4">
          <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Хотите увидеть объекты вживую?</h2>
            <p className="text-xl mb-6 opacity-90">
              Организуем экскурсию по нашим строительным площадкам
            </p>
            <div className="flex items-center justify-center gap-2 text-lg">
              <Icon name="Phone" size={24} />
              <span className="font-semibold">+7 (495) 123-45-67</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
