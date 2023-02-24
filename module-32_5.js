// 1. 
let data = {
    Sophia: {
        id: 33,
        study: [
            {
                primary:
                    [
                        { school_name: "ABC primary school" },
                        { location: "Peters burg" }
                    ]
            },
            {
                secondary:
                    [
                        {
                            school_name: "ABC secondary school"
                        },
                        { location: "St Lorence" }
                    ]
            },
        ]
    }
}

const schoolLocation = data.Sophia.study[1].secondary[1].location;
console.log(schoolLocation);

// 2.
let data2 =
    [
        {
            "pHeroCourses": {
                "course-x": "web development"
            }
        },
        {
            "pHeroCourses": {
                "course-y": "phitron"
            }
        },
        {
            "pHeroCourses": {
                "course-z": "acc"
            }
        },
        {
            "pHeroCourses": {
                "course-xyz": "level-2"
            },
            "locationField": {
                "en-US": {
                    "lat": 19.28563,
                    "lon": 72.8691
                }
            }
        }
    ]

const a = data2[3].pHeroCourses["course-xyz"];
console.log(a);
const b = data2[3].locationField["en-US"].lon;
console.log(b);

// 3.
let activities = {
    activity1: [
        {
            name: "listen on spotify",
            song_list: {
                song_1: "abc",
                song_2: "bcd"
            },
            id: 1
        },
        {
            name: "listen music through bot",
            song_list: {
                song_1: "wxy",
                song_2: "xyz"
            },
            id: 2
        }
    ]
};

const a3 = activities.activity1[0].song_list.song_1;
console.log(a3);
const b3 = activities.activity1[1].song_list.song_2;
console.log(b3);


// 4.
let students = {
    2222: {
        name: "Jack",
        section: "C",
        class: "IX",
        address: {
            "building no": 12,
            "street": "St. Jonson",
            "city": "Petersburg",
            "country": "UK"
        }
    },
    3333: {
        name: "Herry",
        section: "D",
        class: "X",
        address: {
            "building no": 85,
            "street": "DC road",
            "city": "Kachukhet",
            "country": "Bangladesh"
        }
    }
};
const a4 = students[2222].address.city;
console.log(a4);
const b4 = students[3333].name;
console.log(b4);


// 5.
let instructor = {
    name: "Jhankar Mahbub",
    entrepreneur: true,
    additionalData: {
        writer: true,
        favoriteHobbies: ["travelling", "Coding"],
        books: ["programming er bolod to bos", "programming er coddogosti"],
    moreDetails: {
                favoriteBasketballTeam: "XYZ",
                isYoungest: true,
                hometown: {
                    city: "ABC",
                    state: "VW",
                },
                countriesLivedIn: ["Bangladesh", "New York"]
            }
    }
};
const a5 = instructor.additionalData.books[1];
console.log(a5);
const b5 = instructor.additionalData.moreDetails.hometown.state;
console.log(b5);
const c5 = instructor.additionalData.moreDetails.countriesLivedIn[0];


// 6.
const studentData = [
    {
        class: 10,
        details: [
            {
                studentId: '1',
                gradingDetails: [{ grade: 'A' }]
            },
            {
                studentId: '2',
                gradingDetails: [{ grade: 'B' }]
            }
        ]
    },
    {
        class: 11,
        details: [
            {
                studentId: 3,
                gradingDetails: [{ grade: 'B' }]
            },
            {
                studentId: 4,
                gradingDetails: [{ grade: 'D' }]
            }
        ]
    },
];
const a6 = studentData[0].details[1].gradingDetails[0].grade;
console.log(a6);
const b6 = studentData[1].details[1].gradingDetails[0].grade;
console.log(b6);


// 7.
let data3 = {
    data:
        [
            {
                bookId: 1,
                bookDetails: {
                    name: "habluder adda",
                    category: "XYZ",
                    price: "20$",
                },
                bookCategory: "Basic",
            },
            {
                bookId: 2,
                bookDetails: {
                    name: "gobluder adda",
                    category: "ABC",
                    price: "40$",
                },
                bookCategory: "Beginner",
            }
        ]
};
const a7 = data3.data[0].bookDetails.name;
console.log(a7);
const b7 = data3.data[1].bookCategory;
console.log(b7);