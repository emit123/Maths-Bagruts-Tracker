import React, { useState, useEffect } from "react";

// Initial data for the math bagrut questions, merging instructions and skipped values from the first code
// and adding examLink and solutionsLink from the second code.
const initialExamsData = [
  {
    date: "קיץ 2020",
    chapters: [
      {
        name: "פרק 1",
        questions: [
          { number: "שאלה 1", instruction: "ללא א'", skipped: false },
          { number: "שאלה 2", instruction: "", skipped: false },
        ],
      },
      {
        name: "פרק 2",
        questions: [
          { number: "שאלה 3", instruction: "", skipped: false },
          { number: "שאלה 4", instruction: "", skipped: false },
          { number: "שאלה 5", instruction: "", skipped: false },
          { number: "שאלה 6", instruction: "", skipped: false },
        ],
      },
      {
        name: "פרק 3",
        questions: [
          { number: "שאלה 7", instruction: "", skipped: false },
          { number: "שאלה 8", instruction: "", skipped: false },
        ],
      },
    ],
    examLink:
      "https://files.geva.co.il/geva_website/uploads/2022/04/571_summer_june20.pdf",
    solutionsLink:
      "https://files.geva.co.il/geva_website/uploads/2020/06/571_summer_june20_answers.pdf",
  },
  {
    date: "מועד ב' 2020",
    chapters: [
      {
        name: "פרק 1",
        questions: [
          { number: "שאלה 1", instruction: "", skipped: false },
          { number: "שאלה 2", instruction: "", skipped: false },
        ],
      },
      {
        name: "פרק 2",
        questions: [
          { number: "שאלה 3", instruction: "", skipped: false },
          { number: "שאלה 4", instruction: "", skipped: false },
          { number: "שאלה 5", instruction: "", skipped: false },
          { number: "שאלה 6", instruction: "", skipped: false },
        ],
      },
      {
        name: "פרק 3",
        questions: [
          { number: "שאלה 7", instruction: "", skipped: false },
          { number: "שאלה 8", instruction: "", skipped: false },
        ],
      },
    ],
    examLink:
      "https://files.geva.co.il/geva_website/uploads/2020/06/%D7%A4%D7%AA%D7%A8%D7%95%D7%9F-35571-%D7%9E%D7%95%D7%A2%D7%93-%D7%91-%D7%A7%D7%99%D7%A5-20.pdf",
    solutionsLink:
      "https://files.geva.co.il/geva_website/uploads/2020/06/%D7%A4%D7%AA%D7%A8%D7%95%D7%9F-%D7%9E%D7%9C%D7%90-571-%D7%A2%D7%A4%D7%A8-%D7%99%D7%9C%D7%99%D7%9F-1.pdf",
  },
  {
    date: "חורף 2021",
    chapters: [
      {
        name: "פרק 1",
        questions: [
          { number: "שאלה 1", instruction: "ללא ב'", skipped: false },
          { number: "שאלה 2", instruction: "", skipped: false },
        ],
      },
      {
        name: "פרק 2",
        questions: [
          { number: "שאלה 3", instruction: "", skipped: false },
          { number: "שאלה 4", instruction: "", skipped: false },
          { number: "שאלה 5", instruction: "", skipped: false },
          { number: "שאלה 6", instruction: "", skipped: false },
        ],
      },
      {
        name: "פרק 3",
        questions: [
          { number: "שאלה 7", instruction: "", skipped: false },
          { number: "שאלה 8", instruction: "", skipped: true },
        ],
      },
    ],
    examLink:
      "https://files.geva.co.il/geva_website/uploads/2021/02/571_winter_february21.pdf",
    solutionsLink:
      "https://files.geva.co.il/geva_website/uploads/2022/04/571_winter_february21_answers.pdf",
  },
  {
    date: "קיץ 2021",
    chapters: [
      {
        name: "פרק 1",
        questions: [
          { number: "שאלה 1", instruction: "", skipped: false },
          { number: "שאלה 2", instruction: "", skipped: true },
        ],
      },
      {
        name: "פרק 2",
        questions: [
          { number: "שאלה 3", instruction: "", skipped: false },
          { number: "שאלה 4", instruction: "", skipped: false },
          { number: "שאלה 5", instruction: "", skipped: false },
          { number: "שאלה 6", instruction: "", skipped: false },
        ],
      },
      {
        name: "פרק 3",
        questions: [
          { number: "שאלה 7", instruction: "", skipped: false },
          { number: "שאלה 8", instruction: "", skipped: true },
        ],
      },
    ],
    examLink:
      "https://files.geva.co.il/geva_website/uploads/2021/05/571_summer_may21.pdf",
    solutionsLink:
      "https://files.geva.co.il/geva_website/uploads/2021/05/571_summer_may21_answers.pdf",
  },
  {
    date: "מועד מיוחד 2021",
    chapters: [
      {
        name: "פרק 1",
        questions: [
          { number: "שאלה 1", instruction: "", skipped: false },
          { number: "שאלה 2", instruction: "", skipped: true },
        ],
      },
      {
        name: "פרק 2",
        questions: [
          { number: "שאלה 3", instruction: "", skipped: false },
          { number: "שאלה 4", instruction: "", skipped: false },
          { number: "שאלה 5", instruction: "", skipped: false },
          { number: "שאלה 6", instruction: "", skipped: false },
        ],
      },
      {
        name: "פרק 3",
        questions: [
          { number: "שאלה 7", instruction: "", skipped: false },
          { number: "שאלה 8", instruction: "", skipped: false },
        ],
      },
    ],
    examLink:
      "https://files.geva.co.il/geva_website/uploads/2021/05/571_special_june21.pdf",
    solutionsLink:
      "https://files.geva.co.il/geva_website/uploads/2021/05/571_special_june21_answers.pdf",
  },
  {
    date: "מועד ב' 2021",
    chapters: [
      {
        name: "פרק 1",
        questions: [
          { number: "שאלה 1", instruction: "", skipped: false },
          { number: "שאלה 2", instruction: "ללא ה1", skipped: false },
        ],
      },
      {
        name: "פרק 2",
        questions: [
          { number: "שאלה 3", instruction: "", skipped: false },
          { number: "שאלה 4", instruction: "", skipped: false },
          { number: "שאלה 5", instruction: "", skipped: false },
          { number: "שאלה 6", instruction: "", skipped: false },
        ],
      },
      {
        name: "פרק 3",
        questions: [
          { number: "שאלה 7", instruction: "", skipped: false },
          { number: "שאלה 8", instruction: "", skipped: false },
        ],
      },
    ],
    examLink:
      "https://files.geva.co.il/geva_website/uploads/2021/05/571_summerB_july21.pdf",
    solutionsLink:
      "https://files.geva.co.il/geva_website/uploads/2021/05/571_summerB_july21_answers.pdf",
  },
  {
    date: "חורף 2022",
    chapters: [
      {
        name: "פרק 1",
        questions: [
          { number: "שאלה 1", instruction: "", skipped: false },
          { number: "שאלה 2", instruction: "", skipped: true },
        ],
      },
      {
        name: "פרק 2",
        questions: [
          { number: "שאלה 3", instruction: "", skipped: false },
          { number: "שאלה 4", instruction: "", skipped: false },
          { number: "שאלה 5", instruction: "", skipped: false },
          { number: "שאלה 6", instruction: "", skipped: false },
        ],
      },
      {
        name: "פרק 3",
        questions: [
          { number: "שאלה 7", instruction: "", skipped: false },
          { number: "שאלה 8", instruction: "", skipped: true },
        ],
      },
    ],
    examLink:
      "https://files.geva.co.il/geva_website/uploads/2022/01/571_winter_january22.pdf",
    solutionsLink:
      "https://files.geva.co.il/geva_website/uploads/2022/01/571_winter_january22_answers.pdf",
  },
  {
    date: "נבצרים 2022",
    chapters: [
      {
        name: "פרק 1",
        questions: [
          { number: "שאלה 1", instruction: "ללא א', ב'", skipped: false },
          { number: "שאלה 2", instruction: "", skipped: false },
        ],
      },
      {
        name: "פרק 2",
        questions: [
          { number: "שאלה 3", instruction: "", skipped: false },
          { number: "שאלה 4", instruction: "", skipped: false },
          { number: "שאלה 5", instruction: "", skipped: false },
          { number: "שאלה 6", instruction: "", skipped: false },
        ],
      },
      {
        name: "פרק 3",
        questions: [
          { number: "שאלה 7", instruction: "", skipped: false },
          { number: "שאלה 8", instruction: "", skipped: false },
        ],
      },
    ],
    examLink:
      "https://files.geva.co.il/geva_website/uploads/2022/01/571_winterNIVZARIM_february22.pdf",
    solutionsLink:
      "https://files.geva.co.il/geva_website/uploads/2022/01/%D7%A4%D7%AA%D7%A8%D7%95%D7%9F-%D7%9E%D7%9C%D7%90-35571.pdf",
  },
  {
    date: "קיץ 2022",
    chapters: [
      {
        name: "פרק 1",
        questions: [
          { number: "שאלה 1", instruction: "ללא א'", skipped: false },
          { number: "שאלה 2", instruction: "", skipped: false },
        ],
      },
      {
        name: "פרק 2",
        questions: [
          { number: "שאלה 3", instruction: "", skipped: false },
          { number: "שאלה 4", instruction: "", skipped: false },
          { number: "שאלה 5", instruction: "", skipped: false },
          { number: "שאלה 6", instruction: "", skipped: false },
        ],
      },
      {
        name: "פרק 3",
        questions: [
          { number: "שאלה 7", instruction: "", skipped: false },
          { number: "שאלה 8", instruction: "", skipped: false },
        ],
      },
    ],
    examLink:
      "https://files.geva.co.il/geva_website/uploads/2022/05/35571-%D7%A9%D7%90%D7%9C%D7%95%D7%9F-%D7%9E%D7%95%D7%A2%D7%93-%D7%90.pdf",
    solutionsLink:
      "https://files.geva.co.il/geva_website/uploads/2022/05/35571-%D7%A4%D7%AA%D7%A8%D7%95%D7%9F-%D7%9E%D7%95%D7%A2%D7%93-%D7%90.pdf",
  },
  {
    date: "מועד ב' 2022",
    chapters: [
      {
        name: "פרק 1",
        questions: [
          { number: "שאלה 1", instruction: "", skipped: false },
          { number: "שאלה 2", instruction: "", skipped: false },
        ],
      },
      {
        name: "פרק 2",
        questions: [
          { number: "שאלה 3", instruction: "", skipped: false },
          { number: "שאלה 4", instruction: "", skipped: false },
          { number: "שאלה 5", instruction: "", skipped: false },
          { number: "שאלה 6", instruction: "", skipped: false },
        ],
      },
      {
        name: "פרק 3",
        questions: [
          { number: "שאלה 7", instruction: "", skipped: false },
          { number: "שאלה 8", instruction: "", skipped: false },
        ],
      },
    ],
    examLink:
      "https://files.geva.co.il/geva_website/uploads/2022/05/35571-%D7%A9%D7%90%D7%9C%D7%95%D7%9F-%D7%9E%D7%95%D7%A2%D7%93-%D7%91.pdf",
    solutionsLink:
      "https://files.geva.co.il/geva_website/uploads/2022/05/35571-%D7%A4%D7%AA%D7%A8%D7%95%D7%9F-%D7%9E%D7%95%D7%A2%D7%93-%D7%91.pdf",
  },
  {
    date: "חורף 2023",
    chapters: [
      {
        name: "פרק 1",
        questions: [
          { number: "שאלה 1", instruction: "", skipped: false },
          { number: "שאלה 2", instruction: "", skipped: false },
        ],
      },
      {
        name: "פרק 2",
        questions: [
          { number: "שאלה 3", instruction: "", skipped: false },
          { number: "שאלה 4", instruction: "", skipped: false },
          { number: "שאלה 5", instruction: "", skipped: false },
          { number: "שאלה 6", instruction: "", skipped: false },
        ],
      },
      {
        name: "פרק 3",
        questions: [
          { number: "שאלה 7", instruction: "", skipped: false },
          { number: "שאלה 8", instruction: "", skipped: false },
        ],
      },
    ],
    examLink:
      "https://files.geva.co.il/geva_website/uploads/2023/01/%D7%A9%D7%90%D7%9C%D7%95%D7%9F-35571.pdf",
    solutionsLink:
      "https://files.geva.co.il/geva_website/uploads/2023/01/%D7%A4%D7%AA%D7%A8%D7%95%D7%9F-35571-%D7%AA%D7%95%D7%9B%D7%A0%D7%99%D7%AA-%D7%97%D7%93%D7%A9%D7%94.pdf",
  },
  {
    date: "קיץ 2023",
    chapters: [
      {
        name: "פרק 1",
        questions: [
          { number: "שאלה 1", instruction: "ללא א'", skipped: false },
          { number: "שאלה 2", instruction: "ללא ג', ד'", skipped: false },
        ],
      },
      {
        name: "פרק 2",
        questions: [
          { number: "שאלה 3", instruction: "", skipped: false },
          { number: "שאלה 4", instruction: "", skipped: false },
          { number: "שאלה 5", instruction: "", skipped: false },
          { number: "שאלה 6", instruction: "", skipped: false },
        ],
      },
      {
        name: "פרק 3",
        questions: [
          { number: "שאלה 7", instruction: "", skipped: false },
          { number: "שאלה 8", instruction: "", skipped: true },
        ],
      },
    ],
    examLink:
      "https://files.geva.co.il/geva_website/uploads/2023/05/%D7%A9%D7%90%D7%9C%D7%95%D7%9F-35571.pdf",
    solutionsLink:
      "https://files.geva.co.il/geva_website/uploads/2023/05/%D7%A4%D7%AA%D7%A8%D7%95%D7%9F-35571-2.pdf",
  },
  {
    date: "מועד מיוחד 2023",
    chapters: [
      {
        name: "פרק 1",
        questions: [
          { number: "שאלה 1", instruction: "", skipped: false },
          { number: "שאלה 2", instruction: "", skipped: true },
        ],
      },
      {
        name: "פרק 2",
        questions: [
          { number: "שאלה 3", instruction: "", skipped: false },
          { number: "שאלה 4", instruction: "", skipped: false },
          { number: "שאלה 5", instruction: "", skipped: false },
          { number: "שאלה 6", instruction: "", skipped: false },
        ],
      },
      {
        name: "פרק 3",
        questions: [
          { number: "שאלה 7", instruction: "", skipped: false },
          { number: "שאלה 8", instruction: "", skipped: false },
        ],
      },
    ],
    examLink:
      "https://files.geva.co.il/geva_website/uploads/2023/05/%D7%A4%D7%92-571-003-%D7%99%D7%95%D7%A0%D7%99-23-%D7%9E%D7%95%D7%A2%D7%93-%D7%A7%D7%99%D7%A5-%D7%9E%D7%99%D7%95%D7%97%D7%93.pdf",
    solutionsLink:
      "https://files.geva.co.il/geva_website/uploads/2023/05/%D7%A4%D7%AA%D7%A8%D7%95%D7%9F-35571-1.pdf",
  },
  {
    date: "מועד ב' 2023",
    chapters: [
      {
        name: "פרק 1",
        questions: [
          { number: "שאלה 1", instruction: "", skipped: false },
          { number: "שאלה 2", instruction: "", skipped: true },
        ],
      },
      {
        name: "פרק 2",
        questions: [
          { number: "שאלה 3", instruction: "", skipped: false },
          { number: "שאלה 4", instruction: "", skipped: false },
          { number: "שאלה 5", instruction: "", skipped: false },
          { number: "שאלה 6", instruction: "", skipped: false },
        ],
      },
      {
        name: "פרק 3",
        questions: [
          { number: "שאלה 7", instruction: "", skipped: false },
          { number: "שאלה 8", instruction: "", skipped: true },
        ],
      },
    ],
    examLink:
      "https://files.geva.co.il/geva_website/uploads/2023/05/%D7%A9%D7%90%D7%9C%D7%95%D7%9F-35571-%D7%9E%D7%95%D7%A2%D7%93-%D7%91.pdf",
    solutionsLink:
      "https://files.geva.co.il/geva_website/uploads/2023/05/%D7%A4%D7%AA%D7%A8%D7%95%D7%9F-35571-%D7%9E%D7%95%D7%A2%D7%93-%D7%91.pdf",
  },
  {
    date: "חורף 2024",
    chapters: [
      {
        name: "פרק 1",
        questions: [
          { number: "שאלה 1", instruction: "", skipped: false },
          { number: "שאלה 2", instruction: "", skipped: true },
        ],
      },
      {
        name: "פרק 2",
        questions: [
          { number: "שאלה 3", instruction: "", skipped: false },
          { number: "שאלה 4", instruction: "", skipped: false },
          { number: "שאלה 5", instruction: "", skipped: false },
          { number: "שאלה 6", instruction: "", skipped: false },
        ],
      },
      {
        name: "פרק 3",
        questions: [
          { number: "שאלה 7", instruction: "", skipped: false },
          { number: "שאלה 8", instruction: "", skipped: false },
        ],
      },
    ],
    examLink:
      "https://files.geva.co.il/geva_website/uploads/2024/03/%D7%A9%D7%90%D7%9C%D7%95%D7%9F-35571-%D7%AA%D7%95%D7%9B%D7%A0%D7%99%D7%AA-%D7%97%D7%93%D7%A9%D7%94.pdf",
    solutionsLink:
      "https://files.geva.co.il/geva_website/uploads/2024/03/%D7%A4%D7%AA%D7%A8%D7%95%D7%9F-571-1.pdf",
  },
  {
    date: "קיץ 2024",
    chapters: [
      {
        name: "פרק 1",
        questions: [
          { number: "שאלה 1", instruction: "", skipped: false },
          { number: "שאלה 2", instruction: "", skipped: false },
        ],
      },
      {
        name: "פרק 2",
        questions: [
          { number: "שאלה 3", instruction: "", skipped: false },
          { number: "שאלה 4", instruction: "", skipped: false },
          { number: "שאלה 5", instruction: "", skipped: false },
          { number: "שאלה 6", instruction: "", skipped: false },
        ],
      },
      {
        name: "פרק 3",
        questions: [
          { number: "שאלה 7", instruction: "", skipped: false },
          { number: "שאלה 8", instruction: "", skipped: false },
        ],
      },
    ],
    examLink:
      "https://files.geva.co.il/geva_website/uploads/2024/05/%D7%A4%D7%93-571-002-%D7%9E%D7%90%D7%99-24-%D7%9E%D7%95%D7%A2%D7%93-%D7%A7%D7%99%D7%A5-%D7%90.pdf",
    solutionsLink:
      "https://files.geva.co.il/geva_website/uploads/2024/05/%D7%A4%D7%AA%D7%A8%D7%95%D7%9F-571-2.pdf",
  },
  {
    date: "מועד ב' 2024",
    chapters: [
      {
        name: "פרק 1",
        questions: [
          { number: "שאלה 1", instruction: "", skipped: false },
          { number: "שאלה 2", instruction: "", skipped: false },
        ],
      },
      {
        name: "פרק 2",
        questions: [
          { number: "שאלה 3", instruction: "", skipped: false },
          { number: "שאלה 4", instruction: "", skipped: false },
          { number: "שאלה 5", instruction: "", skipped: false },
          { number: "שאלה 6", instruction: "", skipped: false },
        ],
      },
      {
        name: "פרק 3",
        questions: [
          { number: "שאלה 7", instruction: "", skipped: false },
          { number: "שאלה 8", instruction: "", skipped: false },
        ],
      },
    ],
    examLink:
      "https://files.geva.co.il/geva_website/uploads/2024/05/%D7%A9%D7%90%D7%9C%D7%95%D7%9F-571-%D7%99%D7%95%D7%9C%D7%99-24-%D7%9E%D7%95%D7%A2%D7%93-%D7%A7%D7%99%D7%A5-%D7%91.pdf",
    solutionsLink:
      "https://files.geva.co.il/geva_website/uploads/2024/12/%D7%A4%D7%93-571-003-%D7%99%D7%95%D7%9C%D7%99-24-%D7%9E%D7%95%D7%A2%D7%93-%D7%A7%D7%99%D7%A5-%D7%91-%D7%A4%D7%AA%D7%A8%D7%95%D7%A0%D7%95%D7%AA-%D7%A2%D7%A4%D7%A8.pdf",
  },
  {
    date: "2025 מועד חורף",
    chapters: [
      {
        name: "פרק 1",
        questions: [
          { number: "שאלה 1", instruction: "", skipped: false },
          { number: "שאלה 2", instruction: "", skipped: false },
        ],
      },
      {
        name: "פרק 2",
        questions: [
          { number: "שאלה 3", instruction: "", skipped: false },
          { number: "שאלה 4", instruction: "", skipped: false },
          { number: "שאלה 5", instruction: "", skipped: false },
          { number: "שאלה 6", instruction: "", skipped: false },
        ],
      },
      {
        name: "פרק 3",
        questions: [
          { number: "שאלה 7", instruction: "", skipped: false },
          { number: "שאלה 8", instruction: "", skipped: false },
        ],
      },
    ],
    examLink:
      "https://files.geva.co.il/geva_website/uploads/2025/01/%D7%A4%D7%94-571-001-%D7%99%D7%A0%D7%95%D7%90%D7%A8-25-%D7%9E%D7%95%D7%A2%D7%93-%D7%97%D7%95%D7%A8%D7%A3-1.pdf",
    solutionsLink:
      "https://files.geva.co.il/geva_website/uploads/2025/01/%D7%A4%D7%94-571-001-%D7%99%D7%A0%D7%95%D7%90%D7%A8-25-%D7%9E%D7%95%D7%A2%D7%93-%D7%97%D7%95%D7%A8%D7%A3-%D7%A4%D7%AA%D7%A8%D7%95%D7%A0%D7%95%D7%AA-%D7%A2%D7%A4%D7%A8.pdf",
  },
  {
    date: "2025 מועד קיץ",
    chapters: [
      {
        name: "פרק 1",
        questions: [
          { number: "שאלה 1", instruction: "", skipped: false },
          { number: "שאלה 2", instruction: "", skipped: false },
        ],
      },
      {
        name: "פרק 2",
        questions: [
          { number: "שאלה 3", instruction: "", skipped: false },
          { number: "שאלה 4", instruction: "", skipped: false },
          { number: "שאלה 5", instruction: "", skipped: false },
          { number: "שאלה 6", instruction: "", skipped: false },
        ],
      },
      {
        name: "פרק 3",
        questions: [
          { number: "שאלה 7", instruction: "", skipped: false },
          { number: "שאלה 8", instruction: "", skipped: false },
        ],
      },
    ],
    examLink:
      "https://files.geva.co.il/geva_website/uploads/2025/05/%D7%A9%D7%90%D7%9C%D7%95%D7%9F-35571-%D7%A7%D7%99%D7%A5-25-%D7%9E%D7%95%D7%A2%D7%93-%D7%90.pdf",
    solutionsLink:
      "https://files.geva.co.il/geva_website/uploads/2025/05/%D7%A4%D7%AA%D7%A8%D7%95%D7%9F-%D7%9E%D7%9C%D7%90-35571-%D7%9E%D7%95%D7%A2%D7%93-%D7%90-%D7%A7%D7%99%D7%A5-25-1.pdf",
  },
];

