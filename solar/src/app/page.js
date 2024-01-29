// COMPONENTS
import SolarData from "@/components/SolarData";
import SolarTitle from "@/components/SolarTitle";
import WeekGraph from "@/components/WeekGraph";

// HELPER FUNCTIONS

export default async function Home() {
  return (<>
    {/* <div className='h-screen bg-gradient-to-b from-orange-500 to-yellow-300'>
      <div className='flex justify-between m-8'>
        <SolarTitle />
        <SolarData />
      </div>
    </div> */}
        <WeekGraph />
  </>
  )
}