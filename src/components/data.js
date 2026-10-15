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
// data source
// https://firstinspires.blob.core.windows.net/fll/challenge/2026-27/fll-challenge-bioglow-rgr.pdf
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
    name: `M01: Drone Survey`,
    helpText: `select multiple`,
    options: [20, 10],
    optionText: [
      `Drone is no longer touching the mat`,
      `Bonus: and the LiDAR map is completely flipped over, with the scan marker at least partly in the survey area`
    ],
    photo: one,
    sum: 0,
    year: 2026
  },
  {
    name: `M02: Exploding Seeds`,
    helpText: `Seeds no longer touching the stalk (select multiple)`,
    options: [10, 10, 10],
    optionText: [`Seed 1`, `Seed 2`, `Seed 3`],
    photo: two,
    sum: 0,
    year: 2026
  },
  {
    name: `M03: Flip the Rock`,
    helpText: `select multiple`,
    options: [20, 10],
    optionText: [
      `The research flag is down`,
      `Bonus: and the rock has been returned to its original starting position`
    ],
    photo: three,
    sum: 0,
    year: 2026
  },
  {
    name: `M04: Lucky Leaves`,
    helpText: `select multiple. If the katydid is outside the leaf habitat at the
end of the match, even partly, this mission scores zero.`,
    options: [10, 20],
    optionText: [
      `One leaf is completely removed, no longer touching the nest`,
      `Bonus: and the second leaf is completely removed, with the katydid in its original starting position`
    ],
    photo: four,
    sum: 0,
    year: 2026
  },
  {
    name: `M05: Reaching Roots`,
    helpText: `The plant root is... !!! Only Select One !!!`,
    options: [10, 20],
    optionText: [`Partially extended`, `Completely extended`],
    photo: five,
    sum: 0,
    year: 2026
  },
  {
    name: `M06: Leafcutter Frenzy`,
    helpText: `The ant is touching the nest, and the leaf fragments are contained
within the nest (select multiple)`,
    options: [10, 10, 10, 10],
    optionText: [`Fragment 1`, `Fragment 2`, `Fragment 3`, `Fragment 4`],
    photo: six,
    sum: 0,
    year: 2026
  },
  {
    name: `M07: Humongous Fungus`,
    helpText: `select multiple. The mycelium and plant root do not need to touch to
form a connection. Bonus is not possible in remote competitions or with no opposing team.`,
    options: [20, 10, 10],
    optionText: [
      `The mycelium is completely extended`,
      `Bonus: your team's mycelium connects with the opposing team's fully extended plant root`,
      `Bonus: the opposing team's mycelium connects with your team's fully extended plant root`
    ],
    photo: seven,
    sum: 0,
    year: 2026
  },
  {
    name: `M08: Tangled`,
    helpText: `The vine is touching the mat.`,
    options: [30],
    optionText: [`Engaged`],
    photo: eight,
    sum: 0,
    year: 2026
  },
  {
    name: `M09: Research Platform`,
    helpText: `select multiple`,
    options: [10, 10, 10],
    optionText: [
      `The research platform is raised`,
      `The camera trap is deployed`,
      `The seed is no longer touching the tree`
    ],
    photo: nine,
    sum: 0,
    year: 2026
  },
  {
    name: `M10: Fragile Microhabitats`,
    helpText: `select multiple`,
    options: [10, 10],
    optionText: [
      `The spider habitat is in its original starting position`,
      `The snail habitat is in its original starting position`
    ],
    photo: ten,
    sum: 0,
    year: 2026
  },
  {
    name: `M11: Window to the Past`,
    helpText: `The root cover is down, touching the mat.`,
    options: [20],
    optionText: [`Engaged`],
    photo: eleven,
    sum: 0,
    year: 2026
  },
  {
    name: `M12: Forest Elder`,
    helpText: `select multiple`,
    options: [20, 10],
    optionText: [
      `The cane is completely raised, touching the tree`,
      `The support tie is around the post`
    ],
    photo: twelve,
    sum: 0,
    year: 2026
  },
  {
    name: `M13: Keystone Species`,
    helpText: `Your team's keystone species is on the restoration platform,
and the young trees are raised.`,
    options: [30],
    optionText: [`Engaged`],
    photo: thirteen,
    sum: 0,
    year: 2026
  },
  {
    name: `M14: Seeds of Renewal`,
    helpText: `Seeds are contained within the replantation station (5 each),
bonus if they are also touching the mat (5 added each). (select multiple)`,
    options: [5, 5, 5, 5, 5, 5, 5, 5],
    optionText: [
      `Seed 1 in station`,
      `Seed 2 in station`,
      `Seed 3 in station`,
      `Seed 4 in station`,
      `Bonus: seed 1 touching mat`,
      `Bonus: seed 2 touching mat`,
      `Bonus: seed 3 touching mat`,
      `Bonus: seed 4 touching mat`
    ],
    photo: fourteen,
    sum: 0,
    year: 2026
  },
  {
    name: `M15: Biocentric Architecture`,
    helpText: `select multiple. Environmental bonus: completed the greatest ecological
need for the dock the model is located (Mine dock: nesting canopy, City dock:
garden skylight, Farm dock: compost hatch). Only one bonus is possible.`,
    options: [10, 10, 10, 10],
    optionText: [
      `The nesting canopy is raised`,
      `The garden skylight is completely in`,
      `The compost hatch is completely opened, touching the mat`,
      `Environmental Bonus`
    ],
    photo: fifteen,
    sum: 0,
    year: 2026
  },
  {
    name: `Precision Tokens Remaining`,
    helpText: `!!! Only Select One !!!`,
    options: [10, 15, 25, 35, 50,],
    optionText: [1, 2, 3, 4, `5+`],
    sum: 0
  }

]
export default data;
