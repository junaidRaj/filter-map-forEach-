const mobile = [
    {
      companyName: "Samsung",
      cover: ["Samsung"],
      models: [
        {
          name: "SamsungGalaxyA04s",
          item: ["Samsung Galaxy A04s"],
        },
        {
          name: "SamsungGalaxyA04",
          item: ["Samsung Galaxy A04"],
        },
        {
          name: "SamsungGalaxyM135G",
          item: ["Samsung Galaxy M13 5G"],
        },
        {
          name: "SamsungGalaxyA13",
          item: ["Samsung Galaxy A13"],
        },
        {
          name: "SamsungGalaxyXcover6Pro",
          item: [
            "Samsung Galaxy Xcover6 Pro",
          ],
        },
        {
          name: "SamsungGalaxyS20FE",
          item: [
            "Samsung Galaxy S20 FE 2022",
          ],
        },
      ],
    },
    {
      companyName: "apple",
      cover: ["./images/cover/cover2.jpg", "Apple"],
      models: [
        {
          name: "AppleiPhoneXSMax",
          item: ["Apple iPhone XS Max"],
        },
        {
          name: "AppleiPhone13ProMax",
          item: ["Apple iPhone 13 Pro Max"],
        },
        {
          name: "AppleiPhone12ProMax",
          item: ["Apple iPhone 12 Pro Max"],
        },
        {
          name: "AppleiPhone12",
          item: ["Apple iPhone 12"],
        },
        {
          name: "AppleiPhoneSE",
          item: ["Apple iPhone SE (2020)"],
        },
        {
          name: "AppleiPhoneXR",
          item: ["Apple iPhone XR"],
        },
      ],
    },
  ];

  let company = document.getElementById("company");
  let modle = document.getElementById("modle");

mobile.forEach((value) =>{
    let option = document.createElement("option");
    option.innerHTML = value.companyName;
    company.appendChild(option);
});

company.addEventListener("change", () =>{
    modle.innerHTML = "";
    mobile.forEach((value) =>{
        if(value.companyName === company.value){
            modle.disabled = false;
            value.models.forEach((value) =>{
                let option = document.createElement("option");
                option.innerHTML = value.name;
                modle.appendChild(option);
            })
        }
    })
})

function data (){
    mobile.filter((val) =>{
        if(val.companyName === company.value){
            val.models.filter((val1)=>{
                if(val1.name === modle.value){
                    console.log(val1.item);
                }
            })
        }
    })
}
//   (map, find) Method

//   let company = document.getElementById("company");
//   let model = document.getElementById("modle");
  
//   let cname = mobile.map((value) => {
//     return value.companyName;
//   });
  
//   cname.forEach((value) => {
//     let option = document.createElement("option");
//     option.innerHTML = value;
//     company.appendChild(option);
//   });
  
//   company.addEventListener("change", () => {
//     model.innerHTML = "";
//     mobile.forEach((value) => {
//       if (value.companyName === company.value) {
//         model.disabled = false;
//         value.models.forEach((value) => {
//           let option = document.createElement("option");
//           option.innerHTML = value.name;
//           model.appendChild(option);
//         });
//       }
//     });
//   });
  
//   const data = () => {
//     mobile.find((value) => {
//       if (value.companyName === company.value) {
//         value.models.find((value) => {
//           if (value.name === model.value) {
//             console.log(value.item);
//           }
//         });
//       }
//     });
//   };