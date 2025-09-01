import Hero from "../components/ui/Landingpage/Hero";
import About from "../components/ui/Aboutpage/About";
import Classpage from "../components/ui/Ourclasses/Classpage"
import Blogpage from "../components/ui/Schoolblog/Blogpage";
import Eventpage from "../components/ui/Schoolevents/Eventpage";
import Contactus from "../components/ui/Contactus/Contactus";




export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Classpage />
      <Blogpage />
      <Eventpage />
      <Contactus />
    </>
  );
}
