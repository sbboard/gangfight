const script =  [
    [
        {"type":"TITLE","CG":"intro-title","next":"ACT-1","text":[["",""]]},
    ],
    [
        {"type":"CG","CG":"intro-police","text":[
            ["IPJR","I've got a beep, Agent Taro! He's changed again!"],
            ["IP","What're the coordinates, Agent Bijou?"],
            ["IPJR","40.2336735, -111.6600877!"],
            ["IP","He's close."]
        ],"next":1},
        {"type":"CG","CG":"intro-policeJump","text":[
            ["IP","LET'S GO!"]
        ],"next":2},
        {"type":"CG","CG":"intro-burstDoor","next":3,"text":[["",""]]},
        {"type":"scene","bg":"shop","text":[
            ["SAL-shock","!!!","mainRight"],
            ["IP-note","Hello sir, are you the owner of this fine establishment?","mainLeft"],
            ["IPJR-intimidate","Uh... yeah! We're looking for the owner!","secLeft"],
            ["SAL-worry","Uh! Uh! Yes! I - I am!"],
            ["IP-note","You got a name, pal?"],
            ["SAL-worry","Sal! My name is Sal!"],
            ["IP-note","Alright. Good."],
            ["IP-interrogate","I don't mean to alarm you, Sal, but we've determined a man wanted by the FIP was just recently within the parameters of your little boutique. Have you seen anyone suspicious here within the past 10, maybe 15 minutes?"],
            ["IPJR-intimidate","Anyone remarkably unremarkable?"],
            ["SAL-worry","No! No I don't think so! What does this guy you're looking for look like?"],
        ],"next":4},
        {"type":"CG","CG":"intro-policeSmoke","text":[["IP","Anyone."]],"next":"ACT-2"},
    ],
    [
        {"type":"CG","CG":"santa-york-taylor-house","next":1,"text":[["","santa york"]]},
        {"type":"CG","CG":"game-title","next":2,"text":[["","title"]]},
        {"type":"CG","CG":"title-goal","text":[["","goal: find a girlfriend"]],"next":3},
        {"type":"interactive","text":[["","Select a girl to impress"]],"next":"idle"},
    ],
]

module.exports = script