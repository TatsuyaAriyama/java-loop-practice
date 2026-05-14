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
const levelButtons = [...document.querySelectorAll(".difficulty-tab")];
const questionsSection = document.querySelector("#questions");
const unlockInput = document.querySelector(".unlock-input");
const unlockButton = document.querySelector("#unlockButton");
const unlockFeedback = document.querySelector("#unlockFeedback");
const typeLogo = document.querySelector(".type-logo");
const lessonToggle = document.querySelector("#lessonToggle");
const lessonPanel = document.querySelector("#lessonPanel");
let currentLevel = "beginner";

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

questions.forEach((question, index) => {
  question.levels = {
    beginner: { parts: question.parts, hints: question.hints },
    intermediate: intermediateData[index]
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
  const shouldOpen = typeof forceOpen === "boolean" ? forceOpen : !lessonPanel.classList.contains("visible");
  lessonPanel.classList.toggle("visible", shouldOpen);
  lessonToggle.setAttribute("aria-expanded", String(shouldOpen));
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

function renderHints(hints) {
  const list = document.createElement("ol");
  list.className = "hint-list";

  hints.forEach((hint) => {
    const item = document.createElement("li");
    item.textContent = hint;
    list.appendChild(item);
  });

  return list;
}

function checkUnlock() {
  const value = normalizeCode(unlockInput.value);
  const correct = value === 'System.out.println("Hello");';

  if (correct) {
    questionsSection.classList.remove("locked");
    unlockFeedback.className = "unlock-feedback ok";
    unlockFeedback.textContent = "OKです。下の問題が開きました。";
    document.querySelector("#questions").scrollIntoView({ behavior: "smooth", block: "start" });
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

function toggleHint(card, button) {
  const box = card.querySelector(".hint-box");
  const visible = box.classList.toggle("visible");
  button.textContent = visible ? "ヒントを隠す" : "ヒントを表示";
  button.setAttribute("aria-expanded", String(visible));
}

function resetQuestion(card) {
  card.querySelectorAll(".code-input").forEach((input) => {
    input.value = "";
  });
  const feedback = card.querySelector(".feedback");
  feedback.className = "feedback";
  feedback.textContent = "";
  const hintBox = card.querySelector(".hint-box");
  const hintButton = card.querySelector('button[data-action="hint"]');
  hintBox.classList.remove("visible");
  hintButton.textContent = "ヒントを表示";
  hintButton.setAttribute("aria-expanded", "false");
}

function renderQuestions() {
  if (!list) return;

  list.textContent = "";

  questions.forEach((question, index) => {
    const level = question.levels[currentLevel];
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
            <button class="action-button secondary" type="button" data-action="hint" aria-expanded="false">ヒントを表示</button>
            <button class="action-button secondary" type="button" data-action="answer" aria-expanded="false">解答を表示</button>
            <button class="action-button secondary" type="button" data-action="reset">リセット</button>
          </div>
          <p class="feedback" aria-live="polite"></p>
          <div class="hint-box">
            <h4>ヒント</h4>
          </div>
          <div class="answer-box">
            <h4>解答例</h4>
            <pre></pre>
          </div>
        </div>
      </div>
    `;

    card.querySelector(".code-panel").appendChild(renderCode(level.parts, index));
    card.querySelector(".output-box pre").textContent = question.output;
    card.querySelector(".explain-box p").textContent = question.explanation;
    card.querySelector(".hint-box").appendChild(renderHints(level.hints));
    card.querySelector(".answer-box pre").textContent = question.answer;
    list.appendChild(card);
  });
}

function renderArrayQuestions() {
  if (!arrayList) return;

  arrayList.textContent = "";

  arrayQuestions.forEach((question, index) => {
    const card = document.createElement("article");
    card.className = "question-card";

    card.innerHTML = `
      <div class="question-top">
        <div class="question-number">A${index + 1}</div>
        <div class="question-copy">
          <h3>${question.title}</h3>
          <p>${question.prompt}</p>
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
            <button class="action-button secondary" type="button" data-action="hint" aria-expanded="false">ヒントを表示</button>
            <button class="action-button secondary" type="button" data-action="answer" aria-expanded="false">解答を表示</button>
            <button class="action-button secondary" type="button" data-action="reset">リセット</button>
          </div>
          <p class="feedback" aria-live="polite"></p>
          <div class="hint-box">
            <h4>ヒント</h4>
          </div>
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
    card.querySelector(".hint-box").appendChild(renderHints(question.hints));
    card.querySelector(".answer-box pre").textContent = question.answer;
    arrayList.appendChild(card);
  });
}

renderQuestions();
renderArrayQuestions();
if (typeLogo) {
  startTypeLogo();
}

if (lessonToggle && lessonPanel) {
  lessonToggle.addEventListener("click", () => {
    toggleLessonPanel();
  });

  lessonPanel.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      toggleLessonPanel(false);
    }
  });
}

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

function handleQuestionAction(event) {
  const button = event.target.closest("button[data-action]");
  if (!button) return;

  const card = button.closest(".question-card");
  const action = button.dataset.action;

  if (action === "check") checkQuestion(card);
  if (action === "hint") toggleHint(card, button);
  if (action === "answer") toggleAnswer(card, button);
  if (action === "reset") resetQuestion(card);
}
