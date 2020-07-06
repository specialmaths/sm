import firebase from '@/config/firebase'
import config from '@/store/config'
import blogs from '@/store/blogs'
import {featureEvents, customEvents} from '@/store/events'

let localappservice = {
  getTeam: () => {
    let team = []
    return new Promise((resolve, reject) => {
      firebase.firestore.collection("team")
        .get()
        .then(doc => {
          if (doc.empty) {
            resolve({
              success: false,
              data: {}
            })
          }
          if (Object.keys(doc).length > 0) {
            doc.forEach(res => {
              team.push(res.data())
            })
            resolve({
              success: true,
              data: team
            })
          }
        })
        .catch(e => {
          reject(e)
        });
    })
  },

  getTeamMember(id) {
    return new Promise((resolve, reject) => {
      firebase.firestore.collection("team").doc(id)
        .get()
        .then(doc => {
          if (doc.empty) {
            resolve({
              success: false,
              data: {}
            })
          }
          if (!doc.exists) {
            resolve({
              success: false,
              data: {}
            })
          }
          if (Object.keys(doc).length > 0) {
            resolve({
              success: true,
              data: doc.data()
            })
          }
        })
        .catch(e => {
          reject(e)
        });
    })
  },
  getAllEvents: () => {
    let events = []
    return new Promise((resolve, reject) => {
      firebase.firestore.collection("events")
        .get()
        .then(doc => {
          if (doc.empty) {
            resolve({
              success: false,
              data: {}
            })
          }
          if (Object.keys(doc).length > 0) {
            doc.forEach(res => {
              events.push(res.data())
            })
            resolve({
              success: true,
              data: events
            })
          }
        })
        .catch(e => {
          reject(e)
        });
    })
  },

  getAllCustomEvents: () => {
    return new Promise((resolve, reject) => {
      resolve({
        success: true,
        data: customEvents
      })
    })
  },

  getEvent: (id) => {
    return new Promise((resolve, reject) => {
      customEvents.forEach(event => {
        if (event.id == id) {
          resolve({
            success: true,
            data: event
          })
        } else {
          resolve({
            success: false,
            data: {}
          })
        }
      });
    });
  },

  getSpeaker: (id) => {
    return new Promise((resolve, reject) => {
      firebase.firestore.collection("Speakers").doc(id)
        .get()
        .then(doc => {
          if (doc.empty) {
            resolve({
              success: false,
              data: {}
            })
          }
          if (!doc.exists) {
            resolve({
              success: false,
              data: {}
            })
          }
          if (Object.keys(doc).length > 0) {
            resolve({
              success: true,
              data: doc.data()
            })
          }
        })
        .catch(e => {
          reject(e)
        });
    })
  },

  getAllSpeakers: () => {
    let speakers = []
    return new Promise((resolve, reject) => {
      firebase.firestore.collection("Speakers")
        .get()
        .then(doc => {
          if (doc.empty) {
            resolve({
              success: false,
              data: {}
            })
          }
          if (Object.keys(doc).length > 0) {
            doc.forEach(res => {
              speakers.push(res.data())
            })
            resolve({
              success: true,
              data: speakers
            })
          }
        })
        .catch(e => {
          reject(e)
        });
    })
  },

  getFeaturesEvents: () => {
    return new Promise((resolve, reject) => {
      resolve({
        success: true,
        data: featureEvents
      })
    })
  },

  getAllPartners: () => {
    let partners = []
    return new Promise((resolve, reject) => {
      firebase.firestore.collection("partners")
        .get()
        .then(doc => {
          if (doc.empty) {
            resolve({
              success: false,
              data: {}
            })
          }
          if (Object.keys(doc).length > 0) {
            doc.forEach(res => {
              partners.push(res.data())
            })
            resolve({
              success: true,
              data: partners
            })
          }
        })
        .catch(e => {
          reject(e)
        });
    })
  },

  getAllConfig: () => {
    return new Promise((resolve, reject) => {
      resolve({success: true, 
        data: config})
    })
  },

  getAllUpcomingMeetupsEvents: (id) => {
    return new Promise((resolve, reject) => {
      fetch(
          "https://cors-anywhere.herokuapp.com/https://api.meetup.com/" + id + "/events?&sign=true"
        ).then(res => res.json()).then(data => {
            resolve({
              success: true,
              data: data
            })
        })
        .catch(e => {
          reject(e)
        });
    })
  },
  getCommunityGuidelines: () => {
    return new Promise((resolve, reject) => {
      firebase.firestore.collection("config").doc('communityguidelines')
        .get()
        .then(doc => {
          if (doc.empty) {
            resolve({
              success: false,
              data: {}
            })
          }
          if (Object.keys(doc.data()).length > 0) {
            resolve({
              success: true,
              data: doc.data()
            })
          }
        })
        .catch(e => {
          reject(e)
        });
    })
  },

  getAllMeetupPastEvents: (id) => {
    return new Promise((resolve, reject) => {
      fetch(
          "https://cors-anywhere.herokuapp.com/https://api.meetup.com/" + id + "/events?desc=true&photo-host=public&page=300&status=past&sign=true"
        ).then(res => res.json()).then(data => {
            resolve({
              success: true,
              data: data
            })
        })
        .catch(e => {
          reject(e)
        });
    })
  },

  getAllMediumBlogs: (id) => {
    return new Promise((resolve, reject) => {
      resolve({
        success: false,
        data: blogs
      })
    })
  },

  getPartner: (id) => {
    return new Promise((resolve, reject) => {
      firebase.firestore.collection("partners").doc(id)
        .get()
        .then(doc => {
          if (doc.empty) {
            resolve({
              success: false,
              data: {}
            })
          }
          if (!doc.exists) {
            resolve({
              success: false,
              data: {}
            })
          }
          if (Object.keys(doc).length > 0) {
            resolve({
              success: true,
              data: doc.data()
            })
          }
        })
        .catch(e => {
          reject(e)
        });
    })
  },
}

export default localappservice