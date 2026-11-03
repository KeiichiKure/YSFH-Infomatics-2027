# 理数情報ラボ｜2027年度改訂版

2026年度の教材を残して、来年度版を改訂するための独立した複製です。

- 送信先：`https://github.com/KeiichiKure/YSFH-Infomatics-2027.git`
- 作成元：2026年度版のコミット `9aedd1d`
- 今回の見本：`/units/02-01/`「アナログとデジタル」
- 他の単元・ホームは2026年度版を引き継いだ状態です。

## 02-01で改善した点

- 5つの学習節の末尾に、語句と意味だけの重要語カードを配置。
- 「体験では：」「例では：」の具体例欄は設けない。
- 最後の見出しを「重要語を確認する」に統一。
- 最終一覧はPCで2列、小さい画面で1列。語句は常に見え、意味だけ個別に開く。
- 緑の数字は学習節へ戻るリンク、語句は意味を開く操作として分離。
- 同じ語句は最終一覧で1行にまとめ、必要に応じて関連する節へリンク。
- Web節番号を1〜5、まとめを✓にそろえる。
- 用語カードは16px、最終一覧は14px。押す場所は高さ44px以上。
- 項目一覧は初期状態で非表示。「項目一覧を表示」で必要なときだけ開き、節を選ぶと閉じます。開閉しても教材の幅・入力・開いた用語は保たれます。
- 本文は最大1120pxで中央に配置。導入、波形と操作、進数変換と途中式、文字コード比較を横幅に合わせて組み直し、過度な横伸びと空白を抑えています。

実験の計算やアニメーションは今回の改訂対象に含めません。

## 手元で確認

```powershell
pnpm install --frozen-lockfile
pnpm dev:next
```

`http://localhost:3000/units/02-01/` を開きます。

## GitHubへの送信と公開

```powershell
git remote -v
git push -u origin main
```

GitHubの2027年度用リポジトリで、**Settings → Pages → Build and deployment → Source → GitHub Actions** を選択します。

公開のワークフローは `.github/workflows/deploy-pages.yml` にあります。`main`へのpushで実行され、リポジトリ名から次を自動計算します。

- 公開パス：`/YSFH-Infomatics-2027`
- 公開URL：`https://KeiichiKure.github.io/YSFH-Infomatics-2027`
- 改訂見本：`https://KeiichiKure.github.io/YSFH-Infomatics-2027/units/02-01/`

通常、独自のSecretsや有料サービスの設定は不要です。Actionsを制限している場合は、このリポジトリのワークフローが実行できる設定にします。

初回push時にPagesが未設定で公開に失敗した場合は、上記設定後にActionsの「GitHub Pagesへ公開」を **Re-run all jobs** で再実行するか、ワークフロー一覧の **Run workflow** から新しく実行してください。

公開用ファイル（`github-pages`）の保管期間は既定で1日です。日を置いて **Re-run failed jobs** で公開処理だけを再実行すると、生成済みファイルが期限切れで見つからないことがあります。その場合も、生成から公開まで全体を実行し直します。教材のソースや公開済みページが消えたという意味ではありません。

再実行の公式説明：<https://docs.github.com/en/actions/how-tos/manage-workflow-runs/re-run-workflows-and-jobs>

Pagesの公式説明：<https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site>

## 2027年度の授業利用前に確認する接続先

- ホームのテスト対策アプリは2026年度のアプリです。来年度用を別に作る場合はリンクを変更します。
- 02-04の共有投票は2026年度のGoogle側設定を引き継いでいます。年度を分ける場合は、Google側の保存先と `public/02-04-poll/config.json` の接続先を変更します。
- 02-01の重要語の開閉や節移動には、Google側の設定は不要です。
- `robots.txt` の検索除外を維持し、改訂見本にもnoindexを設定しています。公開URLを知る人は閲覧できます。

## 制作時の共通方針

重要語・まとめ・節番号の表示方針はAGENTS.mdに記載しています。現在の教材と来年度版の作業フォルダーを取り違えないでください。
