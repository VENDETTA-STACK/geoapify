const mongoose = require('mongoose');

const countryStateCitySchema = mongoose.Schema({
    capital: {
        type: String
    },
    currency: {
        type: Number
    },
    currency_name: {
        type: String
    },
    currency_symbol: {
        type: String
    },
    emoji: {
        type: String
    },
    emojiU: {
        type: String
    },
    id: {
        type: Number
    },
    emojiU: {
        type: String
    },
    iso2: {
        type: String
    },
    iso3: {
        type: String
    },
    latitude: {
        type: String
    },
    longitude: {
        type: String
    },
    name: {
        type: String
    },
    nationality: {
        type: String
    },
    native: {
        type: String
    },
    numeric_code: {
        type: String
    },
    phone_code: {
        type: String
    },
    region: {
        type: String
    },
    region_id: {
        type: String
    },
    states: [{
        cities: [{
            id: {
                type: String
            },
            name: {
                type: String
            },
            latitude: {
                type: String
            },
            longitude: {
                type: String
            },
        }],
        id: {
            type: String
        },
        latitude: {
            type: String
        },
        longitude: {
            type: String
        },
        name: {
            type: String
        },
        state_code: {
            type: String
        },
        type: {
            type: String
        },
    }],
    subregion: {
        type: String
    },
    subregion_id: {
        type: String
    },
    tld: {
        type: String
    },
    timezones: [{
        zoneName: {
            type: String
        },
        gmtOffset: {
            type: Number
        },
        gmtOffsetName: {
            type: String
        },
        abbreviation: {
            type: String
        },
        tzName: {
            type: String
        },
    }],
    translations: [{
        kr: {
            type: String,
        },
        ptBR: {
            type: String,
        },
        pt: {
            type: String,
        },
        nl: {
            type: String,
        },
        hr: {
            type: String,
        },
        fa: {
            type: String,
        },
        de: {
            type: String,
        },
        es: {
            type: String,
        },
        fr: {
            type: String,
        },
        ja: {
            type: String,
        },
        it: {
            type: String,
        },
        cn: {
            type: String,
        },
        tr: {
            type: String,
        },
    }],
},
{
    timestamps: true
});

module.exports = mongoose.model('country-state-city',countryStateCitySchema);