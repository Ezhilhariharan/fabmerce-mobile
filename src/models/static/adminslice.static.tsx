import { IMAGES } from "@assets/images/png";
import { Home } from "@assets/images/svg";
import { Profile1 } from "@assets/images/svg";
import { Bag } from "@assets/images/svg";
import { Brand } from "@assets/images/svg";
import { Heart } from "@assets/images/svg";
import { Location } from "@assets/images/svg";
import { Payment } from "@assets/images/svg";
import { Notification } from "@assets/images/svg";
import { Invite } from "@assets/images/svg";
import { Contact } from "@assets/images/svg";
import { FAQ } from "@assets/images/svg";
import { TermsAndCondition } from "@assets/images/svg";
import { Privacypolicy } from "@assets/images/svg";
import { NavKeys } from "@controllers/utils/NavKeys.utils";
import NavServiceUtils from "@controllers/utils/NavService.utils";
import { Linking } from "react-native";

export const bankAccountTypes = [
    { key: "SAVINGS", name: "SAVINGS" },
    { key: "CURRENT", name: "CURRENT" },
];

export const goToTermsLink = () => {
    Linking.openURL('https://fabmerce.in/terms-and-conditions').catch(err =>
        console.error('An error occurred', err),
    );
};

export const goToPrivacyLink = () => {
    Linking.openURL('https://fabmerce.in/privacy-policy').catch(err =>
        console.error('An error occurred', err),
    );
};

export const List = [
    {
        name: 'Personal Details',
        // iconType: 'FontAwesome',
        // icon: 'user-o',
        svgIcon: Profile1,
        onPress: () => { NavServiceUtils.navigate(NavKeys.HOME_STACK.OTPSCREEN) },
    },
    {
        name: 'My Orders',
        svgIcon: Bag,
        onPress: () => { NavServiceUtils.navigate(NavKeys.HOME_STACK.MY_ORDERS) }
    },
    {
        name: 'My Brands',
        svgIcon: Brand,
        onPress: () => { NavServiceUtils.navigate(NavKeys.HOME_STACK.OTPSCREEN) }
    },
    {
        name: 'My Wishlist',
        svgIcon: Heart,
        onPress: () => { NavServiceUtils.navigate(NavKeys.HOME_STACK.OTPSCREEN) }
    },
    {
        name: 'Address',
        svgIcon: Location,
        onPress: () => { NavServiceUtils.navigate(NavKeys.HOME_STACK.OTPSCREEN) }
    },
    {
        name: 'Payments',
        svgIcon: Payment,
        onPress: () => { NavServiceUtils.navigate(NavKeys.HOME_STACK.OTPSCREEN) }
    },
    {
        name: 'Notifications',
        svgIcon: Notification,
        onPress: () => { NavServiceUtils.navigate(NavKeys.HOME_STACK.OTPSCREEN) }
    },
    {
        name: 'Invite Friends',
        svgIcon: Invite,
        onPress: () => { NavServiceUtils.navigate(NavKeys.HOME_STACK.OTPSCREEN) }
    },
    {
        name: 'Contact Us',
        svgIcon: Contact,
        onPress: () => { NavServiceUtils.navigate(NavKeys.HOME_STACK.OTPSCREEN) }
    },
    {
        name: 'FAQ',
        svgIcon: FAQ,
        onPress: () => { NavServiceUtils.navigate(NavKeys.HOME_STACK.OTPSCREEN) }
    },
    {
        name: 'Terms & Conditions',
        svgIcon: TermsAndCondition,
        onPress: () => { NavServiceUtils.navigate(NavKeys.HOME_STACK.OTPSCREEN) }
    },
    {
        name: 'Privacy Policy',
        svgIcon: Privacypolicy,
        onPress: () => { NavServiceUtils.navigate(NavKeys.HOME_STACK.OTPSCREEN) }
    },
]

