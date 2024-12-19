import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Playground from "./pages/Playground";
import Settings from "./pages/Settings";
import About from "./pages/About";

import { SidebarProvider } from "./components/ui/sidebar";
import AppSidebar from "./components/app-sidebar";
import Navbar from "./components/navbar";
import { Separator } from "./components/ui/separator";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "./components/ui/sonner";
import RootProvider from "./providers/root";
import GithubCorner from "./components/github-corner";
import Footer from "./components/footer";

function App() {
  //  const defaultOpen = cookieStore.get('sidebar:state')?.value === 'true'
  return (
    <BrowserRouter basename='/my-app'>
      <RootProvider>
        <SidebarProvider defaultOpen={true}>
          <AppSidebar />

          <div className='flex h-full w-full flex-col'>
            <Navbar />
            <main className='flex h-full flex-col items-center justify-center'>
              <GithubCorner title='Get started on GitHub' url='https://github.com/castor12m' />
              <Routes>
                <Route exact path='*' element={<Home />} />
                <Route exact path='/home' element={<Home />} />
                <Route path='/playground' element={<Playground />} />
                <Route path='/settings' element={<Settings />} />
                <Route path='/about' element={<About />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </SidebarProvider>
      </RootProvider>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
