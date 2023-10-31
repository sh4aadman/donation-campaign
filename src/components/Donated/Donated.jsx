import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const Donated = ({ donationData }) => {

    const { id, category_name, donation_title, donation_price, donation_image, card_background, category_color, category_background } = donationData

    return (
        <div className={`card card-side bg-[${card_background}]`}>
            <figure><img className='rounded-lg w-2/3 h-2/3' src={donation_image} alt="donation-card-image" /></figure>
            <div className="p-4 flex items-center">
                <div>
                    <h2 className={`inline py-1 px-2 text-[${category_color}] bg-[${category_background}] text-sm rounded`}>{category_name}</h2>
                    <p className='text-2xl font-semibold mt-2 mb-2'>{donation_title}</p>
                    <p className={`text-[${category_color}] font-semibold`}>{donation_price}</p>
                    <div className="card-actions justify-start mt-5">
                        <Link to={`/donations/${id}`}><button className={`bg-[${category_color}] text-lg font-semibold text-white py-2 px-4 rounded`}>View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

Donated.propTypes = {
    donationData: PropTypes.object
}

export default Donated;