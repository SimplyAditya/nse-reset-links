import { useState } from "react";
import "./styles/app.css";
import axios from "axios";
import Navbar from "./components/Navbar";

function App() {
  const [niftyAllButtonActive, setNiftyAllButtonActive] = useState(true);
  const [nifty500ButtonActive, setNifty500ButtonActive] = useState(true);
  const [nifty50ButtonActive, setNifty50ButtonActive] = useState(true);
  const [niftyBankButtonActive, setNiftyBankButtonActive] = useState(true);
  const [securitiesButtonActive, setSecuritiesButtonActive] = useState(true);
  const [niftyTotalButtonActive, setNiftyTotalButtonActive] = useState(true);
  const url = import.meta.env.VITE_URL;
  const totalUrl = import.meta.env.VITE_NIFTY_TOTAL_URL;
  const buttons = [
    {
      text: "Reset Nifty All Data",
      endpoint: `${url}/resetniftyalldata`,
      button: niftyAllButtonActive
    },
    {
      text: "Reset Nifty 500 Data",
      endpoint: `${url}/resetnifty500data`,
      button: nifty500ButtonActive
    },
    {
      text: "Reset Securities F&O Data",
      endpoint: `${url}/resetSecuritiesdata`,
      button: securitiesButtonActive
    },
    {
      text: "Reset Nifty 50 Data",
      endpoint: `${url}/resetnifty50data`,
      button: nifty50ButtonActive
    },
    {
      text: "Reset Nifty Bank Data",
      endpoint: `${url}/resetniftyBankdata`,
      button: niftyBankButtonActive
    },
    {
      text: "Reset Nifty Total Data",
      endpoint: `${totalUrl}/resetniftytotaldata`,
      button: niftyTotalButtonActive
    },
  ];
   
  const resetHandler=async (endpoint)=>{
    setNiftyAllButtonActive(false);
    setNifty500ButtonActive(false);
    setNifty50ButtonActive(false);
    setNiftyBankButtonActive(false);
    setSecuritiesButtonActive(false);
    setNiftyTotalButtonActive(false);

    const confirmation = window.confirm("Are You Sure");
    if(confirmation){
      const response = await axios.get(`${endpoint}`);
      if(response.status === 200){
        window.alert("Data has been updated, If the data is incorrect please contact Developer")
      }else{
        window.alert("Data has not been updated, due to some technical issues. Please try again later")
      }
    }
    setNiftyAllButtonActive(true);
    setNifty500ButtonActive(true);
    setNifty50ButtonActive(true);
    setNiftyBankButtonActive(true);
    setSecuritiesButtonActive(true);
    setNiftyTotalButtonActive(true);
  }

  return (
    <>
      <div className="w-screen h-screen flex flex-col gap-0">
        <Navbar />
        <div className="w-full h-full flex flex-col gap-8 items-center justify-center">
          {buttons.map((singleButton) => {
            return <button key={singleButton.text} disabled={!singleButton.button} className="p-4 rounded-md bg-gray-900 text-white w-1/2 lg:w-3/12" onClick={()=> resetHandler(singleButton.endpoint)}>
              {singleButton.text}
            </button>;
          })}
        </div>
      </div>
    </>
  );
}

export default App;
