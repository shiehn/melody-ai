const { ux, sdk } = require('@cto.ai/sdk')
const fuzzy = require('fuzzy')
const states = [
  'Alabama',
  'Alaska',
  'American Samoa',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'District Of Columbia',
  'Federated States Of Micronesia',
  'Florida',
  'Georgia',
  'Guam',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Marshall Islands',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Northern Mariana Islands',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Palau',
  'Pennsylvania',
  'Puerto Rico',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virgin Islands',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
]

const users = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: {
      street: 'Kulas Light',
      suite: 'Apt. 556',
      city: 'Gwenborough',
      zipcode: '92998-3874',
      geo: {
        lat: '-37.3159',
        lng: '81.1496',
      },
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
      name: 'Romaguera-Crona',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets',
    },
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
    address: {
      street: 'Victor Plains',
      suite: 'Suite 879',
      city: 'Wisokyburgh',
      zipcode: '90566-7771',
      geo: {
        lat: '-43.9509',
        lng: '-34.4618',
      },
    },
    phone: '010-692-6593 x09125',
    website: 'anastasia.net',
    company: {
      name: 'Deckow-Crist',
      catchPhrase: 'Proactive didactic contingency',
      bs: 'synergize scalable supply-chains',
    },
  },
  {
    id: 3,
    name: 'Clementine Bauch',
    username: 'Samantha',
    email: 'Nathan@yesenia.net',
    address: {
      street: 'Douglas Extension',
      suite: 'Suite 847',
      city: 'McKenziehaven',
      zipcode: '59590-4157',
      geo: {
        lat: '-68.6102',
        lng: '-47.0653',
      },
    },
    phone: '1-463-123-4447',
    website: 'ramiro.info',
    company: {
      name: 'Romaguera-Jacobson',
      catchPhrase: 'Face to face bifurcated interface',
      bs: 'e-enable strategic applications',
    },
  },
  {
    id: 4,
    name: 'Patricia Lebsack',
    username: 'Karianne',
    email: 'Julianne.OConner@kory.org',
    address: {
      street: 'Hoeger Mall',
      suite: 'Apt. 692',
      city: 'South Elvis',
      zipcode: '53919-4257',
      geo: {
        lat: '29.4572',
        lng: '-164.2990',
      },
    },
    phone: '493-170-9623 x156',
    website: 'kale.biz',
    company: {
      name: 'Robel-Corkery',
      catchPhrase: 'Multi-tiered zero tolerance productivity',
      bs: 'transition cutting-edge web services',
    },
  },
  {
    id: 5,
    name: 'Chelsey Dietrich',
    username: 'Kamren',
    email: 'Lucio_Hettinger@annie.ca',
    address: {
      street: 'Skiles Walks',
      suite: 'Suite 351',
      city: 'Roscoeview',
      zipcode: '33263',
      geo: {
        lat: '-31.8129',
        lng: '62.5342',
      },
    },
    phone: '(254)954-1289',
    website: 'demarco.info',
    company: {
      name: 'Keebler LLC',
      catchPhrase: 'User-centric fault-tolerant solution',
      bs: 'revolutionize end-to-end systems',
    },
  },
  {
    id: 6,
    name: 'Mrs. Dennis Schulist',
    username: 'Leopoldo_Corkery',
    email: 'Karley_Dach@jasper.info',
    address: {
      street: 'Norberto Crossing',
      suite: 'Apt. 950',
      city: 'South Christy',
      zipcode: '23505-1337',
      geo: {
        lat: '-71.4197',
        lng: '71.7478',
      },
    },
    phone: '1-477-935-8478 x6430',
    website: 'ola.org',
    company: {
      name: 'Considine-Lockman',
      catchPhrase: 'Synchronised bottom-line interface',
      bs: 'e-enable innovative applications',
    },
  },
  {
    id: 7,
    name: 'Kurtis Weissnat',
    username: 'Elwyn.Skiles',
    email: 'Telly.Hoeger@billy.biz',
    address: {
      street: 'Rex Trail',
      suite: 'Suite 280',
      city: 'Howemouth',
      zipcode: '58804-1099',
      geo: {
        lat: '24.8918',
        lng: '21.8984',
      },
    },
    phone: '210.067.6132',
    website: 'elvis.io',
    company: {
      name: 'Johns Group',
      catchPhrase: 'Configurable multimedia task-force',
      bs: 'generate enterprise e-tailers',
    },
  },
  {
    id: 8,
    name: 'Nicholas Runolfsdottir V',
    username: 'Maxime_Nienow',
    email: 'Sherwood@rosamond.me',
    address: {
      street: 'Ellsworth Summit',
      suite: 'Suite 729',
      city: 'Aliyaview',
      zipcode: '45169',
      geo: {
        lat: '-14.3990',
        lng: '-120.7677',
      },
    },
    phone: '586.493.6943 x140',
    website: 'jacynthe.com',
    company: {
      name: 'Abernathy Group',
      catchPhrase: 'Implemented secondary concept',
      bs: 'e-enable extensible e-tailers',
    },
  },
  {
    id: 9,
    name: 'Glenna Reichert',
    username: 'Delphine',
    email: 'Chaim_McDermott@dana.io',
    address: {
      street: 'Dayna Park',
      suite: 'Suite 449',
      city: 'Bartholomebury',
      zipcode: '76495-3109',
      geo: {
        lat: '24.6463',
        lng: '-168.8889',
      },
    },
    phone: '(775)976-6794 x41206',
    website: 'conrad.com',
    company: {
      name: 'Yost and Sons',
      catchPhrase: 'Switchable contextually-based project',
      bs: 'aggregate real-time technologies',
    },
  },
  {
    id: 10,
    name: 'Clementina DuBuque',
    username: 'Moriah.Stanton',
    email: 'Rey.Padberg@karina.biz',
    address: {
      street: 'Kattie Turnpike',
      suite: 'Suite 198',
      city: 'Lebsackbury',
      zipcode: '31428-2261',
      geo: {
        lat: '-38.2386',
        lng: '57.2232',
      },
    },
    phone: '024-648-3804',
    website: 'ambrose.net',
    company: {
      name: 'Hoeger LLC',
      catchPhrase: 'Centralized empowering task-force',
      bs: 'target end-to-end models',
    },
  },
]

