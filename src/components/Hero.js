import Carousel from "react-bootstrap/Carousel";

function Hero() {
  const heroData = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1607681034540-2c46cc71896d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "From Beans to Brew",
      description:
        "Discover the journey of coffee beans from lush plantations to your favorite cup",
      link: "",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1541658016709-82535e94bc69?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Sip and Savor",
      description:
        "Indulge in a world of delightful coffee drinks, each a unique blend of flavor and comfort.",
      link: "",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1683343886262-d059ad84a2f3?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "The Perfect Harmony",
      description:
        "Where the rich aroma of freshly brewed coffee meets the allure of hand-picked beans, magic happens.",
      link: "",
    },
  ];

  return <section className="Hero-details">
    <section className='Hero-details'>
      <Carousel>
        {heroData.map(hero => (
          <Carousel.Item key={hero.id}>
            <img src={hero.image} alt={'Slide' + hero.id} text="First slide" />
            <Carousel.Caption>
              <h1>{hero.title}</h1>
              <p>{hero.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  </section>;
}

export default Hero;
