course1 = Course.create!(
  title: 'Webrebel',
  description: 'Lorem ipsum dolor sit amet consecetur elis',
  author: 'Yablko'
)

chapter1 = course1.chapters.create!(
  title: '00: Začiatok HTML/CSS kurzu',
  description: 'Pár teplých slov na úvod.',
  video: 'https://www.youtube.com/embed/7y1xJAVZxXg'
)

chapter2 = course1.chapters.create!(
  title: '01: Úvod do HTML, HTML tagy a prvá stránka',
  description: '<p>Webové technológie a spolupráca HTML s CSS a ich úloha:<br>\n    <strong>HTML</strong> - stará sa o obsah.<br>\n    <strong>CSS</strong> - stará sa o prezentáciu, o to, ako obsah vyzerá.<br>\n    <strong>Javascript</strong> - o to, ako sa obsah správa, o interaktivitu keď naň klikneme a podobne. </p>\n\n    <p>Rozdelenie na:<br>\n    <strong>Frontend</strong> - HTML, CSS, Javascript.<br>\n    <strong>Backend</strong> - Ruby, PHP, SQL, ...</p>\n\n    <p>HTML ako popisný jazyk, HTML dokument, jeho porovnanie s Word documentom a základné tagy na formátovanie nadpisov a odstavcov.</p>',
  video: 'https://www.youtube.com/embed/O7zewtuUM_0'
)

chapter3 = course1.chapters.create!(
  title: '02: Doctype a kostra HTML dokumentu',
  description: 'Doplníme kód z prvej kapitoly a vytvoríme tak základnú kostru HTML dokumentu. Tú budeme používať ako štartovný bod v budúcich kapitolách.',
  video: 'https://www.youtube.com/embed/PH-G8vBpG9o'
)
