import React from "react";
import Layout from "../Layout";
const LogoCarouselDemo = React.lazy(() =>
  import("./components/Logs").then((module) => ({
    default: module.LogoCarouselDemo,
  }))
);
const FeatureFourImages = React.lazy(() =>
  import("./components/Features").then((module) => ({
    default: module.FeatureFourImages,
  }))
);
import Footer from "./components/Footer";
const SparklesText = React.lazy(() => import("../components/ui/sparkles-text"));
const Head = React.lazy(() => import("@inertiajs/react").then((module) => ({ default: module.Head })));
const FlickeringGrid = React.lazy(() => import("../components/ui/flickering-grid").then((module) => ({ default: module.FlickeringGrid })));

interface HomeProps {
  info: {
    title: string;
  };
}

const Home = ({ info }: HomeProps) => {
  return (
    <>
      <Head>
        <title>{info.title}</title>
        <meta name="description" content="Rails 8 + Inertia" />
      </Head>
      <div className="relative h-[500px] rounded-lg w-full bg-background overflow-hidden border">
        <FlickeringGrid
          className="z-0 absolute inset-0 size-full"
          squareSize={4}
          gridGap={6}
          color="#6B7280"
          maxOpacity={0.5}
          flickerChance={0.1}
          height={800}
          width={1920}
        />
        <div className="flex justify-center mt-20">
          <SparklesText text="Ruby on Rails 8 + Intertia" />
        </div>

        <LogoCarouselDemo />
      </div>
      <div className="space-y-8 py-12">
        <div className="w-full max-w-screen-lg mx-auto flex flex-col items-center space-y-8">
          <FeatureFourImages />
        </div>
      </div>
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <Footer />
      </div>
    </>
  );
};

Home.layout = (page: React.ReactNode): React.ReactElement => (
  <Layout children={page} />
);

export default Home;
