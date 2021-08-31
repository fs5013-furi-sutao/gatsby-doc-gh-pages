# Gatsby を使ったドキュメントサイトの作成方法

Gatsby を使って GitHub Pages に Docs サイトを作成する方法

## Node.js が必要

ローカルに Node.js がインストールされていない場合は、あらかじめインストールして npm コマンドが使えるようにしておく

## ローカルにテンプレートをクローンする

``` 
npx gatsby new <プロジェクト名> https://github.com/rocketseat/gatsby-starter-rocket-docs
```

```
cd ./<プロジェクト名>
yarn develop
```

yarn develop を実行、 http://localhost:8000 にアクセスしてページが表示されることを確認する

## ライブリロードの確認

以下の mdx ファイルを編集して、サイトのトップページが編集内容で更新されることを確認する

src/@rocketseat/gatsby-theme-docs/text/index.mdx

## GitHub にリポジトリの作成

GitHub にリポジトリを作成しておく。

## ローカルリポジトリ作成

ローカルリポジトリを作成し、リモートにプッシュする

```
git init 
git config --local user.name アカウント名
git config --local user.email メールアドレス
git add .
git commit -m 'First commit'
git remote add origin https://github.com/アカウント名/プロジェクト名.git
git push -u origin master
```

## gh-pages のインストール

Gatsby アプリを GitHub Pages にプッシュするには、gh-pages というパッケージを使う。

gh-pages
https://github.com/tschaub/gh-pages

```
yarn add --dev gh-pages
```

## GitHub Pages のパスへのデプロイ

username.github.io/reponame/ のようなパスでデプロイされたサイトの場合、--prefix-paths フラグが使用される。gatsby-config.js のオプションとして/reponame パスのプレフィックスを追加する必要がある。

gatsby-config.js
``` 
module.exports = {
  pathPrefix: "/reponame",
}
```

そして、リポジトリのコードベースにある package.json にデプロイスクリプトを追加する。

package.json
```
{
  "scripts": {
    "deploy": "gatsby build --prefix-paths && gh-pages -d public"
  }
}
```

## デプロイ方法

yarn deploy を実行すると、public フォルダのすべての内容がリポジトリの gh-pages ブランチに移動する。リポジトリの設定で、デプロイ元として gh-pages ブランチが設定されていることを確認する。

```
yarn deploy
```

以下の URL にアクセルしてデプロイが成功したことを確認する

https://アカウント名.github.io/プロジェクト名/
