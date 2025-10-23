import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Главная" },
    { path: "/about", label: "О компании" },
    { path: "/services", label: "Услуги" },
    { path: "/projects", label: "Проекты" },
    { path: "/reviews", label: "Отзывы" },
    { path: "/prices", label: "Цены" },
    { path: "/contacts", label: "Контакты" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Building2" size={28} className="text-white" />
              </div>
              <span className="text-2xl font-bold text-secondary">СтройЭксперт</span>
            </Link>

            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <Link key={item.path} to={item.path}>
                  <Button
                    variant={location.pathname === item.path ? "default" : "ghost"}
                    className="text-base"
                  >
                    {item.label}
                  </Button>
                </Link>
              ))}
            </nav>

            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
            </Button>
          </div>

          {mobileMenuOpen && (
            <nav className="lg:hidden pb-4 animate-fade-in">
              {navItems.map((item) => (
                <Link key={item.path} to={item.path} onClick={() => setMobileMenuOpen(false)}>
                  <Button
                    variant={location.pathname === item.path ? "default" : "ghost"}
                    className="w-full justify-start text-base mb-1"
                  >
                    {item.label}
                  </Button>
                </Link>
              ))}
            </nav>
          )}
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="Building2" size={24} className="text-white" />
                </div>
                <span className="text-xl font-bold">СтройЭксперт</span>
              </div>
              <p className="text-white/80">
                Профессиональное строительство с 2008 года
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-lg">Навигация</h4>
              <div className="space-y-2">
                {navItems.slice(0, 4).map((item) => (
                  <Link key={item.path} to={item.path} className="block text-white/80 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-lg">Контакты</h4>
              <div className="space-y-2 text-white/80">
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={18} />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={18} />
                  <span>info@stroyexpert.ru</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="MapPin" size={18} />
                  <span>Москва, ул. Строителей, 10</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-lg">Режим работы</h4>
              <div className="space-y-2 text-white/80">
                <p>Пн-Пт: 9:00 - 18:00</p>
                <p>Сб: 10:00 - 16:00</p>
                <p>Вс: Выходной</p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 text-center text-white/80">
            <p>&copy; 2024 СтройЭксперт. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