const allColors = [
  'green',
  'blue',
  'yellow',
  'red',
  'black',
  'cyan',
  'white',
  'gray',
  'redBright',
  'greenBright',
  'yellowBright',
  'blueBright',
  'magentaBright',
  'cyanBright',
  'whiteBright',
  'bgBlack',
  'bgRed',
  'bgGreen',
  'bgYellow',
  'bgBlue',
  'bgMagenta',
  'bgCyan',
  'bgWhite',
  'bgBlackBright',
  'bgRedBright',
  'bgGreenBright',
  'bgYellowBright',
  'bgBlueBright',
  'bgMagentaBright',
  'bgCyanBright',
  'bgWhiteBright',
  'bold',
  'underline',
]

const promptsDescription = [
  `\nCreate prompts to capture information or details.`,
  ` Press enter for examples, type anything when asked, it's just for fun.`,
  `\n💬 ${ux.colors.bold(
    ux.colors.primary('Ask for information through a form:'),
  )}`,
].join('\n')

const inputQuestions = [
  {
    type: 'input',
    name: 'email',
    message: `\nPlease enter your email ${ux.colors.reset.green(
      '→',
    )}\n${ux.colors.white('Enter Email')}`,
    afterMessage: `${ux.colors.reset.green('✓')} Email`,
    afterMessageAppend: `${ux.colors.reset(' added!')}`,
  },
  {
    type: 'password',
    name: 'password',
    mask: '*',
    message: `\nLet's create a password next ${ux.colors.reset.green(
      '→',
    )}\n${ux.colors.white('Enter your password')}`,
    afterMessage: `${ux.colors.reset.green('✓')} Password added!`,
  },
]

