import Image from "next/image";

const Block1 = () => {
  return (
    <>
<<<<<<< Updated upstream
      <div className="col-lg-5">
        <h2 className="text-30 fw-600">About GoTrip.com</h2>
        <p className="mt-5">These popular destinations have a lot to offer</p>
        <p className="text-dark-1 mt-60 lg:mt-40 md:mt-20">
          London is a shining example of a metropolis at the highest peak of
          modernity and boasts an economy and cultural diversity that’s the envy
          of other global superpowers.
          <br />
          <br />
          Take the opportunity to acquaint yourself with its fascinating history
          chronicled by institutions like the British Museum as well as see how
          far it has come by simply riding the Tube and passing by celebrated
          landmarks like Buckingham Palace, Westminster Abbey, and marvels like
          Big Ben, the London Eye, and the Tower Bridge.
=======
      <div className="col-lg-4 d-none d-sm-block">
        <Image
          width={100}
          height={100}
          src="/img/general/LK_Holidays.svg"
          alt="image"
          className="rounded-4 w-100"
        />
      </div>
      {/* End .col */}

      
      <div className="col-lg-7">
        <h2 className="text-30 fw-600">About Halo Holidays</h2>
        {/* <p className="mt-5">These popular destinations have a lot to offer</p> */}
        <p className="text-dark-1 mt-60 lg:mt-40 md:mt-20">
        HALO HOLIDAYS is a premier online travel agency dedicated to providing a seamless and stress-free experience for booking your flights from Sri Lanka. We take pride in offering unparalleled service, ensuring that your travel needs are met with efficiency and precision. Whether you're traveling for business or leisure, planning a short getaway or an extended vacation, HALO HOLIDAYS is here to cater to all your travel requirements.
          <br />
          <br />
          Our commitment to excellence is reflected in our vast selection of flights, designed to offer you the best options at affordable prices. With HALO HOLIDAYS, you can trust that your journey will be comfortable, and our attentive service will provide you with the peace of mind you deserve. Discover the beauty of hassle-free travel with HALO HOLIDAYS, where your satisfaction is our top priority.
>>>>>>> Stashed changes
        </p>
      </div>
      {/* End .col */}

      <div className="col-lg-6">
        <Image
          width={400}
          height={400}
          src="/img/pages/about/2.png"
          alt="image"
          className="rounded-4 w-100"
        />
      </div>
      {/* End .col */}
    </>
  );
};

export default Block1;
