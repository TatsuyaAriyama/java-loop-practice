const questions = [
  {
    title: "1から5まで表示する",
    concept: "for",
    prompt: "1、2、3、4、5を1行ずつ表示します。for文の3つの部品を考えましょう。",
    output: "1\n2\n3\n4\n5",
    explanation: "for文は「最初に何をするか」「いつまで続けるか」「1回終わったらどう変えるか」を1行にまとめます。ここではiを1から始め、5以下の間だけ続け、毎回1ずつ増やします。",
    parts: [
      "class Main {\n  public static void main(String[] args) {\n    for (int i = ",
      { answer: "1", chars: 2 },
      "; i <= ",
      { answer: "5", chars: 2 },
      "; ",
      { answer: "i++", accepts: ["i++", "++i", "i += 1", "i=i+1", "i = i + 1"], chars: 6 },
      ") {\n      System.out.println(i);\n    }\n  }\n}"
    ],
    answer: `class Main {
  public static void main(String[] args) {
    for (int i = 1; i <= 5; i++) {
      System.out.println(i);
    }
  }
}`
  },
  {
    title: "2から10までの偶数を表示する",
    concept: "for",
    prompt: "2、4、6、8、10のように、2ずつ増える数字だけを表示します。",
    output: "2\n4\n6\n8\n10",
    explanation: "最初を2にして、10以下の間だけ続けます。毎回2ずつ増やせば、偶数だけを順番に表示できます。",
    parts: [
      "class Main {\n  public static void main(String[] args) {\n    for (int i = ",
      { answer: "2", chars: 2 },
      "; i <= ",
      { answer: "10", chars: 3 },
      "; ",
      { answer: "i += 2", accepts: ["i += 2", "i=i+2", "i = i + 2"], chars: 8 },
      ") {\n      System.out.println(i);\n    }\n  }\n}"
    ],
    answer: `class Main {
  public static void main(String[] args) {
    for (int i = 2; i <= 10; i += 2) {
      System.out.println(i);
    }
  }
}`
  },
  {
    title: "1から10までの合計を出す",
    concept: "for",
    prompt: "1から10までを全部足して、最後に合計だけを表示します。",
    output: "55",
    explanation: "合計用の箱としてsumを用意します。繰り返しの中でsumにiを足していくと、最後には1から10までの合計が入っています。",
    parts: [
      "class Main {\n  public static void main(String[] args) {\n    int sum = ",
      { answer: "0", chars: 2 },
      ";\n\n    for (int i = 1; i <= 10; i++) {\n      ",
      { answer: "sum += i", accepts: ["sum += i", "sum=sum+i", "sum = sum + i"], chars: 10 },
      ";\n    }\n\n    System.out.println(",
      { answer: "sum", chars: 5 },
      ");\n  }\n}"
    ],
    answer: `class Main {
  public static void main(String[] args) {
    int sum = 0;

    for (int i = 1; i <= 10; i++) {
      sum += i;
    }

    System.out.println(sum);
  }
}`
  },
  {
    title: "whileで1から5まで表示する",
    concept: "while",
    prompt: "forではなくwhileを使って、1から5まで表示します。",
    output: "1\n2\n3\n4\n5",
    explanation: "whileは条件だけを書く繰り返しです。iを先に用意し、表示したあとでiを1増やさないと、同じ数字のまま止まらなくなります。",
    parts: [
      "class Main {\n  public static void main(String[] args) {\n    int i = ",
      { answer: "1", chars: 2 },
      ";\n\n    while (i <= ",
      { answer: "5", chars: 2 },
      ") {\n      System.out.println(i);\n      ",
      { answer: "i++", accepts: ["i++", "++i", "i += 1", "i=i+1", "i = i + 1"], chars: 6 },
      ";\n    }\n  }\n}"
    ],
    answer: `class Main {
  public static void main(String[] args) {
    int i = 1;

    while (i <= 5) {
      System.out.println(i);
      i++;
    }
  }
}`
  },
  {
    title: "whileでカウントダウンする",
    concept: "while",
    prompt: "5、4、3、2、1の順番に表示します。数字はだんだん小さくなります。",
    output: "5\n4\n3\n2\n1",
    explanation: "大きい数字から小さい数字へ進むときは、毎回1ずつ減らします。条件は「1以上の間だけ続ける」と読むと自然です。",
    parts: [
      "class Main {\n  public static void main(String[] args) {\n    int count = ",
      { answer: "5", chars: 2 },
      ";\n\n    while (count >= ",
      { answer: "1", chars: 2 },
      ") {\n      System.out.println(count);\n      ",
      { answer: "count--", accepts: ["count--", "--count", "count -= 1", "count=count-1", "count = count - 1"], chars: 9 },
      ";\n    }\n  }\n}"
    ],
    answer: `class Main {
  public static void main(String[] args) {
    int count = 5;

    while (count >= 1) {
      System.out.println(count);
      count--;
    }
  }
}`
  },
  {
    title: "4になったら止める",
    concept: "break",
    prompt: "1から順番に表示します。ただし、iが4になったら繰り返しを終了します。",
    output: "1\n2\n3",
    explanation: "breakは繰り返しをその場で終わらせる命令です。iが4のときにbreakすると、4は表示されず、繰り返し全体が終了します。",
    parts: [
      "class Main {\n  public static void main(String[] args) {\n    for (int i = 1; i <= 10; i++) {\n      if (i == ",
      { answer: "4", chars: 2 },
      ") {\n        ",
      { answer: "break", accepts: ["break"], chars: 7 },
      ";\n      }\n\n      System.out.println(i);\n    }\n  }\n}"
    ],
    answer: `class Main {
  public static void main(String[] args) {
    for (int i = 1; i <= 10; i++) {
      if (i == 4) {
        break;
      }

      System.out.println(i);
    }
  }
}`
  },
  {
    title: "3だけ飛ばして表示する",
    concept: "continue",
    prompt: "1から5までのうち、3だけ表示しないようにします。",
    output: "1\n2\n4\n5",
    explanation: "continueは「この回の残りを飛ばして、次の回へ行く」命令です。iが3のときだけcontinueすれば、System.out.println(i)まで進みません。",
    parts: [
      "class Main {\n  public static void main(String[] args) {\n    for (int i = 1; i <= 5; i++) {\n      if (i == ",
      { answer: "3", chars: 2 },
      ") {\n        ",
      { answer: "continue", accepts: ["continue"], chars: 10 },
      ";\n      }\n\n      System.out.println(i);\n    }\n  }\n}"
    ],
    answer: `class Main {
  public static void main(String[] args) {
    for (int i = 1; i <= 5; i++) {
      if (i == 3) {
        continue;
      }

      System.out.println(i);
    }
  }
}`
  },
  {
    title: "偶数のときだけ飛ばす",
    concept: "continue",
    prompt: "1から9までのうち、奇数だけを表示します。偶数の回は飛ばします。",
    output: "1\n3\n5\n7\n9",
    explanation: "i % 2は、iを2で割った余りです。偶数は2で割り切れるので余りが0になります。偶数ならcontinueで表示を飛ばします。",
    parts: [
      "class Main {\n  public static void main(String[] args) {\n    for (int i = 1; i <= 9; i++) {\n      if (i % 2 == ",
      { answer: "0", chars: 2 },
      ") {\n        ",
      { answer: "continue", accepts: ["continue"], chars: 10 },
      ";\n      }\n\n      System.out.println(i);\n    }\n  }\n}"
    ],
    answer: `class Main {
  public static void main(String[] args) {
    for (int i = 1; i <= 9; i++) {
      if (i % 2 == 0) {
        continue;
      }

      System.out.println(i);
    }
  }
}`
  },
  {
    title: "合計が10以上になったら止める",
    concept: "break",
    prompt: "1から順番に足していき、合計が10以上になったところで止めます。",
    output: "10",
    explanation: "sumに1、2、3、4と足すと、4を足した時点で10になります。そこでbreakを使うと、余計な数字を足さずに止められます。",
    parts: [
      "class Main {\n  public static void main(String[] args) {\n    int sum = 0;\n\n    for (int i = 1; i <= 10; i++) {\n      sum += i;\n\n      if (sum >= ",
      { answer: "10", chars: 3 },
      ") {\n        ",
      { answer: "break", accepts: ["break"], chars: 7 },
      ";\n      }\n    }\n\n    System.out.println(sum);\n  }\n}"
    ],
    answer: `class Main {
  public static void main(String[] args) {
    int sum = 0;

    for (int i = 1; i <= 10; i++) {
      sum += i;

      if (sum >= 10) {
        break;
      }
    }

    System.out.println(sum);
  }
}`
  },
  {
    title: "3の段を作る",
    concept: "for",
    prompt: "3×1から3×5までを表示します。iが変わるたびに、3*iの結果も変わります。",
    output: "3 x 1 = 3\n3 x 2 = 6\n3 x 3 = 9\n3 x 4 = 12\n3 x 5 = 15",
    explanation: "同じ形の文章を何度も出すときもfor文が便利です。iを1から5まで動かし、3 * iを計算して文字とつなげます。",
    parts: [
      "class Main {\n  public static void main(String[] args) {\n    for (int i = ",
      { answer: "1", chars: 2 },
      "; i <= ",
      { answer: "5", chars: 2 },
      "; i++) {\n      System.out.println(\"3 x \" + i + \" = \" + ",
      { answer: "3 * i", accepts: ["3 * i", "3*i", "i * 3", "i*3"], chars: 7 },
      ");\n    }\n  }\n}"
    ],
    answer: `class Main {
  public static void main(String[] args) {
    for (int i = 1; i <= 5; i++) {
      System.out.println("3 x " + i + " = " + 3 * i);
    }
  }
}`
  }
];

