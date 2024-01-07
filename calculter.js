let allclicked = Array.from(document.querySelectorAll(".click"))
let result = document.querySelector(".result")
allclicked.map(btn => {
    btn.addEventListener("click", (e) => {
        switch (e.target.innerText) {
            case "AC":
                result.innerText = "";
                break;

            case "del":
                if (result.innerText) {
                    result.innerText = result.innerText.slice(0, -1);
                }
                break;

            default:
                result.innerText += e.target.innerText

                break;
                case "=":
                    try{
                        result.innerText = eval(result.innerText);
                        setTimeout(() => {
                            result.innerText = "";

                        }, 3000);
                    }catch{
                        window.alert("ERORR")
                        result.innerText = "";


                    }
        }
    })
})
