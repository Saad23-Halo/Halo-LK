import Image from "next/image";

const Block1 = () => {
  return (
    <>
      <div className="col-lg-4 d-none d-sm-block">
        <Image
          width={100}
          height={100}
          src="/img/general/LK.svg"
          alt="image"
          className="rounded-4 w-100"
        />
      </div>
      {/* End .col */}

      
      <div className="col-lg-7">
        <h2 className="text-30 fw-600">About Halo Flights</h2>
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
        </p>
      </div>
      {/* End .col */}

      {/* <div className="col-lg-4">
        <Image
          width={100}
          height={100}
          src="/img/general/LK.svg"
          alt="image"
          className="rounded-4 w-100"
        />
      </div>
      End .col */}
    </>
  );
};

export default Block1;