export const FrequentlyAsked = [
    {
        question: "1. What is Becuire ?",
        answer: "Becurie is a state-of-the-art innovative wearable device that helps you cope with issues related to Mental Well-being like work stress, anxiety, restlessness, lack of focus, irregular sleeping patterns, and a slew of other day to day problems associated with a restless brain."
    },
    {
        question: "2. Is it safe to use for Long Term usage?",
        answer: "Yes. It is safe and intended for long usage of tenure for you specific kind mental well being challenges. Becurie emits ultra-low frequency magnetic pulses and senses the change in your mental wellbeing state without harming any human cells/tissues."
    },
    {
        question: "3. How to operate  the Becurie Device ?",
        answer: "1. Download the App &amp; Register yourself as a new user\n2. Enable Bluetooth on both the devices- BeCurie &amp; Smartphone\n3. Select your Desired Program\n4. Set a Goal for yourself\n5. Hang the Device around your neck &amp; Begin your journey of Mental Well-being"
    },
    {
        question: "4. How do I register at Becurie?",
        answer: "The process of registering at Becurie is very simple.You need to install the Becurie App from google store and open the mobile app. Click on the registration button and enter the fields as per the sign-up form present . You are free to use social login like Facebook and Gmail without any registration or password"
    },
    {
        question: "5. I forgot my password?",
        answer: "You can recover the password by clicking on the Forgot Password link and providing your Email ID. The instructions for changing your password will be mailed to you. Request you to check your spam folder and will find the mail. However, we suggest you mark the mail as “Not spam” once you receive mail in your spam folder."
    },
    {
        question: "6. What Android Version does the App support now?",
        answer: "Your mobile must have a minimum of Android Version. 8 or higher"
    },
    {
        question: "7. How many hours do i need to charge for first time",
        answer: "You must charge the Becurie device for at least 8 Hours"
    },
    {
        question: "8. How to connect the wifi to Becurie Device ?",
        answer: "While connecting the Becurie device to app, whenever there is a requirement to download or access the internet , Becurie App shows a popup message to enter the Wifi user name and password manually. Once the Wifi details are provided, details will be stored in the device for future purpose"
    },
    {
        question: "9. How can i switch over to another Becurie device?",
        answer: "You can switch over to the other device by clicking on the setting option. There is an option to switch to a different becurie device."
    },
    {
        question: "10. My device is not able to connect with my mobile App ?.",
        answer: "Please switch on Device and also switch on your Mobile Bluetooth. Open Becurie App in your mobile device., once you logged in , app automatically detects the nearby device and clicks on the connect button. If problem is still persist, please contact support page"
    },
]

export const beautyAndCosmatics = [
    {
        "image": IMAGES.cos_1,
    },
    {
        "image": IMAGES.cos_2,
    },
    {
        "image": IMAGES.soap,
    },
    {
        "image": IMAGES.Face_cream,
    }
]

export const newChecklistForLifeStyle = [
    {
        "image1": IMAGES.combo_set,
        "image2": IMAGES.Nec,
        "image3": IMAGES.earings,
    },
    {
        "image1": IMAGES.shoe,
        "image2": IMAGES.formalshoe,
        "image3": IMAGES.casual_shoe,
    },
    {
        "image1": IMAGES.hand_bags,
        "image2": IMAGES.hand_bag1,
        "image3": IMAGES.hand_bag2,
    },
]

export const foodNutSpices = [
    {
        "image": IMAGES.chocolets
    },
    {
        "image": IMAGES.nuts
    }
]

export const assurance = [
    {
        name: 'Genuine Products',
        "image": IMAGES.appLogo
    },
    {
        name: 'Quality Check',
        "image": IMAGES.appLogo
    },
    {
        name: 'Secure Payments',
        "image": IMAGES.appLogo
    },
]

export const newTrends = [
    { key: '', image: IMAGES.accessories },
    { key: '', image: IMAGES.gadgets },
    { key: '', image: IMAGES.Skin_care }
]
