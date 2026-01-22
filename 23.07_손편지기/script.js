const firebaseConfig = {
  apiKey: "AIzaSyCGuUIytc4oTrtSI2nNatLCT3jRoPQFm4o",
  authDomain: "kimletter-d1f92.firebaseapp.com",
  databaseURL: "https://kimletter-d1f92-default-rtdb.firebaseio.com/",
  projectId: "kimletter-d1f92",
  storageBucket: "kimletter-d1f92.appspot.com",
  messagingSenderId: "131383273882",
  appId: "1:131383273882:web:360b689fb0bd0e8b0fb223",
  measurementId: "G-X0PCYVJM1Z",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getCurrentTime() {
  var now = new Date();
  var month = now.getMonth() + 1;
  var day = now.getDate();
  var hours = now.getHours();
  var minutes = now.getMinutes();

  var formattedTime = month + "/" + day + " " + hours + ":" + minutes;
  return formattedTime;
}

function sendLetter() {
  // 현재 시간 가져오기
  var currentTime = getCurrentTime();

  // 입력된 데이터 가져오기
  var name = document.getElementById("name").value;
  var adr = document.getElementById("adr").value;
  var phnumber = document.getElementById("phnumber").value;
  var blank = document.getElementById("blank").value;
  var letterContent = document.getElementById("letterContent").value;

  // JSON 데이터 생성
  var data = {
    timestamp: currentTime, // 현재 시간 추가
    sender: {
      name: name,
      phoneNumber: phnumber,
      adress: adr,
      blank: blank,
    },
    content: letterContent,
  };

  console.log("전송할 데이터:", data);

  // Firebase Realtime Database에 업로드
  var database = firebase.database();
  var dbRef = database.ref("letters");
  dbRef
    .push(data)
    .then(function () {
      alert("편지가 성공적으로 보내졌습니다.");
      window.location.href = "next.html";
    })
    .catch(function (error) {
      alert("편지 보내기 오류: " + error.message);
    });
}
const correctPassword = "8999";

function loadSavedData() {
  // 모달 창 표시
  var passwordModal = document.getElementById("passwordModal");
  passwordModal.style.display = "block";
}

function checkPassword() {
  var enteredPassword = document.getElementById("passwordInput").value;
  var passwordModal = document.getElementById("passwordModal");

  if (enteredPassword === correctPassword) {
    // 비밀번호가 올바르면 모달 창 닫고 데이터 로드
    passwordModal.style.display = "none";

    var savedDataDiv = document.getElementById("savedData");
    var database = firebase.database();
    var dbRef = database.ref("letters");

    var index = 0;

    // 데이터가 추가될 때마다 이벤트 리스너를 설정하여 데이터를 화면에 표시
    dbRef.on("child_added", function (snapshot) {
      var data = snapshot.val();
      index++;

      var content = `
                <div>
                    <h3>${index}번째 편지</h3>
                    <p>보낸시간: ${data.timestamp}</p>
                    <p>이름: ${data.sender.name}</p>
                    <p>전화번호: ${data.sender.phoneNumber}</p>
                    <p>주소: ${data.sender.adress}</p>
                    <br>
                    <p>편지내용: ${data.content}</p>
                </div>
                <hr>
            `;

      savedDataDiv.innerHTML += content;
    });
  } else {
    alert("비밀번호가 틀렸습니다.");
  }
}