// Function to load and initialize exams data, moved outside the component
// to act as a pure initializer for useState.
const loadExamsData = () => {
  try {
    const savedExams = localStorage.getItem("bagrutMathTracker");
    if (savedExams) {
      const parsedExams = JSON.parse(savedExams);
      // Ensure 'done', 'examLink', 'solutionsLink' properties exist
      return parsedExams.map((exam) => {
        return {
          ...exam,
          examLink: exam.examLink || "",
          solutionsLink: exam.solutionsLink || "",
          chapters: exam.chapters.map((chapter) => {
            return {
              ...chapter,
              questions: chapter.questions.map((question) => {
                return {
                  ...question,
                  done: question.done !== undefined ? question.done : false,
                };
              }),
            };
          }),
        };
      });
    }
  } catch (error) {
    console.error("Failed to parse exams from localStorage", error);
  }
  // If no saved data or parsing failed, initialize with default data
  return initialExamsData.map((exam) => {
    return {
      ...exam,
      examLink: exam.examLink || "",
      solutionsLink: exam.solutionsLink || "",
      chapters: exam.chapters.map((chapter) => {
        return {
          ...chapter,
          questions: chapter.questions.map((question) => {
            return {
              ...question,
              done: false,
            };
          }),
        };
      }),
    };
  });
};

