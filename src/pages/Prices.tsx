import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Prices = () => {
  const priceCategories = [
    {
      title: "Жилищное строительство",
      icon: "Home",
      services: [
        { name: "Строительство дома из кирпича", price: "от 35 000 руб/м²" },
        { name: "Строительство каркасного дома", price: "от 25 000 руб/м²" },
        { name: "Строительство дома из газобетона", price: "от 30 000 руб/м²" },
        { name: "Строительство коттеджа под ключ", price: "от 45 000 руб/м²" }
      ]
    },
    {
      title: "Коммерческое строительство",
      icon: "Building2",
      services: [
        { name: "Офисные здания", price: "от 40 000 руб/м²" },
        { name: "Торговые центры", price: "от 35 000 руб/м²" },
        { name: "Складские помещения", price: "от 20 000 руб/м²" },
        { name: "Производственные здания", price: "от 25 000 руб/м²" }
      ]
    },
    {
      title: "Ремонт и отделка",
      icon: "Hammer",
      services: [
        { name: "Косметический ремонт", price: "от 5 000 руб/м²" },
        { name: "Капитальный ремонт", price: "от 12 000 руб/м²" },
        { name: "Евроремонт", price: "от 18 000 руб/м²" },
        { name: "Дизайнерский ремонт", price: "от 25 000 руб/м²" }
      ]
    },
    {
      title: "Фундаментные работы",
      icon: "HardHat",
      services: [
        { name: "Ленточный фундамент", price: "от 4 500 руб/м²" },
        { name: "Свайный фундамент", price: "от 3 500 руб/м²" },
        { name: "Монолитная плита", price: "от 5 500 руб/м²" },
        { name: "Усиление фундамента", price: "от 8 000 руб/м²" }
      ]
    },
    {
      title: "Кровельные работы",
      icon: "Home",
      services: [
        { name: "Металлочерепица", price: "от 1 800 руб/м²" },
        { name: "Мягкая кровля", price: "от 2 200 руб/м²" },
        { name: "Профнастил", price: "от 1 500 руб/м²" },
        { name: "Натуральная черепица", price: "от 3 500 руб/м²" }
      ]
    },
    {
      title: "Инженерные системы",
      icon: "Wrench",
      services: [
        { name: "Система отопления", price: "от 2 500 руб/м²" },
        { name: "Водоснабжение и канализация", price: "от 1 800 руб/м²" },
        { name: "Электромонтаж", price: "от 1 500 руб/м²" },
        { name: "Вентиляция", price: "от 2 000 руб/м²" }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="py-20 bg-gradient-to-br from-primary/10 to-background">
        <div className="container px-4">
          <h1 className="text-5xl font-bold text-center mb-6 text-secondary">Цены на услуги</h1>
          <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto">
            Прозрачное ценообразование и индивидуальный подход к каждому проекту
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {priceCategories.map((category, index) => (
              <Card key={index} className="hover-scale transition-all">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name={category.icon} size={28} className="text-primary" />
                    </div>
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {category.services.map((service, idx) => (
                      <div key={idx} className="flex items-center justify-between py-2 border-b last:border-0">
                        <span className="text-sm">{service.name}</span>
                        <span className="font-semibold text-primary whitespace-nowrap ml-4">
                          {service.price}
                        </span>
                      </div>
                    ))}
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
            Что входит в стоимость?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "FileText", title: "Проектирование", desc: "Разработка проектной документации" },
              { icon: "Truck", title: "Материалы", desc: "Качественные строительные материалы" },
              { icon: "Users", title: "Работа", desc: "Услуги квалифицированных специалистов" },
              { icon: "ShieldCheck", title: "Гарантия", desc: "Гарантийное обслуживание" }
            ].map((item, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={item.icon} size={32} className="text-primary" />
                  </div>
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container px-4 max-w-4xl">
          <Card className="bg-gradient-to-br from-primary/5 to-background border-primary/20">
            <CardContent className="pt-8 pb-8">
              <div className="text-center mb-6">
                <Icon name="Calculator" size={48} className="text-primary mx-auto mb-4" />
                <h2 className="text-3xl font-bold mb-3 text-secondary">Точный расчёт стоимости</h2>
                <p className="text-muted-foreground">
                  Оставьте заявку на бесплатный расчёт стоимости вашего проекта
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {[
                  { icon: "Clock", title: "Быстро", desc: "Расчёт за 24 часа" },
                  { icon: "Target", title: "Точно", desc: "Учтём все детали" },
                  { icon: "Gift", title: "Бесплатно", desc: "Без скрытых платежей" }
                ].map((benefit, index) => (
                  <div key={index} className="text-center">
                    <Icon name={benefit.icon} size={32} className="text-primary mx-auto mb-2" />
                    <h4 className="font-bold mb-1">{benefit.title}</h4>
                    <p className="text-sm text-muted-foreground">{benefit.desc}</p>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <Link to="/contacts">
                  <Button size="lg" className="text-lg px-8 h-14">
                    Получить расчёт
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-12 bg-muted">
        <div className="container px-4">
          <Card className="max-w-3xl mx-auto">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <Icon name="Info" size={24} className="text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-2">Важная информация</h3>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Указаны базовые цены. Итоговая стоимость рассчитывается индивидуально</li>
                    <li>• Цены действительны на момент публикации и могут быть изменены</li>
                    <li>• Возможны скидки при больших объёмах работ</li>
                    <li>• Предоставляем рассрочку и различные формы оплаты</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Prices;
