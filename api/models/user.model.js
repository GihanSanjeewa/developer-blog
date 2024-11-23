import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },

    email:{
        type:String,
        required:true,
        unique:true,
    },

    password:{
        type:String,
        required:true,
    },
    profilePicture:{
        type:String,
        default: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJUAAACUCAMAAACtIJvYAAAAMFBMVEXk5ueutLeor7Lf4ePn6eqrsbWyuLvKztC3vL/q7O3Z3N2/xMbS1dfEyMu7wMPV2NrKxAJiAAADcklEQVR4nO2bzXqsIAxAEQIiP/r+b3tRp722HQeSMXEWnE3b3flCCEhSpTqdTqfT6XQ6nU6n0+l0OjUAlFkpv8DdLg9ALePs3Yr3cTQfIAYmxUHb4Rurh7yoW8VAZWcPSg+xwaX7vMDkv0o7unjdJLW4E6ctYM7cEq6sz502r1Fey/gXgXpoRWmp4GpOq5aXlTINTqvWLCrVEqk9WoK51eg0SOYWxGqiH7SEdiKMCKlSUIOIlUFJDYPMRpxxUjJruCBDVbT4pSasU7HK3MGCpXL6PcMZZit0Vm3B4s6sQJAqTKxSyFr1hV5YrabWA/An3PlOyPUV1koKibSAzLsQMk1qsKyJRakLmxVnbTCeajUz1obmO+gf/EdaWUarQNyCpY52q3Yrxj34obGiSrFmO30Puo+04qyiilzbOa8yEIlWmvPpj3gVLbB+QBvqrY/1K2ciWs2sN2TIpCW0iffejv+eX+E8bzYotcFGZivaLmR/wgKCFf+bLSFYIq992LPQRt5Xhg1I2Jol8jA61XslRzRzrfoCdZ8R6wNAQKyhk3FSqH2o2R8fj1qt0QqSPcLGaNlFtnHZVB+caKQ2rZdd5y1QvFe9Ey31svVl9SjvtHmdh8taL75631pqdM/Sy2qf7pxLAZX8r+kPa12UaQm+8gKTstNa20L54XP6hPmdNWCgzJIKwWx/fgIAMB24OVCwzYKFZRzj7PdrhPNzzGMK4ab5MJhUWG3KfrM/sn3LrsHNcVzMJHAJ/W+kTMj+l83fimX1MCcjlGaTGucno2AnBX7w2UzsDV6TnMZ95BSzMTBGDKYl1o7k52JlKZmSv5Txp8dLo5jNDLNrAM+PPISXyxevY4nTQH5q54oXLLhPwHMvd1mfEMz83tr99LrmKg+JtO/OyRc4qXhdoHbs2x8ZEC4O1M572UWeFKig35n2oz/613hjkhQ1VYjVoo4pc0qRtXiliFrELgRKCy/FlugHLWzKk8b38FrIXmbjTPbbWqiXXJj512/XQjwmSSTVwwrROBRav43mhjR/UTjQXB6ozWUSrVNsk1Sq7zQGiz4MQ8K2vZ+KbcAHbRWePAtDRLd8X4icNUdaeuXkURg6LfkuvYCF+uBt0z9wXUu9ZEESlyoXmmpaSdeFlXoTWPIM/KKe7l7fQNXK3EHVqtPpdDqdzs38A5h8KnfC0tOrAAAAAElFTkSuQmCC",
    },
},{timestamps: true}
);


const User = mongoose.model('User', userSchema);

export default User;