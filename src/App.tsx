
import { Fragment, Suspense } from "react";
import Nav from "./components/Nav";
import BannerContent from "./components/BannerContent";
import Introduce from "./components/Introduce";
import Tech from "./components/Tech";
import Contact from "./components/Contact";
import { lazy } from "react";
import Loader from "./components/Loader";
const Bannae3d = lazy(() => import('./components/Bannae3d'));



function App() {
  return (
    <Fragment>
      <div className="w-screen scrollbar-hide">
        <Nav />
        <div className="w-screen relative">
          <BannerContent />
          <div className="w-full h-[500px] ">
            <Suspense fallback={<Loader />}>
              <Bannae3d />
            </Suspense>
          </div>
          <Introduce />
          <Tech />
          <div className="w-full flex justify-around items-center py-4">
            <div className="">
              <h2 className="pop text-4xl pop font-bold text-slate-100">Contect Me</h2>
            </div>
          </div>
          <Contact />
        </div>
      </div>
    </Fragment>
  )
}

export default App