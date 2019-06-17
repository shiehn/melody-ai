const { sdk, ux } = require("@cto.ai/sdk");

async function main() {
  let afterCount = 1;

  const keys = [
    {
      type: "list",
      name: "list",
      message: `\nSELECT A KEY ${ux.colors.reset.green("→")}`,
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
      )} KEY OF ${afterCount} SELECTED!`
    }
  ];

  const { list } = await ux.prompt(keys);

  let formattedKey = list
    /*MAJOR CHORDS*/
    .replace(/Amaj/g, "11")
    .replace(/Bmaj/g, "21")
    .replace(/Cmaj/g, "31")
    .replace(/Dmaj/g, "41")
    .replace(/Emaj/g, "51")
    .replace(/Fmaj/g, "61")
    .replace(/Gmaj/g, "71")
    /*MINOR CORDS*/
    .replace(/Amin/g, "11")
    .replace(/Bmin/g, "21")
    .replace(/Cmin/g, "31")
    .replace(/Dmin/g, "41")
    .replace(/Emin/g, "51")
    .replace(/Fmin/g, "61")
    .replace(/Gmin/g, "71");

  const chordRoots = [
    {
      type: "list",
      name: "root",
      message: `SELECT CHORD ROOT ${afterCount} ${ux.colors.reset.green("→")}`,
      choices: ["A", "B", "C", "D", "E", "F", "G"],
      afterMessage: `${ux.colors.reset.green(
        "✓"
      )} Chord Root ${afterCount} selected!`
    }
  ];

  const chordTypes = [
    {
      type: "list",
      name: "type",
      message: `\nSELECT CHORD TYPE ${afterCount} ${ux.colors.reset.green(
        "→"
      )}`,
      choices: ["maj", "min"],
      afterMessage: `${ux.colors.reset.green(
        "✓"
      )} Chord Type ${afterCount} selected!`
    }
  ];

  let chordSequence = [];

  for (var i = 0; i < 8; i++) {
    const { root } = await ux.prompt(chordRoots);

    const { type } = await ux.prompt(chordTypes);

    chordSequence.push(`${root}${type}`);

    afterCount = afterCount + 1;

    console.log("SEQUENCE", root);

    sdk.log(`So far your progression is: ${chordSequence.join("-")}`);
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

  let seq = formattedKey + "^" + chordSequence.join("*") + "*";
  let formatedSeq = seq
    /*MAJOR CHORDS*/
    .replace(/Amaj/g, "110")
    .replace(/Bmaj/g, "210")
    .replace(/Cmaj/g, "310")
    .replace(/Dmaj/g, "410")
    .replace(/Emaj/g, "510")
    .replace(/Fmaj/g, "610")
    .replace(/Gmaj/g, "710")
    /*MINOR CORDS*/
    .replace(/Amin/g, "111")
    .replace(/Bmin/g, "211")
    .replace(/Cmin/g, "311")
    .replace(/Dmin/g, "411")
    .replace(/Emin/g, "511")
    .replace(/Fmin/g, "611")
    .replace(/Gmin/g, "711");

  console.log("OUTPUT", formatedSeq);

  sdk.log("GENERATING 10 ROYALTY FREE MELODIES!!!");

  sdk.log(
    "Listen to your melodies by installing a player: 'brew install timidity'"
  );

  sdk.log(
    "Then find your MIDI files in the '/tmp' directory and play them with 'timidity /tmp/midi0.mid'"
  );

  sdk.exec(
    `java -jar /chords-to-melody-generator/target/chords-to-melody-generator-1.5.1.RELEASE.jar -mode=melody -chords=${formatedSeq}`
  );
}

main();
