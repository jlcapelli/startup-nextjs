import AboutSectionOne from "@/components/About/AboutSectionOnePT";
import AboutSectionTwo from "@/components/About/AboutSectionTwoPT";
import Breadcrumb from "@/components/Common/Breadcrumb";

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Sobre"
        description="Bem-vindo à Inteligência em Ação, uma empresa inovadora especializada em soluções de Inteligência Artificial (IA) para otimizar e aprimorar a comunicação e a gestão de negócios. Nossos serviços são voltados para profissionais e empresas que buscam aumentar a eficiência e a qualidade do atendimento aos clientes."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
