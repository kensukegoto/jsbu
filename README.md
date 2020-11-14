# 方針

# 方針（11/14 v2）

```
publicに各記事のhtmlページを作る
ヘッダー・フッターなど共通パーツはvueのコンポーネントを使う
```

# 方針（11/14）

```

各記事を.vueファイルで作リたい
:idを見て対象のvueファイルを読む

しかし、、、

方針変換

理由
・記事コンポーネントがキャッシュを持ってしまい、どのページへ飛んでも一緒になる
・this.$destory()が出来ない（vue3で使えない？）
・vue-route側で何とかならないか考えたが:idを取得出来ない
・そもそもでこの方針だと各記事のOGPが設定出来ない

```

各記事をSPAで作る。SEO観点でそれが良いかどうかは問題としないとする。

# git

```
未解決:Hメニュー開いたままSP→PCでスライドが消える
未解決:Hメニュー開くとコンテンツ幅が3000pxとかになる

追加：コンポーネントでSassを使える
追加：共通CSS（リセットCSS）などを設定する
追加：ミックスインを全コンポーネントで使える
追加：ロゴ・ハンバーガー実装
追加：ハンバーガーが開いてる場合SP→PCで解除
追加：ハンバーガーのモーダルを固定する
変更：ハンバーガーに黒背景を置く
変更：ハンバーガーの位置調整
追加：スライダー実装（要CSS調整）
追加：スライダーCSS調整
追加：JS部とは
変更：色を変数、フォントサイズをremにする
修正：Hメニューの上にスライダーが重なる問題
追加：ニュース一覧
修正：ヘッダーのpadding（SPのものがPCにも設定されている）
修正：サイト全体の不要な余白削除（スライドの余白）
変更：コンポーネントのルートにコンポーネント名・呼び出し側に接頭辞
使う方と使われる側で設定したCSSがバッティングするため
追加：axiosでjsonを読む
修正：一覧のサムネが小さくなる場合がある（テキストが長い場合）
変更：トップページは５件のみ
変更：スライダーをデータから取得し作成する

変更：コンポーネント構造整理
変更：compositionAPIに変更する
変更：(ニュース)タブを一覧のオブジェクトデータから作成

```

# 目標

```
・v-modeをcomputedと組み合わせて使う
・slotを使う（省略記法で）
・inheritAttrsのtrue、false
・$attrsでinputへ属性を渡す
・Composition APIを使う
・propsは型と必須とデフォルトを設定
・emitするときはemitsで宣言する
・vuexを使う
```

# ディレクトリ

/src/composable
/src/core

# データ

all.json
info.json
event.json
topic.json
report.json

```json
[
  {
    "title": "ペルシャは、ネコの品種の一つペルシャは、ネコ",
    "image": "img_01.jpg",
    "date": "2020/11/03",
    "description": "長く密集した被毛、ずんぐりした体つき、短い足、離れた両目の幅広の顔といった特徴をもつ。横顔は額、鼻、あごが一直線に並び、起伏の少ない低い鼻を有する。",
    "category" : "topic"
  },
]
```



# 課題

コンポーネントを動的に変更出来るisとは？
