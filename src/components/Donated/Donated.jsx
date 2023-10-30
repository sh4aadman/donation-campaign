import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const Donated = ({donationData}) => {

    const {id, category_name, donation_title, donation_price, donation_image} = donationData

    return (
        <div className="card card-side">
            <figure><img src={donation_image} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{category_name}</h2>
                <p>{donation_title}</p>
                <p>{donation_price}</p>
                <div className="card-actions justify-start">
                    <Link to={`/donations/${id}`}><button className="btn btn-primary">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

Donated.propTypes = {
    donationData: PropTypes.object
}

export default Donated;