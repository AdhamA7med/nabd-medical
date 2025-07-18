import { Heart, Phone, MapPin, Clock, Users, Award, CheckCircle, Star, MessageSquare, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const services = [
    { name: "عيادة النساء والتوليد", icon: Heart },
    { name: "عيادة المخ والأعصاب", icon: Users },
    { name: "معمل التحاليل الطبية", icon: CheckCircle },
    { name: "عيادة العظام", icon: Award },
    { name: "عيادة الأسنان", icon: Star },
    { name: "عيادة الرمد", icon: Heart },
    { name: "عيادة الباطنة", icon: Users },
    { name: "عيادة الجراحة العامة", icon: Award }
  ];

  const testimonials = [
    {
      name: "أحمد محمد",
      text: "خدمة ممتازة وطاقم طبي محترف. أنصح بالمركز بشدة لجميع الخدمات الطبية.",
      rating: 5
    },
    {
      name: "فاطمة علي",
      text: "المركز مجهز بأحدث الأجهزة والفريق الطبي متعاون جداً. تجربة رائعة.",
      rating: 5
    },
    {
      name: "محمود حسن",
      text: "سرعة في الخدمة ودقة في التشخيص. المكان نظيف ومريح للغاية.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Floating Contact Icons */}
      <div className="floating-contact">
        <a href="https://wa.me/01031260630" className="floating-btn whatsapp-btn" target="_blank" rel="noopener noreferrer">
          <MessageSquare size={24} />
        </a>
        <a href="tel:01031260630" className="floating-btn phone-btn">
          <PhoneCall size={24} />
        </a>
      </div>

      {/* Header */}
      <header className="bg-white shadow-sm py-4 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <Heart className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary">مركز نبض</h1>
              <p className="text-sm text-muted-foreground">للخدمات الطبية</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">الرئيسية</a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">الخدمات</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">عن المركز</a>
            <a href="#testimonials" className="text-foreground hover:text-primary transition-colors">آراء العملاء</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">اتصل بنا</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="medical-gradient py-20 px-6 text-white">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <Heart className="mx-auto mb-4 pulse-animation" size={80} />
          </div>
          <h1 className="text-5xl font-bold mb-6">مركز نبض للخدمات الطبية</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            مركز طبي متكامل يضم جميع التخصصات الطبية مع أحدث الأجهزة والتقنيات الطبية
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
              <Clock size={20} />
              <span>طوارئ 24 ساعة</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
              <Award size={20} />
              <span>فريق طبي متخصص</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
              <CheckCircle size={20} />
              <span>معمل متميز للتحاليل</span>
            </div>
          </div>
          <Button size="lg" className="bg-white text-primary hover:bg-white/90">
            احجز موعدك الآن
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-primary">العيادات التخصصية</h2>
            <p className="text-lg text-muted-foreground">
              نوفر لك جميع التخصصات الطبية في مكان واحد لراحتك وسلامتك
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <service.icon className="mx-auto mb-4 text-primary" size={40} />
                  <h3 className="font-semibold text-lg">{service.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-primary">لماذا مركز نبض؟</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="text-accent mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold mb-2">فريق طبي متخصص</h3>
                    <p className="text-muted-foreground">أطباء ذو خبرة عالية في جميع التخصصات الطبية</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="text-accent mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold mb-2">أحدث الأجهزة الطبية</h3>
                    <p className="text-muted-foreground">تقنيات حديثة ومتطورة لضمان أفضل خدمة طبية</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="text-accent mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold mb-2">خدمة طوارئ 24 ساعة</h3>
                    <p className="text-muted-foreground">متاحون لخدمتك في أي وقت على مدار اليوم</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="text-accent mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold mb-2">معمل تحاليل متميز</h3>
                    <p className="text-muted-foreground">نتائج دقيقة وسريعة لجميع أنواع التحاليل الطبية</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-80 h-80 mx-auto flex items-center justify-center">
                <Heart className="text-primary" size={120} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-primary">آراء عملائنا</h2>
            <p className="text-lg text-muted-foreground">
              شهادات حقيقية من المرضى الذين حصلوا على خدماتنا الطبية
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 fill-current" size={20} />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">"{testimonial.text}"</p>
                  <div className="font-semibold text-primary">{testimonial.name}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-primary">تواصل معنا</h2>
            <p className="text-lg text-muted-foreground">
              نحن هنا لخدمتك، لا تتردد في التواصل معنا
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <Phone className="mx-auto mb-4 text-primary" size={40} />
                <h3 className="font-semibold mb-2">الهاتف</h3>
                <p className="text-muted-foreground" dir="ltr">01031260630</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <MapPin className="mx-auto mb-4 text-primary" size={40} />
                <h3 className="font-semibold mb-2">العنوان</h3>
                <p className="text-muted-foreground">
                  عين شمس، شارع شوقي من شارع الترولي (الفيروز)<br />
                  الكيلو 7 بجوار مدرسة الرحاب<br />
                  القاهرة، مصر
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <Clock className="mx-auto mb-4 text-primary" size={40} />
                <h3 className="font-semibold mb-2">ساعات العمل</h3>
                <p className="text-muted-foreground">
                  طوارئ 24 ساعة<br />
                  العيادات: 9 صباحاً - 11 مساءً
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-8 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <Heart className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-lg">مركز نبض</h3>
                  <p className="text-sm opacity-90">للخدمات الطبية</p>
                </div>
              </div>
              <p className="opacity-90 leading-relaxed">
                مركز طبي متكامل يسعى لتقديم أفضل الخدمات الطبية بأحدث التقنيات
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">خدماتنا</h4>
              <ul className="space-y-2 opacity-90">
                <li>طوارئ 24 ساعة</li>
                <li>عيادات متخصصة</li>
                <li>معمل تحاليل طبية</li>
                <li>أشعة وفحوصات</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">معلومات التواصل</h4>
              <div className="space-y-3 opacity-90">
                <div className="flex items-center gap-2">
                  <Phone size={16} />
                  <span dir="ltr">01031260630</span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin size={16} className="mt-1" />
                  <span>عين شمس، القاهرة، مصر</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-6 text-center">
            <p className="opacity-75">
              © 2024 مركز نبض للخدمات الطبية. جميع الحقوق محفوظة
            </p>
            <p className="opacity-75 mt-2">
              تم تطوير الموقع بواسطة{" "}
              <a 
                href="https://wa.me/01153903786" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-accent hover:text-white transition-colors underline"
              >
                ادهم احمد
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
