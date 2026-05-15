const questions = [
  {
    title: "1から5まで表示する",
    concept: "for",
    prompt: "1、2、3、4、5を1行ずつ表示します。for文の3つの部品を考えましょう。",
    output: "1\n2\n3\n4\n5",
    explanation: "for文は「最初に何をするか」「いつまで続けるか」「1回終わったらどう変えるか」を1行にまとめます。ここではiを1から始め、5以下の間だけ続け、毎回1ずつ増やします。",
    hints: [
      "for文の形は for (初期化式; 条件式; 更新式) です。空欄はこの3つを左から順番に埋めます。",
      "最初に表示したい数字は1なので、初期化式は int i = 1 の形になります。最初の空欄には 1 が入ります。",
      "最後に表示したい数字は5です。5も表示したいので、条件式は i <= 5 と読みます。「iが5以下の間は続ける」という意味です。",
      "1、2、3、4、5と1ずつ増やしたいので、更新式は i++ と書けます。i++ は「iを1増やす」という意味です。"
    ],
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
    hints: [
      "表示したい最初の数字は2です。だから初期化式は int i = 2 から始めます。",
      "表示したい最後の数字は10です。10も表示したいので、条件式は i <= 10 です。",
      "2、4、6、8、10は毎回2ずつ増えています。1ずつではなく2ずつ進めるので、更新式は i += 2 と書けます。",
      "i += 2 は「今のiに2を足して、またiに入れる」という意味です。i = i + 2 と同じ考え方です。"
    ],
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
    hints: [
      "合計を入れる変数 sum は、まだ何も足していない状態から始めます。だから最初は 0 にします。",
      "for文の中では、iが1、2、3...10と変わっていきます。このiを毎回sumに足せば合計が作れます。",
      "sumにiを足す処理は sum += i と書けます。これは sum = sum + i と同じ意味です。",
      "表示したいのは途中のiではなく、最後に完成した合計です。だからprintlnの中には sum を入れます。"
    ],
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
    hints: [
      "while文では、for文のように丸かっこの中へ初期化式と更新式をまとめて書きません。先に int i = 1; のように変数を用意します。",
      "最初に表示したい数字は1なので、iの最初の値は1です。",
      "5まで表示したいので、whileの条件は i <= 5 です。これは「iが5以下の間だけ中の処理をする」という意味です。",
      "whileでは、iを増やす処理を書き忘れると同じ数字をずっと表示し続けます。表示したあとに i++ を書いて、次の数字へ進めます。"
    ],
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
    hints: [
      "最初に表示したい数字は5です。だから count の最初の値は5にします。",
      "最後に表示したい数字は1です。1も表示したいので、条件は count >= 1 と考えます。",
      "カウントダウンは数字が小さくなる動きです。1回表示したら、countを1減らします。",
      "count-- は「countを1減らす」という意味です。count = count - 1 と同じ考え方です。"
    ],
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
    hints: [
      "for文は1から10まで進む形ですが、今回は途中で止めます。止める条件は「iが4になったら」です。",
      "Javaで「同じかどうか」を比べるときは = ではなく == を使います。だから条件は i == 4 になります。",
      "if (i == 4) の中に、繰り返しを止める命令を書きます。",
      "break; は「ここで繰り返しを終わる」という命令です。breakが実行されると、その下の System.out.println(i); には進まないので4は表示されません。"
    ],
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
    hints: [
      "for文は1から5まで進みます。その中で、3の回だけ表示しないようにします。",
      "「iが3かどうか」を調べる条件は i == 3 です。代入の = ではなく、比較の == を使います。",
      "iが3のとき、System.out.println(i); まで進ませたくありません。そこで、その回だけ飛ばす命令を使います。",
      "continue; は「今の回の残りを飛ばして、次の回へ進む」という意味です。3の回だけprintlnを通らないので、3だけ表示されません。"
    ],
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
    hints: [
      "% は「割った余り」を求める記号です。たとえば 4 % 2 は0、5 % 2 は1になります。",
      "偶数は2で割り切れる数字です。つまり、i % 2 == 0 ならiは偶数です。",
      "今回は奇数だけ表示したいので、偶数のときは表示を飛ばします。",
      "if (i % 2 == 0) の中に continue; を書くと、偶数の回だけSystem.out.println(i); を通らず、次の回へ進みます。"
    ],
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
    hints: [
      "sumは合計を入れる変数です。for文の中で sum += i; があるので、iの値が毎回sumに足されます。",
      "足され方を順番に見ると、0 + 1 = 1、1 + 2 = 3、3 + 3 = 6、6 + 4 = 10 になります。",
      "止めたいタイミングは「sumが10以上になったら」です。条件式は sum >= 10 と書けます。",
      "条件に当てはまったら、もう足し続ける必要はありません。if文の中に break; を書くと、そこでfor文を終了できます。"
    ],
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
    hints: [
      "3の段は、3に1、2、3、4、5をかけて作ります。だからiは1から始めます。",
      "今回は3×5までなので、最後のiは5です。条件式は i <= 5 になります。",
      "表示する文章のうち、\"3 x \" や \" = \" は文字としてそのまま出します。変わる部分は i と計算結果です。",
      "計算結果は 3 * i で作れます。Javaではかけ算に × ではなく * を使います。"
    ],
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
const arrayList = document.querySelector("#arrayQuestionList");
const conditionalList = document.querySelector("#conditionalQuestionList");
const booleanList = document.querySelector("#booleanQuestionList");
const methodOneList = document.querySelector("#methodOneQuestionList");
const methodTwoList = document.querySelector("#methodTwoQuestionList");
const classList = document.querySelector("#classQuestionList");
const levelButtons = [...document.querySelectorAll(".difficulty-tab")];
const questionsSection = document.querySelector("#questions");
const unlockInput = document.querySelector(".unlock-input");
const unlockButton = document.querySelector("#unlockButton");
const unlockFeedback = document.querySelector("#unlockFeedback");
const typeLogo = document.querySelector(".type-logo");
const headerInner = document.querySelector(".header-inner");
const lessonToggles = [...document.querySelectorAll(".lesson-toggle")];
const lessonPanel = document.querySelector("#lessonPanel");
const topicCards = [...document.querySelectorAll(".topic-card")];
const arrayDeepDive = document.querySelector("#arrayDeepDive");
const traceRoomList = document.querySelector("#traceRoomList");
let currentLevel = "beginner";
let currentUserName = "User";
let currentDisplayName = "User";
let currentUserAvatar = "U";
let remoteTraceRoomUsers = [];

const profileNameKey = "java-output-practice-auth-name";
const profileDisplayNameKey = "java-output-practice-auth-display-name";
const profileAvatarKey = "java-output-practice-auth-avatar";
const userAvatarOptions = [
  { value: "{}", label: "Braces" },
  { value: "[]", label: "Array" },
  { value: "()", label: "Method" },
  { value: ";", label: "Semi" },
  { value: "if", label: "If" },
  { value: "for", label: "For" },
  { value: "==", label: "Equal" },
  { value: "++", label: "Increment" },
  { value: "%", label: "Modulo" },
  { value: "&&", label: "And" },
  { value: "!", label: "Not" },
  { value: "+=", label: "Add Assign" },
  { value: "int", label: "Integer" },
  { value: "new", label: "New" },
  { value: "try", label: "Try" },
  { value: "API", label: "API" },
  { value: "DB", label: "Database" },
  { value: "git", label: "Git" }
];

try {
  currentUserName = localStorage.getItem(profileNameKey) || "User";
  currentDisplayName = localStorage.getItem(profileDisplayNameKey) || currentUserName;
  currentUserAvatar = localStorage.getItem(profileAvatarKey) || getAvatarLetter(currentDisplayName);
} catch {}

levelButtons.forEach((button) => {
  button.setAttribute("aria-pressed", String(button.dataset.level === currentLevel));
});

const intermediateData = [
  {
    "title": "3から15まで、3の倍数だけ表示する",
    "concept": "for / step",
    "prompt": "3、6、9、12、15を1行ずつ表示します。開始値、終了条件、増え方をまとまりで書きます。",
    "output": "3\n6\n9\n12\n15",
    "explanation": "中級ではfor文の部品を小さく分けず、初期化式・条件式・更新式を自分で組み立てます。3から始め、15以下の間だけ続け、毎回3ずつ増やします。",
    "parts": [
      "class Main {\n  public static void main(String[] args) {\n    for (",
      {
        "answer": "int i = 3",
        "accepts": [
          "int i = 3",
          "int i=3"
        ],
        "chars": 10
      },
      "; ",
      {
        "answer": "i <= 15",
        "accepts": [
          "i <= 15",
          "i<=15"
        ],
        "chars": 8
      },
      "; ",
      {
        "answer": "i += 3",
        "accepts": [
          "i += 3",
          "i=i+3",
          "i = i + 3"
        ],
        "chars": 8
      },
      ") {\n      ",
      {
        "answer": "System.out.println(i)",
        "accepts": [
          "System.out.println(i)"
        ],
        "chars": 23
      },
      ";\n    }\n  }\n}"
    ],
    "answer": "class Main {\n  public static void main(String[] args) {\n    for (int i = 3; i <= 15; i += 3) {\n      System.out.println(i);\n    }\n  }\n}"
  },
  {
    "title": "1から20までのうち、偶数だけ合計する",
    "concept": "for / if / sum",
    "prompt": "1から20まで調べ、偶数だけsumに足して、最後に合計を表示します。",
    "output": "110",
    "explanation": "全部足すのではなく、条件に合う値だけを足します。i % 2 == 0で偶数を判定し、そのときだけsum += iを実行します。",
    "parts": [
      "class Main {\n  public static void main(String[] args) {\n    int sum = ",
      {
        "answer": "0",
        "chars": 2
      },
      ";\n\n    for (int i = 1; i <= 20; i++) {\n      ",
      {
        "answer": "if (i % 2 == 0)",
        "accepts": [
          "if (i % 2 == 0)",
          "if(i%2==0)"
        ],
        "chars": 17
      },
      " {\n        ",
      {
        "answer": "sum += i",
        "accepts": [
          "sum += i",
          "sum=sum+i",
          "sum = sum + i"
        ],
        "chars": 10
      },
      ";\n      }\n    }\n\n    System.out.println(",
      {
        "answer": "sum",
        "chars": 5
      },
      ");\n  }\n}"
    ],
    "answer": "class Main {\n  public static void main(String[] args) {\n    int sum = 0;\n\n    for (int i = 1; i <= 20; i++) {\n      if (i % 2 == 0) {\n        sum += i;\n      }\n    }\n\n    System.out.println(sum);\n  }\n}"
  },
  {
    "title": "合計が30を超える最初の数を表示する",
    "concept": "while / break",
    "prompt": "1から順番に足し、合計が30を超えた瞬間のiを表示して止めます。",
    "output": "8",
    "explanation": "sumにiを足したあとで、sum > 30になったかを確認します。条件を満たしたらiを表示してbreakします。更新の位置も重要です。",
    "parts": [
      "class Main {\n  public static void main(String[] args) {\n    int i = 1;\n    int sum = 0;\n\n    while (",
      {
        "answer": "true",
        "accepts": [
          "true"
        ],
        "chars": 5
      },
      ") {\n      ",
      {
        "answer": "sum += i",
        "accepts": [
          "sum += i",
          "sum=sum+i",
          "sum = sum + i"
        ],
        "chars": 10
      },
      ";\n\n      if (",
      {
        "answer": "sum > 30",
        "accepts": [
          "sum > 30",
          "sum>30"
        ],
        "chars": 9
      },
      ") {\n        System.out.println(",
      {
        "answer": "i",
        "chars": 2
      },
      ");\n        ",
      {
        "answer": "break",
        "accepts": [
          "break"
        ],
        "chars": 7
      },
      ";\n      }\n\n      i++;\n    }\n  }\n}"
    ],
    "answer": "class Main {\n  public static void main(String[] args) {\n    int i = 1;\n    int sum = 0;\n\n    while (true) {\n      sum += i;\n\n      if (sum > 30) {\n        System.out.println(i);\n        break;\n      }\n\n      i++;\n    }\n  }\n}"
  },
  {
    "title": "5回だけHelloを表示するwhile文を書く",
    "concept": "while / counter",
    "prompt": "while文でHelloを5回表示します。回数を数える変数を自分で更新します。",
    "output": "Hello\nHello\nHello\nHello\nHello",
    "explanation": "whileは条件しか自動では見ません。countを用意し、表示したあとでcount++しないと回数が進みません。",
    "parts": [
      "class Main {\n  public static void main(String[] args) {\n    int count = ",
      {
        "answer": "0",
        "chars": 2
      },
      ";\n\n    while (",
      {
        "answer": "count < 5",
        "accepts": [
          "count < 5",
          "count<5"
        ],
        "chars": 10
      },
      ") {\n      ",
      {
        "answer": "System.out.println(\"Hello\")",
        "accepts": [
          "System.out.println(\"Hello\")"
        ],
        "chars": 30
      },
      ";\n      ",
      {
        "answer": "count++",
        "accepts": [
          "count++",
          "++count",
          "count += 1",
          "count=count+1",
          "count = count + 1"
        ],
        "chars": 8
      },
      ";\n    }\n  }\n}"
    ],
    "answer": "class Main {\n  public static void main(String[] args) {\n    int count = 0;\n\n    while (count < 5) {\n      System.out.println(\"Hello\");\n      count++;\n    }\n  }\n}"
  },
  {
    "title": "3の倍数は飛ばして、合計を作る",
    "concept": "continue / sum",
    "prompt": "1から10までのうち、3の倍数だけ足さずに飛ばします。最後に合計を表示します。",
    "output": "37",
    "explanation": "3、6、9をcontinueで飛ばします。continueが実行されると、その回ではsum += iまで進みません。",
    "parts": [
      "class Main {\n  public static void main(String[] args) {\n    int sum = 0;\n\n    for (int i = 1; i <= 10; i++) {\n      if (",
      {
        "answer": "i % 3 == 0",
        "accepts": [
          "i % 3 == 0",
          "i%3==0"
        ],
        "chars": 11
      },
      ") {\n        ",
      {
        "answer": "continue",
        "accepts": [
          "continue"
        ],
        "chars": 10
      },
      ";\n      }\n\n      ",
      {
        "answer": "sum += i",
        "accepts": [
          "sum += i",
          "sum=sum+i",
          "sum = sum + i"
        ],
        "chars": 10
      },
      ";\n    }\n\n    System.out.println(sum);\n  }\n}"
    ],
    "answer": "class Main {\n  public static void main(String[] args) {\n    int sum = 0;\n\n    for (int i = 1; i <= 10; i++) {\n      if (i % 3 == 0) {\n        continue;\n      }\n\n      sum += i;\n    }\n\n    System.out.println(sum);\n  }\n}"
  },
  {
    "title": "最初に7で割り切れる数で止める",
    "concept": "break / modulo",
    "prompt": "20から40まで調べ、最初に7で割り切れる数を表示して繰り返しを終えます。",
    "output": "21",
    "explanation": "条件に合う最初の値だけが必要なので、表示したらbreakします。breakがなければ28、35も表示されてしまいます。",
    "parts": [
      "class Main {\n  public static void main(String[] args) {\n    for (",
      {
        "answer": "int i = 20",
        "accepts": [
          "int i = 20",
          "int i=20"
        ],
        "chars": 11
      },
      "; ",
      {
        "answer": "i <= 40",
        "accepts": [
          "i <= 40",
          "i<=40"
        ],
        "chars": 8
      },
      "; i++) {\n      if (",
      {
        "answer": "i % 7 == 0",
        "accepts": [
          "i % 7 == 0",
          "i%7==0"
        ],
        "chars": 11
      },
      ") {\n        System.out.println(i);\n        ",
      {
        "answer": "break",
        "accepts": [
          "break"
        ],
        "chars": 7
      },
      ";\n      }\n    }\n  }\n}"
    ],
    "answer": "class Main {\n  public static void main(String[] args) {\n    for (int i = 20; i <= 40; i++) {\n      if (i % 7 == 0) {\n        System.out.println(i);\n        break;\n      }\n    }\n  }\n}"
  },
  {
    "title": "奇数だけを横に連結する",
    "concept": "for / String",
    "prompt": "1から9までの奇数を、文字列resultに連結して最後に表示します。",
    "output": "13579",
    "explanation": "表示を毎回行うのではなく、resultに文字としてためてから最後に表示します。偶数の回はcontinueで飛ばします。",
    "parts": [
      "class Main {\n  public static void main(String[] args) {\n    String result = ",
      {
        "answer": "\"\"",
        "accepts": [
          "\"\""
        ],
        "chars": 4
      },
      ";\n\n    for (int i = 1; i <= 9; i++) {\n      if (",
      {
        "answer": "i % 2 == 0",
        "accepts": [
          "i % 2 == 0",
          "i%2==0"
        ],
        "chars": 11
      },
      ") {\n        continue;\n      }\n\n      ",
      {
        "answer": "result += i",
        "accepts": [
          "result += i",
          "result=result+i",
          "result = result + i"
        ],
        "chars": 12
      },
      ";\n    }\n\n    System.out.println(",
      {
        "answer": "result",
        "chars": 7
      },
      ");\n  }\n}"
    ],
    "answer": "class Main {\n  public static void main(String[] args) {\n    String result = \"\";\n\n    for (int i = 1; i <= 9; i++) {\n      if (i % 2 == 0) {\n        continue;\n      }\n\n      result += i;\n    }\n\n    System.out.println(result);\n  }\n}"
  },
  {
    "title": "二重ループで座標を表示する",
    "concept": "nested for",
    "prompt": "行rowを1から2、列colを1から3まで動かし、全ての組み合わせを表示します。",
    "output": "1-1\n1-2\n1-3\n2-1\n2-2\n2-3",
    "explanation": "外側のループが1回進む間に、内側のループは最初から最後まで回ります。二重ループの基本が見えているかを確認する問題です。",
    "parts": [
      "class Main {\n  public static void main(String[] args) {\n    for (",
      {
        "answer": "int row = 1",
        "accepts": [
          "int row = 1",
          "int row=1"
        ],
        "chars": 12
      },
      "; row <= 2; row++) {\n      for (",
      {
        "answer": "int col = 1",
        "accepts": [
          "int col = 1",
          "int col=1"
        ],
        "chars": 12
      },
      "; ",
      {
        "answer": "col <= 3",
        "accepts": [
          "col <= 3",
          "col<=3"
        ],
        "chars": 9
      },
      "; col++) {\n        ",
      {
        "answer": "System.out.println(row + \"-\" + col)",
        "accepts": [
          "System.out.println(row + \"-\" + col)",
          "System.out.println(row+\"-\"+col)"
        ],
        "chars": 39
      },
      ";\n      }\n    }\n  }\n}"
    ],
    "answer": "class Main {\n  public static void main(String[] args) {\n    for (int row = 1; row <= 2; row++) {\n      for (int col = 1; col <= 3; col++) {\n        System.out.println(row + \"-\" + col);\n      }\n    }\n  }\n}"
  },
  {
    "title": "whileで数字を反転して表示する",
    "concept": "while / digit",
    "prompt": "numberの下1桁を取り出しながら、321を123の順に表示します。",
    "output": "123",
    "explanation": "% 10で下1桁を取り出し、/ 10で最後の桁を落とします。whileの条件でnumberが0より大きい間だけ続けます。",
    "parts": [
      "class Main {\n  public static void main(String[] args) {\n    int number = 321;\n\n    while (",
      {
        "answer": "number > 0",
        "accepts": [
          "number > 0",
          "number>0"
        ],
        "chars": 11
      },
      ") {\n      int digit = ",
      {
        "answer": "number % 10",
        "accepts": [
          "number % 10",
          "number%10"
        ],
        "chars": 12
      },
      ";\n      System.out.print(",
      {
        "answer": "digit",
        "chars": 6
      },
      ");\n      ",
      {
        "answer": "number /= 10",
        "accepts": [
          "number /= 10",
          "number=number/10",
          "number = number / 10"
        ],
        "chars": 13
      },
      ";\n    }\n  }\n}"
    ],
    "answer": "class Main {\n  public static void main(String[] args) {\n    int number = 321;\n\n    while (number > 0) {\n      int digit = number % 10;\n      System.out.print(digit);\n      number /= 10;\n    }\n  }\n}"
  },
  {
    "title": "条件に合う個数を数えて途中終了する",
    "concept": "count / break",
    "prompt": "1から順番に調べ、4の倍数を3個見つけた時点で、最後に見つけた数を表示して止めます。",
    "output": "12",
    "explanation": "条件に合った回だけcountを増やします。countが3になった瞬間に表示してbreakすると、必要なところで止められます。",
    "parts": [
      "class Main {\n  public static void main(String[] args) {\n    int count = 0;\n\n    for (int i = 1; i <= 50; i++) {\n      if (",
      {
        "answer": "i % 4 == 0",
        "accepts": [
          "i % 4 == 0",
          "i%4==0"
        ],
        "chars": 11
      },
      ") {\n        ",
      {
        "answer": "count++",
        "accepts": [
          "count++",
          "++count",
          "count += 1",
          "count=count+1",
          "count = count + 1"
        ],
        "chars": 8
      },
      ";\n\n        if (",
      {
        "answer": "count == 3",
        "accepts": [
          "count == 3",
          "count==3"
        ],
        "chars": 11
      },
      ") {\n          System.out.println(i);\n          ",
      {
        "answer": "break",
        "accepts": [
          "break"
        ],
        "chars": 7
      },
      ";\n        }\n      }\n    }\n  }\n}"
    ],
    "answer": "class Main {\n  public static void main(String[] args) {\n    int count = 0;\n\n    for (int i = 1; i <= 50; i++) {\n      if (i % 4 == 0) {\n        count++;\n\n        if (count == 3) {\n          System.out.println(i);\n          break;\n        }\n      }\n    }\n  }\n}"
  }
];

const traceaRules = [
  {
    targetText: "for (",
    message: "forの中は、始まり・条件・変化の順に読みます。",
    styleType: "highlight"
  },
  {
    targetText: "while",
    message: "条件がtrueの間だけ、ここから中へ進みます。",
    styleType: "highlight"
  },
  {
    targetText: "if",
    message: "この分かれ道で、実行するかどうかが決まります。",
    styleType: "circle"
  },
  {
    targetText: "else",
    message: "上の条件に当てはまらない側の出口です。",
    styleType: "underline"
  },
  {
    targetText: "i <=",
    message: "この条件式は、どこまで続くかを表しています。",
    styleType: "wavy"
  },
  {
    targetText: "i < ",
    message: "最後の番号を超えないための条件です。",
    styleType: "wavy"
  },
  {
    targetText: "count >=",
    message: "カウントがどこで止まるかを見てみましょう。",
    styleType: "wavy"
  },
  {
    targetText: "sum",
    message: "この変数は、途中経過を覚えておく箱です。",
    styleType: "circle"
  },
  {
    targetText: "break",
    message: "ここは、繰り返しを完全に終える合図です。",
    styleType: "underline"
  },
  {
    targetText: "continue",
    message: "この回だけ飛ばして、次の回へ進みます。",
    styleType: "underline"
  },
  {
    targetText: "String[] fruits",
    message: "文字列をまとめた配列です。配列名にも注目しましょう。",
    styleType: "highlight"
  },
  {
    targetText: "String[] names",
    message: "文字列をまとめた配列です。番号で1つずつ取り出します。",
    styleType: "highlight"
  },
  {
    targetText: "int[] scores",
    message: "数値をまとめた配列です。何個あるかも意識しましょう。",
    styleType: "highlight"
  },
  {
    targetText: "int[] numbers",
    message: "数値の並びです。1つずつ見る流れを作ります。",
    styleType: "highlight"
  },
  {
    targetText: "fruits",
    message: "どの配列から取り出すのか、名前を確認しましょう。",
    styleType: "circle"
  },
  {
    targetText: "scores",
    message: "この配列の中身を、番号で追っていきます。",
    styleType: "circle"
  },
  {
    targetText: "numbers",
    message: "この配列を1つずつ見て、条件に通します。",
    styleType: "circle"
  },
  {
    targetText: "names",
    message: "表示したい文字列は、この配列の中にあります。",
    styleType: "circle"
  },
  {
    targetText: "最初",
    message: "最初という言葉が出たら、0番を思い出しましょう。",
    styleType: "circle"
  },
  {
    targetText: "最後",
    message: "最後の番号は、lengthから1を引いて考えます。",
    styleType: "circle"
  },
  {
    targetText: "2番目",
    message: "Javaの番号では、ここが1番になります。",
    styleType: "circle"
  },
  {
    targetText: "何個",
    message: "個数を知りたいときはlengthを探します。",
    styleType: "underline"
  },
  {
    targetText: "個数",
    message: "個数を知りたいときはlengthを探します。",
    styleType: "underline"
  },
  {
    targetText: "偶数",
    message: "偶数かどうかは、2で割った余りを見ると判断できます。",
    styleType: "wavy"
  },
  {
    targetText: "[0]",
    message: "配列の最初は1番ではなく0番です。",
    styleType: "circle"
  },
  {
    targetText: "[1]",
    message: "人間の2番目は、Javaでは1番です。",
    styleType: "circle"
  },
  {
    targetText: "[i]",
    message: "今の番号にある要素を取り出しています。",
    styleType: "circle"
  },
  {
    targetText: ".length",
    message: "要素数を見る印です。最後の番号ではありません。",
    styleType: "underline"
  },
  {
    targetText: "% 2",
    message: "2で割った余りを見ると、偶数か判断できます。",
    styleType: "wavy"
  },
  {
    targetText: "==",
    message: "代入ではなく、同じかどうかの比較です。",
    styleType: "circle"
  },
  {
    targetText: "!=",
    message: "等しくないかどうかを調べる記号です。",
    styleType: "circle"
  },
  {
    targetText: ">=",
    message: "その値も含めて、以上と読みます。",
    styleType: "wavy"
  },
  {
    targetText: "<=",
    message: "その値も含めて、以下と読みます。",
    styleType: "wavy"
  },
  {
    targetText: "&&",
    message: "左右の条件が両方trueかを見ています。",
    styleType: "circle"
  },
  {
    targetText: "||",
    message: "左右のどちらかがtrueなら通ります。",
    styleType: "circle"
  },
  {
    targetText: "!",
    message: "trueとfalseを反転させる小さな印です。",
    styleType: "underline"
  },
  {
    targetText: "boolean",
    message: "trueかfalseだけを持つ型です。",
    styleType: "highlight"
  },
  {
    targetText: "System.out.println",
    message: "最後は、何を画面に出しているかを見ましょう。",
    styleType: "underline"
  }
];

const traceaStyleCycle = ["highlight", "underline", "circle", "wavy"];

function getStaticCode(parts) {
  return parts.filter((part) => typeof part === "string").join("");
}

function hasTraceaTarget(source, targetText) {
  return targetText && source.includes(targetText);
}

function buildTraceaHints(question, parts) {
  const source = `${question.title}\n${question.prompt}\n${getStaticCode(parts)}`;
  const picked = [];
  const seen = new Set();

  traceaRules.forEach((rule) => {
    const overlapsPickedTarget = picked.some((hint) => hint.targetText.includes(rule.targetText) || rule.targetText.includes(hint.targetText));
    if (picked.length >= 3 || seen.has(rule.targetText) || overlapsPickedTarget || !hasTraceaTarget(source, rule.targetText)) return;
    picked.push({ ...rule });
    seen.add(rule.targetText);
  });

  const fallbackTargets = ["class Main", "public static void main", "System.out.println"];
  let fallbackIndex = 0;
  while (picked.length < 3 && fallbackIndex < fallbackTargets.length) {
    const targetText = fallbackTargets[fallbackIndex];
    fallbackIndex += 1;
    if (picked.some((hint) => hint.targetText === targetText)) continue;
    picked.push({
      targetText,
      message: "ここが何を決めているか、一度言葉にしてみましょう。",
      styleType: traceaStyleCycle[picked.length % traceaStyleCycle.length]
    });
  }

  picked[0] = {
    ...picked[0],
    message: "まず、ここに視線を置いてみましょう。流れの入口です。"
  };

  return picked.slice(0, 3).map((hint, index) => ({
    targetText: hint.targetText,
    message: hint.message,
    styleType: traceaStyleCycle.includes(hint.styleType) ? hint.styleType : traceaStyleCycle[index % traceaStyleCycle.length]
  }));
}

const prerequisiteCatalog = [
  {
    label: "変数",
    terms: ["int ", "String ", "boolean ", "sum", "count", "score", "i"],
    description: "値に名前を付けて入れておく箱です。中身は処理の途中で変わることがあります。",
    defaultStatus: "理解済み",
    pitfall: "変数の値が、どの行で変わったのか追えない"
  },
  {
    label: "int型",
    terms: ["int ", "int[]"],
    description: "整数を扱うための型です。小数ではなく、1、20、0のような数を入れます。",
    defaultStatus: "理解済み",
    pitfall: "intに入っている値を、文字ではなく数として追えない"
  },
  {
    label: "String型",
    terms: ["String ", "String[]"],
    description: "文字列を扱う型です。Javaでは文字列をダブルクォーテーションで囲みます。",
    defaultStatus: "理解済み",
    pitfall: "文字列と変数名の違いが曖昧になる"
  },
  {
    label: "boolean型",
    terms: ["boolean", "true", "false"],
    description: "trueかfalseのどちらかだけを入れる型です。条件式の結果もbooleanになります。",
    defaultStatus: "理解済み",
    pitfall: "trueとfalseを文字列として読んでしまう"
  },
  {
    label: "for文",
    terms: ["for ("],
    description: "回数や範囲が決まっている繰り返しでよく使います。初期化式、条件式、更新式の3つを見ます。",
    defaultStatus: "初見注意",
    pitfall: "初期化式、条件式、更新式の役割が混ざる"
  },
  {
    label: "while文",
    terms: ["while ("],
    description: "条件がtrueの間だけ処理を繰り返します。更新を書き忘れると終わらない処理になります。",
    defaultStatus: "初見注意",
    pitfall: "条件は見ているのに、変数を更新し忘れる"
  },
  {
    label: "if文",
    terms: ["if ("],
    description: "条件式がtrueのときだけ、中の処理を実行する構文です。",
    defaultStatus: "初見注意",
    pitfall: "条件がtrueのときだけ通る、という流れを見失う"
  },
  {
    label: "else",
    terms: ["else"],
    description: "ifの条件がfalseだったときに進む出口です。",
    defaultStatus: "復習推奨",
    pitfall: "ifに入らなかった場合の流れを読み飛ばす"
  },
  {
    label: "break",
    terms: ["break"],
    description: "繰り返し処理をその場で完全に終了します。次の回には進みません。",
    defaultStatus: "初見注意",
    pitfall: "break後も繰り返しが続くと思ってしまう"
  },
  {
    label: "continue",
    terms: ["continue"],
    description: "その回の残りだけを飛ばし、次の回へ進みます。繰り返し全体は終わりません。",
    defaultStatus: "初見注意",
    pitfall: "continueとbreakの違いが曖昧になる"
  },
  {
    label: "比較演算子",
    terms: [">=", "<=", "==", "!=", ">", "<"],
    description: "値を比べて、結果をtrueかfalseにする記号です。例: i < 5 は「iが5より小さいか」です。",
    defaultStatus: "復習推奨",
    pitfall: "境界の値を含むのか、含まないのかを間違える"
  },
  {
    label: "代入演算子",
    terms: [" = "],
    description: "右側の値を左側の変数へ入れる記号です。比較の==とは意味が違います。",
    defaultStatus: "理解済み",
    pitfall: "=を「同じ」という意味で読んでしまう"
  },
  {
    label: "+=",
    terms: ["+="],
    description: "値を足してから代入する演算子です。x += 1; は x = x + 1; と同じ意味です。",
    defaultStatus: "復習推奨",
    pitfall: "+= が何を足して、どこへ戻しているのか分からない"
  },
  {
    label: "++",
    terms: ["++"],
    description: "変数の値を1増やします。i++ は i = i + 1 とほぼ同じ役割です。",
    defaultStatus: "復習推奨",
    pitfall: "iが増えるタイミングを見落とす"
  },
  {
    label: "--",
    terms: ["--"],
    description: "変数の値を1減らします。カウントダウンや逆順の処理で使います。",
    defaultStatus: "復習推奨",
    pitfall: "値が増えるのか減るのかを逆に読んでしまう"
  },
  {
    label: "%",
    terms: ["%"],
    description: "割った余りを求める演算子です。偶数判定では i % 2 == 0 がよく出ます。",
    defaultStatus: "復習推奨",
    pitfall: "%を割り算そのものだと思ってしまう"
  },
  {
    label: "配列",
    terms: ["[]", "{", ".length"],
    description: "同じ型の値を順番にまとめて入れる仕組みです。番号を使って中身を取り出します。",
    defaultStatus: "初見注意",
    pitfall: "配列名と、配列の中の1つの値を区別できない"
  },
  {
    label: "index",
    terms: ["[0]", "[1]", "[i]", "i - 1"],
    description: "配列の番号です。Javaの配列は0番から始まります。",
    defaultStatus: "復習推奨",
    pitfall: "最初の要素を1番だと思ってしまう"
  },
  {
    label: "length",
    terms: [".length", "length - 1"],
    description: "配列の要素数を表します。最後の番号は length - 1 です。",
    defaultStatus: "復習推奨",
    pitfall: "lengthを最後の番号そのものだと思ってしまう"
  },
  {
    label: "論理演算子",
    terms: ["&&", "||", "!"],
    description: "複数の条件を組み合わせたり、true/falseを反転したりする記号です。",
    defaultStatus: "復習推奨",
    pitfall: "左右どちらの条件まで必要か分からなくなる"
  },
  {
    label: "System.out.println",
    terms: ["System.out.println"],
    description: "画面に値を表示する命令です。丸かっこの中に表示したいものを書きます。",
    defaultStatus: "理解済み",
    pitfall: "最終的に何を表示しているのかを見落とす"
  },
  {
    label: "メソッド",
    terms: ["static", "return", "void", "()"],
    description: "処理に名前を付けて、必要な場所から呼び出せるようにしたまとまりです。",
    defaultStatus: "初見注意",
    pitfall: "メソッドを作る場所と呼び出す場所を混同する"
  },
  {
    label: "引数",
    terms: ["String name", "int a", "int b", "(int"],
    description: "メソッドへ外から渡す材料です。定義側では型と名前をセットで書きます。",
    defaultStatus: "復習推奨",
    pitfall: "呼び出し側の値と、受け取る側の変数名を分けて読めない"
  },
  {
    label: "戻り値",
    terms: ["return"],
    description: "メソッドが呼び出し元へ返す結果です。returnの右側が外へ渡されます。",
    defaultStatus: "復習推奨",
    pitfall: "returnした値をどこで使っているか追えない"
  },
  {
    label: "void",
    terms: ["void"],
    description: "値を返さないメソッドであることを表します。表示だけする処理などで使います。",
    defaultStatus: "復習推奨",
    pitfall: "voidなのに戻り値があるように読んでしまう"
  },
  {
    label: "static",
    terms: ["static"],
    description: "この練習では、mainから同じクラス内のメソッドを直接呼ぶための印として読みます。",
    defaultStatus: "復習推奨",
    pitfall: "mainから呼ぶ補助メソッドにstaticを付け忘れる"
  },
  {
    label: "クラス",
    terms: ["class ", "new "],
    description: "Javaコードやデータのまとまりです。オブジェクトを作るための設計図としても使います。",
    defaultStatus: "初見注意",
    pitfall: "classの宣言と、newで作った実体を同じものとして読んでしまう"
  },
  {
    label: "フィールド",
    terms: [".name", ".score", ".price", ".count", ".title"],
    description: "クラスやオブジェクトが持つ値です。ドットを使って読み書きします。",
    defaultStatus: "復習推奨",
    pitfall: "どのオブジェクトの値を読んでいるのか見失う"
  }
];

const lessonPrerequisiteLabels = {
  loops: ["変数", "int型", "比較演算子", "System.out.println"],
  arrays: ["変数", "配列", "index", "System.out.println"],
  conditionals: ["変数", "if文", "比較演算子", "System.out.println"],
  booleans: ["boolean型", "比較演算子", "System.out.println"],
  methods: ["メソッド", "引数", "戻り値", "void", "static", "System.out.println"],
  classes: ["クラス", "フィールド", "変数", "String型", "int型", "System.out.println"]
};

const prerequisitePriority = {
  loops: ["for文", "while文", "break", "continue", "比較演算子", "+=", "++", "--", "%", "変数", "int型", "System.out.println"],
  arrays: ["配列", "index", "length", "for文", "if文", "比較演算子", "+=", "++", "変数", "int型", "String型", "System.out.println"],
  conditionals: ["if文", "else", "比較演算子", "論理演算子", "boolean型", "変数", "int型", "System.out.println"],
  booleans: ["boolean型", "比較演算子", "論理演算子", "if文", "変数", "System.out.println"],
  methods: ["メソッド", "引数", "戻り値", "void", "static", "if文", "比較演算子", "変数", "int型", "String型", "System.out.println"],
  classes: ["クラス", "フィールド", "変数", "String型", "int型", "System.out.println"]
};

function getProblemSource(problem) {
  return `${problem.title || ""}\n${problem.prompt || ""}\n${problem.concept || ""}\n${getStaticCode(problem.parts || [])}\n${problem.answer || ""}`;
}

function findPrerequisite(label) {
  return prerequisiteCatalog.find((item) => item.label === label);
}

function statusForPrerequisite(item, source, level) {
  if (level === "intermediate" && item.defaultStatus === "初見注意") return "復習推奨";
  if (item.label === "for文" && source.includes("for (")) return level === "beginner" ? "初見注意" : "復習推奨";
  if (item.label === "配列" && source.includes("[]")) return level === "beginner" ? "初見注意" : "復習推奨";
  return item.defaultStatus;
}

function joinJapaneseList(items) {
  if (items.length <= 1) return items.join("");
  if (items.length === 2) return `${items[0]}と${items[1]}`;
  return `${items.slice(0, -1).join("、")}と${items[items.length - 1]}`;
}

function buildPrerequisiteSupport(problem, lessonId, level = "beginner") {
  const source = getProblemSource(problem);
  const labels = new Set();

  prerequisiteCatalog.forEach((item) => {
    if (item.terms.some((term) => source.includes(term))) {
      labels.add(item.label);
    }
  });

  (lessonPrerequisiteLabels[lessonId] || []).forEach((label) => {
    labels.add(label);
  });

  const prerequisites = [...labels]
    .sort((a, b) => {
      const priority = prerequisitePriority[lessonId] || [];
      const aIndex = priority.includes(a) ? priority.indexOf(a) : priority.length;
      const bIndex = priority.includes(b) ? priority.indexOf(b) : priority.length;
      return aIndex - bIndex;
    })
    .map(findPrerequisite)
    .filter(Boolean)
    .slice(0, 6)
    .map((item) => ({
      label: item.label,
      status: statusForPrerequisite(item, source, level),
      description: item.description
    }));

  const focusLabels = prerequisites
    .filter((item) => item.status !== "理解済み")
    .slice(0, 2)
    .map((item) => item.label);

  const commonPitfalls = prerequisiteCatalog
    .filter((item) => prerequisites.some((entry) => entry.label === item.label))
    .sort((a, b) => {
      const aStatus = prerequisites.find((entry) => entry.label === a.label)?.status;
      const bStatus = prerequisites.find((entry) => entry.label === b.label)?.status;
      return Number(aStatus === "理解済み") - Number(bStatus === "理解済み");
    })
    .map((item) => item.pitfall)
    .filter(Boolean)
    .slice(0, 3);

  return {
    prerequisites,
    traceaNote: focusLabels.length > 0
      ? `この問題では、${joinJapaneseList(focusLabels)}を理解している前提で進みます。不安なら、先にタグを押して意味を確認してみましょう。`
      : "この問題は基本の読み方を確認する問題です。答えを急がず、変数と表示される値の関係を見ていきましょう。",
    commonPitfalls
  };
}

questions.forEach((question, index) => {
  const beginnerHints = buildTraceaHints(question, question.parts);
  const intermediateHints = buildTraceaHints(question, intermediateData[index].parts);
  const beginnerSupport = buildPrerequisiteSupport(question, "loops", "beginner");
  const intermediateSupport = buildPrerequisiteSupport(intermediateData[index], "loops", "intermediate");
  Object.assign(question, beginnerSupport);
  question.hints = beginnerHints;
  question.levels = {
    beginner: { parts: question.parts, hints: beginnerHints, ...beginnerSupport },
    intermediate: { ...intermediateData[index], hints: intermediateHints, ...intermediateSupport }
  };
});

const arrayQuestions = [
  {
    title: "最初の要素を表示する",
    concept: "array",
    prompt: "配列fruitsの最初の値を表示します。",
    output: "apple",
    explanation: "配列は0番から数えます。最初の要素はfruits[0]です。",
    hints: [
      "String[] は文字列を複数入れる配列です。",
      "配列の最初は1ではなく0です。最初の値を取り出すには [0] を使います。",
      "printlnの中には、表示したい配列の要素を入れます。"
    ],
    parts: [
      "class Main {\n  public static void main(String[] args) {\n    String[] fruits = {\"apple\", \"banana\", \"orange\"};\n    System.out.println(",
      { answer: "fruits[0]", accepts: ["fruits[0]"], chars: 10 },
      ");\n  }\n}"
    ],
    answer: `class Main {
  public static void main(String[] args) {
    String[] fruits = {"apple", "banana", "orange"};
    System.out.println(fruits[0]);
  }
}`
  },
  {
    title: "配列の長さを表示する",
    concept: "array",
    prompt: "scoresに入っている値の個数を表示します。",
    output: "4",
    explanation: "配列の要素数は.lengthで調べられます。scores.lengthは4です。",
    hints: [
      "配列の中身が何個あるかは、自分で数えなくても .length でわかります。",
      "scoresの長さを知りたいので、配列名のあとに .length を付けます。",
      "lengthには丸かっこを付けません。scores.length の形です。"
    ],
    parts: [
      "class Main {\n  public static void main(String[] args) {\n    int[] scores = {80, 90, 70, 60};\n    System.out.println(",
      { answer: "scores.length", accepts: ["scores.length"], chars: 14 },
      ");\n  }\n}"
    ],
    answer: `class Main {
  public static void main(String[] args) {
    int[] scores = {80, 90, 70, 60};
    System.out.println(scores.length);
  }
}`
  },
  {
    title: "最後の要素を表示する",
    concept: "array",
    prompt: "配列の最後に入っている値を表示します。",
    output: "orange",
    explanation: "長さが3の配列で使える番号は0、1、2です。最後の番号はlength - 1で表せます。",
    hints: [
      "fruitsには3個の値がありますが、最後の番号は3ではありません。",
      "配列は0番から始まるので、最後の番号は 配列の長さ - 1 です。",
      "最後の要素は fruits[fruits.length - 1] の形で取り出せます。"
    ],
    parts: [
      "class Main {\n  public static void main(String[] args) {\n    String[] fruits = {\"apple\", \"banana\", \"orange\"};\n    System.out.println(",
      { answer: "fruits[fruits.length - 1]", accepts: ["fruits[fruits.length - 1]", "fruits[fruits.length-1]"], chars: 27 },
      ");\n  }\n}"
    ],
    answer: `class Main {
  public static void main(String[] args) {
    String[] fruits = {"apple", "banana", "orange"};
    System.out.println(fruits[fruits.length - 1]);
  }
}`
  },
  {
    title: "配列を順番に表示する",
    concept: "array / for",
    prompt: "配列namesの中身を、上から順番に表示します。",
    output: "Aoi\nRen\nMio",
    explanation: "0番からlengthより小さい番号までfor文で動かすと、配列を先頭から最後まで取り出せます。",
    hints: [
      "配列を全部見るときは、iを0から始めます。",
      "iは最後の番号まで動けばよいので、条件は i < names.length です。",
      "表示する値はnamesそのものではなく、今の番号の要素 names[i] です。"
    ],
    parts: [
      "class Main {\n  public static void main(String[] args) {\n    String[] names = {\"Aoi\", \"Ren\", \"Mio\"};\n\n    for (int i = ",
      { answer: "0", chars: 2 },
      "; i < ",
      { answer: "names.length", accepts: ["names.length"], chars: 13 },
      "; i++) {\n      System.out.println(",
      { answer: "names[i]", accepts: ["names[i]"], chars: 9 },
      ");\n    }\n  }\n}"
    ],
    answer: `class Main {
  public static void main(String[] args) {
    String[] names = {"Aoi", "Ren", "Mio"};

    for (int i = 0; i < names.length; i++) {
      System.out.println(names[i]);
    }
  }
}`
  },
  {
    title: "配列の合計を求める",
    concept: "array / sum",
    prompt: "numbersの合計を求めて表示します。",
    output: "15",
    explanation: "合計用の変数sumを0から始め、配列の各要素を順番に足します。",
    hints: [
      "合計を入れる変数は0から始めます。",
      "for文で0番から最後まで取り出し、sumにnumbers[i]を足します。",
      "最後に表示するのは、完成したsumです。"
    ],
    parts: [
      "class Main {\n  public static void main(String[] args) {\n    int[] numbers = {2, 4, 6, 3};\n    int sum = ",
      { answer: "0", chars: 2 },
      ";\n\n    for (int i = 0; i < numbers.length; i++) {\n      ",
      { answer: "sum += numbers[i]", accepts: ["sum += numbers[i]", "sum=sum+numbers[i]", "sum = sum + numbers[i]"], chars: 18 },
      ";\n    }\n\n    System.out.println(",
      { answer: "sum", chars: 5 },
      ");\n  }\n}"
    ],
    answer: `class Main {
  public static void main(String[] args) {
    int[] numbers = {2, 4, 6, 3};
    int sum = 0;

    for (int i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }

    System.out.println(sum);
  }
}`
  },
  {
    title: "配列の値を更新する",
    concept: "array / update",
    prompt: "scoresの2番目の値を95に変更してから表示します。",
    output: "95",
    explanation: "2番目の要素はインデックス1です。scores[1] = 95で値を入れ替えます。",
    hints: [
      "人間の2番目は、Javaのインデックスでは1番です。",
      "配列の値を変更するときは 配列名[番号] = 新しい値; と書きます。",
      "変更したあと、同じ番号の要素をprintlnで表示します。"
    ],
    parts: [
      "class Main {\n  public static void main(String[] args) {\n    int[] scores = {80, 70, 60};\n    ",
      { answer: "scores[1]", accepts: ["scores[1]"], chars: 10 },
      " = ",
      { answer: "95", chars: 3 },
      ";\n    System.out.println(",
      { answer: "scores[1]", accepts: ["scores[1]"], chars: 10 },
      ");\n  }\n}"
    ],
    answer: `class Main {
  public static void main(String[] args) {
    int[] scores = {80, 70, 60};
    scores[1] = 95;
    System.out.println(scores[1]);
  }
}`
  },
  {
    title: "偶数だけ数える",
    concept: "array / condition",
    prompt: "numbersの中に偶数が何個あるかを表示します。",
    output: "3",
    explanation: "偶数は2で割った余りが0です。条件に当てはまった回だけcountを増やします。",
    hints: [
      "個数を数える変数countは0から始めます。",
      "numbers[i] % 2 == 0 なら、その要素は偶数です。",
      "偶数を見つけたらcountを1増やします。"
    ],
    parts: [
      "class Main {\n  public static void main(String[] args) {\n    int[] numbers = {1, 2, 4, 7, 8};\n    int count = 0;\n\n    for (int i = 0; i < numbers.length; i++) {\n      if (",
      { answer: "numbers[i] % 2 == 0", accepts: ["numbers[i] % 2 == 0", "numbers[i]%2==0"], chars: 20 },
      ") {\n        ",
      { answer: "count++", accepts: ["count++", "++count", "count += 1", "count=count+1", "count = count + 1"], chars: 8 },
      ";\n      }\n    }\n\n    System.out.println(count);\n  }\n}"
    ],
    answer: `class Main {
  public static void main(String[] args) {
    int[] numbers = {1, 2, 4, 7, 8};
    int count = 0;

    for (int i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 == 0) {
        count++;
      }
    }

    System.out.println(count);
  }
}`
  },
  {
    title: "最大値を探す",
    concept: "array / max",
    prompt: "scoresの中で一番大きい値を表示します。",
    output: "90",
    explanation: "最初の要素を仮の最大値にして、より大きい値を見つけたらmaxを更新します。",
    hints: [
      "最大値を探すときは、まず0番の値を仮の最大値にします。",
      "for文で配列を順番に見て、今の値がmaxより大きいか比べます。",
      "大きい値を見つけたら、maxにその値を入れ直します。"
    ],
    parts: [
      "class Main {\n  public static void main(String[] args) {\n    int[] scores = {70, 90, 65, 80};\n    int max = ",
      { answer: "scores[0]", accepts: ["scores[0]"], chars: 10 },
      ";\n\n    for (int i = 0; i < scores.length; i++) {\n      if (scores[i] > ",
      { answer: "max", chars: 5 },
      ") {\n        max = ",
      { answer: "scores[i]", accepts: ["scores[i]"], chars: 10 },
      ";\n      }\n    }\n\n    System.out.println(max);\n  }\n}"
    ],
    answer: `class Main {
  public static void main(String[] args) {
    int[] scores = {70, 90, 65, 80};
    int max = scores[0];

    for (int i = 0; i < scores.length; i++) {
      if (scores[i] > max) {
        max = scores[i];
      }
    }

    System.out.println(max);
  }
}`
  },
  {
    title: "平均点を求める",
    concept: "array / average",
    prompt: "scoresの平均を整数で表示します。",
    output: "80",
    explanation: "合計を求めてから、配列の要素数で割ると平均になります。",
    hints: [
      "平均は 合計 ÷ 個数 です。",
      "合計はfor文でsumに足して作ります。",
      "個数はscores.lengthでわかるので、sum / scores.lengthを表示します。"
    ],
    parts: [
      "class Main {\n  public static void main(String[] args) {\n    int[] scores = {70, 80, 90};\n    int sum = 0;\n\n    for (int i = 0; i < scores.length; i++) {\n      sum += ",
      { answer: "scores[i]", accepts: ["scores[i]"], chars: 10 },
      ";\n    }\n\n    System.out.println(",
      { answer: "sum / scores.length", accepts: ["sum / scores.length", "sum/scores.length"], chars: 20 },
      ");\n  }\n}"
    ],
    answer: `class Main {
  public static void main(String[] args) {
    int[] scores = {70, 80, 90};
    int sum = 0;

    for (int i = 0; i < scores.length; i++) {
      sum += scores[i];
    }

    System.out.println(sum / scores.length);
  }
}`
  },
  {
    title: "番号つきで表示する",
    concept: "array / output",
    prompt: "namesを1番、2番、3番のように番号つきで表示します。",
    output: "1: Aoi\n2: Ren\n3: Mio",
    explanation: "配列のインデックスは0から始まりますが、表示用の番号はi + 1にすると1から始まります。",
    hints: [
      "iは0、1、2と動きます。",
      "表示では1、2、3にしたいので、番号部分は i + 1 を使います。",
      "文字列、番号、配列の要素を + でつなげます。"
    ],
    parts: [
      "class Main {\n  public static void main(String[] args) {\n    String[] names = {\"Aoi\", \"Ren\", \"Mio\"};\n\n    for (int i = 0; i < names.length; i++) {\n      System.out.println(",
      { answer: "i + 1", accepts: ["i + 1", "i+1"], chars: 6 },
      " + \": \" + ",
      { answer: "names[i]", accepts: ["names[i]"], chars: 9 },
      ");\n    }\n  }\n}"
    ],
    answer: `class Main {
  public static void main(String[] args) {
    String[] names = {"Aoi", "Ren", "Mio"};

    for (int i = 0; i < names.length; i++) {
      System.out.println(i + 1 + ": " + names[i]);
    }
  }
}`
  }
];

const conditionalQuestions = [
  {
    title: "80点以上なら合格と表示する",
    concept: "if",
    prompt: "scoreが80以上のときだけ、合格と表示します。",
    output: "合格",
    explanation: "if文は条件式がtrueのときだけ中の処理を実行します。scoreは82なので、score >= 80 はtrueです。",
    hints: [
      "80点以上は、80も含みます。だから > ではなく >= を使います。",
      "ifの丸かっこには、trueかfalseになる条件式を書きます。",
      "文字を表示するときは、\"合格\" のようにダブルクォーテーションで囲みます。"
    ],
    parts: [
      "class Main {\n  public static void main(String[] args) {\n    int score = 82;\n\n    if (score ",
      { answer: ">=", accepts: [">="], chars: 3 },
      " 80) {\n      System.out.println(",
      { answer: "\"合格\"", accepts: ["\"合格\""], chars: 7 },
      ");\n    }\n  }\n}"
    ],
    answer: `class Main {
  public static void main(String[] args) {
    int score = 82;

    if (score >= 80) {
      System.out.println("合格");
    }
  }
}`
  },
  {
    title: "条件に合わないときは再挑戦と表示する",
    concept: "if / else",
    prompt: "scoreが80以上なら合格、それ以外なら再挑戦と表示します。",
    output: "再挑戦",
    explanation: "scoreは65なので、score >= 80 はfalseです。ifの中は通らず、elseの中が実行されます。",
    hints: [
      "elseは、ifの条件がfalseだったときの出口です。",
      "scoreは65です。80以上ではないので、今回はelse側が動きます。",
      "elseには条件式を書きません。ifで当てはまらなかった残りを受け取ります。"
    ],
    parts: [
      "class Main {\n  public static void main(String[] args) {\n    int score = 65;\n\n    if (score >= 80) {\n      System.out.println(\"合格\");\n    } ",
      { answer: "else", accepts: ["else"], chars: 5 },
      " {\n      System.out.println(",
      { answer: "\"再挑戦\"", accepts: ["\"再挑戦\""], chars: 8 },
      ");\n    }\n  }\n}"
    ],
    answer: `class Main {
  public static void main(String[] args) {
    int score = 65;

    if (score >= 80) {
      System.out.println("合格");
    } else {
      System.out.println("再挑戦");
    }
  }
}`
  },
  {
    title: "点数でA・B・Cを分ける",
    concept: "else if",
    prompt: "90点以上はA、70点以上はB、それ以外はCと表示します。",
    output: "B",
    explanation: "条件は上から順番に試されます。scoreは78なので90以上ではありませんが、70以上には当てはまります。",
    hints: [
      "else ifは、条件をもう1つ追加したいときに使います。",
      "78は90以上ではありません。最初のifはfalseです。",
      "78は70以上です。次のelse ifがtrueになり、Bが表示されます。"
    ],
    parts: [
      "class Main {\n  public static void main(String[] args) {\n    int score = 78;\n\n    if (score >= 90) {\n      System.out.println(\"A\");\n    } else if (score ",
      { answer: ">=", accepts: [">="], chars: 3 },
      " 70) {\n      System.out.println(",
      { answer: "\"B\"", accepts: ["\"B\""], chars: 4 },
      ");\n    } else {\n      System.out.println(\"C\");\n    }\n  }\n}"
    ],
    answer: `class Main {
  public static void main(String[] args) {
    int score = 78;

    if (score >= 90) {
      System.out.println("A");
    } else if (score >= 70) {
      System.out.println("B");
    } else {
      System.out.println("C");
    }
  }
}`
  },
  {
    title: "同じかどうかを判定する",
    concept: "==",
    prompt: "numberが3と同じなら、sameと表示します。",
    output: "same",
    explanation: "Javaで同じかどうかを比べるときは == を使います。= は代入なので、ifの比較には使いません。",
    hints: [
      "代入は =、比較は == です。ここは混ぜると危険です。",
      "numberには3が入っています。",
      "number == 3 がtrueなので、sameが表示されます。"
    ],
    parts: [
      "class Main {\n  public static void main(String[] args) {\n    int number = 3;\n\n    if (number ",
      { answer: "==", accepts: ["=="], chars: 3 },
      " 3) {\n      System.out.println(",
      { answer: "\"same\"", accepts: ["\"same\""], chars: 7 },
      ");\n    }\n  }\n}"
    ],
    answer: `class Main {
  public static void main(String[] args) {
    int number = 3;

    if (number == 3) {
      System.out.println("same");
    }
  }
}`
  },
  {
    title: "文字列が違うことを判定する",
    concept: "String / equals",
    prompt: "nameがRenではないとき、not Renと表示します。",
    output: "not Ren",
    explanation: "文字列の中身を比べるときはequalsを使います。先頭に!を付けると「等しくないなら」という判定になります。",
    hints: [
      "文字列の中身を比べるときは name.equals(\"Ren\") の形を使います。",
      "! は結果を反対にします。trueならfalse、falseならtrueになります。",
      "nameはAoiなので、Renとは一致しません。だからnot Renが表示されます。"
    ],
    parts: [
      "class Main {\n  public static void main(String[] args) {\n    String name = \"Aoi\";\n\n    if (!name.equals(",
      { answer: "\"Ren\"", accepts: ["\"Ren\""], chars: 6 },
      ")) {\n      System.out.println(",
      { answer: "\"not Ren\"", accepts: ["\"not Ren\""], chars: 10 },
      ");\n    }\n  }\n}"
    ],
    answer: `class Main {
  public static void main(String[] args) {
    String name = "Aoi";

    if (!name.equals("Ren")) {
      System.out.println("not Ren");
    }
  }
}`
  },
  {
    title: "両方の条件を満たすか判定する",
    concept: "&&",
    prompt: "scoreが80以上、かつ attendanceが90以上ならOKと表示します。",
    output: "OK",
    explanation: "&& は両方の条件がtrueのときだけtrueになります。今回は点数も出席率も条件を満たしています。",
    hints: [
      "&& は「かつ」です。左も右もtrueでなければ通りません。",
      "scoreは85なので80以上です。",
      "attendanceは95なので90以上です。両方trueなのでOKが表示されます。"
    ],
    parts: [
      "class Main {\n  public static void main(String[] args) {\n    int score = 85;\n    int attendance = 95;\n\n    if (score >= 80 ",
      { answer: "&&", accepts: ["&&"], chars: 3 },
      " attendance >= 90) {\n      System.out.println(",
      { answer: "\"OK\"", accepts: ["\"OK\""], chars: 5 },
      ");\n    }\n  }\n}"
    ],
    answer: `class Main {
  public static void main(String[] args) {
    int score = 85;
    int attendance = 95;

    if (score >= 80 && attendance >= 90) {
      System.out.println("OK");
    }
  }
}`
  },
  {
    title: "どちらかの条件を満たすか判定する",
    concept: "||",
    prompt: "couponがある、またはpriceが1000未満ならbuyと表示します。",
    output: "buy",
    explanation: "|| はどちらか1つでもtrueならtrueです。couponはfalseですが、price < 1000 がtrueです。",
    hints: [
      "|| は「または」です。どちらか一方がtrueなら通ります。",
      "couponはfalseです。ここだけ見ると通りません。",
      "priceは800なので1000未満です。右側がtrueなのでbuyが表示されます。"
    ],
    parts: [
      "class Main {\n  public static void main(String[] args) {\n    boolean coupon = false;\n    int price = 800;\n\n    if (coupon ",
      { answer: "||", accepts: ["||"], chars: 3 },
      " price < 1000) {\n      System.out.println(",
      { answer: "\"buy\"", accepts: ["\"buy\""], chars: 6 },
      ");\n    }\n  }\n}"
    ],
    answer: `class Main {
  public static void main(String[] args) {
    boolean coupon = false;
    int price = 800;

    if (coupon || price < 1000) {
      System.out.println("buy");
    }
  }
}`
  },
  {
    title: "booleanの値で分岐する",
    concept: "boolean",
    prompt: "isMemberがtrueならmemberと表示します。",
    output: "member",
    explanation: "boolean型の変数は、それ自体がtrueかfalseを持っています。if (isMember) と書けば、その値をそのまま判定できます。",
    hints: [
      "booleanはtrueまたはfalseを入れる型です。",
      "isMemberにはtrueが入っています。",
      "ifの中には isMember == true と書くこともできますが、if (isMember) の形が簡潔です。"
    ],
    parts: [
      "class Main {\n  public static void main(String[] args) {\n    boolean isMember = true;\n\n    if (",
      { answer: "isMember", accepts: ["isMember", "isMember == true"], chars: 10 },
      ") {\n      System.out.println(",
      { answer: "\"member\"", accepts: ["\"member\""], chars: 9 },
      ");\n    }\n  }\n}"
    ],
    answer: `class Main {
  public static void main(String[] args) {
    boolean isMember = true;

    if (isMember) {
      System.out.println("member");
    }
  }
}`
  },
  {
    title: "範囲に入っているか判定する",
    concept: "range",
    prompt: "ageが13以上19以下ならteenと表示します。",
    output: "teen",
    explanation: "範囲を判定するときは、下限と上限の2つの条件を&&でつなぎます。ageは16なので両方を満たします。",
    hints: [
      "13以上は age >= 13 です。",
      "19以下は age <= 19 です。",
      "両方満たす必要があるので、条件は && でつなぎます。"
    ],
    parts: [
      "class Main {\n  public static void main(String[] args) {\n    int age = 16;\n\n    if (age >= 13 ",
      { answer: "&&", accepts: ["&&"], chars: 3 },
      " age <= ",
      { answer: "19", accepts: ["19"], chars: 3 },
      ") {\n      System.out.println(\"teen\");\n    }\n  }\n}"
    ],
    answer: `class Main {
  public static void main(String[] args) {
    int age = 16;

    if (age >= 13 && age <= 19) {
      System.out.println("teen");
    }
  }
}`
  },
  {
    title: "偶数か奇数かを分ける",
    concept: "if / modulo",
    prompt: "numberが偶数ならeven、そうでなければoddと表示します。",
    output: "odd",
    explanation: "% は割った余りを調べます。7を2で割ると余りは1なので、偶数ではなくelse側のoddが表示されます。",
    hints: [
      "% は余りを求める記号です。",
      "偶数は2で割った余りが0です。",
      "numberは7なので、number % 2 == 0 はfalseです。else側が動きます。"
    ],
    parts: [
      "class Main {\n  public static void main(String[] args) {\n    int number = 7;\n\n    if (number % 2 == ",
      { answer: "0", accepts: ["0"], chars: 2 },
      ") {\n      System.out.println(\"even\");\n    } else {\n      System.out.println(",
      { answer: "\"odd\"", accepts: ["\"odd\""], chars: 6 },
      ");\n    }\n  }\n}"
    ],
    answer: `class Main {
  public static void main(String[] args) {
    int number = 7;

    if (number % 2 == 0) {
      System.out.println("even");
    } else {
      System.out.println("odd");
    }
  }
}`
  }
];

const booleanQuestions = [
  {
    title: "trueをそのまま表示する",
    concept: "boolean",
    prompt: "boolean型の変数isOpenの値を表示します。",
    output: "true",
    explanation: "boolean型にはtrueかfalseだけが入ります。isOpenにはtrueが入っているので、そのままtrueと表示されます。",
    hints: [
      "booleanは真偽値を入れる型です。",
      "trueは文字列ではないので、ダブルクォーテーションで囲みません。",
      "変数の中身を表示するときはprintlnの中に変数名を書きます。"
    ],
    parts: [
      "class Main {\n  public static void main(String[] args) {\n    boolean isOpen = ",
      { answer: "true", accepts: ["true"], chars: 5 },
      ";\n    System.out.println(",
      { answer: "isOpen", accepts: ["isOpen"], chars: 7 },
      ");\n  }\n}"
    ],
    answer: `class Main {
  public static void main(String[] args) {
    boolean isOpen = true;
    System.out.println(isOpen);
  }
}`
  },
  {
    title: "比較式の結果を表示する",
    concept: "comparison",
    prompt: "scoreが80以上かどうかを表示します。",
    output: "true",
    explanation: "score >= 80 は条件式です。scoreは82なので、この条件式の結果はtrueになります。",
    hints: [
      "条件式は、最後にtrueかfalseへ変わります。",
      "82は80以上なので、score >= 80 はtrueです。",
      "条件式そのものをprintlnに入れると、判定結果を表示できます。"
    ],
    parts: [
      "class Main {\n  public static void main(String[] args) {\n    int score = 82;\n    System.out.println(score ",
      { answer: ">=", accepts: [">="], chars: 3 },
      " ",
      { answer: "80", accepts: ["80"], chars: 3 },
      ");\n  }\n}"
    ],
    answer: `class Main {
  public static void main(String[] args) {
    int score = 82;
    System.out.println(score >= 80);
  }
}`
  },
  {
    title: "等しいかどうかを判定する",
    concept: "==",
    prompt: "countが3と等しいかどうかを表示します。",
    output: "false",
    explanation: "countは4です。4と3は等しくないので、count == 3 の結果はfalseです。",
    hints: [
      "同じかどうかを調べるときは == を使います。",
      "= は代入、== は比較です。ここを間違えると危険です。",
      "countは4なので、3と同じではありません。"
    ],
    parts: [
      "class Main {\n  public static void main(String[] args) {\n    int count = 4;\n    System.out.println(count ",
      { answer: "==", accepts: ["=="], chars: 3 },
      " 3);\n  }\n}"
    ],
    answer: `class Main {
  public static void main(String[] args) {
    int count = 4;
    System.out.println(count == 3);
  }
}`
  },
  {
    title: "等しくないかどうかを判定する",
    concept: "!=",
    prompt: "levelが1ではないかどうかを表示します。",
    output: "true",
    explanation: "!= は等しくないという意味です。levelは2なので、1ではありません。結果はtrueです。",
    hints: [
      "等しくないことを調べる記号は != です。",
      "levelには2が入っています。",
      "2は1ではないので、条件式はtrueになります。"
    ],
    parts: [
      "class Main {\n  public static void main(String[] args) {\n    int level = 2;\n    System.out.println(level ",
      { answer: "!=", accepts: ["!="], chars: 3 },
      " 1);\n  }\n}"
    ],
    answer: `class Main {
  public static void main(String[] args) {
    int level = 2;
    System.out.println(level != 1);
  }
}`
  },
  {
    title: "否定でtrueとfalseを反転する",
    concept: "!",
    prompt: "isErrorを否定して表示します。",
    output: "true",
    explanation: "! は真偽値を反転します。isErrorはfalseなので、!isErrorはtrueになります。",
    hints: [
      "! は「ではない」と読むと考えやすいです。",
      "falseを否定するとtrueになります。",
      "if文だけでなく、printlnの中でも真偽値の反転を表示できます。"
    ],
    parts: [
      "class Main {\n  public static void main(String[] args) {\n    boolean isError = false;\n    System.out.println(",
      { answer: "!isError", accepts: ["!isError"], chars: 9 },
      ");\n  }\n}"
    ],
    answer: `class Main {
  public static void main(String[] args) {
    boolean isError = false;
    System.out.println(!isError);
  }
}`
  },
  {
    title: "かつの条件を読む",
    concept: "&&",
    prompt: "ageが20以上、かつhasTicketがtrueかどうかを表示します。",
    output: "true",
    explanation: "&& は両方trueのときだけtrueです。age >= 20もhasTicketもtrueなので、結果はtrueです。",
    hints: [
      "&& は「かつ」です。",
      "ageは22なので、age >= 20 はtrueです。",
      "hasTicketもtrueです。両方trueなので全体もtrueです。"
    ],
    parts: [
      "class Main {\n  public static void main(String[] args) {\n    int age = 22;\n    boolean hasTicket = true;\n    System.out.println(age >= 20 ",
      { answer: "&&", accepts: ["&&"], chars: 3 },
      " ",
      { answer: "hasTicket", accepts: ["hasTicket"], chars: 10 },
      ");\n  }\n}"
    ],
    answer: `class Main {
  public static void main(String[] args) {
    int age = 22;
    boolean hasTicket = true;
    System.out.println(age >= 20 && hasTicket);
  }
}`
  },
  {
    title: "またはの条件を読む",
    concept: "||",
    prompt: "isMemberまたはcouponがtrueかどうかを表示します。",
    output: "true",
    explanation: "|| はどちらか1つでもtrueならtrueです。isMemberはfalseですが、couponがtrueなので全体はtrueです。",
    hints: [
      "|| は「または」です。",
      "左がfalseでも、右がtrueなら全体はtrueです。",
      "条件を広げたいときに||を使います。"
    ],
    parts: [
      "class Main {\n  public static void main(String[] args) {\n    boolean isMember = false;\n    boolean coupon = true;\n    System.out.println(isMember ",
      { answer: "||", accepts: ["||"], chars: 3 },
      " coupon);\n  }\n}"
    ],
    answer: `class Main {
  public static void main(String[] args) {
    boolean isMember = false;
    boolean coupon = true;
    System.out.println(isMember || coupon);
  }
}`
  },
  {
    title: "範囲の条件式を作る",
    concept: "range",
    prompt: "numが1以上10以下かどうかを表示します。",
    output: "true",
    explanation: "範囲は下限と上限を別々に判定し、&&でつなぎます。numは7なので範囲内です。",
    hints: [
      "1以上は num >= 1 です。",
      "10以下は num <= 10 です。",
      "両方を満たす必要があるので&&でつなぎます。"
    ],
    parts: [
      "class Main {\n  public static void main(String[] args) {\n    int num = 7;\n    System.out.println(num >= 1 ",
      { answer: "&&", accepts: ["&&"], chars: 3 },
      " num <= ",
      { answer: "10", accepts: ["10"], chars: 3 },
      ");\n  }\n}"
    ],
    answer: `class Main {
  public static void main(String[] args) {
    int num = 7;
    System.out.println(num >= 1 && num <= 10);
  }
}`
  },
  {
    title: "条件式を変数に入れる",
    concept: "boolean variable",
    prompt: "scoreが60以上かどうかをboolean変数passedに入れて表示します。",
    output: "true",
    explanation: "条件式の結果はtrueかfalseです。その結果をboolean変数に入れて、あとから使うことができます。",
    hints: [
      "boolean変数にはtrue/falseを入れられます。",
      "score >= 60 の結果もtrue/falseです。",
      "条件式の結果をpassedに入れてから表示します。"
    ],
    parts: [
      "class Main {\n  public static void main(String[] args) {\n    int score = 75;\n    boolean passed = score ",
      { answer: ">=", accepts: [">="], chars: 3 },
      " 60;\n    System.out.println(",
      { answer: "passed", accepts: ["passed"], chars: 7 },
      ");\n  }\n}"
    ],
    answer: `class Main {
  public static void main(String[] args) {
    int score = 75;
    boolean passed = score >= 60;
    System.out.println(passed);
  }
}`
  },
  {
    title: "ifの中でboolean変数を使う",
    concept: "if / boolean",
    prompt: "canEnterがtrueならEnterと表示します。",
    output: "Enter",
    explanation: "boolean変数はifの条件としてそのまま使えます。canEnterはtrueなので、ifの中が実行されます。",
    hints: [
      "ifの丸かっこにはtrue/falseになる値を書きます。",
      "canEnterはbooleanなので、それ自体が条件になります。",
      "canEnter == true と書けますが、if (canEnter) が自然です。"
    ],
    parts: [
      "class Main {\n  public static void main(String[] args) {\n    boolean canEnter = true;\n\n    if (",
      { answer: "canEnter", accepts: ["canEnter", "canEnter == true"], chars: 10 },
      ") {\n      System.out.println(",
      { answer: "\"Enter\"", accepts: ["\"Enter\""], chars: 8 },
      ");\n    }\n  }\n}"
    ],
    answer: `class Main {
  public static void main(String[] args) {
    boolean canEnter = true;

    if (canEnter) {
      System.out.println("Enter");
    }
  }
}`
  }
];

const arrayIntermediateData = [
  {
    "title": "100点以上のスコアだけ表示する",
    "concept": "array / filter",
    "prompt": "scoresの中から100以上の値だけを表示します。条件に合わない値は何もしません。",
    "output": "120\n105",
    "explanation": "配列を順番に見て、条件に合う要素だけを表示します。配列の全件走査とif文の組み合わせが基本です。",
    "parts": [
      "class Main {\n  public static void main(String[] args) {\n    int[] scores = {80, 120, 95, 105};\n\n    for (",
      {
        "answer": "int i = 0",
        "accepts": [
          "int i = 0",
          "int i=0"
        ],
        "chars": 10
      },
      "; ",
      {
        "answer": "i < scores.length",
        "accepts": [
          "i < scores.length",
          "i<scores.length"
        ],
        "chars": 17
      },
      "; i++) {\n      if (",
      {
        "answer": "scores[i] >= 100",
        "accepts": [
          "scores[i] >= 100",
          "scores[i]>=100"
        ],
        "chars": 17
      },
      ") {\n        ",
      {
        "answer": "System.out.println(scores[i])",
        "accepts": [
          "System.out.println(scores[i])"
        ],
        "chars": 30
      },
      ";\n      }\n    }\n  }\n}"
    ],
    "answer": "class Main {\n  public static void main(String[] args) {\n    int[] scores = {80, 120, 95, 105};\n\n    for (int i = 0; i < scores.length; i++) {\n      if (scores[i] >= 100) {\n        System.out.println(scores[i]);\n      }\n    }\n  }\n}"
  },
  {
    "title": "偶数番目の要素だけ合計する",
    "concept": "array / index",
    "prompt": "0番、2番、4番の要素だけを合計して表示します。インデックスの増やし方を考えます。",
    "output": "15",
    "explanation": "配列の値ではなく、番号の進め方がポイントです。iを2ずつ増やせば、0、2、4だけを取り出せます。",
    "parts": [
      "class Main {\n  public static void main(String[] args) {\n    int[] numbers = {3, 8, 5, 10, 7};\n    int sum = 0;\n\n    for (",
      {
        "answer": "int i = 0",
        "accepts": [
          "int i = 0",
          "int i=0"
        ],
        "chars": 10
      },
      "; ",
      {
        "answer": "i < numbers.length",
        "accepts": [
          "i < numbers.length",
          "i<numbers.length"
        ],
        "chars": 18
      },
      "; ",
      {
        "answer": "i += 2",
        "accepts": [
          "i += 2",
          "i=i+2",
          "i = i + 2"
        ],
        "chars": 8
      },
      ") {\n      ",
      {
        "answer": "sum += numbers[i]",
        "accepts": [
          "sum += numbers[i]",
          "sum=sum+numbers[i]",
          "sum = sum + numbers[i]"
        ],
        "chars": 18
      },
      ";\n    }\n\n    System.out.println(sum);\n  }\n}"
    ],
    "answer": "class Main {\n  public static void main(String[] args) {\n    int[] numbers = {3, 8, 5, 10, 7};\n    int sum = 0;\n\n    for (int i = 0; i < numbers.length; i += 2) {\n      sum += numbers[i];\n    }\n\n    System.out.println(sum);\n  }\n}"
  },
  {
    "title": "4文字以上の名前を数える",
    "concept": "array / String",
    "prompt": "namesの中から、4文字以上の名前が何個あるか数えます。",
    "output": "2",
    "explanation": "Stringの長さはlength()で調べます。配列のlengthとは書き方が違う点に注意します。",
    "parts": [
      "class Main {\n  public static void main(String[] args) {\n    String[] names = {\"Aoi\", \"Ren\", \"Sora\", \"Mina\"};\n    int count = 0;\n\n    for (int i = 0; i < names.length; i++) {\n      if (",
      {
        "answer": "names[i].length() >= 4",
        "accepts": [
          "names[i].length() >= 4",
          "names[i].length()>=4"
        ],
        "chars": 23
      },
      ") {\n        ",
      {
        "answer": "count++",
        "accepts": [
          "count++",
          "++count",
          "count += 1",
          "count=count+1",
          "count = count + 1"
        ],
        "chars": 8
      },
      ";\n      }\n    }\n\n    System.out.println(",
      {
        "answer": "count",
        "chars": 6
      },
      ");\n  }\n}"
    ],
    "answer": "class Main {\n  public static void main(String[] args) {\n    String[] names = {\"Aoi\", \"Ren\", \"Sora\", \"Mina\"};\n    int count = 0;\n\n    for (int i = 0; i < names.length; i++) {\n      if (names[i].length() >= 4) {\n        count++;\n      }\n    }\n\n    System.out.println(count);\n  }\n}"
  },
  {
    "title": "最後の偶数を探す",
    "concept": "array / search",
    "prompt": "numbersを最後まで調べ、最後に見つかった偶数を表示します。",
    "output": "8",
    "explanation": "偶数を見つけるたびにlastEvenを更新します。最後まで走査したあと、残った値が最後の偶数です。",
    "parts": [
      "class Main {\n  public static void main(String[] args) {\n    int[] numbers = {3, 4, 7, 10, 5, 8, 9};\n    int lastEven = 0;\n\n    for (int i = 0; i < numbers.length; i++) {\n      if (",
      {
        "answer": "numbers[i] % 2 == 0",
        "accepts": [
          "numbers[i] % 2 == 0",
          "numbers[i]%2==0"
        ],
        "chars": 20
      },
      ") {\n        ",
      {
        "answer": "lastEven = numbers[i]",
        "accepts": [
          "lastEven = numbers[i]",
          "lastEven=numbers[i]"
        ],
        "chars": 22
      },
      ";\n      }\n    }\n\n    System.out.println(",
      {
        "answer": "lastEven",
        "chars": 9
      },
      ");\n  }\n}"
    ],
    "answer": "class Main {\n  public static void main(String[] args) {\n    int[] numbers = {3, 4, 7, 10, 5, 8, 9};\n    int lastEven = 0;\n\n    for (int i = 0; i < numbers.length; i++) {\n      if (numbers[i] % 2 == 0) {\n        lastEven = numbers[i];\n      }\n    }\n\n    System.out.println(lastEven);\n  }\n}"
  },
  {
    "title": "マイナスを0として合計する",
    "concept": "array / normalize",
    "prompt": "負の値は0として扱い、0以上の値だけ合計します。",
    "output": "13",
    "explanation": "配列の値をそのまま足すのではなく、条件で足すかどうかを決めます。データの補正に近い考え方です。",
    "parts": [
      "class Main {\n  public static void main(String[] args) {\n    int[] values = {5, -2, 8, -1};\n    int sum = 0;\n\n    for (int i = 0; i < values.length; i++) {\n      if (",
      {
        "answer": "values[i] >= 0",
        "accepts": [
          "values[i] >= 0",
          "values[i]>=0"
        ],
        "chars": 15
      },
      ") {\n        ",
      {
        "answer": "sum += values[i]",
        "accepts": [
          "sum += values[i]",
          "sum=sum+values[i]",
          "sum = sum + values[i]"
        ],
        "chars": 17
      },
      ";\n      }\n    }\n\n    System.out.println(sum);\n  }\n}"
    ],
    "answer": "class Main {\n  public static void main(String[] args) {\n    int[] values = {5, -2, 8, -1};\n    int sum = 0;\n\n    for (int i = 0; i < values.length; i++) {\n      if (values[i] >= 0) {\n        sum += values[i];\n      }\n    }\n\n    System.out.println(sum);\n  }\n}"
  },
  {
    "title": "カンマ区切りの文字列を作る",
    "concept": "array / join",
    "prompt": "namesをAoi,Ren,Mioの形で表示します。最後に余計なカンマを付けません。",
    "output": "Aoi,Ren,Mio",
    "explanation": "最後の要素だけ扱いを変える問題です。i > 0 のときだけ先にカンマを足すと、末尾の余計なカンマを避けられます。",
    "parts": [
      "class Main {\n  public static void main(String[] args) {\n    String[] names = {\"Aoi\", \"Ren\", \"Mio\"};\n    String result = \"\";\n\n    for (int i = 0; i < names.length; i++) {\n      if (",
      {
        "answer": "i > 0",
        "accepts": [
          "i > 0",
          "i>0"
        ],
        "chars": 6
      },
      ") {\n        ",
      {
        "answer": "result += \",\"",
        "accepts": [
          "result += \",\"",
          "result=result+\",\"",
          "result = result + \",\""
        ],
        "chars": 14
      },
      ";\n      }\n      ",
      {
        "answer": "result += names[i]",
        "accepts": [
          "result += names[i]",
          "result=result+names[i]",
          "result = result + names[i]"
        ],
        "chars": 19
      },
      ";\n    }\n\n    System.out.println(result);\n  }\n}"
    ],
    "answer": "class Main {\n  public static void main(String[] args) {\n    String[] names = {\"Aoi\", \"Ren\", \"Mio\"};\n    String result = \"\";\n\n    for (int i = 0; i < names.length; i++) {\n      if (i > 0) {\n        result += \",\";\n      }\n      result += names[i];\n    }\n\n    System.out.println(result);\n  }\n}"
  },
  {
    "title": "最大値のインデックスを表示する",
    "concept": "array / max index",
    "prompt": "scoresの最大値そのものではなく、最大値がある番号を表示します。",
    "output": "1",
    "explanation": "最大値とその場所を一緒に更新します。値だけ追うと、どこにあったかを失います。",
    "parts": [
      "class Main {\n  public static void main(String[] args) {\n    int[] scores = {70, 95, 80, 90};\n    int max = scores[0];\n    int maxIndex = 0;\n\n    for (int i = 1; i < scores.length; i++) {\n      if (",
      {
        "answer": "scores[i] > max",
        "accepts": [
          "scores[i] > max",
          "scores[i]>max"
        ],
        "chars": 16
      },
      ") {\n        ",
      {
        "answer": "max = scores[i]",
        "accepts": [
          "max = scores[i]",
          "max=scores[i]"
        ],
        "chars": 16
      },
      ";\n        ",
      {
        "answer": "maxIndex = i",
        "accepts": [
          "maxIndex = i",
          "maxIndex=i"
        ],
        "chars": 13
      },
      ";\n      }\n    }\n\n    System.out.println(maxIndex);\n  }\n}"
    ],
    "answer": "class Main {\n  public static void main(String[] args) {\n    int[] scores = {70, 95, 80, 90};\n    int max = scores[0];\n    int maxIndex = 0;\n\n    for (int i = 1; i < scores.length; i++) {\n      if (scores[i] > max) {\n        max = scores[i];\n        maxIndex = i;\n      }\n    }\n\n    System.out.println(maxIndex);\n  }\n}"
  },
  {
    "title": "前の値より大きい回数を数える",
    "concept": "array / compare",
    "prompt": "隣り合う値を比べ、後ろの値が前より大きい回数を数えます。",
    "output": "3",
    "explanation": "iとi-1を同時に使います。0番には前の値がないので、iは1から始めます。",
    "parts": [
      "class Main {\n  public static void main(String[] args) {\n    int[] numbers = {2, 5, 4, 8, 9};\n    int count = 0;\n\n    for (int i = ",
      {
        "answer": "1",
        "chars": 2
      },
      "; ",
      {
        "answer": "i < numbers.length",
        "accepts": [
          "i < numbers.length",
          "i<numbers.length"
        ],
        "chars": 18
      },
      "; i++) {\n      if (",
      {
        "answer": "numbers[i] > numbers[i - 1]",
        "accepts": [
          "numbers[i] > numbers[i - 1]",
          "numbers[i]>numbers[i-1]"
        ],
        "chars": 29
      },
      ") {\n        count++;\n      }\n    }\n\n    System.out.println(count);\n  }\n}"
    ],
    "answer": "class Main {\n  public static void main(String[] args) {\n    int[] numbers = {2, 5, 4, 8, 9};\n    int count = 0;\n\n    for (int i = 1; i < numbers.length; i++) {\n      if (numbers[i] > numbers[i - 1]) {\n        count++;\n      }\n    }\n\n    System.out.println(count);\n  }\n}"
  },
  {
    "title": "配列を逆順に表示する",
    "concept": "array / reverse loop",
    "prompt": "配列の最後から最初へ向かって、値を1行ずつ表示します。",
    "output": "30\n20\n10",
    "explanation": "最後のインデックスはlength - 1です。そこから0まで、iを1ずつ減らします。",
    "parts": [
      "class Main {\n  public static void main(String[] args) {\n    int[] numbers = {10, 20, 30};\n\n    for (",
      {
        "answer": "int i = numbers.length - 1",
        "accepts": [
          "int i = numbers.length - 1",
          "int i=numbers.length-1"
        ],
        "chars": 28
      },
      "; ",
      {
        "answer": "i >= 0",
        "accepts": [
          "i >= 0",
          "i>=0"
        ],
        "chars": 7
      },
      "; ",
      {
        "answer": "i--",
        "accepts": [
          "i--",
          "--i",
          "i -= 1",
          "i=i-1",
          "i = i - 1"
        ],
        "chars": 5
      },
      ") {\n      System.out.println(",
      {
        "answer": "numbers[i]",
        "accepts": [
          "numbers[i]"
        ],
        "chars": 10
      },
      ");\n    }\n  }\n}"
    ],
    "answer": "class Main {\n  public static void main(String[] args) {\n    int[] numbers = {10, 20, 30};\n\n    for (int i = numbers.length - 1; i >= 0; i--) {\n      System.out.println(numbers[i]);\n    }\n  }\n}"
  },
  {
    "title": "2つの配列の差を合計する",
    "concept": "array / pair",
    "prompt": "beforeとafterの同じ番号を比べ、差分の合計を表示します。",
    "output": "15",
    "explanation": "同じインデックスで2つの配列を見る問題です。before[i]とafter[i]を対応させて読みます。",
    "parts": [
      "class Main {\n  public static void main(String[] args) {\n    int[] before = {10, 20, 30};\n    int[] after = {15, 18, 42};\n    int total = 0;\n\n    for (int i = 0; i < before.length; i++) {\n      ",
      {
        "answer": "total += after[i] - before[i]",
        "accepts": [
          "total += after[i] - before[i]",
          "total=total+after[i]-before[i]",
          "total = total + after[i] - before[i]"
        ],
        "chars": 30
      },
      ";\n    }\n\n    System.out.println(total);\n  }\n}"
    ],
    "answer": "class Main {\n  public static void main(String[] args) {\n    int[] before = {10, 20, 30};\n    int[] after = {15, 18, 42};\n    int total = 0;\n\n    for (int i = 0; i < before.length; i++) {\n      total += after[i] - before[i];\n    }\n\n    System.out.println(total);\n  }\n}"
  }
];

arrayQuestions.forEach((question, index) => {
  const beginnerHints = buildTraceaHints(question, question.parts);
  const intermediate = arrayIntermediateData[index];
  const intermediateHints = buildTraceaHints(intermediate, intermediate.parts);
  const beginnerSupport = buildPrerequisiteSupport(question, "arrays", "beginner");
  const intermediateSupport = buildPrerequisiteSupport(intermediate, "arrays", "intermediate");
  Object.assign(question, beginnerSupport);
  question.hints = beginnerHints;
  question.levels = {
    beginner: { parts: question.parts, hints: beginnerHints, ...beginnerSupport },
    intermediate: { ...intermediate, hints: intermediateHints, ...intermediateSupport }
  };
});

conditionalQuestions.forEach((question) => {
  Object.assign(question, buildPrerequisiteSupport(question, "conditionals", "beginner"));
  question.hints = buildTraceaHints(question, question.parts);
});

booleanQuestions.forEach((question) => {
  Object.assign(question, buildPrerequisiteSupport(question, "booleans", "beginner"));
  question.hints = buildTraceaHints(question, question.parts);
});

const topicDeepDives = {
  array: {
    eyebrow: "array",
    title: "配列は、値をまとめるための箱。でも、何でも入る箱ではない。",
    body: [
      "配列は、同じ型の値を順番に並べて持つ仕組みです。intの配列ならintだけ、Stringの配列ならStringだけ。ここを曖昧にすると、コードはすぐに読みにくくなります。",
      "たとえば int[] scores = {80, 90, 70}; は「scoresという名前で、intの値を3つ持つ」という意味です。変数が3つあるのではなく、1つの配列の中に3つの部屋があると考えてください。",
      "では質問です。点数が100人分あるとき、score1、score2、score3...と100個の変数を作りますか。作れなくはありません。でも、その瞬間に処理は破綻します。だから配列を使います。"
    ],
    checks: [
      "配列名は複数形にすると読みやすい。scores、names、numbersなど。",
      "配列に入る値は同じ型にそろえる。",
      "配列は「まとめて持つ」だけでなく、for文でまとめて処理するために使う。"
    ],
    code: "int[] scores = {80, 90, 70};\nString[] names = {\"Aoi\", \"Ren\", \"Mio\"};"
  },
  index: {
    eyebrow: "index",
    title: "インデックスは0から始まる。ここで1つズレる人が多い。",
    body: [
      "配列の番号は0から始まります。最初の値は[0]、2番目の値は[1]です。人間の感覚では1番目から数えるので、ここは意識して切り替える必要があります。",
      "scores[0] と書くと、scores配列の最初の値を取り出します。scores[1] は2番目。scores[2] は3番目です。",
      "ここで問いです。3個の配列の最後の番号は何でしょう。3ではありません。0、1、2なので、最後は2です。このズレに気づけるかどうかが配列の第一関門です。"
    ],
    checks: [
      "最初の要素は array[0]。",
      "2番目の要素は array[1]。",
      "要素が3個なら、最後の番号は2。"
    ],
    code: "int[] scores = {80, 90, 70};\nSystem.out.println(scores[0]); // 80\nSystem.out.println(scores[1]); // 90"
  },
  length: {
    eyebrow: "length",
    title: "lengthは個数。最後の番号ではない。",
    body: [
      "scores.length は、配列の中に値がいくつあるかを表します。3個ならlengthは3です。ただし、最後のインデックスは3ではありません。",
      "なぜなら番号は0から始まるからです。個数が3なら、番号は0、1、2。つまり最後の番号は length - 1 です。",
      "ここを間違えると、最後の要素を取ろうとして範囲外エラーになります。lengthは安全にループを書くための基準です。最後の番号そのものではない、と強く覚えてください。"
    ],
    checks: [
      "array.length は要素数。",
      "最後のインデックスは array.length - 1。",
      "for文では i < array.length と書くと範囲外になりにくい。"
    ],
    code: "String[] fruits = {\"apple\", \"banana\", \"orange\"};\nSystem.out.println(fruits.length); // 3\nSystem.out.println(fruits[fruits.length - 1]); // orange"
  },
  loop: {
    eyebrow: "loop",
    title: "配列を全部見るなら、for文の出番。",
    body: [
      "配列の強さは、値をまとめて持てることだけではありません。for文で先頭から最後までまとめて処理できることにあります。",
      "基本形は for (int i = 0; i < array.length; i++) です。iを0から始め、lengthより小さい間だけ続けます。これで0番から最後まで、ちょうどよく回れます。",
      "ここで考えてください。もし i <= array.length と書いたらどうなるでしょう。最後に存在しない番号へ進みます。だから条件式は < です。<=ではありません。"
    ],
    checks: [
      "配列ループは i = 0 から始める。",
      "条件は i < array.length が基本。",
      "取り出す値は array[i]。arrayではない。"
    ],
    code: "int[] scores = {80, 90, 70};\nfor (int i = 0; i < scores.length; i++) {\n  System.out.println(scores[i]);\n}"
  },
  update: {
    eyebrow: "update",
    title: "配列の値は、番号を指定して入れ替える。",
    body: [
      "配列の中身は、あとから変更できます。scores[1] = 95; と書けば、1番の部屋に入っている値を95に入れ替えます。",
      "大切なのは、配列名、インデックス、代入する値の3つです。どの配列の、どの場所を、何に変えるのか。曖昧にしないでください。",
      "ここで注意です。scores[1]は2番目の値です。1番目ではありません。更新処理は目に見えにくいバグを作りやすいので、番号の確認を必ず入れましょう。"
    ],
    checks: [
      "更新は array[index] = newValue; の形。",
      "indexは0から始まる。",
      "更新後に同じindexを表示すると、新しい値が出る。"
    ],
    code: "int[] scores = {80, 70, 60};\nscores[1] = 95;\nSystem.out.println(scores[1]); // 95"
  },
  bounds: {
    eyebrow: "bounds",
    title: "範囲外アクセスは、配列で最もよくある失敗。",
    body: [
      "配列には使える番号の範囲があります。要素が3個なら、使える番号は0、1、2だけです。scores[3]は存在しません。",
      "存在しない番号を使うと、Javaはエラーを出します。これは意地悪ではありません。存在しない部屋を開けようとしているから止めてくれているのです。",
      "では、どう避けるか。基本は length を使うことです。最後まで回すなら i < scores.length。最後の値を取るなら scores.length - 1。この2つを外さなければ、大きな事故はかなり減ります。"
    ],
    checks: [
      "要素数3なら、使える番号は0、1、2。",
      "array[array.length] は範囲外。",
      "最後は array[array.length - 1]。"
    ],
    code: "int[] scores = {80, 90, 70};\nSystem.out.println(scores[2]); // OK\n// System.out.println(scores[3]); // 範囲外"
  },
  "class-main": {
    eyebrow: "class Main",
    title: "Javaは、まずクラスという箱の中にコードを書く。",
    body: [
      "class Main は、Javaのコードを入れる大きな箱です。練習問題ではこの箱の名前をMainにそろえています。",
      "最初はおまじないに見えても構いません。ただし、波かっこの外に処理を書くとJavaは実行できません。どこからどこまでが箱なのか、目で追ってください。"
    ],
    checks: ["classの後ろに名前を書く。", "処理は基本的にclassの波かっこの中に入る。", "練習ではMainという名前でそろえる。"],
    code: "class Main {\n  // この中にmainメソッドを書く\n}"
  },
  "main-method": {
    eyebrow: "main method",
    title: "mainメソッドは、プログラムが動き始める入口。",
    body: [
      "public static void main(String[] args) は、Javaを実行したときに最初に呼ばれる特別な形です。",
      "今すべてを分解して暗記する必要はありません。大切なのは、この波かっこの中に書いた命令が上から順に実行される、ということです。"
    ],
    checks: ["mainメソッドは実行開始地点。", "実際の処理はmainの波かっこの中に書く。", "命令は基本的に上から順番に動く。"],
    code: "public static void main(String[] args) {\n  System.out.println(\"Hello\");\n}"
  },
  braces: {
    eyebrow: "{ }",
    title: "波かっこは、コードの範囲を決める境界線。",
    body: [
      "{ から } までがひとまとまりです。classの範囲、mainメソッドの範囲、ifやforの範囲を作ります。",
      "波かっこがずれると、どの処理がどこに属しているのかが崩れます。エラーが出たら、まず対応する波かっこを探してください。"
    ],
    checks: ["開いた { には閉じる } が必要。", "内側の処理はインデントして読む。", "範囲が変わると実行される場所も変わる。"],
    code: "if (score >= 80) {\n  System.out.println(\"OK\");\n}"
  },
  semicolon: {
    eyebrow: ";",
    title: "セミコロンは、命令の終わりを示す。",
    body: [
      "System.out.println(i); の最後にある ; は、ここで1つの命令が終わるという印です。",
      "日本語の句点に近いですが、Javaでは省略できません。書き忘れると、次の行まで命令が続いているように読まれてしまいます。"
    ],
    checks: ["命令文の最後に ; を付ける。", "classやifの閉じ波かっこの後には基本的に付けない。", "エラー時は行末の ; を確認する。"],
    code: "int score = 80;\nSystem.out.println(score);"
  },
  comment: {
    eyebrow: "// comment",
    title: "コメントは、人間のためのメモ。",
    body: [
      "// から右側はJavaに実行されません。コードの意図や注意点を残すために使います。",
      "ただし、コメントで説明しないと読めないコードは危険です。まずコードを整理し、必要な場所だけ短く補足するのが基本です。"
    ],
    checks: ["// の右側は実行されない。", "学習中は処理の目的を書くと理解しやすい。", "古いコメントを残すと逆に混乱する。"],
    code: "// scoreを表示する\nSystem.out.println(score);"
  },
  println: {
    eyebrow: "println",
    title: "printlnは、値を表示して改行する命令。",
    body: [
      "System.out.println(...) は、かっこの中の値を画面に表示します。表示した後に改行するので、次の出力は次の行に出ます。",
      "出力問題では、何がprintlnに渡されているかを読むのが中心です。変数なのか、文字列なのか、計算式なのかを必ず見分けてください。"
    ],
    checks: ["文字列は \"Hello\" のように囲む。", "変数はそのまま書く。", "+ を使うと文字と値をつなげられる。"],
    code: "System.out.println(\"Hello\");\nSystem.out.println(3 + 2);"
  },
  "loop-for": {
    eyebrow: "for",
    title: "for文は、回数と流れが見えている繰り返し。",
    body: [
      "for文は、初期化式、条件式、更新式を1行にまとめます。どこから始めるか、いつまで続けるか、1回ごとにどう変えるかを同時に読みます。",
      "問題を解くときは、まずiの最初の値を書き出してください。次に条件式がtrueか確認し、最後に更新式で次の値へ進みます。"
    ],
    checks: ["初期化式は最初に1回だけ実行。", "条件式がtrueの間だけ続く。", "更新式は1回の処理が終わった後に動く。"],
    code: "for (int i = 1; i <= 5; i++) {\n  System.out.println(i);\n}"
  },
  "loop-while": {
    eyebrow: "while",
    title: "while文は、条件がtrueの間だけ続く。",
    body: [
      "while文は条件式だけを丸かっこに書きます。変数の準備と更新を別の場所に書くため、増やし忘れや減らし忘れに注意が必要です。",
      "止まらない繰り返しの多くは、条件をfalseにする動きが中にないことが原因です。条件がいつfalseになるか、必ず確認してください。"
    ],
    checks: ["繰り返し前に変数を用意する。", "条件式がtrueなら中を実行する。", "中で条件が変わるように更新する。"],
    code: "int i = 1;\nwhile (i <= 5) {\n  System.out.println(i);\n  i++;\n}"
  },
  "loop-break": {
    eyebrow: "break",
    title: "breakは、繰り返しをその場で完全に止める。",
    body: [
      "breakが実行されると、いま入っている繰り返しから抜けます。その回の残りも、次の回も実行されません。",
      "見つけたら終わり、条件に達したら終わり。そういう場面で使います。continueとの違いは、次の回へ行くのではなく、繰り返し自体を終えることです。"
    ],
    checks: ["break後の同じブロック内の処理には進まない。", "一番内側の繰り返しを抜ける。", "特定条件で探索を終えるときに使う。"],
    code: "if (i == 4) {\n  break;\n}"
  },
  "loop-continue": {
    eyebrow: "continue",
    title: "continueは、その回だけを飛ばして次へ進む。",
    body: [
      "continueが実行されると、その回の残りの処理を飛ばします。ただし、繰り返し自体は終わりません。",
      "3だけ表示しない、偶数だけ飛ばす、条件に合わないデータを無視する。こういう場面ではcontinueが自然です。"
    ],
    checks: ["今の回だけを途中で終える。", "次の回の判定へ進む。", "繰り返し全体は止まらない。"],
    code: "if (i == 3) {\n  continue;\n}"
  },
  if: {
    eyebrow: "if",
    title: "ifは、条件がtrueのときだけ中を実行する。",
    body: ["ifの丸かっこには、trueかfalseになる条件式を書きます。条件がtrueなら波かっこの中へ進み、falseなら通りません。", "まず条件式を声に出して読んでください。score >= 80 なら「scoreが80以上なら」です。ここを曖昧にしたままコードを追うと、分岐を見失います。"],
    checks: ["条件式はtrue/falseになる。", "trueのときだけ中を実行。", "falseならifの中を飛ばす。"],
    code: "if (score >= 80) {\n  System.out.println(\"合格\");\n}"
  },
  else: {
    eyebrow: "else",
    title: "elseは、ifに当てはまらなかった残りを受け止める。",
    body: ["elseには条件を書きません。直前のifやelse ifがすべてfalseだったときに実行されます。", "条件から外れた値を放置しないための出口です。合格ではないなら再挑戦、範囲内ではないならエラー、というように残りの扱いを決めます。"],
    checks: ["else単体に条件式はない。", "直前のifがfalseのときに動く。", "最後の受け皿として使う。"],
    code: "if (score >= 80) {\n  System.out.println(\"合格\");\n} else {\n  System.out.println(\"再挑戦\");\n}"
  },
  "else-if": {
    eyebrow: "else if",
    title: "else ifは、条件を上から順番に試す。",
    body: ["else ifは条件を追加するときに使います。上から順番に見て、最初にtrueになった場所だけが実行されます。", "順番には意味があります。90以上を先に見るのか、70以上を先に見るのかで結果が変わることがあります。強い条件から置くのが基本です。"],
    checks: ["上から順に判定する。", "最初にtrueになったブロックだけ動く。", "条件の順番が結果を変える。"],
    code: "if (score >= 90) {\n  System.out.println(\"A\");\n} else if (score >= 70) {\n  System.out.println(\"B\");\n}"
  },
  "conditional-comparison": {
    eyebrow: "comparison",
    title: "比較演算子は、値を比べてtrue/falseを作る。",
    body: ["==、!=、>=、< などは、条件式を作るための記号です。結果は数値ではなくtrueかfalseになります。", "特に = と == は分けてください。= は入れる、== は比べる。ここを間違えると、条件分岐の読み方が崩れます。"],
    checks: ["= は代入。", "== は等しいか比較。", "比較結果はtrue/false。"],
    code: "System.out.println(score >= 80);\nSystem.out.println(count == 3);"
  },
  "conditional-logic": {
    eyebrow: "&& / ||",
    title: "&&と||は、条件を組み合わせる。",
    body: ["&&は両方trueのときだけtrueです。条件を狭くします。||はどちらかtrueならtrueです。条件を広げます。", "迷ったら、日本語に戻してください。「AかつB」なのか、「AまたはB」なのか。ここを言葉で決めてから記号を選びます。"],
    checks: ["&& は両方true。", "|| はどちらかtrue。", "条件を狭めるか広げるかで選ぶ。"],
    code: "if (score >= 80 && attendance >= 90) {\n  System.out.println(\"OK\");\n}"
  },
  "conditional-boolean": {
    eyebrow: "boolean",
    title: "条件分岐は、trueかfalseを見て進む。",
    body: ["if文の中心にあるのはbooleanです。条件式もboolean変数も、最後はtrueかfalseとして扱われます。", "if (isMember) のように、boolean変数そのものを条件にできます。== true と書かなくても、変数がすでに判定結果を持っています。"],
    checks: ["booleanはtrue/falseの型。", "ifの条件にそのまま使える。", "!を付けると反転する。"],
    code: "boolean isMember = true;\nif (isMember) {\n  System.out.println(\"member\");\n}"
  },
  "boolean-type": {
    eyebrow: "boolean",
    title: "booleanは、trueかfalseだけを持つ型。",
    body: ["boolean型は、はい/いいえ、ON/OFF、合格/不合格のような二択を表すときに使います。", "数字や文字ではありません。trueとfalseはJavaのキーワードなので、\"true\"のように文字列として囲まない点に注意します。"],
    checks: ["入る値はtrueかfalseだけ。", "文字列ではないので引用符で囲まない。", "状態や判定結果を名前にする。"],
    code: "boolean isOpen = true;\nboolean hasError = false;"
  },
  "condition-expression": {
    eyebrow: "condition",
    title: "条件式は、最後にtrueかfalseへ評価される。",
    body: ["score >= 60 のような式は、見た目は計算式に似ていますが、結果はtrueかfalseです。", "if文に入れる前に、条件式だけをprintlnで表示してみると理解が速くなります。判定結果を自分の目で確認できます。"],
    checks: ["比較式の結果はboolean。", "printlnで判定結果を表示できる。", "ifはその結果を見て動く。"],
    code: "int score = 82;\nSystem.out.println(score >= 60); // true"
  },
  "boolean-comparison": {
    eyebrow: "comparison",
    title: "比較演算子は、booleanを作るための道具。",
    body: ["==は等しい、!=は等しくない、>はより大きい、<=は以下。どれも結果はtrueかfalseです。", "条件式を読むときは、記号を日本語に直すと安定します。num <= 10 は「numが10以下なら」です。"],
    checks: ["== と = を混同しない。", ">= は以上、<= は以下。", "結果は必ずtrue/false。"],
    code: "System.out.println(level != 1);\nSystem.out.println(num <= 10);"
  },
  "not-operator": {
    eyebrow: "!",
    title: "!は、trueとfalseを反転する。",
    body: ["!isError は「isErrorではない」と読みます。isErrorがfalseなら、!isErrorはtrueです。", "短い記号ですが、読み飛ばすと結果が真逆になります。条件式の先頭に!がないか、必ず確認してください。"],
    checks: ["!true はfalse。", "!false はtrue。", "条件の意味が反対になる。"],
    code: "boolean isError = false;\nSystem.out.println(!isError); // true"
  },
  "and-operator": {
    eyebrow: "&&",
    title: "&&は、両方trueのときだけtrue。",
    body: ["&&は「かつ」です。左と右の条件がどちらもtrueのときだけ、全体がtrueになります。", "条件を厳しくしたいときに使います。年齢も満たす、チケットも持っている。このように両方必要な場面です。"],
    checks: ["true && true だけtrue。", "片方でもfalseならfalse。", "条件を狭くする。"],
    code: "System.out.println(age >= 20 && hasTicket);"
  },
  "or-operator": {
    eyebrow: "||",
    title: "||は、どちらかtrueならtrue。",
    body: ["||は「または」です。左か右のどちらか一方でもtrueなら、全体がtrueになります。", "条件を広げたいときに使います。会員ならOK、クーポンがあってもOK、というように入口を増やします。"],
    checks: ["false || false だけfalse。", "片方でもtrueならtrue。", "条件を広くする。"],
    code: "System.out.println(isMember || coupon);"
  }
};

const classMethodTopicDeepDives = {
  "method-basic": {
    eyebrow: "method",
    title: "メソッドは、処理に名前を付ける。",
    body: ["メソッドは、何度も使う処理や意味を持つ処理をひとまとまりにしたものです。呼び出す側は greet(); のように名前を書くことで、その中の処理を実行します。", "大事なのは、メソッドを作る場所と呼ぶ場所を分けて見ることです。mainの中に呼び出し、mainの外に定義。この位置関係をまず押さえましょう。"],
    checks: ["呼び出しは 名前(); の形。", "定義は main の外に置く。", "処理の意味が名前に出る。"],
    code: "static void greet() {\n  System.out.println(\"Hello\");\n}\n\ngreet();"
  },
  "method-parameter": {
    eyebrow: "parameter",
    title: "引数は、メソッドへ渡す材料。",
    body: ["String name のように書くと、メソッドは外から文字列を受け取れます。呼び出す側の greet(\"Aoi\") と、受け取る側の String name を対応させて読みます。", "値そのものと変数名は違います。\"Aoi\" が渡され、メソッド内では name という名前で使える。この変換を落ち着いて追いましょう。"],
    checks: ["定義側は 型 + 名前。", "呼び出し側は実際の値。", "順番が対応する。"],
    code: "static void greet(String name) {\n  System.out.println(name);\n}"
  },
  "method-return": {
    eyebrow: "return",
    title: "戻り値は、外へ返す結果。",
    body: ["return a + b; は、計算結果を呼び出し元へ返します。返ってきた値は、変数に入れたり println に直接入れたりできます。", "戻り値の型にも注目です。static int add と書いたなら、returnする結果もintとして扱える値である必要があります。"],
    checks: ["returnで外へ返す。", "戻り値の型と結果を合わせる。", "呼び出し式は値として使える。"],
    code: "static int add(int a, int b) {\n  return a + b;\n}"
  },
  "method-void": {
    eyebrow: "void",
    title: "voidは、値を返さないという宣言。",
    body: ["voidメソッドは、表示する、更新する、処理を実行するなど、結果の値を外へ返さないときに使います。", "returnで値を返すメソッドと混ぜないこと。System.out.printlnをしているからといって、値を返しているわけではありません。"],
    checks: ["voidは戻り値なし。", "表示とreturnは別。", "呼び出しだけで処理が動く。"],
    code: "static void show(String text) {\n  System.out.println(text);\n}"
  },
  "method-static": {
    eyebrow: "static",
    title: "staticは、mainから直接呼ぶための印。",
    body: ["このサイトの初級問題では、mainも補助メソッドも同じクラスの中に置きます。そのとき補助メソッドにstaticを付けると、mainから直接呼べます。", "今は深追いしすぎなくて大丈夫です。まずは static void show、static int add のように、mainから呼ぶ補助メソッドに付いている印として見ましょう。"],
    checks: ["mainはstatic。", "同じクラス内の補助メソッドにもstatic。", "まずは呼び出せる形を覚える。"],
    code: "public static void main(String[] args) {\n  show();\n}\nstatic void show() { }"
  },
  "method-scope": {
    eyebrow: "scope",
    title: "変数は、宣言した場所の中で使う。",
    body: ["メソッドの中で作った変数は、基本的にそのメソッドの外から直接使えません。必要ならreturnで返すか、引数として渡します。", "どこで宣言された変数か。これを見落とすと、突然その名前が使えなくなったように見えます。コードを読むときは波かっこの範囲まで見ましょう。"],
    checks: ["変数は使える範囲がある。", "メソッドをまたぐならreturnや引数。", "波かっこを見て範囲を読む。"],
    code: "static int total(int a, int b) {\n  int sum = a + b;\n  return sum;\n}"
  },
  "method-overload": {
    eyebrow: "overload",
    title: "同じ名前でも、引数が違えば見分けられる。",
    body: ["Javaでは、同じ名前のメソッドを複数作れる場合があります。どれが呼ばれるかは、引数の数や型で決まります。", "add(3, 4) なら引数2つのadd。add(1, 2, 3) なら引数3つのadd。名前だけで判断せず、丸かっこの中まで見ましょう。"],
    checks: ["名前だけで決めない。", "引数の数を見る。", "型の違いも見る。"],
    code: "static int add(int a, int b) { return a + b; }\nstatic int add(int a, int b, int c) { return a + b + c; }"
  },
  "method-design": {
    eyebrow: "design",
    title: "メソッド分割は、コードに見出しを付ける。",
    body: ["計算する、判定する、表示する。この役割を分けると、コードを読む人は迷いにくくなります。", "短ければ何でも分ければよいわけではありません。処理に名前を付けたとき、意味がはっきりするならメソッド化の価値があります。"],
    checks: ["1つのメソッドに1つの役割。", "名前だけで目的が見える。", "計算と表示を分ける。"],
    code: "int result = total(100, 3);\nshow(result);"
  },
  "class-basic": {
    eyebrow: "class",
    title: "クラスは、Javaの大きな箱。",
    body: ["Javaでは、処理やデータをクラスの中に置きます。class Student のように書くと、Studentというまとまりを定義できます。", "クラスはただの飾りではありません。今後、データと処理をまとめる中心になります。まずは class の名前と波かっこの範囲を確実に見ましょう。"],
    checks: ["classの後ろが名前。", "中身は波かっこの中。", "Javaコードの基本単位。"],
    code: "class Student {\n  String name;\n  int score;\n}"
  },
  "class-field": {
    eyebrow: "field",
    title: "フィールドは、オブジェクトが持つ値。",
    body: ["String name や int score のようにクラスの中に置いた値をフィールドとして扱います。Studentなら名前や点数を持てる、という設計になります。", "フィールドは変数に似ていますが、オブジェクトに属しています。s.name のように、誰のnameなのかを左側で指定します。"],
    checks: ["クラスの中に置く値。", "型と名前を書く。", "誰の値かをドットの左で見る。"],
    code: "class Student {\n  String name;\n  int score;\n}"
  },
  "class-object": {
    eyebrow: "object",
    title: "newで、クラスから実体を作る。",
    body: ["class Student は設計図です。new Student() と書くことで、実際に値を入れられるStudentを作ります。", "同じクラスから作っても、オブジェクトごとに値は別です。a.name と b.name は別々に管理できます。"],
    checks: ["newで実体を作る。", "変数に入れて使う。", "複数作ると値は別々。"],
    code: "Student s = new Student();\ns.name = \"Aoi\";"
  },
  "class-dot": {
    eyebrow: "dot",
    title: "ドットは、中身へ進む記号。",
    body: ["student.score は、studentが持つscoreを指します。左側が対象、右側が中身の名前です。", "ドットの左を読み飛ばすと、誰の値なのか分からなくなります。複数のオブジェクトが出る問題ほど、左側を丁寧に見ましょう。"],
    checks: ["左側が対象。", "右側がフィールド名。", "読み書きどちらにも使う。"],
    code: "student.score = 90;\nSystem.out.println(student.score);"
  }
};

Object.assign(topicDeepDives, classMethodTopicDeepDives);

function fillAnswer(parts) {
  return parts.map((part) => typeof part === "string" ? part : part.answer).join("");
}

function makeClassMethodQuestion(question) {
  return { ...question, answer: question.answer || fillAnswer(question.parts) };
}

const methodOneQuestions = [
  makeClassMethodQuestion({ title: "あいさつメソッドを呼ぶ", concept: "method / call", prompt: "greetメソッドを呼び出してHelloを表示します。", output: "Hello", explanation: "voidメソッドは、名前と丸かっこで呼び出します。", parts: ["class Main {\n  public static void main(String[] args) {\n    ", { answer: "greet()", chars: 8 }, ";\n  }\n\n  static void greet() {\n    System.out.println(\"Hello\");\n  }\n}"] }),
  makeClassMethodQuestion({ title: "名前を受け取って表示する", concept: "parameter", prompt: "nameを受け取るgreetメソッドを作り、Aoiにあいさつします。", output: "Hello Aoi", explanation: "引数は外から渡される材料です。String nameとして受け取ります。", parts: ["class Main {\n  public static void main(String[] args) {\n    greet(\"Aoi\");\n  }\n\n  static void greet(", { answer: "String name", chars: 12 }, ") {\n    System.out.println(\"Hello \" + ", { answer: "name", chars: 5 }, ");\n  }\n}"] }),
  makeClassMethodQuestion({ title: "2つの数を足して返す", concept: "return", prompt: "addメソッドで3+4の結果を返して表示します。", output: "7", explanation: "戻り値があるメソッドは、returnで結果を返します。", parts: ["class Main {\n  public static void main(String[] args) {\n    int result = add(3, 4);\n    System.out.println(result);\n  }\n\n  static int add(int a, int b) {\n    ", { answer: "return a + b", accepts: ["return a + b", "return a+b"], chars: 13 }, ";\n  }\n}"] }),
  makeClassMethodQuestion({ title: "点数を2倍にする", concept: "return", prompt: "doubleScoreメソッドでscoreを2倍にして返します。", output: "160", explanation: "受け取った値を計算して、returnで返します。", parts: ["class Main {\n  public static void main(String[] args) {\n    System.out.println(doubleScore(80));\n  }\n\n  static int doubleScore(int score) {\n    return ", { answer: "score * 2", accepts: ["score * 2", "score*2"], chars: 10 }, ";\n  }\n}"] }),
  makeClassMethodQuestion({ title: "合格かどうかを返す", concept: "boolean return", prompt: "isPassメソッドでscoreが80以上かを返します。", output: "true", explanation: "booleanを返すメソッドでは、条件式をそのままreturnできます。", parts: ["class Main {\n  public static void main(String[] args) {\n    System.out.println(isPass(82));\n  }\n\n  static boolean isPass(int score) {\n    return ", { answer: "score >= 80", accepts: ["score >= 80", "score>=80"], chars: 12 }, ";\n  }\n}"] }),
  makeClassMethodQuestion({ title: "文字列を返す", concept: "String return", prompt: "labelメソッドでscoreに点を付けて返します。", output: "90点", explanation: "Stringを返すメソッドでは、returnの右側もStringになるようにします。", parts: ["class Main {\n  public static void main(String[] args) {\n    System.out.println(label(90));\n  }\n\n  static String label(int score) {\n    return ", { answer: "score + \"点\"", accepts: ["score + \"点\"", "score+\"点\""], chars: 12 }, ";\n  }\n}"] }),
  makeClassMethodQuestion({ title: "表示だけを担当する", concept: "void", prompt: "showメソッドで受け取った値を表示します。", output: "Java", explanation: "表示だけなら戻り値は不要なのでvoidにします。", parts: ["class Main {\n  public static void main(String[] args) {\n    show(\"Java\");\n  }\n\n  static ", { answer: "void", chars: 5 }, " show(String text) {\n    System.out.println(text);\n  }\n}"] }),
  makeClassMethodQuestion({ title: "計算結果を直接表示する", concept: "method value", prompt: "multiplyメソッドの戻り値をprintlnに直接入れます。", output: "12", explanation: "戻り値があるメソッド呼び出しは、値として扱えます。", parts: ["class Main {\n  public static void main(String[] args) {\n    System.out.println(", { answer: "multiply(3, 4)", accepts: ["multiply(3, 4)", "multiply(3,4)"], chars: 16 }, ");\n  }\n\n  static int multiply(int a, int b) {\n    return a * b;\n  }\n}"] }),
  makeClassMethodQuestion({ title: "引数を2つ使う", concept: "parameters", prompt: "fullNameメソッドで姓と名をつなげます。", output: "Aoi Sato", explanation: "引数が複数あるときは、定義側と呼び出し側の順番を合わせます。", parts: ["class Main {\n  public static void main(String[] args) {\n    System.out.println(fullName(\"Aoi\", \"Sato\"));\n  }\n\n  static String fullName(String first, String last) {\n    return ", { answer: "first + \" \" + last", accepts: ["first + \" \" + last", "first+\" \"+last"], chars: 20 }, ";\n  }\n}"] }),
  makeClassMethodQuestion({ title: "結果を変数に入れる", concept: "return value", prompt: "squareの戻り値をnumに入れて表示します。", output: "25", explanation: "returnされた値は、普通の値と同じように変数へ代入できます。", parts: ["class Main {\n  public static void main(String[] args) {\n    int num = ", { answer: "square(5)", chars: 10 }, ";\n    System.out.println(num);\n  }\n\n  static int square(int n) {\n    return n * n;\n  }\n}"] })
];

const methodTwoQuestions = [
  makeClassMethodQuestion({ title: "staticメソッドを呼ぶ", concept: "static", prompt: "mainから同じクラス内のshowTitleを呼びます。", output: "Menu", explanation: "mainから直接呼ぶ補助メソッドにはstaticを付けます。", parts: ["class Main {\n  public static void main(String[] args) {\n    showTitle();\n  }\n\n  ", { answer: "static", chars: 7 }, " void showTitle() {\n    System.out.println(\"Menu\");\n  }\n}"] }),
  makeClassMethodQuestion({ title: "メソッド内の変数を返す", concept: "scope", prompt: "totalメソッド内で作ったsumをreturnします。", output: "15", explanation: "メソッド内の変数は外で直接使わず、returnで返します。", parts: ["class Main {\n  public static void main(String[] args) {\n    System.out.println(total(10, 5));\n  }\n\n  static int total(int a, int b) {\n    int sum = a + b;\n    ", { answer: "return sum", chars: 11 }, ";\n  }\n}"] }),
  makeClassMethodQuestion({ title: "判定メソッドをifで使う", concept: "boolean method", prompt: "isEvenの結果をif文で使います。", output: "even", explanation: "booleanを返すメソッドは、ifの条件式として使えます。", parts: ["class Main {\n  public static void main(String[] args) {\n    if (", { answer: "isEven(4)", chars: 10 }, ") {\n      System.out.println(\"even\");\n    }\n  }\n\n  static boolean isEven(int n) {\n    return n % 2 == 0;\n  }\n}"] }),
  makeClassMethodQuestion({ title: "表示用メソッドを分ける", concept: "design", prompt: "計算と表示を分け、showに結果を渡します。", output: "8", explanation: "役割を分けると、読む順番が明確になります。", parts: ["class Main {\n  public static void main(String[] args) {\n    int result = add(3, 5);\n    ", { answer: "show(result)", chars: 13 }, ";\n  }\n\n  static int add(int a, int b) { return a + b; }\n  static void show(int value) { System.out.println(value); }\n}"] }),
  makeClassMethodQuestion({ title: "オーバーロードを読む", concept: "overload", prompt: "引数が2つのaddが呼ばれます。", output: "7", explanation: "同じ名前でも、引数の数で呼ばれるメソッドが決まります。", parts: ["class Main {\n  public static void main(String[] args) {\n    System.out.println(add(3, 4));\n  }\n\n  static int add(int a, int b) { return ", { answer: "a + b", accepts: ["a + b", "a+b"], chars: 7 }, "; }\n  static int add(int a, int b, int c) { return a + b + c; }\n}"] }),
  makeClassMethodQuestion({ title: "早めにreturnする", concept: "return / if", prompt: "0ならzeroを返し、それ以外ならnumを返します。", output: "zero", explanation: "returnが実行されると、そのメソッドはそこで終了します。", parts: ["class Main {\n  public static void main(String[] args) {\n    System.out.println(label(0));\n  }\n\n  static String label(int n) {\n    if (n == 0) {\n      ", { answer: "return \"zero\"", chars: 15 }, ";\n    }\n    return \"num\";\n  }\n}"] }),
  makeClassMethodQuestion({ title: "配列をメソッドへ渡す", concept: "array parameter", prompt: "sumメソッドに配列を渡して合計を返します。", output: "6", explanation: "配列も引数として渡せます。メソッド内でループして処理します。", parts: ["class Main {\n  public static void main(String[] args) {\n    int[] nums = {1, 2, 3};\n    System.out.println(sum(nums));\n  }\n\n  static int sum(int[] nums) {\n    int total = 0;\n    for (int i = 0; i < nums.length; i++) {\n      total += ", { answer: "nums[i]", chars: 8 }, ";\n    }\n    return total;\n  }\n}"] }),
  makeClassMethodQuestion({ title: "文字を整形して返す", concept: "String method", prompt: "formatメソッドで名前にさんを付けます。", output: "Renさん", explanation: "表示用の文字列を作る処理もメソッドにできます。", parts: ["class Main {\n  public static void main(String[] args) {\n    System.out.println(format(\"Ren\"));\n  }\n\n  static String format(String name) {\n    return ", { answer: "name + \"さん\"", accepts: ["name + \"さん\"", "name+\"さん\""], chars: 14 }, ";\n  }\n}"] }),
  makeClassMethodQuestion({ title: "税込価格を返す", concept: "calculation", prompt: "taxInメソッドでpriceに10%を足します。", output: "1100", explanation: "計算の意味がある処理は、名前を付けると読みやすくなります。", parts: ["class Main {\n  public static void main(String[] args) {\n    System.out.println(taxIn(1000));\n  }\n\n  static int taxIn(int price) {\n    return ", { answer: "price + price / 10", accepts: ["price + price / 10", "price+price/10"], chars: 19 }, ";\n  }\n}"] }),
  makeClassMethodQuestion({ title: "メソッドを組み合わせる", concept: "compose", prompt: "doubleNumの結果をlabelに渡して表示します。", output: "value: 10", explanation: "メソッドの戻り値は、別のメソッドの引数にもできます。", parts: ["class Main {\n  public static void main(String[] args) {\n    System.out.println(label(", { answer: "doubleNum(5)", chars: 13 }, "));\n  }\n\n  static int doubleNum(int n) { return n * 2; }\n  static String label(int n) { return \"value: \" + n; }\n}"] })
];

const classQuestions = [
  makeClassMethodQuestion({ title: "Studentクラスを作る", concept: "class / field", prompt: "Studentクラスにnameフィールドを作ります。", output: "Aoi", explanation: "クラスの中にフィールドを書くと、オブジェクトがその値を持てます。", parts: ["class Main {\n  public static void main(String[] args) {\n    Student s = new Student();\n    s.name = \"Aoi\";\n    System.out.println(s.name);\n  }\n}\n\nclass Student {\n  ", { answer: "String name", chars: 12 }, ";\n}"] }),
  makeClassMethodQuestion({ title: "intフィールドを持たせる", concept: "field", prompt: "Studentにscoreフィールドを作って表示します。", output: "90", explanation: "整数を持たせたいときはint型のフィールドを用意します。", parts: ["class Main {\n  public static void main(String[] args) {\n    Student s = new Student();\n    s.score = 90;\n    System.out.println(s.score);\n  }\n}\n\nclass Student {\n  ", { answer: "int score", chars: 10 }, ";\n}"] }),
  makeClassMethodQuestion({ title: "newで実体を作る", concept: "object", prompt: "Studentクラスからオブジェクトを作ります。", output: "Ren", explanation: "new Student()でStudentの実体を作り、変数sに入れます。", parts: ["class Main {\n  public static void main(String[] args) {\n    Student s = ", { answer: "new Student()", chars: 14 }, ";\n    s.name = \"Ren\";\n    System.out.println(s.name);\n  }\n}\n\nclass Student { String name; }"] }),
  makeClassMethodQuestion({ title: "ドットで値を入れる", concept: "dot", prompt: "book.titleにJavaを入れて表示します。", output: "Java", explanation: "オブジェクトのフィールドには、ドットを使ってアクセスします。", parts: ["class Main {\n  public static void main(String[] args) {\n    Book book = new Book();\n    ", { answer: "book.title", chars: 11 }, " = \"Java\";\n    System.out.println(book.title);\n  }\n}\n\nclass Book { String title; }"] }),
  makeClassMethodQuestion({ title: "2つのフィールドを表示する", concept: "fields", prompt: "nameとscoreをつなげて表示します。", output: "Aoi:90", explanation: "1つのオブジェクトが複数のフィールドを持てます。", parts: ["class Main {\n  public static void main(String[] args) {\n    Student s = new Student();\n    s.name = \"Aoi\";\n    s.score = 90;\n    System.out.println(", { answer: "s.name + \":\" + s.score", accepts: ["s.name + \":\" + s.score", "s.name+\":\"+s.score"], chars: 24 }, ");\n  }\n}\n\nclass Student { String name; int score; }"] }),
  makeClassMethodQuestion({ title: "別々のオブジェクトを作る", concept: "objects", prompt: "2人分のStudentを作り、別々のnameを表示します。", output: "Aoi\nRen", explanation: "同じクラスから作っても、オブジェクトごとに別の値を持てます。", parts: ["class Main {\n  public static void main(String[] args) {\n    Student a = new Student();\n    Student b = new Student();\n    a.name = \"Aoi\";\n    b.name = \"Ren\";\n    System.out.println(a.name);\n    System.out.println(", { answer: "b.name", chars: 7 }, ");\n  }\n}\n\nclass Student { String name; }"] }),
  makeClassMethodQuestion({ title: "クラス名を書く", concept: "declaration", prompt: "Itemクラスを宣言します。", output: "100", explanation: "classの後ろにクラス名を書き、波かっこの中にフィールドを置きます。", parts: ["class Main {\n  public static void main(String[] args) {\n    Item item = new Item();\n    item.price = 100;\n    System.out.println(item.price);\n  }\n}\n\nclass ", { answer: "Item", chars: 5 }, " { int price; }"] }),
  makeClassMethodQuestion({ title: "フィールドの値を更新する", concept: "update", prompt: "priceをあとから150に更新します。", output: "150", explanation: "フィールドも変数のようにあとから値を入れ替えられます。", parts: ["class Main {\n  public static void main(String[] args) {\n    Item item = new Item();\n    item.price = 100;\n    ", { answer: "item.price", chars: 11 }, " = 150;\n    System.out.println(item.price);\n  }\n}\n\nclass Item { int price; }"] }),
  makeClassMethodQuestion({ title: "オブジェクトをメソッドへ渡す", concept: "object parameter", prompt: "showメソッドにStudentを渡してnameを表示します。", output: "Mio", explanation: "オブジェクトも引数として渡せます。メソッド内でフィールドを読めます。", parts: ["class Main {\n  public static void main(String[] args) {\n    Student s = new Student();\n    s.name = \"Mio\";\n    show(s);\n  }\n\n  static void show(Student s) {\n    System.out.println(", { answer: "s.name", chars: 7 }, ");\n  }\n}\n\nclass Student { String name; }"] }),
  makeClassMethodQuestion({ title: "フィールドで計算する", concept: "calculation", prompt: "item.priceとitem.countを使って合計を表示します。", output: "600", explanation: "複数のフィールドを使って計算できます。", parts: ["class Main {\n  public static void main(String[] args) {\n    Item item = new Item();\n    item.price = 200;\n    item.count = 3;\n    System.out.println(", { answer: "item.price * item.count", accepts: ["item.price * item.count", "item.price*item.count"], chars: 25 }, ");\n  }\n}\n\nclass Item { int price; int count; }"] })
];

[methodOneQuestions, methodTwoQuestions].forEach((set) => {
  set.forEach((question) => {
    Object.assign(question, buildPrerequisiteSupport(question, "methods", "beginner"));
    question.hints = buildTraceaHints(question, question.parts);
  });
});

classQuestions.forEach((question) => {
  Object.assign(question, buildPrerequisiteSupport(question, "classes", "beginner"));
  question.hints = buildTraceaHints(question, question.parts);
});

const lessonMeta = [
  { id: "loops", total: questions.length * 2 },
  { id: "arrays", total: arrayQuestions.length * 2 },
  { id: "conditionals", total: conditionalQuestions.length },
  { id: "booleans", total: booleanQuestions.length },
  { id: "methods-1", total: methodOneQuestions.length },
  { id: "methods-2", total: methodTwoQuestions.length },
  { id: "classes", total: classQuestions.length }
];

const progressPrefix = "java-output-practice-progress";
const loopUnlockKey = "java-output-practice-loop-unlocked";
const authScopeKey = "java-output-practice-auth-scope";
let progressScope = "local";

try {
  progressScope = localStorage.getItem(authScopeKey) || "local";
} catch {}

function progressKey(lessonId) {
  return `${progressPrefix}:${lessonId}`;
}

function scopedLoopUnlockKey() {
  return `${loopUnlockKey}:${progressScope}`;
}

function readCompletedQuestions(lessonId) {
  try {
    const saved = JSON.parse(localStorage.getItem(progressKey(lessonId)) || "[]");
    return new Set(Array.isArray(saved) ? saved : []);
  } catch {
    return new Set();
  }
}

function writeCompletedQuestions(lessonId, completed) {
  try {
    localStorage.setItem(progressKey(lessonId), JSON.stringify([...completed]));
  } catch {
    // Progress is helpful, but answering questions should still work if storage is unavailable.
  }
}

function questionProgressKey(questionIndex, level = "beginner") {
  return `${level}:${questionIndex}`;
}

function isQuestionComplete(lessonId, questionIndex, level = "beginner") {
  const completed = readCompletedQuestions(lessonId);
  return completed.has(questionProgressKey(questionIndex, level)) || (level === "beginner" && completed.has(questionIndex));
}

function updateQuestionCompletion(card, completed) {
  card.classList.toggle("completed", completed);
  const mark = card.querySelector(".progress-mark");
  if (mark) {
    mark.textContent = completed ? "完了" : "未完了";
  }
}

function markQuestionComplete(card) {
  const lessonId = card.dataset.lesson;
  const questionIndex = Number(card.dataset.questionIndex);
  const level = card.dataset.level || "beginner";
  if (!lessonId || Number.isNaN(questionIndex)) return;

  const completed = readCompletedQuestions(lessonId);
  completed.add(questionProgressKey(questionIndex, level));
  writeCompletedQuestions(lessonId, completed);
  updateQuestionCompletion(card, true);
  updateLessonProgress();
}

function getCompletedCount(lesson) {
  const completed = readCompletedQuestions(lesson.id);
  const normalized = new Set();

  completed.forEach((item) => {
    if (typeof item === "number") {
      normalized.add(questionProgressKey(item, "beginner"));
      return;
    }
    normalized.add(String(item));
  });

  return Math.min(normalized.size, lesson.total);
}

function getTotalCompletedExercises() {
  return lessonMeta.reduce((total, lesson) => total + getCompletedCount(lesson), 0);
}

function getCompletedLessonCount() {
  return lessonMeta.filter((lesson) => getCompletedCount(lesson) >= lesson.total).length;
}

function updateUserSummary() {
  const panel = document.querySelector(".user-summary");
  if (!panel) return;

  const name = panel.querySelector("[data-user-name]");
  const avatar = panel.querySelector(".user-avatar");
  const input = panel.querySelector("[data-profile-name-input]");
  const exerciseCount = panel.querySelector("[data-total-cleared]");
  const lessonCount = panel.querySelector("[data-lessons-cleared]");

  if (name) name.textContent = currentDisplayName;
  if (avatar) avatar.textContent = currentUserAvatar || getAvatarLetter(currentDisplayName);
  if (input) input.value = currentDisplayName;
  if (exerciseCount) exerciseCount.textContent = String(getTotalCompletedExercises());
  if (lessonCount) lessonCount.textContent = `${getCompletedLessonCount()}/${lessonMeta.length}`;

  panel.querySelectorAll("[data-avatar-choice]").forEach((button) => {
    const active = button.dataset.avatarChoice === currentUserAvatar;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
}

function ensureUserSummary() {
  if (!headerInner || document.querySelector(".user-summary")) return;

  const panel = document.createElement("section");
  panel.className = "user-summary";
  panel.setAttribute("aria-label", "ユーザー情報");
  panel.innerHTML = `
    <div class="user-summary-head">
      <span class="user-avatar" aria-hidden="true">U</span>
      <div>
        <p class="user-label">User</p>
        <p class="user-name" data-user-name>User</p>
      </div>
      <button class="user-edit-button" type="button" data-action="profile-toggle" aria-expanded="false">編集</button>
    </div>
    <div class="user-metrics">
      <div>
        <span data-total-cleared>0</span>
        <small>総演習クリア数</small>
      </div>
      <div>
        <span data-lessons-cleared>0/${lessonMeta.length}</span>
        <small>修了レッスン数</small>
      </div>
    </div>
    <div class="user-profile-editor" aria-label="ユーザープロフィール編集">
      <label>
        <span>ユーザーネーム</span>
        <input type="text" data-profile-name-input maxlength="18" autocomplete="off">
      </label>
      <div class="avatar-choice-group" role="group" aria-label="アイコン選択">
        ${userAvatarOptions.map((option) => `
          <button class="avatar-choice" type="button" data-action="avatar-choice" data-avatar-choice="${option.value}" aria-label="${option.label}" aria-pressed="false">${option.value}</button>
        `).join("")}
      </div>
      <div class="profile-actions">
        <button class="action-button primary" type="button" data-action="profile-save">保存</button>
        <button class="action-button secondary" type="button" data-action="profile-cancel">閉じる</button>
      </div>
      <p class="profile-message" data-profile-message aria-live="polite"></p>
    </div>
  `;

  const actions = headerInner.querySelector(".header-actions");
  headerInner.insertBefore(panel, actions);
  updateUserSummary();
}

function toggleProfileEditor(forceOpen) {
  const panel = document.querySelector(".user-summary");
  if (!panel) return;

  const open = typeof forceOpen === "boolean" ? forceOpen : !panel.classList.contains("editing");
  panel.classList.toggle("editing", open);
  panel.querySelector("[data-action='profile-toggle']")?.setAttribute("aria-expanded", String(open));
  if (open) {
    panel.querySelector("[data-profile-name-input]")?.focus();
  }
}

function setProfileMessage(message, tone = "") {
  const messageBox = document.querySelector("[data-profile-message]");
  if (!messageBox) return;
  messageBox.className = `profile-message ${tone}`;
  messageBox.textContent = message;
}

function readSavedUserProfile() {
  try {
    currentUserName = localStorage.getItem(profileNameKey) || currentUserName || "User";
    currentDisplayName = localStorage.getItem(profileDisplayNameKey) || currentUserName;
    currentUserAvatar = localStorage.getItem(profileAvatarKey) || getAvatarLetter(currentDisplayName);
  } catch {}
}

function saveUserProfile() {
  const input = document.querySelector("[data-profile-name-input]");
  const nextName = input?.value.trim().replace(/\s+/g, " ").slice(0, 18);

  if (!nextName) {
    setProfileMessage("1文字以上で入力してください。", "no");
    return;
  }

  currentUserName = nextName;
  currentDisplayName = nextName;
  currentUserAvatar = currentUserAvatar || getAvatarLetter(nextName);

  try {
    localStorage.setItem(profileNameKey, currentUserName);
    localStorage.setItem(profileDisplayNameKey, currentDisplayName);
    localStorage.setItem(profileAvatarKey, currentUserAvatar);
  } catch {}

  updateUserSummary();
  renderTraceRoom();
  window.dispatchEvent(new CustomEvent("java-practice-profile-updated", {
    detail: {
      name: currentUserName,
      displayName: currentDisplayName,
      avatar: currentUserAvatar
    }
  }));
  setProfileMessage("プロフィールを更新しました。", "ok");
  window.setTimeout(() => toggleProfileEditor(false), 520);
}

function updateLessonProgress() {
  lessonMeta.forEach((lesson) => {
    const completedCount = getCompletedCount(lesson);
    const isComplete = completedCount >= lesson.total;
    document.querySelectorAll(`[data-lesson-link="${lesson.id}"]`).forEach((link) => {
      link.classList.toggle("lesson-complete", isComplete);
      const check = link.querySelector(".lesson-check");
      if (check) {
        check.textContent = isComplete ? "✓ 完了" : `${completedCount}/${lesson.total}`;
      }
    });
  });
  updateUserSummary();
}

function getCurrentLearningStatus() {
  const currentLesson = document.querySelector(".lesson-current")?.textContent?.trim();
  if (currentLesson && currentLesson !== "Trace Room") {
    return `${currentLesson}を学習中`;
  }
  if (traceRoomList) return "Trace Roomを閲覧中";
  return "Java学習中";
}

function getAvatarLetter(name) {
  return (name || "U").trim().charAt(0).toUpperCase() || "U";
}

function formatActiveTime(date) {
  if (!date) return "取得できません";

  try {
    return new Intl.DateTimeFormat("ja-JP", {
      hour: "2-digit",
      minute: "2-digit"
    }).format(date);
  } catch {
    return "たった今";
  }
}

function notifyLearningStatus() {
  window.dispatchEvent(new CustomEvent("java-practice-learning-status", {
    detail: { status: getCurrentLearningStatus() }
  }));
}

function normalizeTraceRoomUser(user) {
  const displayName = user.displayName || "Learner";
  const activeDate = user.lastActive ? new Date(user.lastActive) : null;

  return {
    userName: user.userName || `@${displayName.replace(/\s+/g, "") || "Learner"}`,
    displayName,
    avatar: user.avatar || getAvatarLetter(displayName),
    role: user.role || "Learner",
    status: user.status || "Java学習中",
    lastActive: user.lastActive === "常時オンライン" ? user.lastActive : formatActiveTime(activeDate),
    online: Boolean(user.online),
    mentor: Boolean(user.mentor),
    badge: user.badge
  };
}

function getTraceRoomUsers() {
  if (remoteTraceRoomUsers.length > 0) {
    return remoteTraceRoomUsers.map(normalizeTraceRoomUser);
  }

  const users = [];

  try {
    if (localStorage.getItem("java-output-practice-auth") === "signed-in") {
      const displayName = localStorage.getItem(profileDisplayNameKey) || currentDisplayName || "Learner";
      const avatar = localStorage.getItem(profileAvatarKey) || currentUserAvatar || getAvatarLetter(displayName);
      users.push({
        userName: `@${displayName.replace(/\s+/g, "") || "Learner"}`,
        displayName,
        avatar,
        role: "Learner",
        status: getCurrentLearningStatus(),
        lastActive: formatActiveTime(new Date()),
        online: true
      });
    }
  } catch {}

  return users;
}

function getTraceRoomMembers() {
  const tracea = {
    userName: "@Tracea",
    displayName: "Tracea",
    avatar: "T",
    role: "Teacher",
    badge: "Java Guide",
    status: "学習者をサポート中",
    lastActive: "常時オンライン",
    online: true,
    mentor: true
  };

  return [tracea, ...getTraceRoomUsers()];
}

function createTraceRoomCard(user) {
  const card = document.createElement("article");
  card.className = `trace-user-card${user.mentor ? " mentor" : ""}`;

  const top = document.createElement("div");
  top.className = "trace-user-top";

  const avatar = document.createElement("div");
  avatar.className = "trace-user-avatar";
  avatar.textContent = user.avatar;

  const identity = document.createElement("div");
  identity.className = "trace-user-identity";

  const nameLine = document.createElement("div");
  nameLine.className = "trace-user-name-line";

  const displayName = document.createElement("h3");
  displayName.textContent = user.displayName;
  nameLine.appendChild(displayName);

  if (user.badge) {
    const badge = document.createElement("span");
    badge.className = "trace-user-badge";
    badge.textContent = user.badge;
    nameLine.appendChild(badge);
  }

  const userName = document.createElement("p");
  userName.textContent = user.userName;
  identity.append(nameLine, userName);

  const online = document.createElement("span");
  online.className = `trace-online-dot${user.online ? " online" : ""}`;
  online.setAttribute("aria-label", user.online ? "オンライン" : "オフライン");

  top.append(avatar, identity, online);

  const details = document.createElement("dl");
  details.className = "trace-user-details";
  [
    ["役割", user.role],
    ["ステータス", user.status],
    ["最終アクティブ", user.lastActive]
  ].forEach(([label, value]) => {
    const row = document.createElement("div");
    const term = document.createElement("dt");
    const description = document.createElement("dd");
    term.textContent = label;
    description.textContent = value;
    row.append(term, description);
    details.appendChild(row);
  });

  card.append(top, details);
  return card;
}

function renderTraceRoom() {
  if (!traceRoomList) return;

  const members = getTraceRoomMembers();
  traceRoomList.textContent = "";

  members.forEach((member) => {
    traceRoomList.appendChild(createTraceRoomCard(member));
  });

  if (members.length <= 1) {
    const empty = document.createElement("p");
    empty.className = "trace-room-empty";
    empty.textContent = "現在表示できるユーザーがいません。";
    traceRoomList.appendChild(empty);
  }
}

function hasLoopUnlock() {
  try {
    return localStorage.getItem(scopedLoopUnlockKey()) === "true" || localStorage.getItem(loopUnlockKey) === "true";
  } catch {
    return false;
  }
}

function saveLoopUnlock() {
  try {
    localStorage.setItem(scopedLoopUnlockKey(), "true");
  } catch {}
}

function applyLoopUnlock({ scroll = false } = {}) {
  if (!questionsSection) return;

  questionsSection.classList.remove("locked");

  if (unlockInput && unlockInput.value.trim() === "") {
    unlockInput.value = 'System.out.println("Hello");';
  }

  if (unlockFeedback) {
    unlockFeedback.className = "unlock-feedback ok";
    unlockFeedback.textContent = "このアカウントでは問題が開かれた状態です。";
  }

  if (scroll) {
    questionsSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function normalize(value) {
  return value.replace(/\s+/g, "");
}

function normalizeCode(value) {
  return value
    .replace(/[“”]/g, "\"")
    .replace(/[；]/g, ";")
    .replace(/\s+/g, "");
}

function startTypeLogo() {
  const text = "JAVA OUTPUT PRACTICE";
  let index = 0;

  const tick = () => {
    typeLogo.textContent = text.slice(0, index);
    index += 1;

    if (index <= text.length) {
      window.setTimeout(tick, 58);
      return;
    }

    window.setTimeout(() => {
      typeLogo.classList.add("done");
    }, 900);
  };

  window.setTimeout(tick, 260);
}

function toggleLessonPanel(forceOpen) {
  if (!lessonPanel) return;

  const shouldOpen = typeof forceOpen === "boolean" ? forceOpen : !lessonPanel.classList.contains("visible");
  lessonPanel.classList.toggle("visible", shouldOpen);
  lessonToggles.forEach((button) => {
    button.setAttribute("aria-expanded", String(shouldOpen));
  });
}

function createPreparingLessonGroup({ id, title }) {
  const section = document.createElement("section");
  section.className = "lesson-group";
  section.dataset.lessonGroup = id;
  section.innerHTML = `
    <button class="lesson-group-toggle" type="button" aria-expanded="false">
      <span>${title}</span>
      <small>準備中</small>
    </button>
    <div class="lesson-links">
      <a href="#" class="disabled" aria-disabled="true"><span>01</span><b>準備中</b><small>近日追加</small></a>
    </div>
  `;
  return section;
}

function ensureLessonSeriesGroups() {
  document.querySelectorAll(".lesson-groups").forEach((groups) => {
    if (!groups.querySelector('[data-lesson-group="basic-syntax"]')) {
      groups.prepend(createPreparingLessonGroup({
        id: "basic-syntax",
        title: "Java 基礎文法編"
      }));
    }

    if (!groups.querySelector('[data-lesson-group="oop-advanced"]')) {
      groups.appendChild(createPreparingLessonGroup({
        id: "oop-advanced",
        title: "Java オブジェクト指向応用編"
      }));
    }
  });
}

function textNode(value) {
  return document.createTextNode(value);
}

function createTraceaMark(hint, index) {
  const mark = document.createElement("span");
  mark.className = `tracea-mark tracea-${hint.styleType}`;
  mark.dataset.traceaStep = String(index + 1);
  mark.dataset.traceaMessage = hint.message;
  mark.dataset.traceaTarget = hint.targetText;
  mark.textContent = hint.targetText;

  const pin = document.createElement("span");
  pin.className = "tracea-pin";
  pin.textContent = String(index + 1);
  mark.appendChild(pin);

  return mark;
}

function appendTraceableText(parent, value, hints, usedHints) {
  let rest = value;

  while (rest.length > 0) {
    const found = hints
      .map((hint, index) => ({ hint, index, position: usedHints.has(index) ? -1 : rest.indexOf(hint.targetText) }))
      .filter((entry) => entry.position >= 0)
      .sort((a, b) => a.position - b.position || a.index - b.index)[0];

    if (!found) {
      parent.appendChild(textNode(rest));
      return;
    }

    if (found.position > 0) {
      parent.appendChild(textNode(rest.slice(0, found.position)));
    }

    parent.appendChild(createTraceaMark(found.hint, found.index));
    usedHints.add(found.index);
    rest = rest.slice(found.position + found.hint.targetText.length);
  }
}

function renderTraceableParagraph(text, hints) {
  const paragraph = document.createElement("p");
  const usedHints = new Set();
  appendTraceableText(paragraph, text, hints, usedHints);
  return paragraph;
}

function statusClass(status) {
  if (status === "理解済み") return "understood";
  if (status === "復習推奨") return "review";
  return "caution";
}

function renderPrerequisitePanel(problem) {
  const panel = document.createElement("section");
  panel.className = "prerequisite-panel";
  panel.setAttribute("aria-label", "この問題に必要な前提知識");

  const head = document.createElement("div");
  head.className = "prerequisite-head";

  const title = document.createElement("h4");
  title.textContent = "この問題に必要な前提知識";

  const lead = document.createElement("p");
  lead.textContent = "タグを押すと、用語や記号の短い説明を確認できます。";
  head.append(title, lead);

  const tags = document.createElement("div");
  tags.className = "prerequisite-tags";

  (problem.prerequisites || []).forEach((item) => {
    const button = document.createElement("button");
    button.className = `prerequisite-tag ${statusClass(item.status)}`;
    button.type = "button";
    button.dataset.action = "prerequisite";
    button.setAttribute("aria-expanded", "false");

    const label = document.createElement("span");
    label.className = "prerequisite-label";
    label.textContent = item.label;

    const status = document.createElement("span");
    status.className = "prerequisite-status";
    status.textContent = item.status;

    const description = document.createElement("span");
    description.className = "prerequisite-description";
    description.textContent = item.description;

    button.append(label, status, description);
    tags.appendChild(button);
  });

  const note = document.createElement("p");
  note.className = "prerequisite-note";
  note.textContent = problem.traceaNote || "Tracea: まずは必要な知識を確認して、問題文を落ち着いて読みましょう。";

  const pitfalls = document.createElement("details");
  pitfalls.className = "pitfall-box";

  const summary = document.createElement("summary");
  summary.textContent = "詰まりやすいポイント";
  pitfalls.appendChild(summary);

  const list = document.createElement("ul");
  (problem.commonPitfalls || []).forEach((pitfall) => {
    const item = document.createElement("li");
    item.textContent = pitfall;
    list.appendChild(item);
  });
  pitfalls.appendChild(list);

  panel.append(head, tags, note, pitfalls);
  return panel;
}

function togglePrerequisite(button) {
  const panel = button.closest(".prerequisite-panel");
  const active = !button.classList.contains("active");

  panel?.querySelectorAll(".prerequisite-tag.active").forEach((tag) => {
    if (tag === button) return;
    tag.classList.remove("active");
    tag.setAttribute("aria-expanded", "false");
  });

  button.classList.toggle("active", active);
  button.setAttribute("aria-expanded", String(active));
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

function renderCode(parts, questionIndex, hints = []) {
  const code = document.createElement("pre");
  code.className = "code-box";
  let blankIndex = 0;
  const usedHints = new Set();

  parts.forEach((part) => {
    if (typeof part === "string") {
      appendTraceableText(code, part, hints, usedHints);
      return;
    }

    code.appendChild(createInput(part, questionIndex, blankIndex));
    blankIndex += 1;
  });

  return code;
}

function checkUnlock() {
  const value = normalizeCode(unlockInput.value);
  const correct = value === 'System.out.println("Hello");';

  if (correct) {
    saveLoopUnlock();
    applyLoopUnlock({ scroll: true });
    return;
  }

  unlockFeedback.className = "unlock-feedback no";
  unlockFeedback.textContent = 'まだ違います。System.out.println("Hello"); の形で、最後に ; を付けます。';
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
    markQuestionComplete(card);
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

function getTraceaTotal(card) {
  const steps = [...card.querySelectorAll(".tracea-mark")].map((mark) => Number(mark.dataset.traceaStep));
  return steps.length > 0 ? Math.max(...steps) : 0;
}

function updateTraceaState(card) {
  const step = Number(card.dataset.traceaStep || 0);
  const total = getTraceaTotal(card);
  const askButton = card.querySelector('button[data-action="tracea"]');
  const resetButton = card.querySelector('button[data-action="tracea-reset"]');
  const status = card.querySelector(".tracea-status");
  const notes = card.querySelector(".tracea-notes");

  card.querySelectorAll(".tracea-mark").forEach((mark) => {
    mark.classList.toggle("is-visible", Number(mark.dataset.traceaStep) <= step);
  });

  if (askButton) {
    askButton.textContent = step >= total && total > 0 ? "Traceaはここまで" : `Traceaに聞く ${Math.min(step + 1, total || 1)}/${total || 1}`;
    askButton.disabled = total > 0 && step >= total;
    askButton.setAttribute("aria-expanded", String(step > 0));
  }

  if (resetButton) {
    resetButton.disabled = step === 0;
  }

  if (status) {
    status.classList.toggle("thinking", step > 0 && step < total);
    if (step === 0) {
      status.textContent = "Traceaは、答えではなく見る場所を示します。";
    } else if (step >= total) {
      status.textContent = "Tracea: ここまで見れば、自力でかなり近づけます。";
    } else {
      status.textContent = "Tracea: もう少しだけ、視線を進めてみましょう。";
    }
  }

  if (notes) {
    notes.textContent = "";
    [...card.querySelectorAll(".tracea-mark")]
      .filter((mark) => Number(mark.dataset.traceaStep) <= step)
      .sort((a, b) => Number(a.dataset.traceaStep) - Number(b.dataset.traceaStep))
      .forEach((mark) => {
        const item = document.createElement("li");
        const number = document.createElement("span");
        const message = document.createElement("p");
        number.textContent = mark.dataset.traceaStep;
        message.textContent = mark.dataset.traceaMessage;
        item.append(number, message);
        notes.appendChild(item);
      });
  }
}

function advanceTracea(card) {
  const total = getTraceaTotal(card);
  if (total === 0) return;

  const current = Number(card.dataset.traceaStep || 0);
  card.dataset.traceaStep = String(Math.min(current + 1, total));
  updateTraceaState(card);
}

function resetTracea(card) {
  card.dataset.traceaStep = "0";
  updateTraceaState(card);
}

function resetQuestion(card) {
  card.querySelectorAll(".code-input").forEach((input) => {
    input.value = "";
  });
  const feedback = card.querySelector(".feedback");
  feedback.className = "feedback";
  feedback.textContent = "";
  resetTracea(card);
}

function renderQuestions() {
  if (!list) return;

  list.textContent = "";

  questions.forEach((question, index) => {
    const level = question.levels[currentLevel];
    const view = { ...question, ...level };
    const card = document.createElement("article");
    const completed = isQuestionComplete("loops", index, currentLevel);
    card.className = `question-card${completed ? " completed" : ""}`;
    card.dataset.lesson = "loops";
    card.dataset.level = currentLevel;
    card.dataset.questionIndex = String(index);

    card.innerHTML = `
      <div class="question-top">
        <div class="question-number">Q${index + 1}</div>
        <div class="question-copy">
          <div class="question-title-line">
            <h3>${view.title}</h3>
            <span class="progress-mark">${completed ? "完了" : "未完了"}</span>
          </div>
          <div class="prerequisite-slot"></div>
          <div class="tracea-prompt"></div>
        </div>
      </div>
      <div class="question-body">
        <div class="code-panel">
          <div class="panel-title">
            <span>穴埋めコード</span>
            <span class="concept">${view.concept} / ${currentLevel === "beginner" ? "初級" : "中級"}</span>
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
            <button class="action-button secondary tracea-ask" type="button" data-action="tracea" aria-expanded="false">Traceaに聞く</button>
            <button class="action-button secondary" type="button" data-action="tracea-reset" disabled>ヒントをリセット</button>
            <button class="action-button secondary" type="button" data-action="answer" aria-expanded="false">解答を表示</button>
            <button class="action-button secondary" type="button" data-action="reset">リセット</button>
          </div>
          <p class="feedback" aria-live="polite"></p>
          <div class="tracea-panel">
            <h4>Tracea</h4>
            <p class="tracea-status" aria-live="polite">Traceaは、答えではなく見る場所を示します。</p>
            <ol class="tracea-notes" aria-live="polite"></ol>
          </div>
          <div class="answer-box">
            <h4>解答例</h4>
            <pre></pre>
          </div>
        </div>
      </div>
    `;

    card.dataset.traceaStep = "0";
    card.querySelector(".prerequisite-slot").appendChild(renderPrerequisitePanel(view));
    card.querySelector(".tracea-prompt").appendChild(renderTraceableParagraph(view.prompt, view.hints));
    card.querySelector(".code-panel").appendChild(renderCode(level.parts, index, level.hints));
    card.querySelector(".output-box pre").textContent = view.output;
    card.querySelector(".explain-box p").textContent = view.explanation;
    card.querySelector(".answer-box pre").textContent = view.answer;
    updateTraceaState(card);
    list.appendChild(card);
  });
}

function renderArrayQuestions() {
  if (!arrayList) return;

  arrayList.textContent = "";

  arrayQuestions.forEach((question, index) => {
    const level = question.levels?.[currentLevel] || question.levels?.beginner || question;
    const view = { ...question, ...level };
    const card = document.createElement("article");
    const completed = isQuestionComplete("arrays", index, currentLevel);
    card.className = `question-card${completed ? " completed" : ""}`;
    card.dataset.lesson = "arrays";
    card.dataset.level = currentLevel;
    card.dataset.questionIndex = String(index);

    card.innerHTML = `
      <div class="question-top">
        <div class="question-number">A${index + 1}</div>
        <div class="question-copy">
          <div class="question-title-line">
            <h3>${view.title}</h3>
            <span class="progress-mark">${completed ? "完了" : "未完了"}</span>
          </div>
          <div class="prerequisite-slot"></div>
          <div class="tracea-prompt"></div>
        </div>
      </div>
      <div class="question-body">
        <div class="code-panel">
          <div class="panel-title">
            <span>配列コード</span>
            <span class="concept">${view.concept} / ${currentLevel === "beginner" ? "初級" : "中級"}</span>
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
            <button class="action-button secondary tracea-ask" type="button" data-action="tracea" aria-expanded="false">Traceaに聞く</button>
            <button class="action-button secondary" type="button" data-action="tracea-reset" disabled>ヒントをリセット</button>
            <button class="action-button secondary" type="button" data-action="answer" aria-expanded="false">解答を表示</button>
            <button class="action-button secondary" type="button" data-action="reset">リセット</button>
          </div>
          <p class="feedback" aria-live="polite"></p>
          <div class="tracea-panel">
            <h4>Tracea</h4>
            <p class="tracea-status" aria-live="polite">Traceaは、答えではなく見る場所を示します。</p>
            <ol class="tracea-notes" aria-live="polite"></ol>
          </div>
          <div class="answer-box">
            <h4>解答例</h4>
            <pre></pre>
          </div>
        </div>
      </div>
    `;

    card.dataset.traceaStep = "0";
    card.querySelector(".prerequisite-slot").appendChild(renderPrerequisitePanel(view));
    card.querySelector(".tracea-prompt").appendChild(renderTraceableParagraph(view.prompt, view.hints));
    card.querySelector(".code-panel").appendChild(renderCode(view.parts, index, view.hints));
    card.querySelector(".output-box pre").textContent = view.output;
    card.querySelector(".explain-box p").textContent = view.explanation;
    card.querySelector(".answer-box pre").textContent = view.answer;
    updateTraceaState(card);
    arrayList.appendChild(card);
  });
}

function renderConditionalQuestions() {
  if (!conditionalList) return;

  conditionalList.textContent = "";

  conditionalQuestions.forEach((question, index) => {
    const card = document.createElement("article");
    const completed = isQuestionComplete("conditionals", index);
    card.className = `question-card${completed ? " completed" : ""}`;
    card.dataset.lesson = "conditionals";
    card.dataset.questionIndex = String(index);

    card.innerHTML = `
      <div class="question-top">
        <div class="question-number">C${index + 1}</div>
        <div class="question-copy">
          <div class="question-title-line">
            <h3>${question.title}</h3>
            <span class="progress-mark">${completed ? "完了" : "未完了"}</span>
          </div>
          <div class="prerequisite-slot"></div>
          <div class="tracea-prompt"></div>
        </div>
      </div>
      <div class="question-body">
        <div class="code-panel">
          <div class="panel-title">
            <span>条件分岐コード</span>
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
            <button class="action-button secondary tracea-ask" type="button" data-action="tracea" aria-expanded="false">Traceaに聞く</button>
            <button class="action-button secondary" type="button" data-action="tracea-reset" disabled>ヒントをリセット</button>
            <button class="action-button secondary" type="button" data-action="answer" aria-expanded="false">解答を表示</button>
            <button class="action-button secondary" type="button" data-action="reset">リセット</button>
          </div>
          <p class="feedback" aria-live="polite"></p>
          <div class="tracea-panel">
            <h4>Tracea</h4>
            <p class="tracea-status" aria-live="polite">Traceaは、答えではなく見る場所を示します。</p>
            <ol class="tracea-notes" aria-live="polite"></ol>
          </div>
          <div class="answer-box">
            <h4>解答例</h4>
            <pre></pre>
          </div>
        </div>
      </div>
    `;

    card.dataset.traceaStep = "0";
    card.querySelector(".prerequisite-slot").appendChild(renderPrerequisitePanel(question));
    card.querySelector(".tracea-prompt").appendChild(renderTraceableParagraph(question.prompt, question.hints));
    card.querySelector(".code-panel").appendChild(renderCode(question.parts, index, question.hints));
    card.querySelector(".output-box pre").textContent = question.output;
    card.querySelector(".explain-box p").textContent = question.explanation;
    card.querySelector(".answer-box pre").textContent = question.answer;
    updateTraceaState(card);
    conditionalList.appendChild(card);
  });
}

function renderBooleanQuestions() {
  if (!booleanList) return;

  booleanList.textContent = "";

  booleanQuestions.forEach((question, index) => {
    const card = document.createElement("article");
    const completed = isQuestionComplete("booleans", index);
    card.className = `question-card${completed ? " completed" : ""}`;
    card.dataset.lesson = "booleans";
    card.dataset.questionIndex = String(index);

    card.innerHTML = `
      <div class="question-top">
        <div class="question-number">B${index + 1}</div>
        <div class="question-copy">
          <div class="question-title-line">
            <h3>${question.title}</h3>
            <span class="progress-mark">${completed ? "完了" : "未完了"}</span>
          </div>
          <div class="prerequisite-slot"></div>
          <div class="tracea-prompt"></div>
        </div>
      </div>
      <div class="question-body">
        <div class="code-panel">
          <div class="panel-title">
            <span>真偽値コード</span>
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
            <button class="action-button secondary tracea-ask" type="button" data-action="tracea" aria-expanded="false">Traceaに聞く</button>
            <button class="action-button secondary" type="button" data-action="tracea-reset" disabled>ヒントをリセット</button>
            <button class="action-button secondary" type="button" data-action="answer" aria-expanded="false">解答を表示</button>
            <button class="action-button secondary" type="button" data-action="reset">リセット</button>
          </div>
          <p class="feedback" aria-live="polite"></p>
          <div class="tracea-panel">
            <h4>Tracea</h4>
            <p class="tracea-status" aria-live="polite">Traceaは、答えではなく見る場所を示します。</p>
            <ol class="tracea-notes" aria-live="polite"></ol>
          </div>
          <div class="answer-box">
            <h4>解答例</h4>
            <pre></pre>
          </div>
        </div>
      </div>
    `;

    card.dataset.traceaStep = "0";
    card.querySelector(".prerequisite-slot").appendChild(renderPrerequisitePanel(question));
    card.querySelector(".tracea-prompt").appendChild(renderTraceableParagraph(question.prompt, question.hints));
    card.querySelector(".code-panel").appendChild(renderCode(question.parts, index, question.hints));
    card.querySelector(".output-box pre").textContent = question.output;
    card.querySelector(".explain-box p").textContent = question.explanation;
    card.querySelector(".answer-box pre").textContent = question.answer;
    updateTraceaState(card);
    booleanList.appendChild(card);
  });
}

function renderClassMethodQuestions(targetList, targetQuestions, options) {
  if (!targetList) return;

  targetList.textContent = "";

  targetQuestions.forEach((question, index) => {
    const card = document.createElement("article");
    const completed = isQuestionComplete(options.lessonId, index);
    card.className = `question-card${completed ? " completed" : ""}`;
    card.dataset.lesson = options.lessonId;
    card.dataset.level = "beginner";
    card.dataset.questionIndex = String(index);

    card.innerHTML = `
      <div class="question-top">
        <div class="question-number">${options.numberPrefix}${index + 1}</div>
        <div class="question-copy">
          <div class="question-title-line">
            <h3>${question.title}</h3>
            <span class="progress-mark">${completed ? "完了" : "未完了"}</span>
          </div>
          <div class="prerequisite-slot"></div>
          <div class="tracea-prompt"></div>
        </div>
      </div>
      <div class="question-body">
        <div class="code-panel">
          <div class="panel-title">
            <span>${options.panelLabel}</span>
            <span class="concept">${question.concept} / 初級</span>
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
            <button class="action-button secondary tracea-ask" type="button" data-action="tracea" aria-expanded="false">Traceaに聞く</button>
            <button class="action-button secondary" type="button" data-action="tracea-reset" disabled>ヒントをリセット</button>
            <button class="action-button secondary" type="button" data-action="answer" aria-expanded="false">解答を表示</button>
            <button class="action-button secondary" type="button" data-action="reset">リセット</button>
          </div>
          <p class="feedback" aria-live="polite"></p>
          <div class="tracea-panel">
            <h4>Tracea</h4>
            <p class="tracea-status" aria-live="polite">Traceaは、答えではなく見る場所を示します。</p>
            <ol class="tracea-notes" aria-live="polite"></ol>
          </div>
          <div class="answer-box">
            <h4>解答例</h4>
            <pre></pre>
          </div>
        </div>
      </div>
    `;

    card.dataset.traceaStep = "0";
    card.querySelector(".prerequisite-slot").appendChild(renderPrerequisitePanel(question));
    card.querySelector(".tracea-prompt").appendChild(renderTraceableParagraph(question.prompt, question.hints));
    card.querySelector(".code-panel").appendChild(renderCode(question.parts, index, question.hints));
    card.querySelector(".output-box pre").textContent = question.output;
    card.querySelector(".explain-box p").textContent = question.explanation;
    card.querySelector(".answer-box pre").textContent = question.answer;
    updateTraceaState(card);
    targetList.appendChild(card);
  });
}

function renderTopicDeepDive(panel, topicKey) {
  if (!panel || !topicDeepDives[topicKey]) return;

  const topic = topicDeepDives[topicKey];
  panel.textContent = "";

  const eyebrow = document.createElement("p");
  eyebrow.className = "eyebrow";
  eyebrow.textContent = topic.eyebrow;

  const title = document.createElement("h3");
  title.textContent = topic.title;

  const body = document.createElement("div");
  body.className = "deep-body";
  topic.body.forEach((paragraph) => {
    const text = document.createElement("p");
    text.textContent = paragraph;
    body.appendChild(text);
  });

  const checks = document.createElement("div");
  checks.className = "deep-checks";
  const checksTitle = document.createElement("h4");
  checksTitle.textContent = "ここを外さない";
  const checksList = document.createElement("ul");
  topic.checks.forEach((check) => {
    const item = document.createElement("li");
    item.textContent = check;
    checksList.appendChild(item);
  });
  checks.append(checksTitle, checksList);

  const code = document.createElement("pre");
  const codeInner = document.createElement("code");
  codeInner.textContent = topic.code;
  code.appendChild(codeInner);

  panel.append(eyebrow, title, body, checks, code);
}

function findTopicPanel(card) {
  const section = card.closest("section");
  return section?.querySelector(".topic-deep-dive") || arrayDeepDive;
}

function activateTopicCard(card) {
  if (!card) return;

  const section = card.closest("section") || document;
  const relatedCards = [...section.querySelectorAll(".topic-card")];
  relatedCards.forEach((topicCard) => {
    const active = topicCard === card;
    topicCard.classList.toggle("active", active);
    topicCard.setAttribute("aria-expanded", String(active));
  });

  const panel = findTopicPanel(card);
  renderTopicDeepDive(panel, card.dataset.topic || card.dataset.arrayTopic);
  panel?.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

renderQuestions();
renderArrayQuestions();
renderConditionalQuestions();
renderBooleanQuestions();
renderClassMethodQuestions(methodOneList, methodOneQuestions, {
  lessonId: "methods-1",
  numberPrefix: "M1-",
  panelLabel: "メソッドコード"
});
renderClassMethodQuestions(methodTwoList, methodTwoQuestions, {
  lessonId: "methods-2",
  numberPrefix: "M2-",
  panelLabel: "メソッドコード"
});
renderClassMethodQuestions(classList, classQuestions, {
  lessonId: "classes",
  numberPrefix: "C-",
  panelLabel: "クラスコード"
});
ensureLessonSeriesGroups();
ensureUserSummary();
updateLessonProgress();
notifyLearningStatus();
renderTraceRoom();
if (hasLoopUnlock()) {
  applyLoopUnlock();
}
window.addEventListener("java-practice-auth-ready", (event) => {
  progressScope = event.detail?.uid || "local";
  currentUserName = event.detail?.name || currentUserName || "User";
  currentDisplayName = event.detail?.displayName || currentUserName;
  currentUserAvatar = event.detail?.avatar || currentUserAvatar || getAvatarLetter(currentDisplayName);
  updateUserSummary();
  notifyLearningStatus();
  renderTraceRoom();
  if (hasLoopUnlock()) {
    applyLoopUnlock();
  }
});
window.addEventListener("java-practice-trace-users", (event) => {
  remoteTraceRoomUsers = Array.isArray(event.detail?.users) ? event.detail.users : [];
  renderTraceRoom();
});
if (typeLogo) {
  startTypeLogo();
}

if (lessonPanel && lessonToggles.length > 0) {
  lessonToggles.forEach((button) => {
    button.addEventListener("click", () => {
      toggleLessonPanel();
    });
  });

  lessonPanel.addEventListener("click", (event) => {
    const groupToggle = event.target.closest(".lesson-group-toggle");
    if (groupToggle) {
      const group = groupToggle.closest(".lesson-group");
      const open = !group.classList.contains("open");
      group.classList.toggle("open", open);
      groupToggle.setAttribute("aria-expanded", String(open));
      return;
    }

    if (event.target.closest("a.disabled")) {
      event.preventDefault();
      return;
    }

    if (event.target.closest("a")) {
      toggleLessonPanel(false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      toggleLessonPanel(false);
    }
  });
}

document.addEventListener("click", (event) => {
  const clickedToggle = event.target.closest(".lesson-toggle");
  const clickedPanel = event.target.closest("#lessonPanel");

  if (!lessonPanel || clickedToggle || clickedPanel) return;

  if (lessonPanel.classList.contains("visible")) {
    toggleLessonPanel(false);
  }
});

document.addEventListener("click", (event) => {
  const button = event.target.closest(".user-summary button[data-action]");
  if (!button) return;
  handleQuestionAction(event);
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" || !event.target.matches("[data-profile-name-input]")) return;
  event.preventDefault();
  saveUserProfile();
});

if (unlockButton && unlockInput) {
  unlockButton.addEventListener("click", checkUnlock);

  unlockInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      checkUnlock();
    }
  });
}

levelButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentLevel = button.dataset.level;
    levelButtons.forEach((levelButton) => {
      const active = levelButton === button;
      levelButton.classList.toggle("active", active);
      levelButton.setAttribute("aria-pressed", String(active));
    });
    renderQuestions();
    renderArrayQuestions();
  });
});

if (list) {
  list.addEventListener("click", (event) => {
    handleQuestionAction(event);
  });
}

if (arrayList) {
  arrayList.addEventListener("click", (event) => {
    handleQuestionAction(event);
  });
}

if (conditionalList) {
  conditionalList.addEventListener("click", (event) => {
    handleQuestionAction(event);
  });
}

if (booleanList) {
  booleanList.addEventListener("click", (event) => {
    handleQuestionAction(event);
  });
}

if (methodOneList) {
  methodOneList.addEventListener("click", (event) => {
    handleQuestionAction(event);
  });
}

if (methodTwoList) {
  methodTwoList.addEventListener("click", (event) => {
    handleQuestionAction(event);
  });
}

if (classList) {
  classList.addEventListener("click", (event) => {
    handleQuestionAction(event);
  });
}

if (topicCards.length > 0) {
  topicCards.forEach((card) => {
    card.addEventListener("click", () => {
      activateTopicCard(card);
    });

    card.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      activateTopicCard(card);
    });
  });
}

function handleQuestionAction(event) {
  const button = event.target.closest("button[data-action]");
  if (!button) return;

  const card = button.closest(".question-card");
  const action = button.dataset.action;

  if (action === "profile-toggle") {
    toggleProfileEditor();
    return;
  }

  if (action === "profile-cancel") {
    readSavedUserProfile();
    toggleProfileEditor(false);
    updateUserSummary();
    setProfileMessage("");
    return;
  }

  if (action === "avatar-choice") {
    currentUserAvatar = button.dataset.avatarChoice || getAvatarLetter(currentDisplayName);
    updateUserSummary();
    setProfileMessage("");
    return;
  }

  if (action === "profile-save") {
    saveUserProfile();
    return;
  }

  if (action === "prerequisite") {
    togglePrerequisite(button);
    return;
  }

  if (action === "check") checkQuestion(card);
  if (action === "tracea") advanceTracea(card);
  if (action === "tracea-reset") resetTracea(card);
  if (action === "answer") toggleAnswer(card, button);
  if (action === "reset") resetQuestion(card);
}
