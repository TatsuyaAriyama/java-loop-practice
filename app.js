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
let currentLevel = "beginner";
let currentUserName = "User";

try {
  currentUserName = localStorage.getItem("java-output-practice-auth-name") || "User";
} catch {}

levelButtons.forEach((button) => {
  button.setAttribute("aria-pressed", String(button.dataset.level === currentLevel));
});

const intermediateData = [
  {
    parts: [
      "class Main {\n  public static void main(String[] args) {\n    for (",
      { answer: "int i = 1", accepts: ["int i = 1", "int i=1"], chars: 10 },
      "; ",
      { answer: "i <= 5", accepts: ["i <= 5", "i<=5"], chars: 7 },
      "; ",
      { answer: "i++", accepts: ["i++", "++i", "i += 1", "i=i+1", "i = i + 1"], chars: 6 },
      ") {\n      System.out.println(",
      { answer: "i", chars: 2 },
      ");\n    }\n  }\n}"
    ],
    hints: [
      "for文は for (初期化式; 条件式; 更新式) の順番で書きます。中級では、初期化式を int i = 1 のようにまとまりで書きます。",
      "目標の出力は1から5です。始まりは1、終わりは5、増え方は1ずつです。",
      "printlnの中には、今の回で表示したい値を入れます。今回は繰り返しで変わる変数を表示します。"
    ]
  },
  {
    parts: [
      "class Main {\n  public static void main(String[] args) {\n    for (",
      { answer: "int i = 2", accepts: ["int i = 2", "int i=2"], chars: 10 },
      "; ",
      { answer: "i <= 10", accepts: ["i <= 10", "i<=10"], chars: 8 },
      "; ",
      { answer: "i += 2", accepts: ["i += 2", "i=i+2", "i = i + 2"], chars: 8 },
      ") {\n      System.out.println(",
      { answer: "i", chars: 2 },
      ");\n    }\n  }\n}"
    ],
    hints: [
      "2、4、6、8、10は、始まりが2で、最後が10です。",
      "偶数を順番に出したいので、毎回1ではなく2ずつ増やします。",
      "表示する値は、for文の中で変化している変数です。printlnの中にその変数を入れます。"
    ]
  },
  {
    parts: [
      "class Main {\n  public static void main(String[] args) {\n    int ",
      { answer: "sum", chars: 5 },
      " = ",
      { answer: "0", chars: 2 },
      ";\n\n    for (",
      { answer: "int i = 1", accepts: ["int i = 1", "int i=1"], chars: 10 },
      "; ",
      { answer: "i <= 10", accepts: ["i <= 10", "i<=10"], chars: 8 },
      "; ",
      { answer: "i++", accepts: ["i++", "++i", "i += 1", "i=i+1", "i = i + 1"], chars: 6 },
      ") {\n      ",
      { answer: "sum += i", accepts: ["sum += i", "sum=sum+i", "sum = sum + i"], chars: 10 },
      ";\n    }\n\n    System.out.println(",
      { answer: "sum", chars: 5 },
      ");\n  }\n}"
    ],
    hints: [
      "合計を作るには、足した結果を覚えておく変数が必要です。よく使う名前はsumです。",
      "合計は0から始めて、1から10までのiを順番に足していきます。",
      "繰り返しの中では、sumにiを足して更新します。表示するのは最後に完成したsumです。"
    ]
  },
  {
    parts: [
      "class Main {\n  public static void main(String[] args) {\n    int i = ",
      { answer: "1", chars: 2 },
      ";\n\n    while (",
      { answer: "i <= 5", accepts: ["i <= 5", "i<=5"], chars: 7 },
      ") {\n      System.out.println(",
      { answer: "i", chars: 2 },
      ");\n      ",
      { answer: "i++", accepts: ["i++", "++i", "i += 1", "i=i+1", "i = i + 1"], chars: 6 },
      ";\n    }\n  }\n}"
    ],
    hints: [
      "while文では、繰り返しの前に変数を用意します。今回は1から始めます。",
      "whileの丸かっこには、続ける条件だけを書きます。5まで表示したいので、5以下の間続けます。",
      "表示したあとに変数を増やさないと、同じ値のまま止まらなくなります。"
    ]
  },
  {
    parts: [
      "class Main {\n  public static void main(String[] args) {\n    int count = ",
      { answer: "5", chars: 2 },
      ";\n\n    while (",
      { answer: "count >= 1", accepts: ["count >= 1", "count>=1"], chars: 11 },
      ") {\n      System.out.println(",
      { answer: "count", chars: 6 },
      ");\n      ",
      { answer: "count--", accepts: ["count--", "--count", "count -= 1", "count=count-1", "count = count - 1"], chars: 9 },
      ";\n    }\n  }\n}"
    ],
    hints: [
      "カウントダウンは、最初を大きい数字にして、毎回小さくします。",
      "最後に1も表示したいので、条件は1以上の間続ける形にします。",
      "表示したあと、countを1減らします。増やすのではなく減らす点に注意します。"
    ]
  },
  {
    parts: [
      "class Main {\n  public static void main(String[] args) {\n    for (int i = 1; i <= 10; i++) {\n      if (",
      { answer: "i == 4", accepts: ["i == 4", "i==4"], chars: 7 },
      ") {\n        ",
      { answer: "break", chars: 7 },
      ";\n      }\n\n      System.out.println(",
      { answer: "i", chars: 2 },
      ");\n    }\n  }\n}"
    ],
    hints: [
      "途中で完全に止めたいときはbreakを使います。",
      "止めるタイミングは、iが4になったときです。同じかどうかの比較には == を使います。",
      "breakをprintlnより前に置くと、4は表示されずに繰り返しが終了します。"
    ]
  },
  {
    parts: [
      "class Main {\n  public static void main(String[] args) {\n    for (int i = 1; i <= 5; i++) {\n      if (",
      { answer: "i == 3", accepts: ["i == 3", "i==3"], chars: 7 },
      ") {\n        ",
      { answer: "continue", chars: 10 },
      ";\n      }\n\n      System.out.println(",
      { answer: "i", chars: 2 },
      ");\n    }\n  }\n}"
    ],
    hints: [
      "繰り返し自体は続けて、特定の回だけ表示しないときはcontinueを使います。",
      "飛ばしたい値は3です。条件には、iが3かどうかを調べる式を書きます。",
      "continueをprintlnより前に置くと、その回だけ表示処理に進みません。"
    ]
  },
  {
    parts: [
      "class Main {\n  public static void main(String[] args) {\n    for (int i = 1; i <= 9; i++) {\n      if (",
      { answer: "i % 2 == 0", accepts: ["i % 2 == 0", "i%2==0"], chars: 11 },
      ") {\n        ",
      { answer: "continue", chars: 10 },
      ";\n      }\n\n      System.out.println(",
      { answer: "i", chars: 2 },
      ");\n    }\n  }\n}"
    ],
    hints: [
      "奇数だけ表示するには、偶数の回を飛ばすと考えると書きやすいです。",
      "% は余りを調べる記号です。2で割った余りが0なら偶数です。",
      "偶数だとわかった回だけcontinueで飛ばせば、printlnには奇数だけが届きます。"
    ]
  },
  {
    parts: [
      "class Main {\n  public static void main(String[] args) {\n    int sum = 0;\n\n    for (int i = 1; i <= 10; i++) {\n      ",
      { answer: "sum += i", accepts: ["sum += i", "sum=sum+i", "sum = sum + i"], chars: 10 },
      ";\n\n      if (",
      { answer: "sum >= 10", accepts: ["sum >= 10", "sum>=10"], chars: 10 },
      ") {\n        ",
      { answer: "break", chars: 7 },
      ";\n      }\n    }\n\n    System.out.println(",
      { answer: "sum", chars: 5 },
      ");\n  }\n}"
    ],
    hints: [
      "まずsumにiを足します。足したあとで、合計が止める条件に届いたか確認します。",
      "止める条件は「sumが10以上」です。ちょうど10も含めるので >= を使います。",
      "条件を満たしたらbreakします。最後に表示するのは、止まった時点のsumです。"
    ]
  },
  {
    parts: [
      "class Main {\n  public static void main(String[] args) {\n    for (",
      { answer: "int i = 1", accepts: ["int i = 1", "int i=1"], chars: 10 },
      "; ",
      { answer: "i <= 5", accepts: ["i <= 5", "i<=5"], chars: 7 },
      "; ",
      { answer: "i++", accepts: ["i++", "++i", "i += 1", "i=i+1", "i = i + 1"], chars: 6 },
      ") {\n      System.out.println(",
      { answer: "\"3 x \" + i + \" = \" + 3 * i", accepts: ["\"3 x \" + i + \" = \" + 3 * i", "\"3 x \"+i+\" = \"+3*i", "\"3 x \" + i + \" = \" + i * 3", "\"3 x \"+i+\" = \"+i*3"], chars: 28 },
      ");\n    }\n  }\n}"
    ],
    hints: [
      "3の段は、iを1から5まで変化させて、3とiをかけます。",
      "文字と変数をつなげるときは + を使います。\"3 x \"、i、\" = \"、計算結果を順番につなげます。",
      "Javaのかけ算は * です。3 * i または i * 3 で計算できます。"
    ]
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

questions.forEach((question, index) => {
  const beginnerHints = buildTraceaHints(question, question.parts);
  const intermediateHints = buildTraceaHints(question, intermediateData[index].parts);
  question.hints = beginnerHints;
  question.levels = {
    beginner: { parts: question.parts, hints: beginnerHints },
    intermediate: { ...intermediateData[index], hints: intermediateHints }
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

arrayQuestions.forEach((question) => {
  question.hints = buildTraceaHints(question, question.parts);
});

conditionalQuestions.forEach((question) => {
  question.hints = buildTraceaHints(question, question.parts);
});

booleanQuestions.forEach((question) => {
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

const lessonMeta = [
  { id: "loops", total: questions.length },
  { id: "arrays", total: arrayQuestions.length },
  { id: "conditionals", total: conditionalQuestions.length },
  { id: "booleans", total: booleanQuestions.length }
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

function isQuestionComplete(lessonId, questionIndex) {
  return readCompletedQuestions(lessonId).has(questionIndex);
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
  if (!lessonId || Number.isNaN(questionIndex)) return;

  const completed = readCompletedQuestions(lessonId);
  completed.add(questionIndex);
  writeCompletedQuestions(lessonId, completed);
  updateQuestionCompletion(card, true);
  updateLessonProgress();
}

function getCompletedCount(lesson) {
  return Math.min(readCompletedQuestions(lesson.id).size, lesson.total);
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
  const exerciseCount = panel.querySelector("[data-total-cleared]");
  const lessonCount = panel.querySelector("[data-lessons-cleared]");

  if (name) name.textContent = currentUserName;
  if (avatar) avatar.textContent = (currentUserName.trim().charAt(0) || "U").toUpperCase();
  if (exerciseCount) exerciseCount.textContent = String(getTotalCompletedExercises());
  if (lessonCount) lessonCount.textContent = `${getCompletedLessonCount()}/${lessonMeta.length}`;
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
  `;

  const actions = headerInner.querySelector(".header-actions");
  headerInner.insertBefore(panel, actions);
  updateUserSummary();
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

function textNode(value) {
  return document.createTextNode(value);
}

function createTraceaMark(hint, index) {
  const mark = document.createElement("span");
  mark.className = `tracea-mark tracea-${hint.styleType}`;
  mark.dataset.traceaStep = String(index + 1);
  mark.textContent = hint.targetText;

  const bubble = document.createElement("span");
  bubble.className = "tracea-bubble";
  bubble.innerHTML = `<span class="tracea-name">Tracea</span>${hint.message}`;
  mark.appendChild(bubble);

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
    const card = document.createElement("article");
    const completed = isQuestionComplete("loops", index);
    card.className = `question-card${completed ? " completed" : ""}`;
    card.dataset.lesson = "loops";
    card.dataset.questionIndex = String(index);

    card.innerHTML = `
      <div class="question-top">
        <div class="question-number">Q${index + 1}</div>
        <div class="question-copy">
          <div class="question-title-line">
            <h3>${question.title}</h3>
            <span class="progress-mark">${completed ? "完了" : "未完了"}</span>
          </div>
          <div class="tracea-prompt"></div>
        </div>
      </div>
      <div class="question-body">
        <div class="code-panel">
          <div class="panel-title">
            <span>穴埋めコード</span>
            <span class="concept">${question.concept} / ${currentLevel === "beginner" ? "初級" : "中級"}</span>
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
          </div>
          <div class="answer-box">
            <h4>解答例</h4>
            <pre></pre>
          </div>
        </div>
      </div>
    `;

    card.dataset.traceaStep = "0";
    card.querySelector(".tracea-prompt").appendChild(renderTraceableParagraph(question.prompt, level.hints));
    card.querySelector(".code-panel").appendChild(renderCode(level.parts, index, level.hints));
    card.querySelector(".output-box pre").textContent = question.output;
    card.querySelector(".explain-box p").textContent = question.explanation;
    card.querySelector(".answer-box pre").textContent = question.answer;
    updateTraceaState(card);
    list.appendChild(card);
  });
}

function renderArrayQuestions() {
  if (!arrayList) return;

  arrayList.textContent = "";

  arrayQuestions.forEach((question, index) => {
    const card = document.createElement("article");
    const completed = isQuestionComplete("arrays", index);
    card.className = `question-card${completed ? " completed" : ""}`;
    card.dataset.lesson = "arrays";
    card.dataset.questionIndex = String(index);

    card.innerHTML = `
      <div class="question-top">
        <div class="question-number">A${index + 1}</div>
        <div class="question-copy">
          <div class="question-title-line">
            <h3>${question.title}</h3>
            <span class="progress-mark">${completed ? "完了" : "未完了"}</span>
          </div>
          <div class="tracea-prompt"></div>
        </div>
      </div>
      <div class="question-body">
        <div class="code-panel">
          <div class="panel-title">
            <span>配列コード</span>
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
          </div>
          <div class="answer-box">
            <h4>解答例</h4>
            <pre></pre>
          </div>
        </div>
      </div>
    `;

    card.dataset.traceaStep = "0";
    card.querySelector(".tracea-prompt").appendChild(renderTraceableParagraph(question.prompt, question.hints));
    card.querySelector(".code-panel").appendChild(renderCode(question.parts, index, question.hints));
    card.querySelector(".output-box pre").textContent = question.output;
    card.querySelector(".explain-box p").textContent = question.explanation;
    card.querySelector(".answer-box pre").textContent = question.answer;
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
          </div>
          <div class="answer-box">
            <h4>解答例</h4>
            <pre></pre>
          </div>
        </div>
      </div>
    `;

    card.dataset.traceaStep = "0";
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
          </div>
          <div class="answer-box">
            <h4>解答例</h4>
            <pre></pre>
          </div>
        </div>
      </div>
    `;

    card.dataset.traceaStep = "0";
    card.querySelector(".tracea-prompt").appendChild(renderTraceableParagraph(question.prompt, question.hints));
    card.querySelector(".code-panel").appendChild(renderCode(question.parts, index, question.hints));
    card.querySelector(".output-box pre").textContent = question.output;
    card.querySelector(".explain-box p").textContent = question.explanation;
    card.querySelector(".answer-box pre").textContent = question.answer;
    updateTraceaState(card);
    booleanList.appendChild(card);
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
ensureUserSummary();
updateLessonProgress();
if (hasLoopUnlock()) {
  applyLoopUnlock();
}
window.addEventListener("java-practice-auth-ready", (event) => {
  progressScope = event.detail?.uid || "local";
  currentUserName = event.detail?.name || "User";
  updateUserSummary();
  if (hasLoopUnlock()) {
    applyLoopUnlock();
  }
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

  if (action === "check") checkQuestion(card);
  if (action === "tracea") advanceTracea(card);
  if (action === "tracea-reset") resetTracea(card);
  if (action === "answer") toggleAnswer(card, button);
  if (action === "reset") resetQuestion(card);
}
