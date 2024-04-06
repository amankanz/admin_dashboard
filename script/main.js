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
      data: [122, 132, 24, 20, 3],
    },
  ],
  chart: {
    type: "bar",
    height: 350,
  },
  colors: ["#246dec", "#cc3c43", "#367952", "#4f35al"],
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
