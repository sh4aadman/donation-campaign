import PropTypes from 'prop-types'
import DonationCard from "../DonationCard/DonationCard";

const Donations = ({ clicked, donationResult, display }) => {

    if (clicked) {
        return (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-20">
                {
                    display.map(donation => <DonationCard key={donation.id} donation={donation}></DonationCard>)
                }
            </div>
        )
    } else {
        return (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-20">
                {
                    donationResult.map(donation => <DonationCard key={donation.id} donation={donation}></DonationCard>)
                }
            </div>
        );
    }
};

Donations.propTypes = {
    clicked: PropTypes.bool,
    donationResult: PropTypes.array,
    display: PropTypes.array
}

export default Donations;