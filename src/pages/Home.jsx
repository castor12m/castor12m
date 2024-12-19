import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";


export default function Home() {

  //const testKey = process.env.REACT_APP_TEST_KEY;
  
  const UpCount = async () => {
    console.log("UpCount!");
    toast("Event has been created.");
  };
  
  const Test02 = async () => {
    const testKey = import.meta.env.VITE_APP_TEST_KEY;
    toast(`Test02 [${testKey}]`);
  };
  
  const Test03 = async () => {
    const testKey = import.meta.env.VITE_APP_TEMP_KEY;
    toast(`Test02 [${testKey}]`);
  };

  return (
    <div>
      <h1 className='text-4xl font-bold'>Welcome to Home Page v1.0.1</h1>
      <div className="flex flex-col">
        <Button onClick={UpCount}>Test1</Button>
        <Button onClick={Test02}>Test2</Button>
        <Button onClick={Test03}>Test3</Button>
      </div>
    </div>
  );
}