const listQuestions = [
  {
    type: 'list',
    name: 'list',
    message: `\nWhat impact is the incident having ${ux.colors.reset.green(
      '→',
    )}`,
    choices: [
      'All customers are affected.',
      'Large segment of customers are affected.',
      'Small segment of customers are affected.',
      'Site performance degraded for some customers.',
      'Potential issue, but customers are currently unaware.',
      'All customers are affected.',
      'Large segment of customers are affected.',
      'Small segment of customers are affected.',
      'Site performance degraded for some customers.',
      'All customers are affected.',
      'Large segment of customers are affected.',
      'Small segment of customers are affected.',
      'Site performance degraded for some customers.',
    ],
    afterMessage: `${ux.colors.reset.green('✓')} Incident added!`,
  },
]

const confirmQuestions = [
  {
    type: 'confirm',
    name: 'confirm',
    message: `\nIs the incident closed ${ux.colors.reset.green('→')}\n\n`,
    afterMessage: `${ux.colors.reset.green('✓')} Confirmation`,
  },
]

const pressEnterToContinue = [
  {
    type: 'input',
    name: 'continue',
    message: `\nPress enter to continue →`,
    afterMessage: ' ',
    transformer: input => ' ',
  },
]

const fuzzySearchQuestions = [
  {
    type: 'autocomplete',
    name: 'autocomplete',
    message: `\nSelect a state to travel from ${ux.colors.reset.green('→')} `,
    source: (answers, input) => {
      input = input || ''
      return new Promise(function(resolve) {
        setTimeout(function() {
          var fuzzyResult = fuzzy.filter(input, states)
          resolve(
            fuzzyResult.map(function(el) {
              return el.original
            }),
          )
        })
      })
    },
    afterMessage: `${ux.colors.reset.green('✓')} State selected!`,
  },
]

const datePickerQuestions = [
  {
    type: 'datepicker',
    name: 'datepicker',
    message: `\nWhen are you going ${ux.colors.reset.green('→')}`,
    format: ['m', '/', 'd', '/', 'yy', ' ', 'h', ':', 'MM', ' ', 'TT'],
    afterMessage: `${ux.colors.reset.green('✓')} Date Selected`,
  },
]

const coloredTreeString = () => {
  const treeString = 'Colored Tree'
  let coloredString = ''
  for (let i = 0; i < treeString.length; i++) {
    const char = treeString.charAt(i)
    const color = randomColor()
    coloredString += color(char)
  }
  return coloredString
}
const randomColor = () => {
  return ux.colors[allColors[(allColors.length * Math.random()) << 0]]
}
const getColorsColor = index => {
  return ux.colors[allColors[index]](allColors[index])
}

const getArgs = argv => {
  return argv.slice(2, argv.length - 1).filter(arg => !arg.startsWith('-'))
}

const getFlags = argv => {
  return argv.filter(arg => arg.startsWith('-'))
}

