import Banner from "@/components/Banner";
import HappyPetsSection from "@/components/HappyPets";
import PetCareTips from "@/components/PetCareTips";
import PetStats from "@/components/PetStats";
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
        <PetStats/>
    </div>
  );
}

