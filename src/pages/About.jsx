import { NavLink } from "react-router-dom";

export default function About() {
  return (
    <div>
      <h1 className='text-4xl font-bold'> About Page</h1>
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
