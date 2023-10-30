import { useState } from "react";
import Donations from "../Donations/Donations";
import { useLoaderData } from "react-router-dom";

const Home = () => {

    const donations = useLoaderData()

    const [donationResult, setDonationResult] = useState([])
    const [search, setSearch] = useState('')

    const handleInput = event => {
        setSearch(event.target.value)
    }

    const handleSearch = search => {
        switch(search.toLowerCase()){
            case 'food': {
                const result = donations.filter(donation => donation.category_name === 'Food');
                setDonationResult(result);
                console.log(result)
                break;
            }
            case 'health': {
                const result = donations.filter(donation => donation.category_name === 'Health');
                setDonationResult(result);
                break;
            }
            case 'education': {
                const result = donations.filter(donation => donation.category_name === 'Education');
                setDonationResult(result);
                break;
            }
            case 'clothing': {
                const result = donations.filter(donation => donation.category_name === 'Clothing');
                setDonationResult(result);
                break;
            }
            default:
                setDonationResult(donations);
        }
    }

    return (
        <div>
            <div className="text-center bg-[url('/src/assets/v911-a-01-b.jpg')] bg-cover">
                <h2 className="font-bold text-5xl text-[#0B0B0B] pt-24 pb-10">I Grow By Helping People In Need</h2>
                <div className="form-control">
                    <div className="input-group flex justify-center pb-40">
                        <input onChange={handleInput} type="text" placeholder="Search here" className="input input-bordered" />
                        <button onClick={() => handleSearch(search)} className="btn btn-error text-[#FFF]">Search</button>
                    </div>
                </div>
            </div>
            <Donations donationResult={donationResult}></Donations>
        </div>
    );
};

export default Home;