const script =  [
    [
        {"type":"TITLE","text":"POLICE HQ","CG":"black","next":1},
        {"type":"CG","CG":"intro-police","text":[
            ["IPJR","I've got a beep, Agent Taro! He's changed again!"]
            ["IP","What're the coordinates, Agent Bijou?"],
            ["IPJR","40.2336735, -111.6600877!!"],
            ["IP","He's close."]
        ],"next":2},
        {"type":"CG","CG":"intro-policeJump","text":[
            ["IP","LET'S GO!!"]
        ],"next":3},
        {"type":"CG","CG":"intro-burstDoor","next":4},
        {"type":"scene","actors":["IP","SAL","IPJR"],"bg":"","text":[
            ["IP","Hello sir, are you the owner of this fine establishment?"],
            ["SAL","Uh!! Uh!! Yes!! I - I am!!"],
            ["IP","You got a name, Mr Owner?"],
            ["SAL","Sal!! My name is Sal!"],
            ["IP","Alright. Good."],
            ["IP","I don't mean to alarm you, Sal, but we've determined a man wanted by the FIP was just recently within the parameters of your little boutique. Have you seen anyone suspicious here within the past 10, maybe 15 minutes?"],
            ["IPJR","Anyone remarkably unremarkable??"],
            ["SAL","No!! No I don't think so!! What does this guy you're looking for look like?"],
        ],"next":4},
        {"type":"CG","CG":"intro-policeSmoke","text":[
            ["IP","Anyone."]
        ],"next":"SCENE-1"},
    ]
]

module.exports = script