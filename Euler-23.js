class Euler23 {
  constructor( num ) {
    this.abundant = new Array();
    for( var i = 2; i <= until; i++ )
      if( this.func1( i ) > i )
        this.abundant.push( i );
  }
  func1( num ){
    var sum = 1;
    for( var j = 2; j ** 2 <= num; j++ ){
      if( num % j == 0 ){
        if( num == j ** 2)
          sum += j;
        else
          sum += j + num / j;
      }
    }
    return sum;
  }

  func2(num){
    for( var j = 0; this.abundant[ j ] + this.abundant[ 0 ] <= i; j++ )
      for( var k = 0; ( this.abundant[ k ] + this.abundant[ j ] ) <= i; k++ )
        if( num == this.abundant[ j ] + this.abundant[ k ] )
          return 0;
    return 1;
  }

}

var until = 28123;
var euler23 = new Euler23(until);
var ans = 1;
for( var i = 2; i <= until; i++ )
  if( euler23.func2(i) )
    ans += i;
