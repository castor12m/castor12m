import { Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Playground from "./pages/Playground";
import Settings from "./pages/Settings";
import About from "./pages/About";

import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "./components/app-sidebar";
import Navbar from "./components/navbar";
import { Separator } from "@/components/ui/separator";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";

function App() {
  //  const defaultOpen = cookieStore.get('sidebar:state')?.value === 'true'
  return (
    <div className='flex h-screen'>
      <SidebarProvider defaultOpen={true}>
        <AppSidebar />
      </SidebarProvider>
        
      {/* Main Content Area */}
      <BrowserRouter>
        <div className='w-full'>
          <Navbar />
          <Separator className='my-0' />
          <div>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/playground' element={<Playground />} />
              <Route path='/settings' element={<Settings />} />
              <Route path='/about' element={<About />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>

      <Toaster />
    </div>
  );
}

export default App;
