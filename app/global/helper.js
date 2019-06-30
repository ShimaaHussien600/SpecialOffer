import { adsImage } from "../assets/image/staticImages";



export function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export function DisplayError(error) {
    Object.keys(error).forEach(function (prop) {

        alert(error[prop])

        // `prop` is the property name
        // `error[prop]` is the property value
    });

}
export function validatePhoneNum (phone) {
    let phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
    if((phone.value.match(phoneno)))
        return true 
    else 
        return false      
}

export const adsImagesArr = [{ id: 1, image: adsImage }]