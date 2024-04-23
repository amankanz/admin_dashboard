"use strict";

// Data
const account1 = {
  owner: "Natukunda Pascal",
  pin: 1111,
  softcodesId: "psjsskskskskskskskskksksks",
  permission: "Read Only",
};

const account2 = {
  owner: "Kaneza Fred",
  pin: 2222,
  softcodesId: "ksjsskskskskskskskskksksks",
  permission: "Read Only",
};

const account3 = {
  owner: "Edson Smith",
  pin: 3333,
  softcodesId: "esjsskskskskskskskskksksks",
  permission: "Read Only",
};

const account4 = {
  owner: "Abdul Saidi",
  pin: 4444,
  softcodesId: "asjsskskskskskskskjdkkdkdksks",
  permission: "Read Only",
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const login_nav = document.querySelector("nav");
const Dashboard_app = document.querySelector("body");
const header = document.querySelector("header");
const aside = document.querySelector("aside");
const main_int = document.querySelector("main");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const softcodes_ids = document.querySelector(".softcodes_ids");

const btnLogin = document.querySelector(".login__btn");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const logout_user = document.querySelector(".logout_user");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

const create_user_name = function (accs) {
  accs.forEach((acc) => {
    acc.userName = acc.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
    console.log(acc);
  });
};

create_user_name(accounts);

const display_softcodes_ids = function (accs) {
  softcodes_ids.innerHTML = "";
  accs.forEach((acc) => {
    const html = `
    <tr>
        <td>${acc.owner}</td>
        <td>${acc.softcodesId}</td>
        <td>${acc.permission}</td>
    </tr>
    `;

    softcodes_ids.insertAdjacentHTML("afterbegin", html);
  });
};

let currentAccount;
// Event Handler
btnLogin.addEventListener("click", function (e) {
  e.preventDefault();

  currentAccount = accounts.find(
    (acc) => acc.userName === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    console.log("LOGIN");

    // Display Dashboard
    Dashboard_app.classList.add("grid-container");
    header.style.opacity = aside.style.opacity = main_int.style.opacity = 1;
    display_softcodes_ids(accounts);

    // Clear INput fields
    inputLoginUsername.value = "";
    inputLoginPin.value = "";
    inputLoginPin.blur();

    // Hide the Nav
    login_nav.classList.add("hide-nav-login");
  } else {
    labelWelcome.style.color = "red";
    labelWelcome.textContent = `Incorrect Pin!`;
  }
});

logout_user.addEventListener("click", function () {
  // Hide Dashboard
  Dashboard_app.classList.remove("grid-container");
  header.style.opacity = aside.style.opacity = main_int.style.opacity = 0;

  // Display login nav
  login_nav.classList.remove("hide-nav-login");
});

///////////////////////////////////////////////////////
// Sidebar Toggle
let sidebar_open = false;
const sidebar = document.getElementById("sidebar");

const open_sidebar = function () {
  if (!sidebar_open) {
    sidebar.classList.add("sidebar-responsive");
    sidebar_open = true;
  }
};

const close_sidebar = function () {
  if (sidebar_open) {
    sidebar.classList.remove("sidebar-responsive");
    sidebar_open = false;
  }
};

// ============ Charts ===========

// Bar chart

var barChartOptions = {
  series: [
    {
      data: [12, 9, 6, 4, 3],
    },
  ],
  chart: {
    type: "bar",
    height: 350,
  },
  colors: ["#246dec", "#cc3c43", "#367952", "#ffbf00"],
  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 4,
      horizontal: false,
      columnWidth: "40%",
    },
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  xaxis: {
    categories: [
      "Interships",
      "Mobil Development",
      "Web Development",
      "Repair & Maintenance",
      "Laptops",
    ],
  },
  yaxis: {
    title: {
      text: "Count",
    },
  },
};

var barChart = new ApexCharts(
  document.querySelector("#bar-chart"),
  barChartOptions
);
barChart.render();

// Area chart

var areaChartOptions = {
  series: [
    {
      name: "Purchase Order",
      // type: "area",
      data: [44, 55, 31, 47, 31, 109, 100],
    },
    {
      name: "Sales Orders",
      // type: "line",
      data: [55, 69, 45, 61, 43, 54, 41],
    },
  ],
  chart: {
    height: 350,
    type: "area",
  },
  colors: ["#ffbf00", "#246dec"],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  // fill: {
  //   type: "solid",
  //   opacity: [0.35, 1],
  // },
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  markers: {
    size: 0,
  },
  yaxis: [
    {
      title: {
        text: "Purchase Orders",
      },
    },
    {
      opposite: true,
      title: {
        text: "Sales Orders",
      },
    },
  ],
  tooltip: {
    shared: true,
    intersect: false,
    // y: {
    //   formatter: function (y) {
    //     if (typeof y !== "undefined") {
    //       return y.toFixed(0) + " points";
    //     }
    //     return y;
    //   },
    // },
  },
};

var areaChart = new ApexCharts(
  document.querySelector("#area-chart"),
  areaChartOptions
);
areaChart.render();
