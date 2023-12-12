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
        {/* <p className="mt-5">These popular destinations have a lot to offer</p> */}
        <p className="text-dark-1 mt-60 lg:mt-40 md:mt-20">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          <br />
          <br />
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
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
