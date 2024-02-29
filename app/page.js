import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HomeProperties from "@/components/HomeProperties";
import InfoBoxes from "@/components/InfoBoxes";

import connectDB from "@/config/database";

const HomePage = async () => {
  // console.log(process.env.MONGODB_URI);
  await connectDB();

  return (
    <>
      <Hero />
      <InfoBoxes />
      <HomeProperties />
      <Footer />
    </>
  );
};

export default HomePage;
