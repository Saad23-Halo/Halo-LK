const ContactInfo = () => {
  const contactContent = [
    {
      id: 1,
      title: "Toll Free Customer Care",
      action: "tel:+(94) 70 454 5455",
      text: "+(94) 70 454 5455",
    },
    {
      id: 2,
      title: "Need live support?",
      action: "mailto:contact@haloholidays.lk",
      text: "contact@haloholidays.lk",
    },
  ];
  return (
    <>
      {contactContent.map((item) => (
        <div className="mt-30" key={item.id}>
          <div className={"text-14 mt-30"}>{item.title}</div>
          <a href={item.action} className="text-18 fw-500 text-blue-1 mt-5">
            {item.text}
          </a>
        </div>
      ))}
    </>
  );
};

export default ContactInfo;