const a = _EXAMDATA;
console.log(a);
// 위 하이퍼링크된 js 파일 데이터
// 자유롭게 활용

let a_key = Object.keys(a);
// a의 키값들을 a_key에 담기.
// console.log(a_key);
// 결과값 : ['teamInformation', 'trainingInformation', 'designInformation']

let a_key_key = [];

for (i = 0; i < a_key.length; i++) {
  // console.log(a[a_key[i]])
  // 객체의 키값으로 데이터가 한번씩 뜨는 것을 확인 가능.
  // 해당 객체들을 배열로 바꿔주기 위해 아래와 

  a_key[i] = a[a_key[i]];
  // a_key 라는 배열에 키값만 있었는데 배열 내 객체를 넣는 것까지 진행.
  a_key_key[i] = Object.keys(a_key[i])
  // a_key 라는 배열의 각 순번에 객체값 담음.

};

// console.log(a_key_key)
// console.log(a_key[0])
// 담긴 정보 확인.

// console.log(a_key_key[0][0])
// console.log(a_key[0][a_key_key[0][0]])
// 가장 안쪽 데이터 접근 확인. 결과값 0

// 처음엔 const로 선언. 내부 데이터가 추가되는건 문제 없는 줄 알았는데 const 의 경우 변하지 못하는 변수이기 때문에 아래 for 로 데이터를 추가하면 문법 오류 발생. let 이 적절함.


// body에 viewport 단위로 스타일설정
CommonStyle(document.body, "100vw", "100vh");

// 편의를 위해 id=root 인 div 을 root 이란 변수에 담음
const root = document.getElementById('root');
CommonStyle(root, "100%", "100%");
root.style.position = "relative"


// 해더부분 생성 및 스타일 적용
CreateDoc("header", root);
CommonStyle(root.children[0], "100%", "10%", a_key[2][a_key_key[2][0]][0]);
// console.log(a_key[2][a_key_key[2][0]][0])
// 색상적용을 위해 루트 한번 더 확인
root.children[0].textContent = "공욱재의 금쪽 상담소"
FontStyle(root.children[0], "", "30px", "center");

//해더 클릭 시 새로고침되도록 설정
root.children[0].addEventListener("click", function () {
  window.location.reload(true);
})


// nav 부분 생성 및 스타일 적용
CreateDoc("nav", root);
CommonStyle(root.children[1], "100%", "5%", a_key[2][a_key_key[2][0]][1]);
DisplayFlex(root.children[1], "inline-block");
root.children[1].style.position = "fixed"
root.children[1].innerHTML = "<p>" + a_key_key[1][0] + "</p>"
CommonStyle(root.children[1].children[0], "100%", "100%");
FontStyle(root.children[1].children[0], "", "20px", "center");

// console.log(a_key[1][a_key_key[1]])
// subject 위치 확인

CreateDoc("div", root.children[1]);
const nav_category = root.children[1].children[1];
nav_category.style.cssText = "display:none;"

// 하단으로 내려올 과목 갯수만큼의 div 생성
for (i = 0; i < a_key[1][a_key_key[1]].length; i++) {
  CreateDoc("div", root.children[1].children[1])
  CommonStyle(nav_category.children[i], "100%", "50%", a_key[2][a_key_key[2][0]][1])
  FontStyle(nav_category.children[i], "", "18px", "center")

  nav_category.children[i].textContent = a_key[1][a_key_key[1]][i];

  // 마우스 커서가 올라가면 글씨가 커지게.
  nav_category.children[i].addEventListener("mouseover", (event) => {
    event.target.style.transform = "scale(1.2)";
  })

  // 마우스 커서가 빠지면 글씨 원래대로.
  nav_category.children[i].addEventListener("mouseout", (event) => {
    event.target.style.transform = "";
  })

  // 카테고리 누르면 랜덤 4명 학생 뽑음
  nav_category.children[i].addEventListener("click", function () {
    root.children[2].children[0].children[0].textContent = this.textContent;

    let student = [];

    //4명의 학생 뽑기. => 랜덤
    for (i = 0; i < 4; i++) {

      //랜덤숫자로 한명의 학생을 뽑음.
      let studentname = studentnameList[Math.floor(Math.random() * studentnameList.length)]

      // 같은 학생이 중복으로 나오는 것을 방지하여 해당 학생이 배열에 포함된 사람인지 확인.
      if (student.indexOf(studentname) === -1) {

        // 배열에 포함된 사람이 아니라면 배열에 추가
        student[i] = studentname;
      }
      else {
        //배열에 이미 있는 사람은 담지 않고 새로 뽑기
        i--;
      }
      
    }
    console.log(student)
    // 콘솔로 중복이 없는지 재확인


    // 누르면 아이콘들 사라지도록 display 설정.
    root.children[2].children[0].children[1].style.display = "none"

    // 누르면 해당 탭에 랜덤으로 팀장과 팀원이 생성되게 만듦.
    // 데이터는 강사님 데이터에서 학생들만 변동
    for (i = 0; i < a_key_key[0].length; i++) {
      // 콘솔로 데이터 확인
      // console.log(a_key_key[0])

      // root.children[2].children[1].children[i].children[0].innerHTML = a_key_key[0][i].substring(0,4)+"</br>"+a_key_key[0][i].substring(4,)

      // console.log(a_key_key[0][i].length)
      // console.log(root.children[2].children[1].children[i].children[0])

      if (i === 3) {
        root.children[2].children[1].children[i].children[0].innerHTML = a_key_key[0][i].substring(0, 4) + "<br>" + a_key_key[0][i].substring(4,)
        root.children[2].children[1].children[i].children[1].textContent = student[0]
      }
      else if (i === 4) {
        root.children[2].children[1].children[i].children[0].innerHTML = a_key_key[0][i].substring(0, 4) + "<br>" + a_key_key[0][i].substring(4,)
        root.children[2].children[1].children[i].children[1].innerHTML = `<a>${student[1]}</a>, <a>${student[2]}</a>, <a>${student[3]}</a>`;
      }
      else {
        root.children[2].children[1].children[i].children[0].innerHTML = a_key_key[0][i].substring(0, 4) + "<br>" + a_key_key[0][i].substring(4,)
        root.children[2].children[1].children[i].children[1].textContent = a_key[0][a_key_key[0][i]];
      }

    }
    // 보완할 점 : 강사님 데이터에서 가져온 단어가 줄바꿈이 이뤄지지않고 영역을 넘어가버림. -> 해결 ( 4번째글자 이후로 줄바꿈 )

  })

}
// console.log(a_key[0][a_key_key[0][0]])

