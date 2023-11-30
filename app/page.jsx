import Wrapper from "@/components/layout/Wrapper";
import MainHome from "../app/(homes)/home_3/page";

export const metadata = {
  title: "Halo Holidays || Here For You",
  description: "Halo Holidays - Travel & Tour ",
};

export default function Home() {
  return (
    <>
      <Wrapper>
        <MainHome />
      </Wrapper>
    </>
  );
}
