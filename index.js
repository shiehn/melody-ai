const { sdk, ux } = require("@cto.ai/sdk");

async function main() {
  const listQuestions = [
    {
      type: "list",
      name: "list",
      message: `\nWhat impact is the incident having ${ux.colors.reset.green(
        "→"
      )}`,
      choices: [
        "Amaj",
        "Bmaj",
        "Cmaj",
        "Dmaj",
        "Emaj",
        "Fmaj",
        "Gmaj",
        "Amin",
        "Bmin",
        "Cmin",
        "Dmin",
        "Emin",
        "Fmin",
        "Gmin"
      ],
      afterMessage: `${ux.colors.reset.green("✓")} Incident added!`
    }
  ];

  let chordSequence = [];

  for (var i = 0; i < 3; i++) {
    const { list } = await ux.prompt(listQuestions);

    chordSequence.push(list);
  }

  console.log("OUTPUT", chordSequence);

  // sdk.exec(
  //   "java -jar /chords-to-melody-generator/target/chords-to-melody-generator-1.5.1.RELEASE.jar -mode=melody -chords=31^313*313*313*313*613*613*715*715*"
  // );

  /*
  const res = await sdk.user().catch(err => console.log(err));
  const person = res && res.me ? `, ${res.me.username}` : " there";
  const greeting = `\n👋 Hi${person}! This template will run the demo for CTO.ai CLI SDK where you'll see some basic interactions that are included. This will allow you to easily create a simple-to-use automation.`;

  sdk.log(greeting);
*/
  //require("./demo");
}

main();
