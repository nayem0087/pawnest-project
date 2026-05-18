import Banner from "@/components/Banner";
import HappyPetsSection from "@/components/HappyPets";
import PetCareTips from "@/components/PetCareTips";
import SuccessStories from "@/components/SuccessStories";
import WhyAdoptPets from "@/components/WhyAdoptPets";


export default function Home() {
  return (
    <div>
        <Banner/>
        <WhyAdoptPets/>
        <SuccessStories/>
        <PetCareTips/>
        <HappyPetsSection/>
    </div>
  );
}

