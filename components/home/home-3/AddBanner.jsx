import Image from "next/image";
import Link from "next/link";

const AddBanner = () => {
  const addContent = [
    {
      id: 1,
      img: "/img/backgrounds/1_H.png",
      title: (
        <>
          {" "}
          Things To Do On
          <br /> Your Trip
        </>
      ),
      meta: "",
      routerPath: "/",
      delayAnimation: "100",
    },
    {
      id: 2,
      img: "/img/backgrounds/2_H.png",
      title: (
        <>
          Let Your Curiosity
          <br />
          Do The Booking
        </>
      ),
      meta: "",
      routerPath: "/",
      delayAnimation: "200",
    },
    {
      id: 3,
      img: "/img/backgrounds/3_H.png",
      title: "Up to 70% Discount!",
      meta: "Enjoy Summer Deals",
      routerPath: "/",
      delayAnimation: "300",
    },
  ];

  return (
    <>
      {addContent.map((item) => (
        <div
          className="col-lg-4 col-sm-6"
          data-aos="fade"
          data-aos-delay={item.delayAnimation}
          key={item.id}
        >
          <div className="ctaCard -type-1 rounded-4 ">
            <div className="ctaCard__image ratio ratio-41:45">
              <Image
                width={410}
                height={455}
                className="js-lazy img-ratio"
                src={item.img}
                alt="image"
              />
            </div>
            <div className="ctaCard__content py-50 px-50 lg:py-30 lg:px-30">
              {item.meta ? (
                <>
                  <div className="text-15 fw-500 text-white mb-10">
                    Enjoy Summer Deals
                  </div>
                </>
              ) : (
                ""
              )}

              <h4 className="text-30 lg:text-24 text-white">{item.title}</h4>
              <div className="d-inline-block mt-30">
                <Link
                  href={item.routerPath}
                  className="button px-48 py-15 -blue-1 -min-180 bg-white text-dark-1"
                >
                  Experiences
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default AddBanner;
