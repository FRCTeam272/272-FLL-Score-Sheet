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
    name: `M00: Inspection Bonus`,
    helpText: `Before the match, there will be an equipment
inspection. If your robot and all equipment
fit completely in one launch area and under
a height limit of 12 in. (305 mm) during this
inspection.`,
    options: [20],
    optionText: [`Engaged`],
  },
  {
    name: `M01: Surface Brushing`,
    helpText: `select multiple`,
    options: [10, 10, 10],
    optionText: [
      `A soil depot is cleared and touching the mat`, 
      `A second soil depot is cleared and touching the mat`,
      `Archaeologist brush is no longer touching the dig site`
    ],
    photo: one,
    sum: 0,
    year: 2025
  },
  {
    // TODO: check with someone that I did this right
    name: `M02: Map Reveal`,
    helpText: `select multiple`,
    options: [10, 10, 10],
    optionText: [
      `top soil section is cleared`, 
      `another top soil section is cleared`,
      `another top soil section is cleared`
    ],
    photo: two,
    sum: 0,
    year: 2025
  },
  {
    name: `M03: Mineshaft Explorer`,
    helpText: `select multiple`,
    options: [30, 10],
    optionText: [
      `Your team’s minecart is on the opposing
team’s field. `, 
      `Bonus: and the opposing team’s minecart
is on your team’s field.`, 
    ],
    photo: three,
    sum: 0,
    year: 2025
  },
  {
    name: `M04: Careful Recovery`,
    helpText: `select multiple`,
    options: [30, 10],
    optionText: [
      `Precious artifact is not touching the mine.`, 
      `Both support structures are standing`
    ],
    photo: four,
    sum: 0
  },
  {
    name: `M05: Who Lived Here?`,
    helpText: `Structure floor is completely upright.`,
    options: [30],
    optionText: [`Engaged`],
    photo: five,
    sum: 0,
    year: 2025
  },
  {
    name: `M06: Forge`,
    helpText: `Ore blocks are not touching the forge (select multiple)`,
    options: [10, 10, 10],
    optionText: [`Ore 1 clear`, `Ore 2 clear`, `Ore 3 clear`],
    photo: six,
    sum: 0
  },
  {
    name: `M07: Heavy Lifting`,
    helpText: `Millstone is no longer touching its base.`,
    options: [30],
    optionText: [`Engaged`],
    photo: seven,
    sum: 0
  },
  {
    name: `M08: Silo`,
    helpText: `Preserved pieces are outside the silo. (select multiple)`,
    options: [10, 10, 10],
    optionText: [`1`, `2`, `3`],
    photo: eight,
    sum: 0
  },
  {
    name: `M09: Whats on Sale?`,
    helpText: ``,
    options: [20, 10],
    optionText: [`Roof is completely raised.`, `Market wares are raised.`],
    photo: nine,
    sum: 0
  },
  {
    name: `M10: Tip the Scales`,
    helpText: ``,
    options: [20, 10],
    optionText: [
      `Scale is tipped and touching the mat.`, 
      `Scale pan is completely removed.`
    ],
    photo: ten,
    sum: 0
  },
  {
    name: `M11: Angler Artifacts`,
    helpText: `(select multiple)`,
    options: [20, 10],
    optionText: [
      `Artifacts are raised above the ground layer.`, 
      `Bonus: and the crane flag is at least partly lowered.`
    ],
    photo: eleven,
    sum: 0
  },
  {
    name: `M12: Salvage Operation`,
    helpText: `select multiple`,
    options: [20, 10],
    optionText: [`Sand is completely cleared.`, `Ship is completely raised.`],
    photo: twelve,
    sum: 0
  },
  {
    name: `M13: Statue Rebuild`,
    helpText: ``,
    options: [30],
    optionText: [`Statue is completely raised.`],
    photo: thirteen,
    sum: 0
  },
  {
    name: `M14: Forum`,
    helpText: `Artifacts touching the mat and at least partly in the forum: (select multiple)`,
    options: [5, 5, 5, 5, 5, 5, 5],
    optionText: [
      `Brush`, 
      `Topsoil`, 
      `Precious Artifact`, 
      `Opposing Team's Minecart`, 
      `Ore with Fossilized Artifact`,
      `Millstone`,
      `Scale Pan`
    ],
    photo: fourteen,
    sum: 0
  },
  {
    name: `M15: Site Marking`,
    helpText: `Sites with a flag at least partly inside and touching the mat.`,
    options: [
      10, 10, 10
    ],
    optionText: [
      `One Flag Placed`,
      `Another Flag Placed`,
      `Third Flag Placed`
    ],
    photo: fifteen,
    sum: 0
  },
  {
    name: `Penalties Remaining`,
    helpText: `!!! Only Select One !!!`,
    options: [10, 15, 25, 35, 50,],
    optionText: [1, 2, 3, 4, `5+`],
    sum: 0
  }

]
export default data;