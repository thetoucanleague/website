document.addEventListener("DOMContentLoaded", function () {
  // Mobile Navigation Menu Toggle
  const toggleBtn = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener("click", function () {
      navLinks.classList.toggle("open");
    });
  }

  // Highlight active page 
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  const links = document.querySelectorAll(".nav-links a");

  links.forEach(link => {
    const linkPath = link.getAttribute("href");
    if (linkPath === currentPath) {
      link.classList.add("active");
    }
  });
});


// Standings Dataset 
const standingsData = {
  div1: {
    experienced: [
      { rank: "1st", university: "Birmingham", pts: "-", score: "-" },
      { rank: "2nd", university: "Nottingham", pts: "-", score: "-" },
      { rank: "3rd", university: "Warwick", pts: "-", score: "-" },
      { rank: "4th", university: "Leicester", pts: "-", score: "-" }
    ],
    novice: [
      { rank: "1st", university: "Loughborough", pts: "-", score: "-" },
      { rank: "2nd", university: "Birmingham", pts: "-", score: "-" },
      { rank: "3rd", university: "Nottingham", pts: "-", score: "-" },
      { rank: "4th", university: "Leicester", pts: "-", score: "-" }
    ]
  },
  div2: {
    experienced: [
      { rank: "1st", university: "Nottingham Trent", pts: "-", score: "-" },
      { rank: "2nd", university: "Cambridge", pts: "-", score: "-" },
      { rank: "3rd", university: "De Montfort", pts: "-", score: "-" },
      { rank: "4th", university: "Derby", pts: "-", score: "-" }
    ],
    novice: [
      { rank: "1st", university: "Cambridge", pts: "-", score: "-" },
      { rank: "2nd", university: "Harper Adams", pts: "-", score: "-" },
      { rank: "3rd", university: "De Montfort", pts: "-", score: "-" },
      { rank: "4th", university: "Derby", pts: "-", score: "-" }
    ]
  }
};

function buildInitialTables() {
  const container = document.getElementById("standings-tables-container");
  if (!container) return;

  container.innerHTML = `
    <div class="table-card">
      <h3>Experienced</h3>
      <table>
        <thead>
          <tr><th>Rank</th><th>University</th><th>Pts</th><th>Score</th></tr>
        </thead>
        <tbody id="tbody-experienced"></tbody>
      </table>
    </div>

    <div class="table-card">
      <h3>Novice</h3>
      <table>
        <thead>
          <tr><th>Rank</th><th>University</th><th>Pts</th><th>Score</th></tr>
        </thead>
        <tbody id="tbody-novice"></tbody>
      </table>
    </div>
  `;

  updateTableValues("div1");
}


function updateTableValues(divisionKey) {
  const data = standingsData[divisionKey];

  const updateRows = (tbodyId, items) => {
    const tbody = document.getElementById(tbodyId);
    if (!tbody) return;

    
    items.forEach((item, index) => {
      let row = tbody.children[index];

      if (!row) {
        row = document.createElement("tr");
        row.innerHTML = `
          <td class="cell-rank">${item.rank}</td>
          <td class="cell-uni">${item.university}</td>
          <td class="cell-pts">${item.pts}</td>
          <td class="cell-score">${item.score}</td>
        `;
        tbody.appendChild(row);
      } else {
        
        row.querySelector(".cell-rank").textContent = item.rank;
        row.querySelector(".cell-uni").textContent = item.university;
        row.querySelector(".cell-pts").textContent = item.pts;
        row.querySelector(".cell-score").textContent = item.score;
      }
    });
  };

  updateRows("tbody-experienced", data.experienced);
  updateRows("tbody-novice", data.novice);
}


function switchDivision(divisionKey) {
  document.querySelectorAll(".toggle-btn").forEach(btn => btn.classList.remove("active"));
  const activeBtn = document.getElementById(divisionKey === "div1" ? "btn-div1" : "btn-div2");
  if (activeBtn) activeBtn.classList.add("active");

  updateTableValues(divisionKey);
}


document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener("click", function () {
      navLinks.classList.toggle("open");
    });
  }

  buildInitialTables();
});


