import {Team} from '../interfaces/playerTeamInterfaces';
import rules from '../rules';

const teamsDefault: Team[] = [
  {
    name: 'NOVA',
    bank: {
      cash: rules.teamMoneyDefault,
    },
    ratingHistory: [],
    yourTeam: true,
    players: [
      {
        name: 'Oscare',
        contract: {salary: 0, start: '1', finish: '1'},
        status: 'active',
        stat: {
          role: 'capitan',
          reaction: 0.345,
          accuracy: 0.664,
          sprayControl: 0.332,
          flicksControl: 0.236,
          nades: 0.335,

          tactics: 0.493,
        },
      },
      {
        name: 'Header',
        contract: {salary: 0, start: '1', finish: '1'},
        status: 'active',
        stat: {
          role: 'rifler',
          reaction: 0.454,
          accuracy: 0.556,
          sprayControl: 0.515,
          flicksControl: 0.454,
          nades: 0.421,

          tactics: 0.369,
        },
      },
      {
        name: 'Modest',
        contract: {salary: 0, start: '1', finish: '1'},
        status: 'active',
        stat: {
          role: 'rifler',
          reaction: 0.369,
          accuracy: 0.639,
          sprayControl: 0.595,
          flicksControl: 0.375,
          nades: 0.388,

          tactics: 0.653,
        },
      },
      {
        name: 'Olaph',
        contract: {salary: 0, start: '1', finish: '1'},
        status: 'active',
        stat: {
          role: 'sniper',
          reaction: 0.346,
          accuracy: 0.375,
          sprayControl: 0.51,
          flicksControl: 0.446,
          nades: 0.564,

          tactics: 0.364,
        },
      },
      {
        name: 'Roller',
        contract: {salary: 0, start: '1', finish: '1'},
        status: 'active',
        stat: {
          role: 'support',
          reaction: 0.499,
          accuracy: 0.431,
          sprayControl: 0.527,
          flicksControl: 0.619,
          nades: 0.361,

          tactics: 0.542,
        },
      },
    ],
  },
  {
    name: 'Vangard',
    bank: {
      cash: rules.teamMoneyDefault,
    },
    ratingHistory: [],
    yourTeam: false,
    players: [
      {
        name: 'Collector',
        contract: {salary: 0, start: '1', finish: '1'},
        status: 'active',
        stat: {
          role: 'capitan',
          reaction: 0.437,
          accuracy: 0.742,
          sprayControl: 0.479,
          flicksControl: 0.79,
          nades: 0.664,

          tactics: 0.751,
        },
      },
      {
        name: 'Nelo',
        contract: {salary: 0, start: '1', finish: '1'},
        status: 'active',
        stat: {
          role: 'rifler',
          reaction: 0.217,
          accuracy: 0.422,
          sprayControl: 0.367,
          flicksControl: 0.814,
          nades: 0.421,

          tactics: 0.758,
        },
      },
      {
        name: 'Brad',
        contract: {salary: 0, start: '1', finish: '1'},
        status: 'active',
        stat: {
          role: 'rifler',
          reaction: 0.485,
          accuracy: 0.839,
          sprayControl: 0.668,
          flicksControl: 0.713,
          nades: 0.337,

          tactics: 0.886,
        },
      },
      {
        name: 'Silver',
        contract: {salary: 0, start: '1', finish: '1'},
        status: 'active',
        stat: {
          role: 'sniper',
          reaction: 0.285,
          accuracy: 0.444,
          sprayControl: 0.648,
          flicksControl: 0.392,
          nades: 0.306,

          tactics: 0.521,
        },
      },
      {
        name: 'Colour',
        contract: {salary: 0, start: '1', finish: '1'},
        status: 'active',
        stat: {
          role: 'support',
          reaction: 0.412,
          accuracy: 0.717,
          sprayControl: 0.42,
          flicksControl: 0.862,
          nades: 0.834,

          tactics: 0.352,
        },
      },
    ],
  },
  {
    name: 'Quazars',
    bank: {
      cash: rules.teamMoneyDefault,
    },
    ratingHistory: [],
    yourTeam: false,
    players: [
      {
        name: 'Octopus',
        contract: {salary: 0, start: '1', finish: '1'},
        status: 'active',
        stat: {
          role: 'capitan',
          reaction: 0.321,
          accuracy: 0.385,
          sprayControl: 0.855,
          flicksControl: 0.596,
          nades: 0.339,

          tactics: 0.89,
        },
      },
      {
        name: 'Rossan',
        contract: {salary: 0, start: '1', finish: '1'},
        status: 'active',
        stat: {
          role: 'rifler',
          reaction: 0.327,
          accuracy: 0.732,
          sprayControl: 0.845,
          flicksControl: 0.857,
          nades: 0.406,

          tactics: 0.509,
        },
      },
      {
        name: 'Awesome',
        contract: {salary: 0, start: '1', finish: '1'},
        status: 'active',
        stat: {
          role: 'rifler',
          reaction: 0.259,
          accuracy: 0.81,
          sprayControl: 0.494,
          flicksControl: 0.364,
          nades: 0.559,

          tactics: 0.389,
        },
      },
      {
        name: 'NBF',
        contract: {salary: 0, start: '1', finish: '1'},
        status: 'active',
        stat: {
          role: 'sniper',
          reaction: 0.265,
          accuracy: 0.625,
          sprayControl: 0.742,
          flicksControl: 0.887,
          nades: 0.826,

          tactics: 0.67,
        },
      },
      {
        name: 'Scelt',
        contract: {salary: 0, start: '1', finish: '1'},
        status: 'active',
        stat: {
          role: 'support',
          reaction: 0.317,
          accuracy: 0.758,
          sprayControl: 0.823,
          flicksControl: 0.302,
          nades: 0.577,

          tactics: 0.728,
        },
      },
    ],
  },
  {
    name: 'Eagles',
    bank: {
      cash: rules.teamMoneyDefault,
    },
    ratingHistory: [],
    yourTeam: false,
    players: [
      {
        name: 'Cloudy',
        contract: {salary: 0, start: '1', finish: '1'},
        status: 'active',
        stat: {
          role: 'capitan',
          reaction: 0.273,
          accuracy: 0.429,
          sprayControl: 0.8,
          flicksControl: 0.674,
          nades: 0.401,

          tactics: 0.598,
        },
      },
      {
        name: 'B8Loo',
        contract: {salary: 0, start: '1', finish: '1'},
        status: 'active',
        stat: {
          role: 'rifler',
          reaction: 0.307,
          accuracy: 0.768,
          sprayControl: 0.581,
          flicksControl: 0.383,
          nades: 0.475,

          tactics: 0.342,
        },
      },
      {
        name: 'Newton',
        contract: {salary: 0, start: '1', finish: '1'},
        status: 'active',
        stat: {
          role: 'rifler',
          reaction: 0.288,
          accuracy: 0.484,
          sprayControl: 0.334,
          flicksControl: 0.879,
          nades: 0.315,

          tactics: 0.587,
        },
      },
      {
        name: 'Serpe',
        contract: {salary: 0, start: '1', finish: '1'},
        status: 'active',
        stat: {
          role: 'sniper',
          reaction: 0.331,
          accuracy: 0.668,
          sprayControl: 0.799,
          flicksControl: 0.684,
          nades: 0.453,

          tactics: 0.62,
        },
      },
      {
        name: 'Lancar',
        contract: {salary: 0, start: '1', finish: '1'},
        status: 'active',
        stat: {
          role: 'support',
          reaction: 0.273,
          accuracy: 0.628,
          sprayControl: 0.486,
          flicksControl: 0.8,
          nades: 0.806,

          tactics: 0.669,
        },
      },
    ],
  },
  {
    name: 'Guardians',
    bank: {
      cash: rules.teamMoneyDefault,
    },
    ratingHistory: [],
    yourTeam: false,
    players: [
      {
        name: 'Macro',
        contract: {salary: 0, start: '1', finish: '1'},
        status: 'active',
        stat: {
          role: 'capitan',
          reaction: 0.23,
          accuracy: 0.483,
          sprayControl: 0.381,
          flicksControl: 0.712,
          nades: 0.567,

          tactics: 0.874,
        },
      },
      {
        name: 'Zoom',
        contract: {salary: 0, start: '1', finish: '1'},
        status: 'active',
        stat: {
          role: 'rifler',
          reaction: 0.21,
          accuracy: 0.608,
          sprayControl: 0.518,
          flicksControl: 0.376,
          nades: 0.584,

          tactics: 0.619,
        },
      },
      {
        name: 'Smith',
        contract: {salary: 0, start: '1', finish: '1'},
        status: 'active',
        stat: {
          role: 'rifler',
          reaction: 0.404,
          accuracy: 0.497,
          sprayControl: 0.389,
          flicksControl: 0.519,
          nades: 0.605,

          tactics: 0.428,
        },
      },
      {
        name: 'Focus',
        contract: {salary: 0, start: '1', finish: '1'},
        status: 'active',
        stat: {
          role: 'sniper',
          reaction: 0.441,
          accuracy: 0.822,
          sprayControl: 0.595,
          flicksControl: 0.537,
          nades: 0.652,

          tactics: 0.844,
        },
      },
      {
        name: 'Invincible',
        contract: {salary: 0, start: '1', finish: '1'},
        status: 'active',
        stat: {
          role: 'support',
          reaction: 0.428,
          accuracy: 0.833,
          sprayControl: 0.813,
          flicksControl: 0.393,
          nades: 0.647,

          tactics: 0.875,
        },
      },
    ],
  },
  {
    name: 'University',
    bank: {
      cash: rules.teamMoneyDefault,
    },
    ratingHistory: [],
    yourTeam: false,
    players: [
      {
        name: 'Dach',
        contract: {salary: 0, start: '1', finish: '1'},
        status: 'active',
        stat: {
          role: 'capitan',
          reaction: 0.251,
          accuracy: 0.718,
          sprayControl: 0.386,
          flicksControl: 0.641,
          nades: 0.67,

          tactics: 0.833,
        },
      },
      {
        name: 'Theater',
        contract: {salary: 0, start: '1', finish: '1'},
        status: 'active',
        stat: {
          role: 'rifler',
          reaction: 0.47,
          accuracy: 0.705,
          sprayControl: 0.347,
          flicksControl: 0.355,
          nades: 0.444,

          tactics: 0.69,
        },
      },
      {
        name: 'Salivan',
        contract: {salary: 0, start: '1', finish: '1'},
        status: 'active',
        stat: {
          role: 'rifler',
          reaction: 0.278,
          accuracy: 0.766,
          sprayControl: 0.631,
          flicksControl: 0.684,
          nades: 0.619,

          tactics: 0.809,
        },
      },
      {
        name: 'Faker',
        contract: {salary: 0, start: '1', finish: '1'},
        status: 'active',
        stat: {
          role: 'sniper',
          reaction: 0.421,
          accuracy: 0.401,
          sprayControl: 0.455,
          flicksControl: 0.499,
          nades: 0.301,

          tactics: 0.563,
        },
      },
      {
        name: 'Boxer',
        contract: {salary: 0, start: '1', finish: '1'},
        status: 'active',
        stat: {
          role: 'support',
          reaction: 0.435,
          accuracy: 0.512,
          sprayControl: 0.52,
          flicksControl: 0.658,
          nades: 0.847,

          tactics: 0.666,
        },
      },
    ],
  },
  {
    name: 'Five',
    bank: {
      cash: rules.teamMoneyDefault,
    },
    ratingHistory: [],
    yourTeam: false,
    players: [
      {
        name: 'Gepard',
        contract: {salary: 0, start: '1', finish: '1'},
        status: 'active',
        stat: {
          role: 'capitan',
          reaction: 0.355,
          accuracy: 0.376,
          sprayControl: 0.58,
          flicksControl: 0.75,
          nades: 0.859,

          tactics: 0.662,
        },
      },
      {
        name: 'Super',
        contract: {salary: 0, start: '1', finish: '1'},
        status: 'active',
        stat: {
          role: 'rifler',
          reaction: 0.322,
          accuracy: 0.67,
          sprayControl: 0.694,
          flicksControl: 0.49,
          nades: 0.804,

          tactics: 0.346,
        },
      },
      {
        name: 'Bait',
        contract: {salary: 0, start: '1', finish: '1'},
        status: 'active',
        stat: {
          role: 'rifler',
          reaction: 0.313,
          accuracy: 0.824,
          sprayControl: 0.55,
          flicksControl: 0.317,
          nades: 0.448,

          tactics: 0.503,
        },
      },
      {
        name: 'Fury',
        contract: {salary: 0, start: '1', finish: '1'},
        status: 'active',
        stat: {
          role: 'sniper',
          reaction: 0.411,
          accuracy: 0.847,
          sprayControl: 0.881,
          flicksControl: 0.549,
          nades: 0.827,

          tactics: 0.404,
        },
      },
      {
        name: 'Pretios',
        contract: {salary: 0, start: '1', finish: '1'},
        status: 'active',
        stat: {
          role: 'support',
          reaction: 0.408,
          accuracy: 0.693,
          sprayControl: 0.474,
          flicksControl: 0.494,
          nades: 0.875,

          tactics: 0.313,
        },
      },
    ],
  },
  {
    name: 'Dream',
    bank: {
      cash: rules.teamMoneyDefault,
    },
    ratingHistory: [],
    yourTeam: false,
    players: [
      {
        name: 'Soul',
        contract: {salary: 0, start: '1', finish: '1'},
        status: 'active',
        stat: {
          role: 'capitan',
          reaction: 0.233,
          accuracy: 0.805,
          sprayControl: 0.47,
          flicksControl: 0.803,
          nades: 0.536,

          tactics: 0.424,
        },
      },
      {
        name: 'Faris',
        contract: {salary: 0, start: '1', finish: '1'},
        status: 'active',
        stat: {
          role: 'rifler',
          reaction: 0.222,
          accuracy: 0.769,
          sprayControl: 0.819,
          flicksControl: 0.898,
          nades: 0.727,

          tactics: 0.582,
        },
      },
      {
        name: 'Electron',
        contract: {salary: 0, start: '1', finish: '1'},
        status: 'active',
        stat: {
          role: 'rifler',
          reaction: 0.366,
          accuracy: 0.335,
          sprayControl: 0.666,
          flicksControl: 0.732,
          nades: 0.87,

          tactics: 0.43,
        },
      },
      {
        name: 'Crowley',
        contract: {salary: 0, start: '1', finish: '1'},
        status: 'active',
        stat: {
          role: 'sniper',
          reaction: 0.358,
          accuracy: 0.534,
          sprayControl: 0.881,
          flicksControl: 0.512,
          nades: 0.572,

          tactics: 0.617,
        },
      },
      {
        name: 'Right',
        contract: {salary: 0, start: '1', finish: '1'},
        status: 'active',
        stat: {
          role: 'support',
          reaction: 0.352,
          accuracy: 0.353,
          sprayControl: 0.425,
          flicksControl: 0.759,
          nades: 0.332,

          tactics: 0.557,
        },
      },
    ],
  },
  {
    name: 'Moon',
    bank: {
      cash: rules.teamMoneyDefault,
    },
    ratingHistory: [],
    yourTeam: false,
    players: [
      {
        name: 'Bad',
        contract: {salary: 0, start: '1', finish: '1'},
        status: 'active',
        stat: {
          role: 'capitan',
          reaction: 0.281,
          accuracy: 0.685,
          sprayControl: 0.871,
          flicksControl: 0.31,
          nades: 0.752,

          tactics: 0.469,
        },
      },
      {
        name: 'Phantom',
        contract: {salary: 0, start: '1', finish: '1'},
        status: 'active',
        stat: {
          role: 'rifler',
          reaction: 0.451,
          accuracy: 0.692,
          sprayControl: 0.596,
          flicksControl: 0.595,
          nades: 0.541,

          tactics: 0.47,
        },
      },
      {
        name: 'Titan',
        contract: {salary: 0, start: '1', finish: '1'},
        status: 'active',
        stat: {
          role: 'rifler',
          reaction: 0.466,
          accuracy: 0.576,
          sprayControl: 0.777,
          flicksControl: 0.781,
          nades: 0.566,

          tactics: 0.64,
        },
      },
      {
        name: 'Swan',
        contract: {salary: 0, start: '1', finish: '1'},
        status: 'active',
        stat: {
          role: 'sniper',
          reaction: 0.258,
          accuracy: 0.455,
          sprayControl: 0.759,
          flicksControl: 0.772,
          nades: 0.377,

          tactics: 0.669,
        },
      },
      {
        name: 'Tenor',
        contract: {salary: 0, start: '1', finish: '1'},
        status: 'active',
        stat: {
          role: 'support',
          reaction: 0.48,
          accuracy: 0.794,
          sprayControl: 0.89,
          flicksControl: 0.532,
          nades: 0.338,

          tactics: 0.304,
        },
      },
    ],
  },
  {
    name: 'Youth',
    bank: {
      cash: rules.teamMoneyDefault,
    },
    ratingHistory: [],
    yourTeam: false,
    players: [
      {
        name: '1Lery',
        contract: {salary: 0, start: '1', finish: '1'},
        status: 'active',
        stat: {
          role: 'capitan',
          reaction: 0.462,
          accuracy: 0.685,
          sprayControl: 0.335,
          flicksControl: 0.602,
          nades: 0.406,

          tactics: 0.843,
        },
      },
      {
        name: 'Wong',
        contract: {salary: 0, start: '1', finish: '1'},
        status: 'active',
        stat: {
          role: 'rifler',
          reaction: 0.399,
          accuracy: 0.728,
          sprayControl: 0.698,
          flicksControl: 0.841,
          nades: 0.596,

          tactics: 0.771,
        },
      },
      {
        name: 'Melon',
        contract: {salary: 0, start: '1', finish: '1'},
        status: 'active',
        stat: {
          role: 'rifler',
          reaction: 0.297,
          accuracy: 0.765,
          sprayControl: 0.442,
          flicksControl: 0.454,
          nades: 0.353,

          tactics: 0.435,
        },
      },
      {
        name: 'Forest',
        contract: {salary: 0, start: '1', finish: '1'},
        status: 'active',
        stat: {
          role: 'sniper',
          reaction: 0.488,
          accuracy: 0.426,
          sprayControl: 0.44,
          flicksControl: 0.584,
          nades: 0.372,

          tactics: 0.424,
        },
      },
      {
        name: 'LoseIt',
        contract: {salary: 0, start: '1', finish: '1'},
        status: 'active',
        stat: {
          role: 'support',
          reaction: 0.39,
          accuracy: 0.721,
          sprayControl: 0.655,
          flicksControl: 0.342,
          nades: 0.607,

          tactics: 0.877,
        },
      },
    ],
  },
  {
    name: 'Canoe',
    bank: {
      cash: rules.teamMoneyDefault,
    },
    ratingHistory: [],
    yourTeam: false,
    players: [
      {
        name: 'Rosh',
        contract: {salary: 0, start: '1', finish: '1'},
        status: 'active',
        stat: {
          role: 'capitan',
          reaction: 0.365,
          accuracy: 0.622,
          sprayControl: 0.876,
          flicksControl: 0.374,
          nades: 0.637,

          tactics: 0.639,
        },
      },
      {
        name: 'Chellen',
        contract: {salary: 0, start: '1', finish: '1'},
        status: 'active',
        stat: {
          role: 'rifler',
          reaction: 0.21,
          accuracy: 0.345,
          sprayControl: 0.854,
          flicksControl: 0.603,
          nades: 0.603,

          tactics: 0.579,
        },
      },
      {
        name: 'Chin',
        contract: {salary: 0, start: '1', finish: '1'},
        status: 'active',
        stat: {
          role: 'rifler',
          reaction: 0.416,
          accuracy: 0.457,
          sprayControl: 0.793,
          flicksControl: 0.419,
          nades: 0.575,

          tactics: 0.847,
        },
      },
      {
        name: 'Tatam',
        contract: {salary: 0, start: '1', finish: '1'},
        status: 'active',
        stat: {
          role: 'sniper',
          reaction: 0.408,
          accuracy: 0.67,
          sprayControl: 0.451,
          flicksControl: 0.475,
          nades: 0.535,

          tactics: 0.595,
        },
      },
      {
        name: 'Aziraphale',
        contract: {salary: 0, start: '1', finish: '1'},
        status: 'active',
        stat: {
          role: 'support',
          reaction: 0.303,
          accuracy: 0.702,
          sprayControl: 0.374,
          flicksControl: 0.55,
          nades: 0.671,

          tactics: 0.811,
        },
      },
    ],
  },
  {
    name: 'Sempra',
    bank: {
      cash: rules.teamMoneyDefault,
    },
    ratingHistory: [],
    yourTeam: false,
    players: [
      {
        name: 'FGod',
        contract: {salary: 0, start: '1', finish: '1'},
        status: 'active',
        stat: {
          role: 'capitan',
          reaction: 0.357,
          accuracy: 0.331,
          sprayControl: 0.843,
          flicksControl: 0.897,
          nades: 0.786,

          tactics: 0.9,
        },
      },
      {
        name: 'Cicada',
        contract: {salary: 0, start: '1', finish: '1'},
        status: 'active',
        stat: {
          role: 'rifler',
          reaction: 0.472,
          accuracy: 0.521,
          sprayControl: 0.787,
          flicksControl: 0.401,
          nades: 0.617,

          tactics: 0.399,
        },
      },
      {
        name: 'Stoic',
        contract: {salary: 0, start: '1', finish: '1'},
        status: 'active',
        stat: {
          role: 'rifler',
          reaction: 0.412,
          accuracy: 0.34,
          sprayControl: 0.812,
          flicksControl: 0.864,
          nades: 0.778,

          tactics: 0.552,
        },
      },
      {
        name: 'Somewhere',
        contract: {salary: 0, start: '1', finish: '1'},
        status: 'active',
        stat: {
          role: 'sniper',
          reaction: 0.492,
          accuracy: 0.587,
          sprayControl: 0.709,
          flicksControl: 0.533,
          nades: 0.625,

          tactics: 0.441,
        },
      },
      {
        name: 'Tabar',
        contract: {salary: 0, start: '1', finish: '1'},
        status: 'active',
        stat: {
          role: 'support',
          reaction: 0.329,
          accuracy: 0.434,
          sprayControl: 0.459,
          flicksControl: 0.59,
          nades: 0.611,

          tactics: 0.764,
        },
      },
    ],
  },
  {
    name: 'Solid',
    bank: {
      cash: rules.teamMoneyDefault,
    },
    ratingHistory: [],
    yourTeam: false,
    players: [
      {
        name: 'Omega',
        contract: {salary: 0, start: '1', finish: '1'},
        status: 'active',
        stat: {
          role: 'capitan',
          reaction: 0.382,
          accuracy: 0.895,
          sprayControl: 0.368,
          flicksControl: 0.331,
          nades: 0.516,

          tactics: 0.9,
        },
      },
      {
        name: 'Timely',
        contract: {salary: 0, start: '1', finish: '1'},
        status: 'active',
        stat: {
          role: 'rifler',
          reaction: 0.374,
          accuracy: 0.442,
          sprayControl: 0.433,
          flicksControl: 0.656,
          nades: 0.769,

          tactics: 0.327,
        },
      },
      {
        name: 'Rock',
        contract: {salary: 0, start: '1', finish: '1'},
        status: 'active',
        stat: {
          role: 'rifler',
          reaction: 0.485,
          accuracy: 0.861,
          sprayControl: 0.392,
          flicksControl: 0.511,
          nades: 0.314,

          tactics: 0.856,
        },
      },
      {
        name: 'Sound',
        contract: {salary: 0, start: '1', finish: '1'},
        status: 'active',
        stat: {
          role: 'sniper',
          reaction: 0.258,
          accuracy: 0.727,
          sprayControl: 0.494,
          flicksControl: 0.385,
          nades: 0.572,

          tactics: 0.881,
        },
      },
      {
        name: 'Firemane',
        contract: {salary: 0, start: '1', finish: '1'},
        status: 'active',
        stat: {
          role: 'support',
          reaction: 0.476,
          accuracy: 0.824,
          sprayControl: 0.786,
          flicksControl: 0.479,
          nades: 0.801,

          tactics: 0.673,
        },
      },
    ],
  },
  {
    name: 'Island',
    bank: {
      cash: rules.teamMoneyDefault,
    },
    ratingHistory: [],
    yourTeam: false,
    players: [
      {
        name: 'Peace',
        contract: {salary: 0, start: '1', finish: '1'},
        status: 'active',
        stat: {
          role: 'capitan',
          reaction: 0.438,
          accuracy: 0.774,
          sprayControl: 0.834,
          flicksControl: 0.764,
          nades: 0.88,

          tactics: 0.833,
        },
      },
      {
        name: 'Chicago',
        contract: {salary: 0, start: '1', finish: '1'},
        status: 'active',
        stat: {
          role: 'rifler',
          reaction: 0.314,
          accuracy: 0.443,
          sprayControl: 0.657,
          flicksControl: 0.642,
          nades: 0.318,

          tactics: 0.447,
        },
      },
      {
        name: 'Percent',
        contract: {salary: 0, start: '1', finish: '1'},
        status: 'active',
        stat: {
          role: 'rifler',
          reaction: 0.491,
          accuracy: 0.571,
          sprayControl: 0.439,
          flicksControl: 0.683,
          nades: 0.698,

          tactics: 0.896,
        },
      },
      {
        name: 'Invisible',
        contract: {salary: 0, start: '1', finish: '1'},
        status: 'active',
        stat: {
          role: 'sniper',
          reaction: 0.214,
          accuracy: 0.561,
          sprayControl: 0.492,
          flicksControl: 0.821,
          nades: 0.388,

          tactics: 0.622,
        },
      },
      {
        name: 'Ouroboros',
        contract: {salary: 0, start: '1', finish: '1'},
        status: 'active',
        stat: {
          role: 'support',
          reaction: 0.319,
          accuracy: 0.496,
          sprayControl: 0.892,
          flicksControl: 0.481,
          nades: 0.517,

          tactics: 0.439,
        },
      },
    ],
  },
  {
    name: 'Kadagan',
    bank: {
      cash: rules.teamMoneyDefault,
    },
    ratingHistory: [],
    yourTeam: false,
    players: [
      {
        name: 'Uppper',
        contract: {salary: 0, start: '1', finish: '1'},
        status: 'active',
        stat: {
          role: 'capitan',
          reaction: 0.338,
          accuracy: 0.821,
          sprayControl: 0.348,
          flicksControl: 0.542,
          nades: 0.467,

          tactics: 0.371,
        },
      },
      {
        name: 'SuperFrag',
        contract: {salary: 0, start: '1', finish: '1'},
        status: 'active',
        stat: {
          role: 'rifler',
          reaction: 0.279,
          accuracy: 0.835,
          sprayControl: 0.324,
          flicksControl: 0.587,
          nades: 0.446,

          tactics: 0.651,
        },
      },
      {
        name: 'Catcher',
        contract: {salary: 0, start: '1', finish: '1'},
        status: 'active',
        stat: {
          role: 'rifler',
          reaction: 0.323,
          accuracy: 0.35,
          sprayControl: 0.861,
          flicksControl: 0.616,
          nades: 0.71,

          tactics: 0.695,
        },
      },
      {
        name: 'Kipito',
        contract: {salary: 0, start: '1', finish: '1'},
        status: 'active',
        stat: {
          role: 'sniper',
          reaction: 0.292,
          accuracy: 0.34,
          sprayControl: 0.529,
          flicksControl: 0.373,
          nades: 0.453,

          tactics: 0.64,
        },
      },
      {
        name: 'Salute',
        contract: {salary: 0, start: '1', finish: '1'},
        status: 'active',
        stat: {
          role: 'support',
          reaction: 0.332,
          accuracy: 0.658,
          sprayControl: 0.376,
          flicksControl: 0.686,
          nades: 0.492,

          tactics: 0.33,
        },
      },
    ],
  },
  {
    name: 'Jupiter',
    bank: {
      cash: rules.teamMoneyDefault,
    },
    ratingHistory: [],
    yourTeam: false,
    players: [
      {
        name: 'Leon',
        contract: {salary: 0, start: '1', finish: '1'},
        status: 'active',
        stat: {
          role: 'capitan',
          reaction: 0.355,
          accuracy: 0.627,
          sprayControl: 0.743,
          flicksControl: 0.752,
          nades: 0.843,

          tactics: 0.56,
        },
      },
      {
        name: 'Kosus',
        contract: {salary: 0, start: '1', finish: '1'},
        status: 'active',
        stat: {
          role: 'rifler',
          reaction: 0.213,
          accuracy: 0.785,
          sprayControl: 0.597,
          flicksControl: 0.355,
          nades: 0.704,

          tactics: 0.766,
        },
      },
      {
        name: 'TheOwl',
        contract: {salary: 0, start: '1', finish: '1'},
        status: 'active',
        stat: {
          role: 'rifler',
          reaction: 0.221,
          accuracy: 0.699,
          sprayControl: 0.892,
          flicksControl: 0.657,
          nades: 0.594,

          tactics: 0.48,
        },
      },
      {
        name: 'Mandarin',
        contract: {salary: 0, start: '1', finish: '1'},
        status: 'active',
        stat: {
          role: 'sniper',
          reaction: 0.431,
          accuracy: 0.541,
          sprayControl: 0.661,
          flicksControl: 0.648,
          nades: 0.66,

          tactics: 0.696,
        },
      },
      {
        name: 'Raven',
        contract: {salary: 0, start: '1', finish: '1'},
        status: 'active',
        stat: {
          role: 'support',
          reaction: 0.359,
          accuracy: 0.588,
          sprayControl: 0.346,
          flicksControl: 0.492,
          nades: 0.313,

          tactics: 0.73,
        },
      },
    ],
  },
];

export default teamsDefault;
