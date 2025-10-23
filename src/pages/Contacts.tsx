import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contacts = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время",
    });
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      <section className="py-20 bg-gradient-to-br from-primary/10 to-background">
        <div className="container px-4">
          <h1 className="text-5xl font-bold text-center mb-6 text-secondary">Контакты</h1>
          <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto">
            Свяжитесь с нами любым удобным способом
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8 text-secondary">Наши контакты</h2>
              
              <div className="space-y-6">
                <Card className="hover-scale transition-all">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon name="Phone" size={24} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-1">Телефон</h3>
                        <p className="text-lg text-muted-foreground">+7 (495) 123-45-67</p>
                        <p className="text-sm text-muted-foreground">Звонок по России бесплатный</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover-scale transition-all">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon name="Mail" size={24} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-1">Email</h3>
                        <p className="text-lg text-muted-foreground">info@stroyexpert.ru</p>
                        <p className="text-sm text-muted-foreground">Ответим в течение часа</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover-scale transition-all">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon name="MapPin" size={24} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-1">Адрес офиса</h3>
                        <p className="text-lg text-muted-foreground">
                          Москва, ул. Строителей, д. 10, офис 205
                        </p>
                        <p className="text-sm text-muted-foreground">Пн-Пт: 9:00 - 18:00, Сб: 10:00 - 16:00</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover-scale transition-all">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon name="Clock" size={24} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-1">Режим работы</h3>
                        <div className="text-muted-foreground">
                          <p>Понедельник - Пятница: 9:00 - 18:00</p>
                          <p>Суббота: 10:00 - 16:00</p>
                          <p>Воскресенье: Выходной</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-8 text-secondary">Оставить заявку</h2>
              <Card>
                <CardContent className="pt-6">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Ваше имя *</label>
                      <Input
                        required
                        placeholder="Иван Иванов"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">Телефон *</label>
                      <Input
                        required
                        type="tel"
                        placeholder="+7 (999) 123-45-67"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">Email</label>
                      <Input
                        type="email"
                        placeholder="example@mail.ru"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">Сообщение *</label>
                      <Textarea
                        required
                        placeholder="Опишите ваш проект или задайте вопрос..."
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      Отправить заявку
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-secondary">Как нас найти</h2>
          <Card className="overflow-hidden">
            <div className="h-96 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
              <div className="text-center">
                <Icon name="Map" size={64} className="text-primary/40 mx-auto mb-4" />
                <p className="text-muted-foreground">Москва, ул. Строителей, д. 10</p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Contacts;
