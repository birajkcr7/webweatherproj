const cityName = document.getElementById("cityName");
const submitBtn = document.getElementById("submitBtn");
const temp_status =document.getElementById("temp_status");
const temp_real_value =document.getElementById("temp_real_value");
const city_name = document.getElementById("city_name");
const datahide = document.querySelector(".middle_layer");

const getInfo = async(event)=>{
    event.preventDefault();
    let cityValue = cityName.value;
    if(cityValue===""){
        city_name.innerText =  ` please write city name `;
        datahide.classList.add("data_hide");
    } else {
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&units=metric&appid=590615a4cf0b67905ae185691df79eaf`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];

            temp_real_value.innerText = arrData[0].main.temp;
            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            const tempMood = arrData[0].weather[0].main;

            if(tempMood=="Clear"){
                temp_status.innerHTML =
                "<i class='fas fa-sun' style='color: #eccc68;'></i>";
            }else if(tempMood=="Clouds"){
                temp_status.innerHTML =
                "<i class ='fas fa-cloud' style='color: #f1f2f6;'></i>";
            }else if(tempMood=="Rain"){
                temp_status.innerHTML =
                "<i class ='fas fa-cloud-rain' style='color: #a4b0be;'></i>"
            }else {
                temp_status.innerHTML =
                "<i class ='fas fa-sun' style='color: #eccc68;'></i>"
            }

            datahide.classList.remove("data_hide");

        }catch {
            city_name.innerText =  ` please write correct city name `;
            datahide.classList.add("data_hide");
        }
        

    }

}

submitBtn.addEventListener("click", getInfo);