import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const Reviews = () => {
  const reviews = [
    {
      name: "Александр Петров",
      position: "Владелец коттеджа",
      rating: 5,
      date: "15.11.2023",
      text: "Отличная команда профессионалов! Построили дом точно в срок, качество работы на высоте. Особенно порадовало внимание к деталям и готовность идти навстречу."
    },
    {
      name: "Елена Смирнова",
      position: "Директор ООО 'Альфа'",
      rating: 5,
      date: "03.10.2023",
      text: "Сотрудничаем со СтройЭксперт уже третий год. Построили офисное здание и склад. Всё выполнено качественно и в договорные сроки. Рекомендуем!"
    },
    {
      name: "Михаил Иванов",
      position: "Частный заказчик",
      rating: 5,
      date: "22.09.2023",
      text: "Делали капитальный ремонт квартиры. Результат превзошёл ожидания! Спасибо команде за профессионализм и терпение. Цена соответствует качеству."
    },
    {
      name: "Ольга Васильева",
      position: "Владелица таунхауса",
      rating: 5,
      date: "10.08.2023",
      text: "Благодарю за качественную работу! Дом построен по индивидуальному проекту, учтены все наши пожелания. Гарантийное обслуживание работает отлично."
    },
    {
      name: "Дмитрий Козлов",
      position: "ИП Козлов Д.А.",
      rating: 5,
      date: "28.07.2023",
      text: "Строили торговый павильон. Работы выполнены качественно и оперативно. Ребята предложили оптимальные решения, которые помогли сэкономить бюджет."
    },
    {
      name: "Анна Николаева",
      position: "Частный заказчик",
      rating: 5,
      date: "15.06.2023",
      text: "Очень довольна сотрудничеством! Сделали ремонт загородного дома под ключ. Всё организовано чётко, никаких задержек. Рекомендую эту компанию!"
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="py-20 bg-gradient-to-br from-primary/10 to-background">
        <div className="container px-4">
          <h1 className="text-5xl font-bold text-center mb-6 text-secondary">Отзывы клиентов</h1>
          <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto">
            Мнения наших клиентов — лучшая оценка нашей работы
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="hover-scale transition-all">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4 mb-4">
                    <Avatar className="w-12 h-12">
                      <AvatarFallback className="bg-primary text-white font-semibold">
                        {review.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h3 className="font-bold">{review.name}</h3>
                      <p className="text-sm text-muted-foreground">{review.position}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={18} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>

                  <p className="text-muted-foreground mb-3 leading-relaxed">
                    {review.text}
                  </p>

                  <p className="text-xs text-muted-foreground">{review.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {[
              { number: "98%", label: "Довольных клиентов" },
              { number: "200+", label: "Выполненных проектов" },
              { number: "4.9", label: "Средняя оценка" },
              { number: "95%", label: "Повторных обращений" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          <Card className="max-w-2xl mx-auto bg-white">
            <CardContent className="pt-6">
              <div className="text-center">
                <Icon name="MessageSquare" size={48} className="text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-3">Оставьте свой отзыв</h3>
                <p className="text-muted-foreground mb-6">
                  Ваше мнение важно для нас и помогает становиться лучше
                </p>
                <div className="space-y-2 text-left">
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="Phone" size={18} className="text-primary" />
                    <span>Телефон: +7 (495) 123-45-67</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="Mail" size={18} className="text-primary" />
                    <span>Email: info@stroyexpert.ru</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
