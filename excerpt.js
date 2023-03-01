//Navigation
function toggleMenu() {
    const toggleMenu = document.querySelector('.toggle__menu');
    const navigation = document.querySelector('.nav__menu');
    toggleMenu.classList.toggle('active');
    navigation.classList.toggle('active');
  }
  

const studentFolders = [
    "Nasirullah-Oladipo-Adekunle_2019-1-76184CT",
    "Kareem-Ojo-Abubakry_2019-1-75831CT",
    "Abubakar-Samiat-Omolola_2019-1-74883CT",
    "Adesiyan-Paul-Korede_2019-1-74992CT", 
    "Oyelami-Lynda-Eniola_2019-1-79473CT",
    "Umar-Faruk-Ahmad_2019-1-75529CT",
    "Ganiyu-Aminat-Awele_2019-1-75561CT",
    "Abdullahi-Aisha-Aliyu_2019-1-77123CT",
    "Yusuf-Taslim-Omotoyosi_2019-1-76698CT",
    "Tijani-Yetunde-Mariam_2019-1-76568CT",
    "Ojebiyi-Isaac-Odunayo_2019-1-79468CT",
    "Alhassan-Aliyu_2019-1-75170CT",
    "Maku-Oluwatomi-Demilade_2019-1-75900CT",
    "Solabi-Oluwaseun_2019-1-76501CT",
    "Amoo-Matthew-Abiodun_2019-1-75203CT",
    "Yusuf-Tunde-Soliu_2021-2-81225CT",
    "Emakwu-Sharon-Maryam_2019-1-75473CT",
    "Yosase-Israel-Ayomide_2019-1-76681CT",
    "Ayinmiro-Oluwatobiloba-Collins_2019-1-77828CT",
    "Abdulmaleek-Ahmed-Akano_2019-1-74831CT",
    "Nwabua-Ozioma-Gospel_2019-1-76042CT",
    "Anthony-Nanzing-Chuka_2019-1-75221CT",
    "Olaitan-Temitope-Michael_2021-2-82829CT",
    "Otsokwa-David-Teryima_2019-1-77696CT",
    "Aliyu-Abubakar-Sadiq_2021-2-79823CT",
    "Olaniyi-Mariam-Adedoyin_2021-2-80542CT",
    "Godfrey-David-Oche_2019-1-75581CT",
    "Boniface-Gabriel-Adah_2019-1-75357CT",
    "Ochedi-Monday-Ugbedeojo_2019-1-76077CT",
    "Theophilus-Bitrus_2021-2-81342CT",
    "Moruf-Jemilu_2021-2-80376CT",
    "Awe-Memudat-Omowumi_2021-2-83363CT",
    "Adigun-Mohammed-Fasil_2019-1-75004CT",
    "Adedokun-Johnson-Oluwafemi_2019-1-79426CT",
    "Alfa-Joshua-Paul_2021-2-79819CT",
    "Shado-Benjamin_2019-1-76466CT",
    "Noah-Enoch_2021-2-80427CT",
    "Wahab-Ibrahim_2021-2-80849CT",
    "Hassan-Aliyu-Babangida_2019-1-75604CT",
    "Mnaan-Josephine-Wueseter_2019-1-76933CT",
    "Egena-Stephenie-Odunayo_2019-1-75456CT",
    "Agada-Anthony-Alex_2019-1-75020CT",
    "Aidi-Joheobe-Pius_2019-1-75073CT",
    "Wilson-Joshua-Otonye_2019-1-76016CT",
    "Oluwasegun-Oluwadara-Iyin_2019-1-76251CT",
    "Okpe-Francis-Nathaniel_2019-1-76162CT",
    "Enoch-Mida_2019-1-75927CT",
    "Goodness-Tracy-Nmesoma-Udeh_2019-1-77331CT",
    "Muhideen-Mujeeb-Adeoye_2019-1-75988CT",
    "Egbe-Joshua-Kije_2019-1-79398CT",
    "Moses-Simon_2019-1-76496CT",
    "Taoheed-Abdulraheem_2019-1-74838CT",
    "Wambai-Shewye-Elisha_2019-1-76644CT",
    "Agbika-Samson-Aaron_2019-1-76758CT",
    "Oladimeji-Ololade_2019-1-76182CT",
    "Yisa-Zaccheaus-Ndace_2019-1-77106CT",
    "Israel-Akpa-Attah_2019-1-75143CT",
    "Kaderi-Caleb-Usman_2019-1-75819CT",
    "Aliyu-Zaynab-Oyine_2019-1-75184CT",
    "Jethro-Shekwoduza-Emmanuel_2019-1-75485CT",
    "Basil-Dayigil_2019-1-75427CT",
    "Divine-Chris-Ifeayaekwu_2019-1-75667CT",
    "Abdulazeez-Faridah-Titilayo_2019-1-74801CT",
    "Mwanta-Godwin-Dalyop_2019-1-76012CT",
    "Victor-Adam-Ogblegba_2019-1-76101CT",
    "Divine-Daniel-Prince_2019-1-79444CT",
    "Abdulrahman-Daromosu-Adekunle_2019-1-76828CT",
    "Victor-Isaac-Solomon_2019-1-77321CT",
    "Muhammad-Sadiq-A_2019-1-77907CT",
    "Bello-Mohammed-Toyib_2019-1-175334CT"
];

