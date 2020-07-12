const config = [
  {
    name: 'general',
    data: {
      name: 'Special Maths Academy',
      descName: 'Next generation of Olympians',
      shortDescription: 'Special Maths Academy Limited was founded in 2019 with the aim of training intelligent young minds to be competitive at the level of the world’s toughest maths contest (IMO). At SMAL, we are passionate about developing the next generation of mathematicians that will solve world’s most challenging problems.',
      socialLinks: {facebook: "https://facebook.com/SpecialMaths", twitter: "https://twitter.com/SpecialMaths", youtube: "https://www.youtube.com/channel/UCpiWAm7wFRNzKxG656rlCfw"},
      website: "https://specialmaths.ng",
      becomemember: "",
      blogs: {medium: "specialmaths", devto: ""},
      email: "contact@specialmaths.ng",
      hashtags: [],
      teamLink: "/team",
      upcomingCamps: "/events",
      registerLink: "https://paystack.com/pay/specialmaths-summer-2020",
      subscriptionLink: "https://groups.google.com/forum/#!forum/smal-web-group/join",
      learnMoreLink: "/about",
      longDescription: "This camp is specifically designed for high-performing students who have participated or interested in participating and acing the national olympiads. Our philosophy is that students will develop stronger problem solving abilities through intuitive understandng of theorems and concepts as opposed to memorizing formulas to solve problems through repeated drills. Thus, our trainings are structured to reflect this philosophy.",
      meetupLink: "pdf/policydoc.pdf",
    },
  },
  {
    name: 'footer',
    data: {
      links: {
        Contests: [
          {linktype: "About", link: "http://www.imo-official.com", linkname: "IMO"},
          {linktype: "About", link: "https://www.africamathunion.org/AMU-pamo-official.php", linkname: "PAMO"},
        ],
        'Footer End Session Link': [
          {linkname: "Code of Conduct", link: "https://docs.google.com/document/d/1Wz_w6Z7usMnXKFMpOY4IPbA35twK7Uc4CAxScGDiwOk/edit", linktype: "Footer End Session Link"},
          {linkname: "Terms & Servies", linktype: "Footer End Session Link", link: "https://docs.google.com/document/d/14g3fv9NItiB8Hd-YGYyVYd2N4LRxe6Bx3syWse_wsiA/edit?usp=sharing"},
          {link: "/about", linkname: "Community Guidelines", linktype: "Footer End Session Link"}
        ],
        Resources: [
          {linkname: "Art of Problem Solving", linktype: "Resources", link: "aops.com"},
          {linktype: "Resources", link: "http://www.nmcabuja.org/", linkname: "National Mathematics Center"}
        ]
      }
    }
  },
  {
    name: "partners",
    data: {partnersid: ["nmc", "graceland"]},
  },
  {
    name: 'keysandsecurity',
    data: {
      mail_champ: "",
      mail_gun: "",
      meetup: "",
      server_key: "AAAAYazdEoQ:APA91bGvYKFUiDDI5NVjoR8fQI_ui6lJUayCQV1Bb7EermAa_s3sSd7gVJTTwZCAIUqLRLgXzX_DYaPdjEImBwLx5trNlU97MYoNZin4XTfKQILMMPGr_m2tiSzmJaATB0gIk1y1wiUT",web_push_certificate: "BJdcFiQ4jRxp2W89kLjm5CEpj1HRcc4b2my3ELPs3YS0PWvCV6cnGCEyxjpYZZl3qwisnbX7EY4EEbwRrWuijOE"
    },
  },
  {
    name: "communityguidelines",
    data: {
      communityGuidelines: [
        {name: "Be nice", des: "We're all part of the same community, so be friend…. Be someone that other people want to be around."},
        {des: "Remember to be respectful and constructive with yo… and stop a negative thread as early as possible.", name: "Be respectful and constructive"},{name: "Be collaborative", des: "Work together! We can learn a lot from each other. Share knowledge, and help each other out."}
    ], 
    codeOfConduct: "When you join our programs, you’re joining a commu…clarity or have questions feel free to reach out."},
  }
]

export default config