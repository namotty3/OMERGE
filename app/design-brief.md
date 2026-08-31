# Design Brief — O'MERGE Official Site

## Design read
90年代ヴィジュアル系黄金期(MALICE MIZER / Moi dix Mois的な様式美・耽美・退廃)への敬意を捧げるコピーバンド「O'MERGE」の公式サイト。ターゲットは既存ファン・新規リスナー・対バン関係者。感情register: 荘厳で退廃的、静かな熱狂、劇場的な緊張感。

## Concept spine
**stage/spotlight** — 廃墟と化した劇場に一夜だけ灯が戻り、緞帳の奥から一輪の黒薔薇と共にバンドの物語が立ち上がる。全セクションを「舞台」のメタファーで貫く(BIO=戯曲のキャスト表、ライブ記録=公演プログラム、SNS=楽屋への扉)。

## Delivery tier
**cinema**(Lenis+GSAP、Tier-1ヒーローはスクロールスクラブジャーニー)。

## Locked palette
- Background(地): `#0d0508`(ワインを溶かし込んだ黒 — 純黒でも黒鉛でもない、赤みを帯びた漆黒)
- Panel(面): `#1c0a10`(牛血色を沈めたワイン漆黒)
- Accent(単一アクセント): `#8a1538`(乾いた血のような深紅 = 黒薔薇の色)
- Ink(主文字): `#f2e9e4`(骨色がかったパーチメント白)
- Muted(副文字): `#a68a90`(埃をかぶった薄紅鼠)
- Line/metal(罫線・縁取りの中立色。アクセントとしては数えない): `#8f8a82`(古びたピューター)

**正当化:** 禁止パレット群(1: 黒鉛×オレンジ/アンバー, 2: 近黒×ネオンシアン/ブルー/グリーン, 3: ベージュ×真鍮/クレイ/オックスブラッド, 4: AI紫グロー)のいずれとも異なる。地は"ベージュ/クリーム"ではなく赤みを帯びた漆黒であり(3に非該当)、アクセントは紫ではなく乾いた血の深紅(4に非該当)、オレンジ・ネオンも不使用(1・2に非該当)。本セッション内の前回ビルドは存在しない。単一アクセント`#8a1538`をページ全体でロック。

## Locked type
- 和文・本文(ゴシック体): **Zen Kaku Gothic New**
- 和文・装飾見出し: **Shippori Mincho B1**(太めの明朝で装飾的な見出し性格を担保)
- 欧文・ディスプレイ(ロゴタイプ/バンド名/大見出し): **Cinzel Decorative**
- 欧文・補助(キッカー/引用/欧文キャプション): **Cormorant Garamond**(イタリック多用)

**serif正当化:** 本サイトは90年代ヴィジュアル系(MALICE MIZER / Moi dix Mois等)の実際の公式ブランディングが装飾的・バロック的な欧文書体を用いる伝統に立脚したジャンル固有の選択であり、「プレミアム風に見せる」ための汎用的言い訳ではない。ゴシック/耽美系バンドという genuine heritage 文脈での使用。

## Animation mode: animated-website

### Journey shape: single-shot
一体成型の約15秒ワンカット映像を1回の生成で作り、スクロールで最初から最後まで擦る。継ぎ目なし。被写体は「誰も座らない劇場の椅子に置かれた一輪の黒薔薇と灯る蝋燭」ひとつに絞り、カメラは緞帳の隙間からゆっくり押し込んでいく1カット。

