import React,{ useState } from "react";
import Footer from "../components/footer/Footer";
import Title from "../components/layouts/Title";
import Navbar from "../components/navbar/Navbar";
import { GrantData } from "../constants";

function Grants() {
  const [name,setName] =useState("")
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
      <Navbar />
      <div className="flex justify-center items-center text-center mt-4">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="Grants and Consultancy"
        />
      </div>
      <h2 className="text-4xl font-bold ml-20">
        As Project Investigator/ Main Investigator
      </h2>
      
      <div className="max-w-screen-xl mx-auto">
                <div class="flex flex-col">
                    <div class="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
                        <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                            <div class="overflow-hidden">
                                <table class="min-w-full">
                                    <thead class="bg-white border-b">
                                        <tr>
                                            <th
                                                scope="col"
                                                class="text-sm font-medium text-gray-900 px-3 py-4 text-left"
                                            >
                                                Sponsorship
                                            </th>
                                            <th
                                                scope="col"
                                                class="text-sm font-medium text-gray-900 px-3 py-4 text-left"
                                            >
                                                Duration
                                            </th>
                                            <th
                                                scope="col"
                                                class="text-sm font-medium text-gray-900 px-3 py-4 text-left"
                                            >
                                            Grant Amount
                                            </th>
                                            <th
                                                scope="col"
                                                class="text-sm font-medium text-gray-900 px-3 py-4 text-left"
                                            >
                                            Started on
                                            </th>
                                            <th
                                                scope="col"
                                                class="text-sm font-medium text-gray-900 px-3 py-4 text-left"
                                            >
                                            Ended on
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {GrantData.map((items, index) =>
                                            index % 2 === 0 ? (
                                                <tr class="bg-gray-100 border-b">
                                                    {items.map((item, index) => (
                                                        <>                                               
<td data-modal-target="popup-modal" data-modal-toggle="popup-modal" class="px-3 py-4 whitespace-nowrap text-sm font-light text-gray-900" onClick={()=>{setName(items[1])}}>
  {item}
</td>

<div id="popup-modal" tabindex="-1" class="fixed top-0 left-0 right-0 z-50 hidden p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div class="relative w-full max-w-md max-h-full">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        {/* <img src={he}/> */}
            <button type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="popup-modal">
                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                <span class="sr-only">Close modal</span>
                
            </button>
            <div class="p-6 text-center">
            {/* <img src={he}/> */}
               <p>{name}</p>
            </div>
        </div>
    </div>
</div>
</>
                                                    ))}
                                                    
                                                </tr>
                                            ) : (
                                                <tr class="bg-gray-200 border-b">
                                                    {items.map((item, index) => (
                                                        <>                                               
<td data-modal-target="popup-modal" data-modal-toggle="popup-modal" class="px-3 py-4 whitespace-nowrap text-sm font-light text-gray-900" onClick={()=>{setName(items[1])}}>
  {item}
</td>

<div id="popup-modal" tabindex="-1" class="fixed top-0 left-0 right-0 z-50 hidden p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div class="relative w-full max-w-md max-h-full">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        {/* <img src={he}/> */}
            <button type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="popup-modal">
                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                <span class="sr-only">Close modal</span>
                
            </button>
            <div class="p-6 text-center">
            <img src={name}/>
            <p>{name}</p>
               
            </div>
        </div>
    </div>
</div>
</>
                                                    ))}
                                                    
                                                </tr>
                                            )
                                        )}
                                    </tbody>
                                </table>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>

      {/* <div className="max-w-screen-xl mx-auto">
        <p className="text-base font-bodyFont leading-6 tracking-wide mt-8">
          1. Seed Money IIT BHU 10 Lakh: Isolation and characterization of
          metabolites from plants and microbes to accelerate drug discovery
        </p>
        <p className="text-base font-bodyFont leading-6 tracking-wide mt-3">
          2. One Industrial consultancy project: Analysis of herbs and Species:
        </p>
        <p className="text-base font-bodyFont leading-6 tracking-wide mt-3">
          3. Exploring Anti-infective Potential of Panchagavya: Metabolomics and
          Proteomics Approaches By DST, for three years.
        </p>
        <p className="text-base font-bodyFont leading-6 tracking-wide mt-3">
          4. CRG/2022/001637 titled Targeting CDK9 by coumarin based inhibitors:
          Design, Preparation and Biological Evaluation by SERB- CRG
        </p>
      </div> */}



      <h2 className="text-4xl font-bold ml-20 mt-10">As Co-Investigator</h2>
      <div className="max-w-screen-xl mx-auto">
        <p className="text-base font-bodyFont leading-6 tracking-wide mt-8">
          1. Samvit Research Foundation: By Indian Knowledge System-AICTE -40
          lakh for two years from 2022-2024, Myself as COPI.
        </p>
        <p className="text-base font-bodyFont leading-6 tracking-wide mt-3">
          2. AMWATCH: Defining the AMR Burden of Antimicrobial Manufacturing
          Waste in Puducherry and Chennai 102.25 Lakhs 14th December 2020 As
          Team member in Multi-institute (Indo-UK) DBT Funded Myself as COPI.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Grants;
