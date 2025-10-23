import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen">
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 to-background">
        <div className="container px-4 text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-secondary">
            Строим будущее вместе
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-3xl mx-auto">
            Профессиональное строительство жилых и коммерческих объектов под ключ
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/services">
              <Button size="lg" className="text-lg px-8 h-14">
                Наши услуги
              </Button>
            </Link>
            <Link to="/contacts">
              <Button size="lg" variant="outline" className="text-lg px-8 h-14">
                Связаться с нами
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-secondary">
            Наши преимущества
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover-scale transition-all">
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Shield" size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Гарантия качества</h3>
                <p className="text-muted-foreground">
                  Полная гарантия на все виды работ до 5 лет
                </p>
              </CardContent>
            </Card>

            <Card className="hover-scale transition-all">
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Опытная команда</h3>
                <p className="text-muted-foreground">
                  Более 15 лет опыта в строительной сфере
                </p>
              </CardContent>
            </Card>

            <Card className="hover-scale transition-all">
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Clock" size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Точные сроки</h3>
                <p className="text-muted-foreground">
                  Соблюдаем договорные сроки строительства
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-secondary">
            Наши услуги
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "Home", title: "Жилищное строительство" },
              { icon: "Building2", title: "Коммерческие объекты" },
              { icon: "Hammer", title: "Ремонт и отделка" },
              { icon: "Wrench", title: "Инженерные системы" }
            ].map((service, index) => (
              <Card key={index} className="hover-scale transition-all">
                <CardContent className="pt-6 text-center">
                  <Icon name={service.icon} size={40} className="text-primary mx-auto mb-4" />
                  <h3 className="font-bold text-lg">{service.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/services">
              <Button size="lg" variant="default">
                Все услуги
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white">
        <div className="container px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Готовы начать проект?</h2>
          <p className="text-xl mb-8 opacity-90">
            Свяжитесь с нами для бесплатной консультации
          </p>
          <Link to="/contacts">
            <Button size="lg" variant="secondary" className="text-lg px-8 h-14">
              Получить консультацию
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
