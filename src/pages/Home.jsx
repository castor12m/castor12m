import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function Home() {
  const UpCount = async () => {
    console.log("dd");
    toast("Event has been created.");
  };

  return (
    <div>
      <h1 className='text-4xl font-bold'>Welcome to Home Page v1.0.1</h1>
      <div>
        <Button onClick={UpCount}>Test</Button>
      </div>
      <div>
        <NavLink to='/my-app/'>Home</NavLink>
        <NavLink to='/my-app/playground'>playground</NavLink>
        <NavLink to='/my-app/settings'>settings</NavLink>
        <NavLink to='/my-app/my-app/about'>about</NavLink>
        <NavLink to='/my-app/about'>about</NavLink>
        <NavLink to='/about'>about</NavLink>
      </div>
    </div>
  );
}