// console.dir(root.children[1])

// nav 클릭 시 디스플레이를 변동할 부분에 대한 이벤트리스너
let Switch = true;
root.children[1].addEventListener("click", function () {
  if (Switch === true) {
    for (j = 1; j < root.children[1].children.length; j++) {
      root.children[1].children[j].style.display = "block"
    }

    //클릭 후 변수 바뀌게 하여 두번째 클릭 했을 땐 다른 디스플레이설정이 적용될 수 있도록 함.
    Switch = false;
  }
  else {
    for (j = 1; j < root.children[1].children.length; j++) {
      root.children[1].children[j].style.display = "none"
    }
    Switch = true;
  }
})


// main 부분 생성 및 스타일 적용
CreateDoc("main", root);
CommonStyle(root.children[2], "100%", "90%", a_key[2][a_key_key[2][0]][3]);
DisplayFlex(root.children[2], "flex")

// main > div
CreateDoc("div", root.children[2])
CommonStyle(root.children[2].children[0], "100%", "35%", "#fff")
DisplayFlex(root.children[2].children[0], "flex")


//main > div > p
CreateDoc("p", root.children[2].children[0])
FontStyle(root.children[2].children[0].children[0], "", "40px")
root.children[2].children[0].children[0].textContent = "K-Digital Training"
root.children[2].children[0].children[0].style.textAlign = "center";

// main > div > div
CreateDoc("div", root.children[2].children[0]);
CommonStyle(root.children[2].children[0].children[1], "65%");
DisplayFlex(root.children[2].children[0].children[1], "flex", "");


// 아이콘 순서를 위해 number 라는 변수 생성
let number = 0;

// Img 라는 객체에 key와 값 둘다 필요해서 for in 으로 작성
for (let icon in Img) {

  //각각 아이콘에 링크를 담을 것이기에 a태그를 생성하고 그 안에 img태그를 만듦.
  CreateDoc("a", root.children[2].children[0].children[1])
  CommonStyle(root.children[2].children[0].children[1].children[number], "15%", "50%");
  root.children[2].children[0].children[1].children[number].setAttribute("href", Img[icon]);

  //새창으로 열기
  root.children[2].children[0].children[1].children[number].setAttribute("target", "_blank");

  //동일한 간격으로 배치하기 위해 마진을 설정함.
  root.children[2].children[0].children[1].children[number].style.margin = "auto";

  CreateDoc("img", root.children[2].children[0].children[1].children[number], "src", "./사진/" + icon + ".png");

  // 이미지가 링크와 같은 사이즈가 될 수 있게 스타일 설정.
  CommonStyle(root.children[2].children[0].children[1].children[number].children[0], "100%", "100%");

  // 순차적으로 아이콘을 배치하려고 넣었기에 number 는 for 문 끝마다 1 씩 증감.
  number += 1;
}

// main > 하단 div
CreateDoc("div", root.children[2])
CommonStyle(root.children[2].children[1], "100%", "70%", a_key[2][a_key_key[2][0]][0])
DisplayFlex(root.children[2].children[1], "flex");


number = 0;
for (let title in KDT) {
  CreateDoc("div", root.children[2].children[1]);
  DisplayFlex(root.children[2].children[1].children[number], "flex", "");
  CommonStyle(root.children[2].children[1].children[number], "80%", "15%")

  CreateDoc("div", root.children[2].children[1].children[number])
  CommonStyle(root.children[2].children[1].children[number].children[0], "25%")
  root.children[2].children[1].children[number].children[0].style.borderRight = "0.5px solid red"
  root.children[2].children[1].children[number].children[0].innerHTML = title.substring(0, 4) + '<br>' + title.substring(5);

  FontStyle(root.children[2].children[1].children[number].children[0], "", "17px", "center")

  CreateDoc("div", root.children[2].children[1].children[number]);
  CommonStyle(root.children[2].children[1].children[number].children[1], "70%")
  root.children[2].children[1].children[number].children[1].textContent = KDT[title];
  root.children[2].children[1].children[number].children[1].style.marginLeft = "10px "

  number += 1;
}
