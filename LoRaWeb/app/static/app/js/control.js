const socket = io()

const sttNhietDo = document.getElementById("nhietdo")
const sttDoAm = document.getElementById("doAm")
const sttAnhSang = document.getElementById("anhSang")
const sttden = document.getElementById("den")
const stttivi = document.getElementById("tivi")

  socket.on("temp",function(data_received){
      let nhietdo = data_received
      document.getElementById("temp_value").innerHTML = nhietdo + "°C"

      if(nhietdo <= 30){
        sttNhietDo.style.backgroundImage = "linear-gradient(rgb(224, 238, 147),rgb(242, 182, 174))";
      }else if(nhietdo <= 36){

        sttNhietDo.style.backgroundImage = "linear-gradient(rgb(234, 251, 0),rgb(249, 74, 5))";
      }else{
        sttNhietDo.style.backgroundImage = "linear-gradient(rgb(242, 86, 86),red)";        
        alert("cảnh báo nhiệt độ cao quá mức");
      }

      //thêm giá trị vào biểu đồ
      updatee.data.datasets[0].data.push(nhietdo)
      updatee.data.labels.push(new Date().getSeconds());
  })

  socket.on("humi",function(data_received){
    let doam = data_received
    document.getElementById("humi_value").innerHTML = doam + "%"
    
    if(doam <= 10){
      sttDoAm.style.backgroundImage = "linear-gradient(rgb(194, 176, 239),rgb(135, 92, 243))";
    }else if(doam <= 65){
      sttDoAm.style.backgroundImage = "linear-gradient(rgb(132, 90, 238),rgb(102, 45, 247))";
    }else{
      sttDoAm.style.backgroundImage = "linear-gradient(rgb(78, 84, 239),blue)";
    }

    updatee.data.datasets[1].data.push(doam)
  })

  socket.on("light",function(data_received){
    let anhsang = data_received
    document.getElementById("light_value").innerHTML = anhsang +" lux"

    if(anhsang <= 100){
      sttAnhSang.style.backgroundImage = "linear-gradient(yellow,yellow)";
    }else if(anhsang <=200){
      confirm("cảnh báo");
      sttAnhSang.style.backgroundImage = "linear-gradient(rgb(255, 245, 124),rgb(240, 240, 72))";
    }else{
      sttAnhSang.style.backgroundImage = "linear-gradient(rgb(245, 245, 124),rgb(249, 249, 222))";
    }

      updatee.data.datasets[2].data.push(anhsang)
      updatee.update()
    
        updatee.data.labels.push(new Date().getSeconds());
        updatee.data.labels.shift()
      
  })


const updatee = new Chart("myChart", {
  
  type: "line",
  data: {
    labels: [],
    datasets: [{
        label: "Nhiệt độ",
        lineTension: 0.5,
        backgroundColor: "red",      
        borderColor: "red",         
        data: []
      },{
        label: "Độ ẩm",
        lineTension: 0.5,
        backgroundColor: "blue",      
        borderColor: "blue",         
        data: []
      },{
        label: "Ánh sáng",              
        lineTension: 0.5,
        backgroundColor: "yellow",      
        borderColor: "yellow",         
        data: []
      }
    ]
  },
  options: {
   
    scales: {
      x: {
        title:{
          display: false,
          text: "TIME (s)"
        }
      }
    }
  }
})

socket.on("led",function(data_received){
  if(data_received == 1){
    document.getElementById("checkboxThreeInput_den").checked =true
    document.getElementById("light_img").src='static/app/images/on_light.png'
    sttden.style.backgroundColor = "greenyellow";
  } else{
    document.getElementById("checkboxThreeInput_den").checked = false
    document.getElementById("light_img").src='static/app/images/off_light.png'
    sttden.style.backgroundColor = "DarkGray";
  }
})

socket.on("pump",function(data_received){
  if(data_received == 1){
    document.getElementById("Input_tv").checked = true
    document.getElementById("tv_img").src='static/app/images/on_pump.png'
    stttivi.style.backgroundColor = "PaleGreen";
  } else{
    document.getElementById("output_tv").checked = false
    document.getElementById("tv_img").src='static/app/images/off_pump.png'
    stttivi.style.backgroundColor = "DarkGray";
  }
})
function on_off_led(){
  let trangthai = document.getElementById("checkboxThreeInput_den")
  if(trangthai.checked == true){      
    var result = confirm(" Turn on LED ? ")
      if(result){
        socket.emit("control_led","1")
      } else {
        trangthai.checked = false
      }
  }else{
    var result1= confirm("Turn off Led? ")
    if(result1){
      socket.emit("control_led","0")
    }
  }
}

function kiemtra_on_pump(){
  if(confirm("Turn on the pump") == true){
    socket.emit("control_pump","1")
  }
}
function kiemtra_off_pump(){
  if(confirm("Turn off the pump") == true){
    socket.emit("control_pump","0")
  }
}

function highChart(){
  document.getElementById("myChart").style.opacity = "1"
}
highChart();