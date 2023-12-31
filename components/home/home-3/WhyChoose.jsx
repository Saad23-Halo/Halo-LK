import Image from "next/image";

const WhyChoose = () => {
  const blockContent = [
    {
      id: 1,
      icon: "/img/featureIcons/1/24-hours-support.gif",
<<<<<<< Updated upstream
      title: "Support from Start to Finish",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
=======
      title: "Customer Support",
      tagline: "24/7",
      text: `Always available for assistance, our customer support ensures timely help and satisfaction.`,
>>>>>>> Stashed changes
      delayAnimation: "100",
    },
    {
      id: 2,
      icon: "/img/featureIcons/2/pound-sterling.gif",
<<<<<<< Updated upstream
      title: "Unbeatable Prices",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
=======
      title: "Unbeatable",
      tagline: "Prices",
      text: `Providing unbeatable prices, our customer support ensures timely help and satisfaction.`,
>>>>>>> Stashed changes
      delayAnimation: "200",
    },
    { 
      id: 3,
      icon: "/img/featureIcons/3/space.gif",
<<<<<<< Updated upstream
      title: "Unlimited Quotes",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
=======
      title: "Pay in Instalments!",
      tagline: "No Credit Card Needed",
      text: `Facilitating payments in convenient instalments, our support ensures your financial ease and satisfaction.`,
>>>>>>> Stashed changes
      delayAnimation: "300",
    },
    {
      id : 4,
      icon: "/img/featureIcons/3/route.gif",
<<<<<<< Updated upstream
      title : "Flexible Bookings",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit`,
=======
      title : "Visa",
      tagline: "Assistance",
      text: `For seamless visa assistance, our customer support ensures efficient guidance and satisfaction.`,
>>>>>>> Stashed changes
      delayAnimation : "400", 
    }
  ];
  return (
    <>
      {blockContent.map((item) => (
        <div
          className="col-lg-3 col-sm-6"
          key={item.id}
          data-aos="fade"
          data-aos-delay={item.delayAnimation}
        >
          <div className="featureIcon -type-1 ">
            <div className="d-flex justify-center">
              <Image
                width={70}
                height={70}
                src={item.icon}
                alt="image"
                className="js-lazy"
              />
            </div>
            <div className="text-center mt-30">
              <h4 className="text-18 fw-500">{item.title}<br/>{item.tagline}</h4>
              <p className="text-15 mt-10">{item.text}</p>
            </div>
          </div>
          
        </div>
        
      ))}
    </>
  );
};

export default WhyChoose;
