//step 1 요구사항 구현을 위한 전략
//TODO 메뉴 추가
// - [] 메뉴의 이름을 입력 받고 엔터키 입력으로 추가한다.
// - [] 메뉴의 이름을 입력 받고 확인 버튼을 클릭하면 메뉴를 추가한다.
// - [] 총 메뉴 개수를 count하여 보여준다.
// - [] 메뉴가 추가되고 나면, input은 빈 값으로 초기화한다,
// - [] 사용자 입력값이 빈 값이라면 추가되지 않는다.

const $ = (selector) => document.querySelector(selector);

function App(){

    //폼 태그에서 자동으로 submit 되는 걸 막는다. 
    $("#beer-menu-form").addEventListener("submit",(e) =>{
        e.preventDefault();
    });


    //함수로 만들어서 재사용 가능하게 하기
    const addMenuName = () =>{

        if($("#beer-menu-name").value ===""){
            alert("메뉴를 입력해주세요.");
            return;

        }
        
        
        
        const beerMenuName= $("#beer-menu-name").value;
        console.log(beerMenuName);

        const menuItemTemplate = (beerMenuName) => {
                            return `
                            <li class="menu-list-item d-flex items-center py-2">
                            <span class="w-100 pl-2 menu-name">${beerMenuName}</span>
                            <button
                                type ="button"
                                class ="bg-gray-50 text-gray-500 text-sm mr-1 menu-edit-button"
                            >
                            수정
                            </button>
                            <button
                                type ="button"
                                class ="bg-gray-50 text-gray-500 text-sm mr-1 menu-remove-button"
                            >
                            삭제
                            </button>
                            </li>`;
        };
        $("#beer-menu-list").insertAdjacentHTML(
                "beforeend",
                menuItemTemplate(beerMenuName)
        );
        //const 변수 = li 개수 카운팅해서 변수를 넣어주자
        const menuCount = $("#beer-menu-list").querySelectorAll("li").length
        $(".menu-count").innerText = `총 ${menuCount} 개`;

        //추가되었으니, input 태그에 있는 value값은 없애야 한다.
        $("#beer-menu-name").value ="";
            
  

    };

    //버튼 태그가 submit 할 때는 추가한다.
   $("#beer-menu-submit-button").addEventListener("click",()=>{
    addMenuName();

   });

    $("#beer-menu-name").addEventListener("keypress", (e)=>{
        //엔터가 아닌 값에 대해서는 그냥 리턴시킴
        if(e.key !=="Enter"){
            return;
        }
        addMenuName();

        //엔터눌렀을 때 input value가 빈 값이 아닐 때, 아래의 코드가 실행된다.
          
        
    });
}


App();



//TODO 메뉴 수정
// - [] 메뉴 수정 버튼 클릭 이벤트 받고, 메뉴 수정 모달창 뜬다.
// - [] 모달창에서 수정 메뉴명을 입력 받고, 확인버튼 누르면 메뉴가 수정된다.

//TODO 메뉴 삭제
// - [] 메뉴 삭제 이벤트를 받고, 메뉴 삭제 컨펌 모달창이 뜬다.
// - [] 삭세 버튼을 누르면, 해당 메뉴가 삭제된다.