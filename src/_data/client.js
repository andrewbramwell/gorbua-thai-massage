module.exports = {
    "name": "Gorbua Thai Massage",
    "email": "gorbuathaimassage@gmail.com",
    "phoneForTel": "+447771650782",
    "phoneFormatted": "07771 650782",
    "openingHours": "Thu-Tues: 11am-7pm, closed Wednesday",
    "onlineBooking": "https://gorbua.setmore.com/",
    "address": {
        "lineOne": "Grainger Suite",
        "lineTwo": "Dobson House",
        "lineThree": "Regent Centre",
        "lineFour": "Gosforth",
        "city": "Newcastle",
        "state": "",
        "zip": "NE3 3PF",
        "country": "England",
        "mapLink": "https://maps.app.goo.gl/TFu6xeNTBqJDGeN98"
    },
    "socials": {
        "facebook": "",
        "instagram": "",
        "googleReview": "",
    },
    //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
    "domain": "https://www.gorbuathaimassage.co.uk",
    "schema": {
        "business": {
            "@context": "https://schema.org",
            "@type": "HealthAndBeautyBusiness",
            "@id": "https://www.gorbuathaimassage.co.uk/#business",
            "name": "Gorbua Thai Massage",
            "image": "https://www.gorbuathaimassage.co.uk/assets/svgs/logo.svg",
            "url": "https://www.gorbuathaimassage.co.uk",
            "telephone": "+447771650782",
            "email": "gorbuathaimassage@gmail.com",
            "priceRange": "££",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Grainger Suite, Dobson House, Regent Centre, Gosforth",
                "addressLocality": "Newcastle",
                "postalCode": "NE3 3PF",
                "addressCountry": "GB"
            },
            "geo": {
                "@type": "GeoCoordinates",
                "url": "https://maps.app.goo.gl/TFu6xeNTBqJDGeN98"
            },
            "openingHoursSpecification": [
                {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Thursday", "Friday", "Saturday", "Sunday", "Monday", "Tuesday"],
                    "opens": "11:00",
                    "closes": "19:00"
                }
            ]
        },
        "website": {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": "https://www.gorbuathaimassage.co.uk/#website",
            "url": "https://www.gorbuathaimassage.co.uk",
            "name": "Gorbua Thai Massage",
            "publisher": {
                "@id": "https://www.gorbuathaimassage.co.uk/#business"
            }
        }
    }
};