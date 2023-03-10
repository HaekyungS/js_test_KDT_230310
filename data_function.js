const KDT = {
  "프로그램 이름": "K-Disital Training",
  "프로그램 개요": "기업이 요구하는 프레임워크를 활용한 풀스택 개발자(NODE, ECMAscript) 양성과정",
  "강 사": "공욱재",
  "학생수": "25명",
  "학원명": "그린컴퓨터아트학원 대전둔산"
}


const Img = {
  "깃허브": "https://github.com/kongukjae/kdt-2-fullstack",
  "클래스룸": "https://classroom.google.com/c/NTA5MjIxNDM1NzIw",
  "슬랙": "https://kongukjae.slack.com/archives/C04PRUMAGS0",
  "노션": "https://kongukjae.notion.site/6be9e1e0b82a410da66c49dae3400a82?v=83576d4636024993a730f806d51eeb5a"
}


const studentList = [
  "강지민",
  "곽윤호",
  "권예준",
  "김동주",
  "김은아",
  "김종윤",
  "김지섭",
  "김형진",
  "노수민",
  "류은이",
  "박달재",
  "박수연",
  "박준형",
  "성해경",
  "이경택",
  "이세민",
  "이재권",
  "임지성",
  "장루빈",
  "정성철",
  "정지은",
  "정희은",
  "최대건",
  "한유진",
  "허진",
];



// element 생성하는 함수
function CreateDoc(Tag, parents, attri, attrivalue) {
  const element = document.createElement(Tag)
  parents.appendChild(element);
  if (attri !== undefined) {
    element.setAttribute(attri, attrivalue)
  }
};



// 공통으로 들어갈 스타일 함수.
function CommonStyle(Tag, Width, Height, BackgroundColor) {
  Tag.style.width = Width;
  Tag.style.height = Height;
  Tag.style.backgroundColor = BackgroundColor;
};



// Display 적용 함수
function DisplayFlex(Tag, Display, Direc,Justify) {
  Tag.style.display = Display
  if (Display === "flex") {
    Tag.style.display = "flex";
    Tag.style.alignItems = "center"
    Tag.style.flexDirection = Direc
    if(Justify === undefined){
      Tag.style.justifyContent = "center";}
    if (Direc === undefined)
      Tag.style.flexDirection = "column";

  };
  // Display 값이 만약 flex 면 위 속성 모두 적용.
};



//폰트 적용 함수
function FontStyle(Tag, Font, Size, Align) {
  Tag.style.fontFamily = Font;
  Tag.style.fontSize = Size;
  if (Align !== undefined) {
    Tag.style.textAlign = Align
  }
};
