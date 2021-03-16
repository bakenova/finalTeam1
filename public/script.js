const btn = document.querySelector("button");
console.log("Try it now!");

btn.addEventListener("click", () => {
    const winner = document.getElementById("winner");
    const score = document.getElementById("score-list");
    let allCombs = "";

    const team1 = {
        names: document.getElementsByName("team1_names")[0].value,
        score: document.getElementsByName("team1_score")[0].value,
    };
    const team2 = {
        names: document.getElementsByName("team2_names")[0].value,
        score: document.getElementsByName("team2_score")[0].value,
    };

    function findCombinationsUtil(arr, index, num, reducedNum) {
        if (reducedNum < 0) return;
        if (reducedNum === 0) {
            let comb = "(";
            for (let i = 0; i < index; i++) {
                comb += arr[i].toString();
                if (i !== index - 1) {
                    comb += ",";
                }
            }
            comb += ")";
            allCombs += comb;
            if (index !== 1) {
                allCombs += ", ";
            } else {
                allCombs += ".";
            }
            return;
        }

        let prev = index === 0 ? 1 : arr[index - 1];

        for (let k = prev; k <= num; k++) {
            arr[index] = k;
            findCombinationsUtil(arr, index + 1, num, reducedNum - k);
        }
    }

    function findCombinations(n) {
        let arr = [];
        findCombinationsUtil(arr, 0, n, n);
    }

    function playersNames(val) {
        names = val.split(" ");
        names.forEach(t => {
            if (t) {
                console.log(t);
            }
        });
    }

    if (team1.score > team2.score) {
        winner.textContent = "Team 1";
        findCombinations(team1.score);
        playersNames(team1.names);
    } else if (team1.score < team2.score) {
        winner.textContent = "Team 2";
        findCombinations(team2.score);
        playersNames(team2.names);
    } else {
        winner.textContent = "Draw";
    }
    score.textContent = allCombs;
});