const { sdk, ux } = require("@cto.ai/sdk");

async function main() {
  let afterCount = 1;
  const listQuestions = [
    {
      type: "list",
      name: "list",
      message: `\nSELECT CHORD NUMBER ${afterCount} ${ux.colors.reset.green(
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
      afterMessage: `${ux.colors.reset.green(
        "✓"
      )} Chord ${afterCount} slelected!`
    }
  ];

  let chordSequence = [];

  for (var i = 0; i < 8; i++) {
    const { list } = await ux.prompt(listQuestions);

    chordSequence.push(list);

    afterCount++;
  }

  /*
  NOTES: 
0 | Rest
1 | a
2 | b
3 | c
4 | d
5 | e
6 | f
7 | g

  FLAT/NATURAL/SHARP
0 - FLAT | 1 - NATURAL | 2 - SHARP

  CHORD TYPES
0 | maj
1 | min
*/

  let seq = "31^" + chordSequence.join("-");
  let formatedSeq = seq
    .replace("Amaj", "110")
    .replace("Bmaj", "210")
    .replace("Cmaj", "310")
    .replace("Dmaj", "410")
    .replace("Emaj", "510")
    .replace("Fmaj", "610")
    .replace("Gmaj", "710")

    .replace("Amin", "111")
    .replace("Bmin", "211")
    .replace("Cmin", "311")
    .replace("Dmin", "411")
    .replace("Emin", "511")
    .replace("Fmin", "611")
    .replace("Gmin", "711");

  console.log("OUTPUT", formatedSeq);

  console.log("GENERATING 10 MELODIES!!");

  sdk.exec(
    "java -jar /chords-to-melody-generator/target/chords-to-melody-generator-1.5.1.RELEASE.jar -mode=melody -chords=31^313*313*313*313*613*613*715*715*"
  );
}

main();
