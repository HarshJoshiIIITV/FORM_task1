export const make_indiaCode = (user) => {
    // it adds india countrycode to mobile number
    return {
        ...user,
        phone: '91' + user.phone
    }
}