// Dataset for badges
const badgeScores = {
  open: {
    portsmouth: [
      { bowstyle: "Recurve", white: 378, black: 456, blue: 511, red: 549, gold: 575 },
      { bowstyle: "Barebow", white: 329, black: 406, blue: 464, red: 508, gold: 539 },
      { bowstyle: "Compound", white: 501, black: 526, blue: 544, red: 558, gold: 576 },
      { bowstyle: "Longbow", white: 126, black: 202, blue: 292, red: 378, gold: 445 }
    ],
    wa18: [
      { bowstyle: "Recurve", white: 272, black: 374, blue: 454, red: 512, gold: 551 },
      { bowstyle: "Barebow", white: 219, black: 306, blue: 387, red: 449, gold: 496 },
      { bowstyle: "Compound", white: 413, black: 479, blue: 518, red: 543, gold: 564 },
      { bowstyle: "Longbow", white: 65, black: 114, blue: 184, red: 272, gold: 360 }
    ],
    wa720: [
      { bowstyle: "Recurve", white: 184, black: 292, blue: 408, red: 506, gold: 577 },
      { bowstyle: "Barebow", white: 223, black: 314, blue: 406, red: 484, gold: 546 },
      { bowstyle: "Compound", white: 431, black: 506, blue: 567, red: 615, gold: 653 },
      { bowstyle: "Longbow", white: 32,  black: 55, blue: 92, red: 148, gold: 226 }
    ],
    wa900: [
      { bowstyle: "Recurve", white: 401, black: 540, blue: 654, red: 738, gold: 796 },
      { bowstyle: "Barebow", white: 289, black: 399, blue: 508, red: 604, gold: 681 },
      { bowstyle: "Compound", white: 676, black: 739, blue: 789, red: 829, gold: 860 },
      { bowstyle: "Longbow", white: 91, black: 152, blue: 238, red: 344, gold: 461 }
    ]
  },
  female: {
    portsmouth: [
      { bowstyle: "Recurve", white: 330, black: 422, blue: 487, red: 533, gold: 564 },
      { bowstyle: "Barebow", white: 274, black: 359, blue: 428, red: 479, gold: 518 },
      { bowstyle: "Compound", white: 465, black: 507, blue: 535, red: 555, gold: 572 },
      { bowstyle: "Longbow", white: 83,  black: 142, blue: 221, red: 311, gold: 393 }
    ],
    wa18: [
      { bowstyle: "Recurve", white: 220, black: 327, blue: 420, red: 487, gold: 533 },
      { bowstyle: "Barebow", white: 169, black: 250, blue: 335, red: 408, gold: 466 },
      { bowstyle: "Compound", white: 325, black: 429, blue: 500, red: 538, gold: 560 },
      { bowstyle: "Longbow", white: 42,  black: 76, blue: 128, red: 202, gold: 290 }
    ],
    wa720: [
      { bowstyle: "Recurve", white: 140, black: 234, blue: 349, red: 458, gold: 542 },
      { bowstyle: "Barebow", white: 168, black: 249, blue: 340, red: 427, gold: 502 },
      { bowstyle: "Compound", white: 379, black: 468, blue: 540, red: 595, gold: 637 },
      { bowstyle: "Longbow", white: 20,  black: 35, blue: 59, red: 98, gold: 157 }
    ],
    wa900: [
      { bowstyle: "Recurve", white: 330, black: 472, blue: 600, red: 698, gold: 758 },
      { bowstyle: "Barebow", white: 221, black: 321, blue: 430, red: 535, gold: 625 },
      { bowstyle: "Compound", white: 630, black: 707, blue: 767, red: 812, gold: 847 },
      { bowstyle: "Longbow", white: 59,  black: 100, blue: 163, red: 252, gold: 360 }
    ]
  }
};

