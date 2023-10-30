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

    return (
        <div className="mt-8">
            <div className="relative">
                <img className="relative w-full h-[600px] rounded-lg border" src={donation.donation_image} alt="" />
                <div className="">
                    <div className="relative">
                        <div className="relative h-32 bg-black opacity-25">{/* overlay */}</div>
                        <button onClick={() => handleDonate(idInt)} className="absolute bottom-8 left-8 btn-error py-4 px-7 text-white text-xl font-bold rounded">Donate {donation.donation_price}</button>
                    </div>
                </div>
            </div>
            <h2 className="text-4xl font-bold mt-14">{donation.donation_title}</h2>
            <p className="text-[#0b0b0bb3] mt-6 mb-32">{donation.donation_description}</p>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default DonationDetails;