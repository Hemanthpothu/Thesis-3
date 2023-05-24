import React from 'react'
import Footer from "../components/footer/Footer";
import Title from "../components/layouts/Title";
import Navbar from "../components/navbar/Navbar";
import he from "../assets/images/logo.png";
import img from "../assets/images/index.js";

import Nmrsub from "./Nmrsub.js";
function Nmr() {
  return (
    <div>
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
      <Navbar />
      <div className="flex justify-center items-center text-center mt-4">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="NMR Images"
        />
      </div>
    <Nmrsub icon1={img.i1} icon2={img.i2} icon3={img.i3}
      title1="Mangiferan_H NMR"
      title2="Andrographolide_Carbon NMR"
      title3="Didehydroandrographolide_Carbon NMR"
    />
    <br/>
    <Nmrsub icon1={img.i4} icon2={img.i5} icon3={img.i6}
      title1="Andrographolide_DEPT-135 NMR"
      title2="Didehydroandrographolide_DEPT=135 NMR"
      title3="Andrographolide_Proton NMR"
    />
    <br/>
    <Nmrsub icon1={img.i7} icon2={img.i8} icon3={img.i9}
      title1="Didehydroandrographolide_Proton NMR"
      title2="Neoandrographolide_Carbon NMR"
      title3="Neoandrographolide_DEPT-135 NMR"
    />
    <br/>
    <Nmrsub icon1={img.i10} icon2={img.i11} icon3={img.i12}
      title1="Neoandrographolide_Proton NMR"
      title2="BG-GS-04-13C_Palmitic Acid NMR"
      title3="BG-GS-04-1H_Palmitic Acid NMR"
    />
    <br/>
    <Nmrsub icon1={img.i13} icon2={img.i14} icon3={img.i15}
      title1="BG-GS-Col_Colchicine_13C NMR"
      title2="BG-GS-Col_Colchine_1H NMR"
      title3="Withaferin A_Carbon NMR"
    />
    <br/>
    <Nmrsub icon1={img.i16} icon2={img.i7} icon3={img.i5}
      title1="Withaferin A_DEPT 135"
      title2="Withaferin A_Proton NMR"
      title3="Didehydroandrographolide_DEPT-135 NMR"
    />
    </div>
    </div>
  )
}

export default Nmr