// Dataset Records
const record = {
  experienced: {
    portsmouth: [
      { category: "Recurve Open", name: "Ashe Morgan", score: 598, golds: 58, university: "Birmingham", event: "BUTTS Leg 1", season: "16/17" },
      { category: "Recurve Female", name: "Louisa Piper", score: 596, golds: 56, university: "Nottingham", event: "BUTTS Leg 3", season: "21/22" },
      { category: "Compound Open", name: "Kai Thomas-Prause", score: 596, golds: 56, university: "Warwick", event: "BUTTS Leg 4", season: "18/19" },
      { category: "Compound Female", name: "Sarah Moon", score: 583, golds: 44, university: "Nottingham Trent", event: "BUCS Qualifiers", season: "17/18" },
      { category: "Barebow Open", name: "Oliver Hicks", score: 581, golds: 41, university: "Birmingham", event: "Toucan Leg 2", season: "25/26" },
      { category: "Barebow Female", name: "Ilia Sediq", score: 538, golds: 19, university: "Loughborough", event: "Toucan Leg 1", season: "23/24" },
      { category: "Longbow Open", name: "Kieran Rugg", score: 482, golds: 10, university: "Nottingham", event: "BUCS Qualifiers", season: "22/23" },
      { category: "Longbow Female", name: "Gerogie Jones", score: 457, golds: 7, university: "Loughborough", event: "BUTTS NR", season: "18/19" },
      { category: "Non Compound Team", name: "Warwick", score: 2328, golds: 178, university: "Warwick", event: "BUTTS Champs", season: "17/18" },
      { category: "Compound Team", name: "Nottingham", score: 1740, golds: 110, university: "Nottingham", event: "BUTTS Champs", season: "23/24" }
    ],
    wa18: [
      { category: "Recurve Open", name: "William Pike", score: 579, golds: 42, university: "Warwick", event: "BUCS Finals", season: "19/20" },
      { category: "Recurve Female", name: "Louisa Piper", score: 575, golds: 37, university: "Nottingham", event: "BUCS Finals", season: "24/25" },
      { category: "Compound Open", name: "Kai Thomas-Prause", score: 588, golds: 48, university: "Warwick", event: "BUCS Finals", season: "19/20" },
      { category: "Compound Female", name: "Sarah Moon", score: 583, golds: 43, university: "Nottingham Trent", event: "BUCS Finals", season: "18/19" },
      { category: "Barebow Open", name: "Oliver Hicks", score: 565, golds: 32, university: "Birmingham", event: "BUCS Finals", season: "25/26" },
      { category: "Barebow Female", name: "Amelia Elgey", score: 484, golds: 10, university: "Birmingham", event: "BUCS Finals", season: "18/19" },
      { category: "Longbow Open", name: "Kieran Rugg", score: 417, golds: 4, university: "Nottingham", event: "BUCS Finals", season: "22/23" },
      { category: "Longbow Female", name: "Katie Axup", score: 390, golds: 3, university: "Loughborough", event: "BUCS Finals", season: "21/22" },
      { category: "Non Compound Team", name: "Birmingham", score: 2223, golds: 111, university: "Birmingham", event: "BUCS Finals", season: "17/18" },
      { category: "Compound Team", name: "Warwick", score: 1165, golds: 85, university: "Wariwck", event: "BUCS Finals", season: "18/19" }
    ],
    wa720: [
      { category: "Recurve Open", name: "Tom Hall", score: 651, golds: 27, university: "Warwick", event: "BUCS Outdoors", season: "17/18" },
      { category: "Recurve Female", name: "Megan Costall", score: 618, golds: 14, university: "Birmingham", event: "Toucan Outdoors", season: "23/24" },
      { category: "Compound Open", name: "Kai Thomas-Prause", score: 698, golds: 51, university: "Warwick", event: "BUCS Outdoors", season: "18/19" },
      { category: "Compound Female", name: "Sarah Moon", score: 691, golds: 45, university: "Nottingham Trent", event: "BUCS Outdoors", season: "18/19" },
      { category: "Barebow Open", name: "Oliver Hicks", score: 633, golds: 16, university: "Brimingham", event: "Toucan Outdoors", season: "25/26" },
      { category: "Barebow Female", name: "Ilia Sediq", score: 555, golds: 8, university: "Loughborough", event: "Toucan Outdoors", season: "23/24" },
      { category: "Longbow Open", name: "Kieran Rugg", score: 248, golds: "-", university: "Nottingham", event: "BUCS Outdoors", season: "25/26" },
      { category: "Longbow Female", name: "Katie Axup", score: 168, golds: 2, university: "Loughborough", event: "BUCS Outdoors", season: "22/23" },
      { category: "Non Compound Team", name: "Warwick", score: 2467, golds: 69, university: "Warwick", event: "BUCS Outdoors", season: "17/18" },
      { category: "Compound Team", name: "Warwick", score: 1740, golds: 110, university: "Warwick", event: "BUCS Outdoors", season: "18/19" }
    ],
    wa900: [
      { category: "Recurve Open", name: "James Woodgate", score: 860, golds: 57, university: "Warwick", event: "BUCS Outdoors", season: "21/22" },
      { category: "Recurve Female", name: "Louisa Piper", score: 845, golds: 45, university: "Nottingham", event: "BUTTS Outdoors", season: "21/22" },
      { category: "Compound Open", name: "Kai Thomas-Prause", score: 889, golds: 80, university: "Leicester", event: "BUCS Outdoors", season: "25/26" },
      { category: "Compound Female", name: "Faye Balcombe", score: 870, golds: 60, university: "Leicester", event: "BUCS Outdoors", season: "22/23" },
      { category: "Barebow Open", name: "Oliver Hicks", score: 823, golds: 40, university: "Birmingham", event: "BUCS Outdoors", season: "25/26" },
      { category: "Barebow Female", name: "Ilia Sediq", score: 718, golds: 16, university: "Loughborough", event: "BUCS Outdoors", season: "23/24" },
      { category: "Longbow Open", name: "Kieran Rugg", score: 424, golds: 1, university: "Nottingham", event: "BUCS Outdoors", season: "25/26" },
      { category: "Longbow Female", name: "Katie Axup", score: 416, golds: 4, university: "Loughborough", event: "BUCS Outdoors", season: "21/22" },
      { category: "Non Compound Team", name: "Warwick", score: 3295, golds: 158, university: "Warwick", event: "BUCS Outdoors", season: "21/22" },
      { category: "Compound Team", name: "Nottingham", score: 1734, golds: 119, university: "Nottingham", event: "BUCS Outdoors", season: "23/24" }
    ]
  },
  novice: {
    portsmouth: [
      { category: "Recurve Open", name: "Sesha Shayan", score: 555, golds: 25, university: "Nottingham", event: "BUTTS Champs", season: "17/18" },
      { category: "Recurve Female", name: "Amanda Liu", score: 558, golds: 29, university: "Oxford", event: "BUCS Qualifiers", season: "22/23" },
      { category: "Compound Open", name: "Lucas Yau", score: 557, golds: 18, university: "Loughborough", event: "Toucan Champs", season: "24/25" },
      { category: "Compound Female", name: "Aleksandra Michalska", score: 546, golds: 11, university: "Birmingham", event: "Toucan Champs", season: "25/26" },
      { category: "Barebow Open", name: "Mateusz Weclawowicz", score: 526, golds: 15, university: "De Montfort", event: "BUTTS Champs", season: "19/20" },
      { category: "Barebow Female", name: "Heather Li", score: 511, golds: 12, university: "Birmingham", event: "BUTTS Leg 1", season: "25/26" },
      { category: "Longbow Open", name: "Kieran Rugg", score: 482, golds: 10, university: "Nottingham", event: "BUCS Qualifiers", season: "22/23" },
      { category: "Longbow Female", name: "Katie Axup", score: 396, golds: "-", university: "Loughborough", event: "BUTTS Champs", season: "21/22" },
      { category: "Non Compound Team", name: "Nottingham", score: 2100, golds: 60, university: "Nottingham", event: "BUTTS Champs", season: "17/18" }
    ],
    wa18: [
      { category: "Recurve Open", name: "Skyler Airei", score: 501, golds: 13, university: "Leicester", event: "BUCS Finals", season: "25/26" },
      { category: "Recurve Female", name: "Alia Ghosheh", score: 513, golds: 13, university: "Birmingham", event: "BUCS Finals", season: "23/24" },
      { category: "Compound Open", name: "-", score: "-", golds: "-", university: "-", event: "-", season: "-" },
      { category: "Compound Female", name: "-", score: "-", golds: "-", university: "-", event: "-", season: "-" },
      { category: "Barebow Open", name: "Leon Cao", score: 470, golds: 9, university: "Warwick", event: "BUCS Finals", season: "22/23" },
      { category: "Barebow Female", name: "Amiko Howell", score: 389, golds: 7, university: "De Montfort", event: "BUCS Finals", season: "23/24" },
      { category: "Longbow Open", name: "Kieran Rugg", score: 417, golds: 4, university: "Nottingham", event: "BUCS Finals", season: "22/23" },
      { category: "Longbow Female", name: "Katie Axup", score: 390, golds: 3, university: "Loughborough", event: "BUCS Finals", season: "21/22" },
      { category: "Non Compound Team", name: "Birmingham", score: 1875, golds: 35, university: "Birmingham", event: "BUCS Finals", season: "22/23" }
    ],
    wa720: [
      { category: "Recurve Open", name: "Dominic Kelsey", score: 583, golds: 10, university: "Nottingham", event: "BUCS Outdoors", season: "20/21" },
      { category: "Recurve Female", name: "Amanda Liu", score: 540, golds: 4, university: "Oxford", event: "BUCS Outdoors", season: "22/23" },
      { category: "Compound Open", name: "Lucas Yau", score: 619, golds: 20, university: "Loughborough", event: "Toucan Outdoors", season: "24/25" },
      { category: "Compound Female", name: "Aleksandra Michalska", score: 541, golds: 12, university: "Birmingham", event: "BUCS Outdoors", season: "25/26" },
      { category: "Barebow Open", name: "Euan Kieth", score: 530, golds: 5, university: "Coventry", event: "BUCS Outdoors", season: "22/23" },
      { category: "Barebow Female", name: "Ilia Sediq", score: 495, golds: 2, university: "Loughborogh", event: "BUCS Outdoors", season: "21/22" },
      { category: "Longbow Open", name: "Jago Elliott", score: 263, golds: 2, university: "Nottingham", event: "Toucan Outdoors", season: "23/24" },
      { category: "Longbow Female", name: "Katy Bentham", score: 227, golds: "-", university: "Nottingham", event: "BUCS Outdoors", season: "25/26" },
      { category: "Non Compound Team", name: "Birmingham", score: 1951, golds: 19, university: "Birmingham", event: "BUCS Outdoors", season: "25/26" }
    ],
    wa900: [
      { category: "Recurve Open", name: "Richard Aldis", score: 752, golds: 13, university: "Warwick", event: "BUCS Outdoors", season: "23/24" },
      { category: "Recurve Female", name: "Wiebke von Abel", score: 725, golds: 18, university: "Birmingham", event: "BUCS Outdoors", season: "24/25" },
      { category: "Compound Open", name: "Lucas Yau", score: 817, golds: 33, university: "Loughborough", event: "BUCS Outdoors", season: "24/25" },
      { category: "Compound Female", name: "Aleksandra Michalska", score: 748, golds: 17, university: "Birmingham", event: "BUCS Outdoors", season: "25/26" },
      { category: "Barebow Open", name: "Josuf Hyseni", score: 674, golds: 10, university: "Birmingham", event: "BUCS Outdoors", season: "24/25" },
      { category: "Barebow Female", name: "Ilia Sediq", score: 595, golds: 7, university: "Loughborough", event: "BUCS Outdoors", season: "21/22" },
      { category: "Longbow Open", name: "Jago Elliott", score: 354, golds: 2, university: "Nottingham", event: "BUCS Outdoors", season: "23/24" },
      { category: "Longbow Female", name: "Katie Axup", score: 324, golds: 2, university: "Loughborough", event: "BUTTS Outdoors", season: "21/22" },
      { category: "Non Compound Team", name: "Warwick", score: 2776, golds: 48, university: "Warwick", event: "BUCS Outdoors", season: "23/24" }
    ]
  }
};

