document.addEventListener("DOMContentLoaded", () => {
    const pushButton = document.getElementById("pushButton");
    let interval = null; // 명확하게 초기화

    function getRandomColor() {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function startChangingColors() {
        if (interval !== null) return; // 이미 실행 중이면 또 실행되지 않도록 방지
        interval = setInterval(() => {
            document.body.style.backgroundColor = getRandomColor();
        }, 100);
    }

    function stopChangingColor() {
        if (interval !== null) {
            clearInterval(interval);
            interval = null; // interval을 null로 리셋해줘야 다시 시작할 수 있음
        }
    }

    pushButton.addEventListener("mouseover", () => {
        console.log("마우스가 버튼 위에 있음");
        startChangingColors();
    });

    pushButton.addEventListener("click", () => {
        console.log("버튼이 클릭됨");
        stopChangingColor();
    });
});