
import HomeHero from "@/components/pages/home/hero";
const isLoggedIn: boolean = false;

export default function Home() {
  return (
      <>
        {isLoggedIn ? (
            <h1>Logged in</h1>
        ) : (
            <HomeHero/>
        )}
      </>
  );
}
