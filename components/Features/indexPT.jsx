import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresDataPT";

const Features = () => {
  return (
    <>
      <section
        id="features"
        className="bg-primary/[.03] py-16 md:py-20 lg:py-28"
      >
        <div className="container">
          <SectionTitle
            title="Nossos Serviços"
            paragraph="A Inteligência em Ação tem orgulho de apresentar nossos serviços, desenvolvidos para atender às necessidades específicas de cada cliente. Com o uso de tecnologias de ponta e algoritmos avançados, nossas soluções de IA são projetadas para melhorar a comunicação e a gestão de negócios. A seguir, detalhamos nossos principais serviços, que visam facilitar a vida dos profissionais e impulsionar o sucesso de seus empreendimentos. Conheça nossas ofertas e descubra como podemos contribuir para a evolução do seu negócio."
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
