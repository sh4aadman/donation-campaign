import PropTypes from 'prop-types'
import DonationCard from "../DonationCard/DonationCard";

const Donations = ({donationResult}) => {

    return (
        <div className="grid grid-cols-4 gap-6 my-20">
            {
                donationResult.map(donation => <DonationCard key={donation.id} donation={donation}></DonationCard>)
            }
        </div>
    );
};

Donations.propTypes = {
    donationResult: PropTypes.array
}

export default Donations;