import axios from "axios";
import {writeFileSync} from 'fs';

type Input = { name: string; url: string };
type Output = { name: string; data: string };

const data = {
  DC: [
    {
      name: "AQUAMAN",
      url: "https://yoolk.ninja/wp-content/uploads/2019/07/dc-aquaman-1024x819.png",
    },
    {
      name: "BATMAN",
      url: "https://yoolk.ninja/wp-content/uploads/2019/07/DC-Comics-batman-1024x819.png",
    },
    {
      name: "BRAINIAC",
      url: "https://yoolk.ninja/wp-content/uploads/2019/07/dc-brainiac-1024x819.png",
    },
    {
      name: "CATWOMAN",
      url: "https://yoolk.ninja/wp-content/uploads/2021/03/DC-Comics-Catwoman-2-1024x819.png",
    },
    {
      name: "CYBORG",
      url: "https://yoolk.ninja/wp-content/uploads/2019/07/DC-Comics-Cyborg-1024x819.png",
    },
    {
      name: "DARKSEID",
      url: "https://yoolk.ninja/wp-content/uploads/2021/03/DC-Comics-Darkseid-1-1024x819.png",
    },
    {
      name: "DEADMAN",
      url: "https://yoolk.ninja/wp-content/uploads/2019/07/dc-deadman-1024x819.png",
    },
    {
      name: "DEATHSTROKE",
      url: "https://yoolk.ninja/wp-content/uploads/2021/03/DC-Comics-Deathstroke-1024x819.png",
    },
    {
      name: "DR FATE",
      url: "https://yoolk.ninja/wp-content/uploads/2021/03/DC-Comics-Dr-Fate-1024x819.png",
    },
    {
      name: "FLASH",
      url: "https://yoolk.ninja/wp-content/uploads/2019/07/dc-flash-1024x819.png",
    },
    {
      name: "GREEN LANTERN",
      url: "https://yoolk.ninja/wp-content/uploads/2021/03/DC-Comics-Green-Lantern-1024x819.png",
    },
    {
      name: "HARLEY QUEEN",
      url: "https://yoolk.ninja/wp-content/uploads/2021/03/DC-Comics-Harley-Queen-1024x819.png",
    },
    {
      name: "JOKER",
      url: "https://yoolk.ninja/wp-content/uploads/2019/07/dc-joker-alt-1-1024x819.png",
    },
    {
      name: "KALIBAK",
      url: "https://yoolk.ninja/wp-content/uploads/2021/03/DC-Comics-Kalibak-1024x819.png",
    },
    {
      name: "MARTIAN MANHUNTER",
      url: "https://yoolk.ninja/wp-content/uploads/2021/03/DC-Comics-Martian-Manhunter-2-1024x819.png",
    },
    {
      name: "MR FREEZE",
      url: "https://yoolk.ninja/wp-content/uploads/2019/07/dc-mr-freeze-1024x819.png",
    },
    {
      name: "MR MIRACLE",
      url: "https://yoolk.ninja/wp-content/uploads/2021/03/DC-Comics-Mr-Miracle-1024x819.png",
    },
    {
      name: "ORION",
      url: "https://yoolk.ninja/wp-content/uploads/2021/03/DC-Comics-Orion-1024x819.png",
    },
    {
      name: "PEACEMAKER",
      url: "https://yoolk.ninja/wp-content/uploads/2022/02/DC-Peacemaker-1024x819.png",
    },
    {
      name: "PENGUIN",
      url: "https://yoolk.ninja/wp-content/uploads/2019/07/dc-penguin-1024x819.png",
    },
    {
      name: "PLASTIC MAN",
      url: "https://yoolk.ninja/wp-content/uploads/2021/04/DC-Comics-PlasticMan-1024x819.png",
    },
    {
      name: "RED TORNADO",
      url: "https://yoolk.ninja/wp-content/uploads/2021/03/DC-Comics-Red-Tornado-1024x819.png",
    },
    {
      name: "SHAZAM!",
      url: "https://yoolk.ninja/wp-content/uploads/2019/07/dc-shazam-1024x819.png",
    },
    {
      name: "SPACE GHOST",
      url: "https://yoolk.ninja/wp-content/uploads/2022/04/DC-Space-Ghost-1024x819.png",
    },
    {
      name: "SUPERMAN",
      url: "https://yoolk.ninja/wp-content/uploads/2019/07/DC-Comics-Superman-1024x819.png",
    },
    {
      name: "WONDER WOMAN",
      url: "https://yoolk.ninja/wp-content/uploads/2021/03/DC-Comics-Wonder-Woman-1024x819.png",
    },
  ],
  MARVEL: [
    {
      name: "ABOMINATION",
      url: "https://yoolk.ninja/wp-content/uploads/2020/12/Marvel-Abomination-1024x819.png",
    },
    {
      name: "ADAM WARLOCK",
      url: "https://yoolk.ninja/wp-content/uploads/2019/07/Marvel-GOTG-Adam-Warlock-1024x819.png",
    },
    {
      name: "ANGEL",
      url: "https://yoolk.ninja/wp-content/uploads/2019/07/Marvel-Angel-1024x819.png",
    },
    {
      name: "ANNIHILUS",
      url: "https://yoolk.ninja/wp-content/uploads/2020/05/marvel-Annihilus-1024x819.png",
    },
    {
      name: "ANT-MAN",
      url: "https://yoolk.ninja/wp-content/uploads/2020/11/marvel-Ant-Man-1024x819.png",
    },
    {
      name: "APOCALYPSE",
      url: "https://yoolk.ninja/wp-content/uploads/2019/07/Marvel-Apocalypse-v23-1024x819.png",
    },
    {
      name: "BARON ZEMO",
      url: "https://yoolk.ninja/wp-content/uploads/2021/07/Marvel-Baron-Zemo-1024x819.png",
    },
    {
      name: "BEAST",
      url: "https://yoolk.ninja/wp-content/uploads/2019/07/marvel-Beast-1024x819.png",
    },
    {
      name: "BETA RAY BILL",
      url: "https://yoolk.ninja/wp-content/uploads/2022/10/Marvel-BetaRayBill-1-1024x819.png",
    },
    {
      name: "BLACK BOLT",
      url: "https://yoolk.ninja/wp-content/uploads/2020/11/marvel-inhumans-Blackbolt-1024x819.png",
    },
    {
      name: "BLACK CAT",
      url: "https://yoolk.ninja/wp-content/uploads/2019/07/Marvel-BlackCat-1024x819.png",
    },
    {
      name: "BLACK PANTHER",
      url: "https://yoolk.ninja/wp-content/uploads/2019/07/marvel-black-panther-1024x819.png",
    },
    {
      name: "BLACK WIDOW",
      url: "https://yoolk.ninja/wp-content/uploads/2019/07/Marvel-Black-Widow-1024x819.png",
    },
    {
      name: "BLIZZARD",
      url: "https://yoolk.ninja/wp-content/uploads/2020/12/marvel-Blizzard-1024x819.png",
    },
    {
      name: "BULLSEYE",
      url: "https://yoolk.ninja/wp-content/uploads/2020/05/marvel-Bullseye-1024x819.png",
    },
    {
      name: "CABLE",
      url: "https://yoolk.ninja/wp-content/uploads/2019/07/Marvel-Cable-1024x819.png",
    },
    {
      name: "CAPTAIN AMERICA",
      url: "https://yoolk.ninja/wp-content/uploads/2019/07/marvel-captain-america-1024x819.png",
    },
    {
      name: "CAPTAIN BRITAIN",
      url: "https://yoolk.ninja/wp-content/uploads/2020/12/marvel-captain-britain-1024x819.png",
    },
    {
      name: "CHARLIE 27",
      url: "https://yoolk.ninja/wp-content/uploads/2021/07/Marvel-Charlie27-1024x819.png",
    },
    {
      name: "CLOAK",
      url: "https://yoolk.ninja/wp-content/uploads/2021/03/marvel-cloak-1-1024x819.png",
    },
    {
      name: "COLOSSUS",
      url: "https://yoolk.ninja/wp-content/uploads/2019/07/marvel-colossus-1-1024x819.png",
    },
    {
      name: "CYCLOPS",
      url: "https://yoolk.ninja/wp-content/uploads/2019/07/Marvel-Cyclops-origin4-1024x819.png",
    },
    {
      name: "NEWCYCLOPS (MARVEL NOW VER.)",
      url: "https://yoolk.ninja/wp-content/uploads/2024/05/Marvel-Cyclops-MarvelNow.png",
    },
    {
      name: "NEWCYCLOPS (X-MEN ’97 VER.)",
      url: "https://yoolk.ninja/wp-content/uploads/2024/05/Marvel-Cyclops-x-men97.png",
    },
    {
      name: "DAGGER",
      url: "https://yoolk.ninja/wp-content/uploads/2021/03/Marvel-Dagger-2-1024x819.png",
    },
    {
      name: "DAREDEVIL",
      url: "https://yoolk.ninja/wp-content/uploads/2019/07/Marvel-Daredevil-1024x819.png",
    },
    {
      name: "DEADPOOL",
      url: "https://yoolk.ninja/wp-content/uploads/2019/07/Marvel-Deadpool-1-1024x819.png",
    },
    {
      name: "DR DOOM",
      url: "https://yoolk.ninja/wp-content/uploads/2019/07/Marvel-Dr-Doom-1-1024x819.png",
    },
    {
      name: "DR OCTOPUS",
      url: "https://yoolk.ninja/wp-content/uploads/2019/07/Marvel-Spiderman-Dr-Octopus-1024x819.png",
    },
    {
      name: "DR STRANGE",
      url: "https://yoolk.ninja/wp-content/uploads/2019/07/Marvel-DrStrange-1024x819.png",
    },
    {
      name: "DRAX THE DESTROYER",
      url: "https://yoolk.ninja/wp-content/uploads/2020/12/marvel-drax-the-destroyer-1024x819.png",
    },
    {
      name: "ELECTRO",
      url: "https://yoolk.ninja/wp-content/uploads/2019/07/Marvel-Electro-1024x819.png",
    },
    {
      name: "ELEKTRA",
      url: "https://yoolk.ninja/wp-content/uploads/2019/07/Marvel-Elektra-1-1024x819.png",
    },
    {
      name: "FALCON",
      url: "https://yoolk.ninja/wp-content/uploads/2022/10/Marvel-Falcon-1024x819.png",
    },
    {
      name: "GALACTUS",
      url: "https://yoolk.ninja/wp-content/uploads/2020/05/Marvel-Galactus-1024x819.png",
    },
    {
      name: "GALACTUS (SURFER VER.)",
      url: "https://yoolk.ninja/wp-content/uploads/2020/05/Marvel-Galactus-Alt-1024x819.png",
    },
    {
      name: "GAMORA",
      url: "https://yoolk.ninja/wp-content/uploads/2020/05/Marvel-Gamora2-1024x819.png",
    },
    {
      name: "GHOST RIDER",
      url: "https://yoolk.ninja/wp-content/uploads/2020/11/marvel-Ghost-Rider-1-1024x819.png",
    },
    {
      name: "GIRAUD",
      url: "https://yoolk.ninja/wp-content/uploads/2021/10/Marvel-Giraud-1024x819.png",
    },
    {
      name: "GLADIATOR",
      url: "https://yoolk.ninja/wp-content/uploads/2020/12/marvel-gladiator-1024x819.png",
    },
    {
      name: "GREEN GOBLIN",
      url: "https://yoolk.ninja/wp-content/uploads/2019/07/Marvel-Green-Goblin-1024x819.png",
    },
    {
      name: "NEWGROOT",
      url: "https://yoolk.ninja/wp-content/uploads/2024/05/Marvel-Groot-1.png",
    },
    {
      name: "GUARDIAN",
      url: "https://yoolk.ninja/wp-content/uploads/2020/11/marvel-AlphaFlight-Guardian-1024x819.png",
    },
    {
      name: "HAVOK",
      url: "https://yoolk.ninja/wp-content/uploads/2019/07/Marvel-Havok-1024x819.png",
    },
    {
      name: "HAWKEYE",
      url: "https://yoolk.ninja/wp-content/uploads/2019/07/Marvel-Hawkeye-1024x819.png",
    },
    {
      name: "HULK",
      url: "https://yoolk.ninja/wp-content/uploads/2019/07/Marvel-Hulk-1024x819.png",
    },
    {
      name: "HUMAN TORCH",
      url: "https://yoolk.ninja/wp-content/uploads/2019/07/marvel-human-torch-1024x819.png",
    },
    {
      name: "ICEMAN",
      url: "https://yoolk.ninja/wp-content/uploads/2019/07/Marvel-Iceman2-1024x819.png",
    },
    {
      name: "INVISIBLE WOMAN",
      url: "https://yoolk.ninja/wp-content/uploads/2019/07/Marvel-invisible-woman-1024x819.png",
    },
    {
      name: "IRON FIST",
      url: "https://yoolk.ninja/wp-content/uploads/2019/07/Marvel-Iron-Fist-1024x819.png",
    },
    {
      name: "IRON MAN",
      url: "https://yoolk.ninja/wp-content/uploads/2019/07/Marvel-Iron-Man-1024x819.png",
    },
    {
      name: "JUGGERNAUT",
      url: "https://yoolk.ninja/wp-content/uploads/2019/07/Marvel-Juggernaut-v2-1024x819.png",
    },
    {
      name: "KANG",
      url: "https://yoolk.ninja/wp-content/uploads/2020/12/marvel-Kang-1024x819.png",
    },
    {
      name: "KLAW",
      url: "https://yoolk.ninja/wp-content/uploads/2019/07/marvel-klaw-1-1024x819.png",
    },
    {
      name: "KRAVEN THE HUNTER",
      url: "https://yoolk.ninja/wp-content/uploads/2021/10/Marvel-Kraven-The-Hunterfla-1024x819.png",
    },
    {
      name: "KRUGARR",
      url: "https://yoolk.ninja/wp-content/uploads/2021/10/Marvel-Krugarr-1024x819.png",
    },
    {
      name: "LEADER",
      url: "https://yoolk.ninja/wp-content/uploads/2020/05/marvel-leader-1-1024x819.png",
    },
    {
      name: "LOKI",
      url: "https://yoolk.ninja/wp-content/uploads/2020/12/marvel-Loki-1024x819.png",
    },
    {
      name: "MACHINE MAN",
      url: "https://yoolk.ninja/wp-content/uploads/2021/08/Marvel-Machine-Man-1024x819.png",
    },
    {
      name: "MAGNETO",
      url: "https://yoolk.ninja/wp-content/uploads/2019/07/marvel-Magneto-1024x819.png",
    },
    {
      name: "MAR-VELL",
      url: "https://yoolk.ninja/wp-content/uploads/2020/12/marvel-Mar-Vell-1024x819.png",
    },
    {
      name: "MARVEL GIRL",
      url: "https://yoolk.ninja/wp-content/uploads/2019/07/Marvel-MarvelGirl-1024x819.png",
    },
    {
      name: "NEWMEDUSA",
      url: "https://yoolk.ninja/wp-content/uploads/2024/05/Marvel-Medusa.png",
    },
    {
      name: "MEPHISTO",
      url: "https://yoolk.ninja/wp-content/uploads/2020/12/marvel-Mephisto-1024x819.png",
    },
    {
      name: "MODOK",
      url: "https://yoolk.ninja/wp-content/uploads/2019/07/Marvel-Modok-1024x819.png",
    },
    {
      name: "MOON KNIGHT",
      url: "https://yoolk.ninja/wp-content/uploads/2022/03/Marvel-Moonknight-1024x819.png",
    },
    {
      name: "MOONDRAGON",
      url: "https://yoolk.ninja/wp-content/uploads/2022/10/Marvel-MoonDragon-1024x819.png",
    },
    {
      name: "MR FANTASTIC",
      url: "https://yoolk.ninja/wp-content/uploads/2019/08/Marvel-MrFantastic-1024x819.png",
    },
    {
      name: "MR SINISTER",
      url: "https://yoolk.ninja/wp-content/uploads/2020/12/marvel-mr-sinister-1024x819.png",
    },
    {
      name: "MS MARVEL",
      url: "https://yoolk.ninja/wp-content/uploads/2021/03/Marvel-Ms-Marvel-1024x819.png",
    },
    {
      name: "MYSTERIO",
      url: "https://yoolk.ninja/wp-content/uploads/2020/05/marvel-Misterio-1024x819.png",
    },
    {
      name: "MYSTIC",
      url: "https://yoolk.ninja/wp-content/uploads/2021/03/Marvel-Mystique-1024x819.png",
    },
    {
      name: "NAMOR",
      url: "https://yoolk.ninja/wp-content/uploads/2020/12/marvel-Namor-1024x819.png",
    },
    {
      name: "NEBULA",
      url: "https://yoolk.ninja/wp-content/uploads/2021/07/Marvel-Nebula-1-1024x819.png",
    },
    {
      name: "NIGHTCRAWLER",
      url: "https://yoolk.ninja/wp-content/uploads/2020/12/marvel-Nightcrawler-1024x819.png",
    },
    {
      name: "NIMROD",
      url: "https://yoolk.ninja/wp-content/uploads/2020/12/Marvel-Nimrod-1024x819.png",
    },
    {
      name: "NOVA",
      url: "https://yoolk.ninja/wp-content/uploads/2020/05/Marvel-Nova-New-arriors-1024x819.png",
    },
    {
      name: "PHOENIX",
      url: "https://yoolk.ninja/wp-content/uploads/2019/07/Marvel-Phoenix-1-1024x819.png",
    },
    {
      name: "PROFESSOR X",
      url: "https://yoolk.ninja/wp-content/uploads/2020/05/Marvel-1stXMen-Professor-X-1024x819.png",
    },
    {
      name: "PROFESSOR X CEREBRO VER.",
      url: "https://yoolk.ninja/wp-content/uploads/2020/05/Marvel-Professor-X-Cerebro-1024x819.png",
    },
    {
      name: "PUNISHER",
      url: "https://yoolk.ninja/wp-content/uploads/2019/07/marvel-punisher-1024x819.png",
    },
    {
      name: "NEWRADIOACTIVE MAN",
      url: "https://yoolk.ninja/wp-content/uploads/2024/05/Marvel-RadioactiveMan-1.png",
    },
    {
      name: "RED HULK",
      url: "https://yoolk.ninja/wp-content/uploads/2019/07/Marvel-Red-Hulk-1024x819.png",
    },
    {
      name: "RED SKULL",
      url: "https://yoolk.ninja/wp-content/uploads/2020/11/marvel-Red-Skull-1024x819.png",
    },
    {
      name: "RHINO",
      url: "https://yoolk.ninja/wp-content/uploads/2019/07/Marvel-Rhino2-1024x819.png",
    },
    {
      name: "ROCKET RACCOON",
      url: "https://yoolk.ninja/wp-content/uploads/2019/07/Marvel-Rocket-Raccoon-wt-gun-1024x819.png",
    },
    {
      name: "ROGUE",
      url: "https://yoolk.ninja/wp-content/uploads/2020/12/Marvel-Rogue-1024x819.png",
    },
    {
      name: "ROM THE SPACEKNIGHT",
      url: "https://yoolk.ninja/wp-content/uploads/2020/12/marvel-Rom-1024x819.png",
    },
    {
      name: "SASQUATCH",
      url: "https://yoolk.ninja/wp-content/uploads/2020/11/Marvel-Sasquatch-1024x819.png",
    },
    {
      name: "SCARLET WITCH",
      url: "https://yoolk.ninja/wp-content/uploads/2020/11/Marvel-Scarlet-Witch-1-1024x819.png",
    },
    {
      name: "SCORPION",
      url: "https://yoolk.ninja/wp-content/uploads/2019/07/marvel-scorpion-1024x819.png",
    },
    {
      name: "NEWSENTINEL",
      url: "https://yoolk.ninja/wp-content/uploads/2024/05/Marvel-Sentinel.png",
    },
    {
      name: "SHAMAN",
      url: "https://yoolk.ninja/wp-content/uploads/2021/03/marvel-shaman-1024x819.png",
    },
    {
      name: "SHE-HULK",
      url: "https://yoolk.ninja/wp-content/uploads/2021/03/Marvel-She-Hulk-1-1024x819.png",
    },
    {
      name: "SILVER SURFER",
      url: "https://yoolk.ninja/wp-content/uploads/2020/05/Marvel-Silver-Surfer-1-1024x819.png",
    },
    {
      name: "SNOWBIRD",
      url: "https://yoolk.ninja/wp-content/uploads/2020/12/marvel-snowbird-1024x819.png",
    },
    {
      name: "SPIDER-WOMAN",
      url: "https://yoolk.ninja/wp-content/uploads/2020/05/Marvel-SpiderWoman-jessicaDrew2-1024x819.png",
    },
    {
      name: "SPIDERMAN",
      url: "https://yoolk.ninja/wp-content/uploads/2019/07/Marvel-Spiderman-1024x819.png",
    },
    {
      name: "SPIDERMAN (SYMBIOTE)",
      url: "https://yoolk.ninja/wp-content/uploads/2021/10/Marvel-Spiderman-symbiote-1024x819.png",
    },
    {
      name: "NEWSTARFOX",
      url: "https://yoolk.ninja/wp-content/uploads/2024/05/Marvel-Starfox.png",
    },
    {
      name: "STORM",
      url: "https://yoolk.ninja/wp-content/uploads/2020/05/Marvel-Storm-2-1024x819.png",
    },
    {
      name: "NEWSTRONG GUY",
      url: "https://yoolk.ninja/wp-content/uploads/2024/05/Marvel-StrongGuy.png",
    },
    {
      name: "TALISMAN",
      url: "https://yoolk.ninja/wp-content/uploads/2021/03/Marvel-Talisman-1024x819.png",
    },
    {
      name: "THANOS",
      url: "https://yoolk.ninja/wp-content/uploads/2019/07/Marvel-Thanos-1024x819.png",
    },
    {
      name: "THE THING",
      url: "https://yoolk.ninja/wp-content/uploads/2019/07/Marvel-Thing-2-1024x819.png",
    },
    {
      name: "THOR",
      url: "https://yoolk.ninja/wp-content/uploads/2019/07/marvel-thor-1024x819.png",
    },
    {
      name: "U.S. AGENT",
      url: "https://yoolk.ninja/wp-content/uploads/2020/11/marvel-us-agent-1024x819.png",
    },
    {
      name: "UATU THE WATCHER",
      url: "https://yoolk.ninja/wp-content/uploads/2022/04/Marvel-Uatu-hte-Watcher-1024x819.png",
    },
    {
      name: "ULTRON",
      url: "https://yoolk.ninja/wp-content/uploads/2020/12/marvel-ultron-1-1024x819.png",
    },
    {
      name: "VANCE ASTRO",
      url: "https://yoolk.ninja/wp-content/uploads/2020/12/marvel-Vance-Astro-1024x819.png",
    },
    {
      name: "VENOM",
      url: "https://yoolk.ninja/wp-content/uploads/2019/07/Marvel-Venom-alt-1024x819.png",
    },
    {
      name: "VINDICATOR",
      url: "https://yoolk.ninja/wp-content/uploads/2020/11/Marvel-AlphaFlight-Vindicator-2-1024x819.png",
    },
    {
      name: "VISION",
      url: "https://yoolk.ninja/wp-content/uploads/2019/07/marvel-vision-1024x819.png",
    },
    {
      name: "WAR MACHINE",
      url: "https://yoolk.ninja/wp-content/uploads/2019/07/Marvel-War-Machine-1024x819.png",
    },
    {
      name: "WASP",
      url: "https://yoolk.ninja/wp-content/uploads/2020/11/Marvel-wasp-1024x819.png",
    },
    {
      name: "WOLVERINE",
      url: "https://yoolk.ninja/wp-content/uploads/2022/05/Marvel-Wolverine-Brown-Ver-1024x819.png",
    },
    {
      name: "WOLVERINE (SNIKT VER.)",
      url: "https://yoolk.ninja/wp-content/uploads/2019/07/Marvel-Wolverine-v2-def-1024x819.png",
    },
    {
      name: "YELLOW JACKET",
      url: "https://yoolk.ninja/wp-content/uploads/2022/10/Marvel-YellowJacket-1024x819.png",
    },
  ],
};

async function convertImageToBase64(url: string): Promise<string> {
  const response = await axios.get(url, { responseType: "arraybuffer" });
  const buffer = Buffer.from(response.data, "binary");
  return buffer.toString("base64");
}

const convert = async (superHero: MappedInput): Promise<MappedOutput> => {
  const {url, ...rest} = superHero;
  const base64Data = await convertImageToBase64(superHero.url);

  return { ...rest, data: base64Data };
};

type Mapped<T> = T & {company: string};

type MappedInput = Mapped<Input>;
type MappedOutput = Mapped<Output>;

const mappedData = Object.entries(data).map(([key, superHeroes]) => superHeroes.map(sh => ({...sh, company: key}))).flat();

const convertAll = async () => {
  const result = await Promise.all(mappedData.map(convert));

  writeFileSync('heroes_base64.json', JSON.stringify(result));

  return result;
};

convertAll();