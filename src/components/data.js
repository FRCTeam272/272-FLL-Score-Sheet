import one from './imgs/01.png';
import two from './imgs/02.png';
import three from './imgs/03.png';
import four from './imgs/04.png';
import five from './imgs/05.png';
import six from './imgs/06.png';
import seven from './imgs/07.png';
import eight from './imgs/08.png';
import nine from './imgs/09.png';
import ten from './imgs/10.png';
import eleven from './imgs/11.png';
import twelve from './imgs/12.png';
import thirteen from './imgs/13.png';
import fourteen from './imgs/14.png';
import fifteen from './imgs/15.png';
// data soure
// https://firstinspires.blob.core.windows.net/fll/challenge/2024-25/interactive-rgr/0010.html
const data = [
  {
    "name": "M01: Coral Nursery",
    "helpText": "",
    "options": [20, 10, 20],
    "optionText": ["the coral tree in hanging on the coral tree support", "Bonus: the bottom of the coral tree is in the holder", "Coral Buds are flipped up"],
    "photo": one,
    "sum": 0,
    "year": 2024
  },
  { 
    "name": "M02: Sharks", 
    "helpText": "",
    "options": [20, 10], 
    "optionText": ["The shark is no longer touching the cave", "The shark is touching the mat and is at least partly in the shark habitat"],
    "photo": two,
    "sum": 0,
    "year": 2024 
  },
  { 
    "name": "M03: Coral Reef", 
    "helpText": "",
    "options": [20, 5, 5, 5], 
    "optionText": ["the coral reef is flipped up, not touching the mat", "a reef segment is standing upgright, outside of home and touching the mat", "a reef segment is standing upgright, outside of home and touching the mat", "a reef segment is standing upgright, outside of home and touching the mat"],
    "photo": three,
    "sum": 0,
    "year": 2024
  },
  { 
    "name": "M04: Scuba Diver", 
    "helpText": "",
    "options": [20, 20], 
    "optionText": ["The suba diver is no longer touching the coral nursery", "The suba diver is hanging on the coral reef support"],
    "photo": four,
    "sum": 0 
  },
  { 
    "name": "M05: Angler Fish", 
    "helpText": "If the angler fush is latched within the shipwreck",
    "options": [30], 
    "optionText": ["Engaged"],
    "photo": five,
    "sum": 0,
    "year": 2024
  },
  { 
    "name": "M06: Raise the Mast", 
    "helpText": "Raise the mast to restore the suken shipwrek and explore what is inside",
    "options": [30], 
    "optionText": ["Engaged"],
    "photo": six,
    "sum": 0 
  },
  { 
    "name": "M07: Kraken Treasure", 
    "helpText": "If the treasure chest is completely outside the kraken's nest",
    "options": [20], 
    "optionText": ["Engaged"],
    "photo": seven,
    "sum": 0 
  },
  { 
    "name": "M08: Artifical Habitat", 
    "helpText": "If an artifical habitat stack segment is completely flat and upright (select multiple)",
    "options": [10, 10, 10, 10], 
    "optionText": ["1", "2", "3", "4"],
    "photo": eight,
    "sum": 0 
  },
  { 
    "name": "M09: Unexpected Encounter", 
    "helpText": "If the unknown creature is released (select multiple)",
    "options": [20, 10], 
    "optionText": ["Engaged", "If the unknown creature is at leaset partly in the cold seep"],
    "photo": nine,
    "sum": 0 
  },
  { 
    "name": "M10: Send over the Submersible", 
    "helpText": "",
    "options": [30, 10], 
    "optionText": ["If your team's yellow flag is down", "If the submersible is clearly closer to hte opposing field"],
    "photo": ten,
    "sum": 0 
  },
  { 
    "name": "M11: Sonar Discorvery", 
    "helpText": "(select multiple)",
    "options": [20, 10], 
    "optionText": ["If one whale is reveled (1/2 rotated)", "if the other whale is relaved (as rotated as possible)"],
    "photo": eleven,
    "sum": 0 
  },
  { 
    "name": "M12: Feed the Whale", 
    "helpText": "Collect Kkrill and feed them to the whale (select multiple)",
    "options": [10, 10, 10, 10, 10], 
    "optionText": ["1", "2", "3", "4", "5"],
    "photo": twelve,
    "sum": 0 
  },
  { 
    "name": "M13: Change Shipping Lanes", 
    "helpText": "",
    "options": [20], 
    "optionText": ["If the shuo is in the new shipping lane, touching the mat"],
    "photo": thirteen,
    "sum": 0 
  },
  { 
    "name": "M14: Sample Collection", 
    "helpText": "(select many)",
    "options": [5,10, 10, 20, 10], 
    "optionText": ["If  the water sample is compeltely outside the water sample area", "If the seabed sample is no longer touching the seabed", "If the plankton sample is no longer touching the kelp forest", "If a piece of the trident is no longer touching the shipwreck", "Bonus: If both peices are no longer touching the shipwrek"],
    "photo": fourteen,
    "sum": 0 
  },
  { 
    "name": "M15: Expert Delivery", 
    "helpText": "If any of the following are at least partly in research vessel's cargo area",
    "options": [
      5,5,5,// samples
      5,5,// trident
      5,// treasure chest
      20// port
    ], 
    "optionText": [
      "Sample 1",
      "Sample 2",
      "Sample 3",
      "Trident Part 1",
      "Trident Part 2",
      "Treasure Chest",
      "If the port's latch is at least partly in the research vessel's loop"
    ],
    "photo": fifteen,
    "sum": 0 
  },
  { 
    "name": "Penalties Remaining", 
    "helpText": "!!! Only Select One !!!",
    "options": [10, 15, 25, 35, 50], 
    "optionText": [1, 2, 3, 4, "5+"],
    "sum": 0 
  }
  
]
export default data;