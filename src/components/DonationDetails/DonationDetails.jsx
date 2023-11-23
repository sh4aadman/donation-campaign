import { useLoaderData, useParams } from "react-router-dom";
import { setDonationId } from "../../utility/localStorage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DonationDetails = () => {

    const donations = useLoaderData()
    const { id } = useParams()
    const idInt = parseInt(id)

    const donation = donations.find(donation => donation.id === idInt)

    const handleDonate = id => {
        setDonationId(id);
        toast('Thank you for your donation!')
    }

    // eslint-disable-next-line no-unused-vars
    const categoryColor = ['bg-[#FF5733]', 'bg-[#58D68D]', 'bg-[#3498DB]', 'bg-[#F39C12]']

    return (
        <div className="mt-8">
            <div className="relative h-[400px] w-full">
                <div className="absolute z-10 w-full h-[400px]">
                    <img className="w-full h-[400px] rounded-2xl" src={donation.donation_image} alt="" />
                </div>
                <div className="absolute z-20 bottom-0 w-full h-[100px] opacity-50">
                    <div className="w-full h-full bg-gradient-to-b from-black to-white">{/* overlay */}</div>
                </div>
                <div className="absolute z-30 bottom-5 left-5">
                    <button onClick={() => handleDonate(idInt)} className={`bg-[${donation.category_color}] py-4 px-7 text-white text-xl font-bold rounded`}>Donate {donation.donation_price}</button>
                </div>
            </div>
            <h2 className="text-4xl font-bold mt-14">{donation.donation_title}</h2>
            <p className="text-[#0b0b0bb3] mt-6 mb-32">{donation.donation_description}</p>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default DonationDetails;