// Detailed Standings Dataset
const fullStandingsData = {
  div1: {
    experienced: [
      { pos: "1st", uni: "Birmingham", l1_score: "-", l1_pts: "-", l2_score: "-", l2_pts: "-", l3_score: "-", l3_pts: "-", ch_score: "-", ch_pts: "-", agg: "-", total_pts: "-" },
      { pos: "2nd", uni: "Nottingham", l1_score: "-", l1_pts: "-", l2_score: "-", l2_pts: "-", l3_score: "-", l3_pts: "-", ch_score: "-", ch_pts: "-", agg: "-", total_pts: "-" },
      { pos: "3rd", uni: "Warwick", l1_score: "-", l1_pts: "-", l2_score: "-", l2_pts: "-", l3_score: "-", l3_pts: "-", ch_score: "-", ch_pts: "-", agg: "-", total_pts: "-" },
      { pos: "4th", uni: "Leicester", l1_score: "-", l1_pts: "-", l2_score: "-", l2_pts: "-", l3_score: "-", l3_pts: "-", ch_score: "-", ch_pts: "-", agg: "-", total_pts: "-" },
      { pos: "5th", uni: "Loughborough", l1_score: "-", l1_pts: "-", l2_score: "-", l2_pts: "-", l3_score: "-", l3_pts: "-", ch_score: "-", ch_pts: "-", agg: "-", total_pts: "-" },
      { pos: "6th", uni: "Oxford", l1_score: "-", l1_pts: "-", l2_score: "-", l2_pts: "-", l3_score: "-", l3_pts: "-", ch_score: "-", ch_pts: "-", agg: "-", total_pts: "-" },
      { pos: "7th", uni: "Northampton", l1_score: "-", l1_pts: "-", l2_score: "-", l2_pts: "-", l3_score: "-", l3_pts: "-", ch_score: "-", ch_pts: "-", agg: "-", total_pts: "-" },
      { pos: "8th", uni: "Coventry", l1_score: "-", l1_pts: "-", l2_score: "-", l2_pts: "-", l3_score: "-", l3_pts: "-", ch_score: "-", ch_pts: "-", agg: "-", total_pts: "-" }
    ],
    novice: [
      { pos: "1st", uni: "Birmingham", l1_score: "-", l1_pts: "-", l2_score: "-", l2_pts: "-", l3_score: "-", l3_pts: "-", ch_score: "-", ch_pts: "-", agg: "-", total_pts: "-" },
      { pos: "2nd", uni: "Nottingham", l1_score: "-", l1_pts: "-", l2_score: "-", l2_pts: "-", l3_score: "-", l3_pts: "-", ch_score: "-", ch_pts: "-", agg: "-", total_pts: "-" },
      { pos: "3rd", uni: "Warwick", l1_score: "-", l1_pts: "-", l2_score: "-", l2_pts: "-", l3_score: "-", l3_pts: "-", ch_score: "-", ch_pts: "-", agg: "-", total_pts: "-" },
      { pos: "4th", uni: "Leicester", l1_score: "-", l1_pts: "-", l2_score: "-", l2_pts: "-", l3_score: "-", l3_pts: "-", ch_score: "-", ch_pts: "-", agg: "-", total_pts: "-" },
      { pos: "5th", uni: "Loughborough", l1_score: "-", l1_pts: "-", l2_score: "-", l2_pts: "-", l3_score: "-", l3_pts: "-", ch_score: "-", ch_pts: "-", agg: "-", total_pts: "-" },
      { pos: "6th", uni: "Oxford", l1_score: "-", l1_pts: "-", l2_score: "-", l2_pts: "-", l3_score: "-", l3_pts: "-", ch_score: "-", ch_pts: "-", agg: "-", total_pts: "-" },
      { pos: "7th", uni: "Northampton", l1_score: "-", l1_pts: "-", l2_score: "-", l2_pts: "-", l3_score: "-", l3_pts: "-", ch_score: "-", ch_pts: "-", agg: "-", total_pts: "-" },
      { pos: "8th", uni: "Coventry", l1_score: "-", l1_pts: "-", l2_score: "-", l2_pts: "-", l3_score: "-", l3_pts: "-", ch_score: "-", ch_pts: "-", agg: "-", total_pts: "-" }
    ]
  },
  div2: {
    experienced: [
      { pos: "1st", uni: "Nottingham Trent", l1_score: "-", l1_pts: "-", l2_score: "-", l2_pts: "-", l3_score: "-", l3_pts: "-", ch_score: "-", ch_pts: "-", agg: "-", total_pts: "-" },
      { pos: "2nd", uni: "Cambridge", l1_score: "-", l1_pts: "-", l2_score: "-", l2_pts: "-", l3_score: "-", l3_pts: "-", ch_score: "-", ch_pts: "-", agg: "-", total_pts: "-" },
      { pos: "3rd", uni: "De Montfort", l1_score: "-", l1_pts: "-", l2_score: "-", l2_pts: "-", l3_score: "-", l3_pts: "-", ch_score: "-", ch_pts: "-", agg: "-", total_pts: "-" },
      { pos: "4th", uni: "Derby", l1_score: "-", l1_pts: "-", l2_score: "-", l2_pts: "-", l3_score: "-", l3_pts: "-", ch_score: "-", ch_pts: "-", agg: "-", total_pts: "-" },
      { pos: "5th", uni: "Harper Adams", l1_score: "-", l1_pts: "-", l2_score: "-", l2_pts: "-", l3_score: "-", l3_pts: "-", ch_score: "-", ch_pts: "-", agg: "-", total_pts: "-" },
      { pos: "6th", uni: "Lincoln", l1_score: "-", l1_pts: "-", l2_score: "-", l2_pts: "-", l3_score: "-", l3_pts: "-", ch_score: "-", ch_pts: "-", agg: "-", total_pts: "-" }
    ],
    novice: [
      { pos: "1st", uni: "Nottingham Trent", l1_score: "-", l1_pts: "-", l2_score: "-", l2_pts: "-", l3_score: "-", l3_pts: "-", ch_score: "-", ch_pts: "-", agg: "-", total_pts: "-" },
      { pos: "2nd", uni: "Cambridge", l1_score: "-", l1_pts: "-", l2_score: "-", l2_pts: "-", l3_score: "-", l3_pts: "-", ch_score: "-", ch_pts: "-", agg: "-", total_pts: "-" },
      { pos: "3rd", uni: "De Montfort", l1_score: "-", l1_pts: "-", l2_score: "-", l2_pts: "-", l3_score: "-", l3_pts: "-", ch_score: "-", ch_pts: "-", agg: "-", total_pts: "-" },
      { pos: "4th", uni: "Derby", l1_score: "-", l1_pts: "-", l2_score: "-", l2_pts: "-", l3_score: "-", l3_pts: "-", ch_score: "-", ch_pts: "-", agg: "-", total_pts: "-" },
      { pos: "5th", uni: "Harper Adams", l1_score: "-", l1_pts: "-", l2_score: "-", l2_pts: "-", l3_score: "-", l3_pts: "-", ch_score: "-", ch_pts: "-", agg: "-", total_pts: "-" },
      { pos: "6th", uni: "Lincoln", l1_score: "-", l1_pts: "-", l2_score: "-", l2_pts: "-", l3_score: "-", l3_pts: "-", ch_score: "-", ch_pts: "-", agg: "-", total_pts: "-" }
    ]
  }
};

