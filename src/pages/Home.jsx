import { Button } from "../components/ui/button";
import { toast } from "sonner";

export default function Home() {
  const UpCount = async () => {
    console.log("dd");
    toast("Event has been created.");
  };

  return (
    <div className='flex-1 p-2 sm:p-6'>
      <h1 className='text-4xl font-bold'>Welcome to Home Page</h1>
      <div>
        <Button onClick={UpCount}>Test</Button>
      </div>
    </div>
  );
}
