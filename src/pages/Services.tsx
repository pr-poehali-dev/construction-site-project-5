import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: "Home",
      title: "Жилищное строительство",
      description: "Строительство частных домов, коттеджей и таунхаусов под ключ",
      features: [
        "Индивидуальное проектирование",
        "Строительство фундамента",
        "Возведение стен и кровли",
        "Внутренняя отделка"
      ]
    },
    {
      icon: "Building2",
      title: "Коммерческие объекты",
      description: "Строительство офисных зданий, торговых центров и складов",
      features: [
        "Проектирование под бизнес-задачи",
        "Быстрые сроки строительства",
        "Инженерные коммуникации",
        "Ландшафтный дизайн территории"
      ]
    },
    {
      icon: "Hammer",
      title: "Ремонт и отделка",
      description: "Комплексный ремонт помещений любой сложности",
      features: [
        "Косметический ремонт",
        "Капитальный ремонт",
        "Дизайнерская отделка",
        "Перепланировка помещений"
      ]
    },
    {
      icon: "Wrench",
      title: "Инженерные системы",
      description: "Монтаж и обслуживание инженерных коммуникаций",
      features: [
        "Отопление и водоснабжение",
        "Электроснабжение",
        "Вентиляция и кондиционирование",
        "Системы безопасности"
      ]
    },
    {
      icon: "HardHat",
      title: "Фундаментные работы",
      description: "Устройство фундаментов всех типов",
      features: [
        "Ленточный фундамент",
        "Свайный фундамент",
        "Монолитная плита",
        "Усиление существующих фундаментов"
      ]
    },
    {
      icon: "PaintBucket",
      title: "Фасадные работы",
      description: "Облицовка и утепление фасадов зданий",
      features: [
        "Штукатурка фасадов",
        "Облицовка кирпичом",
        "Навесные вентилируемые фасады",
        "Утепление и гидроизоляция"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="py-20 bg-gradient-to-br from-primary/10 to-background">
        <div className="container px-4">
          <h1 className="text-5xl font-bold text-center mb-6 text-secondary">Наши услуги</h1>
          <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto">
            Полный спектр строительных услуг от проектирования до сдачи объекта
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover-scale transition-all">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <Icon name="Check" size={18} className="text-primary mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-secondary">
            Этапы работы
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "01", title: "Консультация", desc: "Обсуждение проекта и выезд на объект" },
              { number: "02", title: "Проектирование", desc: "Разработка проекта и сметы" },
              { number: "03", title: "Строительство", desc: "Выполнение работ согласно проекту" },
              { number: "04", title: "Сдача объекта", desc: "Приёмка и гарантийное обслуживание" }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="text-6xl font-bold text-primary/20 mb-4">{step.number}</div>
                <h3 className="font-bold text-xl mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-white">
        <div className="container px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Нужна консультация?</h2>
          <p className="text-xl mb-8 opacity-90">
            Оставьте заявку и наш специалист свяжется с вами
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

export default Services;