### Journey(4 chapters, single-shot上のモーメントにマッピング)
1. **overture**(kicker: "OVERTURE" — サイト全体でこのkickerのみ許可枠1/2を使用) / title: "闇が幕を上げる" / body: "埃をかぶった緞帳の向こう、忘れられた劇場に一本の蝋燭が灯る。" / tags: なし
2. **relic** / title: "薔薇は棘とともに眠る" / body: "誰も座らない椅子の上、黒薔薇が静かに時を数えている。" 
3. **spotlight** / title: "光が跡を追う" / body: "埃の粒が舞台照明の帯を横切り、幕の奥に人影の気配が滲む。"
4. **threshold**(closing chapter, actions: 「物語へ」CTA → #bio へジャンプ) / title: "物語の幕開け" / body: "今宵、O'MERGEの物語がここから始まる。"

**実装注記(Phase 3で確定):** シップされたscroll-scrubエンジンは1シーン=1バンドの
ローカル進捗をクリップの0〜100%全体にマッピングする仕様のため、single-shotで
シーンを4分割すると各バンド境界でクリップが毎回frame 0へ巻き戻る(=カット/逆再
生に見える)。footage contractの「no cuts」を守るため、`scrollScrubScenes`は
**1エントリのみ**とし、上記4ビートは主見出し(overture)+本文+3つのtag断片
(relic/spotlight/threshold の一文)として1つの連続スクラブ内に統合した。
closing CTA(「物語へ」→ #bio)はそのシーンの`actions`としてindex.tsx側で注入。

### World grammar(全プロンプト共通で固定)
Style preamble: "cinematic gothic theater interior, decayed velvet curtains, single dramatic spotlight, dust particles in the air, dark wine-black and blood-crimson palette (#0d0508 ground, #8a1538 accent), warm candlelight key light from camera-left, shallow depth of field, 35mm anamorphic film grain, painterly chiaroscuro, no text, no logos, no watermark, no people, no cuts, no camera shake, slow steady forward push only, locked exposure and white balance"
Perspective: 低めのアイレベル、緞帳の隙間から舞台中央の椅子へ向かうゆっくりとした一直線のプッシュイン。
Palette: 上記ロックパレット厳守。光方向: カメラ左からの蝋燭の暖色キーライト。表面: ビロード・古材・蝋・薔薇の花弁の質感。背景挙動: 舞台奥は常に暗く沈み、コピーが乗る余白を確保。

### Camera architecture
N/A(single-shotのため対象外)。

### Mobile framing
被写体(椅子・薔薇・蝋燭)を中央セーフエリアに収める前提で構図。別途ポートレート素材は生成しない。

### Cost shape
ストーリーボード(6パネルグリッド)1枚 + 本編ワンカット映像1本(seedance_2_0, 15s, 1080p, 16:9)。

### Delivery budget
デスクトップ全クリップ合計 ≤32MiB、モバイル全クリップ合計 ≤16MiB(クリップ数は1本のみなので余裕あり)。

### ジャーニーがコンセプトを体現する一文
一本のワンカットが「開かずの劇場に再び灯が戻る」瞬間そのものを描くことで、コンセプトスパイン(stage/spotlight)を視覚的に先取りし、訪問者自身が幕を上げる観客として物語に入る。

## Section plan(hero含め5セクション、footerはchrome扱いで対象外)
1. **Hero — scroll-scrub journey**(上記)。レイアウトファミリー: cinematic scroll journey。
2. **BIO**(バンド紹介文 + メンバー4名) — レイアウトファミリー: off-grid editorial(バンド紹介の非対称スプリット)+ asymmetric member grid(2x2非対称、等間隔3列トリオは使わない)。eyebrow: "PROFILE"(サイト全体2枠目、これで上限ceil(5/3)=2に到達)。
3. **SNS links** — レイアウトファミリー: banner strip(横長バンド、黒薔薇マクロ写真を背景に敷いた second-read moment)。
4. **過去ライブ記録(Live History)** — レイアウトファミリー: poster-stacked storytelling(公演チラシ風カードのオフセット・スタック)。
5. **予定ライブ(Upcoming Lives)** — レイアウトファミリー: Swiss grid discipline(構造化されたリスト行、divide-y)。
6. Footer(chrome、レイアウトファミリーとしてカウントしない) — SNSリンク再掲 + コピーライト。

4つの異なるレイアウトファミリー(cinematic journey / editorial+asymmetric grid / banner strip / poster-stacked / structured list = 5ファミリー)、連続する同一ファミリーなし。

## Second-read moment
SNSセクションの背景に敷く黒薔薇マクロ写真の一枚流し(macro crop carrying the brand color)。ページ内で一度のみ使用。

## Signature components(4つ)
1. layered image crop frames — メンバーカードをゴシックアーチ型フレームでクロップ。
2. vertical rhythm lines — セクション区切りに縦の罫線(古びたピューター色)。
3. off-grid editorial — BIOバンド紹介文のオフセットレイアウト。
4. turning polaroid arc 変奏 — ライブ記録カードを公演チラシ風にわずかにオフセット・スタックして並べる。

## Narrative spine
**stage/spotlight**(舞台/スポットライト)を全セクションのメタファーとして貫く。

## Asset plan
- ストーリーボード(6パネルグリッド、single-shot用)1枚
- 本編ワンカット映像1本 + 全frame poster
- セクションボード4枚(BIO / SNS / LiveHistory / UpcomingLives)
- ロゴ/モノグラム(O'MERGE エンブレム、黒薔薇+ゴシック紋章)
- カスタムアイコンセット(SNS用: X / Instagram / YouTube / TikTok、装飾モチーフ: 薔薇・蝋燭・棘・十字)
- セクションプレート(ビロード/ダマスク柄のシームレステクスチャ)
- メンバーシンボル画像(4名分、楽器×薔薇の耽美シルエット、実写人物ではなく様式化されたアートワーク)
- ライブ記録用チラシ風ポスター画像2枚
- OGカード/ローンチカバー
- ヘッドキット一式(favicon/apple-touch-icon/maskable icon/site.webmanifest)

## CTA inventory(すべて固有の interaction identity、共有ボタンクラスなし)
1. **JourneyCTA**(closing chapter「物語へ」、#bioへジャンプ): corner-bracket target that closes around the label(ビューファインダー風、hoverでコーナーブラケットが閉じる)。
2. **FollowXButton**(SNSセクション/ナビ/フッターのX実リンク): mono readout that types/decodes the label on hover(hoverでラベルが解読されるようにタイプする)。
3. **LiveDetailStamp**(予定ライブ各行「詳細」): stamp/press — :active で蝋封印(wax seal)のように物理的に押し込まれる。
4. **SetlistToggle**(過去ライブカード「セットリストを見る」): label that splits/slides apart revealing the destination underneath(古びた紙が裂けるようにラベルが割れてセットリストが現れる)。
5. **NavLink**(ナビゲーション): moving hairline(固定ピル型は使わない、細い罫線が移動)。

配給制ガーメント(drawing underline / hover flood-fill / framed block)は0/3使用 — 制限内。

## Anti-convergence ledger
本チャット内での前回ビルドは存在しない(初回ビルド)。次回以降のビルドはこのパレット群・タイプペア・ヒーロー構成・CTAガーメント・角丸言語と異なるものを選ぶこと。角丸言語: **all-sharp**(直角基調、装飾要素以外に丸みを使わない、ゴシック建築的な直線性)。

**例外(書面化):** LiveDetailStamp(蝋封印CTA)とそのseal意匠のみ円形(pill/circle)を許可する。実在の蝋封印(ワックスシール)は本質的に円形であり、モチーフの説得力を優先した唯一の意図的な例外。他の全要素(カード、フレーム、ボタン、画像クロップ)はall-sharpを厳守。
