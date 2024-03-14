import {func} from "./img.js"
import {func2} from "./info.js"
import {func3} from "./card.js"

let a = document.getElementById("sectionOne")

let Obj1 ={
    title: "THE MAN SONG",
    desc: " I would be complex, I would be coolThey'd say I played the field before I found someone to commit toAnd that would be okay for me to doEvery conquest I had made would make me more of a boss to you",
    btn:"Contact Me",
    myImg: "../imgs/img1.png"
}

let b = document.getElementById("sectionTwo")

let Obj2={
    title2: "Project Completed",
    img1: "../imgs/img1.png",
    desc1: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam, est ratione aut veritatis placeat earum voluptatum blanditiis officiis soluta sunt quod atque modi dolor quibusdam, at illum commodi aspernatur quos.",
    btn1: "LearnMore",
    img2: "../imgs/img1.png",
    desc2: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam, est ratione aut veritatis placeat earum voluptatum blanditiis officiis soluta sunt quod atque modi dolor quibusdam, at illum commodi aspernatur quos.",
    btn2: "Learn More",
    img3: "../imgs/img1.png",
    desc3: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam, est ratione aut veritatis placeat earum voluptatum blanditiis officiis soluta sunt quod atque modi dolor quibusdam, at illum commodi aspernatur quos.",
    btn3: "Learn More"
}

const {title, desc, btn, myImg} = Obj1
a.append(func2(title,desc,btn))
a.append(func(myImg))


const {title2, img1, desc1, btn1, img2, desc2, btn2, img3, desc3, btn3} = Obj2
b.append(func3(title2,img1,desc1,btn1,img2,desc2,btn2,img3,desc3,btn3)) 


