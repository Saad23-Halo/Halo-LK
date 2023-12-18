import Image from "next/image";

const HelpBlock = () => {
  const helpBlockContent = [
    {
      id: 1,
      icon: "/img/pages/help/icons/1.svg",
      title: "Booking your activity",
      text: `
      Ensuring a seamless and enjoyable experience.`,
    },
    {
      id: 2,
      icon: "/img/pages/help/icons/2.svg",
      title: "Payment & receipts",
      text: `Effortlessly manage your payments with our streamlined customer support.`,
    },
    {
      id: 3,
      icon: "/img/pages/help/icons/3.svg",
      title: "Booking changes & refunds",
      text: `Effortlessly handle booking changes and refunds. Ensuring a smooth process.`,
    },
    {
      id: 4,
      icon: "/img/pages/help/icons/4.svg",
      title: "Promo codes & credits",
      text: `Seamlessly managing promo codes and credits for a rewarding experience.`,
    },
    {
      id: 5,
      icon: "/img/pages/help/icons/5.svg",
      title: "On the participation day",
      text: `Ensuring a smooth and enjoyable experience, providing assistance as needed.`,
    },
    {
      id: 6,
      icon: "/img/pages/help/icons/6.svg",
      title: "Value Packs",
      text: `Explore our enticing Value Packs. Ensures a rewarding and cost-effective experience.`,
    },
  ];
  return (
    <>
      {helpBlockContent.map((item) => (
        <div className="col-lg-4 col-md-6" key={item.id}>
          <div className="bg-blue-1-05 rounded-4 px-50 py-40">
            <div className="size-70 bg-white rounded-full flex-center">
              <Image width={30} height={30} src={item.icon} alt="icon" />
            </div>
            <div className="mt-24">
              <div className="text-18 fw-500">{item.title}</div>
              <p className="mt-5">{item.text}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default HelpBlock;