function App() {
  // State to hold the exams data, initialized by calling loadExamsData.
  const [exams, setExams] = useState(loadExamsData);

  // Effect to save exams data to localStorage whenever it changes.
  useEffect(() => {
    localStorage.setItem("bagrutMathTracker", JSON.stringify(exams));
  }, [exams]);

  // Function to handle checkbox changes.
  const handleCheckboxChange = (examIndex, chapterIndex, questionIndex) => {
    setExams((prevExams) => {
      const updatedExams = prevExams.map((exam, eIdx) => {
        if (eIdx === examIndex) {
          return {
            ...exam,
            chapters: exam.chapters.map((chapter, cIdx) => {
              if (cIdx === chapterIndex) {
                return {
                  ...chapter,
                  questions: chapter.questions.map((question, qIdx) => {
                    if (qIdx === questionIndex) {
                      return {
                        ...question,
                        done: !question.done,
                      };
                    }
                    return question;
                  }),
                };
              }
              return chapter;
            }),
          };
        }
        return exam;
      });
      return updatedExams;
    });
  };

  // Function to reset all progress.
  const handleReset = () => {
    const confirmReset = document.createElement("div");
    confirmReset.className =
      "fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50";
    confirmReset.innerHTML = `
      <div class="bg-white p-6 rounded-lg shadow-xl max-w-sm w-full text-center">
        <p class="text-lg font-semibold mb-4">האם אתה בטוח שברצונך לאפס את כל ההתקדמות?</p>
        <p class="text-sm text-gray-600 mb-6">פעולה זו אינה ניתנת לביטול.</p>
        <div class="flex justify-around">
          <button id="cancelReset" class="px-5 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition-colors">ביטול</button>
          <button id="confirmReset" class="px-5 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors">אישור</button>
        </div>
      </div>
    `;
    document.body.appendChild(confirmReset);

    document.getElementById("confirmReset").onclick = () => {
      setExams(
        initialExamsData.map((exam) => {
          return {
            ...exam,
            chapters: exam.chapters.map((chapter) => {
              return {
                ...chapter,
                questions: chapter.questions.map((question) => {
                  return {
                    ...question,
                    done: false,
                  };
                }),
              };
            }),
          };
        })
      );
      document.body.removeChild(confirmReset);
    };

    document.getElementById("cancelReset").onclick = () => {
      document.body.removeChild(confirmReset);
    };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 font-sans text-gray-800 flex flex-col items-center">
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
        body {
          font-family: 'Inter', sans-serif;
        }
        .table-container::-webkit-scrollbar {
          height: 12px;
        }
        .table-container::-webkit-scrollbar-track {
          background: #f0f4f8;
          border-radius: 10px;
        }
        .table-container::-webkit-scrollbar-thumb {
          background: #94a3b8;
          border-radius: 10px;
          border: 3px solid #f0f4f8;
        }
        .table-container::-webkit-scrollbar-thumb:hover {
          background: #64748b;
        }
        `}
      </style>

      <h1 className="text-4xl md:text-5xl font-extrabold text-center text-blue-800 mb-6 mt-4 drop-shadow-lg">
        מעקב בגרות במתמטיקה
      </h1>
      <p className="text-lg text-center text-gray-600 mb-8 max-w-2xl">
        סמן את השאלות שפתרת כדי לעקוב אחר ההתקדמות שלך. שאלות מסומנות באפור או
        עם הערה "ללא" הן אלו שלא צריך לפתור.
      </p>

      <div className="w-full max-w-screen-xl overflow-x-auto rounded-xl shadow-2xl bg-white border border-gray-200 table-container">
        <table className="w-full text-sm sm:text-base text-right border-collapse">
          <thead className="bg-blue-600 text-white sticky top-0 z-10 shadow-md">
            <tr>
              <th
                rowSpan="2"
                className="py-3 px-4 border-b-2 border-blue-700 text-center font-bold whitespace-nowrap rounded-tl-xl"
              >
                מועד
              </th>
              {exams.length > 0 &&
                exams[0].chapters.map((chapter, chapIndex) => (
                  <th
                    key={`chapter-header-${chapIndex}`}
                    colSpan={chapter.questions.length}
                    className="py-3 px-4 border-b-2 border-blue-700 font-bold text-center"
                  >
                    {chapter.name}
                  </th>
                ))}
            </tr>
            <tr>
              {exams.length > 0 &&
                exams[0].chapters.map((chapter, chapIndex) =>
                  chapter.questions.map((question, qIndex) => (
                    <th
                      key={`question-header-${chapIndex}-${qIndex}`}
                      className="py-2 px-3 border-b border-blue-700 text-center font-semibold text-xs sm:text-sm whitespace-nowrap"
                    >
                      {question.number.replace("שאלה ", "ש")}
                    </th>
                  ))
                )}
            </tr>
          </thead>
          <tbody>
            {exams.map((exam, examIndex) => (
              <tr
                key={exam.date}
                className="hover:bg-blue-50 transition-colors duration-200 ease-in-out border-b border-gray-200"
              >
                <td className="py-3 px-4 font-semibold text-center whitespace-nowrap bg-blue-50 border-r border-gray-200">
                  <div className="flex flex-col items-center justify-center h-full">
                    <span>{exam.date}</span>
                    <div className="flex items-center space-x-2 text-xs mt-1">
                      {exam.examLink && (
                        <a
                          href={exam.examLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-700 hover:text-blue-900 hover:underline flex items-center"
                          title="קישור למבחן"
                        >
                          מבחן
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-file-text ml-1"
                          >
                            <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                            <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                            <path d="M10 9H8" />
                            <path d="M16 13H8" />
                            <path d="M16 17H8" />
                          </svg>
                        </a>
                      )}
                      {exam.solutionsLink && (
                        <a
                          href={exam.solutionsLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-green-700 hover:text-green-900 hover:underline flex items-center"
                          title="קישור לפתרונות"
                        >
                          פתרונות
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-check-circle ml-1"
                          >
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                            <path d="m9 11 3 3L22 4" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </td>
                {exam.chapters.map((chapter, chapterIndex) =>
                  chapter.questions.map((question, questionIndex) => (
                    <td
                      key={`${exam.date}-${chapter.name}-${question.number}`}
                      className={`py-3 px-2 text-center relative border-l border-gray-100
                        ${
                          question.skipped
                            ? "bg-gray-200 text-gray-500 line-through"
                            : ""
                        }`}
                      style={{
                        paddingTop: question.instruction ? "1.5rem" : "0.75rem",
                        paddingBottom: question.instruction
                          ? "1.5rem"
                          : "0.75rem",
                      }}
                    >
                      {question.instruction && (
                        <span
                          className={`absolute bottom-0 left-0 right-0 p-1 text-xs text-center rounded-t-md
                            ${
                              question.skipped
                                ? "bg-gray-400 text-white"
                                : "bg-red-100 text-red-700"
                            }`}
                          style={{
                            zIndex: 2,
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            maxWidth: "100%",
                            display: "block",
                          }}
                          title={question.instruction}
                        >
                          {question.instruction}
                        </span>
                      )}
                      <input
                        type="checkbox"
                        className={`form-checkbox h-5 w-5 rounded-md transition-all duration-200 ease-in-out
                          ${
                            question.skipped
                              ? "accent-gray-400 cursor-not-allowed opacity-70"
                              : "accent-blue-600 cursor-pointer hover:scale-110"
                          }`}
                        checked={question.done}
                        onChange={() =>
                          handleCheckboxChange(
                            examIndex,
                            chapterIndex,
                            questionIndex
                          )
                        }
                        disabled={question.skipped}
                      />
                    </td>
                  ))
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button
        onClick={handleReset}
        className="mt-8 px-6 py-3 bg-red-500 text-white font-bold rounded-lg shadow-lg hover:bg-red-600 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-red-300"
      >
        איפוס הכל (Reset All)
      </button>
    </div>
  );
}

export default App;
