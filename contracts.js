{
    "6bc1c3c6c7d7f4473f9b794d8b7adb057f480580c452acb2f9f930ba3fa6e152": "(async()=>{var data = await fetch( 'https://api.coinbase.com/v2/prices/BTC-USD/spot' );var json = await data.json();var price = Number( json[ 'data' ][ 'amount' ] );if ( price >= contract.target_price ) sendTo( contract.longer );else sendTo( contract.shorter );})();"
}
