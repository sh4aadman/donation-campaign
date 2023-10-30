import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const DonationCard = ({ donation }) => {

    const { id, donation_image, category_name, donation_title, category_color, category_background, title_color, card_background } = donation;

    return (
        <Link to={`/donations/${id}`}><div className={`card bg-${card_background}`}>
            <figure><img src={donation_image} alt="" /></figure>
            <div className="p-4 bg-[{card_background}]">
                <h2 className={`text-${category_color} bg-${category_background} text-sm border inline py-1 px-2 rounded`}>{category_name}</h2>
                <p className={`text-[${title_color}] text-xl font-semibold mt-2`}>{donation_title}</p>
            </div>
        </div></Link>
    );
};

DonationCard.propTypes = {
    donation: PropTypes.object
}

export default DonationCard;