const main = async () => {
  const argv = process.argv
  const arguments = argv && argv.length ? getArgs(argv) : []
  const flags = argv && argv.length ? getFlags(argv) : []

  // Trigger prompt
  // https://github.com/SBoudrias/Inquirer.js/#examples-run-it-and-see-it
  sdk.log(ux.colors.bold.underline('\n\n Prompts '))
  sdk.log(promptsDescription)

  // INPUT
  const { email, password } = await ux.prompt(inputQuestions)

  // LIST
  sdk.log(
    `\n💬 ${ux.colors.bold(
      ux.colors.primary('Create lists for users to select from:'),
    )}`,
  )
  const { list } = await ux.prompt(listQuestions)

  // CONFIRM
  sdk.log(
    `\n💬 ${ux.colors.bold(
      ux.colors.primary('Create boolean yes/no prompts:'),
    )}`,
  )
  const { confirm } = await ux.prompt(confirmQuestions)

  // FUZZY SEARCH
  sdk.log(
    `\n💬 ${ux.colors.bold(
      ux.colors.primary(
        'Add a fuzzy search feature to your lists! Try typing and using the arrow keys.',
      ),
    )}`,
  )
  const { autocomplete } = await ux.prompt(fuzzySearchQuestions)

  // DATE PICKER
  sdk.log(`\n💬 ${ux.colors.bold(ux.colors.primary('And specify times:'))}`)
  const { datepicker } = await ux.prompt(datePickerQuestions)

  // Trigger logs
  const logsSection = [
    `\nCreate logs of events to easily share through the CLI.`,
    `For example, here's the ${ux.colors.bold('Current User')}:\n`,
  ].join('\n')
  sdk.log(ux.colors.bold.underline('\n\n Logs '))
  sdk.log(logsSection)

  const currentUser = await sdk.user().catch(err => {
    sdk.log('unable to retrieve current user')
  })
  sdk.log(currentUser)
  sdk.track(['demo', 'track'], {
    currentUser,
    answers: { email, password, list, autocomplete, datepicker },
  })
  await ux.prompt(pressEnterToContinue)

  // Trigger spinner and progress bar
  const progressIndicatorsSection = [
    '\nAdd spinners & progress bars to your Op',
    ' to keep your users informed that a process is taking place.\n',
  ].join('')
  sdk.log(ux.colors.bold.underline('\n Progress Indicators '))
  sdk.log(progressIndicatorsSection)

  ux.spinner.start(ux.colors.blue(' Computing UX'))
  // Wait
  // https://github.com/oclif/cli-ux#clitable
  await ux.wait(2000)
  ux.spinner.stop(ux.colors.green('Done!'))

  // Progress Bar
  // https://github.com/AndiDittrich/Node.CLI-Progress#usage
  sdk.log(
    ux.colors.white('\n Downloading'),
    ux.colors.callOutCyan('Ops CLI 0.1.5'),
  )
  const bar1 = ux.progress.init()
  bar1.start(200, 0)
  for (let i = 0; i < 100; i++) {
    bar1.update((i + 1) * 2)
    await ux.wait(25)
  }
  bar1.stop()
  await ux.prompt(pressEnterToContinue)

  // Url
  // https://github.com/oclif/cli-ux#cliurltext-uri
  sdk.log(ux.colors.bold.underline('\n Url '))
  sdk.log(
    `\nLink users to relevant data directly from the command line for users to click.\n`,
  )
  sdk.log(ux.url('cto.ai', 'https://cto.ai'))
  await ux.prompt(pressEnterToContinue)

  // Table
  // https://github.com/oclif/cli-ux#clitable
  sdk.log(ux.colors.bold.underline('\n Table '))
  sdk.log(`\nAdd tables to display information in a neat and organized way.\n`)
  ux.table(users, {
    name: { header: '🙎‍ Name' },
    company: {
      header: '🏢 Company',
      get: row => row.company && row.company.name,
    },
    id: { header: '🆔' },
  })
  await ux.prompt(pressEnterToContinue)

  // Tree && Colors
  // https://github.com/chalk/chalk
  // https://github.com/oclif/cli-ux#clitree
  let tree = ux.tree()
  tree.insert(coloredTreeString())
  for (let i = 0; i < allColors.length; i++) {
    tree.nodes[Object.keys(tree.nodes)[0]].insert(getColorsColor(i))
  }
  sdk.log(ux.colors.bold.underline('\n Colors & Tree Structures '))
  sdk.log(
    `\nAdd colous to customizable text to indicate importance and/or action.\n`,
  )
  tree.display()

  await ux.prompt(pressEnterToContinue)
  sdk.log(
    `🏁 That's it! All these components can be found within the demo.js folder of the op.\n`,
  )
}

main()