const list = document.querySelector("#questionList");

function normalize(value) {
  return value.replace(/\s+/g, "");
}

function textNode(value) {
  return document.createTextNode(value);
}

function createInput(blank, questionIndex, blankIndex) {
  const input = document.createElement("input");
  input.className = "code-input";
  input.type = "text";
  input.autocomplete = "off";
  input.spellcheck = false;
  input.setAttribute("aria-label", `問${questionIndex + 1}の空欄${blankIndex + 1}`);
  input.style.setProperty("--chars", blank.chars || Math.max(blank.answer.length, 6));
  input.dataset.answer = blank.answer;
  input.dataset.accepts = JSON.stringify(blank.accepts || [blank.answer]);
  return input;
}

function renderCode(parts, questionIndex) {
  const code = document.createElement("pre");
  code.className = "code-box";
  let blankIndex = 0;

  parts.forEach((part) => {
    if (typeof part === "string") {
      code.appendChild(textNode(part));
      return;
    }

    code.appendChild(createInput(part, questionIndex, blankIndex));
    blankIndex += 1;
  });

  return code;
}

function checkQuestion(card) {
  const inputs = [...card.querySelectorAll(".code-input")];
  const feedback = card.querySelector(".feedback");
  const emptyCount = inputs.filter((input) => input.value.trim() === "").length;

  if (emptyCount > 0) {
    feedback.className = "feedback no";
    feedback.textContent = `未入力の空欄が${emptyCount}個あります。まずは全部埋めてみましょう。`;
    return;
  }

  const wrong = inputs.filter((input) => {
    const accepts = JSON.parse(input.dataset.accepts);
    return !accepts.some((answer) => normalize(answer) === normalize(input.value));
  });

  if (wrong.length === 0) {
    feedback.className = "feedback ok";
    feedback.textContent = "正解です。出力の流れまで説明できたら、かなり良い状態です。";
    return;
  }

  feedback.className = "feedback no";
  feedback.textContent = `あと${wrong.length}個、考え直してみましょう。記号、数字、増え方に注目です。`;
}

