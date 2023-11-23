const setDonationId = id => {
    const donationArray = getDonation();
    const exists = donationArray.find(donation => donation === id)
    if (!exists) {
        donationArray.push(id);
        localStorage.setItem('donations', JSON.stringify(donationArray))
    }
}

const getDonation = () => {
    const donation = localStorage.getItem('donations');
    if (donation) {
        return JSON.parse(donation);
    }
    return [];
}

export { getDonation, setDonationId }