var responseData = [
  {
    countryId: 1,
    countryName: "India",
    states: [
      {
        stateId: 1,
        stateName: "Gujarat",
        cities: [
          {
            cityId: 1,
            cityName: "Ahmadabad",
          },
          {
            cityId: 2,
            cityName: "Surat",
          },
          {
            cityId: 2,
            cityName: "Baroda",
          },
        ],
      },
      {
        stateId: 2,
        stateName: "Maharashtra",
        cities: [
          {
            cityId: 3,
            cityName: "Mumbai",
          },
          {
            cityId: 4,
            cityName: "Pune",
          },
        ],
      },
    ],
  },
  {
    countryId: 2,
    countryName: "Canada",
    states: [
      {
        stateId: 3,
        stateName: "Ontario",
        cities: [
          {
            cityId: 5,
            cityName: "Toronto",
          },
          {
            cityId: 6,
            cityName: "Hamilton",
          },
        ],
      },
    ],
  },
];

var country = document.getElementById("countrySelect");
var state = document.getElementById("stateSelect");
var city = document.getElementById("selectCity");
var ChangeStates = 0;

var countryOptions1 = document.createElement("option");
var countryOptions2 = document.createElement("option");

countryOptions1.innerHTML = responseData[0].countryName;
countryOptions1.value = responseData[0].countryName;
countryOptions1.id = responseData[0].countryId;
country.add(countryOptions1);

countryOptions2.innerHTML = responseData[1].countryName;
countryOptions2.value = responseData[1].countryName;
countryOptions2.id = responseData[1].countryId;
country.add(countryOptions2);

country.addEventListener("change", () => {
  var x = document.getElementById("countrySelect").selectedIndex;
  var y = document.getElementById("countrySelect").options;
  if (y[x].index == 1) {
    deleteOptionStates();
    for (var i = 0; i < responseData[y[x].index - 1].states.length; i++) {
      //console.log(i);
      createOptionStates(y[x].index - 1, i);
    }
    state.addEventListener("change", () => {
      var z = document.getElementById("stateSelect").selectedIndex;
      var f = document.getElementById("stateSelect").options;
      if (f[z].index == 1) {
        deleteOptionCity();
        for (
          var j = 0;
          j < responseData[y[x].index - 1].states[f[z].index - 1].cities.length;
          j++
        ) {
          createOptionCities(y[x].index - 1, f[z].index - 1, j);
        }
      } else if (f[z].index == 2) {
        deleteOptionCity();
        for (
          var j = 0;
          j < responseData[y[x].index - 1].states[f[z].index - 1].cities.length;
          j++
        ) {
          createOptionCities(y[x].index - 1, f[z].index - 1, j);
        }
      }
    });
  } else if (y[x].index == 2) {
    deleteOptionStates();
    for (var i = 0; i < responseData[y[x].index - 1].states.length; i++) {
      //console.log(i);
      createOptionStates(y[x].index - 1, i);
    }
    state.addEventListener("change", () => {
      var z = document.getElementById("stateSelect").selectedIndex;
      var f = document.getElementById("stateSelect").options;
      if (f[z].index == 1) {
        deleteOptionCity();
        for (
          var j = 0;
          j < responseData[y[x].index - 1].states[f[z].index - 1].cities.length;
          j++
        ) {
          createOptionCities(y[x].index - 1, f[z].index - 1, j);
        }
      }
    });
  }
  //console.log("Index: " + y[x].index + " is " + y[x].value);
});

// creating Options for states and deleting previous childNodes

function createOptionStates(countryIndex, index) {
  //if (ChangeStates == 0) {
  var stateOption = document.createElement("option");
  stateOption.innerHTML = responseData[countryIndex].states[index].stateName;
  stateOption.className = "allStates";
  //console.log(responseData[countryIndex].states[index].stateName);
  state.add(stateOption);
}

function deleteOptionStates() {
  //var list = document.getElementById("stateSelect");
  //var statesCount = list.childElementCount;
  var options = document.querySelectorAll(".allStates");
  options.forEach((ele) => {
    ele.remove();
  });
  /*
  //This is another way but above way is more simple
  for (var i = 1; i < statesCount; i++) {
    if (list.hasChildNodes()) {
      console.log(list.children[1]);
      list.removeChild(list.children[1]);
    }
  }
  */
}

// creating Options for city and deleting the previous child nodes
function createOptionCities(country_Index, state_index, city_index) {
  var cityOption = document.createElement("option");
  cityOption.innerHTML =
    responseData[country_Index].states[state_index].cities[city_index].cityName;
  city.add(cityOption);
}

function deleteOptionCity() {
  var city_list = document.getElementById("selectCity");
  var cityCount = city_list.childElementCount;

  for (var i = 1; i < cityCount; i++) {
    if (city_list.hasChildNodes()) {
      console.log(city_list.children[1]);
      city_list.removeChild(city_list.children[1]);
    }
  }
}
