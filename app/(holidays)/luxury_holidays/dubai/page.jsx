import dynamic from "next/dynamic";
import "photoswipe/dist/photoswipe.css";
import holidayData from "@/data/holidays";
import Header3 from "@/components/header/header-3";
import Overview from "@/components/holidays/dubai/Overview";
import TopBreadCrumb from "@/components/holidays/dubai/TopBreadCrumb";
import SidebarRight from "@/components/holidays/dubai/SidebarRight";
import SidebarRight2 from "@/components/holidays/dubai/SidebarRight2";
import ReviewProgress from "@/components/holidays/dubai/guest-reviews/ReviewProgress";
import DetailsReview from "@/components/holidays/dubai/guest-reviews/DetailsReview";
import ReplyForm from "@/components/holidays/dubai/ReplyForm";
import ReplyFormReview from "@/components/holidays/dubai/ReplyFormReview";
import Facilities from "@/components/holidays/dubai/Facilities";
import CallToActions from "@/components/common/CallToActions";
import DefaultFooter from "@/components/footer/default";
import MapPropertyFinder from "@/components/holidays/dubai/MapPropertyFinder";
import GalleryCruiseSlider from "@/components/holidays/dubai/GalleryCruiseSlider";

export const metadata = {
  title: "Dubai || Halo Holidays - Here For You",
  description: "Dubai || Halo Holidays",
};

const dubai = () => {
  const id = 3;
  const holiday = holidayData.find((item) => item.id == id);
  

  return (
    <>
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <Header3 />
      {/* End Header 1 */}

      <TopBreadCrumb />
      {/* End top breadcrumb */}

      <section className="pt-40">
        <div className="container">
          <div className="row justify-between items-end">
            <div className="col-auto">
              <h1 className="text-26 fw-600">{holiday?.title}</h1>
              <div className="d-flex x-gap-5 items-center pt-5">
                <i className="icon-location-2 text-16 text-light-1" />
                <button
                  data-x-click="mapFilter"
                  className="text-15 text-blue-1 underline">
                  <a href="#mapSection">Show on Map</a>
                </button>
              </div>
            </div>
            {/* End .col-auto */}

            <div className="col-auto">
              <div className="row x-gap-10 y-gap-10">
                <div className="col-auto">
                  <button className="button px-15 py-10 -blue-1">
                    <i className="icon-share mr-10" />
                    Share
                  </button>
                </div>
                {/* End .col-auto */}

                <div className="col-auto">
                  <button className="button px-15 py-10 -blue-1 bg-light-2">
                    <i className="icon-heart mr-10" />
                    Save
                  </button>
                </div>
                {/* End .col-auto */}
              </div>
              {/* End .row */}
            </div>
            {/* End .col-auto */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End top gallery header section */}

      <section className="pt-30">
        <div className="container">
          <div className="row y-gap-30">
            <div className="col-xl-8">
              <GalleryCruiseSlider />
              {/* End gallery grid wrapper */}

              <Overview />
              {/* End Overview */}
            </div>
            {/* End .col-xl-8 */}

            <div className="col-xl-4">
              <SidebarRight holiday={holiday} /><br />
              <SidebarRight2 />
              
            </div>
            
            {/* End .col-xl-4 */}
          </div>
          {/* End .row */}
        </div>
        {/* End container */}
      </section>
      {/* End single page content */}

      <section className="mt-40">
        <div className="container border-top-light pt-40">
          <div className="row x-gap-40 y-gap-40">
            <div className="col-12">
              <h3 className="text-22 fw-500">Facilities of this Holiday</h3>
              <div className="row x-gap-40 y-gap-40 pt-20">
                <Facilities />
              </div>
              {/* End .row */}
            </div>
            {/* End .col-12 */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End facilities */}

      <section id="mapSection" className="pt-40">
        <div className="container">
          <h3 className="text-22 fw-500 mb-20">Holiday Location</h3>
          <div className=" rounded-4 overflow-hidden map-500">
            <MapPropertyFinder />
          </div>
        </div>
      </section>
      {/* End MapPropertyFinder */}

      <section className="pt-40">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="text-22 fw-500">Guest reviews</h3>
            </div>
          </div>
          {/* End .row */}

          <ReviewProgress holiday={holiday} />
          {/* End review with progress */}

          <div className="pt-40">
            <DetailsReview />
            {/* End review with details */}
          </div>

          <div className="row pt-30 pb-30">
            <div className="col-auto">
              <a href="#" className="button -md -outline-blue-1 text-blue-1">
                Show all reviews{" "}
                <div className="icon-arrow-top-right ml-15"></div>
              </a>
            </div>
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
        {/* End container */}
      </section>
      {/* End Review section */}

      
      {/* End facilites section */}

      <CallToActions />
      {/* End Call To Actions Section */}

      <DefaultFooter />
    </>
  );
};

export default dynamic(() => Promise.resolve(dubai), {
  ssr: false,
});
