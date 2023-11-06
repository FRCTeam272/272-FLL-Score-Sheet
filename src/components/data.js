import one from './imgs/01.png';
import two from './imgs/02.png';
import three from './imgs/03.png';
import four from './imgs/04.png';
import five from './imgs/05.png';
import six from './imgs/06.png';
import eight from './imgs/08.png';
import nine from './imgs/09.png';
import ten from './imgs/10.png';
import eleven from './imgs/11.png';
import twelve from './imgs/12.png';
import thirteen from './imgs/13.png';
import fourteen from './imgs/14.png';
import fifteen from './imgs/15.png';

const x = [
  {
    "name": "M01: 3D Cinema",
    "helpText": "small red beam is completely to the right of the black frame",
    "options": [20],
    "optionText": ["Engaged"],
    "photo": one,
    "sum": 0
  },
  { 
    "name": "M02: Theater Scene Change", 
    "helpText": "theater’s red flag is down and the active scene color is",
    "options": [10, 20, 30, 20, 30, 10], 
    "optionText": ["Blue", "Pink", "Orange", "Blue CoOpertition Bonus", "Pink CoOpertition Bonus", "Orange CoOpertition Bonus"],
    "photo": two,
    "sum": 0 
  },
  { 
    "name": "M03: Immersive Experience", 
    "helpText": "If the three immersive experience screens are raised",
    "options": [20], 
    "optionText": ["Engaged"],
    "photo": three,
    "sum": 0 
  },
  { 
    "name": "M04: Masterpiece", 
    "helpText": "If your team’s LEGO art piece is at least partly in the museum target area",
    "options": [10, 20], 
    "optionText": ["Engaged", "Bonus: Art piece is completely supported by the pedestal"],
    "photo": four,
    "sum": 0 
  },
  { 
    "name": "M05: Augmented Reality Statue", 
    "helpText": "If the augmented reality statue’s orange lever is rotated completely to the right",
    "options": [30], 
    "optionText": ["Engaged"],
    "photo": five,
    "sum": 0 
  },
  { 
    "name": "M06: Music Concert Lights and Sounds", 
    "helpText": "",
    "options": [10,10], 
    "optionText": ["If the lights’ orange lever is rotated completely downwards", "If the speakers’ orange lever is rotated completely to the left"],
    "photo": six,
    "sum": 0 
  },
  { 
    "name": "M07: Hologram Performer", 
    "helpText": "If the hologram performer’s orange push activator is completely past the black stage set line",
    "options": [20], 
    "optionText": ["Engage"],
    "photo": six,
    "sum": 0 
  },
  { 
    "name": "M08: Rolling Camera", 
    "helpText": "If the rolling camera’s white pointer is",
    "options": [10, 20, 30], 
    "optionText": ["Left of dark blue", "left of medium blue", "left of light blue"],
    "photo": eight,
    "sum": 0 
  },
  { 
    "name": "M09: Rolling Camera", 
    "helpText": "",
    "options": [10, 10], 
    "optionText": ["If the boat is touching the mat and is completely past the black scene line", "If the camera is touching the mat and is at least partly in the camera target area"],
    "photo": nine,
    "sum": 0 
  },
  { 
    "name": "M10: Sound Mixer", 
    "helpText": " If the light show’s white pointer is within zone",
    "options": [10, 10, 10], 
    "optionText": ["mixer slide 1 raised", "mixer slide 2 raised", "mixer slide 3 raised"],
    "photo": ten,
    "sum": 0 
  },
  { 
    "name": "M11: Light Show", 
    "helpText": "If the chicken is intact and has moved from its starting position, ",
    "options": [10, 20, 30], 
    "optionText": ["Yellow", "Green", "Blue"],
    "photo": eleven,
    "sum": 0 
  },
  { 
    "name": "M12: Virtual Reality Artist", 
    "helpText": "If the chicken is intact and has moved from its starting position",
    "options": [10, 20], 
    "optionText": ["Engaged", "BONUS: And is over or completely past the lavender dot"],
    "photo": twelve,
    "sum": 0 
  },
  { 
    "name": "M13: Craft Creator", 
    "helpText": "",
    "options": [10, 20], 
    "optionText": ["If the craft machine’s orange and white lid is completely open", "If the craft machine’s light pink latch is pointing straight down"],
    "photo": thirteen,
    "sum": 0 
  },
  { 
    "name": "M14: Audience Delivery", 
    "helpText": "",
    "options": [5,5,5,5,5,5,5,5,5,5,5,5,5,5], 
    "optionText": ["Member 1", "Member 2", "Member 3", "Member 4", "Member 5", "Member 6", "Member 7", "Location 1", "Location 2", "Location 3", "Location 4", "Location 5", "Location 6", "Location 7"],
    "photo": fourteen,
    "sum": 0 
  },
  { 
    "name": "M15: Expert Delivery", 
    "helpText": "If the following experts are at least partly in their target destinations",
    "options": [10, 10, 10, 10, 10], 
    "optionText": [
    "Sam the Stage Manager in Movie Set", "Anna the Curator in Museum", "Noah the Sound Engineer in Music Concert", "Izzy the Skateboarder in Skate Park", "Emily the Visual Effects Director in Cinema"],
    "photo": fifteen,
    "sum": 0 
  },
  { 
    "name": "Penilties Remaining", 
    "helpText": "!!! Only Select One !!!",
    "options": [-10, -15, -25, -50], 
    "optionText": [1, 2, 3, "4+"],
    "sum": 0 
  }
  
]
export default x;