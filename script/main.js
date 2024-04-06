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
