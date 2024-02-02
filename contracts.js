{
    "6608d6d6ece9140f4cf3f3ccf1c3a90e59eded8f90ee25bee31d32c6ac197c21": `(async()=>{
        var data = await fetch( 'https://api.coinbase.com/v2/prices/BTC-USD/spot' );
        var json = await data.json();
        var price = Number( json[ "data" ][ "amount" ] );
        if ( price >= contract.target_price ) sendTo( contract.longer );
        else sendTo( contract.shorter );
    })();`
}
