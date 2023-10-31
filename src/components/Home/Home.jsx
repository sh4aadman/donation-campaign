import { useState } from "react";
import Donations from "../Donations/Donations";

const Home = () => {

    const [donationResult, setDonationResult] = useState([])
    const [search, setSearch] = useState('')
    const [clicked, setClicked] = useState(false)
    const [display, setDisplay] = useState([])

    useState( () => {
        fetch('/donations.json')
        .then(response => response.json())
        .then(data => setDonationResult(data))
    } , [])

    const handleInput = event => {
        setSearch(event.target.value)
    }

    const handleSearch = search => {
        setClicked(true)
        switch (search.toLowerCase()) {
            case 'food': {
                const result = donationResult.filter(donation => donation.category_name === 'Food');
                setDisplay(result);
                console.log(result)
                break;
            }
            case 'health': {
                const result = donationResult.filter(donation => donation.category_name === 'Health');
                setDisplay(result);
                break;
            }
            case 'education': {
                const result = donationResult.filter(donation => donation.category_name === 'Education');
                setDisplay(result);
                break;
            }
            case 'clothing': {
                const result = donationResult.filter(donation => donation.category_name === 'Clothing');
                setDisplay(result);
                break;
            }
            default:
                setDisplay(donationResult);
        }
    }

    return (
        <div>
            <div className="text-center h-[500px] w-full relative">
                <div className="absolute z-20 bg-gradient-to-b from-black to-white h-full w-full opacity-70 rounded-lg">
                    {/* Overlay */}
                </div>
                <div className="absolute z-10 w-full">
                    <img className="h-[500px] w-full rounded-lg" src="/src/assets/donation.jpg" alt="banner-image" />
                </div>
                <div className="absolute z-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <h2 className="font-bold text-5xl text-[#0B0B0B]">I Grow By Helping People In Need</h2>
                    <div className="input-group flex justify-center mt-10">
                        <input onChange={handleInput}
                            type="text" placeholder="Search here" className="input input-bordered" />
                        <button onClick={() => handleSearch(search)} className="btn btn-error text-[#FFF]">Search</button>
                    </div>
                </div>
            </div>
            <Donations clicked={clicked} donationResult={donationResult} display={display}></Donations>
        </div>
    );
};

export default Home;

