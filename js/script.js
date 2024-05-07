window.addEventListener("load", () => {
    let dropDownButton = document.querySelector(".dropdown")
    let firstLink = document.querySelector("#link1")
    let secondLink = document.querySelector("#link2")
    let thirdLink = document.querySelector("#link3")
    let linksArray = [firstLink, secondLink, thirdLink]
    let rightDivInSecondSection = document.querySelector(".rightDivSecondSection")
    let promoterScoreSlider = document.querySelector("#promoterScoreSlider")
    let starsSlider = document.querySelector("#starsSlider")
    let circleChart = document.querySelector("#circleChart")
    let chartSlider = document.querySelector("#chartSlider")
    let rightButtonFifthSection = document.querySelector("#rightButton")
    let leftButtonFifthSection = document.querySelector("#leftButton")
    let sliderImgs = document.querySelectorAll('.imgsSlider img');
    let firstText5thSection = document.querySelector("#firstText5thSection")
    let secondText5thSection = document.querySelector("#secondText5thSection")
    let lastSection = document.querySelector("#lastSectionContainer")
    let prev = document.querySelector("#previos")
    let next = document.querySelector("#next")
    let scrollContainer = document.querySelector(".gallary")
    dropDownButton.addEventListener("click", () => {
        document.querySelector(".dropdown-content").classList.toggle("show")
    });
    for (let i = 0; i < linksArray.length; i++) {
        linksArray[i].addEventListener("mouseover", () => {
            if (i == 0) {
                document.getElementById('menuImage').src = 'images/menuFirst.svg';
            } else if (i == 1) {
                document.getElementById('menuImage').src = 'images/qMenu.svg';

            } else if (i == 2) {
                document.getElementById('menuImage').src = 'images/chartMenu.svg';

            }
        })
        linksArray[i].addEventListener("mouseleave", () => {
            document.getElementById('menuImage').src = 'images/menuDefault.svg';
        })
    }

    // to toogle classes when press in any place in right div 
    rightDivInSecondSection?.addEventListener("click", (event) => {
        document.querySelector("#circle").classList.toggle("circleRotate")
        document.querySelector("#score").classList.toggle("scoreDiv")
        document.querySelector("#answer").classList.toggle("answerDiv")
    })

    promoterScoreSlider?.addEventListener("click", () => {
        promoterScoreSlider.classList.add("hide")
        let parts = ["green", "yellow", "red"]
        let emojes = ["sad", "neutral", "love"]
        for (let i = 0; i < parts.length; i++) {
            document.querySelector(`#${parts[i]}Part`).classList.add(`${parts[i]}`)

        }
        for (let i = 0; i < emojes.length; i++) {
            document.querySelector(`#${emojes[i]}`).classList.add("emoje")

        }

    })
    starsSlider?.addEventListener("click", () => {
        let arrayOfElementes = ["first", "second", "third", "forth", "five"]
        for (let i = 0; i < arrayOfElementes.length; i++) {
            document.querySelector(`#${arrayOfElementes[i]}StarPurpleSlider`).classList.add(`${arrayOfElementes[i]}StarPurple`)
            document.querySelector(`#${arrayOfElementes[i]}StarGraySlider`).classList.add(`${arrayOfElementes[i]}StarGrey`)
        }
        document.querySelector("#stars").classList.add("show")
    })
    circleChart?.addEventListener("click", () => {
        circleChart.classList.add("circleChart")
        let arrayOfImgAndClassNumber = ["first", "second", "third", "forth", "last"]
        for (let i = 0; i < arrayOfImgAndClassNumber.length; i++) {
            document.querySelector(`#${arrayOfImgAndClassNumber[i]}Img`).classList.add(`${arrayOfImgAndClassNumber[i]}Img`)
        }

    })
    chartSlider?.addEventListener("click", () => {
        let allEmojes = document.querySelectorAll("img.toggleClass")
        for (let i = 0; i < allEmojes.length; i++) {
            allEmojes[i].setAttribute("style", "opacity:1")
        }
        for (let i = 0; i < 8; i++) {
            if (i == 4 || i == 5 || i == 6) {
                document.querySelector(`#answer${i + 1}`).classList.add("answer1")

            } else {
                document.querySelector(`#answer${i + 1}`).classList.add(`answer${i + 1}`)

            }
        }
    })
    //slider in 5th section
    const sliderFunction = () => {
        if (leftButtonFifthSection.disabled == false
        ) {
            sliderImgs[1].style.opacity = 1
            sliderImgs[2].style.opacity = 0;
            sliderImgs[1].classList.add("scrollToLeft") //come from right in the screen to its place
            sliderImgs[2].classList.add("scrollToRight")
            leftButtonFifthSection.style.backgroundColor = "#dddddd"
            leftButtonFifthSection.disabled = true
            firstText5thSection.hidden = false
            secondText5thSection.hidden = true
        } else {
            sliderImgs[1].style.opacity = 0
            sliderImgs[2].style.opacity = 1;
            sliderImgs[2].classList.remove("scrollToRight")
            sliderImgs[2].classList.add("scrollToLeft") //come from right in the screen to its place
            sliderImgs[1].classList.remove("scrollToLeft")
            sliderImgs[1].classList.add("scrollToRight") //hide from its place to right in the screen
            leftButtonFifthSection.style.backgroundColor = "#fff"
            leftButtonFifthSection.disabled = false
            firstText5thSection.hidden = true
            secondText5thSection.hidden = false


        }
    }
    rightButtonFifthSection?.addEventListener("click", () => {
        sliderFunction()
    })
    leftButtonFifthSection?.addEventListener("click", () => {
        sliderFunction()
    })
    lastSection?.addEventListener("click", (event) => {
        if (event.target.type != "text" && event.target.type != "submit") { //so if i press on the textinput or submit button it will not work
            document.querySelectorAll("#lastSectionContainer>div>div")[0].classList.toggle("hideToLeft")
            document.querySelectorAll("#lastSectionContainer>div>div")[1].classList.toggle("hideToRight")
            let imgs = document.querySelectorAll("#lastSectionContainer img")
            imgs[0].classList.toggle("hideImg")
            imgs[1].classList.toggle("show")
        }


    })
    next?.addEventListener("click", (event) => {
        scrollContainer.scrollLeft += (event.view.innerWidth*(70/100))
        prev.disabled = false
        prev.style.borderColor = "#11002A"
    })

    prev?.addEventListener("click", (event) => {
        if (scrollContainer.scrollLeft - (event.view.innerWidth*(70/100)) > 0) {
            scrollContainer.scrollLeft -= (event.view.innerWidth*(70/100))

        } else {
            scrollContainer.scrollLeft=0
            prev.disabled = true
            prev.style.borderColor = "#F3EBFE"
        }
    })

})

