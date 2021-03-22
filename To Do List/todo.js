// todo.js
 
const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");
 
const TODOS_Ls = "toDos"; // TODOS_Ls는 로컬스토리지에 toDoList 변수명을 저장한 상수
let toDos = []; // toDos는 할일을 저장한 배열
 
function deleteToDo(event) {
  const btn = event.target; // btn에 현재 event를 실행시킨 타켓(버튼)을 대입
  const li = btn.parentNode; // li에 btn의 부모 태그(li)를 대입 
  toDoList.removeChild(li); // toDo6ist태그의 자식에 있는 li(btn.parentNode)를 제거
  // filter를 사용해서 return 결과가 true인 것들만 추출됨
  const cleanToDos = toDos.filter(function (toDo) { 
    return toDo.id !== parseInt(li.id);
  });
  toDos = cleanToDos; // 추출된 내용을 toDos에 넣음
  saveToDos(); // localStorage에 저장
}
 
function saveToDos() {
  localStorage.setItem(TODOS_Ls, JSON.stringify(toDos)); // localStorage에 리스트 저장
}
 
function paintToDo(text) {
  const li = document.createElement("li"); // li 태그 생성
  const delBtn = document.createElement("button"); // button 태그 생성
  const span = document.createElement("span"); // span 태그 생성
  const newId = toDos.length + 1; 
  delBtn.innerText = "X";
  delBtn.addEventListener("click", deleteToDo); // delBtn에 클릭이벤트에 deleteToDo함수 연결
  span.innerText = text; // span태그에 input창에 입력한 값 삽입
  li.appendChild(span); // li의 자식에 span 연결
  li.appendChild(delBtn); // li의 자식에 delBtn 연결
  li.id = newId; 
  toDoList.appendChild(li); // toDoList의 자식에 li 연결
  const toDoObj = {
    text,
    id: newId,
  };
  toDos.push(toDoObj); // toDos에 toDoList 삽입
  saveToDos(); // localStorage에 저장하는 함수
}
 
function handleSubmit(event) {
  event.preventDefault(); // 이벤트가 작동하지 못하게 함
  const currentValue = toDoInput.value; // currentValue에 input창에 입력한 값 대입
  paintToDo(currentValue); // 리스트 추가하는 함수
  toDoInput.value = ""; // input창 초기화
}
 
function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_Ls);
  // localStorage에 TODOS_Ls가 있는지 확인
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos); // loadedToDos를 json객체로 변경
    parsedToDos.forEach(function (toDo) { // 객체 내용 한개씩 파라미터로 넣어서 함수 실행
      paintToDo(toDo.text); // 리스트 추가하는 함수
    });
  }
}
 
function init() {
  loadToDos();
  // toDoForm에서 submit에 handleSubmit 이벤트를 연결
  toDoForm.addEventListener("submit", handleSubmit);
}
 
init();