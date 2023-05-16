# JavaScript ストラテジー
ストラテジーパターンは、特定のタスクに対する代替アルゴリズム（またはストラテジー）をカプセル化します。これにより、メソッドがランタイムで他のメソッド（ストラテジー）に置き換えられ、クライアントが気づかないままに、メソッドを切り替えることができます。基本的に、ストラテジーは交換可能なアルゴリズムグループです。

# ストラテジーの使用
異なるソーティングアルゴリズムのパフォーマンスを数値の配列にテストしたいと思う場合、シェルソート、ヒープソート、バブルソート、クイックソートなどがあります。これらのアルゴリズムにストラテジーパターンを適用することで、テストプログラムはすべてのアルゴリズムをループして、ランタイムで変更して配列に対する各アルゴリズムをテストすることができます。ストラテジーが機能するためには、すべてのメソッドシグネチャが同じである必要がありますので、クライアントプログラムがそれに気づかないままに変更することができます。

JavaScriptでは、拡張可能なフレームワークを構築する際のプラグインメカニズムとして、ストラテジーパターンが広く使用されています。これは非常に効果的なアプローチです。詳細については、Dofactory JSをチェックしてください。

# 例
この例では、商品の注文が倉庫から顧客に送られる必要があります。複数の配送会社を評価して最良の価格を決定する必要があります。これは、顧客が配送オプションを選択し、選択された戦略が配送予想費用を返すショッピングカートで有用です。

配送はコンテキストであり、UPS、USPS、Fedexの3つの配送会社は戦略です。配送会社（戦略）は3回変更され、各回配送費用を計算します。実際のシナリオでは、calculateメソッドは配送業者のWebサービスに呼び出す可能性があります。最後に、異なる費用を表示します。

function GeoCoder() {
  this.getLatLng = function (address) {
    if (address === "Amsterdam") {
      return "52.3700° N, 4.8900° E";
    } else if (address === "London") {
      return "51.5171° N, 0.1062° W";
    } else if (address === "Paris") {
      return "48.8742° N, 2.3470° E";
    } else if (address === "Berlin") {
      return "52.5233° N, 13.4127° E";
    } else {
      return "";
    }
  };
}

function GeoProxy() {
  var geocoder = new GeoCoder();
  var geocache = {};

  return {
    getLatLng: function (address) {
      if (!geocache[address]) {
        geocache[address] = geocoder.getLatLng(address);
      }
      console.log(address + ": " + geocache[address]);
      return geocache[address];
    },
    getCount: function () {
      var count = 0;
      for (var code in geocache) {
        count++;
      }
      return count;
    },
  };
}

function run() {
  var geo = new GeoProxy();

  // geolocation requests
  geo.getLatLng("Paris");
  geo.getLatLng("London");
  geo.getLatLng("London");
  geo.getLatLng("London");
  geo.getLatLng("London");
  geo.getLatLng("Amsterdam");
  geo.getLatLng("Amsterdam");
  geo.getLatLng("Amsterdam");
  geo.getLatLng("Amsterdam");
  geo.getLatLng("London");
  geo.getLatLng("London");

  console.log("\nCache size: " + geo.getCount());
}

run();

// Paris: 48.8742° N, 2.3470° E
// London: 51.5171° N, 0.1062° W
// London: 51.5171° N, 0.1062° W
// London: 51.5171° N, 0.1062° W
// London: 51.5171° N, 0.1062° W
// Amsterdam: 52.3700° N, 4.8900° E
// Amsterdam: 52.3700° N, 4.8900° E
// Amsterdam: 52.3700° N, 4.8900° E
// Amsterdam: 52.3700° N, 4.8900° E
// London: 51.5171° N, 0.1062° W
// London: 51.5171° N, 0.1062° W

// Cache size: 3