function toggleAnswer(card, button) {
  const box = card.querySelector(".answer-box");
  const visible = box.classList.toggle("visible");
  button.textContent = visible ? "解答を隠す" : "解答を表示";
  button.setAttribute("aria-expanded", String(visible));
}

function resetQuestion(card) {
  card.querySelectorAll(".code-input").forEach((input) => {
    input.value = "";
  });
  const feedback = card.querySelector(".feedback");
  feedback.className = "feedback";
  feedback.textContent = "";
}

questions.forEach((question, index) => {
  const card = document.createElement("article");
  card.className = "question-card";

  card.innerHTML = `
    <div class="question-top">
      <div class="question-number">Q${index + 1}</div>
      <div class="question-copy">
        <h3>${question.title}</h3>
        <p>${question.prompt}</p>
      </div>
    </div>
    <div class="question-body">
      <div class="code-panel">
        <div class="panel-title">
          <span>穴埋めコード</span>
          <span class="concept">${question.concept}</span>
        </div>
      </div>
      <div class="side-panel">
        <div class="output-box">
          <h4>目標の出力</h4>
          <pre></pre>
        </div>
        <div class="explain-box">
          <h4>考え方</h4>
          <p></p>
        </div>
        <div class="button-row">
          <button class="action-button primary" type="button" data-action="check">入力をチェック</button>
          <button class="action-button secondary" type="button" data-action="answer" aria-expanded="false">解答を表示</button>
          <button class="action-button secondary" type="button" data-action="reset">リセット</button>
        </div>
        <p class="feedback" aria-live="polite"></p>
        <div class="answer-box">
          <h4>解答例</h4>
          <pre></pre>
        </div>
      </div>
    </div>
  `;

  card.querySelector(".code-panel").appendChild(renderCode(question.parts, index));
  card.querySelector(".output-box pre").textContent = question.output;
  card.querySelector(".explain-box p").textContent = question.explanation;
  card.querySelector(".answer-box pre").textContent = question.answer;
  list.appendChild(card);
});

list.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-action]");
  if (!button) return;

  const card = button.closest(".question-card");
  const action = button.dataset.action;

  if (action === "check") checkQuestion(card);
  if (action === "answer") toggleAnswer(card, button);
  if (action === "reset") resetQuestion(card);
});