const students = [];
studentFolders.forEach(folder => {
  const [name, matricNo] = folder.split("_");
  const nameParts = name.split("-");
  const firstName = nameParts[0];
  const lastName = nameParts[1];
  let middleName = "";
  let extraNamePart = "";
  if (nameParts.length >= 3) {
    middleName = nameParts[2];
    if (nameParts.length >= 4) {
      extraNamePart = nameParts[3];
    }
  }
  const fullName = `${firstName} ${lastName} ${middleName} ${extraNamePart}`.trim();
  const matricNumber = matricNo.replace(/-/g, "/");
  students.push({fullName, matricNumber});
})
console.log("Students:", students);

const numberOfStudents = 84;
let numberOfSubmissions = 0;
numberOfSubmissions += studentFolders.length;

const updateSubmissions = document.querySelector(".update__submissions");
if (updateSubmissions) {
  updateSubmissions.innerHTML = numberOfSubmissions;
}

const updateStudents = document.querySelector(".update__students");
if (updateStudents) {
  updateStudents.innerHTML = numberOfStudents;
}

 function generateAccordion(student) {
  const accordion = document.createElement("div");
  accordion.classList.add("accordion");

  const accordionHeader = document.createElement("div");
  accordionHeader.classList.add("accordion__header");

  const accordionHeadText = document.createElement("h3");
  accordionHeadText.classList.add("accord-h");
  accordionHeadText.textContent = `${student.fullName} - ${student.matricNumber}`;

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("width", "15");
  svg.setAttribute("height", "10");
  svg.setAttribute("viewBox", "0 0 42 25");

  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("d", "M3 3L21 21L39 3");
  path.setAttribute("stroke", "white");
  path.setAttribute("stroke-width", "7");
  path.setAttribute("stroke-linecap", "round");

  svg.appendChild(path);
  accordionHeader.appendChild(accordionHeadText);
  accordionHeader.appendChild(svg);

  const accordionBody = document.createElement("div");
  accordionBody.classList.add("accordion__body");

  const link = document.createElement("a");
  link.textContent = "View my submission";
  link.href = `submissions/${student.fullName.replace(/\ /g, '-')+'_'+student.matricNumber.replace(/\//g, '-')}/allpages.html`;
  accordionBody.appendChild(link);
  accordion.appendChild(accordionHeader);
  accordion.appendChild(accordionBody);

  return accordion;
}

const accordionContainer = document.querySelector(".accordion__container");
const accordions = [];

students.forEach(student => {
  const generatedAccordion = generateAccordion(student);
  accordions.push(generatedAccordion);
});

 document.addEventListener('DOMContentLoaded', () => {
  const accordions = document.querySelectorAll('.accordion');
  const accordionContainer = document.querySelector('.accordion__container'); 

  accordions.forEach(accordion => {
    const header = accordion.querySelector('.accordion__header');
    const body = accordion.querySelector('.accordion__body');

    header.addEventListener('click', () => {
      accordion.classList.toggle('active');
      body.classList.toggle('active');
    });

    accordionContainer.appendChild(accordion);
  });
});

console.log(accordionContainer);
/* let totalElements = students.length;
const itemsPerPage = 10;
 */
