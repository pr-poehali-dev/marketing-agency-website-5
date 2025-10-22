import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const services = [
  {
    title: "Разработка сайтов",
    description: "Создаем современные веб-сайты и приложения с уникальным дизайном и безупречной функциональностью",
    icon: "Code"
  },
  {
    title: "Маркетинговые стратегии",
    description: "Разрабатываем эффективные маркетинговые стратегии для роста вашего бизнеса",
    icon: "TrendingUp"
  },
  {
    title: "SEO-оптимизация",
    description: "Продвижение сайтов в поисковых системах для привлечения целевой аудитории",
    icon: "Search"
  },
  {
    title: "Контент-маркетинг",
    description: "Профессиональный копирайтинг и создание контента, который продает",
    icon: "FileText"
  }
];

const portfolio = [
  {
    title: "E-commerce платформа",
    category: "Разработка",
    description: "Интернет-магазин с интеграцией платежных систем"
  },
  {
    title: "Корпоративный сайт",
    category: "Дизайн + SEO",
    description: "Современный сайт производственной компании"
  },
  {
    title: "Стартап SaaS",
    category: "Полный цикл",
    description: "От идеи до запуска продукта"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <nav className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-heading font-bold text-primary">AGENCY</h1>
          <Button variant="outline" className="font-medium">
            Связаться
          </Button>
        </div>
      </nav>

      <section className="container mx-auto px-6 py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-5xl md:text-7xl font-heading font-bold text-foreground mb-6 leading-tight">
            Создаем цифровые решения для вашего бизнеса
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed">
            Разработка сайтов, маркетинг и SEO-продвижение — все в одном месте
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="text-lg px-8 py-6">
              Начать проект
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6">
              Портфолио
            </Button>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h3 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Наши услуги
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Комплексный подход к развитию вашего бизнеса в digital-пространстве
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg animate-scale-in group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="space-y-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                  <Icon name={service.icon} className="text-primary group-hover:text-primary-foreground transition-colors duration-300" size={28} />
                </div>
                <CardTitle className="text-xl font-heading font-semibold">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-6 py-20 bg-muted/30 rounded-3xl my-20">
        <div className="text-center mb-16">
          <h3 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Портфолио
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Проекты, которыми мы гордимся
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolio.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="h-48 bg-gradient-to-br from-primary to-secondary"></div>
              <CardHeader>
                <div className="text-sm text-primary font-medium mb-2">
                  {project.category}
                </div>
                <CardTitle className="text-2xl font-heading font-semibold">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {project.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h3 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
                О компании
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Мы — команда профессионалов с опытом работы более 5 лет в сфере веб-разработки и digital-маркетинга. 
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Наш подход — индивидуальная стратегия для каждого клиента, внимание к деталям и фокус на результате. 
                Мы не просто создаем сайты, мы создаем инструменты для роста вашего бизнеса.
              </p>
              <Button size="lg" className="mt-6">
                Узнать больше
              </Button>
            </div>
            <div className="relative h-96 rounded-2xl bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 animate-scale-in">
              <div className="absolute inset-0 flex items-center justify-center">
                <Icon name="Sparkles" size={120} className="text-primary/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="container mx-auto px-6 py-12 border-t mt-20">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-muted-foreground">
            © 2024 Marketing Agency. Все права защищены.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Icon name="Mail" size={20} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Icon name="Phone" size={20} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Icon name="MessageCircle" size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
