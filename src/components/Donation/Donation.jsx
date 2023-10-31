import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getDonation } from "../../utility/localStorage";
import Donated from "../Donated/Donated";

const Donation = () => {

    const donation = useLoaderData()

    const [displayDonationData, setDisplayDonationData] = useState([])
    const [display, setDisplay] = useState([])
    const [dataLimit, setDataLimit] = useState(4)

    
    useEffect(() => {
        const storedDonation = getDonation();
        
        if (donation.length > 0) {

            const displayDonation = [];
            
            for (const id of storedDonation) {
                const donationDetails = donation.find(element => element.id === id)
                displayDonation.push(donationDetails)
            }

            setDisplay(displayDonation)
            setDisplayDonationData(displayDonation)
        }
    }, [donation])

    const handleShowAll = () => {
        setDataLimit(display.length)
    }

    return (
        <div>
            <div className="grid grid-cols-2 gap-6 my-10">
                {
                    displayDonationData.slice(0, dataLimit).map(donationData => <Donated key={donationData.id} donationData={donationData}></Donated>)
                }
            </div>
            <div className={dataLimit === display.length ? "hidden" : "text-center my-11"}>
                <button onClick={handleShowAll} className="font-semibold text-white px-7 py-4 bg-[#009444] rounded-lg">See All</button>
            </div>
        </div>
    );
};

export default Donation;