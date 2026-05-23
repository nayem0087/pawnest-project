import Banner from "@/components/Banner";
import BestServices from "@/components/BestServices";
import Featured from "@/components/Featured";
import HappyPetsSection from "@/components/HappyPets";
import PetCareTips from "@/components/PetCareTips";
import PetStats from "@/components/PetStats";
import SuccessStories from "@/components/SuccessStories";
import WhyAdoptPets from "@/components/WhyAdoptPets";


export default function Home() {
  return (
    <div>
        <Banner/>
        <Featured/>
        <WhyAdoptPets/>
        <SuccessStories/>
        <PetCareTips/>
        <HappyPetsSection/>
        <PetStats/>
        <BestServices/>
    </div>
  );
}

