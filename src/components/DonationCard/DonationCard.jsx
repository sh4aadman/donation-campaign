import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const DonationCard = ({ donation }) => {

    const { id, donation_image, category_name, donation_title, category_color, category_background, card_background } = donation;

    // eslint-disable-next-line no-unused-vars
    const cardBackground = ['bg-[#F9EBEA]', 'bg-[#E8F8F5]' , 'bg-[#EBF5FB]', 'bg-[#FDEBD0]']

    // eslint-disable-next-line no-unused-vars
    const categoryColor = ['text-[#FF5733]', 'text-[#58D68D]', 'text-[#3498DB]', 'text-[#F39C12]']

    // eslint-disable-next-line no-unused-vars
    const categoryBackground = ['bg-[#FFDDEE]', 'bg-[#CCFFDD]', 'bg-[#BBEEFF]', 'bg-[#FFCCAA]']

    return (
        <Link to={`/donations/${id}`}>
            <div className={`card bg-[${card_background}]`}>
                <figure><img src={donation_image} alt="donation-image" /></figure>
                <div className="p-4 min-h-[120px]">
                    <h2 className={`text-[${category_color}] bg-[${category_background}] text-sm inline py-1 px-2 rounded`}>{category_name}</h2>
                    <p className={`text-[${category_color}] text-xl font-semibold mt-2`}>{donation_title}</p>
                </div>
            </div>
        </Link>
    );
};

DonationCard.propTypes = {
    donation: PropTypes.object
}

export default DonationCard;