let standingsDivision = "div1";
let standingsCategory = "experienced";


function renderFullStandings() {
  const tbody = document.getElementById("standings-table-body");
  const title = document.getElementById("standings-table-title");
  if (!tbody) return;

  
  if (title) {
    const divName = standingsDivision === "div1" ? "DIVISION 1" : "DIVISION 2";
    const catName = standingsCategory === "experienced" ? "EXPERIENCED" : "NOVICE";
    title.textContent = `${divName} ${catName} TABLE`;
  }

  const list = fullStandingsData[standingsDivision][standingsCategory];
  tbody.innerHTML = "";

  list.forEach(row => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="col-pos">${row.pos}</td>
      <td class="col-uni">${row.uni}</td>
      <td>${row.l1_score}</td>
      <td class="col-pts">${row.l1_pts}</td>
      <td>${row.l2_score}</td>
      <td class="col-pts">${row.l2_pts}</td>
      <td>${row.l3_score}</td>
      <td class="col-pts">${row.l3_pts}</td>
      <td>${row.ch_score}</td>
      <td class="col-pts">${row.ch_pts}</td>
      <td class="col-agg">${row.agg}</td>
      <td class="col-total-pts">${row.total_pts}</td>
    `;
    tbody.appendChild(tr);
  });
}


function setStandingsDivision(divKey) {
  standingsDivision = divKey;
  updateActiveButtons("#division-toggles", divKey);
  renderFullStandings();
}

function setStandingsCategory(catKey) {
  standingsCategory = catKey;
  updateActiveButtons("#experience-toggles", catKey);
  renderFullStandings();
}


document.addEventListener("DOMContentLoaded", function () {
  renderFullStandings();
});


let currentCategory = 'open';
let currentRound = 'portsmouth';


let currentCategoryR = 'experienced';
let currentRoundR = 'portsmouth';


function renderBadgeScores() {
  const tbody = document.getElementById("badge-table-body");
  if (!tbody) return;

  const data = badgeScores[currentCategory][currentRound];

  data.forEach((row, index) => {
    let tr = tbody.children[index];

    if (!tr) {
      tr = document.createElement("tr");
      tr.innerHTML = `
        <td class="cell-bowstyle"></td>
        <td class="cell-score cell-white"></td>
        <td class="cell-score cell-black"></td>
        <td class="cell-score cell-blue"></td>
        <td class="cell-score cell-red"></td>
        <td class="cell-score cell-gold"></td>
      `;
      tbody.appendChild(tr);
    }

    tr.querySelector(".cell-bowstyle").textContent = row.bowstyle;
    tr.querySelector(".cell-white").textContent = row.white;
    tr.querySelector(".cell-black").textContent = row.black;
    tr.querySelector(".cell-blue").textContent = row.blue;
    tr.querySelector(".cell-red").textContent = row.red;
    tr.querySelector(".cell-gold").textContent = row.gold;
  });
}


function renderRecord() {
  const tbody = document.getElementById("record-table-body");
  if (!tbody) return;

  const data = record[currentCategoryR][currentRoundR];
  tbody.innerHTML = ""; 

  data.forEach((row) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="cell-category">${row.category}</td>
      <td class="cell-name">${row.name}</td>
      <td class="cell-score">${row.score}</td>
      <td class="cell-golds">${row.golds}</td>
      <td class="cell-university">${row.university}</td>
      <td class="cell-event">${row.event}</td>
      <td class="cell-season">${row.season}</td>
    `;
    tbody.appendChild(tr);
  });
}


function setCategory(categoryKey) {
  currentCategory = categoryKey;
  currentCategoryR = categoryKey;
  
  updateActiveButtons("#category-toggles", categoryKey);

  if (document.getElementById("badge-table-body")) {
    renderBadgeScores();
  }
  if (document.getElementById("record-table-body")) {
    renderRecord();
  }
}


function setRound(roundKey) {
  
  currentRound = roundKey;
  currentRoundR = roundKey;

  updateActiveButtons("#round-toggles", roundKey);

  if (document.getElementById("badge-table-body")) {
    renderBadgeScores();
  }
  if (document.getElementById("record-table-body")) {
    renderRecord();
  }
}


function updateActiveButtons(containerSelector, activeKey) {
  const container = document.querySelector(containerSelector);
  if (!container) return;
  container.querySelectorAll(".toggle-btn").forEach(btn => {
    const isActive = btn.getAttribute("onclick").includes(`'${activeKey}'`);
    btn.classList.toggle("active", isActive);
  });
}


document.addEventListener("DOMContentLoaded", function () {
  if (document.getElementById("badge-table-body")) {
    renderBadgeScores();
  }
  if (document.getElementById("record-table-body")) {
    renderRecord();
  }
});

