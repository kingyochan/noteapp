# Firebase＋Vue.jsの簡単なアプリケーションを作ってみた

こちらの[チュートリアル](https://note.com/kyo_game_theory/n/n6a90113a2f98)を参考にさせていただきました。
今はチュートリアル通りに作っただけなので、今後機能を拡張していきたいと考えています。

## 目的
- 先輩から教えてもらったFirebaseが超便利そうだから、使ってみたい
- 少し前にワーキンググループで触ったVue.jsについて復習したい
- 気持ちが乗っている間に、アプリケーションとして最低限の機能を作って早くGitHubにあげたい

### 感想
普段は、主にJava＋Postgres＋jQueryを使っている私ですが、Firebaseの便利さに驚きました。

まさかアカウント認証の機能の利用や、アプリケーションの公開までできるとは思っていませんでした。

Vueはもっと勉強が必要だと感じました。

### 補足 
このチュートリアルではCSSフレームワークにtailwindを採用していますが、一部記述通りにいかない部分がありました。

Vue Cliのバージョン違うからかと思い、バージョンを揃えてみましたがうまくいかず・・

package.jsonに下記のように記載したところ、反映されました。

```
  "postcss":{
    "plugins":{
      "tailwindcss": "./tailwind.js",
      "autoprefixer": {}
    }
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
# noteapp
